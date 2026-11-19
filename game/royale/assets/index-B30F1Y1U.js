var bd=Object.defineProperty;var Td=(n,e,t)=>e in n?bd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ye=(n,e,t)=>Td(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $l(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ut={},Wi=[],On=()=>{},wh=()=>!1,Lo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Io=n=>n.startsWith("onUpdate:"),bt=Object.assign,Kl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ad=Object.prototype.hasOwnProperty,et=(n,e)=>Ad.call(n,e),Ue=Array.isArray,Mi=n=>xr(n)==="[object Map]",Ki=n=>xr(n)==="[object Set]",Vc=n=>xr(n)==="[object Date]",Ve=n=>typeof n=="function",vt=n=>typeof n=="string",Fn=n=>typeof n=="symbol",ct=n=>n!==null&&typeof n=="object",Rh=n=>(ct(n)||Ve(n))&&Ve(n.then)&&Ve(n.catch),Ch=Object.prototype.toString,xr=n=>Ch.call(n),wd=n=>xr(n).slice(8,-1),Ph=n=>xr(n)==="[object Object]",Zl=n=>vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Js=$l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Do=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Rd=/-\w/g,En=Do(n=>n.replace(Rd,e=>e.slice(1).toUpperCase())),Cd=/\B([A-Z])/g,Qi=Do(n=>n.replace(Cd,"-$1").toLowerCase()),Lh=Do(n=>n.charAt(0).toUpperCase()+n.slice(1)),Jo=Do(n=>n?`on${Lh(n)}`:""),Nn=(n,e)=>!Object.is(n,e),ro=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ih=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Mr=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Gc;const Uo=()=>Gc||(Gc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _i(n){if(Ue(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=vt(i)?Dd(i):_i(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(vt(n)||ct(n))return n}const Pd=/;(?![^(]*\))/g,Ld=/:([^]+)/,Id=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Dd(n){const e={};return n.replace(Id,t=>t.startsWith("/*")?"":t).split(Pd).forEach(t=>{if(t){const i=t.split(Ld);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function vi(n){let e="";if(vt(n))e=n;else if(Ue(n))for(let t=0;t<n.length;t++){const i=vi(n[t]);i&&(e+=i+" ")}else if(ct(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ud="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Nd=$l(Ud);function Dh(n){return!!n||n===""}function Od(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=bi(n[s],e[s],t);return i}function Wc(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),s=new Uint8Array(i.length);for(const r of n){let a=-1;for(let o=0;o<i.length;o++)if(!s[o]&&bi(r,i[o],t)){a=o;break}if(a<0)return!1;s[a]=1}return!0}function Fd(n,e,t){let i=Mi(n),s=Mi(e);if(i||s||(i=Ki(n),s=Ki(e),i||s))return i&&s?Wc(n,e,t):!1;const r=Object.keys(n).length,a=Object.keys(e).length;if(r!==a)return!1;for(const o in n){const l=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!bi(n[o],e[o],t))return!1}return String(n)===String(e)}function Xc(n,e,t,i){t||(t=[new Map,new Map]);const[s,r]=t;if(s.has(n)||r.has(e))return s.get(n)===e&&r.get(e)===n;s.set(n,e),r.set(e,n);const a=i(n,e,t);return s.delete(n),r.delete(e),a}function bi(n,e,t){if(n===e)return!0;let i=Vc(n),s=Vc(e);return i||s?i&&s?n.getTime()===e.getTime():!1:(i=Fn(n),s=Fn(e),i||s?n===e:(i=Ue(n),s=Ue(e),i||s?i&&s?Xc(n,e,t,Od):!1:(i=ct(n),s=ct(e),i||s?!i||!s?!1:Xc(n,e,t,Fd):String(n)===String(e))))}function Bd(n,e){return n.findIndex(t=>bi(t,e))}const Uh=n=>!!(n&&n.__v_isRef===!0),He=n=>vt(n)?n:n==null?"":Ue(n)||ct(n)&&(n.toString===Ch||!Ve(n.toString))?Uh(n)?He(n.value):JSON.stringify(n,Nh,2):String(n),Nh=(n,e)=>Uh(e)?Nh(n,e.value):Mi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Qo(i,r)+" =>"]=s,t),{})}:Ki(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Qo(t))}:Fn(e)?Qo(e):ct(e)&&!Ue(e)&&!Ph(e)?String(e):e,Qo=(n,e="")=>{var t;return Fn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pt;class Oh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Pt&&(Pt.active?(this.parent=Pt,this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Pt;try{return Pt=this,e()}finally{Pt=t}}}on(){++this._on===1&&(this.prevScope=Pt,Pt=this)}off(){if(this._on>0&&--this._on===0){if(Pt===this)Pt=this.prevScope;else{let e=Pt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function kd(n){return new Oh(n)}function zd(){return Pt}let ht;const ea=new WeakSet;class Fh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pt&&(Pt.active?Pt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ea.has(this)&&(ea.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||kh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qc(this),zh(this);const e=ht,t=bn;ht=this,bn=!0;try{return this.fn()}finally{Hh(this),ht=e,bn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ec(e);this.deps=this.depsTail=void 0,qc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ea.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ja(this)&&this.run()}get dirty(){return ja(this)}}let Bh=0,Qs,er;function kh(n,e=!1){if(n.flags|=8,e){n.next=er,er=n;return}n.next=Qs,Qs=n}function Jl(){Bh++}function Ql(){if(--Bh>0)return;if(er){let e=er;for(er=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Qs;){let e=Qs;for(Qs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function zh(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hh(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),ec(i),Hd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function ja(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Vh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Vh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ur)||(n.globalVersion=ur,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ja(n))))return;n.flags|=2;const e=n.dep,t=ht,i=bn;ht=n,bn=!0;try{zh(n);const s=n.fn(n._value);(e.version===0||Nn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ht=t,bn=i,Hh(n),n.flags&=-3}}function ec(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)ec(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Hd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let bn=!0;const Gh=[];function Bn(){Gh.push(bn),bn=!1}function kn(){const n=Gh.pop();bn=n===void 0?!0:n}function qc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ht;ht=void 0;try{e()}finally{ht=t}}}let ur=0;class Vd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class tc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ht||!bn||ht===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ht)t=this.activeLink=new Vd(ht,this),ht.deps?(t.prevDep=ht.depsTail,ht.depsTail.nextDep=t,ht.depsTail=t):ht.deps=ht.depsTail=t,Wh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ht.depsTail,t.nextDep=void 0,ht.depsTail.nextDep=t,ht.depsTail=t,ht.deps===t&&(ht.deps=i)}return t}trigger(e){this.version++,ur++,this.notify(e)}notify(e){Jl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ql()}}}function Wh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Wh(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const $a=new WeakMap,ji=Symbol(""),Ka=Symbol(""),hr=Symbol("");function Ut(n,e,t){if(bn&&ht){let i=$a.get(n);i||$a.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new tc),s.map=i,s.key=t),s.track()}}function ei(n,e,t,i,s,r){const a=$a.get(n);if(!a){ur++;return}const o=l=>{l&&l.trigger()};if(Jl(),e==="clear")a.forEach(o);else{const l=Ue(n),c=l&&Zl(t);if(l&&t==="length"){const h=Number(i);a.forEach((u,f)=>{(f==="length"||f===hr||!Fn(f)&&f>=h)&&o(u)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(hr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(ji)),Mi(n)&&o(a.get(Ka)));break;case"delete":l||(o(a.get(ji)),Mi(n)&&o(a.get(Ka)));break;case"set":Mi(n)&&o(a.get(ji));break}}Ql()}function is(n){const e=st(n);return e===n||(Ut(e,"iterate",hr),fn(n))?e:zn(n)?yi(n)?e.map(t=>Ti(pn(t))):e.map(Ti):e.map(pn)}function No(n){return Ut(n=st(n),"iterate",hr),n}function Cn(n,e){return zn(n)?Ti(yi(n)?pn(e):e):pn(e)}const Gd={__proto__:null,[Symbol.iterator](){return ta(this,Symbol.iterator,n=>Cn(this,n))},concat(...n){return is(this).concat(...n.map(e=>Ue(e)?is(e):e))},entries(){return ta(this,"entries",n=>(n[1]=Cn(this,n[1]),n))},every(n,e){return Gn(this,"every",n,e,void 0,arguments)},filter(n,e){return Gn(this,"filter",n,e,t=>t.map(i=>Cn(this,i)),arguments)},find(n,e){return Gn(this,"find",n,e,t=>Cn(this,t),arguments)},findIndex(n,e){return Gn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Gn(this,"findLast",n,e,t=>Cn(this,t),arguments)},findLastIndex(n,e){return Gn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Gn(this,"forEach",n,e,void 0,arguments)},includes(...n){return na(this,"includes",n)},indexOf(...n){return na(this,"indexOf",n)},join(n){return is(this).join(n)},lastIndexOf(...n){return na(this,"lastIndexOf",n)},map(n,e){return Gn(this,"map",n,e,void 0,arguments)},pop(){return Bs(this,"pop")},push(...n){return Bs(this,"push",n)},reduce(n,...e){return jc(this,"reduce",n,e)},reduceRight(n,...e){return jc(this,"reduceRight",n,e)},shift(){return Bs(this,"shift")},some(n,e){return Gn(this,"some",n,e,void 0,arguments)},splice(...n){return Bs(this,"splice",n)},toReversed(){return is(this).toReversed()},toSorted(n){return is(this).toSorted(n)},toSpliced(...n){return is(this).toSpliced(...n)},unshift(...n){return Bs(this,"unshift",n)},values(){return ta(this,"values",n=>Cn(this,n))}};function ta(n,e,t){const i=No(n),s=i[e],r=s.call(i);if(i!==n&&!fn(n)){if(r[Symbol.toStringTag]==="Array Iterator"){const a=Object.create(Object.getPrototypeOf(r));return a.next=()=>Yc(r.next(),t),s!==Xh[e]&&Object.defineProperties(a,{return:{get(){const o=r.return;return typeof o=="function"?o.bind(r):o}},throw:{get(){const o=r.throw;return typeof o=="function"?o.bind(r):o}}}),a}r._next=r.next,r.next=()=>Yc(r._next(),t)}return r}function Yc(n,e){return n.done||(n.value=e(n.value)),n}const Xh=Array.prototype;function Gn(n,e,t,i,s,r){const a=No(n),o=a!==n&&!fn(n),l=a[e];if(l!==Xh[e]){const u=l.apply(n,r);return o?pn(u):u}let c=t;a!==n&&(o?c=function(u,f){return t.call(this,Cn(n,u),f,n)}:t.length>2&&(c=function(u,f){return t.call(this,u,f,n)}));const h=l.call(a,c,i);return o&&s?s(h):h}function jc(n,e,t,i){const s=No(n),r=s!==n&&!fn(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,h,u){return o&&(o=!1,c=Cn(n,c)),t.call(this,c,Cn(n,h),u,n)}):t.length>3&&(a=function(c,h,u){return t.call(this,c,h,u,n)}));const l=s[e](a,...i);return o?Cn(n,l):l}function na(n,e,t){const i=st(n);Ut(i,"iterate",hr);const s=i[e](...t);return(s===-1||s===!1)&&rc(t[0])?(t[0]=st(t[0]),i[e](...t)):s}function Bs(n,e,t=[]){Bn(),Jl();const i=st(n)[e].apply(n,t);return Ql(),kn(),i}const Wd=$l("__proto__,__v_isRef,__isVue"),qh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Fn));function Xd(n){Fn(n)||(n=String(n));const e=st(this);return Ut(e,"has",n),e.hasOwnProperty(n)}class Yh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?tp:Zh:r?Kh:$h).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ue(e);if(!s){let l;if(a&&(l=Gd[t]))return l;if(t==="hasOwnProperty")return Xd}const o=Reflect.get(e,t,Nt(e)?e:i);if((Fn(t)?qh.has(t):Wd(t))||(s||Ut(e,"get",t),r))return o;if(Nt(o)){const l=a&&Zl(t)?o:o.value;return s&&ct(l)?Ja(l):l}return ct(o)?s?Ja(o):ic(o):o}}class jh extends Yh{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=Ue(e)&&Zl(t);if(!this._isShallow){const c=zn(r);if(!fn(i)&&!zn(i)&&(r=st(r),i=st(i)),!a&&Nt(r)&&!Nt(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:et(e,t),l=Reflect.set(e,t,i,Nt(e)?e:s);return e===st(s)&&l&&(o?Nn(i,r)&&ei(e,"set",t,i):ei(e,"add",t,i)),l}deleteProperty(e,t){const i=et(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ei(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Fn(t)||!qh.has(t))&&Ut(e,"has",t),i}ownKeys(e){return Ut(e,"iterate",Ue(e)?"length":ji),Reflect.ownKeys(e)}}class qd extends Yh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Yd=new jh,jd=new qd,$d=new jh(!0);const Za=n=>n,Pr=n=>Reflect.getPrototypeOf(n);function Kd(n,e,t){return function(...i){const s=this.__v_raw,r=st(s),a=Mi(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),h=t?Za:e?Ti:pn;return!e&&Ut(r,"iterate",l?Ka:ji),bt(Object.create(c),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:o?[h(u[0]),h(u[1])]:h(u),done:f}}})}}function Lr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Zd(n,e){const t={get(s){const r=this.__v_raw,a=st(r),o=st(s);n||(Nn(s,o)&&Ut(a,"get",s),Ut(a,"get",o));const{has:l}=Pr(a),c=e?Za:n?Ti:pn;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ut(st(s),"iterate",ji),s.size},has(s){const r=this.__v_raw,a=st(r),o=st(s);return n||(Nn(s,o)&&Ut(a,"has",s),Ut(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=st(o),c=e?Za:n?Ti:pn;return!n&&Ut(l,"iterate",ji),o.forEach((h,u)=>s.call(r,c(h),c(u),a))}};return bt(t,n?{add:Lr("add"),set:Lr("set"),delete:Lr("delete"),clear:Lr("clear")}:{add(s){const r=st(this),a=Pr(r),o=st(s),l=!e&&!fn(s)&&!zn(s)?o:s;return a.has.call(r,l)||Nn(s,l)&&a.has.call(r,s)||Nn(o,l)&&a.has.call(r,o)||(r.add(l),ei(r,"add",l,l)),this},set(s,r){!e&&!fn(r)&&!zn(r)&&(r=st(r));const a=st(this),{has:o,get:l}=Pr(a);let c=o.call(a,s);c||(s=st(s),c=o.call(a,s));const h=l.call(a,s);return a.set(s,r),c?Nn(r,h)&&ei(a,"set",s,r):ei(a,"add",s,r),this},delete(s){const r=st(this),{has:a,get:o}=Pr(r);let l=a.call(r,s);l||(s=st(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&ei(r,"delete",s,void 0),c},clear(){const s=st(this),r=s.size!==0,a=s.clear();return r&&ei(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Kd(s,n,e)}),t}function nc(n,e){const t=Zd(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_isShallow"?e:s==="__v_raw"?i:Reflect.get(et(t,s)&&s in i?t:i,s,r)}const Jd={get:nc(!1,!1)},Qd={get:nc(!1,!0)},ep={get:nc(!0,!1)};const $h=new WeakMap,Kh=new WeakMap,Zh=new WeakMap,tp=new WeakMap;function np(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ic(n){return zn(n)?n:sc(n,!1,Yd,Jd,$h)}function ip(n){return sc(n,!1,$d,Qd,Kh)}function Ja(n){return sc(n,!0,jd,ep,Zh)}function sc(n,e,t,i,s){if(!ct(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=np(wd(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function yi(n){return zn(n)?yi(n.__v_raw):!!(n&&n.__v_isReactive)}function zn(n){return!!(n&&n.__v_isReadonly)}function fn(n){return!!(n&&n.__v_isShallow)}function rc(n){return n?!!n.__v_raw:!1}function st(n){const e=n&&n.__v_raw;return e?st(e):n}function Jh(n){return!et(n,"__v_skip")&&Object.isExtensible(n)&&Ih(n,"__v_skip",!0),n}const pn=n=>ct(n)?ic(n):n,Ti=n=>ct(n)?Ja(n):n;function Nt(n){return n?n.__v_isRef===!0:!1}function qt(n){return sp(n,!1)}function sp(n,e){return Nt(n)?n:new rp(n,e)}class rp{constructor(e,t){this.dep=new tc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:st(e),this._value=t?e:pn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||fn(e)||zn(e);e=i?e:st(e),Nn(e,t)&&(this._rawValue=e,this._value=i?e:pn(e),this.dep.trigger())}}function Mt(n){return Nt(n)?n.value:n}const op={get:(n,e,t)=>e==="__v_raw"?n:Mt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Nt(s)&&!Nt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Qh(n){return yi(n)?n:new Proxy(n,op)}class ap{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new tc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ur-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ht!==this)return kh(this,!0),!0}get value(){const e=this.dep.track();return Vh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function lp(n,e,t=!1){let i,s;return Ve(n)?i=n:(i=n.get,s=n.set),new ap(i,s,t)}const Ir={},go=new WeakMap;let ki;function cp(n,e=!1,t=ki){if(t){let i=go.get(t);i||go.set(t,i=[]),i.push(n)}}function up(n,e,t=ut){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=T=>s?T:fn(T)||s===!1||s===0?ti(T,1):ti(T);let h,u,f,p,_=!1,x=!1;if(Nt(n)?(u=()=>n.value,_=fn(n)):yi(n)?(u=()=>c(n),_=!0):Ue(n)?(x=!0,_=n.some(T=>yi(T)||fn(T)),u=()=>n.map(T=>{if(Nt(T))return T.value;if(yi(T))return c(T);if(Ve(T))return l?l(T,2):T()})):Ve(n)?e?u=l?()=>l(n,2):n:u=()=>{if(f){Bn();try{f()}finally{kn()}}const T=ki;ki=h;try{return l?l(n,3,[p]):n(p)}finally{ki=T}}:u=On,e&&s){const T=u,F=s===!0?1/0:s;u=()=>ti(T(),F)}const m=zd(),d=()=>{h.stop(),m&&m.active&&Kl(m.effects,h)};if(r&&e){const T=e;e=(...F)=>{try{return T(...F)}finally{d()}}}let A=x?new Array(n.length).fill(Ir):Ir;const b=T=>{if(!(!(h.flags&1)||!h.dirty&&!T))if(e){const F=h.run();if(T||s||_||(x?F.some((I,R)=>Nn(I,A[R])):Nn(F,A))){const I=ki;Bn();try{f&&f(),ki=h;const R=[F,A===Ir?void 0:x&&A[0]===Ir?[]:A,p];A=F,l?l(e,3,R):e(...R)}finally{ki=I,kn()}}}else h.run()};return o&&o(b),h=new Fh(u),h.scheduler=a?()=>a(b,!1):b,p=T=>cp(T,!1,h),f=h.onStop=()=>{const T=go.get(h);if(T){if(l)l(T,4);else for(const F of T)F();go.delete(h)}},e?i?b(!0):A=h.run():a?a(b.bind(null,!0),!0):h.run(),d.pause=h.pause.bind(h),d.resume=h.resume.bind(h),d.stop=d,d}function ti(n,e=1/0,t){if(e<=0||!ct(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Nt(n))ti(n.value,e,t);else if(Ue(n))for(let i=0;i<n.length;i++)ti(n[i],e,t);else if(Ki(n)||Mi(n))n.forEach(i=>{ti(i,e,t)});else if(Ph(n)){for(const i in n)ti(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ti(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yr(n,e,t,i){try{return i?n(...i):n()}catch(s){Oo(s,e,t)}}function Tn(n,e,t,i){if(Ve(n)){const s=yr(n,e,t,i);return s&&Rh(s)&&s.catch(r=>{Oo(r,e,t,void 0,!0)}),s}if(Ue(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Tn(n[r],e,t,i));return s}}function Oo(n,e,t,i=!0,s=!1){const r=e?e.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ut;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const u=l.ec;if(u&&!l.isUnmounted&&(!s||l.scope.active)){for(let f=0;f<u.length;f++)if(u[f](n,c,h)===!1)return}l=l.parent}if(a){Bn(),yr(a,null,10,[n,c,h]),kn();return}}hp(n,t,r,i,o)}function hp(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const kt=[];let xn=-1;const Pn=[];let mi=null,vs=0;const ef=Promise.resolve();let _o=null;function tf(n){const e=_o||ef;return n?e.then(this?n.bind(this):n):e}function fp(n){let e=xn+1,t=kt.length;for(;e<t;){const i=e+t>>>1,s=kt[i],r=fr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function oc(n){if(!(n.flags&1)){const e=fr(n),t=kt[kt.length-1];!t||!(n.flags&2)&&e>=fr(t)?kt.push(n):kt.splice(fp(e),0,n),n.flags|=1,nf()}}function nf(){_o||(_o=ef.then(of))}function dp(n){if(!Ue(n))mi&&n.id===-1?mi.splice(vs+1,0,n):n.flags&1||(Pn.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)Pn.push(n[e]);nf()}function sf(n,e,t,i=xn+1){for(;i<kt.length;i++){const s=kt[i];if(s&&s.flags&2){if(n&&s.id!==n.uid||e!==void 0&&!(s.id>=e))continue;kt.splice(i,1),i=n?i-1:xn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function rf(n,e,t=0){if(Pn.length){let i=Pn,s=0;if(e){i=[];for(let a=0;a<Pn.length;a++){const o=Pn[a];(o.i!==void 0?!o.i||o.i.uid<t:e.has(o))?Pn[s++]=o:i.push(o)}}const r=[...new Set(i)].sort((a,o)=>fr(a)-fr(o));if(Pn.length=s,mi){for(let a=0;a<r.length;a++)mi.push(r[a]);return}for(mi=r,vs=0;vs<mi.length;vs++){const a=mi[vs];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}mi=null,vs=0}}let ia=!1;function pp(n,e){if(ia){n();return}const t=e===void 0?void 0:new Set(Pn);n(),ia=!0;try{sf(void 0,e),rf(void 0,t,e)}finally{ia=!1}}const fr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function of(n){try{for(xn=0;xn<kt.length;xn++){const e=kt[xn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),yr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;xn<kt.length;xn++){const e=kt[xn];e&&(e.flags&=-2)}xn=-1,kt.length=0,rf(),_o=null,(kt.length||Pn.length)&&of()}}let un=null,af=null;function vo(n){const e=un;return un=n,af=n&&n.type.__scopeId||null,e}function mp(n,e=un,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&ru(-1);const r=vo(e),a=$i.length;let o;try{o=n(...s)}finally{for(let l=$i.length;l>a;l--)If();vo(r),i._d&&ru(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ks(n,e){if(un===null)return n;const t=zo(un),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,a,o,l=ut]=e[s];r&&(Ve(r)&&(r={mounted:r,updated:r}),r.deep&&ti(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Li(n,e,t,i){let s=n;if(i==="beforeMount")n._mount=n;else if(i==="beforeUpdate"){const o=e&&e._mount;o&&(o._latest=n,n._mount=o)}else if(i==="mounted"){const o=n._latest;n._mount=n._latest=void 0,o&&(s=o,o._mount=void 0)}const r=s.dirs,a=e&&e.dirs;for(let o=0;o<r.length;o++){let l=r[o];a?l.oldValue=a[o].value:i==="mounted"&&l.oldValue!==void 0&&(l=bt({},l,{oldValue:void 0}));let c=l.dir[i];c&&(Bn(),Tn(c,t,8,[n.el,l,s,e]),kn())}}function gp(n,e){if(zt){let t=zt.provides;const i=zt.parent&&zt.parent.provides;i===t&&(t=zt.provides=Object.create(i)),t[n]=e}}function oo(n,e,t=!1){const i=mm();if(i||ys){let s=ys?ys._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ve(e)?e.call(i&&i.proxy):e}}const _p=Symbol.for("v-scx"),vp=()=>oo(_p);function tr(n,e,t){return lf(n,e,t)}function lf(n,e,t=ut){const{immediate:i,deep:s,flush:r,once:a}=t,o=bt({},t),l=e&&i||!e&&r!=="post";let c;if(gr){if(r==="sync"){const p=vp();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=On,p.resume=On,p.pause=On,p}}const h=zt;o.call=(p,_,x)=>Tn(p,h,_,x);let u=!1;r==="post"?o.scheduler=p=>{p.i=h,Ft(p,h&&h.suspense)}:r!=="sync"&&(u=!0,o.scheduler=(p,_)=>{_?p():oc(p)}),o.augmentJob=p=>{e&&(p.flags|=4),u&&(p.flags|=2,h&&(p.id=h.uid,p.i=h))};const f=up(n,e,o);return gr&&(c?c.push(f):l&&f()),f}function xp(n,e,t){const i=this.proxy,s=vt(n)?n.includes(".")?cf(i,n):()=>i[n]:n.bind(i,i);let r;Ve(e)?r=e:(r=e.handler,t=e);const a=Sr(this),o=lf(s,r.bind(i),t);return a(),o}function cf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Mp=Symbol("_vte"),Fo=n=>n.__isTeleport,sa=Symbol("_leaveCb");function yp(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==An){e=t;break}}return e}function uf(n){if(!ac(n))return Fo(n.type)&&n.children?yp(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ve(t.default))return t.default()}}function nr(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;nr(Fo(t.type)&&uf(t)||t,e)}else if(n.shapeFlag&128){const t=n.suspense;if(t){const i=t.isHydrating?t.pendingBranch:t.activeBranch;i&&nr(i,e.clone(i))}else n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)}else if(n.transition=e,n.type===mt&&Ue(n.children)){const t=xf(n.children,!1);t&&nr(t,e)}}function Qa(n){if(n.component)return Qa(n.component.subTree);if(n.type===mt){const e=Ue(n.children)&&xf(n.children,!1);return e?Qa(e):void 0}if(n.type!==An)return n}function Sp(n,e){return Ve(n)?bt({name:n.name},e,{setup:n}):n}function hf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function $c(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const xo=new WeakMap;function ir(n,e,t,i,s=!1){if(Ue(n)){n.forEach((x,m)=>ir(x,e&&(Ue(e)?e[m]:e),t,i,s));return}if(sr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ir(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?zo(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,h=o.refs===ut?o.refs={}:o.refs,u=o.setupState,f=st(u),p=u===ut?wh:x=>$c(h,x)?!1:et(f,x),_=(x,m)=>!(m&&$c(h,m));if(c!=null&&c!==l){if(Kc(e),vt(c))h[c]=null,p(c)&&(u[c]=null);else if(Nt(c)){const x=e;_(c,x.k)&&(c.value=null),x.k&&(h[x.k]=null)}}if(Ve(l))yr(l,o,12,[a,h]);else{const x=vt(l),m=Nt(l);if(x||m){const d=()=>{if(n.f){const A=x?p(l)?u[l]:h[l]:_()||!n.k?l.value:h[n.k];if(s)Ue(A)&&Kl(A,r);else if(Ue(A))A.includes(r)||A.push(r);else if(x)h[l]=[r],p(l)&&(u[l]=h[l]);else{const b=[r];_(l,n.k)&&(l.value=b),n.k&&(h[n.k]=b)}}else x?(h[l]=a,p(l)&&(u[l]=a)):m&&(_(l,n.k)&&(l.value=a),n.k&&(h[n.k]=a))};if(a){const A=()=>{d(),xo.delete(n)};A.id=-1,xo.set(n,A),Ft(A,t)}else Kc(n),d()}}}function Kc(n){const e=xo.get(n);e&&(e.flags|=8,xo.delete(n))}Uo().requestIdleCallback;Uo().cancelIdleCallback;const sr=n=>!!n.type.__asyncLoader,ac=n=>n.type.__isKeepAlive;function Ep(n,e){ff(n,"a",e)}function bp(n,e){ff(n,"da",e)}function ff(n,e,t=zt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(dr(e,i,t),t){let s=t.parent;for(;s&&s.parent;)ac(s.parent.vnode)&&Tp(i,e,t,s),s=s.parent}}function Tp(n,e,t,i){const s=dr(e,n,i,!0),r=dr("um",()=>Kl(i[e],s),t);r.flags=16}function dr(n,e,t=zt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{Bn();const o=Sr(t),l=Tn(e,t,n,a);return o(),kn(),l});return i?s.unshift(r):s.push(r),r}}const oi=n=>(e,t=zt)=>{(!gr||n==="sp")&&dr(n,(...i)=>e(...i),t)},Ap=oi("bm"),df=oi("m"),wp=oi("bu"),Rp=oi("u"),pf=oi("bum"),Cp=oi("um"),Pp=oi("sp"),Lp=oi("rtg"),Ip=oi("rtc");function Dp(n,e=zt){dr("ec",n,e)}const Up=Symbol.for("v-ndc");function Wn(n,e,t,i){let s;const r=t,a=Ue(n);if(a||vt(n)){const o=a&&yi(n);let l=!1,c=!1;o&&(l=!fn(n),c=zn(n),n=No(n)),s=new Array(n.length);for(let h=0,u=n.length;h<u;h++)s[h]=e(l?c?Ti(pn(n[h])):pn(n[h]):n[h],h,void 0,r)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)s=[];else{s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(ct(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const h=o[l];s[l]=e(n[h],h,l,r)}}else s=[];return s}const el=n=>n?Of(n)?zo(n):el(n.parent):null,rr=bt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>el(n.parent),$root:n=>el(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>gf(n),$forceUpdate:n=>n.f||(n.f=()=>{oc(n.update)}),$nextTick:n=>n.n||(n.n=tf.bind(n.proxy)),$watch:n=>xp.bind(n)}),ra=(n,e)=>n!==ut&&!n.__isScriptSetup&&et(n,e),Np={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const f=a[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ra(i,e))return a[e]=1,i[e];if(s!==ut&&et(s,e))return a[e]=2,s[e];if(et(r,e))return a[e]=3,r[e];if(t!==ut&&et(t,e))return a[e]=4,t[e];tl&&(a[e]=0)}}const c=rr[e];let h,u;if(c)return e==="$attrs"&&Ut(n.attrs,"get",""),c(n);if((h=o.__cssModules)&&(h=h[e]))return h;if(t!==ut&&et(t,e))return a[e]=4,t[e];if(u=l.config.globalProperties,et(u,e))return u[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ra(s,e)?(s[e]=t,!0):i!==ut&&et(i,e)?(i[e]=t,!0):et(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==ut&&o[0]!=="$"&&et(n,o)||ra(e,o)||et(r,o)||et(i,o)||et(rr,o)||et(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:et(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Zc(n){return Ue(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let tl=!0;function Op(n){const e=gf(n),t=n.proxy,i=n.ctx;tl=!1,e.beforeCreate&&Jc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:h,beforeMount:u,mounted:f,beforeUpdate:p,updated:_,activated:x,deactivated:m,beforeDestroy:d,beforeUnmount:A,destroyed:b,unmounted:T,render:F,renderTracked:I,renderTriggered:R,errorCaptured:z,serverPrefetch:ce,expose:v,inheritAttrs:E,components:$,directives:q,filters:Q}=e;if(c&&Fp(c,i,null),a)for(const ie in a){const H=a[ie];Ve(H)&&(i[ie]=H.bind(t))}if(s){const ie=s.call(t,t);ct(ie)&&(n.data=ic(ie))}if(tl=!0,r)for(const ie in r){const H=r[ie],me=Ve(H)?H.bind(t,t):Ve(H.get)?H.get.bind(t,t):On,ae=!Ve(H)&&Ve(H.set)?H.set.bind(t):On,L=en({get:me,set:ae});Object.defineProperty(i,ie,{enumerable:!0,configurable:!0,get:()=>L.value,set:Le=>L.value=Le})}if(o)for(const ie in o)mf(o[ie],i,t,ie);if(l){const ie=Ve(l)?l.call(t):l;Reflect.ownKeys(ie).forEach(H=>{gp(H,ie[H])})}h&&Jc(h,n,"c");function V(ie,H){Ue(H)?H.forEach(me=>ie(me.bind(t))):H&&ie(H.bind(t))}if(V(Ap,u),V(df,f),V(wp,p),V(Rp,_),V(Ep,x),V(bp,m),V(Dp,z),V(Ip,I),V(Lp,R),V(pf,A),V(Cp,T),V(Pp,ce),Ue(v))if(v.length){const ie=n.exposed||(n.exposed={});v.forEach(H=>{Object.defineProperty(ie,H,{get:()=>t[H],set:me=>t[H]=me,enumerable:!0})})}else n.exposed||(n.exposed={});F&&n.render===On&&(n.render=F),E!=null&&(n.inheritAttrs=E),$&&(n.components=$),q&&(n.directives=q),ce&&hf(n)}function Fp(n,e,t=On){Ue(n)&&(n=nl(n));for(const i in n){const s=n[i];let r;ct(s)?"default"in s?r=oo(s.from||i,s.default,!0):r=oo(s.from||i):r=oo(s),Nt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function Jc(n,e,t){Tn(Ue(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function mf(n,e,t,i){let s=i.includes(".")?cf(t,i):()=>t[i];if(vt(n)){const r=e[n];Ve(r)&&tr(s,r)}else if(Ve(n))tr(s,n.bind(t));else if(ct(n))if(Ue(n))n.forEach(r=>mf(r,e,t,i));else{const r=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(r)&&tr(s,r,n)}}function gf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Mo(l,c,a,!0)),Mo(l,e,a)),ct(e)&&r.set(e,l),l}function Mo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Mo(n,r,t,!0),s&&s.forEach(a=>Mo(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Bp[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Bp={data:Qc,props:eu,emits:eu,methods:js,computed:js,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:js,directives:js,watch:zp,provide:Qc,inject:kp};function Qc(n,e){return e?n?function(){return bt(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function kp(n,e){return js(nl(n),nl(e))}function nl(n){if(Ue(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ot(n,e){return n?[...new Set([].concat(n,e))]:e}function js(n,e){return n?bt(Object.create(null),n,e):e}function eu(n,e){return n?Ue(n)&&Ue(e)?[...new Set([...n,...e])]:bt(Object.create(null),Zc(n),Zc(e??{})):e}function zp(n,e){if(!n)return e;if(!e)return n;const t=bt(Object.create(null),n);for(const i in e)t[i]=Ot(n[i],e[i]);return t}function _f(){return{app:null,config:{isNativeTag:wh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hp=0;function Vp(n,e){return function(i,s=null){Ve(i)||(i=bt({},i)),s!=null&&!ct(s)&&(s=null);const r=_f(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:Hp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:ym,get config(){return r.config},set config(h){},use(h,...u){return a.has(h)||(h&&Ve(h.install)?(a.add(h),h.install(c,...u)):Ve(h)&&(a.add(h),h(c,...u))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,u){return u?(r.components[h]=u,c):r.components[h]},directive(h,u){return u?(r.directives[h]=u,c):r.directives[h]},mount(h,u,f){if(!l){const p=c._ceVNode||si(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,h,f),l=!0,c._container=h,h.__vue_app__=c,zo(p.component)}},onUnmount(h){o.push(h)},unmount(){l&&(Tn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,u){return r.provides[h]=u,c},runWithContext(h){const u=ys;ys=c;try{return h()}finally{ys=u}}};return c}}let ys=null;const Gp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${En(e)}Modifiers`]||n[`${Qi(e)}Modifiers`];function Wp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ut;let s=t;const r=e.startsWith("update:"),a=r&&Gp(i,e.slice(7));a&&(a.trim&&(s=t.map(h=>vt(h)?h.trim():h)),a.number&&(s=s.map(Mr)));let o,l=i[o=Jo(e)]||i[o=Jo(En(e))];!l&&r&&(l=i[o=Jo(Qi(e))]),l&&Tn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Tn(c,n,6,s)}}const Xp=new WeakMap;function vf(n,e,t=!1){const i=t?Xp:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Ve(n)){const l=c=>{const h=vf(c,e,!0);h&&(o=!0,bt(a,h))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(ct(n)&&i.set(n,null),null):(Ue(r)?r.forEach(l=>a[l]=null):bt(a,r),ct(n)&&i.set(n,a),a)}function Bo(n,e){return!n||!Lo(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),et(n,e[0].toLowerCase()+e.slice(1))||et(n,Qi(e))||et(n,e))}function tu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:h,props:u,data:f,setupState:p,ctx:_,inheritAttrs:x}=n,m=vo(n);let d,A;try{if(t.shapeFlag&4){const T=s||i,F=T;d=Ln(c.call(F,T,h,u,p,f,_)),A=o}else{const T=e;d=Ln(T.length>1?T(u,{attrs:o,slots:a,emit:l}):T(u,null)),A=e.props?o:qp(o)}}catch(T){$i.length=0,Oo(T,n,1),d=si(An)}let b=d;if(A&&x!==!1){const T=Object.keys(A),{shapeFlag:F}=b;T.length&&F&7&&(r&&T.some(Io)&&(A=Yp(A,r)),b=ws(b,A,!1,!0))}if(t.dirs&&(b=ws(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition){const T=Fo(b.type)&&uf(b)||b;nr(T,t.transition)}return d=b,vo(m),d}function xf(n,e=!0){let t;for(let i=0;i<n.length;i++){const s=n[i];if(uc(s)){if(s.type!==An||s.children==="v-if"){if(t)return;t=s}}else return}return t}const qp=n=>{let e;for(const t in n)(t==="class"||t==="style"||Lo(t))&&((e||(e={}))[t]=n[t]);return e},Yp=(n,e)=>{const t={};for(const i in n)(!Io(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function jp(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?nu(i,a,c):!!a;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const f=h[u];if(Mf(a,i,f)&&!Bo(c,f))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?nu(i,a,c):!0:!!a;return!1}function nu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!et(n,r)||Mf(e,n,r)&&!Bo(t,r))return!0}return!1}function Mf(n,e,t){const i=n[t],s=e[t];return t==="style"&&ct(i)&&ct(s)?!bi(i,s):i!==s}function $p({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const yf={},Sf=()=>Object.create(yf),Ef=n=>Object.getPrototypeOf(n)===yf;function Kp(n,e,t,i=!1){const s={},r=Sf();n.propsDefaults=Object.create(null),bf(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:ip(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Zp(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=st(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let f=h[u];if(Bo(n.emitsOptions,f))continue;const p=e[f];if(l)if(et(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const _=En(f);s[_]=il(l,o,_,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{bf(n,e,s,r)&&(c=!0);let h;for(const u in o)(!e||!et(e,u)&&((h=Qi(u))===u||!et(e,h)))&&(l?t&&(t[u]!==void 0||t[h]!==void 0)&&(s[u]=il(l,o,u,void 0,n,!0)):delete s[u]);if(r!==o)for(const u in r)(!e||!et(e,u))&&(delete r[u],c=!0)}c&&ei(n.attrs,"set","")}function bf(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Js(l))continue;const c=e[l];let h;s&&et(s,h=En(l))?!r||!r.includes(h)?t[h]=c:(o||(o={}))[h]=c:Bo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=st(t),c=o||ut;for(let h=0;h<r.length;h++){const u=r[h];t[u]=il(s,l,u,c[u],n,!et(c,u))}}return a}function il(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=et(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ve(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const h=Sr(s);i=c[t]=l.call(null,e),h()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Qi(t))&&(i=!0))}return i}const Jp=new WeakMap;function Tf(n,e,t=!1){const i=t?Jp:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Ve(n)){const h=u=>{l=!0;const[f,p]=Tf(u,e,!0);bt(a,f),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return ct(n)&&i.set(n,Wi),Wi;if(Ue(r))for(let h=0;h<r.length;h++){const u=En(r[h]);iu(u)&&(a[u]=ut)}else if(r)for(const h in r){const u=En(h);if(iu(u)){const f=r[h],p=a[u]=Ue(f)||Ve(f)?{type:f}:bt({},f),_=p.type;let x=!1,m=!0;if(Ue(_))for(let d=0;d<_.length;++d){const A=_[d],b=Ve(A)&&A.name;if(b==="Boolean"){x=!0;break}else b==="String"&&(m=!1)}else x=Ve(_)&&_.name==="Boolean";p[0]=x,p[1]=m,(x||et(p,"default"))&&o.push(u)}}const c=[a,o];return ct(n)&&i.set(n,c),c}function iu(n){return n[0]!=="$"&&!Js(n)}const lc=n=>n==="_"||n==="_ctx"||n==="$stable",cc=n=>Ue(n)?n.map(Ln):[Ln(n)],Qp=(n,e,t)=>{if(e._n)return e;const i=mp((...s)=>cc(e(...s)),t);return i._c=!1,i},Af=(n,e,t)=>{const i=n._ctx;for(const s in n){if(lc(s))continue;const r=n[s];if(Ve(r))e[s]=Qp(s,r,i);else if(r!=null){const a=cc(r);e[s]=()=>a}}},wf=(n,e)=>{const t=cc(e);n.slots.default=()=>t},Rf=(n,e,t)=>{for(const i in e)(t||!lc(i))&&(n[i]=e[i])},em=(n,e,t)=>{const i=n.slots=Sf();if(n.vnode.shapeFlag&32){const s=e._;s?(Rf(i,e,t),t&&Ih(i,"_",s,!0)):Af(e,i)}else e&&wf(n,e)},tm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=ut;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:Rf(s,e,t):(r=!e.$stable,Af(e,s)),a=e}else e&&(wf(n,e),a={default:1});if(r)for(const o in s)!lc(o)&&a[o]==null&&delete s[o]},Ft=am;function nm(n){return im(n)}function im(n,e){const t=Uo();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:f,setScopeId:p=On,insertStaticContent:_}=n,x=(w,C,y,se=null,Y=null,J=null,ne=void 0,re=null,ee=!!C.dynamicChildren)=>{if(w===C)return;w&&!zs(w,C)&&(se=ve(w),Le(w,Y,J,!0),w=null),C.patchFlag===-2&&(ee=!1,C.dynamicChildren=null),C.dynamicChildren&&w&&w.dynamicChildren&&w.dynamicChildren.hasOnce&&(C.dynamicChildren===Wi&&(C.dynamicChildren=[]),C.dynamicChildren.hasOnce=!0);const{type:M,ref:g,shapeFlag:P}=C;switch(M){case ko:m(w,C,y,se);break;case An:d(w,C,y,se);break;case aa:w==null&&A(C,y,se,ne);break;case mt:$(w,C,y,se,Y,J,ne,re,ee);break;default:P&1?F(w,C,y,se,Y,J,ne,re,ee):P&6?q(w,C,y,se,Y,J,ne,re,ee):(P&64||P&128)&&M.process(w,C,y,se,Y,J,ne,re,ee,Ie)}g!=null&&Y?ir(g,w&&w.ref,J,C||w,!C):g==null&&w&&w.ref!=null&&ir(w.ref,null,J,w,!0)},m=(w,C,y,se)=>{if(w==null)i(C.el=o(C.children),y,se);else{const Y=C.el=w.el;C.children!==w.children&&c(Y,C.children)}},d=(w,C,y,se)=>{w==null?i(C.el=l(C.children||""),y,se):C.el=w.el},A=(w,C,y,se)=>{[w.el,w.anchor]=_(w.children,C,y,se,w.el,w.anchor)},b=({el:w,anchor:C},y,se)=>{let Y;for(;w&&w!==C;)Y=f(w),i(w,y,se),w=Y;i(C,y,se)},T=({el:w,anchor:C})=>{let y;for(;w&&w!==C;)y=f(w),s(w),w=y;s(C)},F=(w,C,y,se,Y,J,ne,re,ee)=>{if(C.type==="svg"?ne="svg":C.type==="math"&&(ne="mathml"),w==null)I(C,y,se,Y,J,ne,re,ee);else{const M=w.el&&w.el._isVueCE?w.el:null;try{M&&M._beginPatch(),ce(w,C,Y,J,ne,re,ee)}finally{M&&M._endPatch()}}},I=(w,C,y,se,Y,J,ne,re)=>{let ee,M;const{props:g,shapeFlag:P,transition:B,dirs:Z}=w;if(ee=w.el=a(w.type,J,g&&g.is,g),P&8?h(ee,w.children):P&16&&z(w.children,ee,null,se,Y,oa(w,J),ne,re),Z&&Li(w,null,se,"created"),R(ee,w,w.scopeId,ne,se),g){for(const de in g)de!=="value"&&!Js(de)&&r(ee,de,null,g[de],J,se);"value"in g&&r(ee,"value",null,g.value,J),(M=g.onVnodeBeforeMount)&&wn(M,se,w)}Z&&Li(w,null,se,"beforeMount");const X=sm(Y,B);X?B.beforeEnter(ee):B&&!B.persisted&&(ee[om]=!0),i(ee,C,y),((M=g&&g.onVnodeMounted)||X||Z)&&Ft(()=>{try{M&&wn(M,se,w),X&&B.enter(ee),Z&&Li(w,null,se,"mounted")}finally{}},Y)},R=(w,C,y,se,Y)=>{if(y&&p(w,y),se)for(let J=0;J<se.length;J++)p(w,se[J]);if(Y){let J=Y.subTree;if(C===J||Lf(J.type)&&(J.ssContent===C||J.ssFallback===C)){const ne=Y.vnode;R(w,ne,ne.scopeId,ne.slotScopeIds,Y.parent)}}},z=(w,C,y,se,Y,J,ne,re,ee=0)=>{for(let M=ee;M<w.length;M++){const g=w[M]=re?Qn(w[M]):Ln(w[M]);x(null,g,C,y,se,Y,J,ne,re)}},ce=(w,C,y,se,Y,J,ne)=>{const re=C.el=w.el;let{patchFlag:ee,dynamicChildren:M,dirs:g}=C;ee|=w.patchFlag&16;const P=w.props||ut,B=C.props||ut;let Z;if(y&&Ii(y,!1),(Z=B.onVnodeBeforeUpdate)&&wn(Z,y,C,w),g&&Li(C,w,y,"beforeUpdate"),y&&Ii(y,!0),M&&(!w.dynamicChildren||w.dynamicChildren.length!==M.length)&&(ee=0,ne=!1,M=null),(P.innerHTML&&B.innerHTML==null||P.textContent&&B.textContent==null)&&h(re,""),M?v(w.dynamicChildren,M,re,y,se,oa(C,Y),J):ne||H(w,C,re,null,y,se,oa(C,Y),J,!1),ee>0){if(ee&16)E(re,P,B,y,Y);else if(ee&2&&P.class!==B.class&&r(re,"class",null,B.class,Y),ee&4&&r(re,"style",P.style,B.style,Y),ee&8){const X=C.dynamicProps;for(let de=0;de<X.length;de++){const ue=X[de],fe=P[ue],De=B[ue];(De!==fe||ue==="value")&&r(re,ue,fe,De,Y,y)}}ee&1&&w.children!==C.children&&h(re,C.children)}else!ne&&M==null&&E(re,P,B,y,Y);((Z=B.onVnodeUpdated)||g)&&Ft(()=>{Z&&wn(Z,y,C,w),g&&Li(C,w,y,"updated")},se)},v=(w,C,y,se,Y,J,ne)=>{for(let re=0;re<C.length;re++){const ee=w[re],M=C[re],g=ee.el||or(ee),P=g&&(ee.type===mt||!zs(ee,M)||ee.shapeFlag&198)?u(g):y;x(ee,M,P,null,se,Y,J,ne,!0)}},E=(w,C,y,se,Y)=>{if(C!==y){if(C!==ut)for(const J in C)!Js(J)&&!(J in y)&&r(w,J,C[J],null,Y,se);for(const J in y){if(Js(J))continue;const ne=y[J],re=C[J];ne!==re&&J!=="value"&&r(w,J,re,ne,Y,se)}"value"in y&&r(w,"value",C.value,y.value,Y)}},$=(w,C,y,se,Y,J,ne,re,ee)=>{const M=C.el=w?w.el:o(""),g=C.anchor=w?w.anchor:o("");let{patchFlag:P,dynamicChildren:B,slotScopeIds:Z}=C;Z&&(re=re?re.concat(Z):Z),w==null?(i(M,y,se),i(g,y,se),z(C.children||[],y,g,Y,J,ne,re,ee)):P>0&&P&64&&B&&w.dynamicChildren&&w.dynamicChildren.length===B.length?(v(w.dynamicChildren,B,y,Y,J,ne,re),(C.key!=null||Y&&C===Y.subTree)&&Cf(w,C,!0)):H(w,C,y,g,Y,J,ne,re,ee)},q=(w,C,y,se,Y,J,ne,re,ee)=>{C.slotScopeIds=re,w==null?C.shapeFlag&512?Y.ctx.activate(C,y,se,ne,ee):Q(C,y,se,Y,J,ne,ee):le(w,C,ee)},Q=(w,C,y,se,Y,J,ne)=>{const re=w.component=pm(w,se,Y);if(ac(w)&&(re.ctx.renderer=Ie),gm(re,!1,ne),re.asyncDep){if(Y&&Y.registerDep(re,V,ne,J),!w.el){const ee=re.subTree=si(An);d(null,ee,C,y),w.placeholder=ee.el}}else V(re,w,C,y,Y,J,ne)},le=(w,C,y)=>{const se=C.component=w.component;if(jp(w,C,y))if(se.asyncDep&&!se.asyncResolved){C.el=w.el,C.placeholder=w.placeholder,ie(se,C,y);return}else se.next=C,se.update();else C.el=w.el,C.placeholder=w.placeholder,se.vnode=C},V=(w,C,y,se,Y,J,ne)=>{const re=()=>{if(w.isMounted){let{next:P,bu:B,u:Z,parent:X,vnode:de}=w;{const Me=Pf(w);if(Me){P&&(P.el=de.el,ie(w,P,ne)),Me.asyncDep.then(()=>{const Ce=()=>{w.job.flags&8||(Y&&Y.pendingBranch?Ft(Ce,Y):M())};Ce.flags=48,Ft(Ce,Y)});return}}let ue=P,fe;Ii(w,!1),P?(P.el=de.el,ie(w,P,ne)):P=de,B&&ro(B),(fe=P.props&&P.props.onVnodeBeforeUpdate)&&wn(fe,X,P,de),Ii(w,!0);const De=tu(w),he=w.subTree;w.subTree=De,x(he,De,u(he.el||or(he)),ve(he),w,Y,J),P.el=De.el,ue===null&&$p(w,De.el),Z&&Ft(Z,Y),(fe=P.props&&P.props.onVnodeUpdated)&&Ft(()=>wn(fe,X,P,de),Y)}else{let P;const{el:B,props:Z}=C,{bm:X,m:de,parent:ue,root:fe,type:De}=w,he=sr(C);Ii(w,!1),X&&ro(X),!he&&(P=Z&&Z.onVnodeBeforeMount)&&wn(P,ue,C),Ii(w,!0);{fe.ce&&fe.ce._hasShadowRoot()&&fe.ce._injectChildStyle(De,w.parent?w.parent.type:void 0);const Me=w.subTree=tu(w);x(null,Me,y,se,w,Y,J),C.el=Me.el}if(de&&Ft(de,Y),!he&&(P=Z&&Z.onVnodeMounted)){const Me=C;Ft(()=>wn(P,ue,Me),Y)}(C.shapeFlag&256||ue&&sr(ue.vnode)&&ue.vnode.shapeFlag&256)&&w.a&&Ft(w.a,Y),w.isMounted=!0,C=y=se=null}};w.scope.on();const ee=w.effect=new Fh(re);w.scope.off();const M=w.update=ee.run.bind(ee),g=w.job=ee.runIfDirty.bind(ee);g.i=w,g.id=w.uid,ee.scheduler=()=>oc(g),Ii(w,!0),M()},ie=(w,C,y)=>{C.component=w;const se=w.vnode.props;w.vnode=C,w.next=null,Zp(w,C.props,se,y),tm(w,C.children,y),Bn(),sf(w),kn()},H=(w,C,y,se,Y,J,ne,re,ee=!1)=>{const M=w&&w.children,g=w?w.shapeFlag:0,P=C.children,{patchFlag:B,shapeFlag:Z}=C;if(B>0){if(B&128){ae(M,P,y,se,Y,J,ne,re,ee);return}else if(B&256){me(M,P,y,se,Y,J,ne,re,ee);return}}Z&8?(g&16&&_e(M,Y,J),P!==M&&h(y,P)):g&16?Z&16?ae(M,P,y,se,Y,J,ne,re,ee):_e(M,Y,J,!0):(g&8&&h(y,""),Z&16&&z(P,y,se,Y,J,ne,re,ee))},me=(w,C,y,se,Y,J,ne,re,ee)=>{w=w||Wi,C=C||Wi;const M=w.length,g=C.length,P=Math.min(M,g);let B;for(B=0;B<P;B++){const Z=C[B]=ee?Qn(C[B]):Ln(C[B]);x(w[B],Z,y,null,Y,J,ne,re,ee)}M>g?_e(w,Y,J,!0,!1,P):z(C,y,se,Y,J,ne,re,ee,P)},ae=(w,C,y,se,Y,J,ne,re,ee)=>{let M=0;const g=C.length;let P=w.length-1,B=g-1;for(;M<=P&&M<=B;){const Z=w[M],X=C[M]=ee?Qn(C[M]):Ln(C[M]);if(zs(Z,X))x(Z,X,y,null,Y,J,ne,re,ee);else break;M++}for(;M<=P&&M<=B;){const Z=w[P],X=C[B]=ee?Qn(C[B]):Ln(C[B]);if(zs(Z,X))x(Z,X,y,null,Y,J,ne,re,ee);else break;P--,B--}if(M>P){if(M<=B){const Z=B+1,X=Z<g?C[Z].el:se;for(;M<=B;)x(null,C[M]=ee?Qn(C[M]):Ln(C[M]),y,X,Y,J,ne,re,ee),M++}}else if(M>B)for(;M<=P;)Le(w[M],Y,J,!0),M++;else{const Z=M,X=M,de=new Map;for(M=X;M<=B;M++){const ge=C[M]=ee?Qn(C[M]):Ln(C[M]);ge.key!=null&&de.set(ge.key,M)}let ue,fe=0;const De=B-X+1;let he=!1,Me=0;const Ce=new Array(De);for(M=0;M<De;M++)Ce[M]=0;for(M=Z;M<=P;M++){const ge=w[M];if(fe>=De){Le(ge,Y,J,!0);continue}let ke;if(ge.key!=null)ke=de.get(ge.key);else for(ue=X;ue<=B;ue++)if(Ce[ue-X]===0&&zs(ge,C[ue])){ke=ue;break}ke===void 0?Le(ge,Y,J,!0):(Ce[ke-X]=M+1,ke>=Me?Me=ke:he=!0,x(ge,C[ke],y,null,Y,J,ne,re,ee),fe++)}const Ne=he?rm(Ce):Wi;for(ue=Ne.length-1,M=De-1;M>=0;M--){const ge=X+M,ke=C[ge],ze=C[ge+1],ot=ge+1<g?ze.el||or(ze):se;Ce[M]===0?x(null,ke,y,ot,Y,J,ne,re,ee):he&&(ue<0||M!==Ne[ue]?L(ke,y,ot,2):ue--)}}},L=(w,C,y,se,Y=null)=>{const{el:J,type:ne,transition:re,children:ee,shapeFlag:M}=w;if(M&6){L(w.component.subTree,C,y,se);return}if(M&128){w.suspense.move(C,y,se);return}if(M&64){ne.move(w,C,y,Ie);return}if(ne===mt){i(J,C,y);for(let P=0;P<ee.length;P++)L(ee[P],C,y,se);i(w.anchor,C,y);return}if(ne===aa){b(w,C,y);return}if(se!==2&&M&1&&re)if(se===0)re.persisted&&!J[sa]?i(J,C,y):(re.beforeEnter(J),i(J,C,y),Ft(()=>re.enter(J),Y));else{const{leave:P,delayLeave:B,afterLeave:Z}=re,X=()=>{w.ctx.isUnmounted?s(J):i(J,C,y)},de=()=>{const ue=J._isLeaving||!!J[sa];J._isLeaving&&J[sa](!0),re.persisted&&!ue?X():P(J,()=>{X(),Z&&Z()})};B?B(J,X,de):de()}else i(J,C,y)},Le=(w,C,y,se=!1,Y=!1)=>{const{type:J,props:ne,ref:re,children:ee,dynamicChildren:M,shapeFlag:g,patchFlag:P,dirs:B,cacheIndex:Z,memo:X}=w;if((P===-2||M&&M.hasOnce)&&(Y=!1),re!=null&&(Bn(),ir(re,null,y,w,!0),kn()),Z!=null&&(!w.ctx||w.ctx===C)&&(C.renderCache[Z]=void 0),g&256&&C.ctx.deactivate(w))return;const de=g&1&&B,ue=!sr(w);let fe;if(ue&&(fe=ne&&ne.onVnodeBeforeUnmount)&&wn(fe,C,w),g&6)K(w.component,y,se);else{if(g&128){w.suspense.unmount(y,se);return}de&&Li(w,null,C,"beforeUnmount"),g&64?w.type.remove(w,C,y,Ie,se):M&&!M.hasOnce&&(J!==mt||P>0&&P&64)?_e(M,C,y,!1,!0):(J===mt&&P&384||!Y&&g&16)&&_e(ee,C,y),se&&Ye(w)}const De=X!=null&&Z==null;(ue&&(fe=ne&&ne.onVnodeUnmounted)||de||De)&&Ft(()=>{fe&&wn(fe,C,w),de&&Li(w,null,C,"unmounted"),De&&(w.el=null)},y)},Ye=w=>{const{type:C,el:y,anchor:se,transition:Y}=w,J=C===mt;if(J&&!Y){D(y,se);return}if(C===aa){T(w),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave();return}const ne=J?Qa(w):w,re=()=>{J?u(y)&&D(y,se):s(y),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(ne&&ne.shapeFlag&1&&Y&&!Y.persisted){const{leave:ee,delayLeave:M}=Y,g=ne.el,P=()=>ee(g,re);M?M(g,re,P):P()}else re()},D=(w,C)=>{let y;for(;w!==C;)y=f(w),s(w),w=y;s(C)},K=(w,C,y)=>{const{bum:se,scope:Y,job:J,subTree:ne,um:re,m:ee,a:M}=w;su(ee),su(M),se&&ro(se),Y.stop(),J?(J.flags|=8,Le(ne,w,C,y)):ne&&(ne.transition=w.vnode.transition,Le(ne,w,C,y)),re&&Ft(re,C);const g=()=>{w.isUnmounted=!0};g.flags=16,Ft(g,C)},_e=(w,C,y,se=!1,Y=!1,J=0)=>{for(let ne=J;ne<w.length;ne++)Le(w[ne],C,y,se,Y)},ve=w=>{if(w.shapeFlag&6)return ve(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const C=f(w.anchor||w.el),y=C&&C[Mp];return y?f(y):C},Be=(w,C,y)=>{const se=w&&C._vnode?void 0:w&&w.component?w.component.uid:dm();pp(()=>{w==null?C._vnode&&Le(C._vnode,null,null,!0):x(C._vnode||null,w,C,null,null,null,y),C._vnode=w},se)},Ie={p:x,um:Le,m:L,r:Ye,mt:Q,mc:z,pc:H,pbc:v,n:ve,o:n};return{render:Be,hydrate:void 0,createApp:Vp(Be)}}function oa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ii({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function sm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Cf(n,e,t=!1){const i=n.children,s=e.children;if(Ue(i)&&Ue(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Qn(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&Cf(a,o)),o.type===ko&&(o.patchFlag===-1&&(o=s[r]=Qn(o)),o.el=a.el),o.type===An&&!o.el&&(o.el=a.el)}}function rm(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function Pf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pf(e)}function su(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function or(n){if(n.placeholder)return n.placeholder;const e=n.component;if(e)return or(e.subTree);const t=n.suspense;return t&&t.activeBranch?or(t.activeBranch):null}const Lf=n=>n.__isSuspense,om=Symbol("_deferredEnter");function am(n,e){e&&e.pendingBranch?Ue(n)?e.effects.push(...n):e.effects.push(n):dp(n)}const mt=Symbol.for("v-fgt"),ko=Symbol.for("v-txt"),An=Symbol.for("v-cmt"),aa=Symbol.for("v-stc"),$i=[];let nn=null;function Ge(n=!1){$i.push(nn=n?null:[])}function If(){$i.pop(),nn=$i[$i.length-1]||null}let pr=1;function ru(n,e=!1){pr+=n,n<0&&nn&&e&&(nn.hasOnce=!0)}function Df(n){return n.dynamicChildren=pr>0?nn||Wi:null,If(),pr>0&&nn&&nn.push(n),n}function We(n,e,t,i,s,r){return Df(G(n,e,t,i,s,r,!0))}function lm(n,e,t,i,s){return Df(si(n,e,t,i,s,!0))}function uc(n){return n?n.__v_isVNode===!0:!1}function zs(n,e){return n.type===e.type&&n.key===e.key}const Uf=({key:n})=>n??null,ao=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?vt(n)||Nt(n)||Ve(n)?{i:un,r:n,k:e,f:!!t}:n:null);function G(n,e=null,t=null,i=0,s=null,r=n===mt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Uf(e),ref:e&&ao(e),scopeId:af,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:un};return o?(yo(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=vt(t)?8:16),pr>0&&!a&&nn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&nn.push(l),l}const si=cm;function cm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Up)&&(n=An),uc(n)){const o=ws(n,e,!0);return t&&yo(o,t),pr>0&&!r&&nn&&(o.shapeFlag&6?nn[nn.indexOf(n)]=o:nn.push(o)),o.patchFlag=-2,o}if(Mm(n)&&(n=n.__vccOpts),e){e=um(e);let{class:o,style:l}=e;o&&!vt(o)&&(e.class=vi(o)),ct(l)&&(rc(l)&&!Ue(l)&&(l=bt({},l)),e.style=_i(l))}const a=vt(n)?1:Lf(n)?128:Fo(n)?64:ct(n)?4:Ve(n)?2:0;return G(n,e,t,i,s,a,r,!0)}function um(n){return n?rc(n)?bt({},n):Ef(n)?bt({},n[Bf]||n):n:null}function ws(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?hm(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Uf(c),ref:e&&e.ref?t&&r?Ue(r)?r.concat(ao(e)):[r,ao(e)]:ao(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==mt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ws(n.ssContent),ssFallback:n.ssFallback&&ws(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&nr(h,l.clone(h)),h}function it(n=" ",e=0){return si(ko,null,n,e)}function Lt(n="",e=!1){return e?(Ge(),lm(An,null,n)):si(An,null,n)}function Ln(n){return n==null||typeof n=="boolean"?si(An):Ue(n)?si(mt,null,n.slice()):uc(n)?Qn(n):si(ko,null,String(n))}function Qn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ws(n)}function yo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ue(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),yo(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Ef(e)?e._ctx=un:s===3&&un&&(un.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Ve(e)){if(i&65){yo(n,{default:e});return}e={default:e,_ctx:un},t=32}else e=String(e),i&64?(t=16,e=[it(e)]):t=8;n.children=e,n.shapeFlag|=t}function hm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=vi([e.class,i.class]));else if(s==="style")e.style=_i([e.style,i.style]);else if(Lo(s)){const r=e[s],a=i[s];a&&r!==a&&!(Ue(r)&&r.includes(a))?e[s]=r?[].concat(r,a):a:a==null&&r==null&&!Io(s)&&(e[s]=a)}else s!==""&&(e[s]=i[s])}return e}function wn(n,e,t,i=null){Tn(n,e,7,[t,i])}const fm=_f();let Nf=0;function dm(){return Nf}function pm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||fm,r={uid:Nf++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Oh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tf(i,s),emitsOptions:vf(i,s),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:i.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Wp.bind(null,r),n.ce&&n.ce(r),r}let zt=null;const mm=()=>zt||un;let So,mr;{const n=Uo(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};So=e("__VUE_INSTANCE_SETTERS__",t=>zt=t),mr=e("__VUE_SSR_SETTERS__",t=>gr=t)}const Sr=n=>{const e=zt;return So(n),n.scope.on(),()=>{n.scope.off(),So(e)}},ou=()=>{zt&&zt.scope.off(),So(null)};function Of(n){return n.vnode.shapeFlag&4}let gr=!1;function gm(n,e=!1,t=!1){e&&mr(e);const{props:i,children:s}=n.vnode,r=Of(n);Kp(n,i,r,e),em(n,s,t||e);const a=r?_m(n,e):void 0;return e&&mr(!1),a}function _m(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Np);const{setup:i}=t;if(i){Bn();const s=n.setupContext=i.length>1?xm(n):null,r=Sr(n),a=yr(i,n,0,[n.props,s]),o=Rh(a);if(kn(),r(),(o||n.sp)&&!sr(n)&&hf(n),o){if(a.then(ou,ou),e)return a.then(l=>{mr(!0);try{au(n,l,e)}finally{mr(!1)}}).catch(l=>{Oo(l,n,0,void 0,!0),n.ssrRender=(c,h)=>h("<!---->")});n.asyncDep=a}else au(n,a)}else Ff(n)}function au(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ct(e)&&(n.setupState=Qh(e)),Ff(n)}function Ff(n,e,t){const i=n.type;n.render||(n.render=i.render||On);{const s=Sr(n);Bn();try{Op(n)}finally{kn(),s()}}}const Bf=Symbol(),vm={get(n,e){return Ut(n,"get",""),e===Bf?n:n[e]}};function xm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,vm),slots:n.slots,emit:n.emit,expose:e}}function zo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Qh(Jh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in rr)return rr[t](n)},has(e,t){return t in e||t in rr}})):n.proxy}function Mm(n){return Ve(n)&&"__vccOpts"in n}const en=(n,e)=>lp(n,e,gr),ym="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sl;const lu=typeof window<"u"&&window.trustedTypes;if(lu)try{sl=lu.createPolicy("vue",{createHTML:n=>n})}catch{}const kf=sl?n=>sl.createHTML(n):n=>n,Sm="http://www.w3.org/2000/svg",Em="http://www.w3.org/1998/Math/MathML",Zn=typeof document<"u"?document:null,cu=Zn&&Zn.createElement("template"),bm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Zn.createElementNS(Sm,n):e==="mathml"?Zn.createElementNS(Em,n):t?Zn.createElement(n,{is:t}):Zn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Zn.createTextNode(n),createComment:n=>Zn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Zn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{cu.innerHTML=kf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=cu.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Tm=Symbol("_vtc");function Am(n,e,t){const i=n[Tm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const uu=Symbol("_vod"),wm=Symbol("_vsh"),Rm=Symbol(""),Cm=/(?:^|;)\s*display\s*:/;function Pm(n,e,t){const i=n.style,s=vt(t);let r=!1;if(t&&!s){if(e)if(vt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&$s(i,o,"")}else for(const a in e)t[a]==null&&$s(i,a,"");for(const a in t){a==="display"&&(r=!0);const o=t[a];o!=null?Im(n,a,!vt(e)&&e?e[a]:void 0,o)||$s(i,a,o):$s(i,a,"")}}else if(s){if(e!==t){const a=i[Rm];a&&(t+=";"+a),i.cssText=t,r=Cm.test(t)}}else e&&n.removeAttribute("style");uu in n&&((!s||e!==t)&&(n[uu]=r?i.display:""),n[wm]&&(i.display="none"))}const Dr=/\s*!important$/;function $s(n,e,t){if(Ue(t))t.forEach(i=>$s(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))Dr.test(t)?n.setProperty(e,t.replace(Dr,""),"important"):n.setProperty(e,t);else{const i=Lm(n,e);Dr.test(t)?n.setProperty(Qi(i),t.replace(Dr,""),"important"):n[i]=t}}const hu=["Webkit","Moz","ms"],la={};function Lm(n,e){const t=la[e];if(t)return t;let i=En(e);if(i!=="filter"&&i in n)return la[e]=i;i=Lh(i);for(let s=0;s<hu.length;s++){const r=hu[s]+i;if(r in n)return la[e]=r}return e}function Im(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&vt(i)&&t===i}const fu="http://www.w3.org/1999/xlink";function du(n,e,t,i,s,r=Nd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(fu,e.slice(6,e.length)):n.setAttributeNS(fu,e,t):t==null||r&&!Dh(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Fn(t)?String(t):t)}function pu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?kf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Dh(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Hi(n,e,t,i){n.addEventListener(e,t,i)}function Dm(n,e,t,i){n.removeEventListener(e,t,i)}const mu=Symbol("_vei");function Um(n,e,t,i,s=null){const r=n[mu]||(n[mu]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=Fm(e);if(i){const c=r[e]=zm(i,s);Hi(n,o,c,l)}else a&&(Dm(n,o,a,l),r[e]=void 0)}}const Nm=/(Once|Passive|Capture)$/,Om=/^on:?(?:Once|Passive|Capture)$/;function Fm(n){let e,t;for(;(t=n.match(Nm))&&!Om.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Qi(n.slice(2)),e]}let ca=0;const Bm=Promise.resolve(),km=()=>ca||(Bm.then(()=>ca=0),ca=Date.now());function zm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(Ue(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&Tn(c,e,5,o)}}else Tn(s,e,5,[i])};return t.value=n,t.attached=km(),t}const gu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Hm=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?Am(n,i,a):e==="style"?Pm(n,t,i):Lo(e)?Io(e)||Um(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vm(n,e,i,a))?(pu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&du(n,e,i,a,r,e!=="value")):n._isVueCE&&(Gm(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!vt(i)))?pu(n,En(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),du(n,e,i,a))};function Vm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&gu(e)&&Ve(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return gu(e)&&vt(t)?!1:e in n}function Gm(n,e){const t=n._def.props;if(!t)return!1;const i=En(e);return Array.isArray(t)?t.some(s=>En(s)===i):Object.keys(t).some(s=>En(s)===i)}const Eo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ue(e)?t=>ro(e,t):e};function Wm(n){n.target.composing=!0}function _u(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Xi=Symbol("_assign"),Ur=Symbol("_initialValue");function ua(n,e,t){return e&&(n=n.trim()),t&&(n=Mr(n)),n}const Xm={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n.parentNode&&(n.type==="text"?n[Ur]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Ur]=n.defaultValue.replace(/\r\n?/g,`
`))),n[Xi]=Eo(s);const r=i||s.props&&s.props.type==="number";Hi(n,e?"change":"input",a=>{a.target.composing||n[Xi](ua(n.value,t,r))}),(t||r)&&Hi(n,"change",()=>{n.value=ua(n.value,t,r)}),e||(Hi(n,"compositionstart",Wm),Hi(n,"compositionend",_u),Hi(n,"change",_u))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const s=e??"",r=n[Ur];delete n[Ur],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[Xi](ua(n.value,t,i)):n.value=s},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},a){if(n[Xi]=Eo(a),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?Mr(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},Nr={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,Hi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>t?Mr(bo(l)):bo(l)),r=n.multiple,a=r?Ki(n._modelValue)?new Set(s):s:s[0],o=n._pendingValue=[r,r?Ue(a)?s.slice():s:a];try{n[Xi](a)}finally{tf(()=>{n._pendingValue===o&&(n._pendingValue=void 0)})}}),n[Xi]=Eo(i)},mounted(n,{value:e,modifiers:{number:t}}){vu(n,e,t)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[Xi]=Eo(t)},updated(n,{value:e,modifiers:{number:t}}){const i=n._pendingValue;n._pendingValue=void 0,(!i||i[0]!==n.multiple||!qm(e,i[1],i[0]))&&vu(n,e,t)}};function qm(n,e,t){if(!t||Ue(n))return bi(n,e);if(Ki(n)){if(n.size!==e.length)return!1;for(const i of e)if(!n.has(i))return!1;return!0}return!1}function vu(n,e,t=!1){const i=n.multiple,s=Ue(e);if(!(i&&!s&&!Ki(e))){for(let r=0,a=n.options.length;r<a;r++){const o=n.options[r],l=bo(o);if(i)if(s){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(h=>String(h)===String(l)):o.selected=Bd(e,l)>-1}else o.selected=e.has(l)||t&&typeof l=="string"&&e.has(Mr(l));else if(bi(bo(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!i&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function bo(n){return"_value"in n?n._value:n.value}const Ym=bt({patchProp:Hm},bm);let xu;function jm(){return xu||(xu=nm(Ym))}const $m=((...n)=>{const e=jm().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Zm(i);if(!s)return;const r=e._component;!Ve(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Km(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function Km(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Zm(n){return vt(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Jm=Symbol();var Mu;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Mu||(Mu={}));function Qm(){const n=kd(!0),e=n.run(()=>qt({}));let t=[],i=[];const s=Jh({install(r){s._a=r,r.provide(Jm,s),r.config.globalProperties.$pinia=s,i.forEach(a=>t.push(a)),i=[]},use(r){return this._a?t.push(r):i.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const eg="modulepreload",tg=function(n){return"/game/royale/"+n},yu={},ng=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let a=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=a(t.map(c=>{if(c=tg(c),c in yu)return;yu[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":eg,h||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((p,_)=>{f.addEventListener("load",p),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},ha={shank:45,axe:90,shotgun:70,smg:60,body:0},Ho={gender:0,skin:2,hair:2,hairColor:0,clothes:0,color:0},Er=["#f4ceae","#dca47a","#b87953","#925739","#603c2f","#3b2b26"],Rs=["#e9bb22","#d43163","#2b9c96","#4d63cb","#d46a27","#b1aca0"],Vo=["#242028","#653b23","#d7ad52","#dd457b"],Ss=[{id:"gas",name:"LAST STOP GAS",tag:"PREMIUM FUEL. SUBSTANDARD DECISIONS."},{id:"rest",name:"REST IN PIECES",tag:"TAKE A BREAK. LEAVE A PART."},{id:"motel",name:"MOTEL NO-TELL",tag:"VACANCIES CREATED DAILY."}],tn=["torso","head","armL","armR","forearmL","forearmR","handL","handR","thighL","thighR","shinL","shinR","footL","footR"],Cs={torso:{x:0,y:1.65,w:.85,h:.9,hp:120,parent:null},head:{x:0,y:2.45,w:.6,h:.65,hp:34,parent:"torso"},armL:{x:-.57,y:1.85,w:.28,h:.5,hp:30,parent:"torso"},armR:{x:.57,y:1.85,w:.28,h:.5,hp:30,parent:"torso"},forearmL:{x:-.59,y:1.38,w:.25,h:.48,hp:24,parent:"armL"},forearmR:{x:.59,y:1.38,w:.25,h:.48,hp:24,parent:"armR"},handL:{x:-.6,y:1.08,w:.27,h:.25,hp:15,parent:"forearmL"},handR:{x:.6,y:1.08,w:.27,h:.25,hp:15,parent:"forearmR"},thighL:{x:-.25,y:.95,w:.34,h:.55,hp:36,parent:"torso"},thighR:{x:.25,y:.95,w:.34,h:.55,hp:36,parent:"torso"},shinL:{x:-.25,y:.48,w:.29,h:.5,hp:26,parent:"thighL"},shinR:{x:.25,y:.48,w:.29,h:.5,hp:26,parent:"thighR"},footL:{x:-.31,y:.12,w:.45,h:.24,hp:17,parent:"shinL"},footR:{x:.31,y:.12,w:.45,h:.24,hp:17,parent:"shinR"}},xs=(n=Ho)=>({move:0,aimX:1,aimY:0,attack:!1,jump:0,pickup:0,cycle:0,reload:0,ready:0,rematch:0,venue:0,venueChange:0,look:{...n}});function hc(n){const e=n&&typeof n=="object"?n:{},t={gender:3,skin:Er.length,hair:5,hairColor:Vo.length,clothes:3,color:Rs.length},i={...Ho};for(const s of Object.keys(t)){const r=Number(e[s]);Number.isInteger(r)&&r>=0&&r<t[s]&&(i[s]=r)}return i}function ig(n){const e=n&&typeof n=="object"?n:{},t=xs(hc(e.look));for(const i of["jump","pickup","cycle","reload","ready","rematch","venueChange"]){const s=Number(e[i]);t[i]=Number.isSafeInteger(s)&&s>=0?Math.min(s,1e7):0}return t.move=Math.max(-1,Math.min(1,Number(e.move)||0)),t.aimX=Math.max(-1,Math.min(1,Number(e.aimX)||0)),t.aimY=Math.max(-1,Math.min(1,Number(e.aimY)||0)),t.attack=e.attack===!0,t.venue=Math.max(0,Math.min(2,Math.floor(Number(e.venue)||0))),t}function _r(n){return+(n.parts.thighL>0&&n.parts.shinL>0)+ +(n.parts.thighR>0&&n.parts.shinR>0)}function Su(n,e){const t=Cs[e];return _r(n)>0?{x:t.x,y:t.y,w:t.w,h:t.h,rotation:0,length:t.h}:e.startsWith("thigh")?{x:t.x*1.5,y:.22,w:t.h,h:t.w,rotation:e.endsWith("L")?Math.PI/2:-Math.PI/2,length:t.h}:{x:t.x,y:Math.max(t.h/2+.04,t.y-1.16),w:t.w,h:t.h,rotation:0,length:t.h}}function Rn(n,e){const t=Su(n,e),i=og(n);if(!i||n.weapons[n.slot]==="body"||!n.parts.armL&&!n.parts.armR)return t;const s=i.endsWith("L")?"L":"R",r=ar(n);if(e===i)return{...t,x:r.x,y:r.y,rotation:r.angle-Math.PI/2};if(e!==`arm${s}`&&e!==`forearm${s}`)return t;const a=Su(n,`arm${s}`),o=a.x,l=a.y+.25,c=(o+r.x)/2-r.dy*.13,h=(l+r.y)/2+r.dx*.13,u=e.startsWith("forearm")?{x:c,y:h}:{x:o,y:l},f=e.startsWith("forearm")?r:{x:c,y:h},p=f.x-u.x,_=f.y-u.y,x=Math.hypot(p,_),m=Math.atan2(_,p)-Math.PI/2,d=Cs[e].w;return{x:(u.x+f.x)/2,y:(u.y+f.y)/2,w:Math.abs(Math.cos(m))*d+Math.abs(Math.sin(m))*x,h:Math.abs(Math.sin(m))*d+Math.abs(Math.cos(m))*x,rotation:m,length:x}}const sg=1.1;function rg(n){if(n.weapons[n.slot]!=="shank"||n.attacking<=0)return 0;const e=(10-n.attacking)/10;return .23*Math.max(0,e<.25?e/.25:(1-e)/.75)}function Jn(n){return _r(n)===0?.39:1.55}function Ks(n){return Math.max(...tn.filter(e=>n.parts[e]>0).map(e=>{const t=Rn(n,e);return t.y+t.h/2}),.5)}function ar(n){const e=Math.hypot(n.aimX,n.aimY),t=e>.01?n.aimX/e:n.face,i=e>.01?n.aimY/e:0,s=n.weapons[n.slot]==="shank"?.42+rg(n):.85;return{x:t*s,y:Jn(n)+i*s,angle:Math.atan2(i,t),dx:t,dy:i}}function og(n){const e=n.aimX<0?"handL":"handR",t=e==="handL"?"handR":"handL";return n.parts[e]>0?e:n.parts[t]>0?t:null}function fa(n){return[["armL","forearmL","handL"],["armR","forearmR","handR"],["thighL","shinL","footL"],["thighR","shinR","footR"]].filter(e=>e.some(t=>n.parts[t]<=0)).length}function ag(n,e){const t=[];function i(s,r,a,o,l,c,h,u=[],f=0){const p={id:e(),kind:s,x:r,y:a,w:o,h:l,material:c,hp:h,maxHp:h,fuel:c==="fuel"?1:c==="wood"||c==="fabric"?.5:0,burn:0,supports:u,falling:!1,vy:0,exploded:!1,solid:s!=="floor"&&s!=="glass"&&s!=="railing",color:f};return t.push(p),p.id}for(let s=-60;s<64;s+=8)i("floor",s,0,8,.45,"concrete",240);if(n==="gas"){for(const r of[-40,-28,-16])i("pump",r,1.7,1.8,3.4,"fuel",75);const s=[i("post",-46,3,.5,6,"metal",80),i("post",-10,3,.5,6,"metal",80)];for(let r=-43;r<-9;r+=6)i("roof",r,6.4,6,.7,"metal",100,s);for(const r of[-35,-19,27])i("can",r,.6,.7,1.2,"fuel",20);i("car",5,1.1,7,2.2,"fuel",120),i("car",45,1.1,6.5,2.2,"fuel",120),i("counter",23,1,6,2,"wood",70),i("fridge",33,1.8,2.8,3.6,"metal",85),i("glass",23,3.6,7,2.3,"glass",22),i("door",17,1.6,1.5,3.2,"wood",40),i("sign",-51,7.5,5,3,"metal",55,[i("pole",-51,3.6,.5,7.2,"metal",65)]);for(const r of[12,39,40])i("tire",r,.6,1.1,1.2,"fabric",25)}else if(n==="rest"){for(const r of[-42,-15,18])i("table",r,1,5.5,2,"wood",70),i("bench",r+5,.55,3,1.1,"wood",35);for(const r of[-30,8])i("vending",r,1.8,2.4,3.6,"metal",85);for(const r of[-50,-3,35])i("bin",r,.85,1.2,1.7,"metal",45);i("truck",44,1.7,10,3.4,"fuel",180),i("car",-4,1.1,6,2.2,"fuel",120);for(const r of[-55,27])i("sign",r,7,5,2.4,"metal",55,[i("pole",r,3.5,.45,7,"metal",60)]);i("barrier",-24,.6,4,1.2,"concrete",80),i("door",27,1.6,1.6,3.2,"wood",45);const s=[i("post",-5,2.5,.5,5,"metal",65),i("post",8,2.5,.5,5,"metal",65)];i("roof",1.5,5.2,14,.5,"metal",95,s)}else{for(const r of[-45,-23,-1,21,43]){const a=i("post",r-4.5,2.5,.5,5,"wood",60);i("balcony",r,5,11,.6,"concrete",100,[a]),i("railing",r,5.9,10.5,1.2,"metal",30),i("door",r-2,1.7,1.5,3.4,"wood",40),i("glass",r+2,2.6,2.5,1.8,"glass",20),i("mattress",r+3,.65,3.5,1.3,"fabric",40),i("tv",r,.65,1.1,1.3,"glass",25),i("ac",r+3,7,2,1.2,"metal",35,[a]),i("door",r-2,6.8,1.5,3.4,"wood",40)}i("ice",54,1.3,2.8,2.6,"metal",70);const s=i("pole",-53,5,.5,10,"metal",65);i("sign",-53,10,6.5,3.5,"metal",70,[s])}return t}const on=1/60,da=27,lg=["YOU","GUEST","BAD CREDIT","ROOM SERVICE","UNLEADED","NO REFUNDS","LAST CALL","MILD CONCERN"];class zf{constructor(e=1){ye(this,"state");this.state={version:1,frame:0,round:0,seed:77191,id:0,phase:"lobby",phaseFrame:0,venue:"gas",actors:[],props:[],shots:[],debris:[],blood:[],fires:[],pickups:[],events:[],winner:null,zoneLeft:-64,zoneRight:64,humans:Math.max(1,Math.min(2,e)),venueNonce:0,eventSeq:0},this.makeActors(),this.makeWorld()}next(){return++this.state.id}random(){let e=this.state.seed|0;return e^=e<<13,e^=e>>>17,e^=e<<5,this.state.seed=e>>>0,(e>>>0)/4294967296}makeActors(){this.state.actors=[];for(let e=0;e<8;e++){const t={...Ho,gender:e%3,skin:e%6,hair:e%5,color:e%6},i=xs(t);this.state.actors.push({id:e,name:e<this.state.humans?this.state.humans===1?"YOU":`PLAYER ${e+1}`:lg[e],human:e<this.state.humans,look:t,x:[-57,57,-48,-5,13,38,-9,30][e],y:1,vx:0,vy:0,face:e%2?-1:1,hp:100,parts:Object.fromEntries(tn.map(s=>[s,Cs[s].hp])),weapons:["shank"],durability:{...ha},slot:0,ammo:0,magazines:{shotgun:6,smg:30},reserve:90,cooldown:0,reloading:0,grounded:!1,ready:!1,last:i,drift:0,driftAt:0,death:null,deathFrame:-1,bleedOutAt:null,bleedOwner:-1,aimX:e%2?-1:1,aimY:0,attacking:0,kills:0})}}makeWorld(){this.state.props=ag(this.state.venue,()=>this.next()),this.state.shots=[],this.state.debris=[],this.state.blood=[],this.state.fires=[],this.state.pickups=[];for(let e=0;e<9;e++)this.state.pickups.push({id:this.next(),x:-52+e*13,y:1,weapon:["axe","shotgun","smg"][e%3],hp:ha[["axe","shotgun","smg"][e%3]]})}snapshot(){return JSON.parse(JSON.stringify(this.state))}restore(e){if(e.version!==1)throw new Error("Incompatible Royale state");this.state=JSON.parse(JSON.stringify(e))}event(e,t,i,s=-1,r={}){this.state.events.push({id:`${this.state.round}:${this.state.frame}:${++this.state.eventSeq}`,frame:this.state.frame,kind:e,x:t,y:i,actor:s,...r}),this.state.events.length>180&&this.state.events.shift()}startRound(){const e=this.state.actors.map(s=>({...s.look})),t=this.state.actors.map(s=>s.last),i=this.state.round+1;this.makeActors(),this.state.actors.forEach((s,r)=>{s.look=e[r],s.last=t[r],s.y=this.floorAt(s.x,100,-1)>-50?this.floorAt(s.x,100,-1):1}),this.makeWorld(),this.state.round=i,this.state.phase="match",this.state.phaseFrame=0,this.state.winner=null,this.state.zoneLeft=-64,this.state.zoneRight=64}lobby(e){for(const s of this.state.actors.filter(r=>r.human)){const r=e[s.id]??xs(s.look);JSON.stringify(s.look)!==JSON.stringify(r.look)&&(s.look={...r.look},s.ready=!1),r.ready!==s.last.ready&&(s.ready=!s.ready),s.last={...r}}const t=e[0];t&&t.venueChange!==this.state.venueNonce&&(this.state.venueNonce=t.venueChange,this.state.venue=Ss[t.venue].id,this.makeWorld(),this.state.actors.forEach(s=>s.ready=!1));const i=this.state.actors.filter(s=>s.human).every(s=>s.ready);this.state.phase==="lobby"&&i?(this.state.phase="countdown",this.state.phaseFrame=0):this.state.phase==="countdown"&&!i&&(this.state.phase="lobby",this.state.phaseFrame=0),this.state.phase==="countdown"&&this.state.phaseFrame>=180&&this.startRound()}rematch(e){if(this.state.actors.filter(t=>t.human).every(t=>{var i;return(((i=e[t.id])==null?void 0:i.rematch)??0)>t.last.rematch})){this.state.venue=Ss[(Ss.findIndex(i=>i.id===this.state.venue)+1)%3].id,this.state.phase="lobby",this.state.phaseFrame=0;const t=this.state.actors.map(i=>({...i.look}));this.makeActors(),this.state.actors.forEach((i,s)=>{i.look=t[s],i.human&&(i.last=e[i.id]),i.ready=!1}),this.makeWorld()}}weapon(e){return!e.parts.armL&&!e.parts.armR?"body":e.weapons[e.slot]??"shank"}handling(e){return(e.parts.handL>0?1:0)+(e.parts.handR>0?1:0)}movement(e){const t=_r(e),i=+(e.parts.footL>0)+ +(e.parts.footR>0);return Math.max(.24,(t===2?1:t===1?.65:.29)*(i===2?1:i===1?.85:.7))}detach(e,t,i=-1){const s=fa(e),r=Object.fromEntries(tn.map(l=>[l,Rn(e,l)])),a=l=>{if(e.parts[l]<=0)return;e.parts[l]=0;const c=r[l];this.state.debris.length<120&&this.state.debris.push({id:this.next(),x:e.x+c.x,y:e.y+c.y,vx:(this.random()-.5)*12,vy:3+this.random()*5,life:900,part:l,look:{...e.look},color:0,hp:14,w:c.w,h:c.h}),this.event("detach",e.x+c.x,e.y+c.y,e.id);for(const h of tn)Cs[h].parent===l&&a(h)};a(t);const o=fa(e);if(o===1&&s!==1&&e.hp>0&&e.parts.head>0?(e.distressAt=this.state.frame,e.distressCount=0):(o!==1||e.hp<=0||e.parts.head<=0)&&(delete e.distressAt,delete e.distressCount),e.hp>0&&e.parts.torso>0&&e.bleedOutAt===null&&!(e.parts.thighL>0&&e.parts.shinL>0)&&!(e.parts.thighR>0&&e.parts.shinR>0)&&(e.bleedOutAt=this.state.frame+360,e.bleedOwner=i),!e.parts.armL&&!e.parts.armR){for(const l of e.weapons)l!=="shank"&&l!=="body"&&e.durability[l]>0&&this.state.pickups.push({id:this.next(),x:e.x,y:e.y+.5,weapon:l,hp:e.durability[l]});e.weapons=["body"],e.slot=0}}damage(e,t,i,s,r=-1){if(e.hp<=0||e.parts[t]<=0)return;const a=!["fire","fuel_fire","zone"].includes(s),o=Math.min(e.parts[t],i*(t==="torso"&&a?.45:1));if(t==="torso"&&a){const c=e.id%2===0?"L":"R",h=c==="L"?"R":"L",f=[`thigh${c}`,`arm${c}`,`thigh${h}`,`arm${h}`,"head"].find(p=>e.parts[p]>0);if(f){const p=i*.8;e.parts[f]<=p?this.detach(e,f,r):e.parts[f]-=p}}e.parts[t]<=o?this.detach(e,t,r):e.parts[t]-=o;const l=t==="torso"?o:o*.08;e.hp=Math.max(0,e.hp-l),this.event("hit",e.x,e.y+Rn(e,t).y,e.id),(e.hp<=0||e.parts.torso<=0)&&this.kill(e,s,r)}kill(e,t,i=-1){e.death||(e.hp=0,e.death=t,e.deathFrame=this.state.frame,t==="bleedout"&&this.bloodSplatter(e),this.event("death",e.x,e.y+1,e.id,{cause:t}),i>=0&&i!==e.id&&this.state.actors[i].kills++,this.detach(e,"torso"))}bloodSplatter(e){const t=this.floorAt(e.x,e.y+.3,-100);if(t<=-50)return;const i=this.state.props.find(s=>s.hp>0&&!s.falling&&Math.abs(s.y+s.h/2-t)<.001&&Math.abs(e.x-s.x)<s.w/2+.25);i&&(this.state.blood.push({id:this.next(),x:e.x,y:t+.018,surface:i.id}),this.state.blood.length>8&&this.state.blood.shift())}hitPart(e,t,i){let s=null,r=1/0;for(const a of tn){if(e.parts[a]<=0)continue;const o=Rn(e,a),l=Math.abs(t-e.x-o.x),c=Math.abs(i-e.y-o.y);l<o.w/2+.14&&c<o.h/2+.14&&l+c<r&&(r=l+c,s=a)}return s}floorAt(e,t,i){let s=-100;for(const r of this.state.props){if(r.hp<=0||r.falling||!(r.kind==="floor"||r.kind==="roof"||r.kind==="balcony"||r.kind==="table"||r.kind==="car"||r.kind==="truck"||r.kind==="barrier"))continue;const a=r.y+r.h/2;Math.abs(e-r.x)<r.w/2+.25&&t>=a-.2&&i<=a&&a>s&&(s=a)}return s}damagePickup(e,t){e.hp-=t,e.hp<=0&&(this.event("break",e.x,e.y),this.state.debris.length<120&&this.state.debris.push({id:this.next(),x:e.x,y:e.y,vx:(this.random()-.5)*5,vy:3,life:450,part:null,look:null,color:4,hp:8,w:.4,h:.15}),this.state.pickups=this.state.pickups.filter(i=>i.id!==e.id))}damageWeapon(e,t){const i=this.weapon(e);i!=="body"&&(e.durability[i]=Math.max(0,e.durability[i]-t),e.durability[i]||(this.event("break",e.x,e.y+Jn(e),e.id),e.weapons=e.weapons.filter(s=>s!==i),e.weapons.length||(e.weapons=["body"]),e.slot=0,e.reloading=0))}pickup(e){if(!e.parts.armL&&!e.parts.armR)return;const t=this.state.pickups.filter(i=>Math.hypot(i.x-e.x,i.y-e.y-1)<3).sort((i,s)=>Math.abs(i.x-e.x)-Math.abs(s.x-e.x))[0];if(t){if(!e.weapons.includes(t.weapon))if(e.weapons.length<2)e.weapons.push(t.weapon);else{const i=e.weapons[1];e.weapons[1]=t.weapon,this.state.pickups.push({id:this.next(),x:e.x-1,y:e.y+.6,weapon:i,hp:e.durability[i]})}e.durability[t.weapon]=t.hp,e.slot=Math.max(0,e.weapons.indexOf(t.weapon)),e.reloading=0,this.state.pickups=this.state.pickups.filter(i=>i.id!==t.id),e.ammo=this.clip(e),this.event("pickup",e.x,e.y+1,e.id)}}clip(e){const t=this.weapon(e);return t==="shotgun"||t==="smg"?e.magazines[t]:0}reload(e){const t=this.weapon(e);if(e.reloading||e.reserve<=0||!(t==="smg"||t==="shotgun"))return;const i=t==="smg"?30:6;e.magazines[t]>=i||(this.event("reload",e.x,e.y+1,e.id),e.reloading=Math.round((t==="smg"?110:40)*(this.handling(e)<2?1.5:1)))}attack(e){if(e.cooldown>0)return;const t=this.weapon(e),i=t==="shotgun"||t==="smg",s=ar(e);if(t==="axe"){if(this.state.shots.length>=120)return;this.state.shots.push({id:this.next(),owner:e.id,x:e.x+s.x+s.dx*.35,y:e.y+s.y+s.dy*.35,vx:s.dx*18,vy:s.dy*18,life:22,damage:30,weapon:"axe",durability:e.durability.axe}),this.event("shot",e.x+s.x,e.y+s.y,e.id,{weapon:t}),e.weapons=e.weapons.filter(r=>r!=="axe"),e.weapons.length||(e.weapons=["body"]),e.slot=0,e.cooldown=43,e.attacking=10,e.reloading=0;return}if(i){if(e.reloading&&!(t==="shotgun"&&e.magazines.shotgun>0))return;if(e.magazines[t]<=0){this.reload(e);return}e.reloading=0,e.magazines[t]--,e.cooldown=t==="smg"?6:45;const r=Math.atan2(e.aimY,e.aimX),a=t==="shotgun"?7:1;for(let o=0;o<a&&this.state.shots.length<120;o++){const l=(this.random()-.5)*(t==="shotgun"?.38:.09)+(e.parts.head?0:(this.random()-.5)*.65),c=r+l;this.state.shots.push({id:this.next(),owner:e.id,x:e.x+s.x+s.dx*.35,y:e.y+s.y+s.dy*.35,vx:Math.cos(c)*48,vy:Math.sin(c)*48,life:t==="shotgun"?20:60,damage:t==="shotgun"?9:8,weapon:t})}this.event("shot",e.x,e.y+Jn(e),e.id,{weapon:t})}else{e.cooldown=t==="body"?32:18,e.attacking=10;const r=(t==="shank"?sg:1.1)*(this.handling(e)<2?.85:1),a=t==="body"?8:13;if(this.event("melee",e.x,e.y+Jn(e),e.id,{weapon:t}),t==="shank"){let o=!1;for(let l=1;l<=12&&!o;l++){const c=r*l/12,h=e.x+s.dx*c,u=e.y+Jn(e)+s.dy*c;for(const f of this.state.props)if(f.hp>0&&Math.abs(h-f.x)<f.w/2&&Math.abs(u-f.y)<f.h/2){this.damageProp(f,a*.7,e.id),o=!0;break}if(o)break;for(const f of this.state.actors){if(f.id===e.id||f.hp<=0||Math.hypot(f.x-e.x,f.y-e.y)>r+.25)continue;const p=this.hitPart(f,h,u);if(p){this.damage(f,p,a,"shank",e.id),o=!0;break}}}return}for(const o of this.state.actors){if(o.id===e.id||o.hp<=0||Math.abs(o.y-e.y)>2.3)continue;const l=o.x-e.x;if(Math.sign(l)!==e.face||Math.abs(l)>r)continue;const c=e.y+Jn(e)+e.aimY*1.5,h=tn.filter(u=>o.parts[u]>0).sort((u,f)=>Math.abs(o.y+Rn(o,u).y-c)-Math.abs(o.y+Rn(o,f).y-c));h[0]&&this.damage(o,h[0],a,t,e.id)}for(const o of this.state.props)if(o.hp>0&&Math.abs(o.x-e.x)<r+o.w/2&&Math.abs(o.y-e.y-Jn(e)-e.aimY*1.1)<o.h/2+1){const l=o.x-e.x;(Math.sign(l)===e.face||Math.abs(l)<.6)&&this.damageProp(o,a*.7,e.id)}}e.ammo=this.clip(e)}damageProp(e,t,i=-1){if(!(e.hp<=0)&&(e.hp=Math.max(0,e.hp-t),e.material==="fuel"&&e.hp<e.maxHp*.5&&(e.burn=Math.max(e.burn,1),this.ignite(e,this.state.frame+360,"fuel_fire",i)),e.hp<=0)){this.event("break",e.x,e.y,i,{prop:e.kind}),e.kind==="pump"&&!this.state.fires.some(s=>s.id===e.id)&&this.state.fires.push({id:e.id,x:e.x,y:Math.max(.4,e.y-e.h/2+.5),radius:3,until:this.state.frame+480,owner:i,cause:"fuel_fire"});for(let s=0;s<4&&this.state.debris.length<120;s++)this.state.debris.push({id:this.next(),x:e.x+(this.random()-.5)*e.w,y:e.y,vx:(this.random()-.5)*8,vy:2+this.random()*5,life:600,part:null,look:null,color:e.material==="glass"?2:e.material==="metal"?4:5,hp:12,w:Math.min(1,e.w/4),h:Math.min(.7,e.h/3)});if(e.material==="fuel"&&!e.exploded){e.exploded=!0,this.event("explosion",e.x,e.y,i);const s=e.kind==="can"?4:7;for(const r of this.state.actors)if(r.hp>0){const a=Math.hypot(r.x-e.x,r.y+1-e.y);a<s&&(this.damage(r,"torso",Math.max(12,55*(1-a/s)),"blast",i),r.vx+=(r.x>e.x?1:-1)*10,r.vy+=5)}for(const r of[...this.state.pickups])Math.hypot(r.x-e.x,r.y-e.y)<s&&this.damagePickup(r,50);for(const r of this.state.props)r!==e&&r.hp>0&&Math.hypot(r.x-e.x,r.y-e.y)<s&&(r.fuel>0&&(r.burn=1,this.ignite(r,this.state.frame+240,"fuel_fire",i)),r.hp=Math.max(1,r.hp-22))}}}ignite(e,t,i,s){e.onFire&&e.onFire.until>this.state.frame||(this.event("ignite",e.x,e.y),e.onFire={until:Math.min(t,this.state.frame+240),cause:i,owner:s})}burning(){const e=this.state,t=e.frame;e.fires=e.fires.filter(r=>r.until>t);for(const r of e.props)r.hp>0&&r.burn&&!r.onFire&&this.ignite(r,t+240,r.material==="fuel"?"fuel_fire":"fire",-1);const i=[...e.actors.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y+Ks(r)/2,w:.9,h:Ks(r)})),...e.props.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:r.w,h:r.h})),...e.debris.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:r.w,h:r.h})),...e.pickups.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:.6,h:.4}))],s=[...e.fires.map(r=>({...r,object:null})),...i.filter(r=>r.object.onFire&&r.object.onFire.until>t).map(r=>({...r.object.onFire,object:r.object,x:r.x,y:r.y,radius:.75}))];for(const r of s)for(const a of i){if(r.object===a.object)continue;const o=Math.max(0,Math.abs(a.x-r.x)-a.w/2),l=Math.max(0,Math.abs(a.y-r.y)-a.h/2);Math.hypot(o,l)<=r.radius&&this.ignite(a.object,r.until,r.cause,r.owner)}for(const r of i){const a=r.object.onFire;a&&a.until<=t&&(delete r.object.onFire,"burn"in r.object&&(r.object.burn=0))}if(t%15===0){for(const r of e.actors)r.hp>0&&r.onFire&&this.damage(r,"torso",2,r.onFire.cause,r.onFire.owner);for(const r of e.props)r.hp>0&&r.onFire&&this.damageProp(r,3,r.onFire.owner);for(const r of e.debris)r.hp>0&&r.onFire&&(r.hp-=2);for(const r of[...e.pickups])r.hp>0&&r.onFire&&this.damagePickup(r,2)}}bot(e){const t=xs(e.look),i=this.state.actors.filter(d=>d.hp>0&&d.id!==e.id).sort((d,A)=>Math.abs(d.x-e.x)-Math.abs(A.x-e.x)),s=i[0];if(!s)return t;const r=this.weapon(e),a=r==="smg"||r==="shotgun",o=r==="axe",l=Math.abs(s.x-e.x),c=this.state.pickups.filter(d=>d.weapon!=="shank"&&Math.abs(d.x-e.x)<14).sort((d,A)=>Math.abs(d.x-e.x)-Math.abs(A.x-e.x))[0];e.weapons.length<2&&c?(t.move=Math.sign(c.x-e.x),Math.abs(c.x-e.x)<2&&(t.pickup=e.last.pickup+1)):t.move=l>(a?9:o?4:1.4)?Math.sign(s.x-e.x):a&&l<4?-Math.sign(s.x-e.x):0,e.x<this.state.zoneLeft+3&&(t.move=1),e.x>this.state.zoneRight-3&&(t.move=-1);const h=tn.filter(d=>s.parts[d]>0)[(Math.floor(this.state.frame/47)+e.id)%tn.filter(d=>s.parts[d]>0).length]??"torso",u=s.x+Rn(s,h).x-e.x,f=s.y+Rn(s,h).y-(e.y+Jn(e)),p=Math.max(.1,Math.hypot(u,f));t.aimX=u/p,t.aimY=f/p,t.attack=l<(a?23:o?6:2.3)&&Math.abs(s.y-e.y)<(a?9:2.3);const _=this.state.props.find(d=>d.hp>0&&d.solid&&d.y-d.h/2<e.y+2.7&&d.y+d.h/2>e.y+.4&&Math.abs(d.x-e.x-t.move*1.4)<d.w/2+.6),x=this.state.fires.some(d=>Math.abs(d.x-e.x-t.move*2)<d.radius+1)||this.state.props.some(d=>d.hp>0&&(d.burn||d.onFire)&&Math.abs(d.x-e.x-t.move*2)<d.w/2+1),m=this.floorAt(e.x+t.move*2,e.y+.5,e.y-1)<-50;return e.grounded&&(_||x||m||(this.state.frame+e.id*37)%113===0)&&(t.jump=e.last.jump+1),_&&(t.attack=!0,this.state.frame%20<12&&(t.aimX=t.move,t.aimY=0)),a&&this.clip(e)===0&&(e.reserve>0?t.reload=e.last.reload+1:t.cycle=e.last.cycle+1),t}move(e,t){if(e.bleedOutAt!==null){if(this.state.frame>=e.bleedOutAt){this.kill(e,"bleedout",e.bleedOwner);return}e.hp=Math.max(.01,e.hp-100/360)}if(e.distressAt!==void 0&&this.state.frame>=e.distressAt&&fa(e)===1&&e.parts.head>0){const l=e.distressCount??0;this.event(l%2===0?"scream":"cry",e.x,e.y+Rn(e,"head").y,e.id),e.distressCount=l+1,e.distressAt=this.state.frame+150+(e.id*31+l*17)%90}if(e.cooldown=Math.max(0,e.cooldown-1),e.attacking=Math.max(0,e.attacking-1),e.reloading>0&&(e.reloading--,!e.reloading)){const l=this.weapon(e);if(l==="smg"){const c=Math.min(e.reserve,30-e.magazines.smg);e.magazines.smg+=c,e.reserve-=c}else l==="shotgun"&&e.reserve>0&&(e.magazines.shotgun++,e.reserve--,e.magazines.shotgun<6&&this.reload(e))}t.cycle!==e.last.cycle&&(this.event("swap",e.x,e.y+1,e.id),e.slot=(e.slot+1)%e.weapons.length,e.reloading=0),t.pickup!==e.last.pickup&&this.pickup(e),t.reload!==e.last.reload&&this.reload(e),!e.parts.head&&this.state.frame>=e.driftAt&&(e.drift=(this.random()*2-1)*5.5,e.driftAt=this.state.frame+15+Math.floor(this.random()*15));const i=7*this.movement(e),s=e.parts.head?t.move*i:t.move*i*.25+e.drift;e.vx+=(s-e.vx)*.2,Math.abs(t.aimX)>.05&&(e.face=Math.sign(t.aimX)),e.aimX=t.aimX,e.aimY=t.aimY,t.jump!==e.last.jump&&e.grounded&&_r(e)>0&&(this.event("jump",e.x,e.y,e.id),e.vy=14*Math.max(.4,this.movement(e)),e.grounded=!1),e.vy-=da*on;const r=e.x,a=e.y;e.x=Math.max(-63,Math.min(63,e.x+e.vx*on)),e.y+=e.vy*on,e.grounded=!1;const o=this.floorAt(e.x,a,e.y);e.vy<=0&&o>-50&&(e.vy<-5&&this.event("land",e.x,o,e.id),e.y=o,e.vy=0,e.grounded=!0);for(const l of this.state.props)l.hp<=0||!l.solid||l.falling||l.kind==="floor"||l.kind==="roof"||l.kind==="balcony"||Math.abs(e.x-l.x)<l.w/2+.4&&e.y+Ks(e)>l.y-l.h/2+.1&&e.y<l.y+l.h/2-.1&&Math.abs(r-l.x)>=l.w/2+.35&&(e.x=r,e.vx=0);t.attack&&this.state.phaseFrame>180&&this.attack(e),e.ammo=this.clip(e),e.y<-12&&this.kill(e,"fall"),this.state.phaseFrame%30===0&&(e.x<this.state.zoneLeft||e.x>this.state.zoneRight)&&this.damage(e,"torso",this.state.phaseFrame>10800?20:5,"zone"),this.state.phaseFrame>14400&&this.state.phaseFrame%60===0&&this.damage(e,"torso",8,"zone"),e.last={...t}}step(e=[]){var o,l;const t=this.state;t.frame++,t.phaseFrame++,t.eventSeq=0;const i=e.map(ig);if(t.phase==="lobby"||t.phase==="countdown"){this.lobby(i);return}if(t.phase==="results"){this.rematch(i);return}const s=t.phaseFrame/60,r=Math.max(0,s-30)*.27;t.zoneLeft=Math.min(-1,-64+r),t.zoneRight=Math.max(1,64-r);for(const c of t.actors)c.hp>0&&this.move(c,c.human?i[c.id]??xs(c.look):this.bot(c));for(const c of t.shots){c.life--,c.weapon==="axe"&&(c.vy-=18*on);const h=c.x,u=c.y;c.x+=c.vx*on,c.y+=c.vy*on;const f=Math.max(1,Math.ceil(Math.hypot(c.x-h,c.y-u)/.18));for(let p=1;p<=f&&c.life>0;p++){const _=h+(c.x-h)*p/f,x=u+(c.y-u)*p/f;let m=!1;for(const d of t.actors)if(d.hp>0&&d.id!==c.owner){if(this.weapon(d)!=="body"&&Math.abs(_-d.x-ar(d).x)<.35&&Math.abs(x-d.y-ar(d).y)<.16){this.damageWeapon(d,c.damage),m=!0;break}const A=this.hitPart(d,_,x);if(A){this.damage(d,A,c.damage,c.weapon,c.owner),m=!0;break}}if(!m){for(const d of t.props)if(d.hp>0&&Math.abs(_-d.x)<d.w/2&&Math.abs(x-d.y)<d.h/2){this.damageProp(d,c.damage*(c.weapon==="axe"?1.6:.65),c.owner),m=!0;break}}if(!m){for(const d of[...t.pickups])if(Math.abs(_-d.x)<.6&&Math.abs(x-d.y)<.35){this.damagePickup(d,c.damage),m=!0;break}}if(!m){for(const d of t.debris)if(d.hp>0&&Math.abs(_-d.x)<d.w/2&&Math.abs(x-d.y)<d.h/2){d.hp-=c.damage,d.vx+=c.vx*.1,d.settled=!1,d.groundTicks=0,m=!0;break}}m&&(c.life=0,c.x=_,c.y=x)}}for(const c of t.shots)if(c.weapon==="axe"&&c.life<=0){const h=this.floorAt(c.x,c.y+.5,-100);h>-50&&c.y>-12&&this.state.pickups.push({id:this.next(),x:c.x,y:h+.55,weapon:"axe",hp:c.durability??ha.axe})}t.shots=t.shots.filter(c=>c.life>0);for(const c of t.props)if(!(c.hp<=0)&&(c.supports.some(h=>{var u;return((u=t.props.find(f=>f.id===h))==null?void 0:u.hp)===0})&&(c.falling=!0),c.falling)){const h=c.y;c.vy-=da*on,c.y+=c.vy*on;for(const u of t.actors)u.hp>0&&!((o=c.hitActors)!=null&&o.includes(u.id))&&Math.abs(u.x-c.x)<c.w/2+.5&&u.y+Ks(u)>c.y-c.h/2&&u.y<h+c.h/2&&((c.hitActors??(c.hitActors=[])).push(u.id),this.damage(u,"torso",32,c.kind==="roof"?"canopy":"collapse"));if(c.y-c.h/2<.4){c.y=.4+c.h/2,c.falling=!1,this.damageProp(c,c.maxHp);continue}}this.burning();for(const c of t.debris){c.life--;const h=c.y-c.h/2;if(c.settled){const p=this.floorAt(c.x,h+.05,h-.08);if(p>-50&&Math.abs(p-h)<.1)continue;c.settled=!1,c.groundTicks=0}c.vy-=da*on;const u=h;c.x+=c.vx*on,c.y+=c.vy*on,c.angle=(c.angle??0)+c.vx*.15*on;const f=this.floorAt(c.x,u,c.y-c.h/2);c.vy<0&&f>-50?(c.y=f+c.h/2,c.vy=Math.abs(c.vy)<1?0:c.vy*-.2,c.vx*=.85,c.groundTicks=Math.abs(c.vy)<.2&&Math.abs(c.vx)<.15?(c.groundTicks??0)+1:0,c.groundTicks>=45&&(c.settled=!0,c.vx=0,c.vy=0)):c.groundTicks=0}t.debris=t.debris.filter(c=>c.life>0&&c.hp>0&&c.y>-15);const a=t.actors.filter(c=>c.hp>0);a.length<=1&&(t.phase="results",t.phaseFrame=0,t.winner=((l=a[0])==null?void 0:l.id)??null)}}const To={bleedout:{title:"You have run out of legs. And blood.",hint:"Losing both legs starts a six-second bleed-out. Make your last shots count."},fuel_fire:{title:"Turns out you are flammable.",hint:"Fuel leaks are not a shortcut. Break the chain and leave the flames."},fire:{title:"Your outfit was not fireproof.",hint:"Burning fabric spreads fire. Find an unlit route."},canopy:{title:"The roof was not emotionally supportive.",hint:"Broken canopy posts mean incoming metal. Move away from the shadow."},collapse:{title:"Structural integrity was more of a suggestion.",hint:"Watch the supports. Loose objects land with consequences."},shotgun:{title:"You brought personal space to a shotgun fight.",hint:"Leave the pellet cone. Reloading opponents are easier company."},axe:{title:"You have been downsized.",hint:"Dodge the chop, then punish the recovery."},shank:{title:"That was a very local problem.",hint:"Stay outside the blade’s reach. Backpedal and use cover."},smg:{title:"Standing still simplified their paperwork.",hint:"Break line of sight and avoid trading sustained bursts."},blast:{title:"The explosion had a wider social circle.",hint:"Fuel containers detonate once. Make sure you are elsewhere."},fall:{title:"Gravity remains undefeated.",hint:"Floor panels can disappear. Jump to intact ground."},zone:{title:"The map asked you to leave.",hint:"Watch the yellow boundary and move before the next contraction."},body:{title:"You lost an argument with a torso.",hint:"Even unarmed opponents can body-check. Keep a little distance."}};class cg{constructor(){ye(this,"seen",new Set);try{for(const e of JSON.parse(localStorage.getItem("royale.advice")??"[]"))Object.hasOwn(To,e)&&this.seen.add(e)}catch{}}discover(e){if(this.seen.has(e))return null;this.seen.add(e);try{localStorage.setItem("royale.advice",JSON.stringify([...this.seen]))}catch{}return To[e]}}class ug{constructor(){ye(this,"seen",new Set)}collect(e,t){const i=e.filter(s=>s.frame<=t&&!this.seen.has(s.id));for(const s of i)this.seen.add(s.id);if(this.seen.size>6e3){const s=new Set(e.map(r=>r.id));this.seen=new Set([...this.seen].filter(r=>s.has(r)))}return i}reset(){this.seen.clear()}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fc="169",hg=0,Eu=1,fg=2,dc=1,dg=2,Kn=3,Ai=0,$t=1,cn=2,Si=0,Es=1,bu=2,Tu=3,Au=4,pg=5,Vi=100,mg=101,gg=102,_g=103,vg=104,xg=200,Mg=201,yg=202,Sg=203,rl=204,ol=205,Eg=206,bg=207,Tg=208,Ag=209,wg=210,Rg=211,Cg=212,Pg=213,Lg=214,al=0,ll=1,cl=2,Ps=3,ul=4,hl=5,fl=6,dl=7,Hf=0,Ig=1,Dg=2,Ei=0,Ug=1,Ng=2,Og=3,Vf=4,Fg=5,Bg=6,kg=7,Gf=300,Ls=301,Is=302,pl=303,ml=304,Go=306,gl=1e3,qi=1001,_l=1002,Ht=1003,zg=1004,Or=1005,Mn=1006,pa=1007,Yi=1008,ri=1009,Wf=1010,Xf=1011,vr=1012,pc=1013,Zi=1014,ni=1015,br=1016,mc=1017,gc=1018,Ds=1020,qf=35902,Yf=1021,jf=1022,Sn=1023,$f=1024,Kf=1025,bs=1026,Us=1027,Zf=1028,_c=1029,Jf=1030,vc=1031,xc=1033,lo=33776,co=33777,uo=33778,ho=33779,vl=35840,xl=35841,Ml=35842,yl=35843,Sl=36196,El=37492,bl=37496,Tl=37808,Al=37809,wl=37810,Rl=37811,Cl=37812,Pl=37813,Ll=37814,Il=37815,Dl=37816,Ul=37817,Nl=37818,Ol=37819,Fl=37820,Bl=37821,fo=36492,kl=36494,zl=36495,Qf=36283,Hl=36284,Vl=36285,Gl=36286,Hg=3200,Vg=3201,ed=0,Gg=1,xi="",Yt="srgb",Ri="srgb-linear",Mc="display-p3",Wo="display-p3-linear",Ao="linear",dt="srgb",wo="rec709",Ro="p3",ss=7680,wu=519,Wg=512,Xg=513,qg=514,td=515,Yg=516,jg=517,$g=518,Kg=519,Ru=35044,Cu=35048,Pu="300 es",ii=2e3,Co=2001;class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ma=Math.PI/180,Wl=180/Math.PI;function Tr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function jt(n,e,t){return Math.max(e,Math.min(t,n))}function Zg(n,e){return(n%e+e)%e}function ga(n,e,t){return(1-t)*n+t*e}function Hs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,i,s,r,a,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],_=i[8],x=s[0],m=s[3],d=s[6],A=s[1],b=s[4],T=s[7],F=s[2],I=s[5],R=s[8];return r[0]=a*x+o*A+l*F,r[3]=a*m+o*b+l*I,r[6]=a*d+o*T+l*R,r[1]=c*x+h*A+u*F,r[4]=c*m+h*b+u*I,r[7]=c*d+h*T+u*R,r[2]=f*x+p*A+_*F,r[5]=f*m+p*b+_*I,r[8]=f*d+p*T+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,_=t*u+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new qe;function nd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jg(){const n=Po("canvas");return n.style.display="block",n}const Lu={};function po(n){n in Lu||(Lu[n]=!0,console.warn(n))}function Qg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function e0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function t0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Iu=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Du=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vs={[Ri]:{transfer:Ao,primaries:wo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Yt]:{transfer:dt,primaries:wo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Wo]:{transfer:Ao,primaries:Ro,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Du),fromReference:n=>n.applyMatrix3(Iu)},[Mc]:{transfer:dt,primaries:Ro,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Du),fromReference:n=>n.applyMatrix3(Iu).convertLinearToSRGB()}},n0=new Set([Ri,Wo]),rt={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!n0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Vs[e].toReference,s=Vs[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Vs[n].primaries},getTransfer:function(n){return n===xi?Ao:Vs[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Vs[e].luminanceCoefficients)}};function Ts(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function va(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rs;class i0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rs===void 0&&(rs=Po("canvas")),rs.width=e.width,rs.height=e.height;const i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Po("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ts(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ts(t[i]/255)*255):t[i]=Ts(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let s0=0;class id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Tr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xa(s[a].image)):r.push(xa(s[a]))}else r=xa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function xa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?i0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let r0=0;class Vt extends Os{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=qi,s=qi,r=Mn,a=Yi,o=Sn,l=ri,c=Vt.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Tr(),this.name="",this.source=new id(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gl:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case _l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gl:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case _l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Gf;Vt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,T=(p+1)/2,F=(d+1)/2,I=(h+f)/4,R=(u+x)/4,z=(_+m)/4;return b>T&&b>F?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=I/i,r=R/i):T>F?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=I/s,r=z/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=R/r,s=z/r),this.set(i,s,r,t),this}let A=Math.sqrt((m-_)*(m-_)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(u-x)/A,this.z=(f-h)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class o0 extends Os{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Vt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new id(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends o0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class sd extends Vt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class a0 extends Vt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ar{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[a+0],p=r[a+1],_=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(u!==x||l!==f||c!==p||h!==_){let m=1-o;const d=l*f+c*p+h*_+u*x,A=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const F=Math.sqrt(b),I=Math.atan2(F,d*A);m=Math.sin(m*I)/F,o=Math.sin(o*I)/F}const T=o*A;if(l=l*m+f*T,c=c*m+p*T,h=h*m+_*T,u=u*m+x*T,m===1-o){const F=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=F,c*=F,h*=F,u*=F}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+h*u+l*p-c*f,e[t+1]=l*_+h*f+c*u-o*p,e[t+2]=c*_+h*p+o*f-l*u,e[t+3]=h*_-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u-f*p*_;break;case"YXZ":this._x=f*h*u+c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u+f*p*_;break;case"ZXY":this._x=f*h*u-c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u-f*p*_;break;case"ZYX":this._x=f*h*u-c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u+f*p*_;break;case"YZX":this._x=f*h*u+c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u-f*p*_;break;case"XZY":this._x=f*h*u-c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ma.copy(this).projectOnVector(e),this.sub(Ma)}reflect(e){return this.sub(Ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new k,Uu=new Ar;class wr{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fr.copy(i.boundingBox)),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Br.subVectors(this.max,Gs),os.subVectors(e.a,Gs),as.subVectors(e.b,Gs),ls.subVectors(e.c,Gs),li.subVectors(as,os),ci.subVectors(ls,as),Di.subVectors(os,ls);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Di.z,Di.y,li.z,0,-li.x,ci.z,0,-ci.x,Di.z,0,-Di.x,-li.y,li.x,0,-ci.y,ci.x,0,-Di.y,Di.x,0];return!ya(t,os,as,ls,Br)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,os,as,ls,Br))?!1:(kr.crossVectors(li,ci),t=[kr.x,kr.y,kr.z],ya(t,os,as,ls,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new k,new k,new k,new k,new k,new k,new k,new k],gn=new k,Fr=new wr,os=new k,as=new k,ls=new k,li=new k,ci=new k,Di=new k,Gs=new k,Br=new k,kr=new k,Ui=new k;function ya(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ui.fromArray(n,r);const o=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),h=i.dot(Ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const l0=new wr,Ws=new k,Sa=new k;class Xo{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):l0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const t=Ws.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ws,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(Sa)),this.expandByPoint(Ws.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new k,Ea=new k,zr=new k,ui=new k,ba=new k,Hr=new k,Ta=new k;class yc{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ea.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(Ea);const r=e.distanceTo(t)*.5,a=-this.direction.dot(zr),o=ui.dot(this.direction),l=-ui.dot(zr),c=ui.lengthSq(),h=Math.abs(1-a*a);let u,f,p,_;if(h>0)if(u=a*l-o,f=a*o-l,_=r*h,u>=0)if(f>=-_)if(f<=_){const x=1/h;u*=x,f*=x,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ea).addScaledVector(zr,f),p}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),s=qn.dot(qn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,s,r){ba.subVectors(t,e),Hr.subVectors(i,e),Ta.crossVectors(ba,Hr);let a=this.direction.dot(Ta),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,e);const l=o*this.direction.dot(Hr.crossVectors(ui,Hr));if(l<0)return null;const c=o*this.direction.dot(ba.cross(ui));if(c<0||l+c>a)return null;const h=-o*ui.dot(Ta);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,s,r,a,o,l,c,h,u,f,p,_,x,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,f,p,_,x,m)}set(e,t,i,s,r,a,o,l,c,h,u,f,p,_,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,p=a*u,_=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+_*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,_=c*h,x=c*u;t[0]=f+x*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-_,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,_=c*h,x=c*u;t[0]=f-x*o,t[4]=-a*u,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,p=a*u,_=o*h,x=o*u;t[0]=l*h,t[4]=_*c-p,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,_=o*l,x=o*c;t[0]=l*h,t[4]=x-f*u,t[8]=_*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+_,t[10]=f-x*u}else if(e.order==="XZY"){const f=a*l,p=a*c,_=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=a*h,t[9]=p*u-_,t[2]=_*u-p,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c0,e,u0)}lookAt(e,t,i){const s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),hi.crossVectors(i,Jt),hi.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),hi.crossVectors(i,Jt)),hi.normalize(),Vr.crossVectors(Jt,hi),s[0]=hi.x,s[4]=Vr.x,s[8]=Jt.x,s[1]=hi.y,s[5]=Vr.y,s[9]=Jt.y,s[2]=hi.z,s[6]=Vr.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],_=i[2],x=i[6],m=i[10],d=i[14],A=i[3],b=i[7],T=i[11],F=i[15],I=s[0],R=s[4],z=s[8],ce=s[12],v=s[1],E=s[5],$=s[9],q=s[13],Q=s[2],le=s[6],V=s[10],ie=s[14],H=s[3],me=s[7],ae=s[11],L=s[15];return r[0]=a*I+o*v+l*Q+c*H,r[4]=a*R+o*E+l*le+c*me,r[8]=a*z+o*$+l*V+c*ae,r[12]=a*ce+o*q+l*ie+c*L,r[1]=h*I+u*v+f*Q+p*H,r[5]=h*R+u*E+f*le+p*me,r[9]=h*z+u*$+f*V+p*ae,r[13]=h*ce+u*q+f*ie+p*L,r[2]=_*I+x*v+m*Q+d*H,r[6]=_*R+x*E+m*le+d*me,r[10]=_*z+x*$+m*V+d*ae,r[14]=_*ce+x*q+m*ie+d*L,r[3]=A*I+b*v+T*Q+F*H,r[7]=A*R+b*E+T*le+F*me,r[11]=A*z+b*$+T*V+F*ae,r[15]=A*ce+b*q+T*ie+F*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],_=e[3],x=e[7],m=e[11],d=e[15];return _*(+r*l*u-s*c*u-r*o*f+i*c*f+s*o*p-i*l*p)+x*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+d*(-s*o*h-t*l*u+t*o*f+s*a*u-i*a*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],_=e[12],x=e[13],m=e[14],d=e[15],A=u*m*c-x*f*c+x*l*p-o*m*p-u*l*d+o*f*d,b=_*f*c-h*m*c-_*l*p+a*m*p+h*l*d-a*f*d,T=h*x*c-_*u*c+_*o*p-a*x*p-h*o*d+a*u*d,F=_*u*l-h*x*l-_*o*f+a*x*f+h*o*m-a*u*m,I=t*A+i*b+s*T+r*F;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=A*R,e[1]=(x*f*r-u*m*r-x*s*p+i*m*p+u*s*d-i*f*d)*R,e[2]=(o*m*r-x*l*r+x*s*c-i*m*c-o*s*d+i*l*d)*R,e[3]=(u*l*r-o*f*r-u*s*c+i*f*c+o*s*p-i*l*p)*R,e[4]=b*R,e[5]=(h*m*r-_*f*r+_*s*p-t*m*p-h*s*d+t*f*d)*R,e[6]=(_*l*r-a*m*r-_*s*c+t*m*c+a*s*d-t*l*d)*R,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*p+t*l*p)*R,e[8]=T*R,e[9]=(_*u*r-h*x*r-_*i*p+t*x*p+h*i*d-t*u*d)*R,e[10]=(a*x*r-_*o*r+_*i*c-t*x*c-a*i*d+t*o*d)*R,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*p-t*o*p)*R,e[12]=F*R,e[13]=(h*x*s-_*u*s+_*i*f-t*x*f-h*i*m+t*u*m)*R,e[14]=(_*o*s-a*x*s-_*i*l+t*x*l+a*i*m-t*o*m)*R,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*f+t*o*f)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,_=r*u,x=a*h,m=a*u,d=o*u,A=l*c,b=l*h,T=l*u,F=i.x,I=i.y,R=i.z;return s[0]=(1-(x+d))*F,s[1]=(p+T)*F,s[2]=(_-b)*F,s[3]=0,s[4]=(p-T)*I,s[5]=(1-(f+d))*I,s[6]=(m+A)*I,s[7]=0,s[8]=(_+b)*R,s[9]=(m-A)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=cs.set(s[0],s[1],s[2]).length();const a=cs.set(s[4],s[5],s[6]).length(),o=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],_n.copy(this);const c=1/r,h=1/a,u=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=ii){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let p,_;if(o===ii)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Co)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ii){const l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(a-r),f=(t+e)*c,p=(i+s)*h;let _,x;if(o===ii)_=(a+r)*u,x=-2*u;else if(o===Co)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const cs=new k,_n=new pt,c0=new k(0,0,0),u0=new k(1,1,1),hi=new k,Vr=new k,Jt=new k,Nu=new pt,Ou=new Ar;class Hn{constructor(e=0,t=0,i=0,s=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Sc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h0=0;const Fu=new k,us=new Ar,Yn=new pt,Gr=new k,Xs=new k,f0=new k,d0=new Ar,Bu=new k(1,0,0),ku=new k(0,1,0),zu=new k(0,0,1),Hu={type:"added"},p0={type:"removed"},hs={type:"childadded",child:null},Aa={type:"childremoved",child:null};class Rt extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new k,t=new Hn,i=new Ar,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new qe}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Bu,e)}rotateY(e){return this.rotateOnAxis(ku,e)}rotateZ(e){return this.rotateOnAxis(zu,e)}translateOnAxis(e,t){return Fu.copy(e).applyQuaternion(this.quaternion),this.position.add(Fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bu,e)}translateY(e){return this.translateOnAxis(ku,e)}translateZ(e){return this.translateOnAxis(zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Gr.copy(e):Gr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Xs,Gr,this.up):Yn.lookAt(Gr,Xs,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),us.setFromRotationMatrix(Yn),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hu),hs.child=e,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(p0),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hu),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,f0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,d0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Rt.DEFAULT_UP=new k(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new k,jn=new k,wa=new k,$n=new k,fs=new k,ds=new k,Vu=new k,Ra=new k,Ca=new k,Pa=new k,La=new lt,Ia=new lt,Da=new lt;class yn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),vn.subVectors(e,t),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){vn.subVectors(s,t),jn.subVectors(i,t),wa.subVectors(e,t);const a=vn.dot(vn),o=vn.dot(jn),l=vn.dot(wa),c=jn.dot(jn),h=jn.dot(wa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,_=(a*h-o*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return La.setScalar(0),Ia.setScalar(0),Da.setScalar(0),La.fromBufferAttribute(e,t),Ia.fromBufferAttribute(e,i),Da.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(La,r.x),a.addScaledVector(Ia,r.y),a.addScaledVector(Da,r.z),a}static isFrontFacing(e,t,i,s){return vn.subVectors(i,t),jn.subVectors(e,t),vn.cross(jn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),vn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return yn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;fs.subVectors(s,i),ds.subVectors(r,i),Ra.subVectors(e,i);const l=fs.dot(Ra),c=ds.dot(Ra);if(l<=0&&c<=0)return t.copy(i);Ca.subVectors(e,s);const h=fs.dot(Ca),u=ds.dot(Ca);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(fs,a);Pa.subVectors(e,r);const p=fs.dot(Pa),_=ds.dot(Pa);if(_>=0&&p<=_)return t.copy(r);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(ds,o);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Vu.subVectors(r,s),o=(u-h)/(u-h+(p-_)),t.copy(s).addScaledVector(Vu,o);const d=1/(m+x+f);return a=x*d,o=f*d,t.copy(i).addScaledVector(fs,a).addScaledVector(ds,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function Ua(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=Zg(e,1),t=jt(t,0,1),i=jt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ua(a,r,e+1/3),this.g=Ua(a,r,e),this.b=Ua(a,r,e-1/3)}return rt.toWorkingColorSpace(this,s),this}setStyle(e,t=Yt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const i=rd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return rt.fromWorkingColorSpace(Dt.copy(this),e),Math.round(jt(Dt.r*255,0,255))*65536+Math.round(jt(Dt.g*255,0,255))*256+Math.round(jt(Dt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Dt.copy(this),t);const i=Dt.r,s=Dt.g,r=Dt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Yt){rt.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,s=Dt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(Wr);const i=ga(fi.h,Wr.h,t),s=ga(fi.s,Wr.s,t),r=ga(fi.l,Wr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new je;je.NAMES=rd;let m0=0;class es extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Tr(),this.name="",this.type="Material",this.blending=Es,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=ol,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rl&&(i.blendSrc=this.blendSrc),this.blendDst!==ol&&(i.blendDst=this.blendDst),this.blendEquation!==Vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class In extends es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new k,Xr=new $e;class dn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ru,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ru&&(e.usage=this.usage),e}}class od extends dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ad extends dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Et extends dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let g0=0;const an=new pt,Na=new Rt,ps=new k,Qt=new wr,qs=new wr,wt=new k;class sn extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nd(e)?ad:od)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Qt.min,qs.min),Qt.expandByPoint(wt),wt.addVectors(Qt.max,qs.max),Qt.expandByPoint(wt)):(Qt.expandByPoint(qs.min),Qt.expandByPoint(qs.max))}Qt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(ps.fromBufferAttribute(e,c),wt.add(ps)),s=Math.max(s,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<i.count;z++)o[z]=new k,l[z]=new k;const c=new k,h=new k,u=new k,f=new $e,p=new $e,_=new $e,x=new k,m=new k;function d(z,ce,v){c.fromBufferAttribute(i,z),h.fromBufferAttribute(i,ce),u.fromBufferAttribute(i,v),f.fromBufferAttribute(r,z),p.fromBufferAttribute(r,ce),_.fromBufferAttribute(r,v),h.sub(c),u.sub(c),p.sub(f),_.sub(f);const E=1/(p.x*_.y-_.x*p.y);isFinite(E)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(E),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(E),o[z].add(x),o[ce].add(x),o[v].add(x),l[z].add(m),l[ce].add(m),l[v].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let z=0,ce=A.length;z<ce;++z){const v=A[z],E=v.start,$=v.count;for(let q=E,Q=E+$;q<Q;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const b=new k,T=new k,F=new k,I=new k;function R(z){F.fromBufferAttribute(s,z),I.copy(F);const ce=o[z];b.copy(ce),b.sub(F.multiplyScalar(F.dot(ce))).normalize(),T.crossVectors(I,ce);const E=T.dot(l[z])<0?-1:1;a.setXYZW(z,b.x,b.y,b.z,E)}for(let z=0,ce=A.length;z<ce;++z){const v=A[z],E=v.start,$=v.count;for(let q=E,Q=E+$;q<Q;q+=3)R(e.getX(q+0)),R(e.getX(q+1)),R(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,u=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let d=0;d<h;d++)f[_++]=c[p++]}return new dn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gu=new pt,Ni=new yc,qr=new Xo,Wu=new k,Yr=new k,jr=new k,$r=new k,Oa=new k,Kr=new k,Xu=new k,Zr=new k;class _t extends Rt{constructor(e=new sn,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Oa.fromBufferAttribute(u,e),a?Kr.addScaledVector(Oa,h):Kr.addScaledVector(Oa.sub(t),h))}t.add(Kr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(r),Ni.copy(e.ray).recast(e.near),!(qr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(qr,Wu)===null||Ni.origin.distanceToSquared(Wu)>(e.far-e.near)**2))&&(Gu.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(Gu),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=a[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=A,F=b;T<F;T+=3){const I=o.getX(T),R=o.getX(T+1),z=o.getX(T+2);s=Jr(this,d,e,i,c,h,u,I,R,z),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const A=o.getX(m),b=o.getX(m+1),T=o.getX(m+2);s=Jr(this,a,e,i,c,h,u,A,b,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=a[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=A,F=b;T<F;T+=3){const I=T,R=T+1,z=T+2;s=Jr(this,d,e,i,c,h,u,I,R,z),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const A=m,b=m+1,T=m+2;s=Jr(this,a,e,i,c,h,u,A,b,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function _0(n,e,t,i,s,r,a,o){let l;if(e.side===$t?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ai,o),l===null)return null;Zr.copy(o),Zr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Zr);return c<t.near||c>t.far?null:{distance:c,point:Zr.clone(),object:n}}function Jr(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Yr),n.getVertexPosition(l,jr),n.getVertexPosition(c,$r);const h=_0(n,e,t,i,Yr,jr,$r,Xu);if(h){const u=new k;yn.getBarycoord(Xu,Yr,jr,$r,u),s&&(h.uv=yn.getInterpolatedAttribute(s,o,l,c,u,new $e)),r&&(h.uv1=yn.getInterpolatedAttribute(r,o,l,c,u,new $e)),a&&(h.normal=yn.getInterpolatedAttribute(a,o,l,c,u,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new k,materialIndex:0};yn.getNormal(Yr,jr,$r,f.normal),h.face=f,h.barycoord=u}return h}class Ci extends sn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(u,2));function _(x,m,d,A,b,T,F,I,R,z,ce){const v=T/R,E=F/z,$=T/2,q=F/2,Q=I/2,le=R+1,V=z+1;let ie=0,H=0;const me=new k;for(let ae=0;ae<V;ae++){const L=ae*E-q;for(let Le=0;Le<le;Le++){const Ye=Le*v-$;me[x]=Ye*A,me[m]=L*b,me[d]=Q,c.push(me.x,me.y,me.z),me[x]=0,me[m]=0,me[d]=I>0?1:-1,h.push(me.x,me.y,me.z),u.push(Le/R),u.push(1-ae/z),ie+=1}}for(let ae=0;ae<z;ae++)for(let L=0;L<R;L++){const Le=f+L+le*ae,Ye=f+L+le*(ae+1),D=f+(L+1)+le*(ae+1),K=f+(L+1)+le*ae;l.push(Le,Ye,K),l.push(Ye,D,K),H+=6}o.addGroup(p,H,ce),p+=H,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=Ns(n[t]);for(const s in i)e[s]=i[s]}return e}function v0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ld(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const x0={clone:Ns,merge:Bt};var M0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M0,this.fragmentShader=y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=v0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class cd extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new k,qu=new $e,Yu=new $e;class ln extends cd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wl*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,qu,Yu),t.subVectors(Yu,qu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ma*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ms=-90,gs=1;class S0 extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(ms,gs,e,t);s.layers=this.layers,this.add(s);const r=new ln(ms,gs,e,t);r.layers=this.layers,this.add(r);const a=new ln(ms,gs,e,t);a.layers=this.layers,this.add(a);const o=new ln(ms,gs,e,t);o.layers=this.layers,this.add(o);const l=new ln(ms,gs,e,t);l.layers=this.layers,this.add(l);const c=new ln(ms,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Co)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class ud extends Vt{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ls,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class E0 extends Ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ud(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ci(5,5,5),r=new wi({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:Si});r.uniforms.tEquirect.value=t;const a=new _t(s,r),o=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Mn),new S0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Fa=new k,b0=new k,T0=new qe;class gi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Fa.subVectors(i,t).cross(b0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||T0.getNormalMatrix(e),s=this.coplanarPoint(Fa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new Xo,Qr=new k;class Ec{constructor(e=new gi,t=new gi,i=new gi,s=new gi,r=new gi,a=new gi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],_=s[9],x=s[10],m=s[11],d=s[12],A=s[13],b=s[14],T=s[15];if(i[0].setComponents(l-r,f-c,m-p,T-d).normalize(),i[1].setComponents(l+r,f+c,m+p,T+d).normalize(),i[2].setComponents(l+a,f+h,m+_,T+A).normalize(),i[3].setComponents(l-a,f-h,m-_,T-A).normalize(),i[4].setComponents(l-o,f-u,m-x,T-b).normalize(),t===ii)i[5].setComponents(l+o,f+u,m+x,T+b).normalize();else if(t===Co)i[5].setComponents(o,u,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Qr.x=s.normal.x>0?e.max.x:e.min.x,Qr.y=s.normal.y>0?e.max.y:e.min.y,Qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hd(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function A0(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<u.length;p++){const _=u[f],x=u[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,_=u.length;p<_;p++){const x=u[p];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class ts extends sn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,p=[],_=[],x=[],m=[];for(let d=0;d<h;d++){const A=d*f-a;for(let b=0;b<c;b++){const T=b*u-r;_.push(T,-A,0),x.push(0,0,1),m.push(b/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<o;A++){const b=A+c*d,T=A+c*(d+1),F=A+1+c*(d+1),I=A+1+c*d;p.push(b,T,I),p.push(T,F,I)}this.setIndex(p),this.setAttribute("position",new Et(_,3)),this.setAttribute("normal",new Et(x,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.width,e.height,e.widthSegments,e.heightSegments)}}var w0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R0=`#ifdef USE_ALPHAHASH
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
#endif`,C0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D0=`#ifdef USE_AOMAP
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
#endif`,U0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N0=`#ifdef USE_BATCHING
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
#endif`,O0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,z0=`#ifdef USE_IRIDESCENCE
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
#endif`,H0=`#ifdef USE_BUMPMAP
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,K0=`#define PI 3.141592653589793
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
} // validated`,Z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J0=`vec3 transformedNormal = objectNormal;
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
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i_="gl_FragColor = linearToOutputTexel( gl_FragColor );",s_=`
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
}`,r_=`#ifdef USE_ENVMAP
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
#endif`,o_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,a_=`#ifdef USE_ENVMAP
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
#endif`,l_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c_=`#ifdef USE_ENVMAP
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
#endif`,u_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p_=`#ifdef USE_GRADIENTMAP
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
}`,m_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,__=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v_=`uniform bool receiveShadow;
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
#endif`,x_=`#ifdef USE_ENVMAP
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
#endif`,M_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b_=`PhysicalMaterial material;
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
#endif`,T_=`struct PhysicalMaterial {
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
}`,A_=`
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
#endif`,w_=`#if defined( RE_IndirectDiffuse )
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
#endif`,R_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O_=`#if defined( USE_POINTS_UV )
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
#endif`,F_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V_=`#ifdef USE_MORPHTARGETS
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
#endif`,G_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,X_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$_=`#ifdef USE_NORMALMAP
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
#endif`,K_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ev=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ov=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,av=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hv=`float getShadowMask() {
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
}`,fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dv=`#ifdef USE_SKINNING
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
#endif`,pv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mv=`#ifdef USE_SKINNING
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
#endif`,gv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mv=`#ifdef USE_TRANSMISSION
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
#endif`,yv=`#ifdef USE_TRANSMISSION
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
#endif`,Sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wv=`uniform sampler2D t2D;
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
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`#include <common>
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
}`,Dv=`#if DEPTH_PACKING == 3200
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
}`,Uv=`#define DISTANCE
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
}`,Nv=`#define DISTANCE
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
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bv=`uniform float scale;
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
}`,kv=`uniform vec3 diffuse;
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
}`,zv=`#include <common>
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
}`,Hv=`uniform vec3 diffuse;
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
}`,Vv=`#define LAMBERT
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
}`,Gv=`#define LAMBERT
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
}`,Wv=`#define MATCAP
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
}`,Xv=`#define MATCAP
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
}`,qv=`#define NORMAL
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
}`,Yv=`#define NORMAL
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
}`,jv=`#define PHONG
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
}`,$v=`#define PHONG
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
}`,Kv=`#define STANDARD
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
}`,Zv=`#define STANDARD
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
}`,Jv=`#define TOON
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
}`,Qv=`#define TOON
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
}`,ex=`uniform float size;
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
}`,tx=`uniform vec3 diffuse;
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
}`,nx=`#include <common>
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
}`,ix=`uniform vec3 color;
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
}`,sx=`uniform float rotation;
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
}`,rx=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:w0,alphahash_pars_fragment:R0,alphamap_fragment:C0,alphamap_pars_fragment:P0,alphatest_fragment:L0,alphatest_pars_fragment:I0,aomap_fragment:D0,aomap_pars_fragment:U0,batching_pars_vertex:N0,batching_vertex:O0,begin_vertex:F0,beginnormal_vertex:B0,bsdfs:k0,iridescence_fragment:z0,bumpmap_pars_fragment:H0,clipping_planes_fragment:V0,clipping_planes_pars_fragment:G0,clipping_planes_pars_vertex:W0,clipping_planes_vertex:X0,color_fragment:q0,color_pars_fragment:Y0,color_pars_vertex:j0,color_vertex:$0,common:K0,cube_uv_reflection_fragment:Z0,defaultnormal_vertex:J0,displacementmap_pars_vertex:Q0,displacementmap_vertex:e_,emissivemap_fragment:t_,emissivemap_pars_fragment:n_,colorspace_fragment:i_,colorspace_pars_fragment:s_,envmap_fragment:r_,envmap_common_pars_fragment:o_,envmap_pars_fragment:a_,envmap_pars_vertex:l_,envmap_physical_pars_fragment:x_,envmap_vertex:c_,fog_vertex:u_,fog_pars_vertex:h_,fog_fragment:f_,fog_pars_fragment:d_,gradientmap_pars_fragment:p_,lightmap_pars_fragment:m_,lights_lambert_fragment:g_,lights_lambert_pars_fragment:__,lights_pars_begin:v_,lights_toon_fragment:M_,lights_toon_pars_fragment:y_,lights_phong_fragment:S_,lights_phong_pars_fragment:E_,lights_physical_fragment:b_,lights_physical_pars_fragment:T_,lights_fragment_begin:A_,lights_fragment_maps:w_,lights_fragment_end:R_,logdepthbuf_fragment:C_,logdepthbuf_pars_fragment:P_,logdepthbuf_pars_vertex:L_,logdepthbuf_vertex:I_,map_fragment:D_,map_pars_fragment:U_,map_particle_fragment:N_,map_particle_pars_fragment:O_,metalnessmap_fragment:F_,metalnessmap_pars_fragment:B_,morphinstance_vertex:k_,morphcolor_vertex:z_,morphnormal_vertex:H_,morphtarget_pars_vertex:V_,morphtarget_vertex:G_,normal_fragment_begin:W_,normal_fragment_maps:X_,normal_pars_fragment:q_,normal_pars_vertex:Y_,normal_vertex:j_,normalmap_pars_fragment:$_,clearcoat_normal_fragment_begin:K_,clearcoat_normal_fragment_maps:Z_,clearcoat_pars_fragment:J_,iridescence_pars_fragment:Q_,opaque_fragment:ev,packing:tv,premultiplied_alpha_fragment:nv,project_vertex:iv,dithering_fragment:sv,dithering_pars_fragment:rv,roughnessmap_fragment:ov,roughnessmap_pars_fragment:av,shadowmap_pars_fragment:lv,shadowmap_pars_vertex:cv,shadowmap_vertex:uv,shadowmask_pars_fragment:hv,skinbase_vertex:fv,skinning_pars_vertex:dv,skinning_vertex:pv,skinnormal_vertex:mv,specularmap_fragment:gv,specularmap_pars_fragment:_v,tonemapping_fragment:vv,tonemapping_pars_fragment:xv,transmission_fragment:Mv,transmission_pars_fragment:yv,uv_pars_fragment:Sv,uv_pars_vertex:Ev,uv_vertex:bv,worldpos_vertex:Tv,background_vert:Av,background_frag:wv,backgroundCube_vert:Rv,backgroundCube_frag:Cv,cube_vert:Pv,cube_frag:Lv,depth_vert:Iv,depth_frag:Dv,distanceRGBA_vert:Uv,distanceRGBA_frag:Nv,equirect_vert:Ov,equirect_frag:Fv,linedashed_vert:Bv,linedashed_frag:kv,meshbasic_vert:zv,meshbasic_frag:Hv,meshlambert_vert:Vv,meshlambert_frag:Gv,meshmatcap_vert:Wv,meshmatcap_frag:Xv,meshnormal_vert:qv,meshnormal_frag:Yv,meshphong_vert:jv,meshphong_frag:$v,meshphysical_vert:Kv,meshphysical_frag:Zv,meshtoon_vert:Jv,meshtoon_frag:Qv,points_vert:ex,points_frag:tx,shadow_vert:nx,shadow_frag:ix,sprite_vert:sx,sprite_frag:rx},xe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Dn={basic:{uniforms:Bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new je(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Bt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Bt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new je(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Bt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Bt([xe.points,xe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Bt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Bt([xe.common,xe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Bt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Bt([xe.sprite,xe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Bt([xe.common,xe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Bt([xe.lights,xe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Dn.physical={uniforms:Bt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const eo={r:0,b:0,g:0},Fi=new Hn,ox=new pt;function ax(n,e,t,i,s,r,a){const o=new je(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function _(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?t:e).get(b)),b}function x(A){let b=!1;const T=_(A);T===null?d(o,l):T&&T.isColor&&(d(T,1),b=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,b){const T=_(b);T&&(T.isCubeTexture||T.mapping===Go)?(h===void 0&&(h=new _t(new Ci(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Ns(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Fi.copy(b.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ox.makeRotationFromEuler(Fi)),h.material.toneMapped=rt.getTransfer(T.colorSpace)!==dt,(u!==T||f!==T.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,p=n.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new _t(new ts(2,2),new wi({name:"BackgroundMaterial",uniforms:Ns(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=rt.getTransfer(T.colorSpace)!==dt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,b){A.getRGB(eo,ld(n)),i.buffers.color.setClear(eo.r,eo.g,eo.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(A,b=1){o.set(A),l=b,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(o,l)},render:x,addToRenderList:m}}function lx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(v,E,$,q,Q){let le=!1;const V=u(q,$,E);r!==V&&(r=V,c(r.object)),le=p(v,q,$,Q),le&&_(v,q,$,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(le||a)&&(a=!1,T(v,E,$,q),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function u(v,E,$){const q=$.wireframe===!0;let Q=i[v.id];Q===void 0&&(Q={},i[v.id]=Q);let le=Q[E.id];le===void 0&&(le={},Q[E.id]=le);let V=le[q];return V===void 0&&(V=f(l()),le[q]=V),V}function f(v){const E=[],$=[],q=[];for(let Q=0;Q<t;Q++)E[Q]=0,$[Q]=0,q[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:$,attributeDivisors:q,object:v,attributes:{},index:null}}function p(v,E,$,q){const Q=r.attributes,le=E.attributes;let V=0;const ie=$.getAttributes();for(const H in ie)if(ie[H].location>=0){const ae=Q[H];let L=le[H];if(L===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(L=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(L=v.instanceColor)),ae===void 0||ae.attribute!==L||L&&ae.data!==L.data)return!0;V++}return r.attributesNum!==V||r.index!==q}function _(v,E,$,q){const Q={},le=E.attributes;let V=0;const ie=$.getAttributes();for(const H in ie)if(ie[H].location>=0){let ae=le[H];ae===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ae=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ae=v.instanceColor));const L={};L.attribute=ae,ae&&ae.data&&(L.data=ae.data),Q[H]=L,V++}r.attributes=Q,r.attributesNum=V,r.index=q}function x(){const v=r.newAttributes;for(let E=0,$=v.length;E<$;E++)v[E]=0}function m(v){d(v,0)}function d(v,E){const $=r.newAttributes,q=r.enabledAttributes,Q=r.attributeDivisors;$[v]=1,q[v]===0&&(n.enableVertexAttribArray(v),q[v]=1),Q[v]!==E&&(n.vertexAttribDivisor(v,E),Q[v]=E)}function A(){const v=r.newAttributes,E=r.enabledAttributes;for(let $=0,q=E.length;$<q;$++)E[$]!==v[$]&&(n.disableVertexAttribArray($),E[$]=0)}function b(v,E,$,q,Q,le,V){V===!0?n.vertexAttribIPointer(v,E,$,Q,le):n.vertexAttribPointer(v,E,$,q,Q,le)}function T(v,E,$,q){x();const Q=q.attributes,le=$.getAttributes(),V=E.defaultAttributeValues;for(const ie in le){const H=le[ie];if(H.location>=0){let me=Q[ie];if(me===void 0&&(ie==="instanceMatrix"&&v.instanceMatrix&&(me=v.instanceMatrix),ie==="instanceColor"&&v.instanceColor&&(me=v.instanceColor)),me!==void 0){const ae=me.normalized,L=me.itemSize,Le=e.get(me);if(Le===void 0)continue;const Ye=Le.buffer,D=Le.type,K=Le.bytesPerElement,_e=D===n.INT||D===n.UNSIGNED_INT||me.gpuType===pc;if(me.isInterleavedBufferAttribute){const ve=me.data,Be=ve.stride,Ie=me.offset;if(ve.isInstancedInterleavedBuffer){for(let Ke=0;Ke<H.locationSize;Ke++)d(H.location+Ke,ve.meshPerAttribute);v.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ke=0;Ke<H.locationSize;Ke++)m(H.location+Ke);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let Ke=0;Ke<H.locationSize;Ke++)b(H.location+Ke,L/H.locationSize,D,ae,Be*K,(Ie+L/H.locationSize*Ke)*K,_e)}else{if(me.isInstancedBufferAttribute){for(let ve=0;ve<H.locationSize;ve++)d(H.location+ve,me.meshPerAttribute);v.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ve=0;ve<H.locationSize;ve++)m(H.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let ve=0;ve<H.locationSize;ve++)b(H.location+ve,L/H.locationSize,D,ae,L*K,L/H.locationSize*ve*K,_e)}}else if(V!==void 0){const ae=V[ie];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(H.location,ae);break;case 3:n.vertexAttrib3fv(H.location,ae);break;case 4:n.vertexAttrib4fv(H.location,ae);break;default:n.vertexAttrib1fv(H.location,ae)}}}}A()}function F(){z();for(const v in i){const E=i[v];for(const $ in E){const q=E[$];for(const Q in q)h(q[Q].object),delete q[Q];delete E[$]}delete i[v]}}function I(v){if(i[v.id]===void 0)return;const E=i[v.id];for(const $ in E){const q=E[$];for(const Q in q)h(q[Q].object),delete q[Q];delete E[$]}delete i[v.id]}function R(v){for(const E in i){const $=i[E];if($[v.id]===void 0)continue;const q=$[v.id];for(const Q in q)h(q[Q].object),delete q[Q];delete $[v.id]}}function z(){ce(),a=!0,r!==s&&(r=s,c(r.object))}function ce(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:z,resetDefaultState:ce,dispose:F,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function cx(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];t.update(p,i,1)}function l(c,h,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x];for(let x=0;x<f.length;x++)t.update(_,i,f[x])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ux(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Sn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const z=R===br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ri&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ni&&!z)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:T,vertexTextures:F,maxSamples:I}}function hx(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new gi,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const _=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{const A=r?0:i,b=A*4;let T=d.clippingState||null;l.value=T,T=h(_,f,b,p);for(let F=0;F!==b;++F)T[F]=t[F];d.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,p,_){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const d=p+x*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,T=p;b!==x;++b,T+=4)a.copy(u[b]).applyMatrix4(A,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function fx(n){let e=new WeakMap;function t(a,o){return o===pl?a.mapping=Ls:o===ml&&(a.mapping=Is),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===pl||o===ml)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new E0(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class bc extends cd{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ms=4,ju=[.125,.215,.35,.446,.526,.582],Gi=20,Ba=new bc,$u=new je;let ka=null,za=0,Ha=0,Va=!1;const zi=(1+Math.sqrt(5))/2,_s=1/zi,Ku=[new k(-zi,_s,0),new k(zi,_s,0),new k(-_s,0,zi),new k(_s,0,zi),new k(0,zi,-_s),new k(0,zi,_s),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Zu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ka=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ka,za,Ha),this._renderer.xr.enabled=Va,e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ls||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ka=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:br,format:Sn,colorSpace:Ri,depthBuffer:!1},s=Ju(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ju(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dx(r)),this._blurMaterial=px(r,e,t)}return s}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,i,s){const o=new ln(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor($u),h.toneMapping=Ei,h.autoClear=!1;const p=new In({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),_=new _t(new Ci,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy($u),x=!0);for(let d=0;d<6;d++){const A=d%3;A===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):A===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const b=this._cubeSize;to(s,A*b,d>2?b:0,b,b),h.setRenderTarget(s),x&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ls||e.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new _t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;to(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ba)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ku[(s-r-1)%Ku.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new _t(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Gi-1),x=r/_,m=isFinite(r)?1+Math.floor(h*x):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const d=[];let A=0;for(let R=0;R<Gi;++R){const z=R/x,ce=Math.exp(-z*z/2);d.push(ce),R===0?A+=ce:R<m&&(A+=2*ce)}for(let R=0;R<d.length;R++)d[R]=d[R]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-i;const T=this._sizeLods[s],F=3*T*(s>b-Ms?s-b+Ms:0),I=4*(this._cubeSize-T);to(t,F,I,3*T,2*T),l.setRenderTarget(t),l.render(u,Ba)}}function dx(n){const e=[],t=[],i=[];let s=n;const r=n-Ms+1+ju.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Ms?l=ju[a-n+Ms-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,x=3,m=2,d=1,A=new Float32Array(x*_*p),b=new Float32Array(m*_*p),T=new Float32Array(d*_*p);for(let I=0;I<p;I++){const R=I%3*2/3-1,z=I>2?0:-1,ce=[R,z,0,R+2/3,z,0,R+2/3,z+1,0,R,z,0,R+2/3,z+1,0,R,z+1,0];A.set(ce,x*_*I),b.set(f,m*_*I);const v=[I,I,I,I,I,I];T.set(v,d*_*I)}const F=new sn;F.setAttribute("position",new dn(A,x)),F.setAttribute("uv",new dn(b,m)),F.setAttribute("faceIndex",new dn(T,d)),e.push(F),s>Ms&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ju(n,e,t){const i=new Ji(n,e,t);return i.texture.mapping=Go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function to(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function px(n,e,t){const i=new Float32Array(Gi),s=new k(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Qu(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function eh(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}function mx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===pl||l===ml,h=l===Ls||l===Is;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Zu(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Zu(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function gx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&po("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function _x(n,e,t,i){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,d=x.length;m<d;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,_=u.attributes.position;let x=0;if(p!==null){const A=p.array;x=p.version;for(let b=0,T=A.length;b<T;b+=3){const F=A[b+0],I=A[b+1],R=A[b+2];f.push(F,I,I,R,R,F)}}else if(_!==void 0){const A=_.array;x=_.version;for(let b=0,T=A.length/3-1;b<T;b+=3){const F=b+0,I=b+1,R=b+2;f.push(F,I,I,R,R,F)}}else return;const m=new(nd(f)?ad:od)(f,1);m.version=x;const d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function vx(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*a),t.update(p,i,1)}function c(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,f*a,_),t.update(p,i,_))}function h(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function u(f,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,x,0,_);let d=0;for(let A=0;A<_;A++)d+=p[A];for(let A=0;A<x.length;A++)t.update(d,i,x[A])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Mx(n,e,t){const i=new WeakMap,s=new lt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let ce=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",ce)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),_===!0&&(b=2),x===!0&&(b=3);let T=o.attributes.position.count*b,F=1;T>e.maxTextureSize&&(F=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const I=new Float32Array(T*F*4*u),R=new sd(I,T,F,u);R.type=ni,R.needsUpdate=!0;const z=b*4;for(let v=0;v<u;v++){const E=m[v],$=d[v],q=A[v],Q=T*F*4*v;for(let le=0;le<E.count;le++){const V=le*z;p===!0&&(s.fromBufferAttribute(E,le),I[Q+V+0]=s.x,I[Q+V+1]=s.y,I[Q+V+2]=s.z,I[Q+V+3]=0),_===!0&&(s.fromBufferAttribute($,le),I[Q+V+4]=s.x,I[Q+V+5]=s.y,I[Q+V+6]=s.z,I[Q+V+7]=0),x===!0&&(s.fromBufferAttribute(q,le),I[Q+V+8]=s.x,I[Q+V+9]=s.y,I[Q+V+10]=s.z,I[Q+V+11]=q.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new $e(T,F)},i.set(o,f),o.addEventListener("dispose",ce)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function yx(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class fd extends Vt{constructor(e,t,i,s,r,a,o,l,c,h=bs){if(h!==bs&&h!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===bs&&(i=Zi),i===void 0&&h===Us&&(i=Ds),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const dd=new Vt,th=new fd(1,1),pd=new sd,md=new a0,gd=new ud,nh=[],ih=[],sh=new Float32Array(16),rh=new Float32Array(9),oh=new Float32Array(4);function Fs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=nh[s];if(r===void 0&&(r=new Float32Array(s),nh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qo(n,e){let t=ih[e];t===void 0&&(t=new Int32Array(e),ih[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Sx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function Tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function Ax(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;oh.set(i),n.uniformMatrix2fv(this.addr,!1,oh),At(t,i)}}function wx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;rh.set(i),n.uniformMatrix3fv(this.addr,!1,rh),At(t,i)}}function Rx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;sh.set(i),n.uniformMatrix4fv(this.addr,!1,sh),At(t,i)}}function Cx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function Lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function Ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function Dx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ux(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function Nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function Ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function Fx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(th.compareFunction=td,r=th):r=dd,t.setTexture2D(e||r,s)}function Bx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||md,s)}function kx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||gd,s)}function zx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||pd,s)}function Hx(n){switch(n){case 5126:return Sx;case 35664:return Ex;case 35665:return bx;case 35666:return Tx;case 35674:return Ax;case 35675:return wx;case 35676:return Rx;case 5124:case 35670:return Cx;case 35667:case 35671:return Px;case 35668:case 35672:return Lx;case 35669:case 35673:return Ix;case 5125:return Dx;case 36294:return Ux;case 36295:return Nx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return Fx;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return zx}}function Vx(n,e){n.uniform1fv(this.addr,e)}function Gx(n,e){const t=Fs(e,this.size,2);n.uniform2fv(this.addr,t)}function Wx(n,e){const t=Fs(e,this.size,3);n.uniform3fv(this.addr,t)}function Xx(n,e){const t=Fs(e,this.size,4);n.uniform4fv(this.addr,t)}function qx(n,e){const t=Fs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Yx(n,e){const t=Fs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jx(n,e){const t=Fs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $x(n,e){n.uniform1iv(this.addr,e)}function Kx(n,e){n.uniform2iv(this.addr,e)}function Zx(n,e){n.uniform3iv(this.addr,e)}function Jx(n,e){n.uniform4iv(this.addr,e)}function Qx(n,e){n.uniform1uiv(this.addr,e)}function eM(n,e){n.uniform2uiv(this.addr,e)}function tM(n,e){n.uniform3uiv(this.addr,e)}function nM(n,e){n.uniform4uiv(this.addr,e)}function iM(n,e,t){const i=this.cache,s=e.length,r=qo(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||dd,r[a])}function sM(n,e,t){const i=this.cache,s=e.length,r=qo(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||md,r[a])}function rM(n,e,t){const i=this.cache,s=e.length,r=qo(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||gd,r[a])}function oM(n,e,t){const i=this.cache,s=e.length,r=qo(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||pd,r[a])}function aM(n){switch(n){case 5126:return Vx;case 35664:return Gx;case 35665:return Wx;case 35666:return Xx;case 35674:return qx;case 35675:return Yx;case 35676:return jx;case 5124:case 35670:return $x;case 35667:case 35671:return Kx;case 35668:case 35672:return Zx;case 35669:case 35673:return Jx;case 5125:return Qx;case 36294:return eM;case 36295:return tM;case 36296:return nM;case 35678:case 36198:case 36298:case 36306:case 35682:return iM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return rM;case 36289:case 36303:case 36311:case 36292:return oM}}class lM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Hx(t.type)}}class cM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aM(t.type)}}class uM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function ah(n,e){n.seq.push(e),n.map[e.id]=e}function hM(n,e,t){const i=n.name,s=i.length;for(Ga.lastIndex=0;;){const r=Ga.exec(i),a=Ga.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ah(t,c===void 0?new lM(o,n,e):new cM(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new uM(o),ah(t,u)),t=u}}}class mo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);hM(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function lh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const fM=37297;let dM=0;function pM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function mM(n){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(n);let i;switch(e===t?i="":e===Ro&&t===wo?i="LinearDisplayP3ToLinearSRGB":e===wo&&t===Ro&&(i="LinearSRGBToLinearDisplayP3"),n){case Ri:case Wo:return[i,"LinearTransferOETF"];case Yt:case Mc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ch(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+pM(n.getShaderSource(e),a)}else return s}function gM(n,e){const t=mM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function _M(n,e){let t;switch(e){case Ug:t="Linear";break;case Ng:t="Reinhard";break;case Og:t="Cineon";break;case Vf:t="ACESFilmic";break;case Bg:t="AgX";break;case kg:t="Neutral";break;case Fg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const no=new k;function vM(){rt.getLuminanceCoefficients(no);const n=no.x.toFixed(4),e=no.y.toFixed(4),t=no.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function MM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Zs(n){return n!==""}function uh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(n){return n.replace(SM,bM)}const EM=new Map;function bM(n,e){let t=Xe[e];if(t===void 0){const i=EM.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xl(t)}const TM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(n){return n.replace(TM,AM)}function AM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function wM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===dg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function RM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ls:case Is:e="ENVMAP_TYPE_CUBE";break;case Go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function PM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hf:e="ENVMAP_BLENDING_MULTIPLY";break;case Ig:e="ENVMAP_BLENDING_MIX";break;case Dg:e="ENVMAP_BLENDING_ADD";break}return e}function LM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function IM(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=wM(t),c=RM(t),h=CM(t),u=PM(t),f=LM(t),p=xM(t),_=MM(r),x=s.createProgram();let m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zs).join(`
`),d.length>0&&(d+=`
`)):(m=[dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),d=[dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Ei?_M("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,gM("linearToOutputTexel",t.outputColorSpace),vM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),a=Xl(a),a=uh(a,t),a=hh(a,t),o=Xl(o),o=uh(o,t),o=hh(o,t),a=fh(a),o=fh(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=A+m+a,T=A+d+o,F=lh(s,s.VERTEX_SHADER,b),I=lh(s,s.FRAGMENT_SHADER,T);s.attachShader(x,F),s.attachShader(x,I),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(E){if(n.debug.checkShaderErrors){const $=s.getProgramInfoLog(x).trim(),q=s.getShaderInfoLog(F).trim(),Q=s.getShaderInfoLog(I).trim();let le=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(le=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,F,I);else{const ie=ch(s,F,"vertex"),H=ch(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+$+`
`+ie+`
`+H)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(q===""||Q==="")&&(V=!1);V&&(E.diagnostics={runnable:le,programLog:$,vertexShader:{log:q,prefix:m},fragmentShader:{log:Q,prefix:d}})}s.deleteShader(F),s.deleteShader(I),z=new mo(s,x),ce=yM(s,x)}let z;this.getUniforms=function(){return z===void 0&&R(this),z};let ce;this.getAttributes=function(){return ce===void 0&&R(this),ce};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,fM)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=I,this}let DM=0;class UM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new NM(e),t.set(e,i)),i}}class NM{constructor(e){this.id=DM++,this.code=e,this.usedTimes=0}}function OM(n,e,t,i,s,r,a){const o=new Sc,l=new UM,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,p=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function d(v,E,$,q,Q){const le=q.fog,V=Q.geometry,ie=v.isMeshStandardMaterial?q.environment:null,H=(v.isMeshStandardMaterial?t:e).get(v.envMap||ie),me=H&&H.mapping===Go?H.image.height:null,ae=x[v.type];v.precision!==null&&(_=s.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const L=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Le=L!==void 0?L.length:0;let Ye=0;V.morphAttributes.position!==void 0&&(Ye=1),V.morphAttributes.normal!==void 0&&(Ye=2),V.morphAttributes.color!==void 0&&(Ye=3);let D,K,_e,ve;if(ae){const Wt=Dn[ae];D=Wt.vertexShader,K=Wt.fragmentShader}else D=v.vertexShader,K=v.fragmentShader,l.update(v),_e=l.getVertexShaderID(v),ve=l.getFragmentShaderID(v);const Be=n.getRenderTarget(),Ie=Q.isInstancedMesh===!0,Ke=Q.isBatchedMesh===!0,w=!!v.map,C=!!v.matcap,y=!!H,se=!!v.aoMap,Y=!!v.lightMap,J=!!v.bumpMap,ne=!!v.normalMap,re=!!v.displacementMap,ee=!!v.emissiveMap,M=!!v.metalnessMap,g=!!v.roughnessMap,P=v.anisotropy>0,B=v.clearcoat>0,Z=v.dispersion>0,X=v.iridescence>0,de=v.sheen>0,ue=v.transmission>0,fe=P&&!!v.anisotropyMap,De=B&&!!v.clearcoatMap,he=B&&!!v.clearcoatNormalMap,Me=B&&!!v.clearcoatRoughnessMap,Ce=X&&!!v.iridescenceMap,Ne=X&&!!v.iridescenceThicknessMap,ge=de&&!!v.sheenColorMap,ke=de&&!!v.sheenRoughnessMap,ze=!!v.specularMap,ot=!!v.specularColorMap,U=!!v.specularIntensityMap,be=ue&&!!v.transmissionMap,te=ue&&!!v.thicknessMap,oe=!!v.gradientMap,Se=!!v.alphaMap,Te=v.alphaTest>0,Ze=!!v.alphaHash,yt=!!v.extensions;let Gt=Ei;v.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(Gt=n.toneMapping);const Qe={shaderID:ae,shaderType:v.type,shaderName:v.name,vertexShader:D,fragmentShader:K,defines:v.defines,customVertexShaderID:_e,customFragmentShaderID:ve,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:Ke,batchingColor:Ke&&Q._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&Q.instanceColor!==null,instancingMorph:Ie&&Q.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Be===null?n.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:Ri,alphaToCoverage:!!v.alphaToCoverage,map:w,matcap:C,envMap:y,envMapMode:y&&H.mapping,envMapCubeUVHeight:me,aoMap:se,lightMap:Y,bumpMap:J,normalMap:ne,displacementMap:p&&re,emissiveMap:ee,normalMapObjectSpace:ne&&v.normalMapType===Gg,normalMapTangentSpace:ne&&v.normalMapType===ed,metalnessMap:M,roughnessMap:g,anisotropy:P,anisotropyMap:fe,clearcoat:B,clearcoatMap:De,clearcoatNormalMap:he,clearcoatRoughnessMap:Me,dispersion:Z,iridescence:X,iridescenceMap:Ce,iridescenceThicknessMap:Ne,sheen:de,sheenColorMap:ge,sheenRoughnessMap:ke,specularMap:ze,specularColorMap:ot,specularIntensityMap:U,transmission:ue,transmissionMap:be,thicknessMap:te,gradientMap:oe,opaque:v.transparent===!1&&v.blending===Es&&v.alphaToCoverage===!1,alphaMap:Se,alphaTest:Te,alphaHash:Ze,combine:v.combine,mapUv:w&&m(v.map.channel),aoMapUv:se&&m(v.aoMap.channel),lightMapUv:Y&&m(v.lightMap.channel),bumpMapUv:J&&m(v.bumpMap.channel),normalMapUv:ne&&m(v.normalMap.channel),displacementMapUv:re&&m(v.displacementMap.channel),emissiveMapUv:ee&&m(v.emissiveMap.channel),metalnessMapUv:M&&m(v.metalnessMap.channel),roughnessMapUv:g&&m(v.roughnessMap.channel),anisotropyMapUv:fe&&m(v.anisotropyMap.channel),clearcoatMapUv:De&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:ke&&m(v.sheenRoughnessMap.channel),specularMapUv:ze&&m(v.specularMap.channel),specularColorMapUv:ot&&m(v.specularColorMap.channel),specularIntensityMapUv:U&&m(v.specularIntensityMap.channel),transmissionMapUv:be&&m(v.transmissionMap.channel),thicknessMapUv:te&&m(v.thicknessMap.channel),alphaMapUv:Se&&m(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ne||P),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!V.attributes.uv&&(w||Se),fog:!!le,useFog:v.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Ye,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&$.length>0,shadowMapType:n.shadowMap.type,toneMapping:Gt,decodeVideoTexture:w&&v.map.isVideoTexture===!0&&rt.getTransfer(v.map.colorSpace)===dt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===cn,flipSided:v.side===$t,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:yt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&v.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function A(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const $ in v.defines)E.push($),E.push(v.defines[$]);return v.isRawShaderMaterial===!1&&(b(E,v),T(E,v),E.push(n.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function b(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function T(v,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),v.push(o.mask)}function F(v){const E=x[v.type];let $;if(E){const q=Dn[E];$=x0.clone(q.uniforms)}else $=v.uniforms;return $}function I(v,E){let $;for(let q=0,Q=h.length;q<Q;q++){const le=h[q];if(le.cacheKey===E){$=le,++$.usedTimes;break}}return $===void 0&&($=new IM(n,E,v,r),h.push($)),$}function R(v){if(--v.usedTimes===0){const E=h.indexOf(v);h[E]=h[h.length-1],h.pop(),v.destroy()}}function z(v){l.remove(v)}function ce(){l.dispose()}return{getParameters:d,getProgramCacheKey:A,getUniforms:F,acquireProgram:I,releaseProgram:R,releaseShaderCache:z,programs:h,dispose:ce}}function FM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function BM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ph(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,f,p,_,x,m){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:_,renderOrder:u.renderOrder,z:x,group:m},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=x,d.group=m),e++,d}function o(u,f,p,_,x,m){const d=a(u,f,p,_,x,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(u,f,p,_,x,m){const d=a(u,f,p,_,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||BM),i.length>1&&i.sort(f||ph),s.length>1&&s.sort(f||ph)}function h(){for(let u=e,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function kM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new mh,n.set(i,[a])):s>=r.length?(a=new mh,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function zM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new je};break;case"SpotLight":t={position:new k,direction:new k,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function HM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let VM=0;function GM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function WM(n){const e=new zM,t=HM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new pt,a=new pt;function o(c){let h=0,u=0,f=0;for(let ce=0;ce<9;ce++)i.probe[ce].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,A=0,b=0,T=0,F=0,I=0,R=0;c.sort(GM);for(let ce=0,v=c.length;ce<v;ce++){const E=c[ce],$=E.color,q=E.intensity,Q=E.distance,le=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=$.r*q,u+=$.g*q,f+=$.b*q;else if(E.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(E.sh.coefficients[V],q);R++}else if(E.isDirectionalLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const ie=E.shadow,H=t.get(E);H.shadowIntensity=ie.intensity,H.shadowBias=ie.bias,H.shadowNormalBias=ie.normalBias,H.shadowRadius=ie.radius,H.shadowMapSize=ie.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=le,i.directionalShadowMatrix[p]=E.shadow.matrix,A++}i.directional[p]=V,p++}else if(E.isSpotLight){const V=e.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy($).multiplyScalar(q),V.distance=Q,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,i.spot[x]=V;const ie=E.shadow;if(E.map&&(i.spotLightMap[F]=E.map,F++,ie.updateMatrices(E),E.castShadow&&I++),i.spotLightMatrix[x]=ie.matrix,E.castShadow){const H=t.get(E);H.shadowIntensity=ie.intensity,H.shadowBias=ie.bias,H.shadowNormalBias=ie.normalBias,H.shadowRadius=ie.radius,H.shadowMapSize=ie.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=le,T++}x++}else if(E.isRectAreaLight){const V=e.get(E);V.color.copy($).multiplyScalar(q),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=V,m++}else if(E.isPointLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),V.distance=E.distance,V.decay=E.decay,E.castShadow){const ie=E.shadow,H=t.get(E);H.shadowIntensity=ie.intensity,H.shadowBias=ie.bias,H.shadowNormalBias=ie.normalBias,H.shadowRadius=ie.radius,H.shadowMapSize=ie.mapSize,H.shadowCameraNear=ie.camera.near,H.shadowCameraFar=ie.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=le,i.pointShadowMatrix[_]=E.shadow.matrix,b++}i.point[_]=V,_++}else if(E.isHemisphereLight){const V=e.get(E);V.skyColor.copy(E.color).multiplyScalar(q),V.groundColor.copy(E.groundColor).multiplyScalar(q),i.hemi[d]=V,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const z=i.hash;(z.directionalLength!==p||z.pointLength!==_||z.spotLength!==x||z.rectAreaLength!==m||z.hemiLength!==d||z.numDirectionalShadows!==A||z.numPointShadows!==b||z.numSpotShadows!==T||z.numSpotMaps!==F||z.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=T+F-I,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,z.directionalLength=p,z.pointLength=_,z.spotLength=x,z.rectAreaLength=m,z.hemiLength=d,z.numDirectionalShadows=A,z.numPointShadows=b,z.numSpotShadows=T,z.numSpotMaps=F,z.numLightProbes=R,i.version=VM++)}function l(c,h){let u=0,f=0,p=0,_=0,x=0;const m=h.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const b=c[d];if(b.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),u++}else if(b.isSpotLight){const T=i.spot[p];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const T=i.hemi[x];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function gh(n){const e=new WM(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function XM(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new gh(n),e.set(s,[o])):r>=a.length?(o=new gh(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class qM extends es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YM extends es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$M=`uniform sampler2D shadow_pass;
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
}`;function KM(n,e,t){let i=new Ec;const s=new $e,r=new $e,a=new lt,o=new qM({depthPacking:Vg}),l=new YM,c={},h=t.maxTextureSize,u={[Ai]:$t,[$t]:Ai,[cn]:cn},f=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:jM,fragmentShader:$M}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new sn;_.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new _t(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let d=this.type;this.render=function(I,R,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const ce=n.getRenderTarget(),v=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Si),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const q=d!==Kn&&this.type===Kn,Q=d===Kn&&this.type!==Kn;for(let le=0,V=I.length;le<V;le++){const ie=I[le],H=ie.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const me=H.getFrameExtents();if(s.multiply(me),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/me.x),s.x=r.x*me.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/me.y),s.y=r.y*me.y,H.mapSize.y=r.y)),H.map===null||q===!0||Q===!0){const L=this.type!==Kn?{minFilter:Ht,magFilter:Ht}:{};H.map!==null&&H.map.dispose(),H.map=new Ji(s.x,s.y,L),H.map.texture.name=ie.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ae=H.getViewportCount();for(let L=0;L<ae;L++){const Le=H.getViewport(L);a.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),$.viewport(a),H.updateMatrices(ie,L),i=H.getFrustum(),T(R,z,H.camera,ie,this.type)}H.isPointLightShadow!==!0&&this.type===Kn&&A(H,z),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(ce,v,E)};function A(I,R){const z=e.update(x);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ji(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(R,null,z,f,x,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(R,null,z,p,x,null)}function b(I,R,z,ce){let v=null;const E=z.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(E!==void 0)v=E;else if(v=z.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const $=v.uuid,q=R.uuid;let Q=c[$];Q===void 0&&(Q={},c[$]=Q);let le=Q[q];le===void 0&&(le=v.clone(),Q[q]=le,R.addEventListener("dispose",F)),v=le}if(v.visible=R.visible,v.wireframe=R.wireframe,ce===Kn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,z.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const $=n.properties.get(v);$.light=z}return v}function T(I,R,z,ce,v){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&v===Kn)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,I.matrixWorld);const q=e.update(I),Q=I.material;if(Array.isArray(Q)){const le=q.groups;for(let V=0,ie=le.length;V<ie;V++){const H=le[V],me=Q[H.materialIndex];if(me&&me.visible){const ae=b(I,me,ce,v);I.onBeforeShadow(n,I,R,z,q,ae,H),n.renderBufferDirect(z,null,q,ae,I,H),I.onAfterShadow(n,I,R,z,q,ae,H)}}}else if(Q.visible){const le=b(I,Q,ce,v);I.onBeforeShadow(n,I,R,z,q,le,null),n.renderBufferDirect(z,null,q,le,I,null),I.onAfterShadow(n,I,R,z,q,le,null)}}const $=I.children;for(let q=0,Q=$.length;q<Q;q++)T($[q],R,z,ce,v)}function F(I){I.target.removeEventListener("dispose",F);for(const z in c){const ce=c[z],v=I.target.uuid;v in ce&&(ce[v].dispose(),delete ce[v])}}}const ZM={[al]:ll,[cl]:fl,[ul]:dl,[Ps]:hl,[ll]:al,[fl]:cl,[dl]:ul,[hl]:Ps};function JM(n){function e(){let U=!1;const be=new lt;let te=null;const oe=new lt(0,0,0,0);return{setMask:function(Se){te!==Se&&!U&&(n.colorMask(Se,Se,Se,Se),te=Se)},setLocked:function(Se){U=Se},setClear:function(Se,Te,Ze,yt,Gt){Gt===!0&&(Se*=yt,Te*=yt,Ze*=yt),be.set(Se,Te,Ze,yt),oe.equals(be)===!1&&(n.clearColor(Se,Te,Ze,yt),oe.copy(be))},reset:function(){U=!1,te=null,oe.set(-1,0,0,0)}}}function t(){let U=!1,be=!1,te=null,oe=null,Se=null;return{setReversed:function(Te){be=Te},setTest:function(Te){Te?_e(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(Te){te!==Te&&!U&&(n.depthMask(Te),te=Te)},setFunc:function(Te){if(be&&(Te=ZM[Te]),oe!==Te){switch(Te){case al:n.depthFunc(n.NEVER);break;case ll:n.depthFunc(n.ALWAYS);break;case cl:n.depthFunc(n.LESS);break;case Ps:n.depthFunc(n.LEQUAL);break;case ul:n.depthFunc(n.EQUAL);break;case hl:n.depthFunc(n.GEQUAL);break;case fl:n.depthFunc(n.GREATER);break;case dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Te}},setLocked:function(Te){U=Te},setClear:function(Te){Se!==Te&&(n.clearDepth(Te),Se=Te)},reset:function(){U=!1,te=null,oe=null,Se=null}}}function i(){let U=!1,be=null,te=null,oe=null,Se=null,Te=null,Ze=null,yt=null,Gt=null;return{setTest:function(Qe){U||(Qe?_e(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(Qe){be!==Qe&&!U&&(n.stencilMask(Qe),be=Qe)},setFunc:function(Qe,Wt,Vn){(te!==Qe||oe!==Wt||Se!==Vn)&&(n.stencilFunc(Qe,Wt,Vn),te=Qe,oe=Wt,Se=Vn)},setOp:function(Qe,Wt,Vn){(Te!==Qe||Ze!==Wt||yt!==Vn)&&(n.stencilOp(Qe,Wt,Vn),Te=Qe,Ze=Wt,yt=Vn)},setLocked:function(Qe){U=Qe},setClear:function(Qe){Gt!==Qe&&(n.clearStencil(Qe),Gt=Qe)},reset:function(){U=!1,be=null,te=null,oe=null,Se=null,Te=null,Ze=null,yt=null,Gt=null}}}const s=new e,r=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],p=null,_=!1,x=null,m=null,d=null,A=null,b=null,T=null,F=null,I=new je(0,0,0),R=0,z=!1,ce=null,v=null,E=null,$=null,q=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,V=0;const ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ie)[1]),le=V>=1):ie.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),le=V>=2);let H=null,me={};const ae=n.getParameter(n.SCISSOR_BOX),L=n.getParameter(n.VIEWPORT),Le=new lt().fromArray(ae),Ye=new lt().fromArray(L);function D(U,be,te,oe){const Se=new Uint8Array(4),Te=n.createTexture();n.bindTexture(U,Te),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<te;Ze++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(be+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return Te}const K={};K[n.TEXTURE_2D]=D(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=D(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=D(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=D(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),_e(n.DEPTH_TEST),r.setFunc(Ps),Y(!1),J(Eu),_e(n.CULL_FACE),y(Si);function _e(U){c[U]!==!0&&(n.enable(U),c[U]=!0)}function ve(U){c[U]!==!1&&(n.disable(U),c[U]=!1)}function Be(U,be){return h[U]!==be?(n.bindFramebuffer(U,be),h[U]=be,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=be),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=be),!0):!1}function Ie(U,be){let te=f,oe=!1;if(U){te=u.get(be),te===void 0&&(te=[],u.set(be,te));const Se=U.textures;if(te.length!==Se.length||te[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,Ze=Se.length;Te<Ze;Te++)te[Te]=n.COLOR_ATTACHMENT0+Te;te.length=Se.length,oe=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,oe=!0);oe&&n.drawBuffers(te)}function Ke(U){return p!==U?(n.useProgram(U),p=U,!0):!1}const w={[Vi]:n.FUNC_ADD,[mg]:n.FUNC_SUBTRACT,[gg]:n.FUNC_REVERSE_SUBTRACT};w[_g]=n.MIN,w[vg]=n.MAX;const C={[xg]:n.ZERO,[Mg]:n.ONE,[yg]:n.SRC_COLOR,[rl]:n.SRC_ALPHA,[wg]:n.SRC_ALPHA_SATURATE,[Tg]:n.DST_COLOR,[Eg]:n.DST_ALPHA,[Sg]:n.ONE_MINUS_SRC_COLOR,[ol]:n.ONE_MINUS_SRC_ALPHA,[Ag]:n.ONE_MINUS_DST_COLOR,[bg]:n.ONE_MINUS_DST_ALPHA,[Rg]:n.CONSTANT_COLOR,[Cg]:n.ONE_MINUS_CONSTANT_COLOR,[Pg]:n.CONSTANT_ALPHA,[Lg]:n.ONE_MINUS_CONSTANT_ALPHA};function y(U,be,te,oe,Se,Te,Ze,yt,Gt,Qe){if(U===Si){_===!0&&(ve(n.BLEND),_=!1);return}if(_===!1&&(_e(n.BLEND),_=!0),U!==pg){if(U!==x||Qe!==z){if((m!==Vi||b!==Vi)&&(n.blendEquation(n.FUNC_ADD),m=Vi,b=Vi),Qe)switch(U){case Es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bu:n.blendFunc(n.ONE,n.ONE);break;case Tu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Au:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Tu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Au:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}d=null,A=null,T=null,F=null,I.set(0,0,0),R=0,x=U,z=Qe}return}Se=Se||be,Te=Te||te,Ze=Ze||oe,(be!==m||Se!==b)&&(n.blendEquationSeparate(w[be],w[Se]),m=be,b=Se),(te!==d||oe!==A||Te!==T||Ze!==F)&&(n.blendFuncSeparate(C[te],C[oe],C[Te],C[Ze]),d=te,A=oe,T=Te,F=Ze),(yt.equals(I)===!1||Gt!==R)&&(n.blendColor(yt.r,yt.g,yt.b,Gt),I.copy(yt),R=Gt),x=U,z=!1}function se(U,be){U.side===cn?ve(n.CULL_FACE):_e(n.CULL_FACE);let te=U.side===$t;be&&(te=!te),Y(te),U.blending===Es&&U.transparent===!1?y(Si):y(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const oe=U.stencilWrite;a.setTest(oe),oe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),re(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(U){ce!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),ce=U)}function J(U){U!==hg?(_e(n.CULL_FACE),U!==v&&(U===Eu?n.cullFace(n.BACK):U===fg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),v=U}function ne(U){U!==E&&(le&&n.lineWidth(U),E=U)}function re(U,be,te){U?(_e(n.POLYGON_OFFSET_FILL),($!==be||q!==te)&&(n.polygonOffset(be,te),$=be,q=te)):ve(n.POLYGON_OFFSET_FILL)}function ee(U){U?_e(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function M(U){U===void 0&&(U=n.TEXTURE0+Q-1),H!==U&&(n.activeTexture(U),H=U)}function g(U,be,te){te===void 0&&(H===null?te=n.TEXTURE0+Q-1:te=H);let oe=me[te];oe===void 0&&(oe={type:void 0,texture:void 0},me[te]=oe),(oe.type!==U||oe.texture!==be)&&(H!==te&&(n.activeTexture(te),H=te),n.bindTexture(U,be||K[U]),oe.type=U,oe.texture=be)}function P(){const U=me[H];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function B(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(U){Le.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Le.copy(U))}function ge(U){Ye.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Ye.copy(U))}function ke(U,be){let te=l.get(be);te===void 0&&(te=new WeakMap,l.set(be,te));let oe=te.get(U);oe===void 0&&(oe=n.getUniformBlockIndex(be,U.name),te.set(U,oe))}function ze(U,be){const oe=l.get(be).get(U);o.get(be)!==oe&&(n.uniformBlockBinding(be,oe,U.__bindingPointIndex),o.set(be,oe))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},H=null,me={},h={},u=new WeakMap,f=[],p=null,_=!1,x=null,m=null,d=null,A=null,b=null,T=null,F=null,I=new je(0,0,0),R=0,z=!1,ce=null,v=null,E=null,$=null,q=null,Le.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:_e,disable:ve,bindFramebuffer:Be,drawBuffers:Ie,useProgram:Ke,setBlending:y,setMaterial:se,setFlipSided:Y,setCullFace:J,setLineWidth:ne,setPolygonOffset:re,setScissorTest:ee,activeTexture:M,bindTexture:g,unbindTexture:P,compressedTexImage2D:B,compressedTexImage3D:Z,texImage2D:Me,texImage3D:Ce,updateUBOMapping:ke,uniformBlockBinding:ze,texStorage2D:De,texStorage3D:he,texSubImage2D:X,texSubImage3D:de,compressedTexSubImage2D:ue,compressedTexSubImage3D:fe,scissor:Ne,viewport:ge,reset:ot}}function _h(n,e,t,i){const s=QM(i);switch(t){case Yf:return n*e;case $f:return n*e;case Kf:return n*e*2;case Zf:return n*e/s.components*s.byteLength;case _c:return n*e/s.components*s.byteLength;case Jf:return n*e*2/s.components*s.byteLength;case vc:return n*e*2/s.components*s.byteLength;case jf:return n*e*3/s.components*s.byteLength;case Sn:return n*e*4/s.components*s.byteLength;case xc:return n*e*4/s.components*s.byteLength;case lo:case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uo:case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xl:case yl:return Math.max(n,16)*Math.max(e,8)/4;case vl:case Ml:return Math.max(n,8)*Math.max(e,8)/2;case Sl:case El:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Al:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case wl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Il:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Bl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case fo:case kl:case zl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qf:case Hl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Vl:case Gl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function QM(n){switch(n){case ri:case Wf:return{byteLength:1,components:1};case vr:case Xf:case br:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case Zi:case pc:case ni:return{byteLength:4,components:1};case qf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ey(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,g){return p?new OffscreenCanvas(M,g):Po("canvas")}function x(M,g,P){let B=1;const Z=ee(M);if((Z.width>P||Z.height>P)&&(B=P/Math.max(Z.width,Z.height)),B<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const X=Math.floor(B*Z.width),de=Math.floor(B*Z.height);u===void 0&&(u=_(X,de));const ue=g?_(X,de):u;return ue.width=X,ue.height=de,ue.getContext("2d").drawImage(M,0,0,X,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+de+")."),ue}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),M;return M}function m(M){return M.generateMipmaps&&M.minFilter!==Ht&&M.minFilter!==Mn}function d(M){n.generateMipmap(M)}function A(M,g,P,B,Z=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let X=g;if(g===n.RED&&(P===n.FLOAT&&(X=n.R32F),P===n.HALF_FLOAT&&(X=n.R16F),P===n.UNSIGNED_BYTE&&(X=n.R8)),g===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.R8UI),P===n.UNSIGNED_SHORT&&(X=n.R16UI),P===n.UNSIGNED_INT&&(X=n.R32UI),P===n.BYTE&&(X=n.R8I),P===n.SHORT&&(X=n.R16I),P===n.INT&&(X=n.R32I)),g===n.RG&&(P===n.FLOAT&&(X=n.RG32F),P===n.HALF_FLOAT&&(X=n.RG16F),P===n.UNSIGNED_BYTE&&(X=n.RG8)),g===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.RG8UI),P===n.UNSIGNED_SHORT&&(X=n.RG16UI),P===n.UNSIGNED_INT&&(X=n.RG32UI),P===n.BYTE&&(X=n.RG8I),P===n.SHORT&&(X=n.RG16I),P===n.INT&&(X=n.RG32I)),g===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.RGB8UI),P===n.UNSIGNED_SHORT&&(X=n.RGB16UI),P===n.UNSIGNED_INT&&(X=n.RGB32UI),P===n.BYTE&&(X=n.RGB8I),P===n.SHORT&&(X=n.RGB16I),P===n.INT&&(X=n.RGB32I)),g===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),P===n.UNSIGNED_INT&&(X=n.RGBA32UI),P===n.BYTE&&(X=n.RGBA8I),P===n.SHORT&&(X=n.RGBA16I),P===n.INT&&(X=n.RGBA32I)),g===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),g===n.RGBA){const de=Z?Ao:rt.getTransfer(B);P===n.FLOAT&&(X=n.RGBA32F),P===n.HALF_FLOAT&&(X=n.RGBA16F),P===n.UNSIGNED_BYTE&&(X=de===dt?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function b(M,g){let P;return M?g===null||g===Zi||g===Ds?P=n.DEPTH24_STENCIL8:g===ni?P=n.DEPTH32F_STENCIL8:g===vr&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Zi||g===Ds?P=n.DEPTH_COMPONENT24:g===ni?P=n.DEPTH_COMPONENT32F:g===vr&&(P=n.DEPTH_COMPONENT16),P}function T(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Ht&&M.minFilter!==Mn?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function F(M){const g=M.target;g.removeEventListener("dispose",F),R(g),g.isVideoTexture&&h.delete(g)}function I(M){const g=M.target;g.removeEventListener("dispose",I),ce(g)}function R(M){const g=i.get(M);if(g.__webglInit===void 0)return;const P=M.source,B=f.get(P);if(B){const Z=B[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&z(M),Object.keys(B).length===0&&f.delete(P)}i.remove(M)}function z(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const P=M.source,B=f.get(P);delete B[g.__cacheKey],a.memory.textures--}function ce(M){const g=i.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(g.__webglFramebuffer[B]))for(let Z=0;Z<g.__webglFramebuffer[B].length;Z++)n.deleteFramebuffer(g.__webglFramebuffer[B][Z]);else n.deleteFramebuffer(g.__webglFramebuffer[B]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[B])}else{if(Array.isArray(g.__webglFramebuffer))for(let B=0;B<g.__webglFramebuffer.length;B++)n.deleteFramebuffer(g.__webglFramebuffer[B]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let B=0;B<g.__webglColorRenderbuffer.length;B++)g.__webglColorRenderbuffer[B]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[B]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const P=M.textures;for(let B=0,Z=P.length;B<Z;B++){const X=i.get(P[B]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(P[B])}i.remove(M)}let v=0;function E(){v=0}function $(){const M=v;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),v+=1,M}function q(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function Q(M,g){const P=i.get(M);if(M.isVideoTexture&&ne(M),M.isRenderTargetTexture===!1&&M.version>0&&P.__version!==M.version){const B=M.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(P,M,g);return}}t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+g)}function le(M,g){const P=i.get(M);if(M.version>0&&P.__version!==M.version){Ye(P,M,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+g)}function V(M,g){const P=i.get(M);if(M.version>0&&P.__version!==M.version){Ye(P,M,g);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+g)}function ie(M,g){const P=i.get(M);if(M.version>0&&P.__version!==M.version){D(P,M,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+g)}const H={[gl]:n.REPEAT,[qi]:n.CLAMP_TO_EDGE,[_l]:n.MIRRORED_REPEAT},me={[Ht]:n.NEAREST,[zg]:n.NEAREST_MIPMAP_NEAREST,[Or]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[pa]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},ae={[Wg]:n.NEVER,[Kg]:n.ALWAYS,[Xg]:n.LESS,[td]:n.LEQUAL,[qg]:n.EQUAL,[$g]:n.GEQUAL,[Yg]:n.GREATER,[jg]:n.NOTEQUAL};function L(M,g){if(g.type===ni&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Mn||g.magFilter===pa||g.magFilter===Or||g.magFilter===Yi||g.minFilter===Mn||g.minFilter===pa||g.minFilter===Or||g.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,H[g.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,H[g.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,H[g.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,me[g.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,me[g.minFilter]),g.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,ae[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ht||g.minFilter!==Or&&g.minFilter!==Yi||g.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Le(M,g){let P=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",F));const B=g.source;let Z=f.get(B);Z===void 0&&(Z={},f.set(B,Z));const X=q(g);if(X!==M.__cacheKey){Z[X]===void 0&&(Z[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,P=!0),Z[X].usedTimes++;const de=Z[M.__cacheKey];de!==void 0&&(Z[M.__cacheKey].usedTimes--,de.usedTimes===0&&z(g)),M.__cacheKey=X,M.__webglTexture=Z[X].texture}return P}function Ye(M,g,P){let B=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(B=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(B=n.TEXTURE_3D);const Z=Le(M,g),X=g.source;t.bindTexture(B,M.__webglTexture,n.TEXTURE0+P);const de=i.get(X);if(X.version!==de.__version||Z===!0){t.activeTexture(n.TEXTURE0+P);const ue=rt.getPrimaries(rt.workingColorSpace),fe=g.colorSpace===xi?null:rt.getPrimaries(g.colorSpace),De=g.colorSpace===xi||ue===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let he=x(g.image,!1,s.maxTextureSize);he=re(g,he);const Me=r.convert(g.format,g.colorSpace),Ce=r.convert(g.type);let Ne=A(g.internalFormat,Me,Ce,g.colorSpace,g.isVideoTexture);L(B,g);let ge;const ke=g.mipmaps,ze=g.isVideoTexture!==!0,ot=de.__version===void 0||Z===!0,U=X.dataReady,be=T(g,he);if(g.isDepthTexture)Ne=b(g.format===Us,g.type),ot&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Ne,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Ne,he.width,he.height,0,Me,Ce,null));else if(g.isDataTexture)if(ke.length>0){ze&&ot&&t.texStorage2D(n.TEXTURE_2D,be,Ne,ke[0].width,ke[0].height);for(let te=0,oe=ke.length;te<oe;te++)ge=ke[te],ze?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ge.width,ge.height,Me,Ce,ge.data):t.texImage2D(n.TEXTURE_2D,te,Ne,ge.width,ge.height,0,Me,Ce,ge.data);g.generateMipmaps=!1}else ze?(ot&&t.texStorage2D(n.TEXTURE_2D,be,Ne,he.width,he.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,Me,Ce,he.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,he.width,he.height,0,Me,Ce,he.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ze&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Ne,ke[0].width,ke[0].height,he.depth);for(let te=0,oe=ke.length;te<oe;te++)if(ge=ke[te],g.format!==Sn)if(Me!==null)if(ze){if(U)if(g.layerUpdates.size>0){const Se=_h(ge.width,ge.height,g.format,g.type);for(const Te of g.layerUpdates){const Ze=ge.data.subarray(Te*Se/ge.data.BYTES_PER_ELEMENT,(Te+1)*Se/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Te,ge.width,ge.height,1,Me,Ze,0,0)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,he.depth,Me,ge.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Ne,ge.width,ge.height,he.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,he.depth,Me,Ce,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Ne,ge.width,ge.height,he.depth,0,Me,Ce,ge.data)}else{ze&&ot&&t.texStorage2D(n.TEXTURE_2D,be,Ne,ke[0].width,ke[0].height);for(let te=0,oe=ke.length;te<oe;te++)ge=ke[te],g.format!==Sn?Me!==null?ze?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,ge.width,ge.height,Me,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Ne,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ge.width,ge.height,Me,Ce,ge.data):t.texImage2D(n.TEXTURE_2D,te,Ne,ge.width,ge.height,0,Me,Ce,ge.data)}else if(g.isDataArrayTexture)if(ze){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Ne,he.width,he.height,he.depth),U)if(g.layerUpdates.size>0){const te=_h(he.width,he.height,g.format,g.type);for(const oe of g.layerUpdates){const Se=he.data.subarray(oe*te/he.data.BYTES_PER_ELEMENT,(oe+1)*te/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,he.width,he.height,1,Me,Ce,Se)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Me,Ce,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,he.width,he.height,he.depth,0,Me,Ce,he.data);else if(g.isData3DTexture)ze?(ot&&t.texStorage3D(n.TEXTURE_3D,be,Ne,he.width,he.height,he.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Me,Ce,he.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,he.width,he.height,he.depth,0,Me,Ce,he.data);else if(g.isFramebufferTexture){if(ot)if(ze)t.texStorage2D(n.TEXTURE_2D,be,Ne,he.width,he.height);else{let te=he.width,oe=he.height;for(let Se=0;Se<be;Se++)t.texImage2D(n.TEXTURE_2D,Se,Ne,te,oe,0,Me,Ce,null),te>>=1,oe>>=1}}else if(ke.length>0){if(ze&&ot){const te=ee(ke[0]);t.texStorage2D(n.TEXTURE_2D,be,Ne,te.width,te.height)}for(let te=0,oe=ke.length;te<oe;te++)ge=ke[te],ze?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Me,Ce,ge):t.texImage2D(n.TEXTURE_2D,te,Ne,Me,Ce,ge);g.generateMipmaps=!1}else if(ze){if(ot){const te=ee(he);t.texStorage2D(n.TEXTURE_2D,be,Ne,te.width,te.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Ce,he)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Me,Ce,he);m(g)&&d(B),de.__version=X.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function D(M,g,P){if(g.image.length!==6)return;const B=Le(M,g),Z=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+P);const X=i.get(Z);if(Z.version!==X.__version||B===!0){t.activeTexture(n.TEXTURE0+P);const de=rt.getPrimaries(rt.workingColorSpace),ue=g.colorSpace===xi?null:rt.getPrimaries(g.colorSpace),fe=g.colorSpace===xi||de===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const De=g.isCompressedTexture||g.image[0].isCompressedTexture,he=g.image[0]&&g.image[0].isDataTexture,Me=[];for(let oe=0;oe<6;oe++)!De&&!he?Me[oe]=x(g.image[oe],!0,s.maxCubemapSize):Me[oe]=he?g.image[oe].image:g.image[oe],Me[oe]=re(g,Me[oe]);const Ce=Me[0],Ne=r.convert(g.format,g.colorSpace),ge=r.convert(g.type),ke=A(g.internalFormat,Ne,ge,g.colorSpace),ze=g.isVideoTexture!==!0,ot=X.__version===void 0||B===!0,U=Z.dataReady;let be=T(g,Ce);L(n.TEXTURE_CUBE_MAP,g);let te;if(De){ze&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,ke,Ce.width,Ce.height);for(let oe=0;oe<6;oe++){te=Me[oe].mipmaps;for(let Se=0;Se<te.length;Se++){const Te=te[Se];g.format!==Sn?Ne!==null?ze?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,Te.width,Te.height,Ne,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,ke,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,Te.width,Te.height,Ne,ge,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,ke,Te.width,Te.height,0,Ne,ge,Te.data)}}}else{if(te=g.mipmaps,ze&&ot){te.length>0&&be++;const oe=ee(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,ke,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(he){ze?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Me[oe].width,Me[oe].height,Ne,ge,Me[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ke,Me[oe].width,Me[oe].height,0,Ne,ge,Me[oe].data);for(let Se=0;Se<te.length;Se++){const Ze=te[Se].image[oe].image;ze?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,Ze.width,Ze.height,Ne,ge,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,ke,Ze.width,Ze.height,0,Ne,ge,Ze.data)}}else{ze?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ne,ge,Me[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ke,Ne,ge,Me[oe]);for(let Se=0;Se<te.length;Se++){const Te=te[Se];ze?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,Ne,ge,Te.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,ke,Ne,ge,Te.image[oe])}}}m(g)&&d(n.TEXTURE_CUBE_MAP),X.__version=Z.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function K(M,g,P,B,Z,X){const de=r.convert(P.format,P.colorSpace),ue=r.convert(P.type),fe=A(P.internalFormat,de,ue,P.colorSpace);if(!i.get(g).__hasExternalTextures){const he=Math.max(1,g.width>>X),Me=Math.max(1,g.height>>X);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,fe,he,Me,g.depth,0,de,ue,null):t.texImage2D(Z,X,fe,he,Me,0,de,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),J(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,Z,i.get(P).__webglTexture,0,Y(g)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,B,Z,i.get(P).__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(M,g,P){if(n.bindRenderbuffer(n.RENDERBUFFER,M),g.depthBuffer){const B=g.depthTexture,Z=B&&B.isDepthTexture?B.type:null,X=b(g.stencilBuffer,Z),de=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=Y(g);J(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,X,g.width,g.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,X,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,X,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,M)}else{const B=g.textures;for(let Z=0;Z<B.length;Z++){const X=B[Z],de=r.convert(X.format,X.colorSpace),ue=r.convert(X.type),fe=A(X.internalFormat,de,ue,X.colorSpace),De=Y(g);P&&J(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,fe,g.width,g.height):J(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,fe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,fe,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ve(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Q(g.depthTexture,0);const B=i.get(g.depthTexture).__webglTexture,Z=Y(g);if(g.depthTexture.format===bs)J(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,B,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,B,0);else if(g.depthTexture.format===Us)J(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,B,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function Be(M){const g=i.get(M),P=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const B=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),B){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,B.removeEventListener("dispose",Z)};B.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=B}if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");ve(g.__webglFramebuffer,M)}else if(P){g.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[B]),g.__webglDepthbuffer[B]===void 0)g.__webglDepthbuffer[B]=n.createRenderbuffer(),_e(g.__webglDepthbuffer[B],M,!1);else{const Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer[B];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,X)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),_e(g.__webglDepthbuffer,M,!1);else{const B=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,Z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(M,g,P){const B=i.get(M);g!==void 0&&K(B.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&Be(M)}function Ke(M){const g=M.texture,P=i.get(M),B=i.get(g);M.addEventListener("dispose",I);const Z=M.textures,X=M.isWebGLCubeRenderTarget===!0,de=Z.length>1;if(de||(B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture()),B.__version=g.version,a.memory.textures++),X){P.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer[ue]=[];for(let fe=0;fe<g.mipmaps.length;fe++)P.__webglFramebuffer[ue][fe]=n.createFramebuffer()}else P.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer=[];for(let ue=0;ue<g.mipmaps.length;ue++)P.__webglFramebuffer[ue]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(de)for(let ue=0,fe=Z.length;ue<fe;ue++){const De=i.get(Z[ue]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),a.memory.textures++)}if(M.samples>0&&J(M)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ue=0;ue<Z.length;ue++){const fe=Z[ue];P.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[ue]);const De=r.convert(fe.format,fe.colorSpace),he=r.convert(fe.type),Me=A(fe.internalFormat,De,he,fe.colorSpace,M.isXRRenderTarget===!0),Ce=Y(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Me,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,P.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(P.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture),L(n.TEXTURE_CUBE_MAP,g);for(let ue=0;ue<6;ue++)if(g.mipmaps&&g.mipmaps.length>0)for(let fe=0;fe<g.mipmaps.length;fe++)K(P.__webglFramebuffer[ue][fe],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,fe);else K(P.__webglFramebuffer[ue],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ue=0,fe=Z.length;ue<fe;ue++){const De=Z[ue],he=i.get(De);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),L(n.TEXTURE_2D,De),K(P.__webglFramebuffer,M,De,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(De)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ue=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,B.__webglTexture),L(ue,g),g.mipmaps&&g.mipmaps.length>0)for(let fe=0;fe<g.mipmaps.length;fe++)K(P.__webglFramebuffer[fe],M,g,n.COLOR_ATTACHMENT0,ue,fe);else K(P.__webglFramebuffer,M,g,n.COLOR_ATTACHMENT0,ue,0);m(g)&&d(ue),t.unbindTexture()}M.depthBuffer&&Be(M)}function w(M){const g=M.textures;for(let P=0,B=g.length;P<B;P++){const Z=g[P];if(m(Z)){const X=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(Z).__webglTexture;t.bindTexture(X,de),d(X),t.unbindTexture()}}}const C=[],y=[];function se(M){if(M.samples>0){if(J(M)===!1){const g=M.textures,P=M.width,B=M.height;let Z=n.COLOR_BUFFER_BIT;const X=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(M),ue=g.length>1;if(ue)for(let fe=0;fe<g.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let fe=0;fe<g.length;fe++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);const De=i.get(g[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,De,0)}n.blitFramebuffer(0,0,P,B,0,0,P,B,Z,n.NEAREST),l===!0&&(C.length=0,y.length=0,C.push(n.COLOR_ATTACHMENT0+fe),M.depthBuffer&&M.resolveDepthBuffer===!1&&(C.push(X),y.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let fe=0;fe<g.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);const De=i.get(g[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const g=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Y(M){return Math.min(s.maxSamples,M.samples)}function J(M){const g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ne(M){const g=a.render.frame;h.get(M)!==g&&(h.set(M,g),M.update())}function re(M,g){const P=M.colorSpace,B=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||P!==Ri&&P!==xi&&(rt.getTransfer(P)===dt?(B!==Sn||Z!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),g}function ee(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=E,this.setTexture2D=Q,this.setTexture2DArray=le,this.setTexture3D=V,this.setTextureCube=ie,this.rebindTextures=Ie,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=K,this.useMultisampledRTT=J}function ty(n,e){function t(i,s=xi){let r;const a=rt.getTransfer(s);if(i===ri)return n.UNSIGNED_BYTE;if(i===mc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wf)return n.BYTE;if(i===Xf)return n.SHORT;if(i===vr)return n.UNSIGNED_SHORT;if(i===pc)return n.INT;if(i===Zi)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===br)return n.HALF_FLOAT;if(i===Yf)return n.ALPHA;if(i===jf)return n.RGB;if(i===Sn)return n.RGBA;if(i===$f)return n.LUMINANCE;if(i===Kf)return n.LUMINANCE_ALPHA;if(i===bs)return n.DEPTH_COMPONENT;if(i===Us)return n.DEPTH_STENCIL;if(i===Zf)return n.RED;if(i===_c)return n.RED_INTEGER;if(i===Jf)return n.RG;if(i===vc)return n.RG_INTEGER;if(i===xc)return n.RGBA_INTEGER;if(i===lo||i===co||i===uo||i===ho)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vl||i===xl||i===Ml||i===yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sl||i===El||i===bl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Sl||i===El)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Tl||i===Al||i===wl||i===Rl||i===Cl||i===Pl||i===Ll||i===Il||i===Dl||i===Ul||i===Nl||i===Ol||i===Fl||i===Bl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Tl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Al)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ll)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Il)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ul)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ol)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fo||i===kl||i===zl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===fo)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qf||i===Hl||i===Vl||i===Gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ds?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class ny extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hn extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iy={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(iy)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new hn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ry=`
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

}`;class oy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Vt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new wi({vertexShader:sy,fragmentShader:ry,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new ts(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ay extends Os{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,_=null;const x=new oy,m=t.getContextAttributes();let d=null,A=null;const b=[],T=[],F=new $e;let I=null;const R=new ln;R.layers.enable(1),R.viewport=new lt;const z=new ln;z.layers.enable(2),z.viewport=new lt;const ce=[R,z],v=new ny;v.layers.enable(1),v.layers.enable(2);let E=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let K=b[D];return K===void 0&&(K=new Wa,b[D]=K),K.getTargetRaySpace()},this.getControllerGrip=function(D){let K=b[D];return K===void 0&&(K=new Wa,b[D]=K),K.getGripSpace()},this.getHand=function(D){let K=b[D];return K===void 0&&(K=new Wa,b[D]=K),K.getHandSpace()};function q(D){const K=T.indexOf(D.inputSource);if(K===-1)return;const _e=b[K];_e!==void 0&&(_e.update(D.inputSource,D.frame,c||a),_e.dispatchEvent({type:D.type,data:D.inputSource}))}function Q(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",le);for(let D=0;D<b.length;D++){const K=T[D];K!==null&&(T[D]=null,b[D].disconnect(K))}E=null,$=null,x.reset(),e.setRenderTarget(d),p=null,f=null,u=null,s=null,A=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(D){if(s=D,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",le),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(F),s.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Ji(p.framebufferWidth,p.framebufferHeight,{format:Sn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,_e=null,ve=null;m.depth&&(ve=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=m.stencil?Us:bs,_e=m.stencil?Ds:Zi);const Be={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Be),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Ji(f.textureWidth,f.textureHeight,{format:Sn,type:ri,depthTexture:new fd(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function le(D){for(let K=0;K<D.removed.length;K++){const _e=D.removed[K],ve=T.indexOf(_e);ve>=0&&(T[ve]=null,b[ve].disconnect(_e))}for(let K=0;K<D.added.length;K++){const _e=D.added[K];let ve=T.indexOf(_e);if(ve===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=T.length){T.push(_e),ve=Ie;break}else if(T[Ie]===null){T[Ie]=_e,ve=Ie;break}if(ve===-1)break}const Be=b[ve];Be&&Be.connect(_e)}}const V=new k,ie=new k;function H(D,K,_e){V.setFromMatrixPosition(K.matrixWorld),ie.setFromMatrixPosition(_e.matrixWorld);const ve=V.distanceTo(ie),Be=K.projectionMatrix.elements,Ie=_e.projectionMatrix.elements,Ke=Be[14]/(Be[10]-1),w=Be[14]/(Be[10]+1),C=(Be[9]+1)/Be[5],y=(Be[9]-1)/Be[5],se=(Be[8]-1)/Be[0],Y=(Ie[8]+1)/Ie[0],J=Ke*se,ne=Ke*Y,re=ve/(-se+Y),ee=re*-se;if(K.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(ee),D.translateZ(re),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),Be[10]===-1)D.projectionMatrix.copy(K.projectionMatrix),D.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const M=Ke+re,g=w+re,P=J-ee,B=ne+(ve-ee),Z=C*w/g*M,X=y*w/g*M;D.projectionMatrix.makePerspective(P,B,Z,X,M,g),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function me(D,K){K===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(K.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(s===null)return;let K=D.near,_e=D.far;x.texture!==null&&(x.depthNear>0&&(K=x.depthNear),x.depthFar>0&&(_e=x.depthFar)),v.near=z.near=R.near=K,v.far=z.far=R.far=_e,(E!==v.near||$!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,$=v.far);const ve=D.parent,Be=v.cameras;me(v,ve);for(let Ie=0;Ie<Be.length;Ie++)me(Be[Ie],ve);Be.length===2?H(v,R,z):v.projectionMatrix.copy(R.projectionMatrix),ae(D,v,ve)};function ae(D,K,_e){_e===null?D.matrix.copy(K.matrixWorld):(D.matrix.copy(_e.matrixWorld),D.matrix.invert(),D.matrix.multiply(K.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(K.projectionMatrix),D.projectionMatrixInverse.copy(K.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Wl*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(D){l=D,f!==null&&(f.fixedFoveation=D),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=D)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let L=null;function Le(D,K){if(h=K.getViewerPose(c||a),_=K,h!==null){const _e=h.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let ve=!1;_e.length!==v.cameras.length&&(v.cameras.length=0,ve=!0);for(let Ie=0;Ie<_e.length;Ie++){const Ke=_e[Ie];let w=null;if(p!==null)w=p.getViewport(Ke);else{const y=u.getViewSubImage(f,Ke);w=y.viewport,Ie===0&&(e.setRenderTargetTextures(A,y.colorTexture,f.ignoreDepthValues?void 0:y.depthStencilTexture),e.setRenderTarget(A))}let C=ce[Ie];C===void 0&&(C=new ln,C.layers.enable(Ie),C.viewport=new lt,ce[Ie]=C),C.matrix.fromArray(Ke.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Ke.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(w.x,w.y,w.width,w.height),Ie===0&&(v.matrix.copy(C.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ve===!0&&v.cameras.push(C)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const Ie=u.getDepthInformation(_e[0]);Ie&&Ie.isValid&&Ie.texture&&x.init(e,Ie,s.renderState)}}for(let _e=0;_e<b.length;_e++){const ve=T[_e],Be=b[_e];ve!==null&&Be!==void 0&&Be.update(ve,K,c||a)}L&&L(D,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const Ye=new hd;Ye.setAnimationLoop(Le),this.setAnimationLoop=function(D){L=D},this.dispose=function(){}}}const Bi=new Hn,ly=new pt;function cy(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,ld(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,A,b,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,T)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,A,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===$t&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===$t&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=e.get(d),b=A.envMap,T=A.envMapRotation;b&&(m.envMap.value=b,Bi.copy(T),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.envMapRotation.value.setFromMatrix4(ly.makeRotationFromEuler(Bi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$t&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function uy(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const T=b.program;i.uniformBlockBinding(A,T)}function c(A,b){let T=s[A.id];T===void 0&&(_(A),T=h(A),s[A.id]=T,A.addEventListener("dispose",m));const F=b.program;i.updateUBOMapping(A,F);const I=e.render.frame;r[A.id]!==I&&(f(A),r[A.id]=I)}function h(A){const b=u();A.__bindingPointIndex=b;const T=n.createBuffer(),F=A.__size,I=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,F,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,T),T}function u(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const b=s[A.id],T=A.uniforms,F=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let I=0,R=T.length;I<R;I++){const z=Array.isArray(T[I])?T[I]:[T[I]];for(let ce=0,v=z.length;ce<v;ce++){const E=z[ce];if(p(E,I,ce,F)===!0){const $=E.__offset,q=Array.isArray(E.value)?E.value:[E.value];let Q=0;for(let le=0;le<q.length;le++){const V=q[le],ie=x(V);typeof V=="number"||typeof V=="boolean"?(E.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,$+Q,E.__data)):V.isMatrix3?(E.__data[0]=V.elements[0],E.__data[1]=V.elements[1],E.__data[2]=V.elements[2],E.__data[3]=0,E.__data[4]=V.elements[3],E.__data[5]=V.elements[4],E.__data[6]=V.elements[5],E.__data[7]=0,E.__data[8]=V.elements[6],E.__data[9]=V.elements[7],E.__data[10]=V.elements[8],E.__data[11]=0):(V.toArray(E.__data,Q),Q+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,b,T,F){const I=A.value,R=b+"_"+T;if(F[R]===void 0)return typeof I=="number"||typeof I=="boolean"?F[R]=I:F[R]=I.clone(),!0;{const z=F[R];if(typeof I=="number"||typeof I=="boolean"){if(z!==I)return F[R]=I,!0}else if(z.equals(I)===!1)return z.copy(I),!0}return!1}function _(A){const b=A.uniforms;let T=0;const F=16;for(let R=0,z=b.length;R<z;R++){const ce=Array.isArray(b[R])?b[R]:[b[R]];for(let v=0,E=ce.length;v<E;v++){const $=ce[v],q=Array.isArray($.value)?$.value:[$.value];for(let Q=0,le=q.length;Q<le;Q++){const V=q[Q],ie=x(V),H=T%F,me=H%ie.boundary,ae=H+me;T+=me,ae!==0&&F-ae<ie.storage&&(T+=F-ae),$.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=T,T+=ie.storage}}}const I=T%F;return I>0&&(T+=F-I),A.__size=T,A.__cache={},this}function x(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function m(A){const b=A.target;b.removeEventListener("dispose",m);const T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(const A in s)n.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class hy{constructor(e={}){const{canvas:t=Jg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const d=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=Ei,this.toneMappingExposure=1;const b=this;let T=!1,F=0,I=0,R=null,z=-1,ce=null;const v=new lt,E=new lt;let $=null;const q=new je(0);let Q=0,le=t.width,V=t.height,ie=1,H=null,me=null;const ae=new lt(0,0,le,V),L=new lt(0,0,le,V);let Le=!1;const Ye=new Ec;let D=!1,K=!1;const _e=new pt,ve=new pt,Be=new k,Ie=new lt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function C(){return R===null?ie:1}let y=i;function se(S,N){return t.getContext(S,N)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fc}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Te,!1),y===null){const N="webgl2";if(y=se(N,S),y===null)throw se(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Y,J,ne,re,ee,M,g,P,B,Z,X,de,ue,fe,De,he,Me,Ce,Ne,ge,ke,ze,ot,U;function be(){Y=new gx(y),Y.init(),ze=new ty(y,Y),J=new ux(y,Y,e,ze),ne=new JM(y),J.reverseDepthBuffer&&ne.buffers.depth.setReversed(!0),re=new xx(y),ee=new FM,M=new ey(y,Y,ne,ee,J,ze,re),g=new fx(b),P=new mx(b),B=new A0(y),ot=new lx(y,B),Z=new _x(y,B,re,ot),X=new yx(y,Z,B,re),Ne=new Mx(y,J,M),he=new hx(ee),de=new OM(b,g,P,Y,J,ot,he),ue=new cy(b,ee),fe=new kM,De=new XM(Y),Ce=new ax(b,g,P,ne,X,f,l),Me=new KM(b,X,J),U=new uy(y,re,J,ne),ge=new cx(y,Y,re),ke=new vx(y,Y,re),re.programs=de.programs,b.capabilities=J,b.extensions=Y,b.properties=ee,b.renderLists=fe,b.shadowMap=Me,b.state=ne,b.info=re}be();const te=new ay(b,y);this.xr=te,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const S=Y.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Y.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(S){S!==void 0&&(ie=S,this.setSize(le,V,!1))},this.getSize=function(S){return S.set(le,V)},this.setSize=function(S,N,W=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=S,V=N,t.width=Math.floor(S*ie),t.height=Math.floor(N*ie),W===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(le*ie,V*ie).floor()},this.setDrawingBufferSize=function(S,N,W){le=S,V=N,ie=W,t.width=Math.floor(S*W),t.height=Math.floor(N*W),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(v)},this.getViewport=function(S){return S.copy(ae)},this.setViewport=function(S,N,W,j){S.isVector4?ae.set(S.x,S.y,S.z,S.w):ae.set(S,N,W,j),ne.viewport(v.copy(ae).multiplyScalar(ie).round())},this.getScissor=function(S){return S.copy(L)},this.setScissor=function(S,N,W,j){S.isVector4?L.set(S.x,S.y,S.z,S.w):L.set(S,N,W,j),ne.scissor(E.copy(L).multiplyScalar(ie).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(S){ne.setScissorTest(Le=S)},this.setOpaqueSort=function(S){H=S},this.setTransparentSort=function(S){me=S},this.getClearColor=function(S){return S.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(S=!0,N=!0,W=!0){let j=0;if(S){let O=!1;if(R!==null){const pe=R.texture.format;O=pe===xc||pe===vc||pe===_c}if(O){const pe=R.texture.type,Ee=pe===ri||pe===Zi||pe===vr||pe===Ds||pe===mc||pe===gc,Ae=Ce.getClearColor(),we=Ce.getClearAlpha(),Oe=Ae.r,Fe=Ae.g,Re=Ae.b;Ee?(p[0]=Oe,p[1]=Fe,p[2]=Re,p[3]=we,y.clearBufferuiv(y.COLOR,0,p)):(_[0]=Oe,_[1]=Fe,_[2]=Re,_[3]=we,y.clearBufferiv(y.COLOR,0,_))}else j|=y.COLOR_BUFFER_BIT}N&&(j|=y.DEPTH_BUFFER_BIT,y.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(j|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),fe.dispose(),De.dispose(),ee.dispose(),g.dispose(),P.dispose(),X.dispose(),ot.dispose(),U.dispose(),de.dispose(),te.dispose(),te.removeEventListener("sessionstart",Uc),te.removeEventListener("sessionend",Nc),Pi.stop()};function oe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=re.autoReset,N=Me.enabled,W=Me.autoUpdate,j=Me.needsUpdate,O=Me.type;be(),re.autoReset=S,Me.enabled=N,Me.autoUpdate=W,Me.needsUpdate=j,Me.type=O}function Te(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ze(S){const N=S.target;N.removeEventListener("dispose",Ze),yt(N)}function yt(S){Gt(S),ee.remove(S)}function Gt(S){const N=ee.get(S).programs;N!==void 0&&(N.forEach(function(W){de.releaseProgram(W)}),S.isShaderMaterial&&de.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,W,j,O,pe){N===null&&(N=Ke);const Ee=O.isMesh&&O.matrixWorld.determinant()<0,Ae=Md(S,N,W,j,O);ne.setMaterial(j,Ee);let we=W.index,Oe=1;if(j.wireframe===!0){if(we=Z.getWireframeAttribute(W),we===void 0)return;Oe=2}const Fe=W.drawRange,Re=W.attributes.position;let at=Fe.start*Oe,ft=(Fe.start+Fe.count)*Oe;pe!==null&&(at=Math.max(at,pe.start*Oe),ft=Math.min(ft,(pe.start+pe.count)*Oe)),we!==null?(at=Math.max(at,0),ft=Math.min(ft,we.count)):Re!=null&&(at=Math.max(at,0),ft=Math.min(ft,Re.count));const gt=ft-at;if(gt<0||gt===1/0)return;ot.setup(O,j,Ae,W,we);let Kt,tt=ge;if(we!==null&&(Kt=B.get(we),tt=ke,tt.setIndex(Kt)),O.isMesh)j.wireframe===!0?(ne.setLineWidth(j.wireframeLinewidth*C()),tt.setMode(y.LINES)):tt.setMode(y.TRIANGLES);else if(O.isLine){let Pe=j.linewidth;Pe===void 0&&(Pe=1),ne.setLineWidth(Pe*C()),O.isLineSegments?tt.setMode(y.LINES):O.isLineLoop?tt.setMode(y.LINE_LOOP):tt.setMode(y.LINE_STRIP)}else O.isPoints?tt.setMode(y.POINTS):O.isSprite&&tt.setMode(y.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)tt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))tt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Pe=O._multiDrawStarts,Ct=O._multiDrawCounts,nt=O._multiDrawCount,mn=we?B.get(we).bytesPerElement:1,ns=ee.get(j).currentProgram.getUniforms();for(let Zt=0;Zt<nt;Zt++)ns.setValue(y,"_gl_DrawID",Zt),tt.render(Pe[Zt]/mn,Ct[Zt])}else if(O.isInstancedMesh)tt.renderInstances(at,gt,O.count);else if(W.isInstancedBufferGeometry){const Pe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ct=Math.min(W.instanceCount,Pe);tt.renderInstances(at,gt,Ct)}else tt.render(at,gt)};function Qe(S,N,W){S.transparent===!0&&S.side===cn&&S.forceSinglePass===!1?(S.side=$t,S.needsUpdate=!0,Cr(S,N,W),S.side=Ai,S.needsUpdate=!0,Cr(S,N,W),S.side=cn):Cr(S,N,W)}this.compile=function(S,N,W=null){W===null&&(W=S),m=De.get(W),m.init(N),A.push(m),W.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),S!==W&&S.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const j=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const pe=O.material;if(pe)if(Array.isArray(pe))for(let Ee=0;Ee<pe.length;Ee++){const Ae=pe[Ee];Qe(Ae,W,O),j.add(Ae)}else Qe(pe,W,O),j.add(pe)}),A.pop(),m=null,j},this.compileAsync=function(S,N,W=null){const j=this.compile(S,N,W);return new Promise(O=>{function pe(){if(j.forEach(function(Ee){ee.get(Ee).currentProgram.isReady()&&j.delete(Ee)}),j.size===0){O(S);return}setTimeout(pe,10)}Y.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Wt=null;function Vn(S){Wt&&Wt(S)}function Uc(){Pi.stop()}function Nc(){Pi.start()}const Pi=new hd;Pi.setAnimationLoop(Vn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(S){Wt=S,te.setAnimationLoop(S),S===null?Pi.stop():Pi.start()},te.addEventListener("sessionstart",Uc),te.addEventListener("sessionend",Nc),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(N),N=te.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,N,R),m=De.get(S,A.length),m.init(N),A.push(m),ve.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ye.setFromProjectionMatrix(ve),K=this.localClippingEnabled,D=he.init(this.clippingPlanes,K),x=fe.get(S,d.length),x.init(),d.push(x),te.enabled===!0&&te.isPresenting===!0){const pe=b.xr.getDepthSensingMesh();pe!==null&&jo(pe,N,-1/0,b.sortObjects)}jo(S,N,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(H,me),w=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,w&&Ce.addToRenderList(x,S),this.info.render.frame++,D===!0&&he.beginShadows();const W=m.state.shadowsArray;Me.render(W,S,N),D===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=x.opaque,O=x.transmissive;if(m.setupLights(),N.isArrayCamera){const pe=N.cameras;if(O.length>0)for(let Ee=0,Ae=pe.length;Ee<Ae;Ee++){const we=pe[Ee];Fc(j,O,S,we)}w&&Ce.render(S);for(let Ee=0,Ae=pe.length;Ee<Ae;Ee++){const we=pe[Ee];Oc(x,S,we,we.viewport)}}else O.length>0&&Fc(j,O,S,N),w&&Ce.render(S),Oc(x,S,N);R!==null&&(M.updateMultisampleRenderTarget(R),M.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(b,S,N),ot.resetDefaultState(),z=-1,ce=null,A.pop(),A.length>0?(m=A[A.length-1],D===!0&&he.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function jo(S,N,W,j){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ye.intersectsSprite(S)){j&&Ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);const Ee=X.update(S),Ae=S.material;Ae.visible&&x.push(S,Ee,Ae,W,Ie.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ye.intersectsObject(S))){const Ee=X.update(S),Ae=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ie.copy(S.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ie.copy(Ee.boundingSphere.center)),Ie.applyMatrix4(S.matrixWorld).applyMatrix4(ve)),Array.isArray(Ae)){const we=Ee.groups;for(let Oe=0,Fe=we.length;Oe<Fe;Oe++){const Re=we[Oe],at=Ae[Re.materialIndex];at&&at.visible&&x.push(S,Ee,at,W,Ie.z,Re)}}else Ae.visible&&x.push(S,Ee,Ae,W,Ie.z,null)}}const pe=S.children;for(let Ee=0,Ae=pe.length;Ee<Ae;Ee++)jo(pe[Ee],N,W,j)}function Oc(S,N,W,j){const O=S.opaque,pe=S.transmissive,Ee=S.transparent;m.setupLightsView(W),D===!0&&he.setGlobalState(b.clippingPlanes,W),j&&ne.viewport(v.copy(j)),O.length>0&&Rr(O,N,W),pe.length>0&&Rr(pe,N,W),Ee.length>0&&Rr(Ee,N,W),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Fc(S,N,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new Ji(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?br:ri,minFilter:Yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const pe=m.state.transmissionRenderTarget[j.id],Ee=j.viewport||v;pe.setSize(Ee.z,Ee.w);const Ae=b.getRenderTarget();b.setRenderTarget(pe),b.getClearColor(q),Q=b.getClearAlpha(),Q<1&&b.setClearColor(16777215,.5),b.clear(),w&&Ce.render(W);const we=b.toneMapping;b.toneMapping=Ei;const Oe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),D===!0&&he.setGlobalState(b.clippingPlanes,j),Rr(S,W,j),M.updateMultisampleRenderTarget(pe),M.updateRenderTargetMipmap(pe),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Re=0,at=N.length;Re<at;Re++){const ft=N[Re],gt=ft.object,Kt=ft.geometry,tt=ft.material,Pe=ft.group;if(tt.side===cn&&gt.layers.test(j.layers)){const Ct=tt.side;tt.side=$t,tt.needsUpdate=!0,Bc(gt,W,j,Kt,tt,Pe),tt.side=Ct,tt.needsUpdate=!0,Fe=!0}}Fe===!0&&(M.updateMultisampleRenderTarget(pe),M.updateRenderTargetMipmap(pe))}b.setRenderTarget(Ae),b.setClearColor(q,Q),Oe!==void 0&&(j.viewport=Oe),b.toneMapping=we}function Rr(S,N,W){const j=N.isScene===!0?N.overrideMaterial:null;for(let O=0,pe=S.length;O<pe;O++){const Ee=S[O],Ae=Ee.object,we=Ee.geometry,Oe=j===null?Ee.material:j,Fe=Ee.group;Ae.layers.test(W.layers)&&Bc(Ae,N,W,we,Oe,Fe)}}function Bc(S,N,W,j,O,pe){S.onBeforeRender(b,N,W,j,O,pe),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(b,N,W,j,S,pe),O.transparent===!0&&O.side===cn&&O.forceSinglePass===!1?(O.side=$t,O.needsUpdate=!0,b.renderBufferDirect(W,N,j,O,S,pe),O.side=Ai,O.needsUpdate=!0,b.renderBufferDirect(W,N,j,O,S,pe),O.side=cn):b.renderBufferDirect(W,N,j,O,S,pe),S.onAfterRender(b,N,W,j,O,pe)}function Cr(S,N,W){N.isScene!==!0&&(N=Ke);const j=ee.get(S),O=m.state.lights,pe=m.state.shadowsArray,Ee=O.state.version,Ae=de.getParameters(S,O.state,pe,N,W),we=de.getProgramCacheKey(Ae);let Oe=j.programs;j.environment=S.isMeshStandardMaterial?N.environment:null,j.fog=N.fog,j.envMap=(S.isMeshStandardMaterial?P:g).get(S.envMap||j.environment),j.envMapRotation=j.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Oe===void 0&&(S.addEventListener("dispose",Ze),Oe=new Map,j.programs=Oe);let Fe=Oe.get(we);if(Fe!==void 0){if(j.currentProgram===Fe&&j.lightsStateVersion===Ee)return zc(S,Ae),Fe}else Ae.uniforms=de.getUniforms(S),S.onBeforeCompile(Ae,b),Fe=de.acquireProgram(Ae,we),Oe.set(we,Fe),j.uniforms=Ae.uniforms;const Re=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Re.clippingPlanes=he.uniform),zc(S,Ae),j.needsLights=Sd(S),j.lightsStateVersion=Ee,j.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMap.value=O.state.directionalShadowMap,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotShadowMap.value=O.state.spotShadowMap,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMap.value=O.state.pointShadowMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),j.currentProgram=Fe,j.uniformsList=null,Fe}function kc(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=mo.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function zc(S,N){const W=ee.get(S);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Md(S,N,W,j,O){N.isScene!==!0&&(N=Ke),M.resetTextureUnits();const pe=N.fog,Ee=j.isMeshStandardMaterial?N.environment:null,Ae=R===null?b.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ri,we=(j.isMeshStandardMaterial?P:g).get(j.envMap||Ee),Oe=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Fe=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Re=!!W.morphAttributes.position,at=!!W.morphAttributes.normal,ft=!!W.morphAttributes.color;let gt=Ei;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(gt=b.toneMapping);const Kt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,tt=Kt!==void 0?Kt.length:0,Pe=ee.get(j),Ct=m.state.lights;if(D===!0&&(K===!0||S!==ce)){const rn=S===ce&&j.id===z;he.setState(j,S,rn)}let nt=!1;j.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Ct.state.version||Pe.outputColorSpace!==Ae||O.isBatchedMesh&&Pe.batching===!1||!O.isBatchedMesh&&Pe.batching===!0||O.isBatchedMesh&&Pe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Pe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Pe.instancing===!1||!O.isInstancedMesh&&Pe.instancing===!0||O.isSkinnedMesh&&Pe.skinning===!1||!O.isSkinnedMesh&&Pe.skinning===!0||O.isInstancedMesh&&Pe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Pe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Pe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Pe.instancingMorph===!1&&O.morphTexture!==null||Pe.envMap!==we||j.fog===!0&&Pe.fog!==pe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==he.numPlanes||Pe.numIntersection!==he.numIntersection)||Pe.vertexAlphas!==Oe||Pe.vertexTangents!==Fe||Pe.morphTargets!==Re||Pe.morphNormals!==at||Pe.morphColors!==ft||Pe.toneMapping!==gt||Pe.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Pe.__version=j.version);let mn=Pe.currentProgram;nt===!0&&(mn=Cr(j,N,O));let ns=!1,Zt=!1,$o=!1;const xt=mn.getUniforms(),ai=Pe.uniforms;if(ne.useProgram(mn.program)&&(ns=!0,Zt=!0,$o=!0),j.id!==z&&(z=j.id,Zt=!0),ns||ce!==S){J.reverseDepthBuffer?(_e.copy(S.projectionMatrix),e0(_e),t0(_e),xt.setValue(y,"projectionMatrix",_e)):xt.setValue(y,"projectionMatrix",S.projectionMatrix),xt.setValue(y,"viewMatrix",S.matrixWorldInverse);const rn=xt.map.cameraPosition;rn!==void 0&&rn.setValue(y,Be.setFromMatrixPosition(S.matrixWorld)),J.logarithmicDepthBuffer&&xt.setValue(y,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&xt.setValue(y,"isOrthographic",S.isOrthographicCamera===!0),ce!==S&&(ce=S,Zt=!0,$o=!0)}if(O.isSkinnedMesh){xt.setOptional(y,O,"bindMatrix"),xt.setOptional(y,O,"bindMatrixInverse");const rn=O.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),xt.setValue(y,"boneTexture",rn.boneTexture,M))}O.isBatchedMesh&&(xt.setOptional(y,O,"batchingTexture"),xt.setValue(y,"batchingTexture",O._matricesTexture,M),xt.setOptional(y,O,"batchingIdTexture"),xt.setValue(y,"batchingIdTexture",O._indirectTexture,M),xt.setOptional(y,O,"batchingColorTexture"),O._colorsTexture!==null&&xt.setValue(y,"batchingColorTexture",O._colorsTexture,M));const Ko=W.morphAttributes;if((Ko.position!==void 0||Ko.normal!==void 0||Ko.color!==void 0)&&Ne.update(O,W,mn),(Zt||Pe.receiveShadow!==O.receiveShadow)&&(Pe.receiveShadow=O.receiveShadow,xt.setValue(y,"receiveShadow",O.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(ai.envMap.value=we,ai.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&N.environment!==null&&(ai.envMapIntensity.value=N.environmentIntensity),Zt&&(xt.setValue(y,"toneMappingExposure",b.toneMappingExposure),Pe.needsLights&&yd(ai,$o),pe&&j.fog===!0&&ue.refreshFogUniforms(ai,pe),ue.refreshMaterialUniforms(ai,j,ie,V,m.state.transmissionRenderTarget[S.id]),mo.upload(y,kc(Pe),ai,M)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(mo.upload(y,kc(Pe),ai,M),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&xt.setValue(y,"center",O.center),xt.setValue(y,"modelViewMatrix",O.modelViewMatrix),xt.setValue(y,"normalMatrix",O.normalMatrix),xt.setValue(y,"modelMatrix",O.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const rn=j.uniformsGroups;for(let Zo=0,Ed=rn.length;Zo<Ed;Zo++){const Hc=rn[Zo];U.update(Hc,mn),U.bind(Hc,mn)}}return mn}function yd(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Sd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,N,W){ee.get(S.texture).__webglTexture=N,ee.get(S.depthTexture).__webglTexture=W;const j=ee.get(S);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){const W=ee.get(S);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,W=0){R=S,F=N,I=W;let j=!0,O=null,pe=!1,Ee=!1;if(S){const we=ee.get(S);if(we.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(y.FRAMEBUFFER,null),j=!1;else if(we.__webglFramebuffer===void 0)M.setupRenderTarget(S);else if(we.__hasExternalTextures)M.rebindTextures(S,ee.get(S.texture).__webglTexture,ee.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Re=S.depthTexture;if(we.__boundDepthTexture!==Re){if(Re!==null&&ee.has(Re)&&(S.width!==Re.image.width||S.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(S)}}const Oe=S.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ee=!0);const Fe=ee.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?O=Fe[N][W]:O=Fe[N],pe=!0):S.samples>0&&M.useMultisampledRTT(S)===!1?O=ee.get(S).__webglMultisampledFramebuffer:Array.isArray(Fe)?O=Fe[W]:O=Fe,v.copy(S.viewport),E.copy(S.scissor),$=S.scissorTest}else v.copy(ae).multiplyScalar(ie).floor(),E.copy(L).multiplyScalar(ie).floor(),$=Le;if(ne.bindFramebuffer(y.FRAMEBUFFER,O)&&j&&ne.drawBuffers(S,O),ne.viewport(v),ne.scissor(E),ne.setScissorTest($),pe){const we=ee.get(S.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,W)}else if(Ee){const we=ee.get(S.texture),Oe=N||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,we.__webglTexture,W||0,Oe)}z=-1},this.readRenderTargetPixels=function(S,N,W,j,O,pe,Ee){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ee.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){ne.bindFramebuffer(y.FRAMEBUFFER,Ae);try{const we=S.texture,Oe=we.format,Fe=we.type;if(!J.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-j&&W>=0&&W<=S.height-O&&y.readPixels(N,W,j,O,ze.convert(Oe),ze.convert(Fe),pe)}finally{const we=R!==null?ee.get(R).__webglFramebuffer:null;ne.bindFramebuffer(y.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(S,N,W,j,O,pe,Ee){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=ee.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){const we=S.texture,Oe=we.format,Fe=we.type;if(!J.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=S.width-j&&W>=0&&W<=S.height-O){ne.bindFramebuffer(y.FRAMEBUFFER,Ae);const Re=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Re),y.bufferData(y.PIXEL_PACK_BUFFER,pe.byteLength,y.STREAM_READ),y.readPixels(N,W,j,O,ze.convert(Oe),ze.convert(Fe),0);const at=R!==null?ee.get(R).__webglFramebuffer:null;ne.bindFramebuffer(y.FRAMEBUFFER,at);const ft=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await Qg(y,ft,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Re),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,pe),y.deleteBuffer(Re),y.deleteSync(ft),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,N=null,W=0){S.isTexture!==!0&&(po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,S=arguments[1]);const j=Math.pow(2,-W),O=Math.floor(S.image.width*j),pe=Math.floor(S.image.height*j),Ee=N!==null?N.x:0,Ae=N!==null?N.y:0;M.setTexture2D(S,0),y.copyTexSubImage2D(y.TEXTURE_2D,W,0,0,Ee,Ae,O,pe),ne.unbindTexture()},this.copyTextureToTexture=function(S,N,W=null,j=null,O=0){S.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,S=arguments[1],N=arguments[2],O=arguments[3]||0,W=null);let pe,Ee,Ae,we,Oe,Fe;W!==null?(pe=W.max.x-W.min.x,Ee=W.max.y-W.min.y,Ae=W.min.x,we=W.min.y):(pe=S.image.width,Ee=S.image.height,Ae=0,we=0),j!==null?(Oe=j.x,Fe=j.y):(Oe=0,Fe=0);const Re=ze.convert(N.format),at=ze.convert(N.type);M.setTexture2D(N,0),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,N.unpackAlignment);const ft=y.getParameter(y.UNPACK_ROW_LENGTH),gt=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Kt=y.getParameter(y.UNPACK_SKIP_PIXELS),tt=y.getParameter(y.UNPACK_SKIP_ROWS),Pe=y.getParameter(y.UNPACK_SKIP_IMAGES),Ct=S.isCompressedTexture?S.mipmaps[O]:S.image;y.pixelStorei(y.UNPACK_ROW_LENGTH,Ct.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Ct.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Ae),y.pixelStorei(y.UNPACK_SKIP_ROWS,we),S.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,O,Oe,Fe,pe,Ee,Re,at,Ct.data):S.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,O,Oe,Fe,Ct.width,Ct.height,Re,Ct.data):y.texSubImage2D(y.TEXTURE_2D,O,Oe,Fe,pe,Ee,Re,at,Ct),y.pixelStorei(y.UNPACK_ROW_LENGTH,ft),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,gt),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Kt),y.pixelStorei(y.UNPACK_SKIP_ROWS,tt),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Pe),O===0&&N.generateMipmaps&&y.generateMipmap(y.TEXTURE_2D),ne.unbindTexture()},this.copyTextureToTexture3D=function(S,N,W=null,j=null,O=0){S.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,j=arguments[1]||null,S=arguments[2],N=arguments[3],O=arguments[4]||0);let pe,Ee,Ae,we,Oe,Fe,Re,at,ft;const gt=S.isCompressedTexture?S.mipmaps[O]:S.image;W!==null?(pe=W.max.x-W.min.x,Ee=W.max.y-W.min.y,Ae=W.max.z-W.min.z,we=W.min.x,Oe=W.min.y,Fe=W.min.z):(pe=gt.width,Ee=gt.height,Ae=gt.depth,we=0,Oe=0,Fe=0),j!==null?(Re=j.x,at=j.y,ft=j.z):(Re=0,at=0,ft=0);const Kt=ze.convert(N.format),tt=ze.convert(N.type);let Pe;if(N.isData3DTexture)M.setTexture3D(N,0),Pe=y.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)M.setTexture2DArray(N,0),Pe=y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,N.unpackAlignment);const Ct=y.getParameter(y.UNPACK_ROW_LENGTH),nt=y.getParameter(y.UNPACK_IMAGE_HEIGHT),mn=y.getParameter(y.UNPACK_SKIP_PIXELS),ns=y.getParameter(y.UNPACK_SKIP_ROWS),Zt=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,gt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,gt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,we),y.pixelStorei(y.UNPACK_SKIP_ROWS,Oe),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Fe),S.isDataTexture||S.isData3DTexture?y.texSubImage3D(Pe,O,Re,at,ft,pe,Ee,Ae,Kt,tt,gt.data):N.isCompressedArrayTexture?y.compressedTexSubImage3D(Pe,O,Re,at,ft,pe,Ee,Ae,Kt,gt.data):y.texSubImage3D(Pe,O,Re,at,ft,pe,Ee,Ae,Kt,tt,gt),y.pixelStorei(y.UNPACK_ROW_LENGTH,Ct),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,nt),y.pixelStorei(y.UNPACK_SKIP_PIXELS,mn),y.pixelStorei(y.UNPACK_SKIP_ROWS,ns),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Zt),O===0&&N.generateMipmaps&&y.generateMipmap(Pe),ne.unbindTexture()},this.initRenderTarget=function(S){ee.get(S).__webglFramebuffer===void 0&&M.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?M.setTextureCube(S,0):S.isData3DTexture?M.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?M.setTexture2DArray(S,0):M.setTexture2D(S,0),ne.unbindTexture()},this.resetState=function(){F=0,I=0,R=null,ne.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Mc?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===Wo?"display-p3":"srgb"}}class Ac{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=i}clone(){return new Ac(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let fy=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class _d extends es{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vh=new pt,ql=new yc,io=new Xo,so=new k;class xh extends Rt{constructor(e=new sn,t=new _d){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(s),io.radius+=r,e.ray.intersectsSphere(io)===!1)return;vh.copy(s).invert(),ql.copy(e.ray).applyMatrix4(vh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=f,x=p;_<x;_++){const m=c.getX(_);so.fromBufferAttribute(u,m),Mh(so,m,l,s,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=f,x=p;_<x;_++)so.fromBufferAttribute(u,_),Mh(so,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Mh(n,e,t,i,s,r,a){const o=ql.distanceSqToPoint(n);if(o<t){const l=new k;ql.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class wc extends Vt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rc extends sn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new k,h=new $e;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const p=i+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Et(a,3)),this.setAttribute("normal",new Et(o,3)),this.setAttribute("uv",new Et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Yo extends sn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let _=0;const x=[],m=i/2;let d=0;A(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Et(u,3)),this.setAttribute("normal",new Et(f,3)),this.setAttribute("uv",new Et(p,2));function A(){const T=new k,F=new k;let I=0;const R=(t-e)/i;for(let z=0;z<=r;z++){const ce=[],v=z/r,E=v*(t-e)+e;for(let $=0;$<=s;$++){const q=$/s,Q=q*l+o,le=Math.sin(Q),V=Math.cos(Q);F.x=E*le,F.y=-v*i+m,F.z=E*V,u.push(F.x,F.y,F.z),T.set(le,R,V).normalize(),f.push(T.x,T.y,T.z),p.push(q,1-v),ce.push(_++)}x.push(ce)}for(let z=0;z<s;z++)for(let ce=0;ce<r;ce++){const v=x[ce][z],E=x[ce+1][z],$=x[ce+1][z+1],q=x[ce][z+1];e>0&&(h.push(v,E,q),I+=3),t>0&&(h.push(E,$,q),I+=3)}c.addGroup(d,I,0),d+=I}function b(T){const F=_,I=new $e,R=new k;let z=0;const ce=T===!0?e:t,v=T===!0?1:-1;for(let $=1;$<=s;$++)u.push(0,m*v,0),f.push(0,v,0),p.push(.5,.5),_++;const E=_;for(let $=0;$<=s;$++){const Q=$/s*l+o,le=Math.cos(Q),V=Math.sin(Q);R.x=ce*V,R.y=m*v,R.z=ce*le,u.push(R.x,R.y,R.z),f.push(0,v,0),I.x=le*.5+.5,I.y=V*.5*v+.5,p.push(I.x,I.y),_++}for(let $=0;$<s;$++){const q=F+$,Q=E+$;T===!0?h.push(Q,Q+1,q):h.push(Q+1,Q,q),z+=3}c.addGroup(d,z,T===!0?1:2),d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cc extends Yo{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Cc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pc extends sn{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=e;const f=(t-e)/s,p=new k,_=new $e;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){const d=r+m/i*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,h.push(_.x,_.y)}u+=f}for(let x=0;x<s;x++){const m=x*(i+1);for(let d=0;d<i;d++){const A=d+m,b=A,T=A+i+1,F=A+i+2,I=A+1;o.push(b,T,I),o.push(T,F,I)}}this.setIndex(o),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Lc extends sn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new k,u=new k,f=new k;for(let p=0;p<=i;p++)for(let _=0;_<=s;_++){const x=_/s*r,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=s;_++){const x=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,d=(s+1)*(p-1)+_,A=(s+1)*p+_;a.push(x,m,A),a.push(m,d,A)}this.setIndex(a),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(l,3)),this.setAttribute("uv",new Et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class vd extends es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ed,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ic extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class dy extends Ic{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Xa=new pt,yh=new k,Sh=new k;class xd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ec,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(yh),Sh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sh),t.updateMatrixWorld(),Xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Eh=new pt,Ys=new k,qa=new k;class py extends xd{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ys.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ys),qa.copy(i.position),qa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(qa),i.updateMatrixWorld(),s.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Eh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh)}}class bh extends Ic{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new py}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class my extends xd{constructor(){super(new bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gy extends Ic{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new my}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Th=new pt;class _y{constructor(e,t,i=0,s=1/0){this.ray=new yc(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Sc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Th.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Th),this}intersectObject(e,t=!0,i=[]){return Yl(e,this,i,t),i.sort(Ah),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Yl(e[s],this,i,t);return i.sort(Ah),i}}function Ah(n,e){return n.distance-e.distance}function Yl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Yl(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fc);const lr=new Map;let Un;function vy(){if(Un)return Un;const n=document.createElement("canvas");n.width=128,n.height=128;const e=n.getContext("2d");e.fillStyle="#ededeb",e.fillRect(0,0,128,128);let t=719;const i=()=>(t=Math.imul(t,1664525)+1013904223|0,(t>>>0)/4294967296);for(let s=0;s<2e3;s++)e.fillStyle=`rgba(24,19,31,${i()*.15})`,e.fillRect(i()*128,i()*128,1+i()*3,1+i()*2);for(let s=0;s<14;s++)e.fillStyle="#231c3014",e.fillRect(i()*128,i()*128,1+i()*6,i()*28);return Un=new wc(n),Un.colorSpace=Yt,Un.magFilter=Ht,Un}function jl(n){return lr.has(n)||lr.set(n,new vd({color:n,roughness:.88,flatShading:!0,map:Er.includes(n)||Vo.includes(n)?null:vy()})),lr.get(n)}function Dc(n,e,t,i){const s=new _t(new Ci(n,e,t),jl(i));return s.castShadow=!0,s.receiveShadow=!0,s}function Je(n,e,t,i,s,r,a,o){const l=Dc(e,t,i,o);return l.position.set(s,r,a),n.add(l),l}const cr=new Map;function As(n,e,t,i="#f7d438",s="#241e33"){const r=n+i+s;if(!cr.has(r)){const a=document.createElement("canvas");a.width=512,a.height=192;const o=a.getContext("2d");o.fillStyle=s,o.fillRect(0,0,512,192),o.strokeStyle=i,o.lineWidth=7,o.strokeRect(10,10,492,172);const l=n.split(`
`);o.fillStyle=i,o.textAlign="center",o.textBaseline="middle",o.font=`900 ${l.length>1?54:72}px Impact, sans-serif`,l.forEach((h,u)=>o.fillText(h,256,96+(u-(l.length-1)/2)*65,470));const c=new wc(a);c.colorSpace=Yt,c.magFilter=Ht,cr.set(r,new In({map:c}))}return new _t(new ts(e,t),cr.get(r))}function xy(n){const e=new hn;e.userData.look=JSON.stringify(n);for(const t of tn){const i=Cs[t],s=Er[n.skin],r=Rs[n.color],o=t==="head"||t.startsWith("hand")||t.startsWith("forearm")||n.clothes===1&&t.startsWith("arm")?s:t.startsWith("foot")?"#272530":t.startsWith("thigh")||t.startsWith("shin")?n.clothes===2?r:"#333346":r,l=Dc(i.w,i.h,.5,o);if(l.name=t,l.position.set(i.x,i.y,0),e.add(l),t==="torso"&&(n.clothes===0?(Je(l,.06,.75,.025,0,0,.27,"#292635"),Je(l,.16,.13,.03,.2,.05,.27,"#eed5a0")):n.clothes===2&&(Je(l,.6,.12,.025,0,-.15,.27,"#c7c8c0"),Je(l,.08,.7,.03,-.2,0,.27,"#a9a9a0")),n.gender===1&&Je(l,.35,.23,.025,0,.08,.27,"#cfcccc"),n.gender===2&&(Je(l,.04,.3,.04,-.23,.27,.27,"#f3dc7d"),Je(l,.04,.3,.04,.23,.27,.27,"#f3dc7d"))),t==="head"){Je(l,.12,.07,.035,-.15,.05,.27,"#26212e"),Je(l,.12,.07,.035,.15,.05,.27,"#26212e"),Je(l,.15,.035,.035,0,-.14,.28,"#6b353b");const c=Vo[n.hairColor];if(n.hair!==4){if(Je(l,n.hair===2?.18:.64,n.hair===2?.35:.19,.54,0,.36,0,c),n.hair===1)for(const h of[-.21,0,.21])Je(l,.23,.22,.6,h,.4,0,c);n.hair===3&&(Je(l,.14,.65,.53,-.31,0,0,c),Je(l,.14,.65,.53,.31,0,0,c))}}}return e}function Ya(n){const e=new hn;if(n==="axe")Je(e,.12,.95,.12,0,0,0,"#865d3d"),Je(e,.55,.4,.16,.16,.35,0,"#b9bec3");else if(n==="shank"){Je(e,.14,.35,.14,0,-.12,0,"#3d3545");const t=Je(e,.12,.5,.05,0,.27,0,"#e0e4df");t.rotation.z=-.07}else n==="shotgun"?(Je(e,1,.12,.14,.2,0,0,"#9296a0"),Je(e,.48,.22,.21,-.4,-.05,0,"#906445"),Je(e,.23,.23,.22,.07,-.06,0,"#69503c")):n==="smg"&&(Je(e,.8,.25,.2,0,0,0,"#4b5160"),Je(e,.12,.4,.12,-.1,-.25,0,"#343645"),Je(e,.35,.1,.11,.5,.07,0,"#9b9fa8"));return e}function My(n,e){const t=new hn,i=n.w,s=n.h,a={metal:"#68737c",wood:"#7f665c",glass:"#3c929c",fuel:"#c7444f",concrete:"#5d5c6a",fabric:"#837e78"}[n.material],o=(l,c,h,u,f,p,_)=>Je(t,l,c,h,u,f,p,_);switch(n.kind){case"floor":o(i,s,8,0,0,-1,"#454353"),o(i*.4,.025,.12,0,s/2+.035,-1.5,"#a69a70"),o(i,.04,.12,0,s/2+.02,2.9,"#9c8958");break;case"pump":o(i,s,1.35,0,0,-.6,"#bd364f"),o(i*.9,s*.4,1.5,0,.45,-.55,"#d3cebc"),o(i*.65,.6,.07,0,.65,.23,"#152d31");const l=As("9.99",i*.6,.45,"#a4e8ab","#13272b");l.position.set(0,.7,.29),t.add(l),o(.1,s*.7,.1,i*.57,-.3,-.1,"#1a1728");break;case"car":case"truck":o(i,s*.55,2,0,-s*.1,0,n.kind==="car"?"#b6a46c":"#527a78"),o(i*.48,s*.5,1.7,-i*.1,s*.34,0,n.kind==="car"?"#537c81":"#9b8174"),o(i*.4,s*.3,.06,-i*.1,s*.33,.89,"#243b4c"),o(i,.18,2.1,0,-s*.36,0,"#393442");for(const h of[-i*.34,i*.34]){const u=new _t(new Yo(.52,.52,2.1,10),jl("#26232d"));u.rotation.x=Math.PI/2,u.position.set(h,-s*.35,0),t.add(u)}o(.25,.25,.04,i*.43,0,1.03,"#e7d68f");break;case"post":case"pole":o(i,s,.6,0,0,-2,a),o(i*1.5,.2,.9,0,-s/2,-2,"#8f8b8f");break;case"roof":case"balcony":o(i,s,5,0,0,-1.2,e==="motel"?"#857587":"#b54b72"),o(i,.14,.15,0,0,1.35,"#f1b638");break;case"glass":const c=new _t(new Ci(i,s,.09),new vd({color:"#488894",transparent:!0,opacity:.6,roughness:.3}));c.position.z=-1.2,c.userData.ownedMaterial=!0,t.add(c),o(i,.07,.13,0,-s/2,-1.15,"#c8b7a0");break;case"sign":{const h=e==="gas"?`LAST STOP
GAS`:e==="rest"?`REST AREA
1 MILE`:`NO-TELL
VACANCY`;o(i,s,.35,0,0,-1.8,"#382e48");const u=As(h,i*.94,s*.93,e==="motel"?"#ff8bad":"#f6d23a");u.position.z=-1.59,t.add(u);break}case"can":o(i,s,.6,0,0,0,"#d7ad3a"),o(i*.5,.15,.18,0,s/2,0,"#33303b");break;case"door":o(i,s,.2,0,0,-1.9,"#694761"),o(.09,.09,.1,i*.3,0,-1.73,"#ead176");break;case"table":case"bench":o(i,.24,1.6,0,s*.35,0,a);for(const h of[-i*.36,i*.36])o(.15,s,.8,h,0,0,"#514353");break;case"mattress":o(i,s,1.8,0,0,0,"#aea291");for(let h=-i*.4;h<i*.5;h+=.45)o(.04,s*1.01,1.81,h,0,0,"#857887");break;case"tire":{const h=new _t(new Lc(i*.36,i*.16,6,12),jl("#292735"));t.add(h);break}case"railing":o(i,.09,.12,0,s/2,-.1,"#bcaabb");for(let h=-i/2;h<i/2;h+=.8)o(.06,s,.1,h,0,-.1,"#bcaabb");break;default:if(o(i,s,1.35,0,0,0,a),["fridge","vending","ice","tv"].includes(n.kind)){o(i*.8,s*.7,.07,0,s*.05,.71,"#243745");const h=As(n.kind==="vending"?`BAD
IDEA`:n.kind==="ice"?"ICE":n.kind==="tv"?"NO SIGNAL":"COLD",i*.7,s*.45,n.kind==="tv"?"#b99bbb":"#b9cfa2","#1e3040");h.position.set(0,.1,.76),t.add(h)}if(n.kind==="ac")for(let h=-i*.4;h<i*.4;h+=.22)o(.06,s*.65,.05,h,0,.73,"#383b4b")}return t}function yy(n){const e=new hn,t=document.createElement("canvas");t.width=2048,t.height=512;const i=t.getContext("2d");i.fillStyle=n==="motel"?"#261f37":n==="rest"?"#263339":"#2b263a",i.fillRect(0,0,2048,512);for(let o=0;o<90;o++){const l=o*25,c=130+o*73%150;i.fillStyle=["#343246","#3f364b","#2e3446"][o%3],i.fillRect(l,c,30+o%6*9,512-c),i.fillStyle=o%2?"#927652":"#486577";for(let h=0;h<5;h++)i.fillRect(l+8,c+20+h*36,7,10)}const s=new wc(t);s.colorSpace=Yt,s.magFilter=Ht;const r=new _t(new ts(190,35),new In({map:s}));r.position.set(0,12,-18),r.userData.ownedTexture=!0,e.add(r);const a=new hn;if(n==="gas"){Je(a,31,8,1,24,3,-5,"#675d73"),Je(a,31,.5,1.4,24,7,-4.8,"#b95b74");for(let l=13;l<38;l+=6)Je(a,4.8,3.5,.06,l,2.4,-4.43,"#273c4c");const o=As("CHEAP THRILLS / OPEN 24H",27,1.4,"#f0c32f","#33283e");o.position.set(24,6,-4.4),a.add(o)}else if(n==="motel"){Je(a,118,10,1,0,4.5,-4.5,"#66576c"),Je(a,119,.6,1.4,0,9.5,-4.2,"#9d617e");for(let o=-50;o<55;o+=11)for(const l of[2,7]){Je(a,4.2,3.4,.05,o,l,-3.94,"#302b3d");const c=As(String(101+Math.floor((o+50)/11)+(l>3?10:0)),1.2,.5,"#cca881","#372d40");c.position.set(o,l+1.1,-3.88),a.add(c)}}else{Je(a,25,6,1,27,2.7,-5,"#656c73");const o=As("RESTROOMS / NO GUARANTEES",24,1.2,"#94c6bd","#263c45");o.position.set(27,5,-4.4),a.add(o)}return e.add(a),e}function pi(n){n.traverse(e=>{var t;if(e instanceof _t&&(e.geometry.dispose(),e.userData.ownedMaterial&&e.material.dispose(),e.userData.ownedTexture)){const i=e.material;(t=i.map)==null||t.dispose(),i.dispose()}})}function Sy(){Un==null||Un.dispose(),Un=void 0,lr.forEach(n=>n.dispose()),lr.clear(),cr.forEach(n=>{var e;(e=n.map)==null||e.dispose(),n.dispose()}),cr.clear()}function Ey(n,e){return n==="head"||n.startsWith("hand")||n.startsWith("forearm")?Er[e.skin]:n.startsWith("foot")?"#292735":Rs[e.color]}class by{constructor(e,t,i){ye(this,"renderer");ye(this,"scene",new fy);ye(this,"camera",new bc);ye(this,"actors",new Map);ye(this,"props",new Map);ye(this,"blood",new Map);ye(this,"debris",new Map);ye(this,"shots",new Map);ye(this,"pickups",new Map);ye(this,"environment",new hn);ye(this,"venue","");ye(this,"flames",new Map);ye(this,"flameGeometry",new Cc(.22,.8,5));ye(this,"flameMaterial",new In({color:"#ff7928",transparent:!0,opacity:.85,depthWrite:!1}));ye(this,"flameCore",new In({color:"#ffe17b",transparent:!0,opacity:.95,depthWrite:!1}));ye(this,"frame",0);ye(this,"last",0);ye(this,"center",0);ye(this,"width",1);ye(this,"height",1);ye(this,"observer");ye(this,"focused",0);ye(this,"particleGeometry",new sn);ye(this,"positions",new Float32Array(500*3));ye(this,"colors",new Float32Array(500*3));ye(this,"particles",[]);ye(this,"points");ye(this,"sun");ye(this,"left",new _t(new ts(1,30),new In({color:"#c83f62",transparent:!0,opacity:.22,side:cn,depthWrite:!1})));ye(this,"right",this.left.clone());ye(this,"reducedEffects",!1);ye(this,"resize",()=>{this.width=Math.max(1,this.host.clientWidth),this.height=Math.max(1,this.host.clientHeight),this.renderer.setSize(this.width,this.height);const e=this.width/this.height,t=e<.8?12:9;this.camera.left=-t*e,this.camera.right=t*e,this.camera.top=t,this.camera.bottom=-t,this.camera.near=.1,this.camera.far=150,this.camera.updateProjectionMatrix()});ye(this,"animate",e=>{const t=Math.min(.08,(e-this.last)/1e3||0);this.last=e,this.render(this.state(),t,e/1e3),this.frame=requestAnimationFrame(this.animate)});this.host=e,this.state=t,this.localId=i,this.renderer=new hy({antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.4)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=dc,this.renderer.outputColorSpace=Yt,this.renderer.toneMapping=Vf,this.renderer.toneMappingExposure=1.28,e.appendChild(this.renderer.domElement),this.scene.background=new je("#211b32"),this.scene.fog=new Ac("#211b32",40,105),this.scene.add(new dy("#b7a8d8","#43424a",2.5)),this.sun=new gy("#edd6a5",3),this.sun.position.set(-10,16,14),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),Object.assign(this.sun.shadow.camera,{left:-24,right:24,top:20,bottom:-15,far:70}),this.sun.shadow.normalBias=.05,this.scene.add(this.sun,this.sun.target);const s=new bh("#ed2867",160,33);s.position.set(-27,8,6);const r=new bh("#26c6c1",120,33);r.position.set(25,7,5),this.scene.add(s,r),this.scene.add(this.environment,this.left,this.right),this.left.position.z=3.5,this.right.position.z=3.5,this.particleGeometry.setAttribute("position",new dn(this.positions,3).setUsage(Cu)),this.particleGeometry.setAttribute("color",new dn(this.colors,3).setUsage(Cu)),this.particleGeometry.setDrawRange(0,0),this.points=new xh(this.particleGeometry,new _d({size:.16,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1})),this.points.frustumCulled=!1,this.scene.add(this.points),this.observer=new ResizeObserver(this.resize),this.observer.observe(e),this.resize(),this.frame=requestAnimationFrame(this.animate)}get canvas(){return this.renderer.domElement}setSpectator(e){this.focused=e}aim(e,t){const i=this.host.getBoundingClientRect(),s=new $e((e-i.left)/i.width*2-1,-(t-i.top)/i.height*2+1),r=new _y;r.setFromCamera(s,this.camera);const a=new k;if(r.ray.intersectPlane(new gi(new k(0,0,1),0),a)){const o=this.state().actors[this.localId()],l=a.x-o.x,c=a.y-o.y-Jn(o),h=Math.max(.01,Math.hypot(l,c));return{x:Math.round(l/h*1024)/1024,y:Math.round(c/h*1024)/1024}}return{x:1,y:0}}present(e){for(const t of e){if(["ignite","jump","land","swap","reload"].includes(t.kind))continue;const i=new je(t.kind==="scream"||t.kind==="cry"?"#80cde1":t.kind==="detach"||t.kind==="hit"?"#b53358":t.kind==="explosion"?"#f9a349":t.kind==="break"?"#d2c3a4":"#f9de5e"),s=this.reducedEffects?2:t.kind==="explosion"?35:t.kind==="detach"?16:t.kind==="shot"?4:10;for(let r=0;r<s&&this.particles.length<500;r++)this.particles.push({x:t.x,y:t.y,z:1,vx:(Math.random()-.5)*(t.kind==="explosion"?12:6),vy:Math.random()*7,life:t.kind==="shot"?.08:.3+Math.random()*.4,color:i})}}burningEffects(e,t,i){const s=[...e.fires.map(r=>({key:`f${r.id}`,x:r.x,y:r.y-.3,w:r.radius*1.6,h:1.8})),...e.actors.filter(r=>r.hp>0&&r.onFire).map(r=>({key:`a${r.id}`,x:r.x,y:r.y+.15,w:1,h:Ks(r)})),...e.props.filter(r=>r.hp>0&&r.onFire).map(r=>({key:`p${r.id}`,x:r.x,y:r.y-r.h/2,w:Math.min(5,r.w),h:Math.min(3,r.h)})),...e.debris.filter(r=>r.hp>0&&r.onFire).map(r=>({key:`d${r.id}`,x:r.x,y:r.y-r.h/2,w:r.w,h:.5})),...e.pickups.filter(r=>r.onFire).map(r=>({key:`i${r.id}`,x:r.x,y:r.y,w:.6,h:.6}))].filter(r=>Math.abs(r.x-this.center)<30).slice(0,96);for(const[r,a]of this.flames)s.some(o=>o.key===r)||(this.scene.remove(a),this.flames.delete(r));for(const r of s){let a=this.flames.get(r.key);if(!a){a=new hn;for(let o=0;o<5;o++){const l=new _t(this.flameGeometry,o%2?this.flameCore:this.flameMaterial);a.add(l)}this.flames.set(r.key,a),this.scene.add(a)}a.position.set(r.x,r.y,.75),a.children.forEach((o,l)=>{const c=.75+Math.sin(t*19+l*2+r.x)*.18+Math.sin(t*31+l)*.08,h=Math.max(.45,r.h)*c;o.position.set((l/4-.5)*r.w+Math.sin(t*9+l)*.06,h*.4,Math.sin(l)*.15),o.scale.set((r.w/3+.4)*c,h,1),o.rotation.z=Math.sin(t*12+l)*.12}),!this.reducedEffects&&this.particles.length<480&&Math.random()<i*8&&this.particles.push({x:r.x,y:r.y+r.h,z:.5,vx:.3,vy:1.6,life:.8,color:new je("#57505c")})}}render(e,t,i){var h;if(e.venue!==this.venue){this.scene.remove(this.environment),pi(this.environment),this.environment=yy(e.venue),this.scene.add(this.environment),this.venue=e.venue;for(const u of this.props.values())this.scene.remove(u),pi(u);this.props.clear()}const s=e.phase==="lobby"||e.phase==="countdown",r=e.actors[this.localId()],a=r.hp>0?r:((h=e.actors[this.focused])==null?void 0:h.hp)>0?e.actors[this.focused]:e.actors.find(u=>u.hp>0)??r,o=s?-25:a.x;this.center+=(o-this.center)*(1-Math.exp(-t*7)||1);const l=s?4:Math.max(4,a.y+2);this.camera.position.set(this.center+3.5,l+4,30),this.camera.lookAt(this.center,l,0),this.camera.updateMatrixWorld(),this.sun.position.set(this.center-12,16,14),this.sun.target.position.set(this.center,0,0),this.left.visible=this.right.visible=e.phase==="match",this.left.position.x=e.zoneLeft-50,this.left.scale.x=100,this.left.position.y=8,this.right.position.x=e.zoneRight+50,this.right.scale.x=100,this.right.position.y=8;for(const u of e.actors){let f=this.actors.get(u.id);f&&f.userData.look!==JSON.stringify(u.look)&&(this.scene.remove(f),pi(f),this.actors.delete(u.id),f=void 0),f||(f=xy(u.look),this.scene.add(f),this.actors.set(u.id,f)),f.visible=s?u.id===this.localId():u.hp>0,f.scale.setScalar(s?2:1),f.position.set(s?-20:u.x,s?1.1:u.y,s?6:0);const p=_r(u);!s&&p===1&&u.grounded&&(f.position.y+=Math.abs(Math.sin(i*10))*.22*Math.min(1,Math.abs(u.vx)/2));const _=Math.sin(i*14)*Math.min(1,Math.abs(u.vx)/5);for(const F of tn){const I=f.getObjectByName(F);I.visible=s||u.parts[F]>0;const R=Rn(u,F);if(I.position.set(R.x,R.y,0),I.scale.y=R.length/Cs[F].h,I.rotation.z=R.rotation+(p>0&&(F.startsWith("thigh")||F.startsWith("shin"))?(F.endsWith("L")?1:-1)*_*.22:F==="torso"&&!u.parts.head?Math.sin(i*8)*.12:0),!s&&p===0&&u.grounded){const z=Math.sin(i*11)*Math.min(1,Math.abs(u.vx)/1.5);F==="torso"&&(I.rotation.z+=z*.035)}}const x=!u.parts.armL&&!u.parts.armR?"body":u.weapons[u.slot]??"shank";let m=f.getObjectByName("weapon");(m==null?void 0:m.userData.weapon)!==x&&(m&&(f.remove(m),pi(m)),m=Ya(x),m.name="weapon",m.userData.weapon=x,f.add(m));const d=ar(u),A=x==="shank"||x==="axe",b=x==="axe"?.35:x==="shank"?.09:0;m.position.set(d.x+d.dx*b,d.y+d.dy*b,.4),m.rotation.z=d.angle-(A?Math.PI/2:0),m.scale.setScalar(x==="shank"?.75:1);const T=f.getObjectByName("torso");T.rotation.z+=u.attacking>0?u.face*.08:0}for(const[u,f]of this.props)e.props.some(p=>p.id===u&&p.hp>0)||(this.scene.remove(f),pi(f),this.props.delete(u));for(const u of e.props){if(u.hp<=0)continue;let f=this.props.get(u.id);f||(f=My(u,e.venue),this.props.set(u.id,f),this.scene.add(f)),f.position.set(u.x,u.y,0),f.rotation.z=u.falling?Math.sin(i*3)*.08:0,u.burn&&u.fuel>0&&this.particles.length<480&&Math.random()<t*(this.reducedEffects?3:22)&&this.particles.push({x:u.x+(Math.random()-.5)*u.w,y:u.y+u.h*.3,z:1,vx:Math.random()-.5,vy:3+Math.random()*2,life:.6,color:new je(Math.random()>.5?"#ef6b32":"#efbf3b")})}const c=e.blood.filter(u=>e.props.some(f=>f.id===u.surface&&f.hp>0&&!f.falling));for(const[u,f]of this.blood)c.some(p=>p.id===u)||(this.scene.remove(f),pi(f),this.blood.delete(u));for(const u of c){let f=this.blood.get(u.id);if(!f){f=new hn;for(let p=0;p<10;p++){const _=new _t(new Rc(p===0?1:.08+p%3*.035,12),new In({color:p%2?"#8b1738":"#63152c",side:cn,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));_.userData.ownedMaterial=!0,_.rotation.x=-Math.PI/2,_.scale.set(p===0?1.25:1,p===0?.55:1,1),p>0&&_.position.set(Math.cos(p*2.4+u.id)*(.5+p*.11),.001*p,Math.sin(p*2.4+u.id)*(.3+p*.06)),f.add(_)}this.blood.set(u.id,f),this.scene.add(f)}f.position.set(u.x,u.y,.4),f.visible=!s}for(const[u,f]of this.debris)e.debris.some(p=>p.id===u)||(this.scene.remove(f),f.geometry.dispose(),this.debris.delete(u));for(const u of e.debris){let f=this.debris.get(u.id);f||(f=Dc(u.w,u.h,.35,u.part&&u.look?Ey(u.part,u.look):Rs[u.color%Rs.length]),this.debris.set(u.id,f),this.scene.add(f)),f.position.set(u.x,u.y,1),f.rotation.z=u.angle??0}for(const[u,f]of this.shots)e.shots.some(p=>p.id===u)||(this.scene.remove(f),pi(f),this.shots.delete(u));for(const u of e.shots){let f=this.shots.get(u.id);f||(u.weapon==="axe"?f=Ya("axe"):(f=new _t(new Ci(u.weapon==="shotgun"?.16:.45,.06,.06),new In({color:u.owner===this.localId()?"#ffdd3f":"#ff675d"})),f.userData.ownedMaterial=!0),this.shots.set(u.id,f),this.scene.add(f)),f.position.set(u.x,u.y,.65),f.rotation.z=u.weapon==="axe"?(22-u.life)*.55:Math.atan2(u.vy,u.vx)}for(const[u,f]of this.pickups)e.pickups.some(p=>p.id===u)||(this.scene.remove(f),pi(f),this.pickups.delete(u));for(const u of e.pickups){let f=this.pickups.get(u.id);if(!f){f=Ya(u.weapon);const p=new _t(new Pc(.6,.67,20),new In({color:"#f0d432",side:cn}));p.userData.ownedMaterial=!0,f.add(p),this.scene.add(f),this.pickups.set(u.id,f)}f.position.set(u.x,u.y+Math.sin(i*3)*.15,1),f.rotation.z=Math.sin(i)*.1}for(let u=this.particles.length-1;u>=0;u--){const f=this.particles[u];if(f.life-=t,f.life<=0){this.particles.splice(u,1);continue}f.x+=f.vx*t,f.y+=f.vy*t,f.vy-=t*9}this.particles.forEach((u,f)=>{this.positions.set([u.x,u.y,u.z],f*3),this.colors.set([u.color.r,u.color.g,u.color.b],f*3)}),this.particleGeometry.setDrawRange(0,this.particles.length),this.particleGeometry.attributes.position.needsUpdate=!0,this.particleGeometry.attributes.color.needsUpdate=!0,this.burningEffects(e,i,t),this.renderer.render(this.scene,this.camera)}dispose(){cancelAnimationFrame(this.frame),this.observer.disconnect(),this.scene.traverse(e=>{(e instanceof _t||e instanceof xh)&&e.geometry.dispose()}),this.points.material instanceof es&&this.points.material.dispose(),this.flameGeometry.dispose(),this.flameMaterial.dispose(),this.flameCore.dispose(),Sy(),this.renderer.dispose(),this.renderer.domElement.remove()}}function Ty(n){return n.kind==="shot"||n.kind==="melee"?n.weapon??"body":n.kind}function Ay(n){const e={};if(!n||typeof n!="object")return e;const t=n;if(t.version!==1||!t.cues||typeof t.cues!="object")return e;for(const[i,s]of Object.entries(t.cues))!/^[a-z]+$/.test(i)||!Array.isArray(s)||(e[i]=s.filter(r=>typeof r=="string"&&/^[a-z]+--[0-9]+\.wav$/.test(r)).slice(0,20));return e}class wy{constructor(){ye(this,"buffers",new Map);ye(this,"started",!1);ye(this,"abort",new AbortController)}async load(e){if(this.started)return;this.started=!0;const t="/game/royale/audio/royale/";try{const i=await fetch(t+"manifest.json",{signal:this.abort.signal});if(!i.ok)return;const s=Ay(await i.json());await Promise.all(Object.entries(s).map(async([r,a])=>{const o=[];for(const l of a)try{const c=await fetch(t+l,{signal:this.abort.signal});c.ok&&o.push(await e.decodeAudioData(await c.arrayBuffer()))}catch{}o.length&&this.buffers.set(r,o)}))}catch{}}get(e){const t=this.buffers.get(e);return t==null?void 0:t[Math.floor(Math.random()*t.length)]}dispose(){this.abort.abort(),this.buffers.clear()}}function Ry(n,e=Math.random()){return n&&e<.25}class Cy{constructor(){ye(this,"enabled",!1);ye(this,"bank",new wy);ye(this,"context");ye(this,"master");ye(this,"active",new Set);ye(this,"last",new Map)}enable(e){if(this.enabled=e,e)try{if(this.context??(this.context=new AudioContext),!this.master){this.master=this.context.createGain();const t=this.context.createDynamicsCompressor();this.master.connect(t),t.connect(this.context.destination)}this.master.gain.value=.55,this.context.resume(),this.bank.load(this.context)}catch{this.enabled=!1}else{this.master&&(this.master.gain.value=0);for(const t of this.active)try{t.stop()}catch{}}}start(e,t,i,s,r){e.connect(r??t),r&&r.connect(t),t.connect(this.master),this.active.add(e),e.onended=()=>{this.active.delete(e),e.disconnect(),r==null||r.disconnect(),t.disconnect()},e.start(i),e.stop(i+s)}envelope(e,t,i){const s=this.context.createGain();return s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(i,e+.003),s.gain.exponentialRampToValueAtTime(1e-4,e+t),s}tone(e,t,i,s,r,a="sine"){const o=this.context.createOscillator();o.type=a,o.frequency.setValueAtTime(t,e),o.frequency.exponentialRampToValueAtTime(i,e+s),this.start(o,this.envelope(e,s,r),e,s)}noise(e,t,i,s,r="lowpass"){const a=this.context,o=a.createBuffer(1,Math.ceil(a.sampleRate*t),a.sampleRate),l=o.getChannelData(0);for(let u=0;u<l.length;u++)l[u]=Math.random()*2-1;const c=a.createBufferSource(),h=a.createBiquadFilter();c.buffer=o,h.type=r,h.frequency.value=s,h.Q.value=.7,this.start(c,this.envelope(e,t,i),e,t,h)}cry(e,t){const i=this.context,s=t?.7:.9,r=t?1:3;for(let a=0;a<r;a++){const o=e+a*.25,l=t?s:.24,c=i.createOscillator(),h=i.createBiquadFilter(),u=i.createOscillator(),f=i.createGain();c.type="sawtooth",c.frequency.setValueAtTime(t?430:240,o),c.frequency.exponentialRampToValueAtTime(t?270:155,o+l),u.frequency.value=t?9:6,f.gain.value=t?22:15,u.connect(f),f.connect(c.frequency),h.type="bandpass",h.frequency.value=t?1250:750,h.Q.value=.9,this.start(c,this.envelope(o,l,t?.12:.09),o,l,h),this.active.add(u),u.onended=()=>{this.active.delete(u),u.disconnect(),f.disconnect()},u.start(o),u.stop(o+l)}this.noise(e,s,.025,1600,"bandpass")}play(e){if(!this.enabled||!this.context||this.active.size>=36)return;const t=Ty(e),i=this.context.currentTime;if(i-(this.last.get(t)??-1)<(t==="smg"?.045:.07))return;this.last.set(t,i);const s=this.bank.get(t);if(Ry(!!s)){const r=this.context.createBufferSource();r.buffer=s,r.playbackRate.value=.97+Math.random()*.06;const a=s.duration/r.playbackRate.value,o=this.envelope(i,a,.8);o.gain.cancelScheduledValues(i),o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(.8,i+.005),o.gain.setValueAtTime(.8,i+Math.max(.005,a-.01)),o.gain.linearRampToValueAtTime(0,i+a),this.start(r,o,i,a);return}switch(t){case"scream":this.cry(i,!0);break;case"cry":this.cry(i,!1);break;case"ignite":this.noise(i,.5,.12,850),this.noise(i+.05,.3,.045,3500,"highpass");break;case"smg":this.noise(i,.065,.19,3200,"highpass"),this.tone(i,145,48,.085,.11);break;case"shotgun":this.noise(i,.24,.35,2200),this.tone(i,125,32,.28,.24),this.noise(i+.075,.1,.08,4200,"highpass");break;case"explosion":this.noise(i,.8,.4,700),this.tone(i,65,22,.65,.3),this.noise(i+.1,.4,.08,2400);break;case"shank":this.noise(i,.055,.075,2400,"highpass"),this.tone(i,1600,650,.045,.025,"triangle");break;case"axe":this.noise(i,.22,.13,650,"bandpass"),this.tone(i,220,90,.17,.025,"triangle");break;case"body":case"hit":this.noise(i,.075,.1,950),this.tone(i,110,40,.12,.13);break;case"detach":this.noise(i,.13,.14,700),this.tone(i,210,65,.11,.08);break;case"land":this.noise(i,.09,.09,600),this.tone(i,80,30,.12,.07);break;case"jump":this.noise(i,.08,.045,1500,"bandpass");break;case"reload":this.noise(i,.035,.11,4e3,"highpass"),this.noise(i+.12,.04,.08,2100,"highpass"),this.tone(i+.14,650,280,.04,.04,"triangle");break;case"swap":this.noise(i,.045,.07,2800,"highpass"),this.tone(i,900,450,.035,.025,"triangle");break;case"pickup":this.tone(i,660,660,.1,.055,"triangle"),this.tone(i+.07,990,990,.17,.05,"triangle");break;case"break":this.noise(i,.22,.16,3700,"highpass"),this.tone(i,740,160,.14,.035,"triangle"),this.noise(i+.05,.14,.07,1800);break;case"death":this.tone(i,280,65,.5,.06,"triangle"),this.noise(i,.16,.07,600);break;default:this.noise(i,.12,.05,1e3)}}dispose(){var e;this.enable(!1),this.bank.dispose(),(e=this.context)==null||e.close()}}class Py{constructor(e,t,i){ye(this,"practiceSim",new zf(1));ye(this,"session");ye(this,"scene");ye(this,"sound",new Cy);ye(this,"journal",new cg);ye(this,"ledger",new ug);ye(this,"input");ye(this,"keys",new Set);ye(this,"mouseDown",!1);ye(this,"touchAttack",!1);ye(this,"frame",0);ye(this,"last",0);ye(this,"accumulator",0);ye(this,"reportTime",0);ye(this,"advice",null);ye(this,"mode","practice");ye(this,"paused",!1);ye(this,"touchMove",0);ye(this,"network",{status:"offline",invite:"",message:"Practice — one human, seven bots.",localId:0,ping:0});ye(this,"down",e=>{e.target instanceof HTMLElement&&e.target.matches("input,select,textarea")||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),this.keys.add(e.code),!e.repeat&&((e.code==="Space"||e.code==="KeyW"||e.code==="ArrowUp")&&this.command("jump"),e.code==="KeyE"&&this.command("pickup"),(e.code==="KeyQ"||e.code==="ShiftLeft"||e.code==="ShiftRight")&&this.command("cycle"),e.code==="KeyR"&&this.command("reload"),e.code==="Escape"&&this.mode==="practice"&&this.state.phase==="match"&&(this.paused=!this.paused)))});ye(this,"up",e=>{this.keys.delete(e.code)});ye(this,"blur",()=>{this.keys.clear(),this.mouseDown=!1,this.touchAttack=!1,this.touchMove=0,this.mode==="practice"&&this.state.phase==="match"&&(this.paused=!0)});ye(this,"pointerDown",e=>{e.pointerType!=="touch"&&(this.mouseDown=!0,this.pointerMove(e))});ye(this,"pointerUp",()=>{this.mouseDown=!1});ye(this,"pointerMove",e=>{if(e.pointerType==="touch")return;const t=this.scene.aim(e.clientX,e.clientY);this.input.aimX=t.x,this.input.aimY=t.y});ye(this,"animate",e=>{var t,i,s,r,a;try{const o=Math.min(.08,(e-this.last)/1e3||0);if(this.last=e,this.mode==="online")(t=this.session)==null||t.advance(o);else if(!this.paused)for(this.accumulator+=o;this.accumulator>=1/60;)this.practiceSim.step([this.poll()]),this.accumulator-=1/60;const l=(s=(i=this.session)==null?void 0:i.wrapper)==null?void 0:s.rollbackNetcode,c=this.mode==="online"?((r=l==null?void 0:l.history[0])==null?void 0:r.frame)??-1:this.state.frame,h=this.ledger.collect(this.state.events,c);this.scene.present(h);for(const f of h)this.sound.play(f),f.kind==="death"&&f.actor===this.localId&&f.cause&&(this.advice=this.journal.discover(f.cause));const u=this.state.actors[this.localId];if(u.death&&u.deathFrame<=c&&!this.advice&&(this.advice=this.journal.discover(u.death)),this.reportTime+=o,this.reportTime>.08){this.reportTime=0;const f=this.state,p=JSON.parse(JSON.stringify(f));p.phase==="results"&&this.mode==="online"&&c<p.frame-p.phaseFrame&&(p.phase="match"),this.changed({state:p,localId:this.localId,network:{...this.network},advice:this.advice,known:[...this.journal.seen],paused:this.paused})}}catch(o){(a=this.session)==null||a.dispose(!1),this.network={...this.network,status:"failed",message:`Simulation error: ${o instanceof Error?o.message:String(o)}`},this.changed({state:this.practiceSim.snapshot(),localId:0,network:{...this.network},advice:null,known:[...this.journal.seen],paused:!1})}this.frame=requestAnimationFrame(this.animate)});this.changed=i,this.input=xs(t),this.scene=new by(e,()=>this.state,()=>this.localId),window.addEventListener("keydown",this.down),window.addEventListener("keyup",this.up),window.addEventListener("blur",this.blur),this.scene.canvas.addEventListener("pointerdown",this.pointerDown),window.addEventListener("pointerup",this.pointerUp),this.scene.canvas.addEventListener("pointermove",this.pointerMove),this.frame=requestAnimationFrame(this.animate)}get localId(){return this.mode==="online"?this.network.localId:0}get state(){var e;return this.mode==="online"&&((e=this.session)!=null&&e.simulation)?this.session.simulation.state:this.practiceSim.state}setLook(e){this.input.look=hc(e)}setVenue(e){this.input.venue=Math.max(0,Math.min(2,e)),this.input.venueChange++}ready(){this.input.ready++}rematch(){this.input.rematch++,this.advice=null}spectator(e){this.scene.setSpectator(e)}command(e){this.input[e]++}touchFire(e,t,i){if(this.touchAttack=e,t!==void 0&&i!==void 0){const s=Math.max(.01,Math.hypot(t,i));this.input.aimX=t/s,this.input.aimY=-i/s}}setSound(e){this.sound.enable(e)}async online(e=""){if(!this.session){this.paused=!1,this.mode="online",this.input.ready=0,this.ledger.reset(),this.advice=null;try{const{Session:t}=await ng(async()=>{const{Session:i}=await import("./session-BQDDkbrY.js");return{Session:i}},[]);this.session=new t(()=>this.poll(),i=>{this.network=i}),await this.session.connect(e)}catch(t){this.network={...this.network,status:"failed",message:t instanceof Error?t.message:"Could not load multiplayer support."}}}}practice(){if(this.session){this.session.dispose(),location.assign(location.href.split("#")[0]);return}this.mode="practice",this.paused=!1}leave(){var e;(e=this.session)==null||e.dispose(),location.assign(location.href.split("#")[0])}poll(){return this.input.move=Math.max(-1,Math.min(1,Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))+this.touchMove)),this.input.attack=this.mouseDown||this.touchAttack||this.keys.has("KeyJ"),JSON.parse(JSON.stringify(this.input))}dispose(){var e;cancelAnimationFrame(this.frame),(e=this.session)==null||e.dispose(),this.scene.dispose(),this.sound.dispose(),window.removeEventListener("keydown",this.down),window.removeEventListener("keyup",this.up),window.removeEventListener("blur",this.blur),window.removeEventListener("pointerup",this.pointerUp),this.scene.canvas.removeEventListener("pointerdown",this.pointerDown),this.scene.canvas.removeEventListener("pointermove",this.pointerMove)}}function Ly(){try{return hc(JSON.parse(localStorage.getItem("royale.look")??"null"))}catch{return{...Ho}}}function Iy(n){try{localStorage.setItem("royale.look",JSON.stringify(n))}catch{}}const Dy={class:"header-venue"},Uy={class:"header-tools"},Ny={key:0,class:"network-pill"},Oy={key:0,class:"lobby"},Fy={class:"customize"},By=["value"],ky=["disabled"],zy=["value"],Hy={class:"swatch-row"},Vy=["onClick","aria-label"],Gy=["onClick","aria-label"],Wy={class:"swatch-row clothes-colors"},Xy=["onClick","aria-label"],qy={key:0,class:"mode-buttons"},Yy={class:"join-box"},jy=["disabled"],$y={key:1,class:"connection-card"},Ky=["value"],Zy={class:"roster-status"},Jy={key:0},Qy={key:1},eS=["disabled"],tS={class:"smallprint"},nS={key:1,class:"specimen"},iS={class:"match-top"},sS={class:"match-clock"},rS={class:"player-hud"},oS={class:"health-heading"},aS={class:"health-bar"},lS={class:"body-status"},cS={key:0},uS={key:1},hS={class:"weapon-readout"},fS={key:0},dS={key:1},pS={class:"body-panel"},mS={key:0,class:"death-overlay"},gS={class:"spectator-buttons"},_S=["onClick"],vS={class:"touch-controls"},xS={class:"touch-actions"},MS={key:3,class:"result-card"},yS={key:0,class:"result-advice"},SS={class:"result-stat"},ES={key:4},bS={key:5,class:"modal-backdrop"},TS={class:"pause-card"},AS={key:6,class:"modal-backdrop"},wS={class:"pause-card"},RS={key:7,class:"modal-backdrop"},CS={class:"journal"},PS={key:0},LS={key:1,class:"modal-backdrop"},IS={class:"pause-card"},DS=Sp({__name:"App",setup(n){const e=qt(),t=qt(Ly()),i=qt(0),s=qt(!1),r=qt(!1),a=qt(!1),o=qt("COPY INVITE"),l=qt(""),c=qt(new URLSearchParams(location.hash.slice(1)).get("room")??""),h=qt({state:new zf().state,localId:0,network:{status:"offline",invite:"",message:"Practice — one human, seven bots.",localId:0,ping:0},advice:null,known:[],paused:!1});let u;const f=en(()=>h.value.state),p=en(()=>f.value.actors[h.value.localId]),_=en(()=>f.value.phase==="lobby"||f.value.phase==="countdown"),x=en(()=>h.value.network.status!=="offline"),m=en(()=>h.value.network.status==="connected"),d=en(()=>f.value.actors.filter(ae=>ae.hp>0)),A=en(()=>!p.value.parts.armL&&!p.value.parts.armR?"body":p.value.weapons[p.value.slot]),b=en(()=>tn.filter(ae=>p.value.parts[ae]>0).length),T=en(()=>Ss.find(ae=>ae.id===f.value.venue)),F=en(()=>["failed","closed"].includes(h.value.network.status)),I=en(()=>{const ae=f.value.phase==="match"?Math.floor(f.value.phaseFrame/60):0;return`${String(Math.floor(ae/60)).padStart(2,"0")}:${String(ae%60).padStart(2,"0")}`}),R=en(()=>p.value.ready);tr(()=>h.value.state.venue,ae=>{i.value=Ss.findIndex(L=>L.id===ae)});function z(){c.value=new URLSearchParams(location.hash.slice(1)).get("room")??""}function ce(){u==null||u.setVenue(i.value)}function v(){s.value=!s.value,u==null||u.setSound(s.value)}function E(){r.value=!r.value,u&&(u.scene.reducedEffects=r.value)}async function $(){await(u==null?void 0:u.online())}async function q(){const ae=c.value.match(/room=([a-f\d-]{36})/i);await(u==null?void 0:u.online((ae==null?void 0:ae[1])??c.value.trim()))}async function Q(){try{await navigator.clipboard.writeText(h.value.network.invite),o.value="COPIED"}catch{o.value="SELECT LINK BELOW"}}tr(t,ae=>{Iy(ae),u==null||u.setLook(ae)},{deep:!0});const le=qt(null),V=qt(null),ie=qt({x:0,y:0});function H(ae,L){if(!u)return;const Le=L==="move"?le:V,Ye=ae.currentTarget;if(ae.type==="pointerdown"){if(Le.value!==null)return;Le.value=ae.pointerId,Ye.setPointerCapture(ae.pointerId)}if(Le.value!==ae.pointerId)return;const D=Ye.getBoundingClientRect(),K=(ae.clientX-D.left-D.width/2)/32,_e=(ae.clientY-D.top-D.height/2)/32,ve=Math.max(1,Math.hypot(K,_e));L==="move"?(u.touchMove=K/ve,ie.value={x:K/ve,y:_e/ve}):u.touchFire(!0,K/ve,_e/ve)}function me(ae,L){if(!u)return;const Le=L==="move"?le:V;Le.value===ae.pointerId&&(Le.value=null,L==="move"?(u.touchMove=0,ie.value={x:0,y:0}):u.touchFire(!1))}return df(()=>{window.addEventListener("hashchange",z);try{u=new Py(e.value,t.value,ae=>h.value=ae)}catch(ae){l.value=ae instanceof Error?ae.message:"WebGL could not start."}}),pf(()=>{window.removeEventListener("hashchange",z),u==null||u.dispose()}),(ae,L)=>{var Le,Ye;return Ge(),We("div",{class:vi(["royale",{"in-lobby":_.value}])},[G("div",{ref_key:"viewport",ref:e,class:"viewport"},null,512),L[66]||(L[66]=G("div",{class:"vignette"},null,-1)),L[67]||(L[67]=G("div",{class:"scanlines","aria-hidden":"true"},null,-1)),G("header",null,[L[27]||(L[27]=G("a",{class:"logo",href:"./"},[it("R"),G("span",null,"®")],-1)),G("span",Dy,[it(He(T.value.name)+" ",1),L[25]||(L[25]=G("i",null,"/",-1)),L[26]||(L[26]=it(" EST. BAD IDEA",-1))]),G("div",Uy,[m.value?(Ge(),We("span",Ny,"P2P · "+He(h.value.network.ping)+" MS",1)):Lt("",!0),G("button",{onClick:v},"SOUND "+He(s.value?"ON":"OFF"),1),G("button",{onClick:E},"FX "+He(r.value?"LOW":"FULL"),1),x.value?(Ge(),We("button",{key:1,onClick:L[0]||(L[0]=D=>{var K;return(K=Mt(u))==null?void 0:K.leave()})},"LEAVE P2P")):Lt("",!0),G("button",{onClick:L[1]||(L[1]=D=>a.value=!a.value)},"DEATH NOTES "+He(h.value.known.length),1)])]),l.value?(Ge(),We("div",LS,[G("section",IS,[L[64]||(L[64]=G("h2",null,[it("THE WORLD"),G("br"),it("DIDN’T LOAD.")],-1)),G("p",null,He(l.value),1),L[65]||(L[65]=G("p",null,"A WebGL-capable browser is required.",-1))])])):(Ge(),We(mt,{key:0},[_.value?(Ge(),We("section",Oy,[L[41]||(L[41]=G("p",{class:"eyebrow"},[G("span"),it(" SOME ASSEMBLY REQUIRED.")],-1)),L[42]||(L[42]=G("h1",null,[it("ROYALE"),G("span",null,".")],-1)),L[43]||(L[43]=G("p",{class:"tagline"},[it("LAST ONE STANDING."),G("br"),it("OR WHATEVER’S LEFT.")],-1)),L[44]||(L[44]=G("div",{class:"lobby-rule"},[G("b",null,"01 / CHECK YOURSELF IN"),G("span",null,"8 ENTER. MOSTLY.")],-1)),G("div",Fy,[G("label",null,[L[29]||(L[29]=it("GENDER",-1)),ks(G("select",{"onUpdate:modelValue":L[2]||(L[2]=D=>t.value.gender=D)},[...L[28]||(L[28]=[G("option",{value:0},"WOMAN",-1),G("option",{value:1},"MAN",-1),G("option",{value:2},"NONBINARY",-1)])],512),[[Nr,t.value.gender,void 0,{number:!0}]])]),G("label",null,[L[30]||(L[30]=it("HAIR",-1)),ks(G("select",{"onUpdate:modelValue":L[3]||(L[3]=D=>t.value.hair=D)},[(Ge(),We(mt,null,Wn(["CROPPED","CURLS","MOHAWK","LONG","SHAVED"],(D,K)=>G("option",{key:D,value:K},He(D),9,By)),64))],512),[[Nr,t.value.hair,void 0,{number:!0}]])]),G("label",null,[L[32]||(L[32]=it("CLOTHING",-1)),ks(G("select",{"onUpdate:modelValue":L[4]||(L[4]=D=>t.value.clothes=D)},[...L[31]||(L[31]=[G("option",{value:0},"JACKET",-1),G("option",{value:1},"TANK TOP",-1),G("option",{value:2},"COVERALLS",-1)])],512),[[Nr,t.value.clothes,void 0,{number:!0}]])]),G("label",null,[L[33]||(L[33]=it("VENUE",-1)),ks(G("select",{"onUpdate:modelValue":L[5]||(L[5]=D=>i.value=D),disabled:m.value&&h.value.localId!==0,onChange:ce},[(Ge(!0),We(mt,null,Wn(Mt(Ss),(D,K)=>(Ge(),We("option",{key:D.id,value:K},He(D.name),9,zy))),128))],40,ky),[[Nr,i.value,void 0,{number:!0}]])])]),G("div",Hy,[L[34]||(L[34]=G("span",null,"SKIN",-1)),(Ge(!0),We(mt,null,Wn(Mt(Er),(D,K)=>(Ge(),We("button",{key:D,class:vi({chosen:t.value.skin===K}),style:_i({background:D}),onClick:_e=>t.value.skin=K,"aria-label":`Skin tone ${K+1}`},null,14,Vy))),128)),L[35]||(L[35]=G("span",{class:"hair-label"},"HAIR",-1)),(Ge(!0),We(mt,null,Wn(Mt(Vo),(D,K)=>(Ge(),We("button",{key:D,style:_i({background:D}),class:vi({chosen:t.value.hairColor===K}),onClick:_e=>t.value.hairColor=K,"aria-label":`Hair color ${K+1}`},null,14,Gy))),128))]),G("div",Wy,[L[36]||(L[36]=G("span",null,"THREADS",-1)),(Ge(!0),We(mt,null,Wn(Mt(Rs),(D,K)=>(Ge(),We("button",{key:D,style:_i({background:D}),class:vi({chosen:t.value.color===K}),onClick:_e=>t.value.color=K,"aria-label":`Clothing color ${K+1}`},null,14,Xy))),128)),L[37]||(L[37]=G("small",null,"ALL LOOKS. NO STAT BOOSTS.",-1))]),x.value?Lt("",!0):(Ge(),We("div",qy,[G("button",{class:"secondary",onClick:$},[...L[38]||(L[38]=[it("HOST P2P ",-1),G("span",null,"↗",-1)])]),G("div",Yy,[ks(G("input",{"onUpdate:modelValue":L[6]||(L[6]=D=>c.value=D),"aria-label":"Invite link or room ID",placeholder:"INVITE LINK / ROOM ID"},null,512),[[Xm,c.value]]),G("button",{onClick:q,disabled:!c.value.trim()},"JOIN",8,jy)])])),x.value&&!m.value?(Ge(),We("div",$y,[G("b",null,He(h.value.network.status.toUpperCase()),1),G("p",null,He(h.value.network.message),1),h.value.network.invite?(Ge(),We(mt,{key:0},[G("button",{onClick:Q},He(o.value)+" ↗",1),G("input",{value:h.value.network.invite,readonly:"","aria-label":"P2P invite link"},null,8,Ky)],64)):Lt("",!0),G("button",{class:"cancel-host",onClick:L[7]||(L[7]=D=>{var K;return(K=Mt(u))==null?void 0:K.leave()})},"CANCEL / PRACTICE")])):Lt("",!0),G("div",Zy,[L[39]||(L[39]=G("span",{class:"tiny-dot"},null,-1)),G("b",null,He(m.value?"2 HUMANS / 6 BOTS":x.value?"WAITING FOR A HUMAN":"PRACTICE / 7 BOTS"),1),m.value?(Ge(),We("span",Jy,He(f.value.actors.filter(D=>D.human&&D.ready).length)+" / 2 READY",1)):(Ge(),We("span",Qy,"NO CREDIT CARD REQUIRED"))]),G("button",{class:"primary",disabled:x.value&&!m.value,onClick:L[8]||(L[8]=D=>{var K;return(K=Mt(u))==null?void 0:K.ready()})},[it(He(f.value.phase==="countdown"?`BAD DECISIONS IN ${Math.max(1,3-Math.floor(f.value.phaseFrame/60))}…`:R.value?"READY. UNFORTUNATELY.":m.value?"READY TO FALL APART":"PRACTICE BAD DECISIONS")+" ",1),L[40]||(L[40]=G("span",null,"↗",-1))],8,eS),G("p",tS,He(m.value?"BOTH HUMANS MUST READY UP. COSMETIC CHANGES RESET READINESS.":"P2P: TWO HUMANS + SIX BOTS. PRACTICE WORKS OFFLINE."),1)])):Lt("",!0),_.value?(Ge(),We("div",nS,[...L[45]||(L[45]=[G("span",null,[it("YOUR FUTURE"),G("br"),it("FORMER SELF.")],-1),G("i",null,null,-1),G("small",null,[it("100% ORIGINAL PARTS"),G("br"),it("FOR NOW.")],-1)])])):Lt("",!0),f.value.phase==="match"?(Ge(),We(mt,{key:2},[G("div",iS,[G("div",null,[L[47]||(L[47]=G("small",null,"STILL TECHNICALLY ALIVE",-1)),G("b",null,[it(He(d.value.length),1),L[46]||(L[46]=G("span",null,"/ 8",-1))])]),G("div",sS,[it(He(I.value),1),G("small",null,He(f.value.phaseFrame<180?"OPENING GRACE":"SAFE AREA CONTRACTING"),1)])]),G("div",rS,[G("div",oS,[G("b",null,[it(He(Math.ceil(p.value.hp)),1),L[48]||(L[48]=G("span",null,"%",-1))]),G("span",null,He(p.value.bleedOutAt!==null?"BLEEDING OUT / "+Math.max(0,Math.ceil((p.value.bleedOutAt-f.value.frame)/60))+"s":p.value.parts.head?"VITALITY":"HEADLESS / MOSTLY GUESSWORK"),1)]),G("div",aS,[G("i",{style:_i({width:p.value.hp+"%"})},null,4)]),G("div",lS,[G("span",null,"PARTS "+He(b.value)+" / "+He(Mt(tn).length),1),b.value<Mt(tn).length?(Ge(),We("span",cS,"SOME ASSEMBLY LOST")):(Ge(),We("span",uS,"FACTORY CONDITION"))]),G("div",hS,[G("b",null,He(A.value.toUpperCase()),1),A.value==="smg"||A.value==="shotgun"?(Ge(),We("span",fS,He(p.value.ammo)+" / "+He(p.value.reserve),1)):(Ge(),We("span",dS,He(A.value==="body"?"LIMITED DIGNITY":"UNLIMITED REGRETS"),1))]),G("small",null,He(p.value.reloading?"RELOADING…":"E PICKUP · Q / SHIFT SWAP · R RELOAD"),1)]),G("div",pS,[L[49]||(L[49]=G("small",null,"INVENTORY OF YOU",-1)),(Ge(),We(mt,null,Wn([["head"],["armL","armR"],["handL","handR"],["thighL","thighR"],["footL","footR"]],D=>G("div",{key:D.join()},[G("span",null,He(D[0].startsWith("thigh")?"LEGS":D[0].replace(/[LR]$/,"").toUpperCase()),1),(Ge(!0),We(mt,null,Wn(D,K=>(Ge(),We("i",{key:K,class:vi({lost:p.value.parts[K]<=0})},null,2))),128))])),64))]),p.value.hp<=0?(Ge(),We("div",mS,[L[50]||(L[50]=G("p",{class:"eyebrow"},"YOU HAVE BEEN DISCONTINUED.",-1)),G("h2",null,He(((Le=h.value.advice)==null?void 0:Le.title)??"The warranty did not cover that."),1),G("p",null,He(((Ye=h.value.advice)==null?void 0:Ye.hint)??"A familiar lesson. Still not a pleasant one."),1),G("small",null,"SPECTATING — "+He(d.value.length)+" REMAIN",1),G("div",gS,[(Ge(!0),We(mt,null,Wn(d.value,D=>(Ge(),We("button",{key:D.id,onClick:K=>{var _e;return(_e=Mt(u))==null?void 0:_e.spectator(D.id)}},He(D.name),9,_S))),128))])])):Lt("",!0),G("div",vS,[G("div",{class:"stick",onPointerdown:L[9]||(L[9]=D=>H(D,"move")),onPointermove:L[10]||(L[10]=D=>H(D,"move")),onPointerup:L[11]||(L[11]=D=>me(D,"move")),onPointercancel:L[12]||(L[12]=D=>me(D,"move"))},[G("i",{style:_i({transform:`translate(${ie.value.x*25}px,${ie.value.y*25}px)`})},null,4),L[51]||(L[51]=G("small",null,"MOVE",-1))],32),G("div",xS,[G("button",{onClick:L[13]||(L[13]=D=>{var K;return(K=Mt(u))==null?void 0:K.command("jump")})},"JUMP"),G("button",{onClick:L[14]||(L[14]=D=>{var K;return(K=Mt(u))==null?void 0:K.command("pickup")})},"PICK UP"),G("button",{onClick:L[15]||(L[15]=D=>{var K;return(K=Mt(u))==null?void 0:K.command("cycle")})},"SWAP"),G("button",{onClick:L[16]||(L[16]=D=>{var K;return(K=Mt(u))==null?void 0:K.command("reload")})},"RELOAD")]),G("div",{class:"stick fire-stick",onPointerdown:L[17]||(L[17]=D=>H(D,"aim")),onPointermove:L[18]||(L[18]=D=>H(D,"aim")),onPointerup:L[19]||(L[19]=D=>me(D,"aim")),onPointercancel:L[20]||(L[20]=D=>me(D,"aim"))},[...L[52]||(L[52]=[G("i",null,null,-1),G("small",null,"AIM / FIRE",-1)])],32)])],64)):Lt("",!0),f.value.phase==="results"?(Ge(),We("section",MS,[L[56]||(L[56]=G("p",{class:"eyebrow"},"THE DAMAGE REPORT",-1)),G("h2",null,He(f.value.winner===null?"EVERYBODY LOST.":f.value.winner===h.value.localId?`STILL IN ONE…
NEVER MIND.`:`SOMEONE ELSE
KEPT IT TOGETHER.`),1),G("p",null,He(f.value.winner===null?"A draw. An impressive failure of survival.":`${f.value.actors[f.value.winner].name} is the last remaining problem.`),1),h.value.advice?(Ge(),We("div",yS,[G("b",null,He(h.value.advice.title),1),G("span",null,He(h.value.advice.hint),1)])):Lt("",!0),G("div",SS,[G("span",null,[L[53]||(L[53]=it("ELIMINATIONS ",-1)),G("b",null,He(p.value.kills),1)]),G("span",null,[L[54]||(L[54]=it("PARTS LEFT ",-1)),G("b",null,He(b.value),1)])]),G("button",{class:"primary",onClick:L[21]||(L[21]=D=>{var K;return(K=Mt(u))==null?void 0:K.rematch()})},[...L[55]||(L[55]=[it("ANOTHER TERRIBLE IDEA ",-1),G("span",null,"↗",-1)])]),G("small",null,He(m.value?"BOTH HUMANS MUST REQUEST A REMATCH.":"NEXT ROUND ROTATES TO A NEW VENUE."),1)])):Lt("",!0),f.value.phase!=="results"?(Ge(),We("footer",ES,[...L[57]||(L[57]=[G("span",null,"A / D · ← / → MOVE",-1),G("span",null,"SPACE JUMP",-1),G("span",null,"MOUSE / J ATTACK",-1),G("span",null,"E PICKUP",-1),G("span",null,"Q / SHIFT WEAPON",-1),G("span",null,"R RELOAD",-1)])])):Lt("",!0),h.value.paused?(Ge(),We("div",bS,[G("section",TS,[L[58]||(L[58]=G("p",{class:"eyebrow"},"PRACTICE / HOLDING IT TOGETHER",-1)),L[59]||(L[59]=G("h2",null,[it("TAKE A BREATHER."),G("br"),it("WHILE YOU HAVE LUNGS.")],-1)),G("button",{class:"primary",onClick:L[22]||(L[22]=D=>Mt(u)&&(Mt(u).paused=!1))},"BACK TO IT ↗")])])):Lt("",!0),F.value?(Ge(),We("div",AS,[G("section",wS,[L[60]||(L[60]=G("p",{class:"eyebrow"},"CONNECTION ENDED",-1)),L[61]||(L[61]=G("h2",null,[it("TECHNICAL"),G("br"),it("DIFFICULTIES.")],-1)),G("p",null,He(h.value.network.message),1),G("button",{class:"primary",onClick:L[23]||(L[23]=D=>{var K;return(K=Mt(u))==null?void 0:K.leave()})},"RETURN TO LOBBY ↗")])])):Lt("",!0),a.value?(Ge(),We("div",RS,[G("section",CS,[G("button",{class:"close",onClick:L[24]||(L[24]=D=>a.value=!1)},"CLOSE ×"),L[62]||(L[62]=G("p",{class:"eyebrow"},"LEARNING, APPARENTLY.",-1)),L[63]||(L[63]=G("h2",null,"DEATH NOTES.",-1)),h.value.known.length?Lt("",!0):(Ge(),We("p",PS,"Discover new ways to die. Receive unsolicited advice.")),(Ge(!0),We(mt,null,Wn(h.value.known,D=>(Ge(),We("article",{key:D},[G("b",null,He(Mt(To)[D].title),1),G("p",null,He(Mt(To)[D].hint),1)]))),128))])])):Lt("",!0)],64))],2)}}});$m(DS).use(Qm()).mount("#app");export{zf as S,xs as e,ig as v};
