var dp=Object.defineProperty;var pp=(n,t,e)=>t in n?dp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var dt=(n,t,e)=>pp(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const he={},$i=[],Vn=()=>{},af=()=>!1,Ko=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),$o=n=>n.startsWith("onUpdate:"),Te=Object.assign,Mc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},mp=Object.prototype.hasOwnProperty,ee=(n,t)=>mp.call(n,t),Bt=Array.isArray,Ti=n=>Ur(n)==="[object Map]",ns=n=>Ur(n)==="[object Set]",ph=n=>Ur(n)==="[object Date]",Yt=n=>typeof n=="function",Me=n=>typeof n=="string",Wn=n=>typeof n=="symbol",ce=n=>n!==null&&typeof n=="object",lf=n=>(ce(n)||Yt(n))&&Yt(n.then)&&Yt(n.catch),cf=Object.prototype.toString,Ur=n=>cf.call(n),gp=n=>Ur(n).slice(8,-1),hf=n=>Ur(n)==="[object Object]",Sc=n=>Me(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,lr=yc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jo=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},_p=/-\w/g,Cn=Jo(n=>n.replace(_p,t=>t.slice(1).toUpperCase())),vp=/\B([A-Z])/g,as=Jo(n=>n.replace(vp,"-$1").toLowerCase()),uf=Jo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ga=Jo(n=>n?`on${uf(n)}`:""),Hn=(n,t)=>!Object.is(n,t),bo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},ff=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Nr=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let mh;const Zo=()=>mh||(mh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ei(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Me(i)?Sp(i):Ei(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Me(n)||ce(n))return n}const xp=/;(?![^(]*\))/g,yp=/:([^]+)/,Mp=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Sp(n){const t={};return n.replace(Mp,e=>e.startsWith("/*")?"":e).split(xp).forEach(e=>{if(e){const i=e.split(yp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Un(n){let t="";if(Me(n))t=n;else if(Bt(n))for(let e=0;e<n.length;e++){const i=Un(n[e]);i&&(t+=i+" ")}else if(ce(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const bp="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Ep=yc(bp);function df(n){return!!n||n===""}function wp(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Pi(n[s],t[s],e);return i}function gh(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Pi(r,i[a],e)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function Tp(n,t,e){let i=Ti(n),s=Ti(t);if(i||s||(i=ns(n),s=ns(t),i||s))return i&&s?gh(n,t,e):!1;const r=Object.keys(n).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Pi(n[a],t[a],e))return!1}return String(n)===String(t)}function _h(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const o=i(n,t,e);return s.delete(n),r.delete(t),o}function Pi(n,t,e){if(n===t)return!0;let i=ph(n),s=ph(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=Wn(n),s=Wn(t),i||s?n===t:(i=Bt(n),s=Bt(t),i||s?i&&s?_h(n,t,e,wp):!1:(i=ce(n),s=ce(t),i||s?!i||!s?!1:_h(n,t,e,Tp):String(n)===String(t))))}function Ap(n,t){return n.findIndex(e=>Pi(e,t))}const pf=n=>!!(n&&n.__v_isRef===!0),Dt=n=>Me(n)?n:n==null?"":Bt(n)||ce(n)&&(n.toString===cf||!Yt(n.toString))?pf(n)?Dt(n.value):JSON.stringify(n,mf,2):String(n),mf=(n,t)=>pf(t)?mf(n,t.value):Ti(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[_a(i,r)+" =>"]=s,e),{})}:ns(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>_a(e))}:Wn(t)?_a(t):ce(t)&&!Bt(t)&&!hf(t)?String(t):t,_a=(n,t="")=>{var e;return Wn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let De;class gf{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&De&&(De.active?(this.parent=De,this.index=(De.scopes||(De.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=De;try{return De=this,t()}finally{De=e}}}on(){++this._on===1&&(this.prevScope=De,De=this)}off(){if(this._on>0&&--this._on===0){if(De===this)De=this.prevScope;else{let t=De;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Rp(n){return new gf(n)}function Cp(){return De}let ue;const va=new WeakSet;class _f{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,De&&(De.active?De.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,va.has(this)&&(va.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||xf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vh(this),yf(this);const t=ue,e=Pn;ue=this,Pn=!0;try{return this.fn()}finally{Mf(this),ue=t,Pn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)wc(t);this.deps=this.depsTail=void 0,vh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?va.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_l(this)&&this.run()}get dirty(){return _l(this)}}let vf=0,cr,hr;function xf(n,t=!1){if(n.flags|=8,t){n.next=hr,hr=n;return}n.next=cr,cr=n}function bc(){vf++}function Ec(){if(--vf>0)return;if(hr){let t=hr;for(hr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;cr;){let t=cr;for(cr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function yf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Mf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),wc(i),Pp(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function _l(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Sf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Sf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Sr)||(n.globalVersion=Sr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!_l(n))))return;n.flags|=2;const t=n.dep,e=ue,i=Pn;ue=n,Pn=!0;try{yf(n);const s=n.fn(n._value);(t.version===0||Hn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{ue=e,Pn=i,Mf(n),n.flags&=-3}}function wc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)wc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Pp(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Pn=!0;const bf=[];function Xn(){bf.push(Pn),Pn=!1}function Yn(){const n=bf.pop();Pn=n===void 0?!0:n}function vh(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=ue;ue=void 0;try{t()}finally{ue=e}}}let Sr=0;class Lp{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Tc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ue||!Pn||ue===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ue)e=this.activeLink=new Lp(ue,this),ue.deps?(e.prevDep=ue.depsTail,ue.depsTail.nextDep=e,ue.depsTail=e):ue.deps=ue.depsTail=e,Ef(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=ue.depsTail,e.nextDep=void 0,ue.depsTail.nextDep=e,ue.depsTail=e,ue.deps===e&&(ue.deps=i)}return e}trigger(t){this.version++,Sr++,this.notify(t)}notify(t){bc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ec()}}}function Ef(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Ef(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const vl=new WeakMap,ts=Symbol(""),xl=Symbol(""),br=Symbol("");function Fe(n,t,e){if(Pn&&ue){let i=vl.get(n);i||vl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Tc),s.map=i,s.key=e),s.track()}}function li(n,t,e,i,s,r){const o=vl.get(n);if(!o){Sr++;return}const a=l=>{l&&l.trigger()};if(bc(),t==="clear")o.forEach(a);else{const l=Bt(n),c=l&&Sc(e);if(l&&e==="length"){const h=Number(i);o.forEach((f,u)=>{(u==="length"||u===br||!Wn(u)&&u>=h)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(br)),t){case"add":l?c&&a(o.get("length")):(a(o.get(ts)),Ti(n)&&a(o.get(xl)));break;case"delete":l||(a(o.get(ts)),Ti(n)&&a(o.get(xl)));break;case"set":Ti(n)&&a(o.get(ts));break}}Ec()}function us(n){const t=se(n);return t===n||(Fe(t,"iterate",br),vn(n))?t:qn(n)?Ai(n)?t.map(e=>Li(xn(e))):t.map(Li):t.map(xn)}function Qo(n){return Fe(n=se(n),"iterate",br),n}function On(n,t){return qn(n)?Li(Ai(n)?xn(t):t):xn(t)}const Ip={__proto__:null,[Symbol.iterator](){return xa(this,Symbol.iterator,n=>On(this,n))},concat(...n){return us(this).concat(...n.map(t=>Bt(t)?us(t):t))},entries(){return xa(this,"entries",n=>(n[1]=On(this,n[1]),n))},every(n,t){return Jn(this,"every",n,t,void 0,arguments)},filter(n,t){return Jn(this,"filter",n,t,e=>e.map(i=>On(this,i)),arguments)},find(n,t){return Jn(this,"find",n,t,e=>On(this,e),arguments)},findIndex(n,t){return Jn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Jn(this,"findLast",n,t,e=>On(this,e),arguments)},findLastIndex(n,t){return Jn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Jn(this,"forEach",n,t,void 0,arguments)},includes(...n){return ya(this,"includes",n)},indexOf(...n){return ya(this,"indexOf",n)},join(n){return us(this).join(n)},lastIndexOf(...n){return ya(this,"lastIndexOf",n)},map(n,t){return Jn(this,"map",n,t,void 0,arguments)},pop(){return js(this,"pop")},push(...n){return js(this,"push",n)},reduce(n,...t){return yh(this,"reduce",n,t)},reduceRight(n,...t){return yh(this,"reduceRight",n,t)},shift(){return js(this,"shift")},some(n,t){return Jn(this,"some",n,t,void 0,arguments)},splice(...n){return js(this,"splice",n)},toReversed(){return us(this).toReversed()},toSorted(n){return us(this).toSorted(n)},toSpliced(...n){return us(this).toSpliced(...n)},unshift(...n){return js(this,"unshift",n)},values(){return xa(this,"values",n=>On(this,n))}};function xa(n,t,e){const i=Qo(n),s=i[t],r=s.call(i);if(i!==n&&!vn(n)){if(r[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(r));return o.next=()=>xh(r.next(),e),s!==wf[t]&&Object.defineProperties(o,{return:{get(){const a=r.return;return typeof a=="function"?a.bind(r):a}},throw:{get(){const a=r.throw;return typeof a=="function"?a.bind(r):a}}}),o}r._next=r.next,r.next=()=>xh(r._next(),e)}return r}function xh(n,t){return n.done||(n.value=t(n.value)),n}const wf=Array.prototype;function Jn(n,t,e,i,s,r){const o=Qo(n),a=o!==n&&!vn(n),l=o[t];if(l!==wf[t]){const f=l.apply(n,r);return a?xn(f):f}let c=e;o!==n&&(a?c=function(f,u){return e.call(this,On(n,f),u,n)}:e.length>2&&(c=function(f,u){return e.call(this,f,u,n)}));const h=l.call(o,c,i);return a&&s?s(h):h}function yh(n,t,e,i){const s=Qo(n),r=s!==n&&!vn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,h,f){return a&&(a=!1,c=On(n,c)),e.call(this,c,On(n,h),f,n)}):e.length>3&&(o=function(c,h,f){return e.call(this,c,h,f,n)}));const l=s[t](o,...i);return a?On(n,l):l}function ya(n,t,e){const i=se(n);Fe(i,"iterate",br);const s=i[t](...e);return(s===-1||s===!1)&&Pc(e[0])?(e[0]=se(e[0]),i[t](...e)):s}function js(n,t,e=[]){Xn(),bc();const i=se(n)[t].apply(n,e);return Ec(),Yn(),i}const Dp=yc("__proto__,__v_isRef,__isVue"),Tf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Wn));function Up(n){Wn(n)||(n=String(n));const t=se(this);return Fe(t,"has",n),t.hasOwnProperty(n)}class Af{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Wp:Lf:r?Pf:Cf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Bt(t);if(!s){let l;if(o&&(l=Ip[e]))return l;if(e==="hasOwnProperty")return Up}const a=Reflect.get(t,e,ke(t)?t:i);if((Wn(e)?Tf.has(e):Dp(e))||(s||Fe(t,"get",e),r))return a;if(ke(a)){const l=o&&Sc(e)?a:a.value;return s&&ce(l)?Ml(l):l}return ce(a)?s?Ml(a):Rc(a):a}}class Rf extends Af{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Bt(t)&&Sc(e);if(!this._isShallow){const c=qn(r);if(!vn(i)&&!qn(i)&&(r=se(r),i=se(i)),!o&&ke(r)&&!ke(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:ee(t,e),l=Reflect.set(t,e,i,ke(t)?t:s);return t===se(s)&&l&&(a?Hn(i,r)&&li(t,"set",e,i):li(t,"add",e,i)),l}deleteProperty(t,e){const i=ee(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&li(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Wn(e)||!Tf.has(e))&&Fe(t,"has",e),i}ownKeys(t){return Fe(t,"iterate",Bt(t)?"length":ts),Reflect.ownKeys(t)}}class Np extends Af{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Op=new Rf,Fp=new Np,Bp=new Rf(!0);const yl=n=>n,Wr=n=>Reflect.getPrototypeOf(n);function kp(n,t,e){return function(...i){const s=this.__v_raw,r=se(s),o=Ti(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=e?yl:t?Li:xn;return!t&&Fe(r,"iterate",l?xl:ts),Te(Object.create(c),{next(){const{value:f,done:u}=c.next();return u?{value:f,done:u}:{value:a?[h(f[0]),h(f[1])]:h(f),done:u}}})}}function Xr(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function zp(n,t){const e={get(s){const r=this.__v_raw,o=se(r),a=se(s);n||(Hn(s,a)&&Fe(o,"get",s),Fe(o,"get",a));const{has:l}=Wr(o),c=t?yl:n?Li:xn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Fe(se(s),"iterate",ts),s.size},has(s){const r=this.__v_raw,o=se(r),a=se(s);return n||(Hn(s,a)&&Fe(o,"has",s),Fe(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=se(a),c=t?yl:n?Li:xn;return!n&&Fe(l,"iterate",ts),a.forEach((h,f)=>s.call(r,c(h),c(f),o))}};return Te(e,n?{add:Xr("add"),set:Xr("set"),delete:Xr("delete"),clear:Xr("clear")}:{add(s){const r=se(this),o=Wr(r),a=se(s),l=!t&&!vn(s)&&!qn(s)?a:s;return o.has.call(r,l)||Hn(s,l)&&o.has.call(r,s)||Hn(a,l)&&o.has.call(r,a)||(r.add(l),li(r,"add",l,l)),this},set(s,r){!t&&!vn(r)&&!qn(r)&&(r=se(r));const o=se(this),{has:a,get:l}=Wr(o);let c=a.call(o,s);c||(s=se(s),c=a.call(o,s));const h=l.call(o,s);return o.set(s,r),c?Hn(r,h)&&li(o,"set",s,r):li(o,"add",s,r),this},delete(s){const r=se(this),{has:o,get:a}=Wr(r);let l=o.call(r,s);l||(s=se(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&li(r,"delete",s,void 0),c},clear(){const s=se(this),r=s.size!==0,o=s.clear();return r&&li(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=kp(s,n,t)}),e}function Ac(n,t){const e=zp(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_isShallow"?t:s==="__v_raw"?i:Reflect.get(ee(e,s)&&s in i?e:i,s,r)}const Hp={get:Ac(!1,!1)},Vp={get:Ac(!1,!0)},Gp={get:Ac(!0,!1)};const Cf=new WeakMap,Pf=new WeakMap,Lf=new WeakMap,Wp=new WeakMap;function Xp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rc(n){return qn(n)?n:Cc(n,!1,Op,Hp,Cf)}function Yp(n){return Cc(n,!1,Bp,Vp,Pf)}function Ml(n){return Cc(n,!0,Fp,Gp,Lf)}function Cc(n,t,e,i,s){if(!ce(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Xp(gp(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Ai(n){return qn(n)?Ai(n.__v_raw):!!(n&&n.__v_isReactive)}function qn(n){return!!(n&&n.__v_isReadonly)}function vn(n){return!!(n&&n.__v_isShallow)}function Pc(n){return n?!!n.__v_raw:!1}function se(n){const t=n&&n.__v_raw;return t?se(t):n}function If(n){return!ee(n,"__v_skip")&&Object.isExtensible(n)&&ff(n,"__v_skip",!0),n}const xn=n=>ce(n)?Rc(n):n,Li=n=>ce(n)?Ml(n):n;function ke(n){return n?n.__v_isRef===!0:!1}function Ze(n){return qp(n,!1)}function qp(n,t){return ke(n)?n:new jp(n,t)}class jp{constructor(t,e){this.dep=new Tc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:se(t),this._value=e?t:xn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||vn(t)||qn(t);t=i?t:se(t),Hn(t,e)&&(this._rawValue=t,this._value=i?t:xn(t),this.dep.trigger())}}function _e(n){return ke(n)?n.value:n}const Kp={get:(n,t,e)=>t==="__v_raw"?n:_e(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return ke(s)&&!ke(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Df(n){return Ai(n)?n:new Proxy(n,Kp)}class $p{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Tc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Sr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ue!==this)return xf(this,!0),!0}get value(){const t=this.dep.track();return Sf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Jp(n,t,e=!1){let i,s;return Yt(n)?i=n:(i=n.get,s=n.set),new $p(i,s,e)}const Yr={},Uo=new WeakMap;let Wi;function Zp(n,t=!1,e=Wi){if(e){let i=Uo.get(e);i||Uo.set(e,i=[]),i.push(n)}}function Qp(n,t,e=he){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=E=>s?E:vn(E)||s===!1||s===0?ci(E,1):ci(E);let h,f,u,d,g=!1,_=!1;if(ke(n)?(f=()=>n.value,g=vn(n)):Ai(n)?(f=()=>c(n),g=!0):Bt(n)?(_=!0,g=n.some(E=>Ai(E)||vn(E)),f=()=>n.map(E=>{if(ke(E))return E.value;if(Ai(E))return c(E);if(Yt(E))return l?l(E,2):E()})):Yt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(u){Xn();try{u()}finally{Yn()}}const E=Wi;Wi=h;try{return l?l(n,3,[d]):n(d)}finally{Wi=E}}:f=Vn,t&&s){const E=f,k=s===!0?1/0:s;f=()=>ci(E(),k)}const m=Cp(),p=()=>{h.stop(),m&&m.active&&Mc(m.effects,h)};if(r&&t){const E=t;t=(...k)=>{try{return E(...k)}finally{p()}}}let T=_?new Array(n.length).fill(Yr):Yr;const M=E=>{if(!(!(h.flags&1)||!h.dirty&&!E))if(t){const k=h.run();if(E||s||g||(_?k.some((R,C)=>Hn(R,T[C])):Hn(k,T))){const R=Wi;Xn();try{u&&u(),Wi=h;const C=[k,T===Yr?void 0:_&&T[0]===Yr?[]:T,d];T=k,l?l(t,3,C):t(...C)}finally{Wi=R,Yn()}}}else h.run()};return a&&a(M),h=new _f(f),h.scheduler=o?()=>o(M,!1):M,d=E=>Zp(E,!1,h),u=h.onStop=()=>{const E=Uo.get(h);if(E){if(l)l(E,4);else for(const k of E)k();Uo.delete(h)}},t?i?M(!0):T=h.run():o?o(M.bind(null,!0),!0):h.run(),p.pause=h.pause.bind(h),p.resume=h.resume.bind(h),p.stop=p,p}function ci(n,t=1/0,e){if(t<=0||!ce(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,ke(n))ci(n.value,t,e);else if(Bt(n))for(let i=0;i<n.length;i++)ci(n[i],t,e);else if(ns(n)||Ti(n))n.forEach(i=>{ci(i,t,e)});else if(hf(n)){for(const i in n)ci(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ci(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Or(n,t,e,i){try{return i?n(...i):n()}catch(s){ta(s,t,e)}}function Ln(n,t,e,i){if(Yt(n)){const s=Or(n,t,e,i);return s&&lf(s)&&s.catch(r=>{ta(r,t,e,void 0,!0)}),s}if(Bt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Ln(n[r],t,e,i));return s}}function ta(n,t,e,i=!0,s=!1){const r=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||he;if(t){let l=t.parent;const c=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${e}`;for(;l;){const f=l.ec;if(f&&!l.isUnmounted&&(!s||l.scope.active)){for(let u=0;u<f.length;u++)if(f[u](n,c,h)===!1)return}l=l.parent}if(o){Xn(),Or(o,null,10,[n,c,h]),Yn();return}}tm(n,e,r,i,a)}function tm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Ge=[];let En=-1;const Fn=[];let Si=null,Ts=0;const Uf=Promise.resolve();let No=null;function Nf(n){const t=No||Uf;return n?t.then(this?n.bind(this):n):t}function em(n){let t=En+1,e=Ge.length;for(;t<e;){const i=t+e>>>1,s=Ge[i],r=Er(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Lc(n){if(!(n.flags&1)){const t=Er(n),e=Ge[Ge.length-1];!e||!(n.flags&2)&&t>=Er(e)?Ge.push(n):Ge.splice(em(t),0,n),n.flags|=1,Of()}}function Of(){No||(No=Uf.then(kf))}function nm(n){if(!Bt(n))Si&&n.id===-1?Si.splice(Ts+1,0,n):n.flags&1||(Fn.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)Fn.push(n[t]);Of()}function Ff(n,t,e,i=En+1){for(;i<Ge.length;i++){const s=Ge[i];if(s&&s.flags&2){if(n&&s.id!==n.uid||t!==void 0&&!(s.id>=t))continue;Ge.splice(i,1),i=n?i-1:En,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Bf(n,t,e=0){if(Fn.length){let i=Fn,s=0;if(t){i=[];for(let o=0;o<Fn.length;o++){const a=Fn[o];(a.i!==void 0?!a.i||a.i.uid<e:t.has(a))?Fn[s++]=a:i.push(a)}}const r=[...new Set(i)].sort((o,a)=>Er(o)-Er(a));if(Fn.length=s,Si){for(let o=0;o<r.length;o++)Si.push(r[o]);return}for(Si=r,Ts=0;Ts<Si.length;Ts++){const o=Si[Ts];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Si=null,Ts=0}}let Ma=!1;function im(n,t){if(Ma){n();return}const e=t===void 0?void 0:new Set(Fn);n(),Ma=!0;try{Ff(void 0,t),Bf(void 0,e,t)}finally{Ma=!1}}const Er=n=>n.id==null?n.flags&2?-1:1/0:n.id;function kf(n){try{for(En=0;En<Ge.length;En++){const t=Ge[En];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Or(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;En<Ge.length;En++){const t=Ge[En];t&&(t.flags&=-2)}En=-1,Ge.length=0,Bf(),No=null,(Ge.length||Fn.length)&&kf()}}let _n=null,zf=null;function Oo(n){const t=_n;return _n=n,zf=n&&n.type.__scopeId||null,t}function sm(n,t=_n,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Lh(-1);const r=Oo(t),o=es.length;let a;try{a=n(...s)}finally{for(let l=es.length;l>o;l--)ud();Oo(r),i._d&&Lh(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ks(n,t){if(_n===null)return n;const e=sa(_n),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=he]=t[s];r&&(Yt(r)&&(r={mounted:r,updated:r}),r.deep&&ci(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Oi(n,t,e,i){let s=n;if(i==="beforeMount")n._mount=n;else if(i==="beforeUpdate"){const a=t&&t._mount;a&&(a._latest=n,n._mount=a)}else if(i==="mounted"){const a=n._latest;n._mount=n._latest=void 0,a&&(s=a,a._mount=void 0)}const r=s.dirs,o=t&&t.dirs;for(let a=0;a<r.length;a++){let l=r[a];o?l.oldValue=o[a].value:i==="mounted"&&l.oldValue!==void 0&&(l=Te({},l,{oldValue:void 0}));let c=l.dir[i];c&&(Xn(),Ln(c,e,8,[n.el,l,s,t]),Yn())}}function rm(n,t){if(We){let e=We.provides;const i=We.parent&&We.parent.provides;i===e&&(e=We.provides=Object.create(i)),e[n]=t}}function Eo(n,t,e=!1){const i=s0();if(i||Ps){let s=Ps?Ps._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Yt(t)?t.call(i&&i.proxy):t}}const om=Symbol.for("v-scx"),am=()=>Eo(om);function ur(n,t,e){return Hf(n,t,e)}function Hf(n,t,e=he){const{immediate:i,deep:s,flush:r,once:o}=e,a=Te({},e),l=t&&i||!t&&r!=="post";let c;if(Rr){if(r==="sync"){const d=am();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Vn,d.resume=Vn,d.pause=Vn,d}}const h=We;a.call=(d,g,_)=>Ln(d,h,g,_);let f=!1;r==="post"?a.scheduler=d=>{d.i=h,He(d,h&&h.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():Lc(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,h&&(d.id=h.uid,d.i=h))};const u=Qp(n,t,a);return Rr&&(c?c.push(u):l&&u()),u}function lm(n,t,e){const i=this.proxy,s=Me(n)?n.includes(".")?Vf(i,n):()=>i[n]:n.bind(i,i);let r;Yt(t)?r=t:(r=t.handler,e=t);const o=Fr(this),a=Hf(s,r.bind(i),e);return o(),a}function Vf(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const cm=Symbol("_vte"),ea=n=>n.__isTeleport,Sa=Symbol("_leaveCb");function hm(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==In){t=e;break}}return t}function Gf(n){if(!Ic(n))return ea(n.type)&&n.children?hm(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Yt(e.default))return e.default()}}function fr(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;fr(ea(e.type)&&Gf(e)||e,t)}else if(n.shapeFlag&128){const e=n.suspense;if(e){const i=e.isHydrating?e.pendingBranch:e.activeBranch;i&&fr(i,t.clone(i))}else n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)}else if(n.transition=t,n.type===ve&&Bt(n.children)){const e=Zf(n.children,!1);e&&fr(e,t)}}function Sl(n){if(n.component)return Sl(n.component.subTree);if(n.type===ve){const t=Bt(n.children)&&Zf(n.children,!1);return t?Sl(t):void 0}if(n.type!==In)return n}function um(n,t){return Yt(n)?Te({name:n.name},t,{setup:n}):n}function Wf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Mh(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Fo=new WeakMap;function dr(n,t,e,i,s=!1){if(Bt(n)){n.forEach((_,m)=>dr(_,t&&(Bt(t)?t[m]:t),e,i,s));return}if(pr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&dr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?sa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,h=a.refs===he?a.refs={}:a.refs,f=a.setupState,u=se(f),d=f===he?af:_=>Mh(h,_)?!1:ee(u,_),g=(_,m)=>!(m&&Mh(h,m));if(c!=null&&c!==l){if(Sh(t),Me(c))h[c]=null,d(c)&&(f[c]=null);else if(ke(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(h[_.k]=null)}}if(Yt(l))Or(l,a,12,[o,h]);else{const _=Me(l),m=ke(l);if(_||m){const p=()=>{if(n.f){const T=_?d(l)?f[l]:h[l]:g()||!n.k?l.value:h[n.k];if(s)Bt(T)&&Mc(T,r);else if(Bt(T))T.includes(r)||T.push(r);else if(_)h[l]=[r],d(l)&&(f[l]=h[l]);else{const M=[r];g(l,n.k)&&(l.value=M),n.k&&(h[n.k]=M)}}else _?(h[l]=o,d(l)&&(f[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(h[n.k]=o))};if(o){const T=()=>{p(),Fo.delete(n)};T.id=-1,Fo.set(n,T),He(T,e)}else Sh(n),p()}}}function Sh(n){const t=Fo.get(n);t&&(t.flags|=8,Fo.delete(n))}Zo().requestIdleCallback;Zo().cancelIdleCallback;const pr=n=>!!n.type.__asyncLoader,Ic=n=>n.type.__isKeepAlive;function fm(n,t){Xf(n,"a",t)}function dm(n,t){Xf(n,"da",t)}function Xf(n,t,e=We){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(wr(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Ic(s.parent.vnode)&&pm(i,t,e,s),s=s.parent}}function pm(n,t,e,i){const s=wr(t,n,i,!0),r=wr("um",()=>Mc(i[t],s),e);r.flags=16}function wr(n,t,e=We,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Xn();const a=Fr(e),l=Ln(t,e,n,o);return a(),Yn(),l});return i?s.unshift(r):s.push(r),r}}const pi=n=>(t,e=We)=>{(!Rr||n==="sp")&&wr(n,(...i)=>t(...i),e)},mm=pi("bm"),Yf=pi("m"),gm=pi("bu"),_m=pi("u"),qf=pi("bum"),vm=pi("um"),xm=pi("sp"),ym=pi("rtg"),Mm=pi("rtc");function Sm(n,t=We){wr("ec",n,t)}const bm=Symbol.for("v-ndc");function Zn(n,t,e,i){let s;const r=e,o=Bt(n);if(o||Me(n)){const a=o&&Ai(n);let l=!1,c=!1;a&&(l=!vn(n),c=qn(n),n=Qo(n)),s=new Array(n.length);for(let h=0,f=n.length;h<f;h++)s[h]=t(l?c?Li(xn(n[h])):xn(n[h]):n[h],h,void 0,r)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)s=[];else{s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(ce(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const h=a[l];s[l]=t(n[h],h,l,r)}}else s=[];return s}const bl=n=>n?md(n)?sa(n):bl(n.parent):null,mr=Te(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>bl(n.parent),$root:n=>bl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Kf(n),$forceUpdate:n=>n.f||(n.f=()=>{Lc(n.update)}),$nextTick:n=>n.n||(n.n=Nf.bind(n.proxy)),$watch:n=>lm.bind(n)}),ba=(n,t)=>n!==he&&!n.__isScriptSetup&&ee(n,t),Em={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const u=o[t];if(u!==void 0)switch(u){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(ba(i,t))return o[t]=1,i[t];if(s!==he&&ee(s,t))return o[t]=2,s[t];if(ee(r,t))return o[t]=3,r[t];if(e!==he&&ee(e,t))return o[t]=4,e[t];El&&(o[t]=0)}}const c=mr[t];let h,f;if(c)return t==="$attrs"&&Fe(n.attrs,"get",""),c(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==he&&ee(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,ee(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return ba(s,t)?(s[t]=e,!0):i!==he&&ee(i,t)?(i[t]=e,!0):ee(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==he&&a[0]!=="$"&&ee(n,a)||ba(t,a)||ee(r,a)||ee(i,a)||ee(mr,a)||ee(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ee(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function bh(n){return Bt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let El=!0;function wm(n){const t=Kf(n),e=n.proxy,i=n.ctx;El=!1,t.beforeCreate&&Eh(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:f,mounted:u,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:M,unmounted:E,render:k,renderTracked:R,renderTriggered:C,errorCaptured:F,serverPrefetch:st,expose:x,inheritAttrs:b,components:W,directives:X,filters:Q}=t;if(c&&Tm(c,i,null),o)for(const it in o){const H=o[it];Yt(H)&&(i[it]=H.bind(e))}if(s){const it=s.call(e,e);ce(it)&&(n.data=Rc(it))}if(El=!0,r)for(const it in r){const H=r[it],gt=Yt(H)?H.bind(e,e):Yt(H.get)?H.get.bind(e,e):Vn,at=!Yt(H)&&Yt(H.set)?H.set.bind(e):Vn,L=an({get:gt,set:at});Object.defineProperty(i,it,{enumerable:!0,configurable:!0,get:()=>L.value,set:It=>L.value=It})}if(a)for(const it in a)jf(a[it],i,e,it);if(l){const it=Yt(l)?l.call(e):l;Reflect.ownKeys(it).forEach(H=>{rm(H,it[H])})}h&&Eh(h,n,"c");function V(it,H){Bt(H)?H.forEach(gt=>it(gt.bind(e))):H&&it(H.bind(e))}if(V(mm,f),V(Yf,u),V(gm,d),V(_m,g),V(fm,_),V(dm,m),V(Sm,F),V(Mm,R),V(ym,C),V(qf,T),V(vm,E),V(xm,st),Bt(x))if(x.length){const it=n.exposed||(n.exposed={});x.forEach(H=>{Object.defineProperty(it,H,{get:()=>e[H],set:gt=>e[H]=gt,enumerable:!0})})}else n.exposed||(n.exposed={});k&&n.render===Vn&&(n.render=k),b!=null&&(n.inheritAttrs=b),W&&(n.components=W),X&&(n.directives=X),st&&Wf(n)}function Tm(n,t,e=Vn){Bt(n)&&(n=wl(n));for(const i in n){const s=n[i];let r;ce(s)?"default"in s?r=Eo(s.from||i,s.default,!0):r=Eo(s.from||i):r=Eo(s),ke(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Eh(n,t,e){Ln(Bt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function jf(n,t,e,i){let s=i.includes(".")?Vf(e,i):()=>e[i];if(Me(n)){const r=t[n];Yt(r)&&ur(s,r)}else if(Yt(n))ur(s,n.bind(e));else if(ce(n))if(Bt(n))n.forEach(r=>jf(r,t,e,i));else{const r=Yt(n.handler)?n.handler.bind(e):t[n.handler];Yt(r)&&ur(s,r,n)}}function Kf(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Bo(l,c,o,!0)),Bo(l,t,o)),ce(t)&&r.set(t,l),l}function Bo(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Bo(n,r,e,!0),s&&s.forEach(o=>Bo(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Am[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Am={data:wh,props:Th,emits:Th,methods:rr,computed:rr,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:rr,directives:rr,watch:Cm,provide:wh,inject:Rm};function wh(n,t){return t?n?function(){return Te(Yt(n)?n.call(this,this):n,Yt(t)?t.call(this,this):t)}:t:n}function Rm(n,t){return rr(wl(n),wl(t))}function wl(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function ze(n,t){return n?[...new Set([].concat(n,t))]:t}function rr(n,t){return n?Te(Object.create(null),n,t):t}function Th(n,t){return n?Bt(n)&&Bt(t)?[...new Set([...n,...t])]:Te(Object.create(null),bh(n),bh(t??{})):t}function Cm(n,t){if(!n)return t;if(!t)return n;const e=Te(Object.create(null),n);for(const i in t)e[i]=ze(n[i],t[i]);return e}function $f(){return{app:null,config:{isNativeTag:af,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pm=0;function Lm(n,t){return function(i,s=null){Yt(i)||(i=Te({},i)),s!=null&&!ce(s)&&(s=null);const r=$f(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Pm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:h0,get config(){return r.config},set config(h){},use(h,...f){return o.has(h)||(h&&Yt(h.install)?(o.add(h),h.install(c,...f)):Yt(h)&&(o.add(h),h(c,...f))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,f){return f?(r.components[h]=f,c):r.components[h]},directive(h,f){return f?(r.directives[h]=f,c):r.directives[h]},mount(h,f,u){if(!l){const d=c._ceVNode||fi(i,s);return d.appContext=r,u===!0?u="svg":u===!1&&(u=void 0),n(d,h,u),l=!0,c._container=h,h.__vue_app__=c,sa(d.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Ln(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,f){return r.provides[h]=f,c},runWithContext(h){const f=Ps;Ps=c;try{return h()}finally{Ps=f}}};return c}}let Ps=null;const Im=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Cn(t)}Modifiers`]||n[`${as(t)}Modifiers`];function Dm(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||he;let s=e;const r=t.startsWith("update:"),o=r&&Im(i,t.slice(7));o&&(o.trim&&(s=e.map(h=>Me(h)?h.trim():h)),o.number&&(s=s.map(Nr)));let a,l=i[a=ga(t)]||i[a=ga(Cn(t))];!l&&r&&(l=i[a=ga(as(t))]),l&&Ln(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Ln(c,n,6,s)}}const Um=new WeakMap;function Jf(n,t,e=!1){const i=e?Um:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Yt(n)){const l=c=>{const h=Jf(c,t,!0);h&&(a=!0,Te(o,h))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ce(n)&&i.set(n,null),null):(Bt(r)?r.forEach(l=>o[l]=null):Te(o,r),ce(n)&&i.set(n,o),o)}function na(n,t){return!n||!Ko(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ee(n,t[0].toLowerCase()+t.slice(1))||ee(n,as(t))||ee(n,t))}function Ah(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:f,data:u,setupState:d,ctx:g,inheritAttrs:_}=n,m=Oo(n);let p,T;try{if(e.shapeFlag&4){const E=s||i,k=E;p=Bn(c.call(k,E,h,f,d,u,g)),T=a}else{const E=t;p=Bn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),T=t.props?a:Nm(a)}}catch(E){es.length=0,ta(E,n,1),p=fi(In)}let M=p;if(T&&_!==!1){const E=Object.keys(T),{shapeFlag:k}=M;E.length&&k&7&&(r&&E.some($o)&&(T=Om(T,r)),M=Os(M,T,!1,!0))}if(e.dirs&&(M=Os(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(e.dirs):e.dirs),e.transition){const E=ea(M.type)&&Gf(M)||M;fr(E,e.transition)}return p=M,Oo(m),p}function Zf(n,t=!0){let e;for(let i=0;i<n.length;i++){const s=n[i];if(Nc(s)){if(s.type!==In||s.children==="v-if"){if(e)return;e=s}}else return}return e}const Nm=n=>{let t;for(const e in n)(e==="class"||e==="style"||Ko(e))&&((t||(t={}))[e]=n[e]);return t},Om=(n,t)=>{const e={};for(const i in n)(!$o(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Fm(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Rh(i,o,c):!!o;if(l&8){const h=t.dynamicProps;for(let f=0;f<h.length;f++){const u=h[f];if(Qf(o,i,u)&&!na(c,u))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Rh(i,o,c):!0:!!o;return!1}function Rh(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!ee(n,r)||Qf(t,n,r)&&!na(e,r))return!0}return!1}function Qf(n,t,e){const i=n[e],s=t[e];return e==="style"&&ce(i)&&ce(s)?!Pi(i,s):i!==s}function Bm({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const td={},ed=()=>Object.create(td),nd=n=>Object.getPrototypeOf(n)===td;function km(n,t,e,i=!1){const s={},r=ed();n.propsDefaults=Object.create(null),id(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:Yp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function zm(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=se(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let f=0;f<h.length;f++){let u=h[f];if(na(n.emitsOptions,u))continue;const d=t[u];if(l)if(ee(r,u))d!==r[u]&&(r[u]=d,c=!0);else{const g=Cn(u);s[g]=Tl(l,a,g,d,n,!1)}else d!==r[u]&&(r[u]=d,c=!0)}}}else{id(n,t,s,r)&&(c=!0);let h;for(const f in a)(!t||!ee(t,f)&&((h=as(f))===f||!ee(t,h)))&&(l?e&&(e[f]!==void 0||e[h]!==void 0)&&(s[f]=Tl(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!t||!ee(t,f))&&(delete r[f],c=!0)}c&&li(n.attrs,"set","")}function id(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(lr(l))continue;const c=t[l];let h;s&&ee(s,h=Cn(l))?!r||!r.includes(h)?e[h]=c:(a||(a={}))[h]=c:na(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=se(e),c=a||he;for(let h=0;h<r.length;h++){const f=r[h];e[f]=Tl(s,l,f,c[f],n,!ee(c,f))}}return o}function Tl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=ee(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Yt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const h=Fr(s);i=c[e]=l.call(null,t),h()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===as(e))&&(i=!0))}return i}const Hm=new WeakMap;function sd(n,t,e=!1){const i=e?Hm:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Yt(n)){const h=f=>{l=!0;const[u,d]=sd(f,t,!0);Te(o,u),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return ce(n)&&i.set(n,$i),$i;if(Bt(r))for(let h=0;h<r.length;h++){const f=Cn(r[h]);Ch(f)&&(o[f]=he)}else if(r)for(const h in r){const f=Cn(h);if(Ch(f)){const u=r[h],d=o[f]=Bt(u)||Yt(u)?{type:u}:Te({},u),g=d.type;let _=!1,m=!0;if(Bt(g))for(let p=0;p<g.length;++p){const T=g[p],M=Yt(T)&&T.name;if(M==="Boolean"){_=!0;break}else M==="String"&&(m=!1)}else _=Yt(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||ee(d,"default"))&&a.push(f)}}const c=[o,a];return ce(n)&&i.set(n,c),c}function Ch(n){return n[0]!=="$"&&!lr(n)}const Dc=n=>n==="_"||n==="_ctx"||n==="$stable",Uc=n=>Bt(n)?n.map(Bn):[Bn(n)],Vm=(n,t,e)=>{if(t._n)return t;const i=sm((...s)=>Uc(t(...s)),e);return i._c=!1,i},rd=(n,t,e)=>{const i=n._ctx;for(const s in n){if(Dc(s))continue;const r=n[s];if(Yt(r))t[s]=Vm(s,r,i);else if(r!=null){const o=Uc(r);t[s]=()=>o}}},od=(n,t)=>{const e=Uc(t);n.slots.default=()=>e},ad=(n,t,e)=>{for(const i in t)(e||!Dc(i))&&(n[i]=t[i])},Gm=(n,t,e)=>{const i=n.slots=ed();if(n.vnode.shapeFlag&32){const s=t._;s?(ad(i,t,e),e&&ff(i,"_",s,!0)):rd(t,i)}else t&&od(n,t)},Wm=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=he;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:ad(s,t,e):(r=!t.$stable,rd(t,s)),o=t}else t&&(od(n,t),o={default:1});if(r)for(const a in s)!Dc(a)&&o[a]==null&&delete s[a]},He=$m;function Xm(n){return Ym(n)}function Ym(n,t){const e=Zo();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:f,nextSibling:u,setScopeId:d=Vn,insertStaticContent:g}=n,_=(A,P,S,rt=null,K=null,Z=null,nt=void 0,ot=null,tt=!!P.dynamicChildren)=>{if(A===P)return;A&&!$s(A,P)&&(rt=xt(A),It(A,K,Z,!0),A=null),P.patchFlag===-2&&(tt=!1,P.dynamicChildren=null),P.dynamicChildren&&A&&A.dynamicChildren&&A.dynamicChildren.hasOnce&&(P.dynamicChildren===$i&&(P.dynamicChildren=[]),P.dynamicChildren.hasOnce=!0);const{type:y,ref:v,shapeFlag:I}=P;switch(y){case ia:m(A,P,S,rt);break;case In:p(A,P,S,rt);break;case wa:A==null&&T(P,S,rt,nt);break;case ve:W(A,P,S,rt,K,Z,nt,ot,tt);break;default:I&1?k(A,P,S,rt,K,Z,nt,ot,tt):I&6?X(A,P,S,rt,K,Z,nt,ot,tt):(I&64||I&128)&&y.process(A,P,S,rt,K,Z,nt,ot,tt,Ut)}v!=null&&K?dr(v,A&&A.ref,Z,P||A,!P):v==null&&A&&A.ref!=null&&dr(A.ref,null,Z,A,!0)},m=(A,P,S,rt)=>{if(A==null)i(P.el=a(P.children),S,rt);else{const K=P.el=A.el;P.children!==A.children&&c(K,P.children)}},p=(A,P,S,rt)=>{A==null?i(P.el=l(P.children||""),S,rt):P.el=A.el},T=(A,P,S,rt)=>{[A.el,A.anchor]=g(A.children,P,S,rt,A.el,A.anchor)},M=({el:A,anchor:P},S,rt)=>{let K;for(;A&&A!==P;)K=u(A),i(A,S,rt),A=K;i(P,S,rt)},E=({el:A,anchor:P})=>{let S;for(;A&&A!==P;)S=u(A),s(A),A=S;s(P)},k=(A,P,S,rt,K,Z,nt,ot,tt)=>{if(P.type==="svg"?nt="svg":P.type==="math"&&(nt="mathml"),A==null)R(P,S,rt,K,Z,nt,ot,tt);else{const y=A.el&&A.el._isVueCE?A.el:null;try{y&&y._beginPatch(),st(A,P,K,Z,nt,ot,tt)}finally{y&&y._endPatch()}}},R=(A,P,S,rt,K,Z,nt,ot)=>{let tt,y;const{props:v,shapeFlag:I,transition:z,dirs:J}=A;if(tt=A.el=o(A.type,Z,v&&v.is,v),I&8?h(tt,A.children):I&16&&F(A.children,tt,null,rt,K,Ea(A,Z),nt,ot),J&&Oi(A,null,rt,"created"),C(tt,A,A.scopeId,nt,rt),v){for(const pt in v)pt!=="value"&&!lr(pt)&&r(tt,pt,null,v[pt],Z,rt);"value"in v&&r(tt,"value",null,v.value,Z),(y=v.onVnodeBeforeMount)&&Dn(y,rt,A)}J&&Oi(A,null,rt,"beforeMount");const q=qm(K,z);q?z.beforeEnter(tt):z&&!z.persisted&&(tt[Km]=!0),i(tt,P,S),((y=v&&v.onVnodeMounted)||q||J)&&He(()=>{try{y&&Dn(y,rt,A),q&&z.enter(tt),J&&Oi(A,null,rt,"mounted")}finally{}},K)},C=(A,P,S,rt,K)=>{if(S&&d(A,S),rt)for(let Z=0;Z<rt.length;Z++)d(A,rt[Z]);if(K){let Z=K.subTree;if(P===Z||hd(Z.type)&&(Z.ssContent===P||Z.ssFallback===P)){const nt=K.vnode;C(A,nt,nt.scopeId,nt.slotScopeIds,K.parent)}}},F=(A,P,S,rt,K,Z,nt,ot,tt=0)=>{for(let y=tt;y<A.length;y++){const v=A[y]=ot?ai(A[y]):Bn(A[y]);_(null,v,P,S,rt,K,Z,nt,ot)}},st=(A,P,S,rt,K,Z,nt)=>{const ot=P.el=A.el;let{patchFlag:tt,dynamicChildren:y,dirs:v}=P;tt|=A.patchFlag&16;const I=A.props||he,z=P.props||he;let J;if(S&&Fi(S,!1),(J=z.onVnodeBeforeUpdate)&&Dn(J,S,P,A),v&&Oi(P,A,S,"beforeUpdate"),S&&Fi(S,!0),y&&(!A.dynamicChildren||A.dynamicChildren.length!==y.length)&&(tt=0,nt=!1,y=null),(I.innerHTML&&z.innerHTML==null||I.textContent&&z.textContent==null)&&h(ot,""),y?x(A.dynamicChildren,y,ot,S,rt,Ea(P,K),Z):nt||H(A,P,ot,null,S,rt,Ea(P,K),Z,!1),tt>0){if(tt&16)b(ot,I,z,S,K);else if(tt&2&&I.class!==z.class&&r(ot,"class",null,z.class,K),tt&4&&r(ot,"style",I.style,z.style,K),tt&8){const q=P.dynamicProps;for(let pt=0;pt<q.length;pt++){const ht=q[pt],ft=I[ht],Ot=z[ht];(Ot!==ft||ht==="value")&&r(ot,ht,ft,Ot,K,S)}}tt&1&&A.children!==P.children&&h(ot,P.children)}else!nt&&y==null&&b(ot,I,z,S,K);((J=z.onVnodeUpdated)||v)&&He(()=>{J&&Dn(J,S,P,A),v&&Oi(P,A,S,"updated")},rt)},x=(A,P,S,rt,K,Z,nt)=>{for(let ot=0;ot<P.length;ot++){const tt=A[ot],y=P[ot],v=tt.el||gr(tt),I=v&&(tt.type===ve||!$s(tt,y)||tt.shapeFlag&198)?f(v):S;_(tt,y,I,null,rt,K,Z,nt,!0)}},b=(A,P,S,rt,K)=>{if(P!==S){if(P!==he)for(const Z in P)!lr(Z)&&!(Z in S)&&r(A,Z,P[Z],null,K,rt);for(const Z in S){if(lr(Z))continue;const nt=S[Z],ot=P[Z];nt!==ot&&Z!=="value"&&r(A,Z,ot,nt,K,rt)}"value"in S&&r(A,"value",P.value,S.value,K)}},W=(A,P,S,rt,K,Z,nt,ot,tt)=>{const y=P.el=A?A.el:a(""),v=P.anchor=A?A.anchor:a("");let{patchFlag:I,dynamicChildren:z,slotScopeIds:J}=P;J&&(ot=ot?ot.concat(J):J),A==null?(i(y,S,rt),i(v,S,rt),F(P.children||[],S,v,K,Z,nt,ot,tt)):I>0&&I&64&&z&&A.dynamicChildren&&A.dynamicChildren.length===z.length?(x(A.dynamicChildren,z,S,K,Z,nt,ot),(P.key!=null||K&&P===K.subTree)&&ld(A,P,!0)):H(A,P,S,v,K,Z,nt,ot,tt)},X=(A,P,S,rt,K,Z,nt,ot,tt)=>{P.slotScopeIds=ot,A==null?P.shapeFlag&512?K.ctx.activate(P,S,rt,nt,tt):Q(P,S,rt,K,Z,nt,tt):ct(A,P,tt)},Q=(A,P,S,rt,K,Z,nt)=>{const ot=A.component=i0(A,rt,K);if(Ic(A)&&(ot.ctx.renderer=Ut),r0(ot,!1,nt),ot.asyncDep){if(K&&K.registerDep(ot,V,nt,Z),!A.el){const tt=ot.subTree=fi(In);p(null,tt,P,S),A.placeholder=tt.el}}else V(ot,A,P,S,K,Z,nt)},ct=(A,P,S)=>{const rt=P.component=A.component;if(Fm(A,P,S))if(rt.asyncDep&&!rt.asyncResolved){P.el=A.el,P.placeholder=A.placeholder,it(rt,P,S);return}else rt.next=P,rt.update();else P.el=A.el,P.placeholder=A.placeholder,rt.vnode=P},V=(A,P,S,rt,K,Z,nt)=>{const ot=()=>{if(A.isMounted){let{next:I,bu:z,u:J,parent:q,vnode:pt}=A;{const Mt=cd(A);if(Mt){I&&(I.el=pt.el,it(A,I,nt)),Mt.asyncDep.then(()=>{const Pt=()=>{A.job.flags&8||(K&&K.pendingBranch?He(Pt,K):y())};Pt.flags=48,He(Pt,K)});return}}let ht=I,ft;Fi(A,!1),I?(I.el=pt.el,it(A,I,nt)):I=pt,z&&bo(z),(ft=I.props&&I.props.onVnodeBeforeUpdate)&&Dn(ft,q,I,pt),Fi(A,!0);const Ot=Ah(A),ut=A.subTree;A.subTree=Ot,_(ut,Ot,f(ut.el||gr(ut)),xt(ut),A,K,Z),I.el=Ot.el,ht===null&&Bm(A,Ot.el),J&&He(J,K),(ft=I.props&&I.props.onVnodeUpdated)&&He(()=>Dn(ft,q,I,pt),K)}else{let I;const{el:z,props:J}=P,{bm:q,m:pt,parent:ht,root:ft,type:Ot}=A,ut=pr(P);Fi(A,!1),q&&bo(q),!ut&&(I=J&&J.onVnodeBeforeMount)&&Dn(I,ht,P),Fi(A,!0);{ft.ce&&ft.ce._hasShadowRoot()&&ft.ce._injectChildStyle(Ot,A.parent?A.parent.type:void 0);const Mt=A.subTree=Ah(A);_(null,Mt,S,rt,A,K,Z),P.el=Mt.el}if(pt&&He(pt,K),!ut&&(I=J&&J.onVnodeMounted)){const Mt=P;He(()=>Dn(I,ht,Mt),K)}(P.shapeFlag&256||ht&&pr(ht.vnode)&&ht.vnode.shapeFlag&256)&&A.a&&He(A.a,K),A.isMounted=!0,P=S=rt=null}};A.scope.on();const tt=A.effect=new _f(ot);A.scope.off();const y=A.update=tt.run.bind(tt),v=A.job=tt.runIfDirty.bind(tt);v.i=A,v.id=A.uid,tt.scheduler=()=>Lc(v),Fi(A,!0),y()},it=(A,P,S)=>{P.component=A;const rt=A.vnode.props;A.vnode=P,A.next=null,zm(A,P.props,rt,S),Wm(A,P.children,S),Xn(),Ff(A),Yn()},H=(A,P,S,rt,K,Z,nt,ot,tt=!1)=>{const y=A&&A.children,v=A?A.shapeFlag:0,I=P.children,{patchFlag:z,shapeFlag:J}=P;if(z>0){if(z&128){at(y,I,S,rt,K,Z,nt,ot,tt);return}else if(z&256){gt(y,I,S,rt,K,Z,nt,ot,tt);return}}J&8?(v&16&&vt(y,K,Z),I!==y&&h(S,I)):v&16?J&16?at(y,I,S,rt,K,Z,nt,ot,tt):vt(y,K,Z,!0):(v&8&&h(S,""),J&16&&F(I,S,rt,K,Z,nt,ot,tt))},gt=(A,P,S,rt,K,Z,nt,ot,tt)=>{A=A||$i,P=P||$i;const y=A.length,v=P.length,I=Math.min(y,v);let z;for(z=0;z<I;z++){const J=P[z]=tt?ai(P[z]):Bn(P[z]);_(A[z],J,S,null,K,Z,nt,ot,tt)}y>v?vt(A,K,Z,!0,!1,I):F(P,S,rt,K,Z,nt,ot,tt,I)},at=(A,P,S,rt,K,Z,nt,ot,tt)=>{let y=0;const v=P.length;let I=A.length-1,z=v-1;for(;y<=I&&y<=z;){const J=A[y],q=P[y]=tt?ai(P[y]):Bn(P[y]);if($s(J,q))_(J,q,S,null,K,Z,nt,ot,tt);else break;y++}for(;y<=I&&y<=z;){const J=A[I],q=P[z]=tt?ai(P[z]):Bn(P[z]);if($s(J,q))_(J,q,S,null,K,Z,nt,ot,tt);else break;I--,z--}if(y>I){if(y<=z){const J=z+1,q=J<v?P[J].el:rt;for(;y<=z;)_(null,P[y]=tt?ai(P[y]):Bn(P[y]),S,q,K,Z,nt,ot,tt),y++}}else if(y>z)for(;y<=I;)It(A[y],K,Z,!0),y++;else{const J=y,q=y,pt=new Map;for(y=q;y<=z;y++){const _t=P[y]=tt?ai(P[y]):Bn(P[y]);_t.key!=null&&pt.set(_t.key,y)}let ht,ft=0;const Ot=z-q+1;let ut=!1,Mt=0;const Pt=new Array(Ot);for(y=0;y<Ot;y++)Pt[y]=0;for(y=J;y<=I;y++){const _t=A[y];if(ft>=Ot){It(_t,K,Z,!0);continue}let Wt;if(_t.key!=null)Wt=pt.get(_t.key);else for(ht=q;ht<=z;ht++)if(Pt[ht-q]===0&&$s(_t,P[ht])){Wt=ht;break}Wt===void 0?It(_t,K,Z,!0):(Pt[Wt-q]=y+1,Wt>=Mt?Mt=Wt:ut=!0,_(_t,P[Wt],S,null,K,Z,nt,ot,tt),ft++)}const kt=ut?jm(Pt):$i;for(ht=kt.length-1,y=Ot-1;y>=0;y--){const _t=q+y,Wt=P[_t],Xt=P[_t+1],oe=_t+1<v?Xt.el||gr(Xt):rt;Pt[y]===0?_(null,Wt,S,oe,K,Z,nt,ot,tt):ut&&(ht<0||y!==kt[ht]?L(Wt,S,oe,2):ht--)}}},L=(A,P,S,rt,K=null)=>{const{el:Z,type:nt,transition:ot,children:tt,shapeFlag:y}=A;if(y&6){L(A.component.subTree,P,S,rt);return}if(y&128){A.suspense.move(P,S,rt);return}if(y&64){nt.move(A,P,S,Ut);return}if(nt===ve){i(Z,P,S);for(let I=0;I<tt.length;I++)L(tt[I],P,S,rt);i(A.anchor,P,S);return}if(nt===wa){M(A,P,S);return}if(rt!==2&&y&1&&ot)if(rt===0)ot.persisted&&!Z[Sa]?i(Z,P,S):(ot.beforeEnter(Z),i(Z,P,S),He(()=>ot.enter(Z),K));else{const{leave:I,delayLeave:z,afterLeave:J}=ot,q=()=>{A.ctx.isUnmounted?s(Z):i(Z,P,S)},pt=()=>{const ht=Z._isLeaving||!!Z[Sa];Z._isLeaving&&Z[Sa](!0),ot.persisted&&!ht?q():I(Z,()=>{q(),J&&J()})};z?z(Z,q,pt):pt()}else i(Z,P,S)},It=(A,P,S,rt=!1,K=!1)=>{const{type:Z,props:nt,ref:ot,children:tt,dynamicChildren:y,shapeFlag:v,patchFlag:I,dirs:z,cacheIndex:J,memo:q}=A;if((I===-2||y&&y.hasOnce)&&(K=!1),ot!=null&&(Xn(),dr(ot,null,S,A,!0),Yn()),J!=null&&(!A.ctx||A.ctx===P)&&(P.renderCache[J]=void 0),v&256&&P.ctx.deactivate(A))return;const pt=v&1&&z,ht=!pr(A);let ft;if(ht&&(ft=nt&&nt.onVnodeBeforeUnmount)&&Dn(ft,P,A),v&6)j(A.component,S,rt);else{if(v&128){A.suspense.unmount(S,rt);return}pt&&Oi(A,null,P,"beforeUnmount"),v&64?A.type.remove(A,P,S,Ut,rt):y&&!y.hasOnce&&(Z!==ve||I>0&&I&64)?vt(y,P,S,!1,!0):(Z===ve&&I&384||!K&&v&16)&&vt(tt,P,S),rt&&$t(A)}const Ot=q!=null&&J==null;(ht&&(ft=nt&&nt.onVnodeUnmounted)||pt||Ot)&&He(()=>{ft&&Dn(ft,P,A),pt&&Oi(A,null,P,"unmounted"),Ot&&(A.el=null)},S)},$t=A=>{const{type:P,el:S,anchor:rt,transition:K}=A,Z=P===ve;if(Z&&!K){D(S,rt);return}if(P===wa){E(A),K&&!K.persisted&&K.afterLeave&&K.afterLeave();return}const nt=Z?Sl(A):A,ot=()=>{Z?f(S)&&D(S,rt):s(S),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(nt&&nt.shapeFlag&1&&K&&!K.persisted){const{leave:tt,delayLeave:y}=K,v=nt.el,I=()=>tt(v,ot);y?y(v,ot,I):I()}else ot()},D=(A,P)=>{let S;for(;A!==P;)S=u(A),s(A),A=S;s(P)},j=(A,P,S)=>{const{bum:rt,scope:K,job:Z,subTree:nt,um:ot,m:tt,a:y}=A;Ph(tt),Ph(y),rt&&bo(rt),K.stop(),Z?(Z.flags|=8,It(nt,A,P,S)):nt&&(nt.transition=A.vnode.transition,It(nt,A,P,S)),ot&&He(ot,P);const v=()=>{A.isUnmounted=!0};v.flags=16,He(v,P)},vt=(A,P,S,rt=!1,K=!1,Z=0)=>{for(let nt=Z;nt<A.length;nt++)It(A[nt],P,S,rt,K)},xt=A=>{if(A.shapeFlag&6)return xt(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const P=u(A.anchor||A.el),S=P&&P[cm];return S?u(S):P},Gt=(A,P,S)=>{const rt=A&&P._vnode?void 0:A&&A.component?A.component.uid:n0();im(()=>{A==null?P._vnode&&It(P._vnode,null,null,!0):_(P._vnode||null,A,P,null,null,null,S),P._vnode=A},rt)},Ut={p:_,um:It,m:L,r:$t,mt:Q,mc:F,pc:H,pbc:x,n:xt,o:n};return{render:Gt,hydrate:void 0,createApp:Lm(Gt)}}function Ea({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Fi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function qm(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function ld(n,t,e=!1){const i=n.children,s=t.children;if(Bt(i)&&Bt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ai(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&ld(o,a)),a.type===ia&&(a.patchFlag===-1&&(a=s[r]=ai(a)),a.el=o.el),a.type===In&&!a.el&&(a.el=o.el)}}function jm(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function cd(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:cd(t)}function Ph(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function gr(n){if(n.placeholder)return n.placeholder;const t=n.component;if(t)return gr(t.subTree);const e=n.suspense;return e&&e.activeBranch?gr(e.activeBranch):null}const hd=n=>n.__isSuspense,Km=Symbol("_deferredEnter");function $m(n,t){t&&t.pendingBranch?Bt(n)?t.effects.push(...n):t.effects.push(n):nm(n)}const ve=Symbol.for("v-fgt"),ia=Symbol.for("v-txt"),In=Symbol.for("v-cmt"),wa=Symbol.for("v-stc"),es=[];let cn=null;function Nt(n=!1){es.push(cn=n?null:[])}function ud(){es.pop(),cn=es[es.length-1]||null}let Tr=1;function Lh(n,t=!1){Tr+=n,n<0&&cn&&t&&(cn.hasOnce=!0)}function fd(n){return n.dynamicChildren=Tr>0?cn||$i:null,ud(),Tr>0&&cn&&cn.push(n),n}function Ft(n,t,e,i,s,r){return fd(G(n,t,e,i,s,r,!0))}function Jm(n,t,e,i,s){return fd(fi(n,t,e,i,s,!0))}function Nc(n){return n?n.__v_isVNode===!0:!1}function $s(n,t){return n.type===t.type&&n.key===t.key}const dd=({key:n})=>n??null,wo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Me(n)||ke(n)||Yt(n)?{i:_n,r:n,k:t,f:!!e}:n:null);function G(n,t=null,e=null,i=0,s=null,r=n===ve?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&dd(t),ref:t&&wo(t),scopeId:zf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_n};return a?(ko(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Me(e)?8:16),Tr>0&&!o&&cn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&cn.push(l),l}const fi=Zm;function Zm(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===bm)&&(n=In),Nc(n)){const a=Os(n,t,!0);return e&&ko(a,e),Tr>0&&!r&&cn&&(a.shapeFlag&6?cn[cn.indexOf(n)]=a:cn.push(a)),a.patchFlag=-2,a}if(c0(n)&&(n=n.__vccOpts),t){t=Qm(t);let{class:a,style:l}=t;a&&!Me(a)&&(t.class=Un(a)),ce(l)&&(Pc(l)&&!Bt(l)&&(l=Te({},l)),t.style=Ei(l))}const o=Me(n)?1:hd(n)?128:ea(n)?64:ce(n)?4:Yt(n)?2:0;return G(n,t,e,i,s,o,r,!0)}function Qm(n){return n?Pc(n)?Te({},n):nd(n)?Te({},n[_d]||n):n:null}function Os(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?t0(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&dd(c),ref:t&&t.ref?e&&r?Bt(r)?r.concat(wo(t)):[r,wo(t)]:wo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==ve?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Os(n.ssContent),ssFallback:n.ssFallback&&Os(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&fr(h,l.clone(h)),h}function te(n=" ",t=0){return fi(ia,null,n,t)}function ge(n="",t=!1){return t?(Nt(),Jm(In,null,n)):fi(In,null,n)}function Bn(n){return n==null||typeof n=="boolean"?fi(In):Bt(n)?fi(ve,null,n.slice()):Nc(n)?ai(n):fi(ia,null,String(n))}function ai(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Os(n)}function ko(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Bt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),ko(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!nd(t)?t._ctx=_n:s===3&&_n&&(_n.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Yt(t)){if(i&65){ko(n,{default:t});return}t={default:t,_ctx:_n},e=32}else t=String(t),i&64?(e=16,t=[te(t)]):e=8;n.children=t,n.shapeFlag|=e}function t0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Un([t.class,i.class]));else if(s==="style")t.style=Ei([t.style,i.style]);else if(Ko(s)){const r=t[s],o=i[s];o&&r!==o&&!(Bt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!$o(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Dn(n,t,e,i=null){Ln(n,t,7,[e,i])}const e0=$f();let pd=0;function n0(){return pd}function i0(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||e0,r={uid:pd++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new gf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sd(i,s),emitsOptions:Jf(i,s),emit:null,emitted:null,propsDefaults:he,inheritAttrs:i.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Dm.bind(null,r),n.ce&&n.ce(r),r}let We=null;const s0=()=>We||_n;let zo,Ar;{const n=Zo(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};zo=t("__VUE_INSTANCE_SETTERS__",e=>We=e),Ar=t("__VUE_SSR_SETTERS__",e=>Rr=e)}const Fr=n=>{const t=We;return zo(n),n.scope.on(),()=>{n.scope.off(),zo(t)}},Ih=()=>{We&&We.scope.off(),zo(null)};function md(n){return n.vnode.shapeFlag&4}let Rr=!1;function r0(n,t=!1,e=!1){t&&Ar(t);const{props:i,children:s}=n.vnode,r=md(n);km(n,i,r,t),Gm(n,s,e||t);const o=r?o0(n,t):void 0;return t&&Ar(!1),o}function o0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Em);const{setup:i}=e;if(i){Xn();const s=n.setupContext=i.length>1?l0(n):null,r=Fr(n),o=Or(i,n,0,[n.props,s]),a=lf(o);if(Yn(),r(),(a||n.sp)&&!pr(n)&&Wf(n),a){if(o.then(Ih,Ih),t)return o.then(l=>{Ar(!0);try{Dh(n,l,t)}finally{Ar(!1)}}).catch(l=>{ta(l,n,0,void 0,!0),n.ssrRender=(c,h)=>h("<!---->")});n.asyncDep=o}else Dh(n,o)}else gd(n)}function Dh(n,t,e){Yt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ce(t)&&(n.setupState=Df(t)),gd(n)}function gd(n,t,e){const i=n.type;n.render||(n.render=i.render||Vn);{const s=Fr(n);Xn();try{wm(n)}finally{Yn(),s()}}}const _d=Symbol(),a0={get(n,t){return Fe(n,"get",""),t===_d?n:n[t]}};function l0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,a0),slots:n.slots,emit:n.emit,expose:t}}function sa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Df(If(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in mr)return mr[e](n)},has(t,e){return e in t||e in mr}})):n.proxy}function c0(n){return Yt(n)&&"__vccOpts"in n}const an=(n,t)=>Jp(n,t,Rr),h0="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Al;const Uh=typeof window<"u"&&window.trustedTypes;if(Uh)try{Al=Uh.createPolicy("vue",{createHTML:n=>n})}catch{}const vd=Al?n=>Al.createHTML(n):n=>n,u0="http://www.w3.org/2000/svg",f0="http://www.w3.org/1998/Math/MathML",ri=typeof document<"u"?document:null,Nh=ri&&ri.createElement("template"),d0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?ri.createElementNS(u0,n):t==="mathml"?ri.createElementNS(f0,n):e?ri.createElement(n,{is:e}):ri.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ri.createTextNode(n),createComment:n=>ri.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ri.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Nh.innerHTML=vd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Nh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},p0=Symbol("_vtc");function m0(n,t,e){const i=n[p0];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Oh=Symbol("_vod"),g0=Symbol("_vsh"),_0=Symbol(""),v0=/(?:^|;)\s*display\s*:/;function x0(n,t,e){const i=n.style,s=Me(e);let r=!1;if(e&&!s){if(t)if(Me(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&or(i,a,"")}else for(const o in t)e[o]==null&&or(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?M0(n,o,!Me(t)&&t?t[o]:void 0,a)||or(i,o,a):or(i,o,"")}}else if(s){if(t!==e){const o=i[_0];o&&(e+=";"+o),i.cssText=e,r=v0.test(e)}}else t&&n.removeAttribute("style");Oh in n&&((!s||t!==e)&&(n[Oh]=r?i.display:""),n[g0]&&(i.display="none"))}const qr=/\s*!important$/;function or(n,t,e){if(Bt(e))e.forEach(i=>or(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))qr.test(e)?n.setProperty(t,e.replace(qr,""),"important"):n.setProperty(t,e);else{const i=y0(n,t);qr.test(e)?n.setProperty(as(i),e.replace(qr,""),"important"):n[i]=e}}const Fh=["Webkit","Moz","ms"],Ta={};function y0(n,t){const e=Ta[t];if(e)return e;let i=Cn(t);if(i!=="filter"&&i in n)return Ta[t]=i;i=uf(i);for(let s=0;s<Fh.length;s++){const r=Fh[s]+i;if(r in n)return Ta[t]=r}return t}function M0(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Me(i)&&e===i}const Bh="http://www.w3.org/1999/xlink";function kh(n,t,e,i,s,r=Ep(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Bh,t.slice(6,t.length)):n.setAttributeNS(Bh,t,e):e==null||r&&!df(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Wn(e)?String(e):e)}function zh(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?vd(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=df(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function Yi(n,t,e,i){n.addEventListener(t,e,i)}function S0(n,t,e,i){n.removeEventListener(t,e,i)}const Hh=Symbol("_vei");function b0(n,t,e,i,s=null){const r=n[Hh]||(n[Hh]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=T0(t);if(i){const c=r[t]=C0(i,s);Yi(n,a,c,l)}else o&&(S0(n,a,o,l),r[t]=void 0)}}const E0=/(Once|Passive|Capture)$/,w0=/^on:?(?:Once|Passive|Capture)$/;function T0(n){let t,e;for(;(e=n.match(E0))&&!w0.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):as(n.slice(2)),t]}let Aa=0;const A0=Promise.resolve(),R0=()=>Aa||(A0.then(()=>Aa=0),Aa=Date.now());function C0(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Bt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Ln(c,t,5,a)}}else Ln(s,t,5,[i])};return e.value=n,e.attached=R0(),e}const Vh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,P0=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?m0(n,i,o):t==="style"?x0(n,e,i):Ko(t)?$o(t)||b0(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):L0(n,t,i,o))?(zh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&kh(n,t,i,o,r,t!=="value")):n._isVueCE&&(I0(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Me(i)))?zh(n,Cn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),kh(n,t,i,o))};function L0(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Vh(t)&&Yt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Vh(t)&&Me(e)?!1:t in n}function I0(n,t){const e=n._def.props;if(!e)return!1;const i=Cn(t);return Array.isArray(e)?e.some(s=>Cn(s)===i):Object.keys(e).some(s=>Cn(s)===i)}const Ho=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Bt(t)?e=>bo(t,e):t};function D0(n){n.target.composing=!0}function Gh(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ji=Symbol("_assign"),jr=Symbol("_initialValue");function Ra(n,t,e){return t&&(n=n.trim()),e&&(n=Nr(n)),n}const U0={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[jr]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[jr]=n.defaultValue.replace(/\r\n?/g,`
`))),n[Ji]=Ho(s);const r=i||s.props&&s.props.type==="number";Yi(n,t?"change":"input",o=>{o.target.composing||n[Ji](Ra(n.value,e,r))}),(e||r)&&Yi(n,"change",()=>{n.value=Ra(n.value,e,r)}),t||(Yi(n,"compositionstart",D0),Yi(n,"compositionend",Gh),Yi(n,"change",Gh))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[jr];delete n[jr],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[Ji](Ra(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Ji]=Ho(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Nr(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},Kr={deep:!0,created(n,{value:t,modifiers:{number:e}},i){n._modelValue=t,Yi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>e?Nr(Vo(l)):Vo(l)),r=n.multiple,o=r?ns(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?Bt(o)?s.slice():s:o];try{n[Ji](o)}finally{Nf(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[Ji]=Ho(i)},mounted(n,{value:t,modifiers:{number:e}}){Wh(n,t,e)},beforeUpdate(n,{value:t},e){n._modelValue=t,n[Ji]=Ho(e)},updated(n,{value:t,modifiers:{number:e}}){const i=n._pendingValue;n._pendingValue=void 0,(!i||i[0]!==n.multiple||!N0(t,i[1],i[0]))&&Wh(n,t,e)}};function N0(n,t,e){if(!e||Bt(n))return Pi(n,t);if(ns(n)){if(n.size!==t.length)return!1;for(const i of t)if(!n.has(i))return!1;return!0}return!1}function Wh(n,t,e=!1){const i=n.multiple,s=Bt(t);if(!(i&&!s&&!ns(t))){for(let r=0,o=n.options.length;r<o;r++){const a=n.options[r],l=Vo(a);if(i)if(s){const c=typeof l;c==="string"||c==="number"?a.selected=t.some(h=>String(h)===String(l)):a.selected=Ap(t,l)>-1}else a.selected=t.has(l)||e&&typeof l=="string"&&t.has(Nr(l));else if(Pi(Vo(a),t)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!i&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Vo(n){return"_value"in n?n._value:n.value}const O0=Te({patchProp:P0},d0);let Xh;function F0(){return Xh||(Xh=Xm(O0))}const B0=((...n)=>{const t=F0().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=z0(i);if(!s)return;const r=t._component;!Yt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,k0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function k0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function z0(n){return Me(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const H0=Symbol();var Yh;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Yh||(Yh={}));function V0(){const n=Rp(!0),t=n.run(()=>Ze({}));let e=[],i=[];const s=If({install(r){s._a=r,r.provide(H0,s),r.config.globalProperties.$pinia=s,i.forEach(o=>e.push(o)),i=[]},use(r){return this._a?e.push(r):i.push(r),this},_p:e,_a:null,_e:n,_s:new Map,state:t});return s}const G0="modulepreload",W0=function(n){return"/game/royale/"+n},qh={},X0=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){let o=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(e.map(c=>{if(c=W0(c),c in qh)return;qh[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":G0,h||(u.as="script"),u.crossOrigin="",u.href=c,l&&u.setAttribute("nonce",l),document.head.appendChild(u),h)return new Promise((d,g)=>{u.addEventListener("load",d),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},Y0=["hoarder","bomber","charger","coward"],q0={hoarder:"LOOT GOBLIN",bomber:"BAD DELIVERY",charger:"NO BRAKES",coward:"ABSOLUTELY NOT"},xd={cart:"CART CHARGE",recoil:"RECOIL BOOTS",skates:"SLIPPERY SKATES"},jh=["cart","recoil","skates"],j0={cart:300,recoil:360,skates:360},Js={shank:45,axe:90,shotgun:70,smg:60,laser:40,flamethrower:50,body:0},ra={gender:0,skin:2,hair:2,hairColor:0,clothes:0,color:0},Br=["#f4ceae","#dca47a","#b87953","#925739","#603c2f","#3b2b26"],Fs=["#e9bb22","#d43163","#2b9c96","#4d63cb","#d46a27","#b1aca0"],oa=["#242028","#653b23","#d7ad52","#dd457b"],Ls=[{id:"gas",name:"LAST STOP GAS",tag:"PREMIUM FUEL. SUBSTANDARD DECISIONS."},{id:"rest",name:"REST IN PIECES",tag:"TAKE A BREAK. LEAVE A PART."},{id:"motel",name:"MOTEL NO-TELL",tag:"VACANCIES CREATED DAILY."}],ln=["torso","head","armL","armR","forearmL","forearmR","handL","handR","thighL","thighR","shinL","shinR","footL","footR"],is={torso:{x:0,y:1.65,w:.85,h:.9,hp:120,parent:null},head:{x:0,y:2.45,w:.6,h:.65,hp:34,parent:"torso"},armL:{x:-.57,y:1.85,w:.28,h:.5,hp:30,parent:"torso"},armR:{x:.57,y:1.85,w:.28,h:.5,hp:30,parent:"torso"},forearmL:{x:-.59,y:1.38,w:.25,h:.48,hp:24,parent:"armL"},forearmR:{x:.59,y:1.38,w:.25,h:.48,hp:24,parent:"armR"},handL:{x:-.6,y:1.08,w:.27,h:.25,hp:15,parent:"forearmL"},handR:{x:.6,y:1.08,w:.27,h:.25,hp:15,parent:"forearmR"},thighL:{x:-.25,y:.95,w:.34,h:.55,hp:36,parent:"torso"},thighR:{x:.25,y:.95,w:.34,h:.55,hp:36,parent:"torso"},shinL:{x:-.25,y:.48,w:.29,h:.5,hp:26,parent:"thighL"},shinR:{x:.25,y:.48,w:.29,h:.5,hp:26,parent:"thighR"},footL:{x:-.31,y:.12,w:.45,h:.24,hp:17,parent:"shinL"},footR:{x:.31,y:.12,w:.45,h:.24,hp:17,parent:"shinR"}},qi=(n=ra)=>({move:0,aimX:1,aimY:0,attack:!1,jump:0,grab:0,pickup:0,cycle:0,reload:0,ready:0,rematch:0,venue:0,venueChange:0,look:{...n}});function Oc(n){const t=n&&typeof n=="object"?n:{},e={gender:3,skin:Br.length,hair:5,hairColor:oa.length,clothes:3,color:Fs.length},i={...ra};for(const s of Object.keys(e)){const r=Number(t[s]);Number.isInteger(r)&&r>=0&&r<e[s]&&(i[s]=r)}return i}function K0(n){const t=n&&typeof n=="object"?n:{},e=qi(Oc(t.look));for(const i of["jump","grab","pickup","cycle","reload","ready","rematch","venueChange"]){const s=Number(t[i]);e[i]=Number.isSafeInteger(s)&&s>=0?Math.min(s,1e7):0}return e.move=Math.max(-1,Math.min(1,Number(t.move)||0)),e.aimX=Math.max(-1,Math.min(1,Number(t.aimX)||0)),e.aimY=Math.max(-1,Math.min(1,Number(t.aimY)||0)),e.attack=t.attack===!0,e.venue=Math.max(0,Math.min(2,Math.floor(Number(t.venue)||0))),e}function Is(n){return+(n.parts.thighL>0&&n.parts.shinL>0)+ +(n.parts.thighR>0&&n.parts.shinR>0)}function Kh(n,t){const e=is[t];return Is(n)>0?{x:e.x,y:e.y,w:e.w,h:e.h,rotation:0,length:e.h}:t.startsWith("thigh")?{x:e.x*1.5,y:.22,w:e.h,h:e.w,rotation:t.endsWith("L")?Math.PI/2:-Math.PI/2,length:e.h}:{x:e.x,y:Math.max(e.h/2+.04,e.y-1.16),w:e.w,h:e.h,rotation:0,length:e.h}}function pn(n,t){const e=Kh(n,t),i=Z0(n);if(!i||n.weapons[n.slot]==="body"&&!n.carrying||!n.parts.armL&&!n.parts.armR)return e;const s=i.endsWith("L")?"L":"R",r=As(n);if(t===i)return{...e,x:r.x,y:r.y,rotation:r.angle-Math.PI/2};if(t!==`arm${s}`&&t!==`forearm${s}`)return e;const o=Kh(n,`arm${s}`),a=o.x,l=o.y+.25,c=(a+r.x)/2-r.dy*.13,h=(l+r.y)/2+r.dx*.13,f=t.startsWith("forearm")?{x:c,y:h}:{x:a,y:l},u=t.startsWith("forearm")?r:{x:c,y:h},d=u.x-f.x,g=u.y-f.y,_=Math.hypot(d,g),m=Math.atan2(g,d)-Math.PI/2,p=is[t].w;return{x:(f.x+u.x)/2,y:(f.y+u.y)/2,w:Math.abs(Math.cos(m))*p+Math.abs(Math.sin(m))*_,h:Math.abs(Math.sin(m))*p+Math.abs(Math.cos(m))*_,rotation:m,length:_}}const $0=1.1;function J0(n){if(n.weapons[n.slot]!=="shank"||n.attacking<=0)return 0;const t=(10-n.attacking)/10;return .23*Math.max(0,t<.25?t/.25:(1-t)/.75)}function oi(n){return Is(n)===0?.39:1.55}function Nn(n){return Math.max(...ln.filter(t=>n.parts[t]>0).map(t=>{const e=pn(n,t);return e.y+e.h/2}),.5)}function As(n){const t=Math.hypot(n.aimX,n.aimY),e=t>.01?n.aimX/t:n.face,i=t>.01?n.aimY/t:0,s=!n.carrying&&n.weapons[n.slot]==="shank"?.42+J0(n):.85;return{x:e*s,y:oi(n)+i*s,angle:Math.atan2(i,e),dx:e,dy:i}}function Z0(n){const t=n.aimX<0?"handL":"handR",e=t==="handL"?"handR":"handL";return n.parts[t]>0?t:n.parts[e]>0?e:null}function Ca(n){return[["armL","forearmL","handL"],["armR","forearmR","handR"],["thighL","shinL","footL"],["thighR","shinR","footR"]].filter(t=>t.some(e=>n.parts[e]<=0)).length}function Q0(n,t){const e=[];function i(s,r,o,a,l,c,h,f=[],u=0){const d={id:t(),kind:s,x:r,y:o,w:a,h:l,material:c,hp:h,maxHp:h,fuel:c==="fuel"?1:c==="wood"||c==="fabric"?.5:0,burn:0,supports:f,falling:!1,vy:0,exploded:!1,solid:s!=="floor"&&s!=="glass"&&s!=="railing",color:u};return e.push(d),d.id}for(let s=-60;s<64;s+=8)i("floor",s,0,8,.45,"concrete",240);if(n==="gas"){for(const r of[-40,-28,-16])i("pump",r,1.7,1.8,3.4,"fuel",75);const s=[i("post",-46,3,.5,6,"metal",80),i("post",-10,3,.5,6,"metal",80)];for(let r=-43;r<-9;r+=6)i("roof",r,6.4,6,.7,"metal",100,s);for(const r of[-35,-19,27])i("can",r,.6,.7,1.2,"fuel",20);i("car",5,1.1,7,2.2,"fuel",120),i("car",45,1.1,6.5,2.2,"fuel",120),i("counter",23,1,6,2,"wood",70),i("fridge",33,1.8,2.8,3.6,"metal",85),i("glass",23,3.6,7,2.3,"glass",22),i("door",17,1.6,1.5,3.2,"wood",40),i("sign",-51,7.5,5,3,"metal",55,[i("pole",-51,3.6,.5,7.2,"metal",65)]);for(const r of[12,39,40])i("tire",r,.6,1.1,1.2,"fabric",25)}else if(n==="rest"){for(const r of[-42,-15,18])i("table",r,1,5.5,2,"wood",70),i("bench",r+5,.55,3,1.1,"wood",35);for(const r of[-30,8])i("vending",r,1.8,2.4,3.6,"metal",85);for(const r of[-50,-3,35])i("bin",r,.85,1.2,1.7,"metal",45);i("truck",44,1.7,10,3.4,"fuel",180),i("car",-4,1.1,6,2.2,"fuel",120);for(const r of[-49,27])i("sign",r,7,5,2.4,"metal",55,[i("pole",r,3.5,.45,7,"metal",60)]);i("barrier",-24,.6,4,1.2,"concrete",80),i("door",27,1.6,1.6,3.2,"wood",45);const s=[i("post",-5,2.5,.5,5,"metal",65),i("post",8,2.5,.5,5,"metal",65)];i("roof",1.5,5.2,14,.5,"metal",95,s)}else{for(const r of[-45,-23,-1,21,43]){const o=i("post",r-4.5,2.5,.5,5,"wood",60);i("balcony",r,5,11,.6,"concrete",100,[o]),i("railing",r,5.9,10.5,1.2,"metal",30),i("door",r-2,1.7,1.5,3.4,"wood",40),i("glass",r+2,2.6,2.5,1.8,"glass",20),i("mattress",r+3,.65,3.5,1.3,"fabric",40),i("tv",r,.65,1.1,1.3,"glass",25),i("ac",r+3,7,2,1.2,"metal",35,[o]),i("door",r-2,6.8,1.5,3.4,"wood",40)}i("ice",49,1.3,2.8,2.6,"metal",70);const s=i("pole",-53,5,.5,10,"metal",65);i("sign",-53,10,6.5,3.5,"metal",70,[s])}return e}const Pa=.5,tg=.5,Ie=1/60,La=27,fn=[-57,57,-20,-5,13,20,-9,8],eg=18,ng=["YOU","GUEST","BAD CREDIT","ROOM SERVICE","UNLEADED","NO REFUNDS","LAST CALL","MILD CONCERN"];class yd{constructor(t=1){dt(this,"state");this.state={version:1,thrown:[],boosts:[],frame:0,round:0,seed:77191,id:0,phase:"lobby",phaseFrame:0,venue:"gas",actors:[],props:[],shots:[],debris:[],blood:[],fires:[],pickups:[],events:[],winner:null,zoneLeft:-64,zoneRight:64,humans:Math.max(1,Math.min(2,t)),venueNonce:0,eventSeq:0},this.makeActors(),this.makeWorld()}next(){return++this.state.id}random(){let t=this.state.seed|0;return t^=t<<13,t^=t>>>17,t^=t<<5,this.state.seed=t>>>0,(t>>>0)/4294967296}makeActors(){this.state.actors=[];for(let t=0;t<8;t++){const e={...ra,gender:t%3,skin:t%6,hair:t%5,color:t%6},i=qi(e);this.state.actors.push({id:t,name:t<this.state.humans?this.state.humans===1?"YOU":`PLAYER ${t+1}`:ng[t],human:t<this.state.humans,pendingSpawn:t>=this.state.humans,personality:t>=this.state.humans?Y0[(t-this.state.humans)%4]:void 0,look:e,x:fn[t],y:1,vx:0,vy:0,face:t%2?-1:1,hp:100,parts:Object.fromEntries(ln.map(s=>[s,is[s].hp])),weapons:["shank"],durability:{...Js},slot:0,specialAmmo:{laser:0,flamethrower:0},ammo:0,magazines:{shotgun:6,smg:30},reserve:90,cooldown:0,reloading:0,grounded:!1,ready:!1,last:i,drift:0,driftAt:0,death:null,deathFrame:-1,bleedOutAt:null,bleedOwner:-1,aimX:t%2?-1:1,aimY:0,attacking:0,kills:0})}}openingSpawnProtected(t){const e=this.state.actors.filter(i=>!i.human&&i.hp>0);return this.state.actors.filter(i=>i.human&&i.hp>0).some(i=>{const s=[...e].sort((r,o)=>Math.abs(fn[r.id]-fn[i.id])-Math.abs(fn[o.id]-fn[i.id]))[0];return s!==void 0&&Math.abs(t-fn[s.id])<eg})}makeWorld(){this.state.thrown=[],this.state.boosts=[],delete this.state.chaosAt,delete this.state.nextMajorAt,delete this.state.major,this.state.props=Q0(this.state.venue,()=>this.next()),this.state.shots=[],this.state.debris=[],this.state.blood=[],this.state.fires=[],this.state.pickups=[];for(const i of this.state.actors.filter(s=>s.human)){const s=fn[i.id]+(fn[i.id]<0?3:-3),r=this.next();for(let o=0;o<2;o++)this.state.props.push({id:o===0?r:this.next(),kind:"crate",trainingFor:i.id,x:s,y:.225+.55+o*1.1,w:1.5,h:1.1,hp:18,maxHp:18,material:"wood",fuel:.5,burn:0,supports:o===1?[r]:[],falling:!1,vy:0,exploded:!1,solid:!0,color:o})}const t=[-1,-.5,0,.5,1];let e=0;for(let i=0;i<9;i++){const s=-52+i*13,r=this.openingSpawnProtected(s)?t[e++%t.length]:s,o=["axe","shotgun","smg"][i%3];this.state.pickups.push({id:this.next(),x:r,y:1,weapon:o,hp:Js[o]})}for(const i of this.state.actors.filter(s=>s.human)){const s=fn[i.id]+(fn[i.id]<0?-1:1);this.state.pickups.push({id:this.next(),x:s,y:1,weapon:"smg",hp:Js.smg,reservedFor:i.id,reservedUntil:600})}}releaseEnemies(){const t=this.state.actors.some(i=>i.pendingSpawn)&&this.state.chaosAt===void 0,e=this.state.actors.filter(i=>i.human&&i.hp>0);for(const i of this.state.actors.filter(s=>s.pendingSpawn)){const s=o=>Math.min(...e.map(a=>Math.abs(a.x-o)));if(s(i.x)<34){const o=Array.from({length:121},(a,l)=>l-60);o.sort((a,l)=>s(l)-s(a)||Math.abs(a-fn[i.id])-Math.abs(l-fn[i.id])),i.x=o[0]}const r=this.floorAt(i.x,100,-100);i.y=r>-50?r:1,i.vx=i.vy=0,i.pendingSpawn=!1}if(t){this.state.chaosAt=this.state.frame,this.state.nextMajorAt=this.state.frame+1200;for(const i of e)for(let s=0;s<3;s++){const r=Math.max(-61,Math.min(61,i.x+(i.x<0?1:-1)*(5+s*6))),o=this.floorAt(r,100,-100);o>-50&&this.state.boosts.push({id:this.next(),x:r,y:o+.6,kind:jh[s],hp:20,expires:this.state.frame+1800})}}}snapshot(){return JSON.parse(JSON.stringify(this.state))}restore(t){if(t.version!==1)throw new Error("Incompatible Royale state");this.state=JSON.parse(JSON.stringify(t))}event(t,e,i,s=-1,r={}){this.state.events.push({id:`${this.state.round}:${this.state.frame}:${++this.state.eventSeq}`,frame:this.state.frame,kind:t,x:e,y:i,actor:s,...r}),this.state.events.length>180&&this.state.events.shift()}startRound(){const t=this.state.actors.map(s=>({...s.look})),e=this.state.actors.map(s=>s.last),i=this.state.round+1;this.makeActors(),this.state.actors.forEach((s,r)=>{s.look=t[r],s.last=e[r],s.y=this.floorAt(s.x,100,-1)>-50?this.floorAt(s.x,100,-1):1}),this.makeWorld(),this.state.round=i,this.state.phase="match",this.state.phaseFrame=0,this.state.winner=null,this.state.zoneLeft=-64,this.state.zoneRight=64}lobby(t){for(const s of this.state.actors.filter(r=>r.human)){const r=t[s.id]??qi(s.look);JSON.stringify(s.look)!==JSON.stringify(r.look)&&(s.look={...r.look},s.ready=!1),r.ready!==s.last.ready&&(s.ready=!s.ready),s.last={...r}}const e=t[0];e&&e.venueChange!==this.state.venueNonce&&(this.state.venueNonce=e.venueChange,this.state.venue=Ls[e.venue].id,this.makeWorld(),this.state.actors.forEach(s=>s.ready=!1));const i=this.state.actors.filter(s=>s.human).every(s=>s.ready);this.state.phase==="lobby"&&i?(this.state.phase="countdown",this.state.phaseFrame=0):this.state.phase==="countdown"&&!i&&(this.state.phase="lobby",this.state.phaseFrame=0),this.state.phase==="countdown"&&this.state.phaseFrame>=180&&this.startRound()}rematch(t){if(this.state.actors.filter(e=>e.human).every(e=>{var i;return(((i=t[e.id])==null?void 0:i.rematch)??0)>e.last.rematch})){this.state.venue=Ls[(Ls.findIndex(i=>i.id===this.state.venue)+1)%3].id,this.state.phase="lobby",this.state.phaseFrame=0;const e=this.state.actors.map(i=>({...i.look}));this.makeActors(),this.state.actors.forEach((i,s)=>{i.look=e[s],i.human&&(i.last=t[i.id]),i.ready=!1}),this.makeWorld()}}weapon(t){return!t.parts.armL&&!t.parts.armR?"body":t.weapons[t.slot]??"shank"}handling(t){return(t.parts.handL>0?1:0)+(t.parts.handR>0?1:0)}movement(t){const e=Is(t),i=+(t.parts.footL>0)+ +(t.parts.footR>0);return Math.max(.24,(e===2?1:e===1?.65:.29)*(i===2?1:i===1?.85:.7))}detach(t,e,i=-1){const s=t.parts.head>0,r=Ca(t),o=Object.fromEntries(ln.map(c=>[c,pn(t,c)])),a=c=>{if(t.parts[c]<=0)return;t.parts[c]=0;const h=o[c];this.state.debris.length<120&&this.state.debris.push({id:this.next(),x:t.x+h.x,y:t.y+h.y,vx:(this.random()-.5)*12,vy:3+this.random()*5,life:900,part:c,look:{...t.look},color:0,hp:14,w:h.w,h:h.h}),this.event("detach",t.x+h.x,t.y+h.y,t.id,{part:c,severed:c===e&&e!=="torso"});for(const f of ln)is[f].parent===c&&a(f)};a(e);const l=Ca(t);if(l===1&&r!==1&&t.hp>0&&t.parts.head>0?(t.distressAt=this.state.frame,t.distressCount=0):(l!==1||t.hp<=0||t.parts.head<=0)&&(delete t.distressAt,delete t.distressCount),t.hp>0&&!t.pendingSpawn&&t.parts.torso>0){const c=Is(t)===0,h=e==="head"&&s&&t.parts.head<=0,f=c?360:h?600:null;f!==null&&(t.bleedOutAt===null||this.state.frame+f<t.bleedOutAt)&&(t.bleedOutAt=this.state.frame+f,t.bleedOwner=i,t.bleedCause=c?"bleedout":"head_bleedout",t.bleedRate=c?100/360*(t.human?Pa:1):t.hp/600)}if(!t.parts.armL&&!t.parts.armR){for(const c of t.weapons)c!=="shank"&&c!=="body"&&t.durability[c]>0&&this.state.pickups.push({id:this.next(),x:t.x,y:t.y+.5,weapon:c,hp:t.durability[c],charges:c==="laser"||c==="flamethrower"?t.specialAmmo[c]:void 0});t.weapons=["body"],t.slot=0}}incomingDamage(t,e,i){const s=this.state.actors[i];return e*(t.human&&s&&!s.human?tg:1)}damage(t,e,i,s,r=-1){if(t.pendingSpawn||t.hp<=0||t.parts[e]<=0)return;i=this.incomingDamage(t,i,r);const o=!["fire","fuel_fire","zone"].includes(s),a=t.human?Pa:1,l=Math.min(t.parts[e],i*(e==="torso"?(o?.45:1)*a:1));if(e==="torso"&&o){const h=t.id%2===0?"L":"R",f=h==="L"?"R":"L",d=[`thigh${h}`,`arm${h}`,`thigh${f}`,`arm${f}`,"head"].find(g=>t.parts[g]>0);if(d){const g=i*.8;t.parts[d]<=g?this.detach(t,d,r):t.parts[d]-=g}}t.parts[e]<=l?this.detach(t,e,r):t.parts[e]-=l;const c=e==="torso"?l:l*.08*a;t.hp=Math.max(0,t.hp-c),this.event("hit",t.x+pn(t,e).x,t.y+pn(t,e).y,t.id,{part:e}),(t.hp<=0||t.parts.torso<=0)&&this.kill(t,s,r)}kill(t,e,i=-1){if(!t.death){if(t.carrying&&this.throwObject(t,!0),!t.human&&!t.pendingSpawn&&this.state.chaosAt!==void 0&&this.state.boosts.length<16){const s=this.floorAt(t.x,t.y+.5,-100);s>-50&&this.state.boosts.push({id:this.next(),x:t.x,y:s+.6,kind:jh[t.id%3],hp:20,expires:this.state.frame+900})}t.hp=0,t.death=e,t.deathFrame=this.state.frame,(e==="bleedout"||e==="head_bleedout")&&this.bloodSplatter(t),this.event("death",t.x,t.y+1,t.id,{cause:e}),i>=0&&i!==t.id&&this.state.actors[i].kills++,this.detach(t,"torso")}}bloodSplatter(t){const e=this.floorAt(t.x,t.y+.3,-100);if(e<=-50)return;const i=this.state.props.find(s=>s.hp>0&&!s.falling&&Math.abs(s.y+s.h/2-e)<.001&&Math.abs(t.x-s.x)<s.w/2+.25);i&&(this.state.blood.push({id:this.next(),x:t.x,y:e+.018,surface:i.id}),this.state.blood.length>8&&this.state.blood.shift())}hitPart(t,e,i){if(t.pendingSpawn)return null;let s=null,r=1/0;for(const o of ln){if(t.parts[o]<=0)continue;const a=pn(t,o),l=Math.abs(e-t.x-a.x),c=Math.abs(i-t.y-a.y);l<a.w/2+.14&&c<a.h/2+.14&&l+c<r&&(r=l+c,s=o)}return s}floorAt(t,e,i){let s=-100;for(const r of this.state.props){if(r.hp<=0||r.falling||!(r.kind==="floor"||r.kind==="crate"||r.kind==="roof"||r.kind==="balcony"||r.kind==="table"||r.kind==="car"||r.kind==="truck"||r.kind==="barrier"))continue;const o=r.y+r.h/2;Math.abs(t-r.x)<r.w/2+.25&&e>=o-.2&&i<=o&&o>s&&(s=o)}return s}damagePickup(t,e){t.hp-=e,t.hp<=0&&(this.event("break",t.x,t.y),this.state.debris.length<120&&this.state.debris.push({id:this.next(),x:t.x,y:t.y,vx:(this.random()-.5)*5,vy:3,life:450,part:null,look:null,color:4,hp:8,w:.4,h:.15}),this.state.pickups=this.state.pickups.filter(i=>i.id!==t.id))}damageBoost(t,e){t.hp-=e,t.hp<=0&&(this.event("break",t.x,t.y),this.state.boosts=this.state.boosts.filter(i=>i.id!==t.id))}damageWeapon(t,e,i=-1){if(t.pendingSpawn)return;if(e=this.incomingDamage(t,e,i),t.carrying){if(t.carrying.hp-=e,t.carrying.hp<=0){const r=t.carrying.kind;delete t.carrying,this.event("break",t.x,t.y+1,i),r==="can"&&this.state.fires.length<32&&this.state.fires.push({id:this.next(),x:t.x,y:t.y+.5,radius:1.5,until:this.state.frame+180,owner:i,cause:"fire"})}return}const s=this.weapon(t);s!=="body"&&(t.durability[s]=Math.max(0,t.durability[s]-e),t.durability[s]||(this.event("break",t.x,t.y+oi(t),t.id),t.weapons=t.weapons.filter(r=>r!==s),t.weapons.length||(t.weapons=["body"]),t.slot=0,t.reloading=0))}canPickup(t,e){return!t.pendingSpawn&&(e.expires===void 0||e.expires>this.state.frame)&&(e.reservedFor===void 0||e.reservedFor===t.id||this.state.phaseFrame>=(e.reservedUntil??0))}pickup(t){if(!t.pendingSpawn&&this.state.chaosAt!==void 0){const i=this.state.boosts.filter(s=>s.expires>this.state.frame&&Math.hypot(s.x-t.x,s.y-t.y-.5)<2.5).sort((s,r)=>Math.abs(s.x-t.x)-Math.abs(r.x-t.x))[0];if(i){t.boost={kind:i.kind,until:this.state.frame+j0[i.kind]},this.state.boosts=this.state.boosts.filter(s=>s.id!==i.id),this.event("pickup",t.x,t.y+1,t.id);return}}if(!t.parts.armL&&!t.parts.armR)return;const e=this.state.pickups.filter(i=>this.canPickup(t,i)&&Math.hypot(i.x-t.x,i.y-t.y-1)<3).sort((i,s)=>Math.abs(i.x-t.x)-Math.abs(s.x-t.x))[0];if(e){if(!t.weapons.includes(e.weapon))if(t.weapons.length<2)t.weapons.push(e.weapon);else{const i=t.weapons[1];t.weapons[1]=e.weapon,this.state.pickups.push({id:this.next(),x:t.x-1,y:t.y+.6,weapon:i,hp:t.durability[i],charges:i==="laser"||i==="flamethrower"?t.specialAmmo[i]:void 0})}(e.weapon==="laser"||e.weapon==="flamethrower")&&(t.specialAmmo[e.weapon]=e.charges??(e.weapon==="laser"?2:24)),t.durability[e.weapon]=e.hp,t.slot=Math.max(0,t.weapons.indexOf(e.weapon)),t.reloading=0,this.state.pickups=this.state.pickups.filter(i=>i.id!==e.id),t.ammo=this.clip(t),this.event("pickup",t.x,t.y+1,t.id)}}clip(t){const e=this.weapon(t);return e==="laser"||e==="flamethrower"?t.specialAmmo[e]:e==="shotgun"||e==="smg"?t.magazines[e]:0}reload(t){const e=this.weapon(t);if(t.reloading||t.reserve<=0||!(e==="smg"||e==="shotgun"))return;const i=e==="smg"?30:6;t.magazines[e]>=i||(this.event("reload",t.x,t.y+1,t.id),t.reloading=Math.round((e==="smg"?110:40)*(this.handling(t)<2?1.5:1)))}attack(t){if(t.pendingSpawn||t.cooldown>0)return;if(t.carrying){this.throwObject(t);return}const e=this.weapon(t),i=e==="shotgun"||e==="smg",s=As(t);if(e==="laser"||e==="flamethrower"){if(t.specialAmmo[e]<=0){this.spendSpecial(t,e);return}if(e==="flamethrower"&&this.state.shots.length>117)return;t.specialAmmo[e]--,t.cooldown=e==="laser"?24:6;const r=t.x+s.x+s.dx*.4,o=t.y+s.y+s.dy*.4;if(e==="laser"){let a=r,l=o,c=!1;for(let h=0;h<=160&&!c;h++){a=r+s.dx*h*.15,l=o+s.dy*h*.15;for(const f of this.state.props)if(f.hp>0&&Math.abs(a-f.x)<f.w/2&&Math.abs(l-f.y)<f.h/2){this.damageProp(f,65,t.id),c=!0;break}if(!c)for(const f of this.state.actors){if(f.id===t.id||f.hp<=0||f.pendingSpawn)continue;const u=this.hitPart(f,a,l);if(u){this.damage(f,u,50,"laser",t.id),c=!0;break}}}this.recoilBoost(t,s.dx,s.dy,!1),this.event("shot",r,o,t.id,{weapon:e,endX:a,endY:l})}else{for(let a=-1;a<=1;a++){const l=s.angle+a*.13;this.state.shots.push({id:this.next(),owner:t.id,x:r,y:o,vx:Math.cos(l)*20,vy:Math.sin(l)*20,life:15,damage:1,weapon:e})}this.event("shot",r,o,t.id,{weapon:e})}this.spendSpecial(t,e),t.ammo=this.clip(t);return}if(e==="axe"){if(this.state.shots.length>=120)return;this.state.shots.push({id:this.next(),owner:t.id,x:t.x+s.x+s.dx*.35,y:t.y+s.y+s.dy*.35,vx:s.dx*18,vy:s.dy*18,life:22,damage:30,weapon:"axe",durability:t.durability.axe}),this.event("shot",t.x+s.x,t.y+s.y,t.id,{weapon:e}),t.weapons=t.weapons.filter(r=>r!=="axe"),t.weapons.length||(t.weapons=["body"]),t.slot=0,t.cooldown=43,t.attacking=10,t.reloading=0;return}if(i){if(t.reloading&&!(e==="shotgun"&&t.magazines.shotgun>0))return;if(t.magazines[e]<=0){this.reload(t);return}t.reloading=0,t.magazines[e]--,t.cooldown=e==="smg"?6:45;const r=Math.atan2(t.aimY,t.aimX),o=e==="shotgun"?7:1;for(let a=0;a<o&&this.state.shots.length<120;a++){const l=(this.random()-.5)*(e==="shotgun"?.38:.09)+(t.parts.head?0:(this.random()-.5)*.65),c=r+l;this.state.shots.push({id:this.next(),owner:t.id,x:t.x+s.x+s.dx*.35,y:t.y+s.y+s.dy*.35,vx:Math.cos(c)*48,vy:Math.sin(c)*48,life:e==="shotgun"?20:60,damage:e==="shotgun"?9:8,weapon:e})}this.recoilBoost(t,s.dx,s.dy,e==="shotgun"),this.event("shot",t.x,t.y+oi(t),t.id,{weapon:e})}else{t.cooldown=e==="body"?32:18,t.attacking=10;const r=(e==="shank"?$0:1.1)*(this.handling(t)<2?.85:1),o=e==="body"?8:13;if(this.event("melee",t.x,t.y+oi(t),t.id,{weapon:e}),e==="shank"){let a=!1;for(let l=1;l<=12&&!a;l++){const c=r*l/12,h=t.x+s.dx*c,f=t.y+oi(t)+s.dy*c;for(const u of this.state.props)if(u.hp>0&&Math.abs(h-u.x)<u.w/2&&Math.abs(f-u.y)<u.h/2){this.damageProp(u,o*.7,t.id),a=!0;break}if(a)break;for(const u of this.state.actors){if(u.id===t.id||u.hp<=0||u.pendingSpawn||Math.hypot(u.x-t.x,u.y-t.y)>r+.25)continue;const d=this.hitPart(u,h,f);if(d){this.damage(u,d,o,"shank",t.id),a=!0;break}}}return}for(const a of this.state.actors){if(a.id===t.id||a.hp<=0||a.pendingSpawn||Math.abs(a.y-t.y)>2.3)continue;const l=a.x-t.x;if(Math.sign(l)!==t.face||Math.abs(l)>r)continue;const c=t.y+oi(t)+t.aimY*1.5,h=ln.filter(f=>a.parts[f]>0).sort((f,u)=>Math.abs(a.y+pn(a,f).y-c)-Math.abs(a.y+pn(a,u).y-c));h[0]&&this.damage(a,h[0],o,e,t.id)}for(const a of this.state.props)if(a.hp>0&&Math.abs(a.x-t.x)<r+a.w/2&&Math.abs(a.y-t.y-oi(t)-t.aimY*1.1)<a.h/2+1){const l=a.x-t.x;(Math.sign(l)===t.face||Math.abs(l)<.6)&&this.damageProp(a,o*.7,t.id)}}t.ammo=this.clip(t)}spendSpecial(t,e){t.specialAmmo[e]>0||(t.weapons=t.weapons.filter(i=>i!==e),t.weapons.length||(t.weapons=["body"]),t.slot=0)}dropLoot(t){if(this.state.pickups.length>=32)return;const e=this.floorAt(t.x,t.y+t.h/2+.1,-100);if(e<=-50)return;const i=t.trainingFor!==void 0||this.state.phaseFrame<600&&this.openingSpawnProtected(t.x)?"shank":this.random()<.5?"laser":"flamethrower";this.state.pickups.push({id:this.next(),x:t.x,y:e+.55,weapon:i,hp:Js[i],charges:i==="laser"?2:i==="flamethrower"?24:void 0,expires:this.state.frame+600})}damageProp(t,e,i=-1){if(!(t.hp<=0)&&(t.hp=Math.max(0,t.hp-e),t.material==="fuel"&&t.hp<t.maxHp*.5&&(t.burn=Math.max(t.burn,1),this.ignite(t,this.state.frame+360,"fuel_fire",i)),t.hp<=0)){this.event("break",t.x,t.y,i,{prop:t.kind}),t.kind==="pump"&&!this.state.fires.some(s=>s.id===t.id)&&this.state.fires.push({id:t.id,x:t.x,y:Math.max(.4,t.y-t.h/2+.5),radius:3,until:this.state.frame+480,owner:i,cause:"fuel_fire"});for(let s=0;s<4&&this.state.debris.length<120;s++)this.state.debris.push({id:this.next(),x:t.x+(this.random()-.5)*t.w,y:t.y,vx:(this.random()-.5)*8,vy:2+this.random()*5,life:600,part:null,look:null,color:t.material==="glass"?2:t.material==="metal"?4:5,hp:12,w:Math.min(1,t.w/4),h:Math.min(.7,t.h/3)});if(t.material==="fuel"&&!t.exploded){t.exploded=!0,this.event("explosion",t.x,t.y,i);const s=t.kind==="can"?4:7;for(const r of this.state.actors)if(r.hp>0&&!r.pendingSpawn){const o=Math.hypot(r.x-t.x,r.y+1-t.y);o<s&&(this.damage(r,"torso",Math.max(12,55*(1-o/s)),"blast",i),r.vx+=(r.x>t.x?1:-1)*10,r.vy+=5)}for(const r of[...this.state.pickups])Math.hypot(r.x-t.x,r.y-t.y)<s&&this.damagePickup(r,50);for(const r of this.state.props)r!==t&&r.hp>0&&Math.hypot(r.x-t.x,r.y-t.y)<s&&(r.fuel>0&&(r.burn=1,this.ignite(r,this.state.frame+240,"fuel_fire",i)),r.hp=Math.max(1,r.hp-22))}this.dropLoot(t)}}ignite(t,e,i,s,r=0){var a;if(r>2||t.onFire&&t.onFire.until>this.state.frame)return;const o=this.state.actors.find(l=>l===t);o&&(o.hp<=0||o.pendingSpawn)||((a=this.state.major)==null?void 0:a.kind)==="foam"&&this.state.major.started&&this.state.frame<this.state.major.until&&Math.abs(t.x-this.state.major.x)<8||(this.event("ignite",t.x,t.y+(o?Nn(o)*.5:0),(o==null?void 0:o.id)??-1),t.onFire={until:Math.min(e,this.state.frame+240),cause:i,owner:s,depth:r})}burning(){const t=this.state,e=t.frame;t.fires=t.fires.filter(r=>r.until>e);for(const r of t.props)r.hp>0&&r.burn&&!r.onFire&&this.ignite(r,e+240,r.material==="fuel"?"fuel_fire":"fire",-1);const i=[...t.actors.filter(r=>r.hp>0&&!r.pendingSpawn).map(r=>({object:r,x:r.x,y:r.y+Nn(r)/2,w:.9,h:Nn(r)})),...t.props.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:r.w,h:r.h})),...t.debris.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:r.w,h:r.h})),...t.pickups.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:.6,h:.4})),...t.boosts.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:.8,h:.6}))],s=[...t.fires.map(r=>({...r,object:null})),...i.filter(r=>r.object.onFire&&r.object.onFire.until>e&&(r.object.onFire.depth??0)<2&&(!("material"in r.object)||["wood","fabric","fuel"].includes(r.object.material))).map(r=>({...r.object.onFire,object:r.object,x:r.x,y:r.y,radius:.75}))];for(const r of s)for(const o of i){if(r.object===o.object)continue;const a=Math.max(0,Math.abs(o.x-r.x)-o.w/2),l=Math.max(0,Math.abs(o.y-r.y)-o.h/2);Math.hypot(a,l)<=r.radius&&this.ignite(o.object,r.until,r.cause,r.owner,(r.depth??0)+1)}for(const r of i){const o=r.object.onFire;o&&o.until<=e&&(delete r.object.onFire,"burn"in r.object&&(r.object.burn=0))}if(e%15===0){for(const r of t.actors)r.hp>0&&!r.pendingSpawn&&r.onFire&&this.damage(r,"torso",2,r.onFire.cause,r.onFire.owner);for(const r of t.props)r.hp>0&&r.onFire&&this.damageProp(r,3,r.onFire.owner);for(const r of t.debris)r.hp>0&&r.onFire&&(r.hp-=2);for(const r of[...t.pickups])r.hp>0&&r.onFire&&this.damagePickup(r,2);for(const r of[...t.boosts])r.hp>0&&r.onFire&&this.damageBoost(r,2)}}grabOrThrow(t){if(this.state.chaosAt===void 0||t.pendingSpawn||t.hp<=0||(t.stunUntil??0)>this.state.frame||!t.parts.armL&&!t.parts.armR)return;if(t.carrying){this.throwObject(t);return}const e=this.state.props.filter(i=>i.hp>0&&!i.falling&&["tire","tv","can"].includes(i.kind)&&Math.hypot(i.x-t.x,i.y-t.y-1)<2.8).sort((i,s)=>Math.abs(i.x-t.x)-Math.abs(s.x-t.x))[0];if(e)t.carrying={kind:e.kind,hp:e.hp},this.state.props=this.state.props.filter(i=>i.id!==e.id);else{const i=this.state.debris.find(s=>s.part&&s.look&&Math.hypot(s.x-t.x,s.y-t.y-1)<2.8);i&&(t.carrying={kind:"limb",hp:i.hp,part:i.part,look:i.look},this.state.debris=this.state.debris.filter(s=>s.id!==i.id))}t.carrying&&this.event("pickup",t.x,t.y+1,t.id)}throwObject(t,e=!1){if(!t.carrying||this.state.thrown.length>=24)return;const i=As(t),s=t.carrying;delete t.carrying,this.state.thrown.push({...s,id:this.next(),owner:t.id,x:t.x+i.x,y:t.y+i.y,vx:e?0:i.dx*18,vy:e?0:i.dy*18+4,angle:0,life:180,bounces:0,hit:[]}),t.cooldown=24,this.event("throw",t.x,t.y+1,t.id)}recoilBoost(t,e,i,s){var r;((r=t.boost)==null?void 0:r.kind)!=="recoil"||t.boost.until<=this.state.frame||(t.vx-=e*(s?8:3),t.vy=Math.max(t.vy,s?9:3)-i*(s?5:2),t.grounded=!1)}thrownObjects(){const t=this.state;for(const e of t.thrown){e.life--;const i=e.y;if(e.vy-=24*Ie,e.x+=e.vx*Ie,e.y+=e.vy*Ie,e.angle+=e.vx*Ie*.8,e.hp<=0&&(e.life=0),e.kind==="can"&&e.life>0&&t.frame%12===0&&t.fires.length<32&&t.fires.push({id:this.next(),x:e.x,y:e.y,radius:.65,until:t.frame+90,owner:e.owner,cause:"fire"}),e.life>0&&(Math.abs(e.vx)>1||Math.abs(e.vy)>1))for(const o of t.actors)o.id===e.owner||o.hp<=0||o.pendingSpawn||e.hit.includes(o.id)||Math.abs(o.x-e.x)<.75&&e.y>o.y&&e.y<o.y+Nn(o)&&(e.hit.push(o.id),this.damage(o,"torso",e.kind==="tv"?22:16,"thrown",e.owner),e.kind==="tv"&&(o.stunUntil=t.frame+45),o.vx+=Math.sign(e.vx)*6,e.kind!=="tire"&&(e.life=0));let s=!1;for(const o of t.props)if(o.hp>0&&!["floor","roof","balcony","tire"].includes(o.kind)&&Math.abs(e.x-o.x)<o.w/2+.2&&Math.abs(e.y-o.y)<o.h/2+.2){this.damageProp(o,12,e.owner),e.vx*=-.65,e.bounces++,s=!0,e.kind!=="tire"&&(e.life=0);break}const r=this.floorAt(e.x,i-.25,e.y-.25);e.vy<0&&r>-50&&(e.y=r+.25,e.kind==="tire"&&e.bounces<3&&e.hp>0?(e.vy=Math.max(3,Math.abs(e.vy)*.65),e.vx*=.85,e.bounces++):e.life=0),s&&e.bounces>6&&(e.life=0),(e.y<-15||Math.abs(e.x)>70)&&(e.life=0),e.life<=0&&(e.kind==="can"&&e.y>-10?(t.fires.length<32&&t.fires.push({id:this.next(),x:e.x,y:e.y,radius:1.5,until:t.frame+180,owner:e.owner,cause:"fire"}),this.event("explosion",e.x,e.y,e.owner)):e.kind==="tire"&&e.hp>0&&r>-50?t.props.push({id:this.next(),kind:"tire",x:e.x,y:r+.6,w:1.1,h:1.2,hp:e.hp,maxHp:25,material:"fabric",fuel:.5,burn:0,supports:[],falling:!1,vy:0,exploded:!1,solid:!0,color:0}):t.debris.length<120&&e.y>-10&&t.debris.push({id:this.next(),x:e.x,y:e.y,vx:e.vx*.2,vy:1,life:450,part:e.part??null,look:e.look??null,color:3,hp:Math.max(1,e.hp),w:.5,h:.3}))}t.thrown=t.thrown.filter(e=>e.life>0)}majorEvents(){var i;const t=this.state;if(t.chaosAt===void 0)return;let e=t.major;if(!e){if(t.frame<(t.nextMajorAt??1/0))return;const s=t.actors.find(o=>o.human&&o.hp>0),r=Math.max(-48,Math.min(48,((s==null?void 0:s.x)??0)+6));this.event("warning",r,1),t.major={kind:t.venue==="rest"?"truck":t.venue==="motel"?"collapse":"foam",x:r,activeAt:t.frame+120,until:t.frame+600,started:!1};return}if(t.frame>=e.until){if(e.kind==="truck"){const s=t.props.find(r=>r.id===e.propId);s&&s.hp>0&&this.damageProp(s,s.hp)}delete t.major,t.nextMajorAt=t.frame+1800;return}if(!(t.frame<e.activeAt)){if(!e.started&&(e.started=!0,e.kind!=="foam")){const s=this.next(),r=e.kind==="truck";t.props.push({id:s,kind:r?"truck":"ac",x:r?-64:e.x,y:r?1.7:11,w:r?7:2,h:r?2.6:1.3,hp:r?90:35,maxHp:r?90:35,material:"metal",fuel:0,burn:0,supports:[],falling:!r,vy:r?0:-1,exploded:!1,solid:!0,color:0}),e.propId=s}if(e.kind==="foam"){t.fires=t.fires.filter(s=>Math.abs(s.x-e.x)>8);for(const s of t.actors)Math.abs(s.x-e.x)<8&&delete s.onFire;for(const s of t.props)Math.abs(s.x-e.x)<8&&(delete s.onFire,s.burn=0);for(const s of[...t.pickups,...t.debris,...t.boosts])Math.abs(s.x-e.x)<8&&delete s.onFire}else if(e.kind==="truck"){const s=t.props.find(o=>o.id===e.propId);if(!s||s.hp<=0){e.until=t.frame;return}s.x+=16*Ie,e.x=s.x;const r=t.props.find(o=>o.kind==="floor"&&o.hp>0&&Math.abs(o.x-s.x)<o.w/2);s.y=(r?r.y+r.h/2:0)+1.3;for(const o of t.actors)o.hp>0&&!o.pendingSpawn&&!((i=s.hitActors)!=null&&i.includes(o.id))&&Math.abs(o.x-s.x)<4&&o.y<s.y+1.3&&o.y+Nn(o)>s.y-1.3&&((s.hitActors??(s.hitActors=[])).push(o.id),this.damage(o,"torso",32,"traffic"),o.vx=12,o.vy=5)}}}bot(t){if(t.pendingSpawn)return qi(t.look);const e=qi(t.look),i=this.state.actors.filter(R=>R.hp>0&&!R.pendingSpawn&&R.id!==t.id),s=this.state.chaosAt!==void 0&&this.state.frame-this.state.chaosAt<720,r=i.filter(R=>R.human),o=(s&&r.length?r:i).sort((R,C)=>Math.abs(R.x-t.x)-Math.abs(C.x-t.x)),a=o[0];if(!a)return e;const l=this.weapon(t),c=l==="smg"||l==="shotgun"||l==="laser"||l==="flamethrower",h=l==="axe",f=Math.abs(a.x-t.x),u=this.state.chaosAt===void 0?void 0:t.personality,d=this.state.pickups.filter(R=>this.canPickup(t,R)&&R.weapon!=="shank"&&Math.abs(R.x-t.x)<(u==="hoarder"?22:14)).sort((R,C)=>Math.abs(R.x-t.x)-Math.abs(C.x-t.x))[0];(t.weapons.length<2||u==="hoarder")&&d?(e.move=Math.sign(d.x-t.x),Math.abs(d.x-t.x)<2&&(e.pickup=t.last.pickup+1)):e.move=f>(l==="flamethrower"?3:c?9:h?4:1.4)?Math.sign(a.x-t.x):c&&f<4?-Math.sign(a.x-t.x):0,t.x<this.state.zoneLeft+3&&(e.move=1),t.x>this.state.zoneRight-3&&(e.move=-1);const g=ln.filter(R=>a.parts[R]>0)[(Math.floor(this.state.frame/47)+t.id)%ln.filter(R=>a.parts[R]>0).length]??"torso",_=a.x+pn(a,g).x-t.x,m=a.y+pn(a,g).y-(t.y+oi(t)),p=Math.max(.1,Math.hypot(_,m));if(e.aimX=_/p,e.aimY=m/p,e.attack=f<(l==="flamethrower"?5:c?23:h?6:2.3)&&Math.abs(a.y-t.y)<(c?9:2.3),u==="charger"&&(e.move=f>1.1?Math.sign(a.x-t.x):0),u==="bomber")if(t.carrying)e.move=f>10?Math.sign(a.x-t.x):f<4?-Math.sign(a.x-t.x):0,e.attack=f<13&&t.cooldown===0;else{const R=this.state.props.filter(C=>C.hp>0&&["can","tv","tire"].includes(C.kind)&&Math.abs(C.x-t.x)<14).sort((C,F)=>+(F.kind==="can")-+(C.kind==="can")||Math.abs(C.x-t.x)-Math.abs(F.x-t.x))[0];R&&(e.move=Math.sign(R.x-t.x),Math.abs(R.x-t.x)<2&&(e.grab=t.last.grab+1))}u==="coward"&&t.onFire&&(e.move=-Math.sign(a.x-t.x),e.attack=!1,t.grounded&&this.state.frame%45===0&&(e.jump=t.last.jump+1)),this.state.boosts.find(R=>Math.abs(R.x-t.x)<2)&&!t.boost&&(e.pickup=t.last.pickup+1);const M=this.state.props.find(R=>R.hp>0&&R.solid&&R.y-R.h/2<t.y+2.7&&R.y+R.h/2>t.y+.4&&Math.abs(R.x-t.x-e.move*1.4)<R.w/2+.6),E=this.state.fires.some(R=>Math.abs(R.x-t.x-e.move*2)<R.radius+1)||this.state.props.some(R=>R.hp>0&&(R.burn||R.onFire)&&Math.abs(R.x-t.x-e.move*2)<R.w/2+1),k=this.floorAt(t.x+e.move*2,t.y+.5,t.y-1)<-50;return t.grounded&&(M||E||k||(this.state.frame+t.id*37)%113===0)&&(e.jump=t.last.jump+1),M&&(e.attack=!0,this.state.frame%20<12&&(e.aimX=e.move,e.aimY=0)),(l==="smg"||l==="shotgun")&&this.clip(t)===0&&(t.reserve>0?e.reload=t.last.reload+1:e.cycle=t.last.cycle+1),e}move(t,e){var u,d;if(t.pendingSpawn)return;if(t.bleedOutAt!==null){if(this.state.frame>=t.bleedOutAt){this.kill(t,t.bleedCause??"bleedout",t.bleedOwner);return}t.hp=Math.max(.01,t.hp-(t.bleedRate??100/360*(t.human?Pa:1)))}if(t.distressAt!==void 0&&this.state.frame>=t.distressAt&&Ca(t)===1&&t.parts.head>0){const g=t.distressCount??0;this.event(g%2===0?"scream":"cry",t.x,t.y+pn(t,"head").y,t.id),t.distressCount=g+1,t.distressAt=this.state.frame+150+(t.id*31+g*17)%90}if(t.cooldown=Math.max(0,t.cooldown-1),t.attacking=Math.max(0,t.attacking-1),t.reloading>0&&(t.reloading--,!t.reloading)){const g=this.weapon(t);if(g==="smg"){const _=Math.min(t.reserve,30-t.magazines.smg);t.magazines.smg+=_,t.reserve-=_}else g==="shotgun"&&t.reserve>0&&(t.magazines.shotgun++,t.reserve--,t.magazines.shotgun<6&&this.reload(t))}e.cycle!==t.last.cycle&&(this.event("swap",t.x,t.y+1,t.id),t.slot=(t.slot+1)%t.weapons.length,t.reloading=0),e.grab!==t.last.grab&&this.grabOrThrow(t),e.pickup!==t.last.pickup&&this.pickup(t),e.reload!==t.last.reload&&this.reload(t),!t.parts.head&&this.state.frame>=t.driftAt&&(t.drift=(this.random()*2-1)*5.5,t.driftAt=this.state.frame+15+Math.floor(this.random()*15)),t.boost&&t.boost.until<=this.state.frame&&delete t.boost;const i=(u=t.boost)==null?void 0:u.kind,s=(t.stunUntil??0)>this.state.frame,r=i==="skates"||((d=this.state.major)==null?void 0:d.kind)==="foam"&&this.state.major.started&&Math.abs(t.x-this.state.major.x)<8,o=7*this.movement(t)*(i==="cart"?2.1:i==="skates"?1.65:1),a=s?0:e.move,l=s?0:t.parts.head?a*o:a*o*.25+t.drift;t.vx+=((r&&a===0?t.vx*.985:l)-t.vx)*(r?.055:i==="cart"?.12:.2),Math.abs(e.aimX)>.05&&(t.face=Math.sign(e.aimX)),t.aimX=e.aimX,t.aimY=e.aimY,e.jump!==t.last.jump&&t.grounded&&Is(t)>0&&!s&&(this.event("jump",t.x,t.y,t.id),t.vy=14*Math.max(.4,this.movement(t)),t.grounded=!1),t.vy-=La*Ie;const c=t.x,h=t.y;t.x=Math.max(-63,Math.min(63,t.x+t.vx*Ie)),t.y+=t.vy*Ie,t.grounded=!1;const f=this.floorAt(t.x,h,t.y);t.vy<=0&&f>-50&&(t.vy<-5&&this.event("land",t.x,f,t.id),t.y=f,t.vy=0,t.grounded=!0);for(const g of this.state.props)g.hp<=0||!g.solid||g.falling||g.kind==="floor"||g.kind==="roof"||g.kind==="balcony"||Math.abs(t.x-g.x)<g.w/2+.4&&t.y+Nn(t)>g.y-g.h/2+.1&&t.y<g.y+g.h/2-.1&&Math.abs(c-g.x)>=g.w/2+.35&&(i==="cart"&&Math.abs(t.vx)>5&&this.state.frame>=(t.ramAt??0)&&(this.damageProp(g,45,t.id),t.ramAt=this.state.frame+30),g.hp>0&&(t.x=c,t.vx=i==="cart"?-t.vx*.25:0));if(t.carrying&&!t.parts.armL&&!t.parts.armR&&this.throwObject(t,!0),i==="cart"&&Math.abs(t.vx)>5&&this.state.frame>=(t.ramAt??0)){const g=this.state.actors.find(_=>_.id!==t.id&&_.hp>0&&!_.pendingSpawn&&Math.abs(_.x-t.x)<1.3&&Math.abs(_.y-t.y)<1.5);g&&(this.damage(g,"torso",18,"body",t.id),g.vx=Math.sign(t.vx)*12,g.vy=5,t.ramAt=this.state.frame+45)}e.attack&&!s&&this.attack(t),t.ammo=this.clip(t),t.y<-12&&this.kill(t,"fall"),this.state.phaseFrame%30===0&&(t.x<this.state.zoneLeft||t.x>this.state.zoneRight)&&this.damage(t,"torso",this.state.phaseFrame>10800?20:5,"zone"),this.state.phaseFrame>14400&&this.state.phaseFrame%60===0&&this.damage(t,"torso",8,"zone"),t.last={...e}}step(t=[]){var a,l;const e=this.state;e.frame++,e.phaseFrame++,e.eventSeq=0;const i=t.map(K0);if(e.phase==="lobby"||e.phase==="countdown"){this.lobby(i);return}if(e.phase==="results"){this.rematch(i);return}if(e.actors.some(c=>c.pendingSpawn)){const c=e.actors.filter(f=>f.human&&f.hp>0);e.props.some(f=>f.trainingFor!==void 0&&f.hp>0&&c.some(u=>u.id===f.trainingFor))?e.phaseFrame=0:this.releaseEnemies()}this.majorEvents();const s=e.phaseFrame/60,r=Math.max(0,s-30)*.27;e.zoneLeft=Math.min(-1,-64+r),e.zoneRight=Math.max(1,64-r);for(const c of e.actors)c.hp>0&&!c.pendingSpawn&&this.move(c,c.human?i[c.id]??qi(c.look):this.bot(c));for(const c of e.shots){c.life--,c.weapon==="axe"&&(c.vy-=18*Ie);const h=c.x,f=c.y;c.x+=c.vx*Ie,c.y+=c.vy*Ie;const u=Math.max(1,Math.ceil(Math.hypot(c.x-h,c.y-f)/.18));for(let d=1;d<=u&&c.life>0;d++){const g=h+(c.x-h)*d/u,_=f+(c.y-f)*d/u;let m=!1;for(const p of e.actors)if(p.hp>0&&!p.pendingSpawn&&p.id!==c.owner){if(c.weapon!=="flamethrower"&&(p.carrying||this.weapon(p)!=="body")&&Math.abs(g-p.x-As(p).x)<.35&&Math.abs(_-p.y-As(p).y)<.16){this.damageWeapon(p,c.damage,c.owner),m=!0;break}const T=this.hitPart(p,g,_);if(T){this.damage(p,T,c.damage,c.weapon==="flamethrower"?"fire":c.weapon,c.owner),c.weapon==="flamethrower"&&this.ignite(p,e.frame+240,"fire",c.owner),m=!0;break}}if(!m){for(const p of e.props)if(p.hp>0&&Math.abs(g-p.x)<p.w/2&&Math.abs(_-p.y)<p.h/2){this.damageProp(p,c.damage*(c.weapon==="axe"?1.6:.65),c.owner),c.weapon==="flamethrower"&&p.hp>0&&this.ignite(p,e.frame+240,"fire",c.owner),m=!0;break}}if(!m){for(const p of[...e.boosts])if(Math.abs(g-p.x)<.5&&Math.abs(_-p.y)<.4){this.damageBoost(p,c.damage),c.weapon==="flamethrower"&&this.ignite(p,e.frame+240,"fire",c.owner),m=!0;break}}if(!m){for(const p of e.thrown)if(Math.abs(g-p.x)<.5&&Math.abs(_-p.y)<.5){p.hp-=c.damage,m=!0;break}}if(!m){for(const p of[...e.pickups])if(Math.abs(g-p.x)<.6&&Math.abs(_-p.y)<.35){this.damagePickup(p,c.damage),c.weapon==="flamethrower"&&this.ignite(p,e.frame+240,"fire",c.owner),m=!0;break}}if(!m){for(const p of e.debris)if(p.hp>0&&Math.abs(g-p.x)<p.w/2&&Math.abs(_-p.y)<p.h/2){p.hp-=c.damage,c.weapon==="flamethrower"&&this.ignite(p,e.frame+240,"fire",c.owner),p.vx+=c.vx*.1,p.settled=!1,p.groundTicks=0,m=!0;break}}m&&(c.life=0,c.x=g,c.y=_)}}for(const c of e.shots)if(c.weapon==="axe"&&c.life<=0){const h=this.floorAt(c.x,c.y+.5,-100);h>-50&&c.y>-12&&this.state.pickups.push({id:this.next(),x:c.x,y:h+.55,weapon:"axe",hp:c.durability??Js.axe})}e.shots=e.shots.filter(c=>c.life>0),this.thrownObjects(),e.boosts=e.boosts.filter(c=>c.expires>e.frame);for(const c of e.props)if(!(c.hp<=0)&&(c.supports.some(h=>{var f;return((f=e.props.find(u=>u.id===h))==null?void 0:f.hp)===0})&&(c.falling=!0),c.falling)){const h=c.y;c.vy-=La*Ie,c.y+=c.vy*Ie;for(const f of e.actors)f.hp>0&&!f.pendingSpawn&&!((a=c.hitActors)!=null&&a.includes(f.id))&&Math.abs(f.x-c.x)<c.w/2+.5&&f.y+Nn(f)>c.y-c.h/2&&f.y<h+c.h/2&&((c.hitActors??(c.hitActors=[])).push(f.id),this.damage(f,"torso",32,c.kind==="roof"?"canopy":"collapse"));if(c.y-c.h/2<.4){c.y=.4+c.h/2,c.falling=!1,this.damageProp(c,c.maxHp);continue}}this.burning(),e.pickups=e.pickups.filter(c=>c.expires===void 0||c.expires>e.frame);for(const c of e.debris){c.life--;const h=c.y-c.h/2;if(c.settled){const d=this.floorAt(c.x,h+.05,h-.08);if(d>-50&&Math.abs(d-h)<.1)continue;c.settled=!1,c.groundTicks=0}c.vy-=La*Ie;const f=h;c.x+=c.vx*Ie,c.y+=c.vy*Ie,c.angle=(c.angle??0)+c.vx*.15*Ie;const u=this.floorAt(c.x,f,c.y-c.h/2);c.vy<0&&u>-50?(c.y=u+c.h/2,c.vy=Math.abs(c.vy)<1?0:c.vy*-.2,c.vx*=.85,c.groundTicks=Math.abs(c.vy)<.2&&Math.abs(c.vx)<.15?(c.groundTicks??0)+1:0,c.groundTicks>=45&&(c.settled=!0,c.vx=0,c.vy=0)):c.groundTicks=0}e.debris=e.debris.filter(c=>c.life>0&&c.hp>0&&c.y>-15);const o=e.actors.filter(c=>c.hp>0);o.length<=1&&(e.phase="results",e.phaseFrame=0,e.winner=((l=o[0])==null?void 0:l.id)??null)}}const Go={thrown:{title:"Someone weaponized the furniture.",hint:"Red-marked flying objects hurt. TVs also stun; gas cans leave fire."},traffic:{title:"The truck did not yield.",hint:"The red lane warning gives you two seconds. Get above or out of its path."},laser:{title:"The warranty did not cover laser surgery.",hint:"Loot lasers have two shots. Break line of sight before the second."},head_bleedout:{title:"You quit while you were a head.",hint:"Head loss gives you ten seconds before bleeding out. Your remaining aim and movement are unreliable."},bleedout:{title:"You have run out of legs. And blood.",hint:"Losing both legs starts a six-second bleed-out. Make your last shots count."},fuel_fire:{title:"Turns out you are flammable.",hint:"Fuel leaks are not a shortcut. Break the chain and leave the flames."},fire:{title:"Your outfit was not fireproof.",hint:"Burning fabric spreads fire. Find an unlit route."},canopy:{title:"The roof was not emotionally supportive.",hint:"Broken canopy posts mean incoming metal. Move away from the shadow."},collapse:{title:"Structural integrity was more of a suggestion.",hint:"Watch the supports. Loose objects land with consequences."},shotgun:{title:"You brought personal space to a shotgun fight.",hint:"Leave the pellet cone. Reloading opponents are easier company."},axe:{title:"You have been downsized.",hint:"Dodge the chop, then punish the recovery."},shank:{title:"That was a very local problem.",hint:"Stay outside the blade’s reach. Backpedal and use cover."},smg:{title:"Standing still simplified their paperwork.",hint:"Break line of sight and avoid trading sustained bursts."},blast:{title:"The explosion had a wider social circle.",hint:"Fuel containers detonate once. Make sure you are elsewhere."},fall:{title:"Gravity remains undefeated.",hint:"Floor panels can disappear. Jump to intact ground."},zone:{title:"The map asked you to leave.",hint:"Watch the yellow boundary and move before the next contraction."},body:{title:"You lost an argument with a torso.",hint:"Even unarmed opponents can body-check. Keep a little distance."}};class ig{constructor(){dt(this,"seen",new Set);try{for(const t of JSON.parse(localStorage.getItem("royale.advice")??"[]"))Object.hasOwn(Go,t)&&this.seen.add(t)}catch{}}discover(t){if(this.seen.has(t))return null;this.seen.add(t);try{localStorage.setItem("royale.advice",JSON.stringify([...this.seen]))}catch{}return Go[t]}}class sg{constructor(){dt(this,"seen",new Set)}collect(t,e){const i=t.filter(s=>s.frame<=e&&!this.seen.has(s.id));for(const s of i)this.seen.add(s.id);if(this.seen.size>6e3){const s=new Set(t.map(r=>r.id));this.seen=new Set([...this.seen].filter(r=>s.has(r)))}return i}reset(){this.seen.clear()}}function rg(n,t){if(!Number.isFinite(n)||!Number.isFinite(t))return{gain:0,pan:0};const e=Math.max(0,Math.abs(n)-.85,Math.abs(t)-.85);return{gain:1/(1+12*e+24*e*e),pan:Math.max(-.92,Math.min(.92,n*.8))}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fc="169",og=0,$h=1,ag=2,Bc=1,lg=2,si=3,Ii=0,en=1,tn=2,Ri=0,Ds=1,Jh=2,Zh=3,Qh=4,cg=5,ji=100,hg=101,ug=102,fg=103,dg=104,pg=200,mg=201,gg=202,_g=203,Rl=204,Cl=205,vg=206,xg=207,yg=208,Mg=209,Sg=210,bg=211,Eg=212,wg=213,Tg=214,Pl=0,Ll=1,Il=2,Bs=3,Dl=4,Ul=5,Nl=6,Ol=7,Md=0,Ag=1,Rg=2,Ci=0,Cg=1,Pg=2,Lg=3,Sd=4,Ig=5,Dg=6,Ug=7,bd=300,ks=301,zs=302,Fl=303,Bl=304,aa=306,kl=1e3,Zi=1001,zl=1002,Xe=1003,Ng=1004,$r=1005,wn=1006,Ia=1007,Qi=1008,di=1009,Ed=1010,wd=1011,Cr=1012,kc=1013,ss=1014,hi=1015,kr=1016,zc=1017,Hc=1018,Hs=1020,Td=35902,Ad=1021,Rd=1022,An=1023,Cd=1024,Pd=1025,Us=1026,Vs=1027,Ld=1028,Vc=1029,Id=1030,Gc=1031,Wc=1033,To=33776,Ao=33777,Ro=33778,Co=33779,Hl=35840,Vl=35841,Gl=35842,Wl=35843,Xl=36196,Yl=37492,ql=37496,jl=37808,Kl=37809,$l=37810,Jl=37811,Zl=37812,Ql=37813,tc=37814,ec=37815,nc=37816,ic=37817,sc=37818,rc=37819,oc=37820,ac=37821,Po=36492,lc=36494,cc=36495,Dd=36283,hc=36284,uc=36285,fc=36286,Og=3200,Fg=3201,Ud=0,Bg=1,wi="",Qe="srgb",Ui="srgb-linear",Xc="display-p3",la="display-p3-linear",Wo="linear",me="srgb",Xo="rec709",Yo="p3",fs=7680,tu=519,kg=512,zg=513,Hg=514,Nd=515,Vg=516,Gg=517,Wg=518,Xg=519,eu=35044,Da=35048,nu="300 es",ui=2e3,qo=2001;class Xs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ua=Math.PI/180,dc=180/Math.PI;function Ys(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function Be(n,t,e){return Math.max(t,Math.min(e,n))}function Yg(n,t){return(n%t+t)%t}function Na(n,t,e){return(1-e)*n+e*t}function Zs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,i,s,r,o,a,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],T=s[1],M=s[4],E=s[7],k=s[2],R=s[5],C=s[8];return r[0]=o*_+a*T+l*k,r[3]=o*m+a*M+l*R,r[6]=o*p+a*E+l*C,r[1]=c*_+h*T+f*k,r[4]=c*m+h*M+f*R,r[7]=c*p+h*E+f*C,r[2]=u*_+d*T+g*k,r[5]=u*m+d*M+g*R,r[8]=u*p+d*E+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,g=e*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Oa.makeScale(t,e)),this}rotate(t){return this.premultiply(Oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Oa=new jt;function Od(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function jo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qg(){const n=jo("canvas");return n.style.display="block",n}const iu={};function Lo(n){n in iu||(iu[n]=!0,console.warn(n))}function jg(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Kg(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $g(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const su=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ru=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qs={[Ui]:{transfer:Wo,primaries:Xo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Qe]:{transfer:me,primaries:Xo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[la]:{transfer:Wo,primaries:Yo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(ru),fromReference:n=>n.applyMatrix3(su)},[Xc]:{transfer:me,primaries:Yo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(ru),fromReference:n=>n.applyMatrix3(su).convertLinearToSRGB()}},Jg=new Set([Ui,la]),re={enabled:!0,_workingColorSpace:Ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Jg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Qs[t].toReference,s=Qs[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Qs[n].primaries},getTransfer:function(n){return n===wi?Wo:Qs[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Qs[t].luminanceCoefficients)}};function Ns(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ds;class Zg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ds===void 0&&(ds=jo("canvas")),ds.width=t.width,ds.height=t.height;const i=ds.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=jo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ns(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ns(e[i]/255)*255):e[i]=Ns(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qg=0;class Fd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Ys(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ba(s[o].image)):r.push(Ba(s[o]))}else r=Ba(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ba(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t_=0;class Ye extends Xs{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,i=Zi,s=Zi,r=wn,o=Qi,a=An,l=di,c=Ye.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=Ys(),this.name="",this.source=new Fd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kl:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case zl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kl:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case zl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=bd;Ye.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,i=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,E=(d+1)/2,k=(p+1)/2,R=(h+u)/4,C=(f+_)/4,F=(g+m)/4;return M>E&&M>k?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=R/i,r=C/i):E>k?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=R/s,r=F/s):k<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),i=C/r,s=F/r),this.set(i,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-_)/T,this.z=(u-h)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e_ extends Xs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ye(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Fd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends e_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Bd extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class n_ extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3];const u=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==u||c!==d||h!==g){let m=1-a;const p=l*u+c*d+h*g+f*_,T=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const k=Math.sqrt(M),R=Math.atan2(k,p*T);m=Math.sin(m*R)/k,a=Math.sin(a*R)/k}const E=a*T;if(l=l*m+u*E,c=c*m+d*E,h=h*m+g*E,f=f*m+_*E,m===1-a){const k=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=k,c*=k,h*=k,f*=k}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-a*d,t[e+2]=c*g+h*d+a*u-l*f,t[e+3]=h*g-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),u=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=i+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*f+this._w*u,this._x=i*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ou.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ou.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ka.copy(this).projectOnVector(t),this.sub(ka)}reflect(t){return this.sub(ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ka=new U,ou=new zr;class Hr{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jr.copy(i.boundingBox)),Jr.applyMatrix4(t.matrixWorld),this.union(Jr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),Zr.subVectors(this.max,tr),ps.subVectors(t.a,tr),ms.subVectors(t.b,tr),gs.subVectors(t.c,tr),gi.subVectors(ms,ps),_i.subVectors(gs,ms),Bi.subVectors(ps,gs);let e=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Bi.z,Bi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Bi.z,0,-Bi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Bi.y,Bi.x,0];return!za(e,ps,ms,gs,Zr)||(e=[1,0,0,0,1,0,0,0,1],!za(e,ps,ms,gs,Zr))?!1:(Qr.crossVectors(gi,_i),e=[Qr.x,Qr.y,Qr.z],za(e,ps,ms,gs,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qn=[new U,new U,new U,new U,new U,new U,new U,new U],Mn=new U,Jr=new Hr,ps=new U,ms=new U,gs=new U,gi=new U,_i=new U,Bi=new U,tr=new U,Zr=new U,Qr=new U,ki=new U;function za(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ki.fromArray(n,r);const a=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),l=t.dot(ki),c=e.dot(ki),h=i.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const i_=new Hr,er=new U,Ha=new U;class ca{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):i_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);const e=er.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(er,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(Ha)),this.expandByPoint(er.copy(t.center).sub(Ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new U,Va=new U,to=new U,vi=new U,Ga=new U,eo=new U,Wa=new U;class Yc{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Va.copy(t).add(e).multiplyScalar(.5),to.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(Va);const r=t.distanceTo(e)*.5,o=-this.direction.dot(to),a=vi.dot(this.direction),l=-vi.dot(to),c=vi.lengthSq(),h=Math.abs(1-o*o);let f,u,d,g;if(h>0)if(f=o*l-a,u=o*a-l,g=r*h,f>=0)if(u>=-g)if(u<=g){const _=1/h;f*=_,u*=_,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Va).addScaledVector(to,u),d}intersectSphere(t,e){ti.subVectors(t.center,this.origin);const i=ti.dot(this.direction),s=ti.dot(ti)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,i,s,r){Ga.subVectors(e,t),eo.subVectors(i,t),Wa.crossVectors(Ga,eo);let o=this.direction.dot(Wa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,t);const l=a*this.direction.dot(eo.crossVectors(vi,eo));if(l<0)return null;const c=a*this.direction.dot(Ga.cross(vi));if(c<0||l+c>o)return null;const h=-a*vi.dot(Wa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,i,s,r,o,a,l,c,h,f,u,d,g,_,m){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,f,u,d,g,_,m)}set(t,e,i,s,r,o,a,l,c,h,f,u,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/_s.setFromMatrixColumn(t,0).length(),r=1/_s.setFromMatrixColumn(t,1).length(),o=1/_s.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=o*h,d=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,d=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*f,e[8]=g*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-_*f}else if(t.order==="XZY"){const u=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=o*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(s_,t,r_)}lookAt(t,e,i){const s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),xi.crossVectors(i,rn),xi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),xi.crossVectors(i,rn)),xi.normalize(),no.crossVectors(rn,xi),s[0]=xi.x,s[4]=no.x,s[8]=rn.x,s[1]=xi.y,s[5]=no.y,s[9]=rn.y,s[2]=xi.z,s[6]=no.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],T=i[3],M=i[7],E=i[11],k=i[15],R=s[0],C=s[4],F=s[8],st=s[12],x=s[1],b=s[5],W=s[9],X=s[13],Q=s[2],ct=s[6],V=s[10],it=s[14],H=s[3],gt=s[7],at=s[11],L=s[15];return r[0]=o*R+a*x+l*Q+c*H,r[4]=o*C+a*b+l*ct+c*gt,r[8]=o*F+a*W+l*V+c*at,r[12]=o*st+a*X+l*it+c*L,r[1]=h*R+f*x+u*Q+d*H,r[5]=h*C+f*b+u*ct+d*gt,r[9]=h*F+f*W+u*V+d*at,r[13]=h*st+f*X+u*it+d*L,r[2]=g*R+_*x+m*Q+p*H,r[6]=g*C+_*b+m*ct+p*gt,r[10]=g*F+_*W+m*V+p*at,r[14]=g*st+_*X+m*it+p*L,r[3]=T*R+M*x+E*Q+k*H,r[7]=T*C+M*b+E*ct+k*gt,r[11]=T*F+M*W+E*V+k*at,r[15]=T*st+M*X+E*it+k*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*f-s*c*f-r*a*u+i*c*u+s*a*d-i*l*d)+_*(+e*l*d-e*c*u+r*o*u-s*o*d+s*c*h-r*l*h)+m*(+e*c*f-e*a*d-r*o*f+i*o*d+r*a*h-i*c*h)+p*(-s*a*h-e*l*f+e*a*u+s*o*f-i*o*u+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],T=f*m*c-_*u*c+_*l*d-a*m*d-f*l*p+a*u*p,M=g*u*c-h*m*c-g*l*d+o*m*d+h*l*p-o*u*p,E=h*_*c-g*f*c+g*a*d-o*_*d-h*a*p+o*f*p,k=g*f*l-h*_*l-g*a*u+o*_*u+h*a*m-o*f*m,R=e*T+i*M+s*E+r*k;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=T*C,t[1]=(_*u*r-f*m*r-_*s*d+i*m*d+f*s*p-i*u*p)*C,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*C,t[3]=(f*l*r-a*u*r-f*s*c+i*u*c+a*s*d-i*l*d)*C,t[4]=M*C,t[5]=(h*m*r-g*u*r+g*s*d-e*m*d-h*s*p+e*u*p)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*C,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*d+e*l*d)*C,t[8]=E*C,t[9]=(g*f*r-h*_*r-g*i*d+e*_*d+h*i*p-e*f*p)*C,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*p+e*a*p)*C,t[11]=(h*a*r-o*f*r-h*i*c+e*f*c+o*i*d-e*a*d)*C,t[12]=k*C,t[13]=(h*_*s-g*f*s+g*i*u-e*_*u-h*i*m+e*f*m)*C,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*C,t[15]=(o*f*s-h*a*s+h*i*l-e*f*l-o*i*u+e*a*u)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,g=r*f,_=o*h,m=o*f,p=a*f,T=l*c,M=l*h,E=l*f,k=i.x,R=i.y,C=i.z;return s[0]=(1-(_+p))*k,s[1]=(d+E)*k,s[2]=(g-M)*k,s[3]=0,s[4]=(d-E)*R,s[5]=(1-(u+p))*R,s[6]=(m+T)*R,s[7]=0,s[8]=(g+M)*C,s[9]=(m-T)*C,s[10]=(1-(u+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=_s.set(s[0],s[1],s[2]).length();const o=_s.set(s[4],s[5],s[6]).length(),a=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Sn.copy(this);const c=1/r,h=1/o,f=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,e.setFromRotationMatrix(Sn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=ui){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),u=(i+s)/(i-s);let d,g;if(a===ui)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===qo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ui){const l=this.elements,c=1/(e-t),h=1/(i-s),f=1/(o-r),u=(e+t)*c,d=(i+s)*h;let g,_;if(a===ui)g=(o+r)*f,_=-2*f;else if(a===qo)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const _s=new U,Sn=new de,s_=new U(0,0,0),r_=new U(1,1,1),xi=new U,no=new U,rn=new U,au=new de,lu=new zr;class jn{constructor(t=0,e=0,i=0,s=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return au.makeRotationFromQuaternion(t),this.setFromRotationMatrix(au,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lu.setFromEuler(this),this.setFromQuaternion(lu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class qc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let o_=0;const cu=new U,vs=new zr,ei=new de,io=new U,nr=new U,a_=new U,l_=new zr,hu=new U(1,0,0),uu=new U(0,1,0),fu=new U(0,0,1),du={type:"added"},c_={type:"removed"},xs={type:"childadded",child:null},Xa={type:"childremoved",child:null};class Pe extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new U,e=new jn,i=new zr,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new jt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(hu,t)}rotateY(t){return this.rotateOnAxis(uu,t)}rotateZ(t){return this.rotateOnAxis(fu,t)}translateOnAxis(t,e){return cu.copy(t).applyQuaternion(this.quaternion),this.position.add(cu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hu,t)}translateY(t){return this.translateOnAxis(uu,t)}translateZ(t){return this.translateOnAxis(fu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?io.copy(t):io.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(nr,io,this.up):ei.lookAt(io,nr,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(ei),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(du),xs.child=t,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(c_),Xa.child=t,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(du),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,a_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,l_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new U(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new U,ni=new U,Ya=new U,ii=new U,ys=new U,Ms=new U,pu=new U,qa=new U,ja=new U,Ka=new U,$a=new le,Ja=new le,Za=new le;class Tn{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),bn.subVectors(t,e),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){bn.subVectors(s,e),ni.subVectors(i,e),Ya.subVectors(t,e);const o=bn.dot(bn),a=bn.dot(ni),l=bn.dot(Ya),c=ni.dot(ni),h=ni.dot(Ya),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return $a.setScalar(0),Ja.setScalar(0),Za.setScalar(0),$a.fromBufferAttribute(t,e),Ja.fromBufferAttribute(t,i),Za.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector($a,r.x),o.addScaledVector(Ja,r.y),o.addScaledVector(Za,r.z),o}static isFrontFacing(t,e,i,s){return bn.subVectors(i,e),ni.subVectors(t,e),bn.cross(ni).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),bn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;ys.subVectors(s,i),Ms.subVectors(r,i),qa.subVectors(t,i);const l=ys.dot(qa),c=Ms.dot(qa);if(l<=0&&c<=0)return e.copy(i);ja.subVectors(t,s);const h=ys.dot(ja),f=Ms.dot(ja);if(h>=0&&f<=h)return e.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(ys,o);Ka.subVectors(t,r);const d=ys.dot(Ka),g=Ms.dot(Ka);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Ms,a);const m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return pu.subVectors(r,s),a=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(pu,a);const p=1/(m+_+u);return o=_*p,a=u*p,e.copy(i).addScaledVector(ys,o).addScaledVector(Ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},so={h:0,s:0,l:0};function Qa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=re.workingColorSpace){if(t=Yg(t,1),e=Be(e,0,1),i=Be(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Qa(o,r,t+1/3),this.g=Qa(o,r,t),this.b=Qa(o,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=Qe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const i=kd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}copyLinearToSRGB(t){return this.r=Fa(t.r),this.g=Fa(t.g),this.b=Fa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return re.fromWorkingColorSpace(Oe.copy(this),t),Math.round(Be(Oe.r*255,0,255))*65536+Math.round(Be(Oe.g*255,0,255))*256+Math.round(Be(Oe.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Oe.copy(this),e);const i=Oe.r,s=Oe.g,r=Oe.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Qe){re.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,i=Oe.g,s=Oe.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(so);const i=Na(yi.h,so.h,e),s=Na(yi.s,so.s,e),r=Na(yi.l,so.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new Kt;Kt.NAMES=kd;let h_=0;class ls extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=Ds,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Cl,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rl&&(i.blendSrc=this.blendSrc),this.blendDst!==Cl&&(i.blendDst=this.blendDst),this.blendEquation!==ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mn extends ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new U,ro=new Tt;class hn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=eu,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ro.fromBufferAttribute(this,e),ro.applyMatrix3(t),this.setXY(e,ro.x,ro.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Zs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=$e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zs(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zs(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zs(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==eu&&(t.usage=this.usage),t}}class zd extends hn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Hd extends hn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Se extends hn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let u_=0;const dn=new de,tl=new Pe,Ss=new U,on=new Hr,ir=new Hr,Ce=new U;class qe extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Od(t)?Hd:zd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,i){return dn.makeTranslation(t,e,i),this.applyMatrix4(dn),this}scale(t,e,i){return dn.makeScale(t,e,i),this.applyMatrix4(dn),this}lookAt(t){return tl.lookAt(t),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ca);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(on.min,ir.min),on.expandByPoint(Ce),Ce.addVectors(on.max,ir.max),on.expandByPoint(Ce)):(on.expandByPoint(ir.min),on.expandByPoint(ir.max))}on.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ce.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(t,c),Ce.add(Ss)),s=Math.max(s,i.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new U,l[F]=new U;const c=new U,h=new U,f=new U,u=new Tt,d=new Tt,g=new Tt,_=new U,m=new U;function p(F,st,x){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,st),f.fromBufferAttribute(i,x),u.fromBufferAttribute(r,F),d.fromBufferAttribute(r,st),g.fromBufferAttribute(r,x),h.sub(c),f.sub(c),d.sub(u),g.sub(u);const b=1/(d.x*g.y-g.x*d.y);isFinite(b)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(b),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(b),a[F].add(_),a[st].add(_),a[x].add(_),l[F].add(m),l[st].add(m),l[x].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let F=0,st=T.length;F<st;++F){const x=T[F],b=x.start,W=x.count;for(let X=b,Q=b+W;X<Q;X+=3)p(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const M=new U,E=new U,k=new U,R=new U;function C(F){k.fromBufferAttribute(s,F),R.copy(k);const st=a[F];M.copy(st),M.sub(k.multiplyScalar(k.dot(st))).normalize(),E.crossVectors(R,st);const b=E.dot(l[F])<0?-1:1;o.setXYZW(F,M.x,M.y,M.z,b)}for(let F=0,st=T.length;F<st;++F){const x=T[F],b=x.start,W=x.count;for(let X=b,Q=b+W;X<Q;X+=3)C(t.getX(X+0)),C(t.getX(X+1)),C(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,f=new U;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new hn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mu=new de,zi=new Yc,oo=new ca,gu=new U,ao=new U,lo=new U,co=new U,el=new U,ho=new U,_u=new U,uo=new U;class fe extends Pe{constructor(t=new qe,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(el.fromBufferAttribute(f,t),o?ho.addScaledVector(el,h):ho.addScaledVector(el.sub(e),h))}e.add(ho)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(oo.containsPoint(zi.origin)===!1&&(zi.intersectSphere(oo,gu)===null||zi.origin.distanceToSquared(gu)>(t.far-t.near)**2))&&(mu.copy(r).invert(),zi.copy(t.ray).applyMatrix4(mu),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=T,k=M;E<k;E+=3){const R=a.getX(E),C=a.getX(E+1),F=a.getX(E+2);s=fo(this,p,t,i,c,h,f,R,C,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),M=a.getX(m+1),E=a.getX(m+2);s=fo(this,o,t,i,c,h,f,T,M,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=T,k=M;E<k;E+=3){const R=E,C=E+1,F=E+2;s=fo(this,p,t,i,c,h,f,R,C,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=m,M=m+1,E=m+2;s=fo(this,o,t,i,c,h,f,T,M,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function f_(n,t,e,i,s,r,o,a){let l;if(t.side===en?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ii,a),l===null)return null;uo.copy(a),uo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(uo);return c<e.near||c>e.far?null:{distance:c,point:uo.clone(),object:n}}function fo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ao),n.getVertexPosition(l,lo),n.getVertexPosition(c,co);const h=f_(n,t,e,i,ao,lo,co,_u);if(h){const f=new U;Tn.getBarycoord(_u,ao,lo,co,f),s&&(h.uv=Tn.getInterpolatedAttribute(s,a,l,c,f,new Tt)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,a,l,c,f,new Tt)),o&&(h.normal=Tn.getInterpolatedAttribute(o,a,l,c,f,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new U,materialIndex:0};Tn.getNormal(ao,lo,co,u.normal),h.face=u,h.barycoord=f}return h}class Gn extends qe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(f,2));function g(_,m,p,T,M,E,k,R,C,F,st){const x=E/C,b=k/F,W=E/2,X=k/2,Q=R/2,ct=C+1,V=F+1;let it=0,H=0;const gt=new U;for(let at=0;at<V;at++){const L=at*b-X;for(let It=0;It<ct;It++){const $t=It*x-W;gt[_]=$t*T,gt[m]=L*M,gt[p]=Q,c.push(gt.x,gt.y,gt.z),gt[_]=0,gt[m]=0,gt[p]=R>0?1:-1,h.push(gt.x,gt.y,gt.z),f.push(It/C),f.push(1-at/F),it+=1}}for(let at=0;at<F;at++)for(let L=0;L<C;L++){const It=u+L+ct*at,$t=u+L+ct*(at+1),D=u+(L+1)+ct*(at+1),j=u+(L+1)+ct*at;l.push(It,$t,j),l.push($t,D,j),H+=6}a.addGroup(d,H,st),d+=H,u+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ve(n){const t={};for(let e=0;e<n.length;e++){const i=Gs(n[e]);for(const s in i)t[s]=i[s]}return t}function d_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Vd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const p_={clone:Gs,merge:Ve};var m_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m_,this.fragmentShader=g_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=d_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Gd extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new U,vu=new Tt,xu=new Tt;class gn extends Gd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=dc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dc*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,vu,xu),e.subVectors(xu,vu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ua*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const bs=-90,Es=1;class __ extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(bs,Es,t,e);s.layers=this.layers,this.add(s);const r=new gn(bs,Es,t,e);r.layers=this.layers,this.add(r);const o=new gn(bs,Es,t,e);o.layers=this.layers,this.add(o);const a=new gn(bs,Es,t,e);a.layers=this.layers,this.add(a);const l=new gn(bs,Es,t,e);l.layers=this.layers,this.add(l);const c=new gn(bs,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ui)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Wd extends Ye{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ks,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class v_ extends rs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Wd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gn(5,5,5),r=new Di({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Ri});r.uniforms.tEquirect.value=e;const o=new fe(s,r),a=e.minFilter;return e.minFilter===Qi&&(e.minFilter=wn),new __(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const nl=new U,x_=new U,y_=new jt;class bi{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=nl.subVectors(i,e).cross(x_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(nl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||y_.getNormalMatrix(t),s=this.coplanarPoint(nl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new ca,po=new U;class jc{constructor(t=new bi,e=new bi,i=new bi,s=new bi,r=new bi,o=new bi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ui){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],T=s[13],M=s[14],E=s[15];if(i[0].setComponents(l-r,u-c,m-d,E-p).normalize(),i[1].setComponents(l+r,u+c,m+d,E+p).normalize(),i[2].setComponents(l+o,u+h,m+g,E+T).normalize(),i[3].setComponents(l-o,u-h,m-g,E-T).normalize(),i[4].setComponents(l-a,u-f,m-_,E-M).normalize(),e===ui)i[5].setComponents(l+a,u+f,m+_,E+M).normalize();else if(e===qo)i[5].setComponents(a,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(po.x=s.normal.x>0?t.max.x:t.min.x,po.y=s.normal.y>0?t.max.y:t.min.y,po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function M_(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class cs extends qe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const T=p*u-o;for(let M=0;M<c;M++){const E=M*f-r;g.push(E,-T,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const M=T+c*p,E=T+c*(p+1),k=T+1+c*(p+1),R=T+1+c*p;d.push(M,E,R),d.push(E,k,R)}this.setIndex(d),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.width,t.height,t.widthSegments,t.heightSegments)}}var S_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b_=`#ifdef USE_ALPHAHASH
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
#endif`,E_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R_=`#ifdef USE_AOMAP
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
#endif`,C_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P_=`#ifdef USE_BATCHING
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
#endif`,L_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N_=`#ifdef USE_IRIDESCENCE
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
#endif`,O_=`#ifdef USE_BUMPMAP
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
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,W_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,X_=`#define PI 3.141592653589793
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
} // validated`,Y_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q_=`vec3 transformedNormal = objectNormal;
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
#endif`,j_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q_=`
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
}`,tv=`#ifdef USE_ENVMAP
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
#endif`,ev=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nv=`#ifdef USE_ENVMAP
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
#endif`,iv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sv=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ov=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,av=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cv=`#ifdef USE_GRADIENTMAP
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
}`,hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dv=`uniform bool receiveShadow;
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
#endif`,pv=`#ifdef USE_ENVMAP
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
#endif`,mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_v=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xv=`PhysicalMaterial material;
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
#endif`,yv=`struct PhysicalMaterial {
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
}`,Mv=`
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
#endif`,Sv=`#if defined( RE_IndirectDiffuse )
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
#endif`,bv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ev=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lv=`#if defined( USE_POINTS_UV )
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
#endif`,Iv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ov=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fv=`#ifdef USE_MORPHTARGETS
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
#endif`,Bv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wv=`#ifdef USE_NORMALMAP
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
#endif`,Xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$v=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ox=`float getShadowMask() {
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
}`,ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lx=`#ifdef USE_SKINNING
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
#endif`,cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hx=`#ifdef USE_SKINNING
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
#endif`,ux=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,px=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mx=`#ifdef USE_TRANSMISSION
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
#endif`,gx=`#ifdef USE_TRANSMISSION
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
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sx=`uniform sampler2D t2D;
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
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ex=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`#include <common>
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
}`,Rx=`#if DEPTH_PACKING == 3200
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
}`,Cx=`#define DISTANCE
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
}`,Px=`#define DISTANCE
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
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ix=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`uniform float scale;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,Nx=`#include <common>
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
}`,Ox=`uniform vec3 diffuse;
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
}`,Fx=`#define LAMBERT
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
}`,Bx=`#define LAMBERT
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
}`,kx=`#define MATCAP
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
}`,zx=`#define MATCAP
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
}`,Hx=`#define NORMAL
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
}`,Vx=`#define NORMAL
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
}`,Gx=`#define PHONG
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
}`,Wx=`#define PHONG
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
}`,Xx=`#define STANDARD
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
}`,Yx=`#define STANDARD
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
}`,qx=`#define TOON
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
}`,jx=`#define TOON
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
}`,Kx=`uniform float size;
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
}`,$x=`uniform vec3 diffuse;
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
}`,Jx=`#include <common>
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
}`,Zx=`uniform vec3 color;
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
}`,Qx=`uniform float rotation;
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
}`,ty=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:S_,alphahash_pars_fragment:b_,alphamap_fragment:E_,alphamap_pars_fragment:w_,alphatest_fragment:T_,alphatest_pars_fragment:A_,aomap_fragment:R_,aomap_pars_fragment:C_,batching_pars_vertex:P_,batching_vertex:L_,begin_vertex:I_,beginnormal_vertex:D_,bsdfs:U_,iridescence_fragment:N_,bumpmap_pars_fragment:O_,clipping_planes_fragment:F_,clipping_planes_pars_fragment:B_,clipping_planes_pars_vertex:k_,clipping_planes_vertex:z_,color_fragment:H_,color_pars_fragment:V_,color_pars_vertex:G_,color_vertex:W_,common:X_,cube_uv_reflection_fragment:Y_,defaultnormal_vertex:q_,displacementmap_pars_vertex:j_,displacementmap_vertex:K_,emissivemap_fragment:$_,emissivemap_pars_fragment:J_,colorspace_fragment:Z_,colorspace_pars_fragment:Q_,envmap_fragment:tv,envmap_common_pars_fragment:ev,envmap_pars_fragment:nv,envmap_pars_vertex:iv,envmap_physical_pars_fragment:pv,envmap_vertex:sv,fog_vertex:rv,fog_pars_vertex:ov,fog_fragment:av,fog_pars_fragment:lv,gradientmap_pars_fragment:cv,lightmap_pars_fragment:hv,lights_lambert_fragment:uv,lights_lambert_pars_fragment:fv,lights_pars_begin:dv,lights_toon_fragment:mv,lights_toon_pars_fragment:gv,lights_phong_fragment:_v,lights_phong_pars_fragment:vv,lights_physical_fragment:xv,lights_physical_pars_fragment:yv,lights_fragment_begin:Mv,lights_fragment_maps:Sv,lights_fragment_end:bv,logdepthbuf_fragment:Ev,logdepthbuf_pars_fragment:wv,logdepthbuf_pars_vertex:Tv,logdepthbuf_vertex:Av,map_fragment:Rv,map_pars_fragment:Cv,map_particle_fragment:Pv,map_particle_pars_fragment:Lv,metalnessmap_fragment:Iv,metalnessmap_pars_fragment:Dv,morphinstance_vertex:Uv,morphcolor_vertex:Nv,morphnormal_vertex:Ov,morphtarget_pars_vertex:Fv,morphtarget_vertex:Bv,normal_fragment_begin:kv,normal_fragment_maps:zv,normal_pars_fragment:Hv,normal_pars_vertex:Vv,normal_vertex:Gv,normalmap_pars_fragment:Wv,clearcoat_normal_fragment_begin:Xv,clearcoat_normal_fragment_maps:Yv,clearcoat_pars_fragment:qv,iridescence_pars_fragment:jv,opaque_fragment:Kv,packing:$v,premultiplied_alpha_fragment:Jv,project_vertex:Zv,dithering_fragment:Qv,dithering_pars_fragment:tx,roughnessmap_fragment:ex,roughnessmap_pars_fragment:nx,shadowmap_pars_fragment:ix,shadowmap_pars_vertex:sx,shadowmap_vertex:rx,shadowmask_pars_fragment:ox,skinbase_vertex:ax,skinning_pars_vertex:lx,skinning_vertex:cx,skinnormal_vertex:hx,specularmap_fragment:ux,specularmap_pars_fragment:fx,tonemapping_fragment:dx,tonemapping_pars_fragment:px,transmission_fragment:mx,transmission_pars_fragment:gx,uv_pars_fragment:_x,uv_pars_vertex:vx,uv_vertex:xx,worldpos_vertex:yx,background_vert:Mx,background_frag:Sx,backgroundCube_vert:bx,backgroundCube_frag:Ex,cube_vert:wx,cube_frag:Tx,depth_vert:Ax,depth_frag:Rx,distanceRGBA_vert:Cx,distanceRGBA_frag:Px,equirect_vert:Lx,equirect_frag:Ix,linedashed_vert:Dx,linedashed_frag:Ux,meshbasic_vert:Nx,meshbasic_frag:Ox,meshlambert_vert:Fx,meshlambert_frag:Bx,meshmatcap_vert:kx,meshmatcap_frag:zx,meshnormal_vert:Hx,meshnormal_frag:Vx,meshphong_vert:Gx,meshphong_frag:Wx,meshphysical_vert:Xx,meshphysical_frag:Yx,meshtoon_vert:qx,meshtoon_frag:jx,points_vert:Kx,points_frag:$x,shadow_vert:Jx,shadow_frag:Zx,sprite_vert:Qx,sprite_frag:ty},yt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},kn={basic:{uniforms:Ve([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ve([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ve([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ve([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ve([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ve([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ve([yt.points,yt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ve([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ve([yt.common,yt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ve([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ve([yt.sprite,yt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Ve([yt.common,yt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Ve([yt.lights,yt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};kn.physical={uniforms:Ve([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const mo={r:0,b:0,g:0},Vi=new jn,ey=new de;function ny(n,t,e,i,s,r,o){const a=new Kt(0);let l=r===!0?0:1,c,h,f=null,u=0,d=null;function g(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?e:t).get(M)),M}function _(T){let M=!1;const E=g(T);E===null?p(a,l):E&&E.isColor&&(p(E,1),M=!0);const k=n.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,M){const E=g(M);E&&(E.isCubeTexture||E.mapping===aa)?(h===void 0&&(h=new fe(new Gn(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Gs(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vi.copy(M.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ey.makeRotationFromEuler(Vi)),h.material.toneMapped=re.getTransfer(E.colorSpace)!==me,(f!==E||u!==E.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=E,u=E.version,d=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new fe(new cs(2,2),new Di({name:"BackgroundMaterial",uniforms:Gs(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=re.getTransfer(E.colorSpace)!==me,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||u!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,u=E.version,d=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,M){T.getRGB(mo,Vd(n)),i.buffers.color.setClear(mo.r,mo.g,mo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:_,addToRenderList:m}}function iy(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(x,b,W,X,Q){let ct=!1;const V=f(X,W,b);r!==V&&(r=V,c(r.object)),ct=d(x,X,W,Q),ct&&g(x,X,W,Q),Q!==null&&t.update(Q,n.ELEMENT_ARRAY_BUFFER),(ct||o)&&(o=!1,E(x,b,W,X),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function f(x,b,W){const X=W.wireframe===!0;let Q=i[x.id];Q===void 0&&(Q={},i[x.id]=Q);let ct=Q[b.id];ct===void 0&&(ct={},Q[b.id]=ct);let V=ct[X];return V===void 0&&(V=u(l()),ct[X]=V),V}function u(x){const b=[],W=[],X=[];for(let Q=0;Q<e;Q++)b[Q]=0,W[Q]=0,X[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:W,attributeDivisors:X,object:x,attributes:{},index:null}}function d(x,b,W,X){const Q=r.attributes,ct=b.attributes;let V=0;const it=W.getAttributes();for(const H in it)if(it[H].location>=0){const at=Q[H];let L=ct[H];if(L===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(L=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(L=x.instanceColor)),at===void 0||at.attribute!==L||L&&at.data!==L.data)return!0;V++}return r.attributesNum!==V||r.index!==X}function g(x,b,W,X){const Q={},ct=b.attributes;let V=0;const it=W.getAttributes();for(const H in it)if(it[H].location>=0){let at=ct[H];at===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(at=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(at=x.instanceColor));const L={};L.attribute=at,at&&at.data&&(L.data=at.data),Q[H]=L,V++}r.attributes=Q,r.attributesNum=V,r.index=X}function _(){const x=r.newAttributes;for(let b=0,W=x.length;b<W;b++)x[b]=0}function m(x){p(x,0)}function p(x,b){const W=r.newAttributes,X=r.enabledAttributes,Q=r.attributeDivisors;W[x]=1,X[x]===0&&(n.enableVertexAttribArray(x),X[x]=1),Q[x]!==b&&(n.vertexAttribDivisor(x,b),Q[x]=b)}function T(){const x=r.newAttributes,b=r.enabledAttributes;for(let W=0,X=b.length;W<X;W++)b[W]!==x[W]&&(n.disableVertexAttribArray(W),b[W]=0)}function M(x,b,W,X,Q,ct,V){V===!0?n.vertexAttribIPointer(x,b,W,Q,ct):n.vertexAttribPointer(x,b,W,X,Q,ct)}function E(x,b,W,X){_();const Q=X.attributes,ct=W.getAttributes(),V=b.defaultAttributeValues;for(const it in ct){const H=ct[it];if(H.location>=0){let gt=Q[it];if(gt===void 0&&(it==="instanceMatrix"&&x.instanceMatrix&&(gt=x.instanceMatrix),it==="instanceColor"&&x.instanceColor&&(gt=x.instanceColor)),gt!==void 0){const at=gt.normalized,L=gt.itemSize,It=t.get(gt);if(It===void 0)continue;const $t=It.buffer,D=It.type,j=It.bytesPerElement,vt=D===n.INT||D===n.UNSIGNED_INT||gt.gpuType===kc;if(gt.isInterleavedBufferAttribute){const xt=gt.data,Gt=xt.stride,Ut=gt.offset;if(xt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<H.locationSize;Jt++)p(H.location+Jt,xt.meshPerAttribute);x.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Jt=0;Jt<H.locationSize;Jt++)m(H.location+Jt);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let Jt=0;Jt<H.locationSize;Jt++)M(H.location+Jt,L/H.locationSize,D,at,Gt*j,(Ut+L/H.locationSize*Jt)*j,vt)}else{if(gt.isInstancedBufferAttribute){for(let xt=0;xt<H.locationSize;xt++)p(H.location+xt,gt.meshPerAttribute);x.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let xt=0;xt<H.locationSize;xt++)m(H.location+xt);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let xt=0;xt<H.locationSize;xt++)M(H.location+xt,L/H.locationSize,D,at,L*j,L/H.locationSize*xt*j,vt)}}else if(V!==void 0){const at=V[it];if(at!==void 0)switch(at.length){case 2:n.vertexAttrib2fv(H.location,at);break;case 3:n.vertexAttrib3fv(H.location,at);break;case 4:n.vertexAttrib4fv(H.location,at);break;default:n.vertexAttrib1fv(H.location,at)}}}}T()}function k(){F();for(const x in i){const b=i[x];for(const W in b){const X=b[W];for(const Q in X)h(X[Q].object),delete X[Q];delete b[W]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const b=i[x.id];for(const W in b){const X=b[W];for(const Q in X)h(X[Q].object),delete X[Q];delete b[W]}delete i[x.id]}function C(x){for(const b in i){const W=i[b];if(W[x.id]===void 0)continue;const X=W[x.id];for(const Q in X)h(X[Q].object),delete X[Q];delete W[x.id]}}function F(){st(),o=!0,r!==s&&(r=s,c(r.object))}function st(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:st,dispose:k,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function sy(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),e.update(h,i,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,i,1)}function l(c,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];for(let _=0;_<u.length;_++)e.update(g,i,u[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ry(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==An&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const F=C===kr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==di&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==hi&&!F)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const C=t.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),k=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:k,maxSamples:R}}function oy(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new bi,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const T=r?0:i,M=T*4;let E=p.clippingState||null;l.value=E,E=h(g,u,M,d);for(let k=0;k!==M;++k)E[k]=e[k];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,T=u.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,E=d;M!==_;++M,E+=4)o.copy(f[M]).applyMatrix4(T,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function ay(n){let t=new WeakMap;function e(o,a){return a===Fl?o.mapping=ks:a===Bl&&(o.mapping=zs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fl||a===Bl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new v_(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Kc extends Gd{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Rs=4,yu=[.125,.215,.35,.446,.526,.582],Ki=20,il=new Kc,Mu=new Kt;let sl=null,rl=0,ol=0,al=!1;const Xi=(1+Math.sqrt(5))/2,ws=1/Xi,Su=[new U(-Xi,ws,0),new U(Xi,ws,0),new U(-ws,0,Xi),new U(ws,0,Xi),new U(0,Xi,-ws),new U(0,Xi,ws),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class bu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sl,rl,ol),this._renderer.xr.enabled=al,t.scissorTest=!1,go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ks||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:kr,format:An,colorSpace:Ui,depthBuffer:!1},s=Eu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ly(r)),this._blurMaterial=cy(r,t,e)}return s}_compileMaterial(t){const e=new fe(this._lodPlanes[0],t);this._renderer.compile(e,il)}_sceneToCubeUV(t,e,i,s){const a=new gn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Mu),h.toneMapping=Ci,h.autoClear=!1;const d=new mn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new fe(new Gn,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Mu),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;go(s,T*M,p>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ks||t.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;go(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,il)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Su[(s-r-1)%Su.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new fe(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ki-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);const p=[];let T=0;for(let C=0;C<Ki;++C){const F=C/_,st=Math.exp(-F*F/2);p.push(st),C===0?T+=st:C<m&&(T+=2*st)}for(let C=0;C<p.length;C++)p[C]=p[C]/T;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-i;const E=this._sizeLods[s],k=3*E*(s>M-Rs?s-M+Rs:0),R=4*(this._cubeSize-E);go(e,k,R,3*E,2*E),l.setRenderTarget(e),l.render(f,il)}}function ly(n){const t=[],e=[],i=[];let s=n;const r=n-Rs+1+yu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Rs?l=yu[o-n+Rs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*d),M=new Float32Array(m*g*d),E=new Float32Array(p*g*d);for(let R=0;R<d;R++){const C=R%3*2/3-1,F=R>2?0:-1,st=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];T.set(st,_*g*R),M.set(u,m*g*R);const x=[R,R,R,R,R,R];E.set(x,p*g*R)}const k=new qe;k.setAttribute("position",new hn(T,_)),k.setAttribute("uv",new hn(M,m)),k.setAttribute("faceIndex",new hn(E,p)),t.push(k),s>Rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Eu(n,t,e){const i=new rs(n,t,e);return i.texture.mapping=aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function go(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function cy(n,t,e){const i=new Float32Array(Ki),s=new U(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function wu(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Tu(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function $c(){return`

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
	`}function hy(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fl||l===Bl,h=l===ks||l===zs;if(c||h){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new bu(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new bu(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function uy(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Lo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function fy(n,t,e,i){const s={},r=new WeakMap;function o(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}u.removeEventListener("dispose",o),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const g in u)t.update(u[g],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(f){const u=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let M=0,E=T.length;M<E;M+=3){const k=T[M+0],R=T[M+1],C=T[M+2];u.push(k,R,R,C,C,k)}}else if(g!==void 0){const T=g.array;_=g.version;for(let M=0,E=T.length/3-1;M<E;M+=3){const k=M+0,R=M+1,C=M+2;u.push(k,R,R,C,C,k)}}else return;const m=new(Od(u)?Hd:zd)(u,1);m.version=_;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function dy(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*o),e.update(d,i,1)}function c(u,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,u*o,g),e.update(d,i,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function f(u,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,u,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T];for(let T=0;T<_.length;T++)e.update(p,i,_[T])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function py(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function my(n,t,e){const i=new WeakMap,s=new le;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let st=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",st)};u!==void 0&&u.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let E=a.attributes.position.count*M,k=1;E>t.maxTextureSize&&(k=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const R=new Float32Array(E*k*4*f),C=new Bd(R,E,k,f);C.type=hi,C.needsUpdate=!0;const F=M*4;for(let x=0;x<f;x++){const b=m[x],W=p[x],X=T[x],Q=E*k*4*x;for(let ct=0;ct<b.count;ct++){const V=ct*F;d===!0&&(s.fromBufferAttribute(b,ct),R[Q+V+0]=s.x,R[Q+V+1]=s.y,R[Q+V+2]=s.z,R[Q+V+3]=0),g===!0&&(s.fromBufferAttribute(W,ct),R[Q+V+4]=s.x,R[Q+V+5]=s.y,R[Q+V+6]=s.z,R[Q+V+7]=0),_===!0&&(s.fromBufferAttribute(X,ct),R[Q+V+8]=s.x,R[Q+V+9]=s.y,R[Q+V+10]=s.z,R[Q+V+11]=X.itemSize===4?s.w:1)}}u={count:f,texture:C,size:new Tt(E,k)},i.set(a,u),a.addEventListener("dispose",st)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function gy(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Yd extends Ye{constructor(t,e,i,s,r,o,a,l,c,h=Us){if(h!==Us&&h!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Us&&(i=ss),i===void 0&&h===Vs&&(i=Hs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const qd=new Ye,Au=new Yd(1,1),jd=new Bd,Kd=new n_,$d=new Wd,Ru=[],Cu=[],Pu=new Float32Array(16),Lu=new Float32Array(9),Iu=new Float32Array(4);function qs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Ru[s];if(r===void 0&&(r=new Float32Array(s),Ru[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ae(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Re(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ha(n,t){let e=Cu[t];e===void 0&&(e=new Int32Array(t),Cu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function _y(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function vy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2fv(this.addr,t),Re(e,t)}}function xy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;n.uniform3fv(this.addr,t),Re(e,t)}}function yy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4fv(this.addr,t),Re(e,t)}}function My(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;Iu.set(i),n.uniformMatrix2fv(this.addr,!1,Iu),Re(e,i)}}function Sy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;Lu.set(i),n.uniformMatrix3fv(this.addr,!1,Lu),Re(e,i)}}function by(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;Pu.set(i),n.uniformMatrix4fv(this.addr,!1,Pu),Re(e,i)}}function Ey(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function wy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2iv(this.addr,t),Re(e,t)}}function Ty(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3iv(this.addr,t),Re(e,t)}}function Ay(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4iv(this.addr,t),Re(e,t)}}function Ry(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Cy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2uiv(this.addr,t),Re(e,t)}}function Py(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3uiv(this.addr,t),Re(e,t)}}function Ly(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4uiv(this.addr,t),Re(e,t)}}function Iy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Au.compareFunction=Nd,r=Au):r=qd,e.setTexture2D(t||r,s)}function Dy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Kd,s)}function Uy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||$d,s)}function Ny(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||jd,s)}function Oy(n){switch(n){case 5126:return _y;case 35664:return vy;case 35665:return xy;case 35666:return yy;case 35674:return My;case 35675:return Sy;case 35676:return by;case 5124:case 35670:return Ey;case 35667:case 35671:return wy;case 35668:case 35672:return Ty;case 35669:case 35673:return Ay;case 5125:return Ry;case 36294:return Cy;case 36295:return Py;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return Ny}}function Fy(n,t){n.uniform1fv(this.addr,t)}function By(n,t){const e=qs(t,this.size,2);n.uniform2fv(this.addr,e)}function ky(n,t){const e=qs(t,this.size,3);n.uniform3fv(this.addr,e)}function zy(n,t){const e=qs(t,this.size,4);n.uniform4fv(this.addr,e)}function Hy(n,t){const e=qs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Vy(n,t){const e=qs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Gy(n,t){const e=qs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Wy(n,t){n.uniform1iv(this.addr,t)}function Xy(n,t){n.uniform2iv(this.addr,t)}function Yy(n,t){n.uniform3iv(this.addr,t)}function qy(n,t){n.uniform4iv(this.addr,t)}function jy(n,t){n.uniform1uiv(this.addr,t)}function Ky(n,t){n.uniform2uiv(this.addr,t)}function $y(n,t){n.uniform3uiv(this.addr,t)}function Jy(n,t){n.uniform4uiv(this.addr,t)}function Zy(n,t,e){const i=this.cache,s=t.length,r=ha(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||qd,r[o])}function Qy(n,t,e){const i=this.cache,s=t.length,r=ha(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Kd,r[o])}function tM(n,t,e){const i=this.cache,s=t.length,r=ha(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$d,r[o])}function eM(n,t,e){const i=this.cache,s=t.length,r=ha(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||jd,r[o])}function nM(n){switch(n){case 5126:return Fy;case 35664:return By;case 35665:return ky;case 35666:return zy;case 35674:return Hy;case 35675:return Vy;case 35676:return Gy;case 5124:case 35670:return Wy;case 35667:case 35671:return Xy;case 35668:case 35672:return Yy;case 35669:case 35673:return qy;case 5125:return jy;case 36294:return Ky;case 36295:return $y;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Zy;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return eM}}class iM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Oy(e.type)}}class sM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nM(e.type)}}class rM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const ll=/(\w+)(\])?(\[|\.)?/g;function Du(n,t){n.seq.push(t),n.map[t.id]=t}function oM(n,t,e){const i=n.name,s=i.length;for(ll.lastIndex=0;;){const r=ll.exec(i),o=ll.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Du(e,c===void 0?new iM(a,n,t):new sM(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new rM(a),Du(e,f)),e=f}}}class Io{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);oM(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Uu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const aM=37297;let lM=0;function cM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function hM(n){const t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(n);let i;switch(t===e?i="":t===Yo&&e===Xo?i="LinearDisplayP3ToLinearSRGB":t===Xo&&e===Yo&&(i="LinearSRGBToLinearDisplayP3"),n){case Ui:case la:return[i,"LinearTransferOETF"];case Qe:case Xc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Nu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+cM(n.getShaderSource(t),o)}else return s}function uM(n,t){const e=hM(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function fM(n,t){let e;switch(t){case Cg:e="Linear";break;case Pg:e="Reinhard";break;case Lg:e="Cineon";break;case Sd:e="ACESFilmic";break;case Dg:e="AgX";break;case Ug:e="Neutral";break;case Ig:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _o=new U;function dM(){re.getLuminanceCoefficients(_o);const n=_o.x.toFixed(4),t=_o.y.toFixed(4),e=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function mM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function gM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ar(n){return n!==""}function Ou(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _M=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(n){return n.replace(_M,xM)}const vM=new Map;function xM(n,t){let e=qt[t];if(e===void 0){const i=vM.get(t);if(i!==void 0)e=qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return pc(e)}const yM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(n){return n.replace(yM,MM)}function MM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ku(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function SM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===lg?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function bM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ks:case zs:t="ENVMAP_TYPE_CUBE";break;case aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function EM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case zs:t="ENVMAP_MODE_REFRACTION";break}return t}function wM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Md:t="ENVMAP_BLENDING_MULTIPLY";break;case Ag:t="ENVMAP_BLENDING_MIX";break;case Rg:t="ENVMAP_BLENDING_ADD";break}return t}function TM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function AM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=SM(e),c=bM(e),h=EM(e),f=wM(e),u=TM(e),d=pM(e),g=mM(r),_=s.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ar).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ar).join(`
`),p.length>0&&(p+=`
`)):(m=[ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),p=[ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?qt.tonemapping_pars_fragment:"",e.toneMapping!==Ci?fM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,uM("linearToOutputTexel",e.outputColorSpace),dM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ar).join(`
`)),o=pc(o),o=Ou(o,e),o=Fu(o,e),a=pc(a),a=Ou(a,e),a=Fu(a,e),o=Bu(o),a=Bu(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=T+m+o,E=T+p+a,k=Uu(s,s.VERTEX_SHADER,M),R=Uu(s,s.FRAGMENT_SHADER,E);s.attachShader(_,k),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(b){if(n.debug.checkShaderErrors){const W=s.getProgramInfoLog(_).trim(),X=s.getShaderInfoLog(k).trim(),Q=s.getShaderInfoLog(R).trim();let ct=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ct=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,k,R);else{const it=Nu(s,k,"vertex"),H=Nu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+W+`
`+it+`
`+H)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||Q==="")&&(V=!1);V&&(b.diagnostics={runnable:ct,programLog:W,vertexShader:{log:X,prefix:m},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(k),s.deleteShader(R),F=new Io(s,_),st=gM(s,_)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let st;this.getAttributes=function(){return st===void 0&&C(this),st};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,aM)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=k,this.fragmentShader=R,this}let RM=0;class CM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new PM(t),e.set(t,i)),i}}class PM{constructor(t){this.id=RM++,this.code=t,this.usedTimes=0}}function LM(n,t,e,i,s,r,o){const a=new qc,l=new CM,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,b,W,X,Q){const ct=X.fog,V=Q.geometry,it=x.isMeshStandardMaterial?X.environment:null,H=(x.isMeshStandardMaterial?e:t).get(x.envMap||it),gt=H&&H.mapping===aa?H.image.height:null,at=_[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const L=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,It=L!==void 0?L.length:0;let $t=0;V.morphAttributes.position!==void 0&&($t=1),V.morphAttributes.normal!==void 0&&($t=2),V.morphAttributes.color!==void 0&&($t=3);let D,j,vt,xt;if(at){const Ke=kn[at];D=Ke.vertexShader,j=Ke.fragmentShader}else D=x.vertexShader,j=x.fragmentShader,l.update(x),vt=l.getVertexShaderID(x),xt=l.getFragmentShaderID(x);const Gt=n.getRenderTarget(),Ut=Q.isInstancedMesh===!0,Jt=Q.isBatchedMesh===!0,A=!!x.map,P=!!x.matcap,S=!!H,rt=!!x.aoMap,K=!!x.lightMap,Z=!!x.bumpMap,nt=!!x.normalMap,ot=!!x.displacementMap,tt=!!x.emissiveMap,y=!!x.metalnessMap,v=!!x.roughnessMap,I=x.anisotropy>0,z=x.clearcoat>0,J=x.dispersion>0,q=x.iridescence>0,pt=x.sheen>0,ht=x.transmission>0,ft=I&&!!x.anisotropyMap,Ot=z&&!!x.clearcoatMap,ut=z&&!!x.clearcoatNormalMap,Mt=z&&!!x.clearcoatRoughnessMap,Pt=q&&!!x.iridescenceMap,kt=q&&!!x.iridescenceThicknessMap,_t=pt&&!!x.sheenColorMap,Wt=pt&&!!x.sheenRoughnessMap,Xt=!!x.specularMap,oe=!!x.specularColorMap,N=!!x.specularIntensityMap,Et=ht&&!!x.transmissionMap,et=ht&&!!x.thicknessMap,lt=!!x.gradientMap,St=!!x.alphaMap,wt=x.alphaTest>0,Zt=!!x.alphaHash,Ee=!!x.extensions;let je=Ci;x.toneMapped&&(Gt===null||Gt.isXRRenderTarget===!0)&&(je=n.toneMapping);const Qt={shaderID:at,shaderType:x.type,shaderName:x.name,vertexShader:D,fragmentShader:j,defines:x.defines,customVertexShaderID:vt,customFragmentShaderID:xt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Jt,batchingColor:Jt&&Q._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&Q.instanceColor!==null,instancingMorph:Ut&&Q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Gt===null?n.outputColorSpace:Gt.isXRRenderTarget===!0?Gt.texture.colorSpace:Ui,alphaToCoverage:!!x.alphaToCoverage,map:A,matcap:P,envMap:S,envMapMode:S&&H.mapping,envMapCubeUVHeight:gt,aoMap:rt,lightMap:K,bumpMap:Z,normalMap:nt,displacementMap:d&&ot,emissiveMap:tt,normalMapObjectSpace:nt&&x.normalMapType===Bg,normalMapTangentSpace:nt&&x.normalMapType===Ud,metalnessMap:y,roughnessMap:v,anisotropy:I,anisotropyMap:ft,clearcoat:z,clearcoatMap:Ot,clearcoatNormalMap:ut,clearcoatRoughnessMap:Mt,dispersion:J,iridescence:q,iridescenceMap:Pt,iridescenceThicknessMap:kt,sheen:pt,sheenColorMap:_t,sheenRoughnessMap:Wt,specularMap:Xt,specularColorMap:oe,specularIntensityMap:N,transmission:ht,transmissionMap:Et,thicknessMap:et,gradientMap:lt,opaque:x.transparent===!1&&x.blending===Ds&&x.alphaToCoverage===!1,alphaMap:St,alphaTest:wt,alphaHash:Zt,combine:x.combine,mapUv:A&&m(x.map.channel),aoMapUv:rt&&m(x.aoMap.channel),lightMapUv:K&&m(x.lightMap.channel),bumpMapUv:Z&&m(x.bumpMap.channel),normalMapUv:nt&&m(x.normalMap.channel),displacementMapUv:ot&&m(x.displacementMap.channel),emissiveMapUv:tt&&m(x.emissiveMap.channel),metalnessMapUv:y&&m(x.metalnessMap.channel),roughnessMapUv:v&&m(x.roughnessMap.channel),anisotropyMapUv:ft&&m(x.anisotropyMap.channel),clearcoatMapUv:Ot&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ut&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&m(x.sheenRoughnessMap.channel),specularMapUv:Xt&&m(x.specularMap.channel),specularColorMapUv:oe&&m(x.specularColorMap.channel),specularIntensityMapUv:N&&m(x.specularIntensityMap.channel),transmissionMapUv:Et&&m(x.transmissionMap.channel),thicknessMapUv:et&&m(x.thicknessMap.channel),alphaMapUv:St&&m(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(nt||I),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!V.attributes.uv&&(A||St),fog:!!ct,useFog:x.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:$t,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:je,decodeVideoTexture:A&&x.map.isVideoTexture===!0&&re.getTransfer(x.map.colorSpace)===me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===tn,flipSided:x.side===en,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ee&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&x.extensions.multiDraw===!0||Jt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function T(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const W in x.defines)b.push(W),b.push(x.defines[W]);return x.isRawShaderMaterial===!1&&(M(b,x),E(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function M(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function E(x,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),x.push(a.mask)}function k(x){const b=_[x.type];let W;if(b){const X=kn[b];W=p_.clone(X.uniforms)}else W=x.uniforms;return W}function R(x,b){let W;for(let X=0,Q=h.length;X<Q;X++){const ct=h[X];if(ct.cacheKey===b){W=ct,++W.usedTimes;break}}return W===void 0&&(W=new AM(n,b,x,r),h.push(W)),W}function C(x){if(--x.usedTimes===0){const b=h.indexOf(x);h[b]=h[h.length-1],h.pop(),x.destroy()}}function F(x){l.remove(x)}function st(){l.dispose()}return{getParameters:p,getProgramCacheKey:T,getUniforms:k,acquireProgram:R,releaseProgram:C,releaseShaderCache:F,programs:h,dispose:st}}function IM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function DM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function zu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Hu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,u,d,g,_,m){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,u,d,g,_,m){const p=o(f,u,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(f,u,d,g,_,m){const p=o(f,u,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,u){e.length>1&&e.sort(f||DM),i.length>1&&i.sort(u||zu),s.length>1&&s.sort(u||zu)}function h(){for(let f=t,u=n.length;f<u;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function UM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Hu,n.set(i,[o])):s>=r.length?(o=new Hu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function NM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Kt};break;case"SpotLight":e={position:new U,direction:new U,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function OM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let FM=0;function BM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function kM(n){const t=new NM,e=OM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new de,o=new de;function a(c){let h=0,f=0,u=0;for(let st=0;st<9;st++)i.probe[st].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,T=0,M=0,E=0,k=0,R=0,C=0;c.sort(BM);for(let st=0,x=c.length;st<x;st++){const b=c[st],W=b.color,X=b.intensity,Q=b.distance,ct=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=W.r*X,f+=W.g*X,u+=W.b*X;else if(b.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(b.sh.coefficients[V],X);C++}else if(b.isDirectionalLight){const V=t.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const it=b.shadow,H=e.get(b);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=ct,i.directionalShadowMatrix[d]=b.shadow.matrix,T++}i.directional[d]=V,d++}else if(b.isSpotLight){const V=t.get(b);V.position.setFromMatrixPosition(b.matrixWorld),V.color.copy(W).multiplyScalar(X),V.distance=Q,V.coneCos=Math.cos(b.angle),V.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),V.decay=b.decay,i.spot[_]=V;const it=b.shadow;if(b.map&&(i.spotLightMap[k]=b.map,k++,it.updateMatrices(b),b.castShadow&&R++),i.spotLightMatrix[_]=it.matrix,b.castShadow){const H=e.get(b);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=ct,E++}_++}else if(b.isRectAreaLight){const V=t.get(b);V.color.copy(W).multiplyScalar(X),V.halfWidth.set(b.width*.5,0,0),V.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=V,m++}else if(b.isPointLight){const V=t.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),V.distance=b.distance,V.decay=b.decay,b.castShadow){const it=b.shadow,H=e.get(b);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,H.shadowCameraNear=it.camera.near,H.shadowCameraFar=it.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=ct,i.pointShadowMatrix[g]=b.shadow.matrix,M++}i.point[g]=V,g++}else if(b.isHemisphereLight){const V=t.get(b);V.skyColor.copy(b.color).multiplyScalar(X),V.groundColor.copy(b.groundColor).multiplyScalar(X),i.hemi[p]=V,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const F=i.hash;(F.directionalLength!==d||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==T||F.numPointShadows!==M||F.numSpotShadows!==E||F.numSpotMaps!==k||F.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+k-R,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,F.directionalLength=d,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=T,F.numPointShadows=M,F.numSpotShadows=E,F.numSpotMaps=k,F.numLightProbes=C,i.version=FM++)}function l(c,h){let f=0,u=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const M=c[p];if(M.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(M.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const E=i.point[u];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Vu(n){const t=new kM(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function zM(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Vu(n),t.set(s,[a])):r>=o.length?(a=new Vu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class HM extends ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class VM extends ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WM=`uniform sampler2D shadow_pass;
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
}`;function XM(n,t,e){let i=new jc;const s=new Tt,r=new Tt,o=new le,a=new HM({depthPacking:Fg}),l=new VM,c={},h=e.maxTextureSize,f={[Ii]:en,[en]:Ii,[tn]:tn},u=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:GM,fragmentShader:WM}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new qe;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let p=this.type;this.render=function(R,C,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const st=n.getRenderTarget(),x=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Ri),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const X=p!==si&&this.type===si,Q=p===si&&this.type!==si;for(let ct=0,V=R.length;ct<V;ct++){const it=R[ct],H=it.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const gt=H.getFrameExtents();if(s.multiply(gt),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/gt.x),s.x=r.x*gt.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/gt.y),s.y=r.y*gt.y,H.mapSize.y=r.y)),H.map===null||X===!0||Q===!0){const L=this.type!==si?{minFilter:Xe,magFilter:Xe}:{};H.map!==null&&H.map.dispose(),H.map=new rs(s.x,s.y,L),H.map.texture.name=it.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const at=H.getViewportCount();for(let L=0;L<at;L++){const It=H.getViewport(L);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),W.viewport(o),H.updateMatrices(it,L),i=H.getFrustum(),E(C,F,H.camera,it,this.type)}H.isPointLightShadow!==!0&&this.type===si&&T(H,F),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(st,x,b)};function T(R,C){const F=t.update(_);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new rs(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,F,u,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,F,d,_,null)}function M(R,C,F,st){let x=null;const b=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(b!==void 0)x=b;else if(x=F.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const W=x.uuid,X=C.uuid;let Q=c[W];Q===void 0&&(Q={},c[W]=Q);let ct=Q[X];ct===void 0&&(ct=x.clone(),Q[X]=ct,C.addEventListener("dispose",k)),x=ct}if(x.visible=C.visible,x.wireframe=C.wireframe,st===si?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:f[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=n.properties.get(x);W.light=F}return x}function E(R,C,F,st,x){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===si)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const X=t.update(R),Q=R.material;if(Array.isArray(Q)){const ct=X.groups;for(let V=0,it=ct.length;V<it;V++){const H=ct[V],gt=Q[H.materialIndex];if(gt&&gt.visible){const at=M(R,gt,st,x);R.onBeforeShadow(n,R,C,F,X,at,H),n.renderBufferDirect(F,null,X,at,R,H),R.onAfterShadow(n,R,C,F,X,at,H)}}}else if(Q.visible){const ct=M(R,Q,st,x);R.onBeforeShadow(n,R,C,F,X,ct,null),n.renderBufferDirect(F,null,X,ct,R,null),R.onAfterShadow(n,R,C,F,X,ct,null)}}const W=R.children;for(let X=0,Q=W.length;X<Q;X++)E(W[X],C,F,st,x)}function k(R){R.target.removeEventListener("dispose",k);for(const F in c){const st=c[F],x=R.target.uuid;x in st&&(st[x].dispose(),delete st[x])}}}const YM={[Pl]:Ll,[Il]:Nl,[Dl]:Ol,[Bs]:Ul,[Ll]:Pl,[Nl]:Il,[Ol]:Dl,[Ul]:Bs};function qM(n){function t(){let N=!1;const Et=new le;let et=null;const lt=new le(0,0,0,0);return{setMask:function(St){et!==St&&!N&&(n.colorMask(St,St,St,St),et=St)},setLocked:function(St){N=St},setClear:function(St,wt,Zt,Ee,je){je===!0&&(St*=Ee,wt*=Ee,Zt*=Ee),Et.set(St,wt,Zt,Ee),lt.equals(Et)===!1&&(n.clearColor(St,wt,Zt,Ee),lt.copy(Et))},reset:function(){N=!1,et=null,lt.set(-1,0,0,0)}}}function e(){let N=!1,Et=!1,et=null,lt=null,St=null;return{setReversed:function(wt){Et=wt},setTest:function(wt){wt?vt(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(wt){et!==wt&&!N&&(n.depthMask(wt),et=wt)},setFunc:function(wt){if(Et&&(wt=YM[wt]),lt!==wt){switch(wt){case Pl:n.depthFunc(n.NEVER);break;case Ll:n.depthFunc(n.ALWAYS);break;case Il:n.depthFunc(n.LESS);break;case Bs:n.depthFunc(n.LEQUAL);break;case Dl:n.depthFunc(n.EQUAL);break;case Ul:n.depthFunc(n.GEQUAL);break;case Nl:n.depthFunc(n.GREATER);break;case Ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}lt=wt}},setLocked:function(wt){N=wt},setClear:function(wt){St!==wt&&(n.clearDepth(wt),St=wt)},reset:function(){N=!1,et=null,lt=null,St=null}}}function i(){let N=!1,Et=null,et=null,lt=null,St=null,wt=null,Zt=null,Ee=null,je=null;return{setTest:function(Qt){N||(Qt?vt(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(Qt){Et!==Qt&&!N&&(n.stencilMask(Qt),Et=Qt)},setFunc:function(Qt,Ke,$n){(et!==Qt||lt!==Ke||St!==$n)&&(n.stencilFunc(Qt,Ke,$n),et=Qt,lt=Ke,St=$n)},setOp:function(Qt,Ke,$n){(wt!==Qt||Zt!==Ke||Ee!==$n)&&(n.stencilOp(Qt,Ke,$n),wt=Qt,Zt=Ke,Ee=$n)},setLocked:function(Qt){N=Qt},setClear:function(Qt){je!==Qt&&(n.clearStencil(Qt),je=Qt)},reset:function(){N=!1,Et=null,et=null,lt=null,St=null,wt=null,Zt=null,Ee=null,je=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,u=[],d=null,g=!1,_=null,m=null,p=null,T=null,M=null,E=null,k=null,R=new Kt(0,0,0),C=0,F=!1,st=null,x=null,b=null,W=null,X=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ct=!1,V=0;const it=n.getParameter(n.VERSION);it.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(it)[1]),ct=V>=1):it.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),ct=V>=2);let H=null,gt={};const at=n.getParameter(n.SCISSOR_BOX),L=n.getParameter(n.VIEWPORT),It=new le().fromArray(at),$t=new le().fromArray(L);function D(N,Et,et,lt){const St=new Uint8Array(4),wt=n.createTexture();n.bindTexture(N,wt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Zt=0;Zt<et;Zt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Et,0,n.RGBA,1,1,lt,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(Et+Zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return wt}const j={};j[n.TEXTURE_2D]=D(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=D(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=D(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=D(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),vt(n.DEPTH_TEST),r.setFunc(Bs),K(!1),Z($h),vt(n.CULL_FACE),S(Ri);function vt(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function xt(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function Gt(N,Et){return h[N]!==Et?(n.bindFramebuffer(N,Et),h[N]=Et,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Et),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Et),!0):!1}function Ut(N,Et){let et=u,lt=!1;if(N){et=f.get(Et),et===void 0&&(et=[],f.set(Et,et));const St=N.textures;if(et.length!==St.length||et[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,Zt=St.length;wt<Zt;wt++)et[wt]=n.COLOR_ATTACHMENT0+wt;et.length=St.length,lt=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,lt=!0);lt&&n.drawBuffers(et)}function Jt(N){return d!==N?(n.useProgram(N),d=N,!0):!1}const A={[ji]:n.FUNC_ADD,[hg]:n.FUNC_SUBTRACT,[ug]:n.FUNC_REVERSE_SUBTRACT};A[fg]=n.MIN,A[dg]=n.MAX;const P={[pg]:n.ZERO,[mg]:n.ONE,[gg]:n.SRC_COLOR,[Rl]:n.SRC_ALPHA,[Sg]:n.SRC_ALPHA_SATURATE,[yg]:n.DST_COLOR,[vg]:n.DST_ALPHA,[_g]:n.ONE_MINUS_SRC_COLOR,[Cl]:n.ONE_MINUS_SRC_ALPHA,[Mg]:n.ONE_MINUS_DST_COLOR,[xg]:n.ONE_MINUS_DST_ALPHA,[bg]:n.CONSTANT_COLOR,[Eg]:n.ONE_MINUS_CONSTANT_COLOR,[wg]:n.CONSTANT_ALPHA,[Tg]:n.ONE_MINUS_CONSTANT_ALPHA};function S(N,Et,et,lt,St,wt,Zt,Ee,je,Qt){if(N===Ri){g===!0&&(xt(n.BLEND),g=!1);return}if(g===!1&&(vt(n.BLEND),g=!0),N!==cg){if(N!==_||Qt!==F){if((m!==ji||M!==ji)&&(n.blendEquation(n.FUNC_ADD),m=ji,M=ji),Qt)switch(N){case Ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jh:n.blendFunc(n.ONE,n.ONE);break;case Zh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}p=null,T=null,E=null,k=null,R.set(0,0,0),C=0,_=N,F=Qt}return}St=St||Et,wt=wt||et,Zt=Zt||lt,(Et!==m||St!==M)&&(n.blendEquationSeparate(A[Et],A[St]),m=Et,M=St),(et!==p||lt!==T||wt!==E||Zt!==k)&&(n.blendFuncSeparate(P[et],P[lt],P[wt],P[Zt]),p=et,T=lt,E=wt,k=Zt),(Ee.equals(R)===!1||je!==C)&&(n.blendColor(Ee.r,Ee.g,Ee.b,je),R.copy(Ee),C=je),_=N,F=!1}function rt(N,Et){N.side===tn?xt(n.CULL_FACE):vt(n.CULL_FACE);let et=N.side===en;Et&&(et=!et),K(et),N.blending===Ds&&N.transparent===!1?S(Ri):S(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const lt=N.stencilWrite;o.setTest(lt),lt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ot(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?vt(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(N){st!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),st=N)}function Z(N){N!==og?(vt(n.CULL_FACE),N!==x&&(N===$h?n.cullFace(n.BACK):N===ag?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),x=N}function nt(N){N!==b&&(ct&&n.lineWidth(N),b=N)}function ot(N,Et,et){N?(vt(n.POLYGON_OFFSET_FILL),(W!==Et||X!==et)&&(n.polygonOffset(Et,et),W=Et,X=et)):xt(n.POLYGON_OFFSET_FILL)}function tt(N){N?vt(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function y(N){N===void 0&&(N=n.TEXTURE0+Q-1),H!==N&&(n.activeTexture(N),H=N)}function v(N,Et,et){et===void 0&&(H===null?et=n.TEXTURE0+Q-1:et=H);let lt=gt[et];lt===void 0&&(lt={type:void 0,texture:void 0},gt[et]=lt),(lt.type!==N||lt.texture!==Et)&&(H!==et&&(n.activeTexture(et),H=et),n.bindTexture(N,Et||j[N]),lt.type=N,lt.texture=Et)}function I(){const N=gt[H];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ot(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function kt(N){It.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),It.copy(N))}function _t(N){$t.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),$t.copy(N))}function Wt(N,Et){let et=l.get(Et);et===void 0&&(et=new WeakMap,l.set(Et,et));let lt=et.get(N);lt===void 0&&(lt=n.getUniformBlockIndex(Et,N.name),et.set(N,lt))}function Xt(N,Et){const lt=l.get(Et).get(N);a.get(Et)!==lt&&(n.uniformBlockBinding(Et,lt,N.__bindingPointIndex),a.set(Et,lt))}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},H=null,gt={},h={},f=new WeakMap,u=[],d=null,g=!1,_=null,m=null,p=null,T=null,M=null,E=null,k=null,R=new Kt(0,0,0),C=0,F=!1,st=null,x=null,b=null,W=null,X=null,It.set(0,0,n.canvas.width,n.canvas.height),$t.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:vt,disable:xt,bindFramebuffer:Gt,drawBuffers:Ut,useProgram:Jt,setBlending:S,setMaterial:rt,setFlipSided:K,setCullFace:Z,setLineWidth:nt,setPolygonOffset:ot,setScissorTest:tt,activeTexture:y,bindTexture:v,unbindTexture:I,compressedTexImage2D:z,compressedTexImage3D:J,texImage2D:Mt,texImage3D:Pt,updateUBOMapping:Wt,uniformBlockBinding:Xt,texStorage2D:Ot,texStorage3D:ut,texSubImage2D:q,texSubImage3D:pt,compressedTexSubImage2D:ht,compressedTexSubImage3D:ft,scissor:kt,viewport:_t,reset:oe}}function Gu(n,t,e,i){const s=jM(i);switch(e){case Ad:return n*t;case Cd:return n*t;case Pd:return n*t*2;case Ld:return n*t/s.components*s.byteLength;case Vc:return n*t/s.components*s.byteLength;case Id:return n*t*2/s.components*s.byteLength;case Gc:return n*t*2/s.components*s.byteLength;case Rd:return n*t*3/s.components*s.byteLength;case An:return n*t*4/s.components*s.byteLength;case Wc:return n*t*4/s.components*s.byteLength;case To:case Ao:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ro:case Co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vl:case Wl:return Math.max(n,16)*Math.max(t,8)/4;case Hl:case Gl:return Math.max(n,8)*Math.max(t,8)/2;case Xl:case Yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case jl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case tc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ec:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ic:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case sc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case rc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case oc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Po:case lc:case cc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Dd:case hc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case uc:case fc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jM(n){switch(n){case di:case Ed:return{byteLength:1,components:1};case Cr:case wd:case kr:return{byteLength:2,components:1};case zc:case Hc:return{byteLength:2,components:4};case ss:case kc:case hi:return{byteLength:4,components:1};case Td:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function KM(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,v){return d?new OffscreenCanvas(y,v):jo("canvas")}function _(y,v,I){let z=1;const J=tt(y);if((J.width>I||J.height>I)&&(z=I/Math.max(J.width,J.height)),z<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const q=Math.floor(z*J.width),pt=Math.floor(z*J.height);f===void 0&&(f=g(q,pt));const ht=v?g(q,pt):f;return ht.width=q,ht.height=pt,ht.getContext("2d").drawImage(y,0,0,q,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+pt+")."),ht}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),y;return y}function m(y){return y.generateMipmaps&&y.minFilter!==Xe&&y.minFilter!==wn}function p(y){n.generateMipmap(y)}function T(y,v,I,z,J=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let q=v;if(v===n.RED&&(I===n.FLOAT&&(q=n.R32F),I===n.HALF_FLOAT&&(q=n.R16F),I===n.UNSIGNED_BYTE&&(q=n.R8)),v===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(q=n.R8UI),I===n.UNSIGNED_SHORT&&(q=n.R16UI),I===n.UNSIGNED_INT&&(q=n.R32UI),I===n.BYTE&&(q=n.R8I),I===n.SHORT&&(q=n.R16I),I===n.INT&&(q=n.R32I)),v===n.RG&&(I===n.FLOAT&&(q=n.RG32F),I===n.HALF_FLOAT&&(q=n.RG16F),I===n.UNSIGNED_BYTE&&(q=n.RG8)),v===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(q=n.RG8UI),I===n.UNSIGNED_SHORT&&(q=n.RG16UI),I===n.UNSIGNED_INT&&(q=n.RG32UI),I===n.BYTE&&(q=n.RG8I),I===n.SHORT&&(q=n.RG16I),I===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(q=n.RGB8UI),I===n.UNSIGNED_SHORT&&(q=n.RGB16UI),I===n.UNSIGNED_INT&&(q=n.RGB32UI),I===n.BYTE&&(q=n.RGB8I),I===n.SHORT&&(q=n.RGB16I),I===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),I===n.UNSIGNED_INT&&(q=n.RGBA32UI),I===n.BYTE&&(q=n.RGBA8I),I===n.SHORT&&(q=n.RGBA16I),I===n.INT&&(q=n.RGBA32I)),v===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),v===n.RGBA){const pt=J?Wo:re.getTransfer(z);I===n.FLOAT&&(q=n.RGBA32F),I===n.HALF_FLOAT&&(q=n.RGBA16F),I===n.UNSIGNED_BYTE&&(q=pt===me?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function M(y,v){let I;return y?v===null||v===ss||v===Hs?I=n.DEPTH24_STENCIL8:v===hi?I=n.DEPTH32F_STENCIL8:v===Cr&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ss||v===Hs?I=n.DEPTH_COMPONENT24:v===hi?I=n.DEPTH_COMPONENT32F:v===Cr&&(I=n.DEPTH_COMPONENT16),I}function E(y,v){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Xe&&y.minFilter!==wn?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function k(y){const v=y.target;v.removeEventListener("dispose",k),C(v),v.isVideoTexture&&h.delete(v)}function R(y){const v=y.target;v.removeEventListener("dispose",R),st(v)}function C(y){const v=i.get(y);if(v.__webglInit===void 0)return;const I=y.source,z=u.get(I);if(z){const J=z[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&F(y),Object.keys(z).length===0&&u.delete(I)}i.remove(y)}function F(y){const v=i.get(y);n.deleteTexture(v.__webglTexture);const I=y.source,z=u.get(I);delete z[v.__cacheKey],o.memory.textures--}function st(y){const v=i.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(v.__webglFramebuffer[z]))for(let J=0;J<v.__webglFramebuffer[z].length;J++)n.deleteFramebuffer(v.__webglFramebuffer[z][J]);else n.deleteFramebuffer(v.__webglFramebuffer[z]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[z])}else{if(Array.isArray(v.__webglFramebuffer))for(let z=0;z<v.__webglFramebuffer.length;z++)n.deleteFramebuffer(v.__webglFramebuffer[z]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let z=0;z<v.__webglColorRenderbuffer.length;z++)v.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[z]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const I=y.textures;for(let z=0,J=I.length;z<J;z++){const q=i.get(I[z]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(I[z])}i.remove(y)}let x=0;function b(){x=0}function W(){const y=x;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),x+=1,y}function X(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function Q(y,v){const I=i.get(y);if(y.isVideoTexture&&nt(y),y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){const z=y.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$t(I,y,v);return}}e.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+v)}function ct(y,v){const I=i.get(y);if(y.version>0&&I.__version!==y.version){$t(I,y,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+v)}function V(y,v){const I=i.get(y);if(y.version>0&&I.__version!==y.version){$t(I,y,v);return}e.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+v)}function it(y,v){const I=i.get(y);if(y.version>0&&I.__version!==y.version){D(I,y,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+v)}const H={[kl]:n.REPEAT,[Zi]:n.CLAMP_TO_EDGE,[zl]:n.MIRRORED_REPEAT},gt={[Xe]:n.NEAREST,[Ng]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[Ia]:n.LINEAR_MIPMAP_NEAREST,[Qi]:n.LINEAR_MIPMAP_LINEAR},at={[kg]:n.NEVER,[Xg]:n.ALWAYS,[zg]:n.LESS,[Nd]:n.LEQUAL,[Hg]:n.EQUAL,[Wg]:n.GEQUAL,[Vg]:n.GREATER,[Gg]:n.NOTEQUAL};function L(y,v){if(v.type===hi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===wn||v.magFilter===Ia||v.magFilter===$r||v.magFilter===Qi||v.minFilter===wn||v.minFilter===Ia||v.minFilter===$r||v.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,H[v.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,H[v.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,H[v.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,gt[v.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,gt[v.minFilter]),v.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,at[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Xe||v.minFilter!==$r&&v.minFilter!==Qi||v.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");n.texParameterf(y,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function It(y,v){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",k));const z=v.source;let J=u.get(z);J===void 0&&(J={},u.set(z,J));const q=X(v);if(q!==y.__cacheKey){J[q]===void 0&&(J[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),J[q].usedTimes++;const pt=J[y.__cacheKey];pt!==void 0&&(J[y.__cacheKey].usedTimes--,pt.usedTimes===0&&F(v)),y.__cacheKey=q,y.__webglTexture=J[q].texture}return I}function $t(y,v,I){let z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(z=n.TEXTURE_3D);const J=It(y,v),q=v.source;e.bindTexture(z,y.__webglTexture,n.TEXTURE0+I);const pt=i.get(q);if(q.version!==pt.__version||J===!0){e.activeTexture(n.TEXTURE0+I);const ht=re.getPrimaries(re.workingColorSpace),ft=v.colorSpace===wi?null:re.getPrimaries(v.colorSpace),Ot=v.colorSpace===wi||ht===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let ut=_(v.image,!1,s.maxTextureSize);ut=ot(v,ut);const Mt=r.convert(v.format,v.colorSpace),Pt=r.convert(v.type);let kt=T(v.internalFormat,Mt,Pt,v.colorSpace,v.isVideoTexture);L(z,v);let _t;const Wt=v.mipmaps,Xt=v.isVideoTexture!==!0,oe=pt.__version===void 0||J===!0,N=q.dataReady,Et=E(v,ut);if(v.isDepthTexture)kt=M(v.format===Vs,v.type),oe&&(Xt?e.texStorage2D(n.TEXTURE_2D,1,kt,ut.width,ut.height):e.texImage2D(n.TEXTURE_2D,0,kt,ut.width,ut.height,0,Mt,Pt,null));else if(v.isDataTexture)if(Wt.length>0){Xt&&oe&&e.texStorage2D(n.TEXTURE_2D,Et,kt,Wt[0].width,Wt[0].height);for(let et=0,lt=Wt.length;et<lt;et++)_t=Wt[et],Xt?N&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,_t.width,_t.height,Mt,Pt,_t.data):e.texImage2D(n.TEXTURE_2D,et,kt,_t.width,_t.height,0,Mt,Pt,_t.data);v.generateMipmaps=!1}else Xt?(oe&&e.texStorage2D(n.TEXTURE_2D,Et,kt,ut.width,ut.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut.width,ut.height,Mt,Pt,ut.data)):e.texImage2D(n.TEXTURE_2D,0,kt,ut.width,ut.height,0,Mt,Pt,ut.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xt&&oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,kt,Wt[0].width,Wt[0].height,ut.depth);for(let et=0,lt=Wt.length;et<lt;et++)if(_t=Wt[et],v.format!==An)if(Mt!==null)if(Xt){if(N)if(v.layerUpdates.size>0){const St=Gu(_t.width,_t.height,v.format,v.type);for(const wt of v.layerUpdates){const Zt=_t.data.subarray(wt*St/_t.data.BYTES_PER_ELEMENT,(wt+1)*St/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,wt,_t.width,_t.height,1,Mt,Zt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,_t.width,_t.height,ut.depth,Mt,_t.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,kt,_t.width,_t.height,ut.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,_t.width,_t.height,ut.depth,Mt,Pt,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,kt,_t.width,_t.height,ut.depth,0,Mt,Pt,_t.data)}else{Xt&&oe&&e.texStorage2D(n.TEXTURE_2D,Et,kt,Wt[0].width,Wt[0].height);for(let et=0,lt=Wt.length;et<lt;et++)_t=Wt[et],v.format!==An?Mt!==null?Xt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,_t.width,_t.height,Mt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,et,kt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?N&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,_t.width,_t.height,Mt,Pt,_t.data):e.texImage2D(n.TEXTURE_2D,et,kt,_t.width,_t.height,0,Mt,Pt,_t.data)}else if(v.isDataArrayTexture)if(Xt){if(oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,kt,ut.width,ut.height,ut.depth),N)if(v.layerUpdates.size>0){const et=Gu(ut.width,ut.height,v.format,v.type);for(const lt of v.layerUpdates){const St=ut.data.subarray(lt*et/ut.data.BYTES_PER_ELEMENT,(lt+1)*et/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,lt,ut.width,ut.height,1,Mt,Pt,St)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Mt,Pt,ut.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,kt,ut.width,ut.height,ut.depth,0,Mt,Pt,ut.data);else if(v.isData3DTexture)Xt?(oe&&e.texStorage3D(n.TEXTURE_3D,Et,kt,ut.width,ut.height,ut.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Mt,Pt,ut.data)):e.texImage3D(n.TEXTURE_3D,0,kt,ut.width,ut.height,ut.depth,0,Mt,Pt,ut.data);else if(v.isFramebufferTexture){if(oe)if(Xt)e.texStorage2D(n.TEXTURE_2D,Et,kt,ut.width,ut.height);else{let et=ut.width,lt=ut.height;for(let St=0;St<Et;St++)e.texImage2D(n.TEXTURE_2D,St,kt,et,lt,0,Mt,Pt,null),et>>=1,lt>>=1}}else if(Wt.length>0){if(Xt&&oe){const et=tt(Wt[0]);e.texStorage2D(n.TEXTURE_2D,Et,kt,et.width,et.height)}for(let et=0,lt=Wt.length;et<lt;et++)_t=Wt[et],Xt?N&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,Mt,Pt,_t):e.texImage2D(n.TEXTURE_2D,et,kt,Mt,Pt,_t);v.generateMipmaps=!1}else if(Xt){if(oe){const et=tt(ut);e.texStorage2D(n.TEXTURE_2D,Et,kt,et.width,et.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,Pt,ut)}else e.texImage2D(n.TEXTURE_2D,0,kt,Mt,Pt,ut);m(v)&&p(z),pt.__version=q.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function D(y,v,I){if(v.image.length!==6)return;const z=It(y,v),J=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+I);const q=i.get(J);if(J.version!==q.__version||z===!0){e.activeTexture(n.TEXTURE0+I);const pt=re.getPrimaries(re.workingColorSpace),ht=v.colorSpace===wi?null:re.getPrimaries(v.colorSpace),ft=v.colorSpace===wi||pt===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Ot=v.isCompressedTexture||v.image[0].isCompressedTexture,ut=v.image[0]&&v.image[0].isDataTexture,Mt=[];for(let lt=0;lt<6;lt++)!Ot&&!ut?Mt[lt]=_(v.image[lt],!0,s.maxCubemapSize):Mt[lt]=ut?v.image[lt].image:v.image[lt],Mt[lt]=ot(v,Mt[lt]);const Pt=Mt[0],kt=r.convert(v.format,v.colorSpace),_t=r.convert(v.type),Wt=T(v.internalFormat,kt,_t,v.colorSpace),Xt=v.isVideoTexture!==!0,oe=q.__version===void 0||z===!0,N=J.dataReady;let Et=E(v,Pt);L(n.TEXTURE_CUBE_MAP,v);let et;if(Ot){Xt&&oe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,Wt,Pt.width,Pt.height);for(let lt=0;lt<6;lt++){et=Mt[lt].mipmaps;for(let St=0;St<et.length;St++){const wt=et[St];v.format!==An?kt!==null?Xt?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,0,0,wt.width,wt.height,kt,wt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,Wt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,0,0,wt.width,wt.height,kt,_t,wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,Wt,wt.width,wt.height,0,kt,_t,wt.data)}}}else{if(et=v.mipmaps,Xt&&oe){et.length>0&&Et++;const lt=tt(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,Wt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ut){Xt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Mt[lt].width,Mt[lt].height,kt,_t,Mt[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Wt,Mt[lt].width,Mt[lt].height,0,kt,_t,Mt[lt].data);for(let St=0;St<et.length;St++){const Zt=et[St].image[lt].image;Xt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,0,0,Zt.width,Zt.height,kt,_t,Zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,Wt,Zt.width,Zt.height,0,kt,_t,Zt.data)}}else{Xt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,kt,_t,Mt[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Wt,kt,_t,Mt[lt]);for(let St=0;St<et.length;St++){const wt=et[St];Xt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,0,0,kt,_t,wt.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,Wt,kt,_t,wt.image[lt])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),q.__version=J.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function j(y,v,I,z,J,q){const pt=r.convert(I.format,I.colorSpace),ht=r.convert(I.type),ft=T(I.internalFormat,pt,ht,I.colorSpace);if(!i.get(v).__hasExternalTextures){const ut=Math.max(1,v.width>>q),Mt=Math.max(1,v.height>>q);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,q,ft,ut,Mt,v.depth,0,pt,ht,null):e.texImage2D(J,q,ft,ut,Mt,0,pt,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,y),Z(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,J,i.get(I).__webglTexture,0,K(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,J,i.get(I).__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(y,v,I){if(n.bindRenderbuffer(n.RENDERBUFFER,y),v.depthBuffer){const z=v.depthTexture,J=z&&z.isDepthTexture?z.type:null,q=M(v.stencilBuffer,J),pt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=K(v);Z(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,q,v.width,v.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,q,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,y)}else{const z=v.textures;for(let J=0;J<z.length;J++){const q=z[J],pt=r.convert(q.format,q.colorSpace),ht=r.convert(q.type),ft=T(q.internalFormat,pt,ht,q.colorSpace),Ot=K(v);I&&Z(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,ft,v.width,v.height):Z(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ot,ft,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ft,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xt(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Q(v.depthTexture,0);const z=i.get(v.depthTexture).__webglTexture,J=K(v);if(v.depthTexture.format===Us)Z(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0);else if(v.depthTexture.format===Vs)Z(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function Gt(y){const v=i.get(y),I=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){const z=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),z){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,z.removeEventListener("dispose",J)};z.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=z}if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");xt(v.__webglFramebuffer,y)}else if(I){v.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[z]),v.__webglDepthbuffer[z]===void 0)v.__webglDepthbuffer[z]=n.createRenderbuffer(),vt(v.__webglDepthbuffer[z],y,!1);else{const J=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),vt(v.__webglDepthbuffer,y,!1);else{const z=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,J)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ut(y,v,I){const z=i.get(y);v!==void 0&&j(z.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Gt(y)}function Jt(y){const v=y.texture,I=i.get(y),z=i.get(v);y.addEventListener("dispose",R);const J=y.textures,q=y.isWebGLCubeRenderTarget===!0,pt=J.length>1;if(pt||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=v.version,o.memory.textures++),q){I.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[ht]=[];for(let ft=0;ft<v.mipmaps.length;ft++)I.__webglFramebuffer[ht][ft]=n.createFramebuffer()}else I.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let ht=0;ht<v.mipmaps.length;ht++)I.__webglFramebuffer[ht]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(pt)for(let ht=0,ft=J.length;ht<ft;ht++){const Ot=i.get(J[ht]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&Z(y)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ht=0;ht<J.length;ht++){const ft=J[ht];I.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[ht]);const Ot=r.convert(ft.format,ft.colorSpace),ut=r.convert(ft.type),Mt=T(ft.internalFormat,Ot,ut,ft.colorSpace,y.isXRRenderTarget===!0),Pt=K(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,Mt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,I.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),vt(I.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),L(n.TEXTURE_CUBE_MAP,v);for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)j(I.__webglFramebuffer[ht][ft],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ft);else j(I.__webglFramebuffer[ht],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let ht=0,ft=J.length;ht<ft;ht++){const Ot=J[ht],ut=i.get(Ot);e.bindTexture(n.TEXTURE_2D,ut.__webglTexture),L(n.TEXTURE_2D,Ot),j(I.__webglFramebuffer,y,Ot,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),m(Ot)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ht=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,z.__webglTexture),L(ht,v),v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)j(I.__webglFramebuffer[ft],y,v,n.COLOR_ATTACHMENT0,ht,ft);else j(I.__webglFramebuffer,y,v,n.COLOR_ATTACHMENT0,ht,0);m(v)&&p(ht),e.unbindTexture()}y.depthBuffer&&Gt(y)}function A(y){const v=y.textures;for(let I=0,z=v.length;I<z;I++){const J=v[I];if(m(J)){const q=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,pt=i.get(J).__webglTexture;e.bindTexture(q,pt),p(q),e.unbindTexture()}}}const P=[],S=[];function rt(y){if(y.samples>0){if(Z(y)===!1){const v=y.textures,I=y.width,z=y.height;let J=n.COLOR_BUFFER_BIT;const q=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=i.get(y),ht=v.length>1;if(ht)for(let ft=0;ft<v.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let ft=0;ft<v.length;ft++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pt.__webglColorRenderbuffer[ft]);const Ot=i.get(v[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ot,0)}n.blitFramebuffer(0,0,I,z,0,0,I,z,J,n.NEAREST),l===!0&&(P.length=0,S.length=0,P.push(n.COLOR_ATTACHMENT0+ft),y.depthBuffer&&y.resolveDepthBuffer===!1&&(P.push(q),S.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,S)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let ft=0;ft<v.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,pt.__webglColorRenderbuffer[ft]);const Ot=i.get(v[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,Ot,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const v=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function K(y){return Math.min(s.maxSamples,y.samples)}function Z(y){const v=i.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function nt(y){const v=o.render.frame;h.get(y)!==v&&(h.set(y,v),y.update())}function ot(y,v){const I=y.colorSpace,z=y.format,J=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||I!==Ui&&I!==wi&&(re.getTransfer(I)===me?(z!==An||J!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),v}function tt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=b,this.setTexture2D=Q,this.setTexture2DArray=ct,this.setTexture3D=V,this.setTextureCube=it,this.rebindTextures=Ut,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Z}function $M(n,t){function e(i,s=wi){let r;const o=re.getTransfer(s);if(i===di)return n.UNSIGNED_BYTE;if(i===zc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Td)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ed)return n.BYTE;if(i===wd)return n.SHORT;if(i===Cr)return n.UNSIGNED_SHORT;if(i===kc)return n.INT;if(i===ss)return n.UNSIGNED_INT;if(i===hi)return n.FLOAT;if(i===kr)return n.HALF_FLOAT;if(i===Ad)return n.ALPHA;if(i===Rd)return n.RGB;if(i===An)return n.RGBA;if(i===Cd)return n.LUMINANCE;if(i===Pd)return n.LUMINANCE_ALPHA;if(i===Us)return n.DEPTH_COMPONENT;if(i===Vs)return n.DEPTH_STENCIL;if(i===Ld)return n.RED;if(i===Vc)return n.RED_INTEGER;if(i===Id)return n.RG;if(i===Gc)return n.RG_INTEGER;if(i===Wc)return n.RGBA_INTEGER;if(i===To||i===Ao||i===Ro||i===Co)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hl||i===Vl||i===Gl||i===Wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xl||i===Yl||i===ql)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xl||i===Yl)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ql)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===jl||i===Kl||i===$l||i===Jl||i===Zl||i===Ql||i===tc||i===ec||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===jl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$l)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ql)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ec)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ic)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ac)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Po||i===lc||i===cc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Po)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dd||i===hc||i===uc||i===fc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Po)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class JM extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ue extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZM={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ue;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const QM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tS=`
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

}`;class eS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Di({vertexShader:QM,fragmentShader:tS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nS extends Xs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null;const _=new eS,m=e.getContextAttributes();let p=null,T=null;const M=[],E=[],k=new Tt;let R=null;const C=new gn;C.layers.enable(1),C.viewport=new le;const F=new gn;F.layers.enable(2),F.viewport=new le;const st=[C,F],x=new JM;x.layers.enable(1),x.layers.enable(2);let b=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let j=M[D];return j===void 0&&(j=new cl,M[D]=j),j.getTargetRaySpace()},this.getControllerGrip=function(D){let j=M[D];return j===void 0&&(j=new cl,M[D]=j),j.getGripSpace()},this.getHand=function(D){let j=M[D];return j===void 0&&(j=new cl,M[D]=j),j.getHandSpace()};function X(D){const j=E.indexOf(D.inputSource);if(j===-1)return;const vt=M[j];vt!==void 0&&(vt.update(D.inputSource,D.frame,c||o),vt.dispatchEvent({type:D.type,data:D.inputSource}))}function Q(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",ct);for(let D=0;D<M.length;D++){const j=E[D];j!==null&&(E[D]=null,M[D].disconnect(j))}b=null,W=null,_.reset(),t.setRenderTarget(p),d=null,u=null,f=null,s=null,T=null,$t.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(D){if(s=D,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",ct),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(k),s.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new rs(d.framebufferWidth,d.framebufferHeight,{format:An,type:di,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,vt=null,xt=null;m.depth&&(xt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?Vs:Us,vt=m.stencil?Hs:ss);const Gt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(Gt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),T=new rs(u.textureWidth,u.textureHeight,{format:An,type:di,depthTexture:new Yd(u.textureWidth,u.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ct(D){for(let j=0;j<D.removed.length;j++){const vt=D.removed[j],xt=E.indexOf(vt);xt>=0&&(E[xt]=null,M[xt].disconnect(vt))}for(let j=0;j<D.added.length;j++){const vt=D.added[j];let xt=E.indexOf(vt);if(xt===-1){for(let Ut=0;Ut<M.length;Ut++)if(Ut>=E.length){E.push(vt),xt=Ut;break}else if(E[Ut]===null){E[Ut]=vt,xt=Ut;break}if(xt===-1)break}const Gt=M[xt];Gt&&Gt.connect(vt)}}const V=new U,it=new U;function H(D,j,vt){V.setFromMatrixPosition(j.matrixWorld),it.setFromMatrixPosition(vt.matrixWorld);const xt=V.distanceTo(it),Gt=j.projectionMatrix.elements,Ut=vt.projectionMatrix.elements,Jt=Gt[14]/(Gt[10]-1),A=Gt[14]/(Gt[10]+1),P=(Gt[9]+1)/Gt[5],S=(Gt[9]-1)/Gt[5],rt=(Gt[8]-1)/Gt[0],K=(Ut[8]+1)/Ut[0],Z=Jt*rt,nt=Jt*K,ot=xt/(-rt+K),tt=ot*-rt;if(j.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(tt),D.translateZ(ot),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),Gt[10]===-1)D.projectionMatrix.copy(j.projectionMatrix),D.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const y=Jt+ot,v=A+ot,I=Z-tt,z=nt+(xt-tt),J=P*A/v*y,q=S*A/v*y;D.projectionMatrix.makePerspective(I,z,J,q,y,v),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function gt(D,j){j===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(j.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(s===null)return;let j=D.near,vt=D.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),x.near=F.near=C.near=j,x.far=F.far=C.far=vt,(b!==x.near||W!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,W=x.far);const xt=D.parent,Gt=x.cameras;gt(x,xt);for(let Ut=0;Ut<Gt.length;Ut++)gt(Gt[Ut],xt);Gt.length===2?H(x,C,F):x.projectionMatrix.copy(C.projectionMatrix),at(D,x,xt)};function at(D,j,vt){vt===null?D.matrix.copy(j.matrixWorld):(D.matrix.copy(vt.matrixWorld),D.matrix.invert(),D.matrix.multiply(j.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(j.projectionMatrix),D.projectionMatrixInverse.copy(j.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=dc*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(D){l=D,u!==null&&(u.fixedFoveation=D),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=D)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let L=null;function It(D,j){if(h=j.getViewerPose(c||o),g=j,h!==null){const vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let xt=!1;vt.length!==x.cameras.length&&(x.cameras.length=0,xt=!0);for(let Ut=0;Ut<vt.length;Ut++){const Jt=vt[Ut];let A=null;if(d!==null)A=d.getViewport(Jt);else{const S=f.getViewSubImage(u,Jt);A=S.viewport,Ut===0&&(t.setRenderTargetTextures(T,S.colorTexture,u.ignoreDepthValues?void 0:S.depthStencilTexture),t.setRenderTarget(T))}let P=st[Ut];P===void 0&&(P=new gn,P.layers.enable(Ut),P.viewport=new le,st[Ut]=P),P.matrix.fromArray(Jt.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Jt.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(A.x,A.y,A.width,A.height),Ut===0&&(x.matrix.copy(P.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),xt===!0&&x.cameras.push(P)}const Gt=s.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")){const Ut=f.getDepthInformation(vt[0]);Ut&&Ut.isValid&&Ut.texture&&_.init(t,Ut,s.renderState)}}for(let vt=0;vt<M.length;vt++){const xt=E[vt],Gt=M[vt];xt!==null&&Gt!==void 0&&Gt.update(xt,j,c||o)}L&&L(D,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const $t=new Xd;$t.setAnimationLoop(It),this.setAnimationLoop=function(D){L=D},this.dispose=function(){}}}const Gi=new jn,iS=new de;function sS(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Vd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,M,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),M=T.envMap,E=T.envMapRotation;M&&(m.envMap.value=M,Gi.copy(E),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(iS.makeRotationFromEuler(Gi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rS(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,M){const E=M.program;i.uniformBlockBinding(T,E)}function c(T,M){let E=s[T.id];E===void 0&&(g(T),E=h(T),s[T.id]=E,T.addEventListener("dispose",m));const k=M.program;i.updateUBOMapping(T,k);const R=t.render.frame;r[T.id]!==R&&(u(T),r[T.id]=R)}function h(T){const M=f();T.__bindingPointIndex=M;const E=n.createBuffer(),k=T.__size,R=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,k,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){const M=s[T.id],E=T.uniforms,k=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,C=E.length;R<C;R++){const F=Array.isArray(E[R])?E[R]:[E[R]];for(let st=0,x=F.length;st<x;st++){const b=F[st];if(d(b,R,st,k)===!0){const W=b.__offset,X=Array.isArray(b.value)?b.value:[b.value];let Q=0;for(let ct=0;ct<X.length;ct++){const V=X[ct],it=_(V);typeof V=="number"||typeof V=="boolean"?(b.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,W+Q,b.__data)):V.isMatrix3?(b.__data[0]=V.elements[0],b.__data[1]=V.elements[1],b.__data[2]=V.elements[2],b.__data[3]=0,b.__data[4]=V.elements[3],b.__data[5]=V.elements[4],b.__data[6]=V.elements[5],b.__data[7]=0,b.__data[8]=V.elements[6],b.__data[9]=V.elements[7],b.__data[10]=V.elements[8],b.__data[11]=0):(V.toArray(b.__data,Q),Q+=it.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,M,E,k){const R=T.value,C=M+"_"+E;if(k[C]===void 0)return typeof R=="number"||typeof R=="boolean"?k[C]=R:k[C]=R.clone(),!0;{const F=k[C];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return k[C]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function g(T){const M=T.uniforms;let E=0;const k=16;for(let C=0,F=M.length;C<F;C++){const st=Array.isArray(M[C])?M[C]:[M[C]];for(let x=0,b=st.length;x<b;x++){const W=st[x],X=Array.isArray(W.value)?W.value:[W.value];for(let Q=0,ct=X.length;Q<ct;Q++){const V=X[Q],it=_(V),H=E%k,gt=H%it.boundary,at=H+gt;E+=gt,at!==0&&k-at<it.storage&&(E+=k-at),W.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=it.storage}}}const R=E%k;return R>0&&(E+=k-R),T.__size=E,T.__cache={},this}function _(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function m(T){const M=T.target;M.removeEventListener("dispose",m);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class oS{constructor(t={}){const{canvas:e=qg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=Ci,this.toneMappingExposure=1;const M=this;let E=!1,k=0,R=0,C=null,F=-1,st=null;const x=new le,b=new le;let W=null;const X=new Kt(0);let Q=0,ct=e.width,V=e.height,it=1,H=null,gt=null;const at=new le(0,0,ct,V),L=new le(0,0,ct,V);let It=!1;const $t=new jc;let D=!1,j=!1;const vt=new de,xt=new de,Gt=new U,Ut=new le,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function P(){return C===null?it:1}let S=i;function rt(w,O){return e.getContext(w,O)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fc}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",wt,!1),S===null){const O="webgl2";if(S=rt(O,w),S===null)throw rt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let K,Z,nt,ot,tt,y,v,I,z,J,q,pt,ht,ft,Ot,ut,Mt,Pt,kt,_t,Wt,Xt,oe,N;function Et(){K=new uy(S),K.init(),Xt=new $M(S,K),Z=new ry(S,K,t,Xt),nt=new qM(S),Z.reverseDepthBuffer&&nt.buffers.depth.setReversed(!0),ot=new py(S),tt=new IM,y=new KM(S,K,nt,tt,Z,Xt,ot),v=new ay(M),I=new hy(M),z=new M_(S),oe=new iy(S,z),J=new fy(S,z,ot,oe),q=new gy(S,J,z,ot),kt=new my(S,Z,y),ut=new oy(tt),pt=new LM(M,v,I,K,Z,oe,ut),ht=new sS(M,tt),ft=new UM,Ot=new zM(K),Pt=new ny(M,v,I,nt,q,u,l),Mt=new XM(M,q,Z),N=new rS(S,ot,Z,nt),_t=new sy(S,K,ot),Wt=new dy(S,K,ot),ot.programs=pt.programs,M.capabilities=Z,M.extensions=K,M.properties=tt,M.renderLists=ft,M.shadowMap=Mt,M.state=nt,M.info=ot}Et();const et=new nS(M,S);this.xr=et,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const w=K.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=K.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(w){w!==void 0&&(it=w,this.setSize(ct,V,!1))},this.getSize=function(w){return w.set(ct,V)},this.setSize=function(w,O,Y=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ct=w,V=O,e.width=Math.floor(w*it),e.height=Math.floor(O*it),Y===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(ct*it,V*it).floor()},this.setDrawingBufferSize=function(w,O,Y){ct=w,V=O,it=Y,e.width=Math.floor(w*Y),e.height=Math.floor(O*Y),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(at)},this.setViewport=function(w,O,Y,$){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,O,Y,$),nt.viewport(x.copy(at).multiplyScalar(it).round())},this.getScissor=function(w){return w.copy(L)},this.setScissor=function(w,O,Y,$){w.isVector4?L.set(w.x,w.y,w.z,w.w):L.set(w,O,Y,$),nt.scissor(b.copy(L).multiplyScalar(it).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(w){nt.setScissorTest(It=w)},this.setOpaqueSort=function(w){H=w},this.setTransparentSort=function(w){gt=w},this.getClearColor=function(w){return w.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(w=!0,O=!0,Y=!0){let $=0;if(w){let B=!1;if(C!==null){const mt=C.texture.format;B=mt===Wc||mt===Gc||mt===Vc}if(B){const mt=C.texture.type,bt=mt===di||mt===ss||mt===Cr||mt===Hs||mt===zc||mt===Hc,At=Pt.getClearColor(),Rt=Pt.getClearAlpha(),zt=At.r,Ht=At.g,Ct=At.b;bt?(d[0]=zt,d[1]=Ht,d[2]=Ct,d[3]=Rt,S.clearBufferuiv(S.COLOR,0,d)):(g[0]=zt,g[1]=Ht,g[2]=Ct,g[3]=Rt,S.clearBufferiv(S.COLOR,0,g))}else $|=S.COLOR_BUFFER_BIT}O&&($|=S.DEPTH_BUFFER_BIT,S.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Y&&($|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),ft.dispose(),Ot.dispose(),tt.dispose(),v.dispose(),I.dispose(),q.dispose(),oe.dispose(),N.dispose(),pt.dispose(),et.dispose(),et.removeEventListener("sessionstart",oh),et.removeEventListener("sessionend",ah),Ni.stop()};function lt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=ot.autoReset,O=Mt.enabled,Y=Mt.autoUpdate,$=Mt.needsUpdate,B=Mt.type;Et(),ot.autoReset=w,Mt.enabled=O,Mt.autoUpdate=Y,Mt.needsUpdate=$,Mt.type=B}function wt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Zt(w){const O=w.target;O.removeEventListener("dispose",Zt),Ee(O)}function Ee(w){je(w),tt.remove(w)}function je(w){const O=tt.get(w).programs;O!==void 0&&(O.forEach(function(Y){pt.releaseProgram(Y)}),w.isShaderMaterial&&pt.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,Y,$,B,mt){O===null&&(O=Jt);const bt=B.isMesh&&B.matrixWorld.determinant()<0,At=cp(w,O,Y,$,B);nt.setMaterial($,bt);let Rt=Y.index,zt=1;if($.wireframe===!0){if(Rt=J.getWireframeAttribute(Y),Rt===void 0)return;zt=2}const Ht=Y.drawRange,Ct=Y.attributes.position;let ae=Ht.start*zt,pe=(Ht.start+Ht.count)*zt;mt!==null&&(ae=Math.max(ae,mt.start*zt),pe=Math.min(pe,(mt.start+mt.count)*zt)),Rt!==null?(ae=Math.max(ae,0),pe=Math.min(pe,Rt.count)):Ct!=null&&(ae=Math.max(ae,0),pe=Math.min(pe,Ct.count));const ye=pe-ae;if(ye<0||ye===1/0)return;oe.setup(B,$,At,Y,Rt);let nn,ne=_t;if(Rt!==null&&(nn=z.get(Rt),ne=Wt,ne.setIndex(nn)),B.isMesh)$.wireframe===!0?(nt.setLineWidth($.wireframeLinewidth*P()),ne.setMode(S.LINES)):ne.setMode(S.TRIANGLES);else if(B.isLine){let Lt=$.linewidth;Lt===void 0&&(Lt=1),nt.setLineWidth(Lt*P()),B.isLineSegments?ne.setMode(S.LINES):B.isLineLoop?ne.setMode(S.LINE_LOOP):ne.setMode(S.LINE_STRIP)}else B.isPoints?ne.setMode(S.POINTS):B.isSprite&&ne.setMode(S.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ne.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))ne.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Lt=B._multiDrawStarts,Le=B._multiDrawCounts,ie=B._multiDrawCount,yn=Rt?z.get(Rt).bytesPerElement:1,hs=tt.get($).currentProgram.getUniforms();for(let sn=0;sn<ie;sn++)hs.setValue(S,"_gl_DrawID",sn),ne.render(Lt[sn]/yn,Le[sn])}else if(B.isInstancedMesh)ne.renderInstances(ae,ye,B.count);else if(Y.isInstancedBufferGeometry){const Lt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Le=Math.min(Y.instanceCount,Lt);ne.renderInstances(ae,ye,Le)}else ne.render(ae,ye)};function Qt(w,O,Y){w.transparent===!0&&w.side===tn&&w.forceSinglePass===!1?(w.side=en,w.needsUpdate=!0,Gr(w,O,Y),w.side=Ii,w.needsUpdate=!0,Gr(w,O,Y),w.side=tn):Gr(w,O,Y)}this.compile=function(w,O,Y=null){Y===null&&(Y=w),m=Ot.get(Y),m.init(O),T.push(m),Y.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),w!==Y&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const $=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const mt=B.material;if(mt)if(Array.isArray(mt))for(let bt=0;bt<mt.length;bt++){const At=mt[bt];Qt(At,Y,B),$.add(At)}else Qt(mt,Y,B),$.add(mt)}),T.pop(),m=null,$},this.compileAsync=function(w,O,Y=null){const $=this.compile(w,O,Y);return new Promise(B=>{function mt(){if($.forEach(function(bt){tt.get(bt).currentProgram.isReady()&&$.delete(bt)}),$.size===0){B(w);return}setTimeout(mt,10)}K.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Ke=null;function $n(w){Ke&&Ke(w)}function oh(){Ni.stop()}function ah(){Ni.start()}const Ni=new Xd;Ni.setAnimationLoop($n),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(w){Ke=w,et.setAnimationLoop(w),w===null?Ni.stop():Ni.start()},et.addEventListener("sessionstart",oh),et.addEventListener("sessionend",ah),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(O),O=et.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,O,C),m=Ot.get(w,T.length),m.init(O),T.push(m),xt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$t.setFromProjectionMatrix(xt),j=this.localClippingEnabled,D=ut.init(this.clippingPlanes,j),_=ft.get(w,p.length),_.init(),p.push(_),et.enabled===!0&&et.isPresenting===!0){const mt=M.xr.getDepthSensingMesh();mt!==null&&fa(mt,O,-1/0,M.sortObjects)}fa(w,O,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(H,gt),A=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,A&&Pt.addToRenderList(_,w),this.info.render.frame++,D===!0&&ut.beginShadows();const Y=m.state.shadowsArray;Mt.render(Y,w,O),D===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=_.opaque,B=_.transmissive;if(m.setupLights(),O.isArrayCamera){const mt=O.cameras;if(B.length>0)for(let bt=0,At=mt.length;bt<At;bt++){const Rt=mt[bt];ch($,B,w,Rt)}A&&Pt.render(w);for(let bt=0,At=mt.length;bt<At;bt++){const Rt=mt[bt];lh(_,w,Rt,Rt.viewport)}}else B.length>0&&ch($,B,w,O),A&&Pt.render(w),lh(_,w,O);C!==null&&(y.updateMultisampleRenderTarget(C),y.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(M,w,O),oe.resetDefaultState(),F=-1,st=null,T.pop(),T.length>0?(m=T[T.length-1],D===!0&&ut.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function fa(w,O,Y,$){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$t.intersectsSprite(w)){$&&Ut.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xt);const bt=q.update(w),At=w.material;At.visible&&_.push(w,bt,At,Y,Ut.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$t.intersectsObject(w))){const bt=q.update(w),At=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ut.copy(w.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ut.copy(bt.boundingSphere.center)),Ut.applyMatrix4(w.matrixWorld).applyMatrix4(xt)),Array.isArray(At)){const Rt=bt.groups;for(let zt=0,Ht=Rt.length;zt<Ht;zt++){const Ct=Rt[zt],ae=At[Ct.materialIndex];ae&&ae.visible&&_.push(w,bt,ae,Y,Ut.z,Ct)}}else At.visible&&_.push(w,bt,At,Y,Ut.z,null)}}const mt=w.children;for(let bt=0,At=mt.length;bt<At;bt++)fa(mt[bt],O,Y,$)}function lh(w,O,Y,$){const B=w.opaque,mt=w.transmissive,bt=w.transparent;m.setupLightsView(Y),D===!0&&ut.setGlobalState(M.clippingPlanes,Y),$&&nt.viewport(x.copy($)),B.length>0&&Vr(B,O,Y),mt.length>0&&Vr(mt,O,Y),bt.length>0&&Vr(bt,O,Y),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function ch(w,O,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new rs(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?kr:di,minFilter:Qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const mt=m.state.transmissionRenderTarget[$.id],bt=$.viewport||x;mt.setSize(bt.z,bt.w);const At=M.getRenderTarget();M.setRenderTarget(mt),M.getClearColor(X),Q=M.getClearAlpha(),Q<1&&M.setClearColor(16777215,.5),M.clear(),A&&Pt.render(Y);const Rt=M.toneMapping;M.toneMapping=Ci;const zt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),D===!0&&ut.setGlobalState(M.clippingPlanes,$),Vr(w,Y,$),y.updateMultisampleRenderTarget(mt),y.updateRenderTargetMipmap(mt),K.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Ct=0,ae=O.length;Ct<ae;Ct++){const pe=O[Ct],ye=pe.object,nn=pe.geometry,ne=pe.material,Lt=pe.group;if(ne.side===tn&&ye.layers.test($.layers)){const Le=ne.side;ne.side=en,ne.needsUpdate=!0,hh(ye,Y,$,nn,ne,Lt),ne.side=Le,ne.needsUpdate=!0,Ht=!0}}Ht===!0&&(y.updateMultisampleRenderTarget(mt),y.updateRenderTargetMipmap(mt))}M.setRenderTarget(At),M.setClearColor(X,Q),zt!==void 0&&($.viewport=zt),M.toneMapping=Rt}function Vr(w,O,Y){const $=O.isScene===!0?O.overrideMaterial:null;for(let B=0,mt=w.length;B<mt;B++){const bt=w[B],At=bt.object,Rt=bt.geometry,zt=$===null?bt.material:$,Ht=bt.group;At.layers.test(Y.layers)&&hh(At,O,Y,Rt,zt,Ht)}}function hh(w,O,Y,$,B,mt){w.onBeforeRender(M,O,Y,$,B,mt),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(M,O,Y,$,w,mt),B.transparent===!0&&B.side===tn&&B.forceSinglePass===!1?(B.side=en,B.needsUpdate=!0,M.renderBufferDirect(Y,O,$,B,w,mt),B.side=Ii,B.needsUpdate=!0,M.renderBufferDirect(Y,O,$,B,w,mt),B.side=tn):M.renderBufferDirect(Y,O,$,B,w,mt),w.onAfterRender(M,O,Y,$,B,mt)}function Gr(w,O,Y){O.isScene!==!0&&(O=Jt);const $=tt.get(w),B=m.state.lights,mt=m.state.shadowsArray,bt=B.state.version,At=pt.getParameters(w,B.state,mt,O,Y),Rt=pt.getProgramCacheKey(At);let zt=$.programs;$.environment=w.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(w.isMeshStandardMaterial?I:v).get(w.envMap||$.environment),$.envMapRotation=$.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,zt===void 0&&(w.addEventListener("dispose",Zt),zt=new Map,$.programs=zt);let Ht=zt.get(Rt);if(Ht!==void 0){if($.currentProgram===Ht&&$.lightsStateVersion===bt)return fh(w,At),Ht}else At.uniforms=pt.getUniforms(w),w.onBeforeCompile(At,M),Ht=pt.acquireProgram(At,Rt),zt.set(Rt,Ht),$.uniforms=At.uniforms;const Ct=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ct.clippingPlanes=ut.uniform),fh(w,At),$.needsLights=up(w),$.lightsStateVersion=bt,$.needsLights&&(Ct.ambientLightColor.value=B.state.ambient,Ct.lightProbe.value=B.state.probe,Ct.directionalLights.value=B.state.directional,Ct.directionalLightShadows.value=B.state.directionalShadow,Ct.spotLights.value=B.state.spot,Ct.spotLightShadows.value=B.state.spotShadow,Ct.rectAreaLights.value=B.state.rectArea,Ct.ltc_1.value=B.state.rectAreaLTC1,Ct.ltc_2.value=B.state.rectAreaLTC2,Ct.pointLights.value=B.state.point,Ct.pointLightShadows.value=B.state.pointShadow,Ct.hemisphereLights.value=B.state.hemi,Ct.directionalShadowMap.value=B.state.directionalShadowMap,Ct.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ct.spotShadowMap.value=B.state.spotShadowMap,Ct.spotLightMatrix.value=B.state.spotLightMatrix,Ct.spotLightMap.value=B.state.spotLightMap,Ct.pointShadowMap.value=B.state.pointShadowMap,Ct.pointShadowMatrix.value=B.state.pointShadowMatrix),$.currentProgram=Ht,$.uniformsList=null,Ht}function uh(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Io.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function fh(w,O){const Y=tt.get(w);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function cp(w,O,Y,$,B){O.isScene!==!0&&(O=Jt),y.resetTextureUnits();const mt=O.fog,bt=$.isMeshStandardMaterial?O.environment:null,At=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ui,Rt=($.isMeshStandardMaterial?I:v).get($.envMap||bt),zt=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ht=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ct=!!Y.morphAttributes.position,ae=!!Y.morphAttributes.normal,pe=!!Y.morphAttributes.color;let ye=Ci;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ye=M.toneMapping);const nn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ne=nn!==void 0?nn.length:0,Lt=tt.get($),Le=m.state.lights;if(D===!0&&(j===!0||w!==st)){const un=w===st&&$.id===F;ut.setState($,w,un)}let ie=!1;$.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Le.state.version||Lt.outputColorSpace!==At||B.isBatchedMesh&&Lt.batching===!1||!B.isBatchedMesh&&Lt.batching===!0||B.isBatchedMesh&&Lt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Lt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Lt.instancing===!1||!B.isInstancedMesh&&Lt.instancing===!0||B.isSkinnedMesh&&Lt.skinning===!1||!B.isSkinnedMesh&&Lt.skinning===!0||B.isInstancedMesh&&Lt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Lt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Lt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Lt.instancingMorph===!1&&B.morphTexture!==null||Lt.envMap!==Rt||$.fog===!0&&Lt.fog!==mt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==ut.numPlanes||Lt.numIntersection!==ut.numIntersection)||Lt.vertexAlphas!==zt||Lt.vertexTangents!==Ht||Lt.morphTargets!==Ct||Lt.morphNormals!==ae||Lt.morphColors!==pe||Lt.toneMapping!==ye||Lt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Lt.__version=$.version);let yn=Lt.currentProgram;ie===!0&&(yn=Gr($,O,B));let hs=!1,sn=!1,da=!1;const be=yn.getUniforms(),mi=Lt.uniforms;if(nt.useProgram(yn.program)&&(hs=!0,sn=!0,da=!0),$.id!==F&&(F=$.id,sn=!0),hs||st!==w){Z.reverseDepthBuffer?(vt.copy(w.projectionMatrix),Kg(vt),$g(vt),be.setValue(S,"projectionMatrix",vt)):be.setValue(S,"projectionMatrix",w.projectionMatrix),be.setValue(S,"viewMatrix",w.matrixWorldInverse);const un=be.map.cameraPosition;un!==void 0&&un.setValue(S,Gt.setFromMatrixPosition(w.matrixWorld)),Z.logarithmicDepthBuffer&&be.setValue(S,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&be.setValue(S,"isOrthographic",w.isOrthographicCamera===!0),st!==w&&(st=w,sn=!0,da=!0)}if(B.isSkinnedMesh){be.setOptional(S,B,"bindMatrix"),be.setOptional(S,B,"bindMatrixInverse");const un=B.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),be.setValue(S,"boneTexture",un.boneTexture,y))}B.isBatchedMesh&&(be.setOptional(S,B,"batchingTexture"),be.setValue(S,"batchingTexture",B._matricesTexture,y),be.setOptional(S,B,"batchingIdTexture"),be.setValue(S,"batchingIdTexture",B._indirectTexture,y),be.setOptional(S,B,"batchingColorTexture"),B._colorsTexture!==null&&be.setValue(S,"batchingColorTexture",B._colorsTexture,y));const pa=Y.morphAttributes;if((pa.position!==void 0||pa.normal!==void 0||pa.color!==void 0)&&kt.update(B,Y,yn),(sn||Lt.receiveShadow!==B.receiveShadow)&&(Lt.receiveShadow=B.receiveShadow,be.setValue(S,"receiveShadow",B.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(mi.envMap.value=Rt,mi.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(mi.envMapIntensity.value=O.environmentIntensity),sn&&(be.setValue(S,"toneMappingExposure",M.toneMappingExposure),Lt.needsLights&&hp(mi,da),mt&&$.fog===!0&&ht.refreshFogUniforms(mi,mt),ht.refreshMaterialUniforms(mi,$,it,V,m.state.transmissionRenderTarget[w.id]),Io.upload(S,uh(Lt),mi,y)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Io.upload(S,uh(Lt),mi,y),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&be.setValue(S,"center",B.center),be.setValue(S,"modelViewMatrix",B.modelViewMatrix),be.setValue(S,"normalMatrix",B.normalMatrix),be.setValue(S,"modelMatrix",B.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const un=$.uniformsGroups;for(let ma=0,fp=un.length;ma<fp;ma++){const dh=un[ma];N.update(dh,yn),N.bind(dh,yn)}}return yn}function hp(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function up(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,O,Y){tt.get(w.texture).__webglTexture=O,tt.get(w.depthTexture).__webglTexture=Y;const $=tt.get(w);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const Y=tt.get(w);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,Y=0){C=w,k=O,R=Y;let $=!0,B=null,mt=!1,bt=!1;if(w){const Rt=tt.get(w);if(Rt.__useDefaultFramebuffer!==void 0)nt.bindFramebuffer(S.FRAMEBUFFER,null),$=!1;else if(Rt.__webglFramebuffer===void 0)y.setupRenderTarget(w);else if(Rt.__hasExternalTextures)y.rebindTextures(w,tt.get(w.texture).__webglTexture,tt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ct=w.depthTexture;if(Rt.__boundDepthTexture!==Ct){if(Ct!==null&&tt.has(Ct)&&(w.width!==Ct.image.width||w.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(w)}}const zt=w.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(bt=!0);const Ht=tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ht[O])?B=Ht[O][Y]:B=Ht[O],mt=!0):w.samples>0&&y.useMultisampledRTT(w)===!1?B=tt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ht)?B=Ht[Y]:B=Ht,x.copy(w.viewport),b.copy(w.scissor),W=w.scissorTest}else x.copy(at).multiplyScalar(it).floor(),b.copy(L).multiplyScalar(it).floor(),W=It;if(nt.bindFramebuffer(S.FRAMEBUFFER,B)&&$&&nt.drawBuffers(w,B),nt.viewport(x),nt.scissor(b),nt.setScissorTest(W),mt){const Rt=tt.get(w.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+O,Rt.__webglTexture,Y)}else if(bt){const Rt=tt.get(w.texture),zt=O||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Rt.__webglTexture,Y||0,zt)}F=-1},this.readRenderTargetPixels=function(w,O,Y,$,B,mt,bt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At){nt.bindFramebuffer(S.FRAMEBUFFER,At);try{const Rt=w.texture,zt=Rt.format,Ht=Rt.type;if(!Z.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-$&&Y>=0&&Y<=w.height-B&&S.readPixels(O,Y,$,B,Xt.convert(zt),Xt.convert(Ht),mt)}finally{const Rt=C!==null?tt.get(C).__webglFramebuffer:null;nt.bindFramebuffer(S.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(w,O,Y,$,B,mt,bt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At){const Rt=w.texture,zt=Rt.format,Ht=Rt.type;if(!Z.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-$&&Y>=0&&Y<=w.height-B){nt.bindFramebuffer(S.FRAMEBUFFER,At);const Ct=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Ct),S.bufferData(S.PIXEL_PACK_BUFFER,mt.byteLength,S.STREAM_READ),S.readPixels(O,Y,$,B,Xt.convert(zt),Xt.convert(Ht),0);const ae=C!==null?tt.get(C).__webglFramebuffer:null;nt.bindFramebuffer(S.FRAMEBUFFER,ae);const pe=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await jg(S,pe,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Ct),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,mt),S.deleteBuffer(Ct),S.deleteSync(pe),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,Y=0){w.isTexture!==!0&&(Lo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const $=Math.pow(2,-Y),B=Math.floor(w.image.width*$),mt=Math.floor(w.image.height*$),bt=O!==null?O.x:0,At=O!==null?O.y:0;y.setTexture2D(w,0),S.copyTexSubImage2D(S.TEXTURE_2D,Y,0,0,bt,At,B,mt),nt.unbindTexture()},this.copyTextureToTexture=function(w,O,Y=null,$=null,B=0){w.isTexture!==!0&&(Lo("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,w=arguments[1],O=arguments[2],B=arguments[3]||0,Y=null);let mt,bt,At,Rt,zt,Ht;Y!==null?(mt=Y.max.x-Y.min.x,bt=Y.max.y-Y.min.y,At=Y.min.x,Rt=Y.min.y):(mt=w.image.width,bt=w.image.height,At=0,Rt=0),$!==null?(zt=$.x,Ht=$.y):(zt=0,Ht=0);const Ct=Xt.convert(O.format),ae=Xt.convert(O.type);y.setTexture2D(O,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,O.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,O.unpackAlignment);const pe=S.getParameter(S.UNPACK_ROW_LENGTH),ye=S.getParameter(S.UNPACK_IMAGE_HEIGHT),nn=S.getParameter(S.UNPACK_SKIP_PIXELS),ne=S.getParameter(S.UNPACK_SKIP_ROWS),Lt=S.getParameter(S.UNPACK_SKIP_IMAGES),Le=w.isCompressedTexture?w.mipmaps[B]:w.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,Le.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Le.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,At),S.pixelStorei(S.UNPACK_SKIP_ROWS,Rt),w.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,B,zt,Ht,mt,bt,Ct,ae,Le.data):w.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,B,zt,Ht,Le.width,Le.height,Ct,Le.data):S.texSubImage2D(S.TEXTURE_2D,B,zt,Ht,mt,bt,Ct,ae,Le),S.pixelStorei(S.UNPACK_ROW_LENGTH,pe),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ye),S.pixelStorei(S.UNPACK_SKIP_PIXELS,nn),S.pixelStorei(S.UNPACK_SKIP_ROWS,ne),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Lt),B===0&&O.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),nt.unbindTexture()},this.copyTextureToTexture3D=function(w,O,Y=null,$=null,B=0){w.isTexture!==!0&&(Lo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,w=arguments[2],O=arguments[3],B=arguments[4]||0);let mt,bt,At,Rt,zt,Ht,Ct,ae,pe;const ye=w.isCompressedTexture?w.mipmaps[B]:w.image;Y!==null?(mt=Y.max.x-Y.min.x,bt=Y.max.y-Y.min.y,At=Y.max.z-Y.min.z,Rt=Y.min.x,zt=Y.min.y,Ht=Y.min.z):(mt=ye.width,bt=ye.height,At=ye.depth,Rt=0,zt=0,Ht=0),$!==null?(Ct=$.x,ae=$.y,pe=$.z):(Ct=0,ae=0,pe=0);const nn=Xt.convert(O.format),ne=Xt.convert(O.type);let Lt;if(O.isData3DTexture)y.setTexture3D(O,0),Lt=S.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)y.setTexture2DArray(O,0),Lt=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,O.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,O.unpackAlignment);const Le=S.getParameter(S.UNPACK_ROW_LENGTH),ie=S.getParameter(S.UNPACK_IMAGE_HEIGHT),yn=S.getParameter(S.UNPACK_SKIP_PIXELS),hs=S.getParameter(S.UNPACK_SKIP_ROWS),sn=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,ye.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ye.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Rt),S.pixelStorei(S.UNPACK_SKIP_ROWS,zt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ht),w.isDataTexture||w.isData3DTexture?S.texSubImage3D(Lt,B,Ct,ae,pe,mt,bt,At,nn,ne,ye.data):O.isCompressedArrayTexture?S.compressedTexSubImage3D(Lt,B,Ct,ae,pe,mt,bt,At,nn,ye.data):S.texSubImage3D(Lt,B,Ct,ae,pe,mt,bt,At,nn,ne,ye),S.pixelStorei(S.UNPACK_ROW_LENGTH,Le),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ie),S.pixelStorei(S.UNPACK_SKIP_PIXELS,yn),S.pixelStorei(S.UNPACK_SKIP_ROWS,hs),S.pixelStorei(S.UNPACK_SKIP_IMAGES,sn),B===0&&O.generateMipmaps&&S.generateMipmap(Lt),nt.unbindTexture()},this.initRenderTarget=function(w){tt.get(w).__webglFramebuffer===void 0&&y.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?y.setTextureCube(w,0):w.isData3DTexture?y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?y.setTexture2DArray(w,0):y.setTexture2D(w,0),nt.unbindTexture()},this.resetState=function(){k=0,R=0,C=null,nt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Xc?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===la?"display-p3":"srgb"}}class Jc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=i}clone(){return new Jc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let aS=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};class mc extends ls{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wu=new de,gc=new Yc,vo=new ca,xo=new U;class hl extends Pe{constructor(t=new qe,e=new mc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(s),vo.radius+=r,t.ray.intersectsSphere(vo)===!1)return;Wu.copy(s).invert(),gc.copy(t.ray).applyMatrix4(Wu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=u,_=d;g<_;g++){const m=c.getX(g);xo.fromBufferAttribute(f,m),Xu(xo,m,l,s,t,e,this)}}else{const u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=u,_=d;g<_;g++)xo.fromBufferAttribute(f,g),Xu(xo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xu(n,t,e,i,s,r,o){const a=gc.distanceSqToPoint(n);if(a<e){const l=new U;gc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Zc extends Ye{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Kn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Tt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new U,s=[],r=[],o=[],a=new U,l=new de;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Be(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Be(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Qc extends Kn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Tt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class lS extends Qc{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function th(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const yo=new U,ul=new th,fl=new th,dl=new th;class cS extends Kn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new U){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(yo.subVectors(s[0],s[1]).add(s[0]),c=yo);const f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(yo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ul.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,_,m),fl.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,_,m),dl.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ul.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),fl.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),dl.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(ul.calc(l),fl.calc(l),dl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Yu(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function hS(n,t){const e=1-n;return e*e*t}function uS(n,t){return 2*(1-n)*n*t}function fS(n,t){return n*n*t}function _r(n,t,e,i){return hS(n,t)+uS(n,e)+fS(n,i)}function dS(n,t){const e=1-n;return e*e*e*t}function pS(n,t){const e=1-n;return 3*e*e*n*t}function mS(n,t){return 3*(1-n)*n*n*t}function gS(n,t){return n*n*n*t}function vr(n,t,e,i,s){return dS(n,t)+pS(n,e)+mS(n,i)+gS(n,s)}class Jd extends Kn{constructor(t=new Tt,e=new Tt,i=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Tt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _S extends Kn{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y),vr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zd extends Kn{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vS extends Kn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qd extends Kn{constructor(t=new Tt,e=new Tt,i=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Tt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xS extends Kn{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y),_r(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tp extends Kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Yu(a,l.x,c.x,h.x,f.x),Yu(a,l.y,c.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}}var qu=Object.freeze({__proto__:null,ArcCurve:lS,CatmullRomCurve3:cS,CubicBezierCurve:Jd,CubicBezierCurve3:_S,EllipseCurve:Qc,LineCurve:Zd,LineCurve3:vS,QuadraticBezierCurve:Qd,QuadraticBezierCurve3:xS,SplineCurve:tp});class yS extends Kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qu[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new qu[s.type]().fromJSON(s))}return this}}class ju extends yS{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Zd(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Qd(this.currentPoint.clone(),new Tt(t,e),new Tt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Jd(this.currentPoint.clone(),new Tt(t,e),new Tt(i,s),new Tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new tp(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Qc(t,e,i,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class eh extends qe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new U,h=new Tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=i+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(a,3)),this.setAttribute("uv",new Se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eh(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class nh extends qe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let g=0;const _=[],m=i/2;let p=0;T(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Se(f,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(d,2));function T(){const E=new U,k=new U;let R=0;const C=(e-t)/i;for(let F=0;F<=r;F++){const st=[],x=F/r,b=x*(e-t)+t;for(let W=0;W<=s;W++){const X=W/s,Q=X*l+a,ct=Math.sin(Q),V=Math.cos(Q);k.x=b*ct,k.y=-x*i+m,k.z=b*V,f.push(k.x,k.y,k.z),E.set(ct,C,V).normalize(),u.push(E.x,E.y,E.z),d.push(X,1-x),st.push(g++)}_.push(st)}for(let F=0;F<s;F++)for(let st=0;st<r;st++){const x=_[st][F],b=_[st+1][F],W=_[st+1][F+1],X=_[st][F+1];t>0&&(h.push(x,b,X),R+=3),e>0&&(h.push(b,W,X),R+=3)}c.addGroup(p,R,0),p+=R}function M(E){const k=g,R=new Tt,C=new U;let F=0;const st=E===!0?t:e,x=E===!0?1:-1;for(let W=1;W<=s;W++)f.push(0,m*x,0),u.push(0,x,0),d.push(.5,.5),g++;const b=g;for(let W=0;W<=s;W++){const Q=W/s*l+a,ct=Math.cos(Q),V=Math.sin(Q);C.x=st*V,C.y=m*x,C.z=st*ct,f.push(C.x,C.y,C.z),u.push(0,x,0),R.x=ct*.5+.5,R.y=V*.5*x+.5,d.push(R.x,R.y),g++}for(let W=0;W<s;W++){const X=k+W,Q=b+W;E===!0?h.push(Q,Q+1,X):h.push(Q+1,Q,X),F+=3}c.addGroup(p,F,E===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ep extends ju{constructor(t){super(t),this.uuid=Ys(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new ju().fromJSON(s))}return this}}const MS={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=np(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,u,d;if(i&&(r=TS(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)f=n[g],u=n[g+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Pr(r,o,e,a,l,d,0),o}};function np(n,t,e,i,s){let r,o;if(s===FS(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Ku(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Ku(r,n[r],n[r+1],o);return o&&ua(o,o.next)&&(Ir(o),o=o.next),o}function os(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ua(e,e.next)||xe(e.prev,e,e.next)===0)){if(Ir(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Pr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&LS(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?bS(n,i,s,r):SS(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Ir(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=ES(os(n),t,e),Pr(n,t,e,i,s,r,2)):o===2&&wS(n,t,e,i,s,r):Pr(os(n),t,e,i,s,r,1);break}}}function SS(n){const t=n.prev,e=n,i=n.next;if(xe(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Cs(s,a,r,l,o,c,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bS(n,t,e,i){const s=n.prev,r=n,o=n.next;if(xe(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<f?h<u?h:u:f<u?f:u,_=a>l?a>c?a:c:l>c?l:c,m=h>f?h>u?h:u:f>u?f:u,p=_c(d,g,t,e,i),T=_c(_,m,t,e,i);let M=n.prevZ,E=n.nextZ;for(;M&&M.z>=p&&E&&E.z<=T;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Cs(a,h,l,f,c,u,M.x,M.y)&&xe(M.prev,M,M.next)>=0||(M=M.prevZ,E.x>=d&&E.x<=_&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Cs(a,h,l,f,c,u,E.x,E.y)&&xe(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Cs(a,h,l,f,c,u,M.x,M.y)&&xe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;E&&E.z<=T;){if(E.x>=d&&E.x<=_&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Cs(a,h,l,f,c,u,E.x,E.y)&&xe(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function ES(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!ua(s,r)&&ip(s,i,i.next,r)&&Lr(s,r)&&Lr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Ir(i),Ir(i.next),i=n=r),i=i.next}while(i!==n);return os(i)}function wS(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&US(o,a)){let l=sp(o,a);o=os(o,o.next),l=os(l,l.next),Pr(o,t,e,i,s,r,0),Pr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function TS(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=np(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(DS(c));for(s.sort(AS),r=0;r<s.length;r++)e=RS(s[r],e);return e}function AS(n,t){return n.x-t.x}function RS(n,t){const e=CS(n,t);if(!e)return t;const i=sp(e,n);return os(i,i.next),os(e,e.next)}function CS(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>i&&(i=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Cs(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),Lr(e,n)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&PS(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function PS(n,t){return xe(n.prev,n,t.prev)<0&&xe(t.next,n,n.next)<0}function LS(n,t,e,i){let s=n;do s.z===0&&(s.z=_c(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,IS(s)}function IS(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function _c(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function DS(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Cs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function US(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!NS(n,t)&&(Lr(n,t)&&Lr(t,n)&&OS(n,t)&&(xe(n.prev,n,t.prev)||xe(n,t.prev,t))||ua(n,t)&&xe(n.prev,n,n.next)>0&&xe(t.prev,t,t.next)>0)}function xe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ua(n,t){return n.x===t.x&&n.y===t.y}function ip(n,t,e,i){const s=So(xe(n,t,e)),r=So(xe(n,t,i)),o=So(xe(e,i,n)),a=So(xe(e,i,t));return!!(s!==r&&o!==a||s===0&&Mo(n,e,t)||r===0&&Mo(n,i,t)||o===0&&Mo(e,n,i)||a===0&&Mo(e,t,i))}function Mo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function So(n){return n>0?1:n<0?-1:0}function NS(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&ip(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Lr(n,t){return xe(n.prev,n,n.next)<0?xe(n,t,n.next)>=0&&xe(n,n.prev,t)>=0:xe(n,t,n.prev)<0||xe(n,n.next,t)<0}function OS(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function sp(n,t){const e=new vc(n.i,n.x,n.y),i=new vc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Ku(n,t,e,i){const s=new vc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ir(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function vc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function FS(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class xr{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return xr.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];$u(t),Ju(i,t);let o=t.length;e.forEach($u);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ju(i,e[l]);const a=MS.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function $u(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ju(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Dr extends qe{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let f=t;const u=(e-t)/s,d=new U,g=new Tt;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const T=p+m,M=T,E=T+i+1,k=T+i+2,R=T+1;a.push(M,E,R),a.push(E,k,R)}}this.setIndex(a),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ih extends qe{constructor(t=new ep([new Tt(0,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Se(s,3)),this.setAttribute("normal",new Se(r,3)),this.setAttribute("uv",new Se(o,2));function c(h){const f=s.length/3,u=h.extractPoints(e);let d=u.shape;const g=u.holes;xr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const T=g[m];xr.isClockWise(T)===!0&&(g[m]=T.reverse())}const _=xr.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const T=g[m];d=d.concat(T)}for(let m=0,p=d.length;m<p;m++){const T=d[m];s.push(T.x,T.y,0),r.push(0,0,1),o.push(T.x,T.y)}for(let m=0,p=_.length;m<p;m++){const T=_[m],M=T[0]+f,E=T[1]+f,k=T[2]+f;i.push(M,E,k),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return BS(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new ih(i,t.curveSegments)}}function BS(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class sh extends qe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new U,f=new U,u=new U;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/i*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,T=(s+1)*d+g;o.push(_,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class rp extends ls{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ud,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rh extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class kS extends rh{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const pl=new de,Zu=new U,Qu=new U;class op{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jc,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zu),Qu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qu),e.updateMatrixWorld(),pl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const tf=new de,sr=new U,ml=new U;class zS extends op{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),sr.setFromMatrixPosition(t.matrixWorld),i.position.copy(sr),ml.copy(i.position),ml.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ml),i.updateMatrixWorld(),s.makeTranslation(-sr.x,-sr.y,-sr.z),tf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tf)}}class ef extends rh{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new zS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class HS extends op{constructor(){super(new Kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class VS extends rh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new HS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const nf=new de;class GS{constructor(t,e,i=0,s=1/0){this.ray=new Yc(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new qc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nf),this}intersectObject(t,e=!0,i=[]){return xc(t,this,i,e),i.sort(sf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)xc(t[s],this,i,e);return i.sort(sf),i}}function sf(n,t){return n.distance-t.distance}function xc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)xc(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fc);class WS{constructor(){dt(this,"geometry");dt(this,"materials",["#ed4326","#ff931f","#ffe77b"].map(t=>new mn({color:t,side:tn,toneMapped:!1,depthWrite:!1})));const t=new ep;t.moveTo(0,0),t.bezierCurveTo(-.5,-.02,-.65,.35,-.38,.75),t.bezierCurveTo(-.4,.48,-.1,.49,-.18,.89),t.bezierCurveTo(-.24,1.16,.15,1.27,.13,1.6),t.bezierCurveTo(.62,1.23,.18,.94,.38,.65),t.bezierCurveTo(.43,.82,.64,.89,.59,1.05),t.bezierCurveTo(.97,.53,.75,.03,.15,0),t.closePath(),this.geometry=new ih(t,16)}create(t=!1){const e=new Ue;for(let i=0;i<3;i++){const s=new fe(t?this.geometry.clone():this.geometry,this.materials[i]);s.scale.set(i===0?1:i===1?.69:.36,i===0?1:i===1?.73:.46,1),s.position.set(i*.035,.015*i,.012*i),s.renderOrder=1+i,e.add(s)}return e}dispose(){this.geometry.dispose();for(const t of this.materials)t.dispose()}}class XS{constructor(t=Math.random){dt(this,"drops",[]);dt(this,"wounds",[]);this.random=t}clear(){this.drops.length=0,this.wounds.length=0}get emitterCount(){return this.wounds.length}burst(t,e,i,s,r=!1){for(let o=0;o<i&&this.drops.length<600;o++)this.drops.push({x:t,y:e,z:1.1+(this.random()-.5)*.3,vx:(this.random()-.5)*(s?4:5),vy:s?7+this.random()*6:r?-1-this.random()*3:(this.random()-.35)*5,vz:(this.random()-.5)*1.8,life:1.6+this.random()*.6,settled:!1})}event(t,e=!1){if(t.kind==="hit"&&this.burst(t.x,t.y,e?7:30,!1),t.kind!=="detach"||!t.part||!t.severed)return;const i=t.part==="head";this.burst(t.x,t.y,e?16:i?80:50,i,!i),this.wounds.length<32&&this.wounds.push({actor:t.actor,part:t.part,x:t.x,y:t.y,life:3,carry:0,up:i})}update(t,e,i=!1){for(let s=this.wounds.length-1;s>=0;s--){const r=this.wounds[s];if(r.life-=t,r.life<=0){this.wounds.splice(s,1);continue}const o=e.actors[r.actor];if(o&&o.hp>0){const l=pn(o,r.part);r.x=o.x+l.x,r.y=o.y+l.y+(r.up?-.2:l.h*.35)}r.carry+=t*(i?10:36);const a=Math.floor(r.carry);r.carry-=a,this.burst(r.x,r.y,a,r.up,!r.up)}for(let s=this.drops.length-1;s>=0;s--){const r=this.drops[s];if(r.life-=t,r.life<=0||r.y<-15){this.drops.splice(s,1);continue}if(r.settled)continue;const o=r.y;if(r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t,r.vy-=17*t,r.vy>=0)continue;let a=-1/0;for(const l of e.props){if(l.hp<=0||l.falling||!["crate","floor","roof","balcony","table","car","truck","barrier"].includes(l.kind))continue;const c=l.y+l.h/2;Math.abs(r.x-l.x)<=l.w/2&&o>=c&&r.y<=c&&(a=Math.max(a,c))}a>-1/0&&(r.y=a+.025,r.settled=!0,r.vx=r.vy=r.vz=0,r.life=1.2)}}}const yr=new Map;let zn;function YS(){if(zn)return zn;const n=document.createElement("canvas");n.width=128,n.height=128;const t=n.getContext("2d");t.fillStyle="#ededeb",t.fillRect(0,0,128,128);let e=719;const i=()=>(e=Math.imul(e,1664525)+1013904223|0,(e>>>0)/4294967296);for(let s=0;s<2e3;s++)t.fillStyle=`rgba(24,19,31,${i()*.15})`,t.fillRect(i()*128,i()*128,1+i()*3,1+i()*2);for(let s=0;s<14;s++)t.fillStyle="#231c3014",t.fillRect(i()*128,i()*128,1+i()*6,i()*28);return zn=new Zc(n),zn.colorSpace=Qe,zn.magFilter=Xe,zn}function Do(n){return yr.has(n)||yr.set(n,new rp({color:n,roughness:.88,flatShading:!0,map:Br.includes(n)||oa.includes(n)?null:YS()})),yr.get(n)}function Ws(n,t,e,i){const s=new fe(new Gn(n,t,e),Do(i));return s.castShadow=!0,s.receiveShadow=!0,s}function Vt(n,t,e,i,s,r,o,a){const l=Ws(t,e,i,a);return l.position.set(s,r,o),n.add(l),l}const Mr=new Map;function Rn(n,t,e,i="#f7d438",s="#241e33"){const r=n+i+s;if(!Mr.has(r)){const o=document.createElement("canvas");o.width=512,o.height=192;const a=o.getContext("2d");a.fillStyle=s,a.fillRect(0,0,512,192),a.strokeStyle=i,a.lineWidth=7,a.strokeRect(10,10,492,172);const l=n.split(`
`);a.fillStyle=i,a.textAlign="center",a.textBaseline="middle",a.font=`900 ${l.length>1?54:72}px Impact, sans-serif`,l.forEach((h,f)=>a.fillText(h,256,96+(f-(l.length-1)/2)*65,470));const c=new Zc(o);c.colorSpace=Qe,c.magFilter=Xe,Mr.set(r,new mn({map:c}))}return new fe(new cs(t,e),Mr.get(r))}function qS(n){const t=new Ue;t.userData.look=JSON.stringify(n);for(const e of ln){const i=is[e],s=Br[n.skin],r=Fs[n.color],a=e==="head"||e.startsWith("hand")||e.startsWith("forearm")||n.clothes===1&&e.startsWith("arm")?s:e.startsWith("foot")?"#272530":e.startsWith("thigh")||e.startsWith("shin")?n.clothes===2?r:"#333346":r,l=Ws(i.w,i.h,.5,a);if(l.name=e,l.position.set(i.x,i.y,0),t.add(l),e==="torso"&&(n.clothes===0?(Vt(l,.06,.75,.025,0,0,.27,"#292635"),Vt(l,.16,.13,.03,.2,.05,.27,"#eed5a0")):n.clothes===2&&(Vt(l,.6,.12,.025,0,-.15,.27,"#c7c8c0"),Vt(l,.08,.7,.03,-.2,0,.27,"#a9a9a0")),n.gender===1&&Vt(l,.35,.23,.025,0,.08,.27,"#cfcccc"),n.gender===2&&(Vt(l,.04,.3,.04,-.23,.27,.27,"#f3dc7d"),Vt(l,.04,.3,.04,.23,.27,.27,"#f3dc7d"))),e==="head"){Vt(l,.12,.07,.035,-.15,.05,.27,"#26212e"),Vt(l,.12,.07,.035,.15,.05,.27,"#26212e"),Vt(l,.15,.035,.035,0,-.14,.28,"#6b353b");const c=oa[n.hairColor];if(n.hair!==4){if(Vt(l,n.hair===2?.18:.64,n.hair===2?.35:.19,.54,0,.36,0,c),n.hair===1)for(const h of[-.21,0,.21])Vt(l,.23,.22,.6,h,.4,0,c);n.hair===3&&(Vt(l,.14,.65,.53,-.31,0,0,c),Vt(l,.14,.65,.53,.31,0,0,c))}}}return t}function gl(n){const t=new Ue;if(n==="laser")Vt(t,.85,.25,.23,.05,0,0,"#334052"),Vt(t,.3,.12,.3,.55,0,0,"#66ffff"),Vt(t,.12,.35,.14,-.2,-.2,0,"#6c40a8");else if(n==="flamethrower")Vt(t,.8,.25,.25,.1,0,0,"#795536"),Vt(t,.3,.3,.3,.55,0,0,"#ff7735"),Vt(t,.35,.6,.3,-.25,-.1,0,"#ba332b");else if(n==="axe")Vt(t,.12,.95,.12,0,0,0,"#865d3d"),Vt(t,.55,.4,.16,.16,.35,0,"#b9bec3");else if(n==="shank"){Vt(t,.14,.35,.14,0,-.12,0,"#3d3545");const e=Vt(t,.12,.5,.05,0,.27,0,"#e0e4df");e.rotation.z=-.07}else n==="shotgun"?(Vt(t,1,.12,.14,.2,0,0,"#9296a0"),Vt(t,.48,.22,.21,-.4,-.05,0,"#906445"),Vt(t,.23,.23,.22,.07,-.06,0,"#69503c")):n==="smg"&&(Vt(t,.8,.25,.2,0,0,0,"#4b5160"),Vt(t,.12,.4,.12,-.1,-.25,0,"#343645"),Vt(t,.35,.1,.11,.5,.07,0,"#9b9fa8"));return t}function ap(n,t){const e=new Ue,i=n.w,s=n.h,o={metal:"#68737c",wood:"#7f665c",glass:"#3c929c",fuel:"#c7444f",concrete:"#5d5c6a",fabric:"#837e78"}[n.material],a=(l,c,h,f,u,d,g)=>Vt(e,l,c,h,f,u,d,g);switch(n.kind){case"crate":{a(i,s,1,0,0,0,n.color?"#bd6944":"#9f7c45");for(const u of[-i*.43,i*.43])a(.12,s,.08,u,0,.54,"#e0b979");for(const u of[-s*.43,s*.43])a(i,.1,.08,0,u,.55,"#e0b979");const h=new fe(new Dr(.16,.22,16),Do("#ffe17b"));h.position.set(0,.12,.57),e.add(h);const f=Rn(n.color?"AIM HIGH":"AIM LOW",1.1,.27,"#ffe17b");f.position.set(0,-.31,.58),e.add(f);break}case"floor":a(i,s,8,0,0,-1,"#454353"),a(i*.4,.025,.12,0,s/2+.035,-1.5,"#a69a70"),a(i,.04,.12,0,s/2+.02,2.9,"#9c8958");break;case"pump":a(i,s,1.35,0,0,-.6,"#bd364f"),a(i*.9,s*.4,1.5,0,.45,-.55,"#d3cebc"),a(i*.65,.6,.07,0,.65,.23,"#152d31");const l=Rn("9.99",i*.6,.45,"#a4e8ab","#13272b");l.position.set(0,.7,.29),e.add(l),a(.1,s*.7,.1,i*.57,-.3,-.1,"#1a1728");break;case"car":case"truck":a(i,s*.55,2,0,-s*.1,0,n.kind==="car"?"#b6a46c":"#527a78"),a(i*.48,s*.5,1.7,-i*.1,s*.34,0,n.kind==="car"?"#537c81":"#9b8174"),a(i*.4,s*.3,.06,-i*.1,s*.33,.89,"#243b4c"),a(i,.18,2.1,0,-s*.36,0,"#393442");for(const h of[-i*.34,i*.34]){const f=new fe(new nh(.52,.52,2.1,10),Do("#26232d"));f.rotation.x=Math.PI/2,f.position.set(h,-s*.35,0),e.add(f)}a(.25,.25,.04,i*.43,0,1.03,"#e7d68f");break;case"post":case"pole":a(i,s,.6,0,0,-2,o),a(i*1.5,.2,.9,0,-s/2,-2,"#8f8b8f");break;case"roof":case"balcony":a(i,s,5,0,0,-1.2,t==="motel"?"#857587":"#b54b72"),a(i,.14,.15,0,0,1.35,"#f1b638");break;case"glass":const c=new fe(new Gn(i,s,.09),new rp({color:"#488894",transparent:!0,opacity:.6,roughness:.3}));c.position.z=-1.2,c.userData.ownedMaterial=!0,e.add(c),a(i,.07,.13,0,-s/2,-1.15,"#c8b7a0");break;case"sign":{const h=t==="gas"?`LAST STOP
GAS`:t==="rest"?`REST AREA
1 MILE`:`NO-TELL
VACANCY`;a(i,s,.35,0,0,-1.8,"#382e48");const f=Rn(h,i*.94,s*.93,t==="motel"?"#ff8bad":"#f6d23a");f.position.z=-1.59,e.add(f);break}case"can":a(i,s,.6,0,0,0,"#d7ad3a"),a(i*.5,.15,.18,0,s/2,0,"#33303b");break;case"door":a(i,s,.2,0,0,-1.9,"#694761"),a(.09,.09,.1,i*.3,0,-1.73,"#ead176");break;case"table":case"bench":a(i,.24,1.6,0,s*.35,0,o);for(const h of[-i*.36,i*.36])a(.15,s,.8,h,0,0,"#514353");break;case"mattress":a(i,s,1.8,0,0,0,"#aea291");for(let h=-i*.4;h<i*.5;h+=.45)a(.04,s*1.01,1.81,h,0,0,"#857887");break;case"tire":{const h=new fe(new sh(i*.36,i*.16,6,12),Do("#292735"));e.add(h);break}case"railing":a(i,.09,.12,0,s/2,-.1,"#bcaabb");for(let h=-i/2;h<i/2;h+=.8)a(.06,s,.1,h,0,-.1,"#bcaabb");break;default:if(a(i,s,1.35,0,0,0,o),["fridge","vending","ice","tv"].includes(n.kind)){a(i*.8,s*.7,.07,0,s*.05,.71,"#243745");const h=Rn(n.kind==="vending"?`BAD
IDEA`:n.kind==="ice"?"ICE":n.kind==="tv"?"NO SIGNAL":"COLD",i*.7,s*.45,n.kind==="tv"?"#b99bbb":"#b9cfa2","#1e3040");h.position.set(0,.1,.76),e.add(h)}if(n.kind==="ac")for(let h=-i*.4;h<i*.4;h+=.22)a(.06,s*.65,.05,h,0,.73,"#383b4b")}return e}function jS(n){const t=new Ue,e=document.createElement("canvas");e.width=2048,e.height=512;const i=e.getContext("2d");i.fillStyle=n==="motel"?"#261f37":n==="rest"?"#263339":"#2b263a",i.fillRect(0,0,2048,512);for(let a=0;a<90;a++){const l=a*25,c=130+a*73%150;i.fillStyle=["#343246","#3f364b","#2e3446"][a%3],i.fillRect(l,c,30+a%6*9,512-c),i.fillStyle=a%2?"#927652":"#486577";for(let h=0;h<5;h++)i.fillRect(l+8,c+20+h*36,7,10)}const s=new Zc(e);s.colorSpace=Qe,s.magFilter=Xe;const r=new fe(new cs(190,35),new mn({map:s}));r.position.set(0,12,-18),r.userData.ownedTexture=!0,t.add(r);const o=new Ue;if(n==="gas"){Vt(o,31,8,1,24,3,-5,"#675d73"),Vt(o,31,.5,1.4,24,7,-4.8,"#b95b74");for(let l=13;l<38;l+=6)Vt(o,4.8,3.5,.06,l,2.4,-4.43,"#273c4c");const a=Rn("CHEAP THRILLS / OPEN 24H",27,1.4,"#f0c32f","#33283e");a.position.set(24,6,-4.4),o.add(a)}else if(n==="motel"){Vt(o,118,10,1,0,4.5,-4.5,"#66576c"),Vt(o,119,.6,1.4,0,9.5,-4.2,"#9d617e");for(let a=-50;a<55;a+=11)for(const l of[2,7]){Vt(o,4.2,3.4,.05,a,l,-3.94,"#302b3d");const c=Rn(String(101+Math.floor((a+50)/11)+(l>3?10:0)),1.2,.5,"#cca881","#372d40");c.position.set(a,l+1.1,-3.88),o.add(c)}}else{Vt(o,25,6,1,27,2.7,-5,"#656c73");const a=Rn("RESTROOMS / NO GUARANTEES",24,1.2,"#94c6bd","#263c45");a.position.set(27,5,-4.4),o.add(a)}return t.add(o),t}function Je(n){n.traverse(t=>{var e;if(t instanceof fe&&(t.geometry.dispose(),t.userData.ownedMaterial&&t.material.dispose(),t.userData.ownedTexture)){const i=t.material;(e=i.map)==null||e.dispose(),i.dispose()}})}function KS(){zn==null||zn.dispose(),zn=void 0,yr.forEach(n=>n.dispose()),yr.clear(),Mr.forEach(n=>{var t;(t=n.map)==null||t.dispose(),n.dispose()}),Mr.clear()}function lp(n,t){return n==="head"||n.startsWith("hand")||n.startsWith("forearm")?Br[t.skin]:n.startsWith("foot")?"#292735":Fs[t.color]}function rf(n){if(n.kind==="limb"){const t=new Ue,e=n.part??"forearmL",i=is[e];return t.add(Ws(i.w,i.h,.35,n.look?lp(e,n.look):"#b87953")),t}return ap({kind:n.kind,w:n.kind==="tire"?1.1:n.kind==="can"?.7:1.1,h:n.kind==="tire"||n.kind==="can"?1.2:1.3,hp:n.hp,maxHp:n.hp,material:n.kind==="can"?"fuel":n.kind==="tv"?"glass":"fabric",color:0},"gas")}function of(n){const t=new Ue;if(n==="cart"){Vt(t,1,.12,.65,0,-.12,0,"#75d8bf"),Vt(t,.1,.7,.65,.45,.2,0,"#75d8bf"),Vt(t,.8,.3,.08,0,.1,.3,"#b7ecda"),Vt(t,.8,.3,.08,0,.1,-.3,"#b7ecda");for(const e of[-.35,.35])for(const i of[-.25,.25]){const s=Ws(.18,.18,.12,"#26232d");s.position.set(e,-.34,i),t.add(s)}}else for(const e of[-.25,.25])if(Vt(t,.35,.3,.35,e,0,0,n==="recoil"?"#af83f2":"#75d8bf"),Vt(t,.5,.13,.4,e+.08,-.2,0,"#d2f6da"),n==="skates")for(const i of[-.13,.13])Vt(t,.13,.13,.42,e+i,-.33,0,"#ffe17b");else Vt(t,.2,.12,.25,e,-.34,0,"#ffb255");return t}class $S{constructor(t,e,i){dt(this,"renderer");dt(this,"scene",new aS);dt(this,"camera",new Kc);dt(this,"actors",new Map);dt(this,"props",new Map);dt(this,"blood",new Map);dt(this,"debris",new Map);dt(this,"shots",new Map);dt(this,"pickups",new Map);dt(this,"environment",new Ue);dt(this,"venue","");dt(this,"flames",new Map);dt(this,"flameStyle",new WS);dt(this,"thrownModels",new Map);dt(this,"boostModels",new Map);dt(this,"majorModel");dt(this,"bloodParticles",new XS);dt(this,"bloodGeometry",new qe);dt(this,"bloodPositions",new Float32Array(600*3));dt(this,"bloodPoints",new hl(this.bloodGeometry,new mc({size:6,sizeAttenuation:!1,color:"#f52e48",transparent:!0,opacity:1,depthWrite:!1,toneMapped:!1,fog:!1})));dt(this,"bloodRound",-1);dt(this,"beams",[]);dt(this,"frame",0);dt(this,"last",0);dt(this,"center",0);dt(this,"width",1);dt(this,"height",1);dt(this,"observer");dt(this,"focused",0);dt(this,"particleGeometry",new qe);dt(this,"positions",new Float32Array(500*3));dt(this,"colors",new Float32Array(500*3));dt(this,"particles",[]);dt(this,"points");dt(this,"sun");dt(this,"left",new fe(new cs(1,30),new mn({color:"#c83f62",transparent:!0,opacity:.22,side:tn,depthWrite:!1})));dt(this,"right",this.left.clone());dt(this,"reducedEffects",!1);dt(this,"resize",()=>{this.width=Math.max(1,this.host.clientWidth),this.height=Math.max(1,this.host.clientHeight),this.renderer.setSize(this.width,this.height);const t=this.width/this.height,e=t<.8?12:9;this.camera.left=-e*t,this.camera.right=e*t,this.camera.top=e,this.camera.bottom=-e,this.camera.near=.1,this.camera.far=150,this.camera.updateProjectionMatrix()});dt(this,"animate",t=>{const e=Math.min(.08,(t-this.last)/1e3||0);this.last=t,this.render(this.state(),e,t/1e3),this.frame=requestAnimationFrame(this.animate)});this.host=t,this.state=e,this.localId=i,this.renderer=new oS({antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.4)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Bc,this.renderer.outputColorSpace=Qe,this.renderer.toneMapping=Sd,this.renderer.toneMappingExposure=1.28,t.appendChild(this.renderer.domElement),this.scene.background=new Kt("#211b32"),this.scene.fog=new Jc("#211b32",40,105),this.scene.add(new kS("#b7a8d8","#43424a",2.5)),this.sun=new VS("#edd6a5",3),this.sun.position.set(-10,16,14),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),Object.assign(this.sun.shadow.camera,{left:-24,right:24,top:20,bottom:-15,far:70}),this.sun.shadow.normalBias=.05,this.scene.add(this.sun,this.sun.target);const s=new ef("#ed2867",160,33);s.position.set(-27,8,6);const r=new ef("#26c6c1",120,33);r.position.set(25,7,5),this.scene.add(s,r),this.scene.add(this.environment,this.left,this.right),this.left.position.z=3.5,this.right.position.z=3.5,this.particleGeometry.setAttribute("position",new hn(this.positions,3).setUsage(Da)),this.particleGeometry.setAttribute("color",new hn(this.colors,3).setUsage(Da)),this.particleGeometry.setDrawRange(0,0),this.points=new hl(this.particleGeometry,new mc({size:3,sizeAttenuation:!1,toneMapped:!1,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1})),this.points.frustumCulled=!1,this.scene.add(this.points),this.bloodGeometry.setAttribute("position",new hn(this.bloodPositions,3).setUsage(Da)),this.bloodGeometry.setDrawRange(0,0),this.bloodPoints.frustumCulled=!1,this.bloodPoints.renderOrder=3,this.scene.add(this.bloodPoints),this.observer=new ResizeObserver(this.resize),this.observer.observe(t),this.resize(),this.frame=requestAnimationFrame(this.animate)}get canvas(){return this.renderer.domElement}soundPosition(t,e){const i=new U(t,e,.7).project(this.camera);return rg(i.x,i.y)}setSpectator(t){this.focused=t}aim(t,e){const i=this.host.getBoundingClientRect(),s=new Tt((t-i.left)/i.width*2-1,-(e-i.top)/i.height*2+1),r=new GS;r.setFromCamera(s,this.camera);const o=new U;if(r.ray.intersectPlane(new bi(new U(0,0,1),0),o)){const a=this.state().actors[this.localId()],l=o.x-a.x,c=o.y-a.y-oi(a),h=Math.max(.01,Math.hypot(l,c));return{x:Math.round(l/h*1024)/1024,y:Math.round(c/h*1024)/1024}}return{x:1,y:0}}present(t){this.bloodRound!==this.state().round&&(this.bloodParticles.clear(),this.bloodRound=this.state().round);for(const e of t){if(this.bloodParticles.event(e,this.reducedEffects),e.kind==="hit"||e.kind==="detach")continue;if(e.weapon==="laser"&&e.endX!==void 0&&e.endY!==void 0){const r=e.endX-e.x,o=e.endY-e.y,a=new fe(new Gn(Math.max(.01,Math.hypot(r,o)),.085,.085),new mn({color:"#8cffff",transparent:!0,opacity:1,depthWrite:!1}));a.position.set((e.x+e.endX)/2,(e.y+e.endY)/2,.8),a.rotation.z=Math.atan2(o,r),this.scene.add(a),this.beams.push({mesh:a,life:.16})}if(["ignite","jump","land","swap","reload"].includes(e.kind))continue;const i=new Kt(e.kind==="scream"||e.kind==="cry"?"#80cde1":e.kind==="explosion"?"#f9a349":e.kind==="break"?"#d2c3a4":"#f9de5e"),s=this.reducedEffects?2:e.kind==="explosion"?35:e.kind==="shot"?4:10;for(let r=0;r<s&&this.particles.length<500;r++)this.particles.push({x:e.x,y:e.y,z:1,vx:(Math.random()-.5)*(e.kind==="explosion"?12:6),vy:Math.random()*7,life:e.kind==="shot"?.08:.3+Math.random()*.4,color:i})}}chaosEffects(t,e){for(const[s,r]of this.thrownModels)t.thrown.some(o=>o.id===s)||(this.scene.remove(r),Je(r),this.thrownModels.delete(s));for(const s of t.thrown){let r=this.thrownModels.get(s.id);if(!r){r=rf(s);const o=new fe(new Dr(.65,.71,20),new mn({color:"#ff345f",side:tn,toneMapped:!1}));o.position.z=1.2,o.userData.ownedMaterial=!0,r.add(o),this.thrownModels.set(s.id,r),this.scene.add(r)}r.position.set(s.x,s.y,.8),r.rotation.z=s.angle}for(const[s,r]of this.boostModels)t.boosts.some(o=>o.id===s)||(this.scene.remove(r),Je(r),this.boostModels.delete(s));for(const s of t.boosts){let r=this.boostModels.get(s.id);if(!r){r=of(s.kind);const o=Rn(xd[s.kind],2.5,.4,"#a9f5d7");o.position.set(0,.85,.3),r.add(o),this.boostModels.set(s.id,r),this.scene.add(r)}r.position.set(s.x,s.y+Math.sin(e*3)*.1,1),r.rotation.y=Math.sin(e)*.15}const i=t.major;if(this.majorModel&&(!i||i.kind!==this.majorModel.kind)&&(this.scene.remove(this.majorModel.group),Je(this.majorModel.group),this.majorModel=void 0),i){const s=i.kind==="foam",r=i.kind==="truck"?128:s?16:4;if(!this.majorModel){const l=new Ue,c=s?"#78e9cf":"#ff345f",h=Rn(s?"FOAM / NO DAMAGE":i.kind==="truck"?"DANGER / TRUCK →":"DANGER / FALLING AC",4,.6,c);h.name="warning",l.add(h);const f=i.kind==="truck"?48:12;for(let u=0;u<f;u++){const d=new fe(new Gn(r/f*.6,.035,2.8),new mn({color:c,transparent:!0,opacity:.6,toneMapped:!1,depthWrite:!1}));d.userData.ownedMaterial=!0,d.position.set((u/(f-1)-.5)*r,.28,.8),d.rotation.y=.3,l.add(d)}this.scene.add(l),this.majorModel={kind:i.kind,group:l}}const o=this.majorModel.group;o.position.x=i.kind==="truck"?0:i.x;const a=o.getObjectByName("warning");if(a.position.set(i.kind==="truck"?Math.max(this.center-8,Math.min(this.center+8,i.x)):0,3.7,2),a.scale.setScalar(.98+Math.sin(e*6)*.025),s&&i.started&&this.particles.length<470)for(let l=0;l<2;l++)this.particles.push({x:i.x+(Math.random()-.5)*16,y:6,z:1,vx:.4,vy:-3,life:1.5,color:new Kt("#acf5e3")})}}burningEffects(t,e,i){const s=[...t.fires.map(r=>({key:`f${r.id}`,x:r.x,y:r.y-.3,w:r.radius*1.6,h:1.8})),...t.actors.filter(r=>r.hp>0&&r.onFire).map(r=>({key:`a${r.id}`,x:r.x,y:r.y+.15,w:1,h:Nn(r)})),...t.props.filter(r=>r.hp>0&&r.onFire).map(r=>({key:`p${r.id}`,x:r.x,y:r.y-r.h/2,w:Math.min(5,r.w),h:Math.min(3,r.h)})),...t.debris.filter(r=>r.hp>0&&r.onFire).map(r=>({key:`d${r.id}`,x:r.x,y:r.y-r.h/2,w:r.w,h:.5})),...t.boosts.filter(r=>r.onFire).map(r=>({key:`b${r.id}`,x:r.x,y:r.y,w:.8,h:.6})),...t.pickups.filter(r=>r.onFire).map(r=>({key:`i${r.id}`,x:r.x,y:r.y,w:.6,h:.6}))].filter(r=>Math.abs(r.x-this.center)<30).slice(0,96);for(const[r,o]of this.flames)s.some(a=>a.key===r)||(this.scene.remove(o),this.flames.delete(r));for(const r of s){let o=this.flames.get(r.key);if(!o){o=new Ue;for(let a=0;a<5;a++){const l=this.flameStyle.create();o.add(l)}this.flames.set(r.key,o),this.scene.add(o)}o.position.set(r.x,r.y,.75),o.quaternion.copy(this.camera.quaternion),o.children.forEach((a,l)=>{const c=.86+Math.sin(e*10+l*2+r.x)*.13+Math.sin(e*17+l)*.06,h=Math.max(.45,r.h)*c;a.position.set((l/4-.5)*r.w+Math.sin(e*7+l)*.045,0,l*.035),a.scale.set((r.w/4+.3)*(1.05-Math.sin(e*10+l)*.08),h*.7,1),a.rotation.z=Math.sin(e*8+l)*.055}),!this.reducedEffects&&this.particles.length<480&&Math.random()<i*8&&this.particles.push({x:r.x,y:r.y+r.h,z:.5,vx:.3,vy:1.6,life:.8,color:new Kt("#57505c")})}}render(t,e,i){var h,f;if(t.venue!==this.venue){this.scene.remove(this.environment),Je(this.environment),this.environment=jS(t.venue),this.scene.add(this.environment),this.venue=t.venue;for(const u of this.props.values())this.scene.remove(u),Je(u);this.props.clear()}const s=t.phase==="lobby"||t.phase==="countdown",r=t.actors[this.localId()],o=r.hp>0?r:((h=t.actors[this.focused])==null?void 0:h.hp)>0&&!t.actors[this.focused].pendingSpawn?t.actors[this.focused]:t.actors.find(u=>u.hp>0&&!u.pendingSpawn)??r,a=s?-25:o.x;this.center+=(a-this.center)*(1-Math.exp(-e*7)||1);const l=s?4:Math.max(4,o.y+2);this.camera.position.set(this.center+3.5,l+4,30),this.camera.lookAt(this.center,l,0),this.camera.updateMatrixWorld(),this.sun.position.set(this.center-12,16,14),this.sun.target.position.set(this.center,0,0),this.left.visible=this.right.visible=t.phase==="match",this.left.position.x=t.zoneLeft-50,this.left.scale.x=100,this.left.position.y=8,this.right.position.x=t.zoneRight+50,this.right.scale.x=100,this.right.position.y=8;for(const u of t.actors){let d=this.actors.get(u.id);if(d&&d.userData.look!==JSON.stringify(u.look)&&(this.scene.remove(d),Je(d),this.actors.delete(u.id),d=void 0),d||(d=qS(u.look),this.scene.add(d),this.actors.set(u.id,d)),!u.human&&u.personality&&!d.getObjectByName("personality")){const b=Rn(q0[u.personality],2.3,.32,"#eacb79");b.name="personality",d.add(b)}const g=d.getObjectByName("personality");g&&g.position.set(0,Nn(u)+.5,.5),d.visible=s?u.id===this.localId():u.hp>0&&!u.pendingSpawn,d.scale.setScalar(s?2:1),d.position.set(s?-20:u.x,s?1.1:u.y,s?6:0);const _=Is(u);!s&&_===1&&u.grounded&&(d.position.y+=Math.abs(Math.sin(i*10))*.22*Math.min(1,Math.abs(u.vx)/2));const m=Math.sin(i*14)*Math.min(1,Math.abs(u.vx)/5);for(const b of ln){const W=d.getObjectByName(b);W.visible=s||u.parts[b]>0;const X=pn(u,b);if(W.position.set(X.x,X.y,0),W.scale.y=X.length/is[b].h,W.rotation.z=X.rotation+(_>0&&(b.startsWith("thigh")||b.startsWith("shin"))?(b.endsWith("L")?1:-1)*m*.22:b==="torso"&&!u.parts.head?Math.sin(i*8)*.12:0),!s&&_===0&&u.grounded){const Q=Math.sin(i*11)*Math.min(1,Math.abs(u.vx)/1.5);b==="torso"&&(W.rotation.z+=Q*.035)}}const p=!u.parts.armL&&!u.parts.armR?"body":u.weapons[u.slot]??"shank";let T=d.getObjectByName("weapon");(T==null?void 0:T.userData.weapon)!==p&&(T&&(d.remove(T),Je(T)),T=gl(p),T.name="weapon",T.userData.weapon=p,d.add(T));const M=As(u),E=p==="shank"||p==="axe",k=p==="axe"?.35:p==="shank"?.09:0;T.position.set(M.x+M.dx*k,M.y+M.dy*k,.4),T.rotation.z=M.angle-(E?Math.PI/2:0),T.scale.setScalar(p==="shank"?.75:1),T.visible=!u.carrying;let R=d.getObjectByName("carried");const C=u.carrying?JSON.stringify(u.carrying):"";R&&R.userData.signature!==C&&(d.remove(R),Je(R),R=void 0),u.carrying&&!R&&(R=rf(u.carrying),R.name="carried",R.userData.signature=C,d.add(R)),R&&(R.position.set(M.x,M.y,.7),R.rotation.z=M.angle*.3,R.scale.setScalar(.65));let F=d.getObjectByName("charge-cart");((f=u.boost)==null?void 0:f.kind)==="cart"&&u.boost.until>t.frame?(F||(F=of("cart"),F.name="charge-cart",d.add(F)),F.position.set(u.face*.45,.4,.4)):F&&(d.remove(F),Je(F));let st=d.getObjectByName("stun-stars");if((u.stunUntil??0)>t.frame){if(!st){st=new Ue,st.name="stun-stars";for(let b=0;b<3;b++){const W=Ws(.12,.12,.12,"#ffe17b");W.position.set(Math.cos(b*Math.PI*2/3)*.55,0,Math.sin(b*Math.PI*2/3)*.55),st.add(W)}d.add(st)}st.position.y=Nn(u)+.25,st.rotation.y=i*5}else st&&(d.remove(st),Je(st));const x=d.getObjectByName("torso");x.rotation.z+=u.attacking>0?u.face*.08:0}for(const[u,d]of this.props)t.props.some(g=>g.id===u&&g.hp>0)||(this.scene.remove(d),Je(d),this.props.delete(u));for(const u of t.props){if(u.hp<=0)continue;let d=this.props.get(u.id);d||(d=ap(u,t.venue),this.props.set(u.id,d),this.scene.add(d)),d.position.set(u.x,u.y,0),d.rotation.z=u.falling?Math.sin(i*3)*.08:0,u.burn&&u.fuel>0&&this.particles.length<480&&Math.random()<e*(this.reducedEffects?3:22)&&this.particles.push({x:u.x+(Math.random()-.5)*u.w,y:u.y+u.h*.3,z:1,vx:Math.random()-.5,vy:3+Math.random()*2,life:.6,color:new Kt(Math.random()>.5?"#ef6b32":"#efbf3b")})}const c=t.blood.filter(u=>t.props.some(d=>d.id===u.surface&&d.hp>0&&!d.falling));for(const[u,d]of this.blood)c.some(g=>g.id===u)||(this.scene.remove(d),Je(d),this.blood.delete(u));for(const u of c){let d=this.blood.get(u.id);if(!d){d=new Ue;for(let g=0;g<10;g++){const _=new fe(new eh(g===0?1:.08+g%3*.035,12),new mn({color:g%2?"#8b1738":"#63152c",side:tn,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));_.userData.ownedMaterial=!0,_.rotation.x=-Math.PI/2,_.scale.set(g===0?1.25:1,g===0?.55:1,1),g>0&&_.position.set(Math.cos(g*2.4+u.id)*(.5+g*.11),.001*g,Math.sin(g*2.4+u.id)*(.3+g*.06)),d.add(_)}this.blood.set(u.id,d),this.scene.add(d)}d.position.set(u.x,u.y,.4),d.visible=!s}for(const[u,d]of this.debris)t.debris.some(g=>g.id===u)||(this.scene.remove(d),d.geometry.dispose(),this.debris.delete(u));for(const u of t.debris){let d=this.debris.get(u.id);d||(d=Ws(u.w,u.h,.35,u.part&&u.look?lp(u.part,u.look):Fs[u.color%Fs.length]),this.debris.set(u.id,d),this.scene.add(d)),d.position.set(u.x,u.y,1),d.rotation.z=u.angle??0}for(const[u,d]of this.shots)t.shots.some(g=>g.id===u)||(this.scene.remove(d),Je(d),this.shots.delete(u));for(const u of t.shots){let d=this.shots.get(u.id);d||(u.weapon==="axe"?d=gl("axe"):u.weapon==="flamethrower"?d=this.flameStyle.create(!0):(d=new fe(new Gn(u.weapon==="shotgun"?.16:.45,.06,.06),new mn({color:u.owner===this.localId()?"#ffdd3f":"#ff675d"})),d.userData.ownedMaterial=!0),this.shots.set(u.id,d),this.scene.add(d)),d.position.set(u.x,u.y,.65),d.rotation.z=u.weapon==="axe"?(22-u.life)*.55:Math.atan2(u.vy,u.vx)-(u.weapon==="flamethrower"?Math.PI/2:0),u.weapon==="flamethrower"&&(d.quaternion.copy(this.camera.quaternion),d.rotateZ(Math.atan2(u.vy,u.vx)-Math.PI/2),d.scale.setScalar(.22+(15-u.life)*.018))}for(const[u,d]of this.pickups)t.pickups.some(g=>g.id===u)||(this.scene.remove(d),Je(d),this.pickups.delete(u));for(const u of t.pickups){let d=this.pickups.get(u.id);if(!d){if(d=gl(u.weapon),u.weapon==="laser"||u.weapon==="flamethrower"){const _=Rn(u.weapon==="laser"?"2 SHOTS":"FIRE SALE",1.7,.45,"#8cffff");_.position.set(0,.85,.1),d.add(_)}const g=new fe(new Dr(.6,.67,20),new mn({color:"#f0d432",side:tn}));g.userData.ownedMaterial=!0,d.add(g),this.scene.add(d),this.pickups.set(u.id,d)}d.position.set(u.x,u.y+Math.sin(i*3)*.15,1),d.rotation.z=Math.sin(i)*.1}for(let u=this.particles.length-1;u>=0;u--){const d=this.particles[u];if(d.life-=e,d.life<=0){this.particles.splice(u,1);continue}d.x+=d.vx*e,d.y+=d.vy*e,d.vy-=e*9}this.particles.forEach((u,d)=>{this.positions.set([u.x,u.y,u.z],d*3),this.colors.set([u.color.r,u.color.g,u.color.b],d*3)}),this.particleGeometry.setDrawRange(0,this.particles.length),this.particleGeometry.attributes.position.needsUpdate=!0,this.particleGeometry.attributes.color.needsUpdate=!0;for(let u=this.beams.length-1;u>=0;u--){const d=this.beams[u];d.life-=e,d.life<=0?(this.scene.remove(d.mesh),d.mesh.geometry.dispose(),d.mesh.material.dispose(),this.beams.splice(u,1)):d.mesh.material.opacity=d.life/.16}(this.bloodRound!==t.round||s)&&(this.bloodParticles.clear(),this.bloodRound=t.round),this.bloodParticles.update(e,t,this.reducedEffects),this.bloodParticles.drops.forEach((u,d)=>this.bloodPositions.set([u.x,u.y,u.z],d*3)),this.bloodGeometry.setDrawRange(0,this.bloodParticles.drops.length),this.bloodGeometry.attributes.position.needsUpdate=!0,this.chaosEffects(t,i),this.burningEffects(t,i,e),this.renderer.render(this.scene,this.camera)}dispose(){for(const t of this.beams)t.mesh.material.dispose();cancelAnimationFrame(this.frame),this.observer.disconnect(),this.scene.traverse(t=>{(t instanceof fe||t instanceof hl)&&t.geometry.dispose()}),this.points.material instanceof ls&&this.points.material.dispose(),this.bloodPoints.material.dispose(),this.bloodGeometry.dispose(),this.flameStyle.dispose(),KS(),this.renderer.dispose(),this.renderer.domElement.remove()}}function JS(n){return n.kind==="ignite"&&n.actor>=0?"catchfire":n.kind==="shot"||n.kind==="melee"?n.weapon??"body":n.kind}function ZS(n){const t={};if(!n||typeof n!="object")return t;const e=n;if(e.version!==1||!e.cues||typeof e.cues!="object")return t;for(const[i,s]of Object.entries(e.cues))!/^[a-z]+$/.test(i)||!Array.isArray(s)||(t[i]=s.filter(r=>typeof r=="string"&&/^[a-z]+--[0-9]+\.wav$/.test(r)).slice(0,20));return t}class QS{constructor(){dt(this,"buffers",new Map);dt(this,"started",!1);dt(this,"abort",new AbortController)}async load(t){if(this.started)return;this.started=!0;const e="/game/royale/audio/royale/";try{const i=await fetch(e+"manifest.json",{signal:this.abort.signal});if(!i.ok)return;const s=ZS(await i.json());await Promise.all(Object.entries(s).map(async([r,o])=>{const a=[];for(const l of o)try{const c=await fetch(e+l,{signal:this.abort.signal});c.ok&&a.push(await t.decodeAudioData(await c.arrayBuffer()))}catch{}a.length&&this.buffers.set(r,a)}))}catch{}}get(t){const e=this.buffers.get(t);return e==null?void 0:e[Math.floor(Math.random()*e.length)]}dispose(){this.abort.abort(),this.buffers.clear()}}function tb(n,t=Math.random()){return n&&t<.25}class eb{constructor(t=()=>({gain:1,pan:0})){dt(this,"channels",new Set);dt(this,"routing");dt(this,"enabled",!1);dt(this,"bank",new QS);dt(this,"context");dt(this,"master");dt(this,"active",new Set);dt(this,"last",new Map);this.locate=t}enable(t){if(this.enabled=t,t)try{if(this.context??(this.context=new AudioContext),!this.master){this.master=this.context.createGain();const e=this.context.createDynamicsCompressor();this.master.connect(e),e.connect(this.context.destination)}this.master.gain.value=.55,this.context.resume(),this.bank.load(this.context)}catch{this.enabled=!1}else{this.master&&(this.master.gain.value=0);for(const e of this.active)try{e.stop()}catch{}}}updateView(){if(this.context)for(const t of this.channels){const e=this.locate(t.event);t.gain.gain.setTargetAtTime(e.gain,this.context.currentTime,.06),t.pan.pan.setTargetAtTime(e.pan,this.context.currentTime,.06)}}release(t){t.gain.disconnect(),t.pan.disconnect(),this.channels.delete(t)}start(t,e,i,s,r){t.connect(r??e),r&&r.connect(e);const o=this.routing;e.connect((o==null?void 0:o.gain)??this.master),o&&o.sources++,this.active.add(t),t.onended=()=>{this.active.delete(t),t.disconnect(),r==null||r.disconnect(),e.disconnect(),o&&--o.sources===0&&this.release(o)},t.start(i),t.stop(i+s)}envelope(t,e,i){const s=this.context.createGain();return s.gain.setValueAtTime(1e-4,t),s.gain.linearRampToValueAtTime(i,t+.003),s.gain.exponentialRampToValueAtTime(1e-4,t+e),s}tone(t,e,i,s,r,o="sine"){const a=this.context.createOscillator();a.type=o,a.frequency.setValueAtTime(e,t),a.frequency.exponentialRampToValueAtTime(i,t+s),this.start(a,this.envelope(t,s,r),t,s)}noise(t,e,i,s,r="lowpass"){const o=this.context,a=o.createBuffer(1,Math.ceil(o.sampleRate*e),o.sampleRate),l=a.getChannelData(0);for(let f=0;f<l.length;f++)l[f]=Math.random()*2-1;const c=o.createBufferSource(),h=o.createBiquadFilter();c.buffer=a,h.type=r,h.frequency.value=s,h.Q.value=.7,this.start(c,this.envelope(t,e,i),t,e,h)}cry(t,e){const i=this.context,s=e?.7:.9,r=e?1:3;for(let o=0;o<r;o++){const a=t+o*.25,l=e?s:.24,c=i.createOscillator(),h=i.createBiquadFilter(),f=i.createOscillator(),u=i.createGain();c.type="sawtooth",c.frequency.setValueAtTime(e?430:240,a),c.frequency.exponentialRampToValueAtTime(e?270:155,a+l),f.frequency.value=e?9:6,u.gain.value=e?22:15,f.connect(u),u.connect(c.frequency),h.type="bandpass",h.frequency.value=e?1250:750,h.Q.value=.9,this.start(c,this.envelope(a,l,e?.12:.09),a,l,h),this.active.add(f),f.onended=()=>{this.active.delete(f),f.disconnect(),u.disconnect()},f.start(a),f.stop(a+l)}this.noise(t,s,.025,1600,"bandpass")}play(t){if(!this.enabled||!this.context)return;const e=JS(t),i=this.context.currentTime;if(this.active.size>=(e==="catchfire"?48:36))return;const s=this.locate(t);if(s.gain<.01)return;const r=`${e}:${t.actor>=0?t.actor:Math.round(t.x/6)}`;if(i-(this.last.get(r)??-1)<(e==="smg"?.045:.07))return;this.last.set(r,i);const o={event:{...t},gain:this.context.createGain(),pan:this.context.createStereoPanner(),sources:0};o.gain.gain.value=s.gain,o.pan.pan.value=s.pan,o.gain.connect(o.pan),o.pan.connect(this.master),this.channels.add(o),this.routing=o;try{const a=this.bank.get(e);if(tb(!!a)){const l=this.context.createBufferSource();l.buffer=a,l.playbackRate.value=.97+Math.random()*.06;const c=a.duration/l.playbackRate.value,h=this.envelope(i,c,.8);h.gain.cancelScheduledValues(i),h.gain.setValueAtTime(0,i),h.gain.linearRampToValueAtTime(.8,i+.005),h.gain.setValueAtTime(.8,i+Math.max(.005,c-.01)),h.gain.linearRampToValueAtTime(0,i+c),this.start(l,h,i,c);return}switch(e){case"throw":this.noise(i,.16,.09,800,"bandpass");break;case"warning":this.tone(i,720,720,.12,.07,"triangle"),this.tone(i+.18,960,960,.14,.07,"triangle");break;case"scream":this.cry(i,!0);break;case"cry":this.cry(i,!1);break;case"catchfire":this.noise(i,.55,.22,1100),this.noise(i+.05,.3,.07,3500,"highpass"),this.cry(i+.04,!0);break;case"ignite":this.noise(i,.5,.12,850),this.noise(i+.05,.3,.045,3500,"highpass");break;case"laser":this.tone(i,1800,140,.22,.1,"sawtooth"),this.tone(i,3200,700,.12,.045,"sine");break;case"flamethrower":this.noise(i,.18,.15,900),this.noise(i,.12,.045,3200,"highpass");break;case"smg":this.noise(i,.065,.19,3200,"highpass"),this.tone(i,145,48,.085,.11);break;case"shotgun":this.noise(i,.24,.35,2200),this.tone(i,125,32,.28,.24),this.noise(i+.075,.1,.08,4200,"highpass");break;case"explosion":this.noise(i,.8,.4,700),this.tone(i,65,22,.65,.3),this.noise(i+.1,.4,.08,2400);break;case"shank":this.noise(i,.055,.075,2400,"highpass"),this.tone(i,1600,650,.045,.025,"triangle");break;case"axe":this.noise(i,.22,.13,650,"bandpass"),this.tone(i,220,90,.17,.025,"triangle");break;case"body":case"hit":this.noise(i,.075,.1,950),this.tone(i,110,40,.12,.13);break;case"detach":this.noise(i,.13,.14,700),this.tone(i,210,65,.11,.08);break;case"land":this.noise(i,.09,.09,600),this.tone(i,80,30,.12,.07);break;case"jump":this.noise(i,.08,.045,1500,"bandpass");break;case"reload":this.noise(i,.035,.11,4e3,"highpass"),this.noise(i+.12,.04,.08,2100,"highpass"),this.tone(i+.14,650,280,.04,.04,"triangle");break;case"swap":this.noise(i,.045,.07,2800,"highpass"),this.tone(i,900,450,.035,.025,"triangle");break;case"pickup":this.tone(i,660,660,.1,.055,"triangle"),this.tone(i+.07,990,990,.17,.05,"triangle");break;case"break":this.noise(i,.22,.16,3700,"highpass"),this.tone(i,740,160,.14,.035,"triangle"),this.noise(i+.05,.14,.07,1800);break;case"death":this.tone(i,280,65,.5,.06,"triangle"),this.noise(i,.16,.07,600);break;default:this.noise(i,.12,.05,1e3)}}finally{this.routing=void 0,o.sources===0&&this.release(o)}}dispose(){var t;this.enable(!1);for(const e of this.channels)this.release(e);this.bank.dispose(),(t=this.context)==null||t.close()}}class nb{constructor(t,e,i){dt(this,"practiceSim",new yd(1));dt(this,"session");dt(this,"scene");dt(this,"sound");dt(this,"journal",new ig);dt(this,"ledger",new sg);dt(this,"input");dt(this,"keys",new Set);dt(this,"mouseDown",!1);dt(this,"touchAttack",!1);dt(this,"frame",0);dt(this,"last",0);dt(this,"accumulator",0);dt(this,"reportTime",0);dt(this,"advice",null);dt(this,"mode","practice");dt(this,"paused",!1);dt(this,"touchMove",0);dt(this,"network",{status:"offline",invite:"",message:"Practice — one human, seven bots.",localId:0,ping:0});dt(this,"down",t=>{t.target instanceof HTMLElement&&t.target.matches("input,select,textarea")||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault(),this.keys.add(t.code),!t.repeat&&((t.code==="Space"||t.code==="KeyW"||t.code==="ArrowUp")&&this.command("jump"),t.code==="KeyG"&&this.command("grab"),t.code==="KeyE"&&this.command("pickup"),(t.code==="KeyQ"||t.code==="ShiftLeft"||t.code==="ShiftRight")&&this.command("cycle"),t.code==="KeyR"&&this.command("reload"),t.code==="Escape"&&this.mode==="practice"&&this.state.phase==="match"&&(this.paused=!this.paused)))});dt(this,"up",t=>{this.keys.delete(t.code)});dt(this,"blur",()=>{this.keys.clear(),this.mouseDown=!1,this.touchAttack=!1,this.touchMove=0,this.mode==="practice"&&this.state.phase==="match"&&(this.paused=!0)});dt(this,"pointerDown",t=>{t.pointerType!=="touch"&&(this.mouseDown=!0,this.pointerMove(t))});dt(this,"pointerUp",()=>{this.mouseDown=!1});dt(this,"pointerMove",t=>{if(t.pointerType==="touch")return;const e=this.scene.aim(t.clientX,t.clientY);this.input.aimX=e.x,this.input.aimY=e.y});dt(this,"animate",t=>{var e,i,s,r,o;try{const a=Math.min(.08,(t-this.last)/1e3||0);if(this.last=t,this.mode==="online")(e=this.session)==null||e.advance(a);else if(!this.paused)for(this.accumulator+=a;this.accumulator>=1/60;)this.practiceSim.step([this.poll()]),this.accumulator-=1/60;const l=(s=(i=this.session)==null?void 0:i.wrapper)==null?void 0:s.rollbackNetcode,c=this.mode==="online"?((r=l==null?void 0:l.history[0])==null?void 0:r.frame)??-1:this.state.frame,h=this.ledger.collect(this.state.events,c);this.sound.updateView(),this.scene.present(h);for(const u of h)this.sound.play(u),u.kind==="death"&&u.actor===this.localId&&u.cause&&(this.advice=this.journal.discover(u.cause));const f=this.state.actors[this.localId];if(f.death&&f.deathFrame<=c&&!this.advice&&(this.advice=this.journal.discover(f.death)),this.reportTime+=a,this.reportTime>.08){this.reportTime=0;const u=this.state,d=JSON.parse(JSON.stringify(u));d.phase==="results"&&this.mode==="online"&&c<d.frame-d.phaseFrame&&(d.phase="match"),this.changed({state:d,localId:this.localId,network:{...this.network},advice:this.advice,known:[...this.journal.seen],paused:this.paused})}}catch(a){(o=this.session)==null||o.dispose(!1),this.network={...this.network,status:"failed",message:`Simulation error: ${a instanceof Error?a.message:String(a)}`},this.changed({state:this.practiceSim.snapshot(),localId:0,network:{...this.network},advice:null,known:[...this.journal.seen],paused:!1})}this.frame=requestAnimationFrame(this.animate)});this.changed=i,this.input=qi(e),this.scene=new $S(t,()=>this.state,()=>this.localId),this.sound=new eb(s=>this.scene.soundPosition(s.x,s.y)),window.addEventListener("keydown",this.down),window.addEventListener("keyup",this.up),window.addEventListener("blur",this.blur),this.scene.canvas.addEventListener("pointerdown",this.pointerDown),window.addEventListener("pointerup",this.pointerUp),this.scene.canvas.addEventListener("pointermove",this.pointerMove),this.frame=requestAnimationFrame(this.animate)}get localId(){return this.mode==="online"?this.network.localId:0}get state(){var t;return this.mode==="online"&&((t=this.session)!=null&&t.simulation)?this.session.simulation.state:this.practiceSim.state}setLook(t){this.input.look=Oc(t)}setVenue(t){this.input.venue=Math.max(0,Math.min(2,t)),this.input.venueChange++}ready(){this.input.ready++}rematch(){this.input.rematch++,this.advice=null}spectator(t){this.scene.setSpectator(t)}command(t){this.input[t]++}touchFire(t,e,i){if(this.touchAttack=t,e!==void 0&&i!==void 0){const s=Math.max(.01,Math.hypot(e,i));this.input.aimX=e/s,this.input.aimY=-i/s}}setSound(t){this.sound.enable(t)}async online(t=""){if(!this.session){this.paused=!1,this.mode="online",this.input.ready=0,this.ledger.reset(),this.advice=null;try{const{Session:e}=await X0(async()=>{const{Session:i}=await import("./session-ALM8-0RM.js");return{Session:i}},[]);this.session=new e(()=>this.poll(),i=>{this.network=i}),await this.session.connect(t)}catch(e){this.network={...this.network,status:"failed",message:e instanceof Error?e.message:"Could not load multiplayer support."}}}}practice(){if(this.session){this.session.dispose(),location.assign(location.href.split("#")[0]);return}this.mode="practice",this.paused=!1}leave(){var t;(t=this.session)==null||t.dispose(),location.assign(location.href.split("#")[0])}poll(){return this.input.move=Math.max(-1,Math.min(1,Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))+this.touchMove)),this.input.attack=this.mouseDown||this.touchAttack||this.keys.has("KeyJ"),JSON.parse(JSON.stringify(this.input))}dispose(){var t;cancelAnimationFrame(this.frame),(t=this.session)==null||t.dispose(),this.scene.dispose(),this.sound.dispose(),window.removeEventListener("keydown",this.down),window.removeEventListener("keyup",this.up),window.removeEventListener("blur",this.blur),window.removeEventListener("pointerup",this.pointerUp),this.scene.canvas.removeEventListener("pointerdown",this.pointerDown),this.scene.canvas.removeEventListener("pointermove",this.pointerMove)}}function ib(){try{return Oc(JSON.parse(localStorage.getItem("royale.look")??"null"))}catch{return{...ra}}}function sb(n){try{localStorage.setItem("royale.look",JSON.stringify(n))}catch{}}const rb={class:"header-venue"},ob={class:"header-tools"},ab={key:0,class:"network-pill"},lb={key:0,class:"lobby"},cb={class:"customize"},hb=["value"],ub=["disabled"],fb=["value"],db={class:"swatch-row"},pb=["onClick","aria-label"],mb=["onClick","aria-label"],gb={class:"swatch-row clothes-colors"},_b=["onClick","aria-label"],vb={key:0,class:"mode-buttons"},xb={class:"join-box"},yb=["disabled"],Mb={key:1,class:"connection-card"},Sb=["value"],bb={class:"roster-status"},Eb={key:0},wb={key:1},Tb=["disabled"],Ab={class:"smallprint"},Rb={key:1,class:"specimen"},Cb={class:"match-top"},Pb={class:"match-clock"},Lb={key:0,class:"chaos-tools"},Ib={key:0},Db={key:1},Ub={key:2},Nb={class:"player-hud"},Ob={class:"health-heading"},Fb={class:"health-bar"},Bb={class:"body-status"},kb={key:0},zb={key:1},Hb={class:"weapon-readout"},Vb={key:0},Gb={key:1},Wb={key:2},Xb={class:"body-panel"},Yb={key:2,class:"death-overlay"},qb={class:"spectator-buttons"},jb=["onClick"],Kb={class:"touch-controls"},$b={class:"touch-actions"},Jb={class:"eyebrow"},Zb={key:0,class:"result-advice"},Qb={class:"result-stat"},tE={key:0},eE={key:4},nE={key:0},iE={key:5,class:"modal-backdrop"},sE={class:"pause-card"},rE={key:6,class:"modal-backdrop"},oE={class:"pause-card"},aE={key:7,class:"modal-backdrop"},lE={class:"journal"},cE={key:0},hE={key:1,class:"modal-backdrop"},uE={class:"pause-card"},fE=um({__name:"App",setup(n){const t=Ze(),e=Ze(ib()),i=Ze(0),s=Ze(!1),r=Ze(!1),o=Ze(!1),a=Ze("COPY INVITE"),l=Ze(""),c=Ze(new URLSearchParams(location.hash.slice(1)).get("room")??""),h=Ze({state:new yd().state,localId:0,network:{status:"offline",invite:"",message:"Practice — one human, seven bots.",localId:0,ping:0},advice:null,known:[],paused:!1});let f;const u=an(()=>h.value.state),d=an(()=>u.value.actors[h.value.localId]),g=an(()=>u.value.phase==="lobby"||u.value.phase==="countdown"),_=an(()=>h.value.network.status!=="offline"),m=an(()=>h.value.network.status==="connected"),p=an(()=>u.value.actors.filter(at=>at.hp>0&&!at.pendingSpawn)),T=an(()=>!d.value.parts.armL&&!d.value.parts.armR?"body":d.value.weapons[d.value.slot]),M=an(()=>ln.filter(at=>d.value.parts[at]>0).length),E=an(()=>Ls.find(at=>at.id===u.value.venue)),k=an(()=>["failed","closed"].includes(h.value.network.status)),R=an(()=>{const at=u.value.phase==="match"?Math.floor(u.value.phaseFrame/60):0;return`${String(Math.floor(at/60)).padStart(2,"0")}:${String(at%60).padStart(2,"0")}`}),C=an(()=>d.value.ready);ur(()=>h.value.state.venue,at=>{i.value=Ls.findIndex(L=>L.id===at)});function F(){c.value=new URLSearchParams(location.hash.slice(1)).get("room")??""}function st(){f==null||f.setVenue(i.value)}function x(){s.value=!s.value,f==null||f.setSound(s.value)}function b(){r.value=!r.value,f&&(f.scene.reducedEffects=r.value)}async function W(){await(f==null?void 0:f.online())}async function X(){const at=c.value.match(/room=([a-f\d-]{36})/i);await(f==null?void 0:f.online((at==null?void 0:at[1])??c.value.trim()))}async function Q(){try{await navigator.clipboard.writeText(h.value.network.invite),a.value="COPIED"}catch{a.value="SELECT LINK BELOW"}}ur(e,at=>{sb(at),f==null||f.setLook(at)},{deep:!0});const ct=Ze(null),V=Ze(null),it=Ze({x:0,y:0});function H(at,L){if(!f)return;const It=L==="move"?ct:V,$t=at.currentTarget;if(at.type==="pointerdown"){if(It.value!==null)return;It.value=at.pointerId,$t.setPointerCapture(at.pointerId)}if(It.value!==at.pointerId)return;const D=$t.getBoundingClientRect(),j=(at.clientX-D.left-D.width/2)/32,vt=(at.clientY-D.top-D.height/2)/32,xt=Math.max(1,Math.hypot(j,vt));L==="move"?(f.touchMove=j/xt,it.value={x:j/xt,y:vt/xt}):f.touchFire(!0,j/xt,vt/xt)}function gt(at,L){if(!f)return;const It=L==="move"?ct:V;It.value===at.pointerId&&(It.value=null,L==="move"?(f.touchMove=0,it.value={x:0,y:0}):f.touchFire(!1))}return Yf(()=>{window.addEventListener("hashchange",F);try{f=new nb(t.value,e.value,at=>h.value=at)}catch(at){l.value=at instanceof Error?at.message:"WebGL could not start."}}),qf(()=>{window.removeEventListener("hashchange",F),f==null||f.dispose()}),(at,L)=>{var It,$t;return Nt(),Ft("div",{class:Un(["royale",{"in-lobby":g.value}])},[G("div",{ref_key:"viewport",ref:t,class:"viewport"},null,512),L[73]||(L[73]=G("div",{class:"vignette"},null,-1)),L[74]||(L[74]=G("div",{class:"scanlines","aria-hidden":"true"},null,-1)),G("header",null,[L[28]||(L[28]=G("a",{class:"logo",href:"./"},[te("R"),G("span",null,"®")],-1)),G("span",rb,[te(Dt(E.value.name)+" ",1),L[26]||(L[26]=G("i",null,"/",-1)),L[27]||(L[27]=te(" EST. BAD IDEA",-1))]),G("div",ob,[m.value?(Nt(),Ft("span",ab,"P2P · "+Dt(h.value.network.ping)+" MS",1)):ge("",!0),G("button",{onClick:x},"SOUND "+Dt(s.value?"ON":"OFF"),1),G("button",{onClick:b},"FX "+Dt(r.value?"LOW":"FULL"),1),_.value?(Nt(),Ft("button",{key:1,onClick:L[0]||(L[0]=D=>{var j;return(j=_e(f))==null?void 0:j.leave()})},"LEAVE P2P")):ge("",!0),G("button",{onClick:L[1]||(L[1]=D=>o.value=!o.value)},"DEATH NOTES "+Dt(h.value.known.length),1)])]),l.value?(Nt(),Ft("div",hE,[G("section",uE,[L[71]||(L[71]=G("h2",null,[te("THE WORLD"),G("br"),te("DIDN’T LOAD.")],-1)),G("p",null,Dt(l.value),1),L[72]||(L[72]=G("p",null,"A WebGL-capable browser is required.",-1))])])):(Nt(),Ft(ve,{key:0},[g.value?(Nt(),Ft("section",lb,[L[42]||(L[42]=G("p",{class:"eyebrow"},[G("span"),te(" SOME ASSEMBLY REQUIRED.")],-1)),L[43]||(L[43]=G("h1",null,[te("ROYALE"),G("span",null,".")],-1)),L[44]||(L[44]=G("p",{class:"tagline"},[te("LAST ONE STANDING."),G("br"),te("OR WHATEVER’S LEFT.")],-1)),L[45]||(L[45]=G("div",{class:"lobby-rule"},[G("b",null,"01 / CHECK YOURSELF IN"),G("span",null,"8 ENTER. MOSTLY.")],-1)),G("div",cb,[G("label",null,[L[30]||(L[30]=te("GENDER",-1)),Ks(G("select",{"onUpdate:modelValue":L[2]||(L[2]=D=>e.value.gender=D)},[...L[29]||(L[29]=[G("option",{value:0},"WOMAN",-1),G("option",{value:1},"MAN",-1),G("option",{value:2},"NONBINARY",-1)])],512),[[Kr,e.value.gender,void 0,{number:!0}]])]),G("label",null,[L[31]||(L[31]=te("HAIR",-1)),Ks(G("select",{"onUpdate:modelValue":L[3]||(L[3]=D=>e.value.hair=D)},[(Nt(),Ft(ve,null,Zn(["CROPPED","CURLS","MOHAWK","LONG","SHAVED"],(D,j)=>G("option",{key:D,value:j},Dt(D),9,hb)),64))],512),[[Kr,e.value.hair,void 0,{number:!0}]])]),G("label",null,[L[33]||(L[33]=te("CLOTHING",-1)),Ks(G("select",{"onUpdate:modelValue":L[4]||(L[4]=D=>e.value.clothes=D)},[...L[32]||(L[32]=[G("option",{value:0},"JACKET",-1),G("option",{value:1},"TANK TOP",-1),G("option",{value:2},"COVERALLS",-1)])],512),[[Kr,e.value.clothes,void 0,{number:!0}]])]),G("label",null,[L[34]||(L[34]=te("VENUE",-1)),Ks(G("select",{"onUpdate:modelValue":L[5]||(L[5]=D=>i.value=D),disabled:m.value&&h.value.localId!==0,onChange:st},[(Nt(!0),Ft(ve,null,Zn(_e(Ls),(D,j)=>(Nt(),Ft("option",{key:D.id,value:j},Dt(D.name),9,fb))),128))],40,ub),[[Kr,i.value,void 0,{number:!0}]])])]),G("div",db,[L[35]||(L[35]=G("span",null,"SKIN",-1)),(Nt(!0),Ft(ve,null,Zn(_e(Br),(D,j)=>(Nt(),Ft("button",{key:D,class:Un({chosen:e.value.skin===j}),style:Ei({background:D}),onClick:vt=>e.value.skin=j,"aria-label":`Skin tone ${j+1}`},null,14,pb))),128)),L[36]||(L[36]=G("span",{class:"hair-label"},"HAIR",-1)),(Nt(!0),Ft(ve,null,Zn(_e(oa),(D,j)=>(Nt(),Ft("button",{key:D,style:Ei({background:D}),class:Un({chosen:e.value.hairColor===j}),onClick:vt=>e.value.hairColor=j,"aria-label":`Hair color ${j+1}`},null,14,mb))),128))]),G("div",gb,[L[37]||(L[37]=G("span",null,"THREADS",-1)),(Nt(!0),Ft(ve,null,Zn(_e(Fs),(D,j)=>(Nt(),Ft("button",{key:D,style:Ei({background:D}),class:Un({chosen:e.value.color===j}),onClick:vt=>e.value.color=j,"aria-label":`Clothing color ${j+1}`},null,14,_b))),128)),L[38]||(L[38]=G("small",null,"ALL LOOKS. NO STAT BOOSTS.",-1))]),_.value?ge("",!0):(Nt(),Ft("div",vb,[G("button",{class:"secondary",onClick:W},[...L[39]||(L[39]=[te("HOST P2P ",-1),G("span",null,"↗",-1)])]),G("div",xb,[Ks(G("input",{"onUpdate:modelValue":L[6]||(L[6]=D=>c.value=D),"aria-label":"Invite link or room ID",placeholder:"INVITE LINK / ROOM ID"},null,512),[[U0,c.value]]),G("button",{onClick:X,disabled:!c.value.trim()},"JOIN",8,yb)])])),_.value&&!m.value?(Nt(),Ft("div",Mb,[G("b",null,Dt(h.value.network.status.toUpperCase()),1),G("p",null,Dt(h.value.network.message),1),h.value.network.invite?(Nt(),Ft(ve,{key:0},[G("button",{onClick:Q},Dt(a.value)+" ↗",1),G("input",{value:h.value.network.invite,readonly:"","aria-label":"P2P invite link"},null,8,Sb)],64)):ge("",!0),G("button",{class:"cancel-host",onClick:L[7]||(L[7]=D=>{var j;return(j=_e(f))==null?void 0:j.leave()})},"CANCEL / PRACTICE")])):ge("",!0),G("div",bb,[L[40]||(L[40]=G("span",{class:"tiny-dot"},null,-1)),G("b",null,Dt(m.value?"2 HUMANS / 6 BOTS":_.value?"WAITING FOR A HUMAN":"PRACTICE / 7 BOTS"),1),m.value?(Nt(),Ft("span",Eb,Dt(u.value.actors.filter(D=>D.human&&D.ready).length)+" / 2 READY",1)):(Nt(),Ft("span",wb,"NO CREDIT CARD REQUIRED"))]),G("button",{class:"primary",disabled:_.value&&!m.value,onClick:L[8]||(L[8]=D=>{var j;return(j=_e(f))==null?void 0:j.ready()})},[te(Dt(u.value.phase==="countdown"?`BAD DECISIONS IN ${Math.max(1,3-Math.floor(u.value.phaseFrame/60))}…`:C.value?"READY. UNFORTUNATELY.":m.value?"READY TO FALL APART":"PRACTICE BAD DECISIONS")+" ",1),L[41]||(L[41]=G("span",null,"↗",-1))],8,Tb),G("p",Ab,Dt(m.value?"BOTH HUMANS MUST READY UP. COSMETIC CHANGES RESET READINESS.":"P2P: TWO HUMANS + SIX BOTS. PRACTICE WORKS OFFLINE."),1)])):ge("",!0),g.value?(Nt(),Ft("div",Rb,[...L[46]||(L[46]=[G("span",null,[te("YOUR FUTURE"),G("br"),te("FORMER SELF.")],-1),G("i",null,null,-1),G("small",null,[te("100% ORIGINAL PARTS"),G("br"),te("FOR NOW.")],-1)])])):ge("",!0),u.value.phase==="match"?(Nt(),Ft(ve,{key:2},[G("div",Cb,[G("div",null,[L[48]||(L[48]=G("small",null,"STILL TECHNICALLY ALIVE",-1)),G("b",null,[te(Dt(p.value.length),1),L[47]||(L[47]=G("span",null,"/ 8",-1))])]),G("div",Pb,[te(Dt(R.value),1),G("small",null,Dt(u.value.actors.some(D=>D.pendingSpawn)?"DESTROY BOTH CRATES":u.value.phaseFrame<=1800?"SAFE AREA HOLDING":"SAFE AREA CONTRACTING"),1)])]),u.value.chaosAt!==void 0?(Nt(),Ft("div",Lb,[L[49]||(L[49]=G("span",null,"G GRAB / THROW · E MOVEMENT LOOT",-1)),d.value.carrying?(Nt(),Ft("b",Ib,"HOLDING "+Dt(d.value.carrying.kind.toUpperCase())+" — AIM + ATTACK TO THROW",1)):ge("",!0),(d.value.stunUntil??0)>u.value.frame?(Nt(),Ft("b",Db,"TV STUN · "+Dt(Math.ceil(((d.value.stunUntil??0)-u.value.frame)/60))+"s",1)):ge("",!0),d.value.boost?(Nt(),Ft("b",Ub,Dt(_e(xd)[d.value.boost.kind])+" · "+Dt(Math.max(0,Math.ceil((d.value.boost.until-u.value.frame)/60)))+"s",1)):ge("",!0)])):ge("",!0),u.value.major?(Nt(),Ft("div",{key:1,class:Un(["event-banner",{helpful:u.value.major.kind==="foam"}])},[G("b",null,Dt(u.value.major.kind==="foam"?"FOAM SPRINKLER — SLIPPERY, NO DAMAGE":u.value.major.kind==="truck"?"DANGER: RUNAWAY TRUCK — JUMP OR GET CLEAR":"DANGER: FALLING AIR CONDITIONER — CLEAR THE RED ZONE"),1),G("span",null,Dt(u.value.frame<u.value.major.activeAt?"STARTS IN "+Math.ceil((u.value.major.activeAt-u.value.frame)/60)+"s":"ACTIVE"),1)],2)):ge("",!0),G("div",Nb,[G("div",Ob,[G("b",null,[te(Dt(Math.ceil(d.value.hp)),1),L[50]||(L[50]=G("span",null,"%",-1))]),G("span",null,Dt(d.value.bleedOutAt!==null?(d.value.parts.head?"BLEEDING OUT / ":"HEADLESS — BLEEDING OUT / ")+Math.max(0,Math.ceil((d.value.bleedOutAt-u.value.frame)/60))+"s":d.value.parts.head?"VITALITY":"HEADLESS / MOSTLY GUESSWORK"),1)]),G("div",Fb,[G("i",{style:Ei({width:d.value.hp+"%"})},null,4)]),G("div",Bb,[G("span",null,"PARTS "+Dt(M.value)+" / "+Dt(_e(ln).length),1),M.value<_e(ln).length?(Nt(),Ft("span",kb,"SOME ASSEMBLY LOST")):(Nt(),Ft("span",zb,"FACTORY CONDITION"))]),G("div",Hb,[G("b",null,Dt(T.value.toUpperCase()),1),T.value==="smg"||T.value==="shotgun"?(Nt(),Ft("span",Vb,Dt(d.value.ammo)+" / "+Dt(d.value.reserve),1)):T.value==="laser"||T.value==="flamethrower"?(Nt(),Ft("span",Gb,Dt(d.value.ammo)+" "+Dt(T.value==="laser"?"SHOTS":"FUEL"),1)):(Nt(),Ft("span",Wb,Dt(T.value==="body"?"LIMITED DIGNITY":"UNLIMITED REGRETS"),1))]),G("small",null,Dt(d.value.reloading?"RELOADING…":"E PICKUP · Q / SHIFT SWAP · R RELOAD"),1)]),G("div",Xb,[L[51]||(L[51]=G("small",null,"INVENTORY OF YOU",-1)),(Nt(),Ft(ve,null,Zn([["head"],["armL","armR"],["handL","handR"],["thighL","thighR"],["footL","footR"]],D=>G("div",{key:D.join()},[G("span",null,Dt(D[0].startsWith("thigh")?"LEGS":D[0].replace(/[LR]$/,"").toUpperCase()),1),(Nt(!0),Ft(ve,null,Zn(D,j=>(Nt(),Ft("i",{key:j,class:Un({lost:d.value.parts[j]<=0})},null,2))),128))])),64))]),d.value.hp<=0?(Nt(),Ft("div",Yb,[L[52]||(L[52]=G("p",{class:"eyebrow"},"YOU HAVE BEEN DISCONTINUED.",-1)),G("h2",null,Dt(((It=h.value.advice)==null?void 0:It.title)??"The warranty did not cover that."),1),G("p",null,Dt((($t=h.value.advice)==null?void 0:$t.hint)??"A familiar lesson. Still not a pleasant one."),1),G("small",null,"SPECTATING — "+Dt(p.value.length)+" REMAIN",1),G("div",qb,[(Nt(!0),Ft(ve,null,Zn(p.value,D=>(Nt(),Ft("button",{key:D.id,onClick:j=>{var vt;return(vt=_e(f))==null?void 0:vt.spectator(D.id)}},Dt(D.name),9,jb))),128))])])):ge("",!0),G("div",Kb,[G("div",{class:"stick",onPointerdown:L[9]||(L[9]=D=>H(D,"move")),onPointermove:L[10]||(L[10]=D=>H(D,"move")),onPointerup:L[11]||(L[11]=D=>gt(D,"move")),onPointercancel:L[12]||(L[12]=D=>gt(D,"move"))},[G("i",{style:Ei({transform:`translate(${it.value.x*25}px,${it.value.y*25}px)`})},null,4),L[53]||(L[53]=G("small",null,"MOVE",-1))],32),G("div",$b,[G("button",{onClick:L[13]||(L[13]=D=>{var j;return(j=_e(f))==null?void 0:j.command("jump")})},"JUMP"),G("button",{onClick:L[14]||(L[14]=D=>{var j;return(j=_e(f))==null?void 0:j.command("pickup")})},"PICK UP"),u.value.chaosAt!==void 0?(Nt(),Ft("button",{key:0,onClick:L[15]||(L[15]=D=>{var j;return(j=_e(f))==null?void 0:j.command("grab")})},"GRAB / THROW")):ge("",!0),G("button",{onClick:L[16]||(L[16]=D=>{var j;return(j=_e(f))==null?void 0:j.command("cycle")})},"SWAP"),G("button",{onClick:L[17]||(L[17]=D=>{var j;return(j=_e(f))==null?void 0:j.command("reload")})},"RELOAD")]),G("div",{class:"stick fire-stick",onPointerdown:L[18]||(L[18]=D=>H(D,"aim")),onPointermove:L[19]||(L[19]=D=>H(D,"aim")),onPointerup:L[20]||(L[20]=D=>gt(D,"aim")),onPointercancel:L[21]||(L[21]=D=>gt(D,"aim"))},[...L[54]||(L[54]=[G("i",null,null,-1),G("small",null,"AIM / FIRE",-1)])],32)])],64)):ge("",!0),u.value.phase==="results"?(Nt(),Ft("section",{key:3,class:Un(["result-card",{"is-victory":u.value.winner===h.value.localId}])},[G("p",Jb,Dt(u.value.winner===h.value.localId?"VICTORY / YOU SURVIVED":"ROUND OVER"),1),G("h2",null,Dt(u.value.winner===null?"NO SURVIVORS.":u.value.winner===h.value.localId?"YOU WON.":"YOU WERE ELIMINATED."),1),G("p",null,Dt(u.value.winner===null?"A draw. Nobody survived the round.":u.value.winner===h.value.localId?"Victory — you are the last player standing.":`${u.value.actors[u.value.winner].name} won the round.`),1),h.value.advice?(Nt(),Ft("div",Zb,[G("b",null,Dt(h.value.advice.title),1),G("span",null,Dt(h.value.advice.hint),1)])):ge("",!0),G("div",Qb,[u.value.winner===h.value.localId?(Nt(),Ft("span",tE,[L[55]||(L[55]=te("HEALTH ",-1)),G("b",null,Dt(Math.ceil(d.value.hp))+"%",1)])):ge("",!0),G("span",null,[L[56]||(L[56]=te("ELIMINATIONS ",-1)),G("b",null,Dt(d.value.kills),1)]),G("span",null,[L[57]||(L[57]=te("PARTS LEFT ",-1)),G("b",null,Dt(M.value),1)])]),G("button",{class:"primary",onClick:L[22]||(L[22]=D=>{var j;return(j=_e(f))==null?void 0:j.rematch()})},[...L[58]||(L[58]=[te("ANOTHER TERRIBLE IDEA ",-1),G("span",null,"↗",-1)])]),G("small",null,Dt(m.value?"BOTH HUMANS MUST REQUEST A REMATCH.":"NEXT ROUND ROTATES TO A NEW VENUE."),1)],2)):ge("",!0),u.value.phase!=="results"?(Nt(),Ft("footer",eE,[L[59]||(L[59]=G("span",null,"A / D · ← / → MOVE",-1)),L[60]||(L[60]=G("span",null,"SPACE JUMP",-1)),L[61]||(L[61]=G("span",null,"MOUSE / J ATTACK",-1)),L[62]||(L[62]=G("span",null,"E PICKUP",-1)),u.value.chaosAt!==void 0?(Nt(),Ft("span",nE,"G GRAB / THROW")):ge("",!0),L[63]||(L[63]=G("span",null,"Q / SHIFT WEAPON",-1)),L[64]||(L[64]=G("span",null,"R RELOAD",-1))])):ge("",!0),h.value.paused?(Nt(),Ft("div",iE,[G("section",sE,[L[65]||(L[65]=G("p",{class:"eyebrow"},"PRACTICE / HOLDING IT TOGETHER",-1)),L[66]||(L[66]=G("h2",null,[te("TAKE A BREATHER."),G("br"),te("WHILE YOU HAVE LUNGS.")],-1)),G("button",{class:"primary",onClick:L[23]||(L[23]=D=>_e(f)&&(_e(f).paused=!1))},"BACK TO IT ↗")])])):ge("",!0),k.value?(Nt(),Ft("div",rE,[G("section",oE,[L[67]||(L[67]=G("p",{class:"eyebrow"},"CONNECTION ENDED",-1)),L[68]||(L[68]=G("h2",null,[te("TECHNICAL"),G("br"),te("DIFFICULTIES.")],-1)),G("p",null,Dt(h.value.network.message),1),G("button",{class:"primary",onClick:L[24]||(L[24]=D=>{var j;return(j=_e(f))==null?void 0:j.leave()})},"RETURN TO LOBBY ↗")])])):ge("",!0),o.value?(Nt(),Ft("div",aE,[G("section",lE,[G("button",{class:"close",onClick:L[25]||(L[25]=D=>o.value=!1)},"CLOSE ×"),L[69]||(L[69]=G("p",{class:"eyebrow"},"LEARNING, APPARENTLY.",-1)),L[70]||(L[70]=G("h2",null,"DEATH NOTES.",-1)),h.value.known.length?ge("",!0):(Nt(),Ft("p",cE,"Discover new ways to die. Receive unsolicited advice.")),(Nt(!0),Ft(ve,null,Zn(h.value.known,D=>(Nt(),Ft("article",{key:D},[G("b",null,Dt(_e(Go)[D].title),1),G("p",null,Dt(_e(Go)[D].hint),1)]))),128))])])):ge("",!0)],64))],2)}}});B0(fE).use(V0()).mount("#app");export{yd as S,qi as e,K0 as v};
