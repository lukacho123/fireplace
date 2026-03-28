(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const fs=()=>{};var Bn={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ps=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Cr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,d=c?t[i+2]:0,p=s>>2,m=(s&3)<<4|a>>4;let u=(a&15)<<2|d>>6,g=d&63;c||(g=64,o||(u=64)),r.push(n[p],n[m],n[u],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ps(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||d==null||m==null)throw new ms;const u=s<<2|a>>4;if(r.push(u),d!==64){const g=a<<4&240|d>>2;if(r.push(g),m!==64){const P=d<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ms extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gs=function(t){const e=kr(t);return Cr.encodeByteArray(e,!0)},Tr=function(t){return gs(t).replace(/\./g,"")},Ar=function(t){try{return Cr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=()=>ws().__FIREBASE_DEFAULTS__,vs=()=>{if(typeof process>"u"||typeof Bn>"u")return;const t=Bn.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ys=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ar(t[1]);return e&&JSON.parse(e)},cn=()=>{try{return fs()||bs()||vs()||ys()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_s=t=>{var e,n;return(n=(e=cn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Sr=()=>{var t;return(t=cn())===null||t===void 0?void 0:t.config},Pr=t=>{var e;return(e=cn())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t){return t.endsWith(".cloudworkstations.dev")}async function Es(t){return(await fetch(t,{credentials:"include"})).ok}const Ve={};function ks(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ve))Ve[e]?t.emulator.push(e):t.prod.push(e);return t}function Cs(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Un=!1;function Ts(t,e){if(typeof window>"u"||typeof document>"u"||!ln(window.location.host)||Ve[t]===e||Ve[t]||Un)return;Ve[t]=e;function n(u){return`__firebase__banner__${u}`}const r="__firebase__banner",s=ks().prod.length>0;function o(){const u=document.getElementById(r);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function c(u,g){u.setAttribute("width","24"),u.setAttribute("id",g),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function d(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{Un=!0,o()},u}function p(u,g){u.setAttribute("id",g),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function m(){const u=Cs(r),g=n("text"),P=document.getElementById(g)||document.createElement("span"),Me=n("learnmore"),we=document.getElementById(Me)||document.createElement("a"),Be=n("preprendIcon"),oe=document.getElementById(Be)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const ae=u.element;a(ae),p(we,Me);const ot=d();c(oe,Be),ae.append(oe,P,we,ot),document.body.appendChild(ae)}s?(P.innerText="Preview backend disconnected.",oe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(oe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function As(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(C())}function Ss(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ps(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Os(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rs(){const t=C();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ls(){try{return typeof indexedDB=="object"}catch{return!1}}function Ds(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="FirebaseError";class se extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xs,Object.setPrototypeOf(this,se.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ke.prototype.create)}}class Ke{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ns(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new se(i,a,r)}}function Ns(t,e){return t.replace(Ms,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ms=/\{\$([^}]+)}/g;function Bs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Te(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if($n(s)&&$n(o)){if(!Te(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $n(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function He(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Fe(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Us(t,e){const n=new $s(t,e);return n.subscribe.bind(n)}class $s{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Hs(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=$t),i.error===void 0&&(i.error=$t),i.complete===void 0&&(i.complete=$t);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hs(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $t(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t){return t&&t._delegate?t._delegate:t}class Ae{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Is;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(js(e))try{this.getOrInitializeService({instanceIdentifier:le})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=le){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=le){return this.instances.has(e)}getOptions(e=le){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vs(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=le){return this.component?this.component.multipleInstances?e:le:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vs(t){return t===le?void 0:t}function js(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Fs(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var v;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(v||(v={}));const zs={debug:v.DEBUG,verbose:v.VERBOSE,info:v.INFO,warn:v.WARN,error:v.ERROR,silent:v.SILENT},qs=v.INFO,Ks={[v.DEBUG]:"log",[v.VERBOSE]:"log",[v.INFO]:"info",[v.WARN]:"warn",[v.ERROR]:"error"},Gs=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ks[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Or{constructor(e){this.name=e,this._logLevel=qs,this._logHandler=Gs,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in v))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zs[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,v.DEBUG,...e),this._logHandler(this,v.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,v.VERBOSE,...e),this._logHandler(this,v.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,v.INFO,...e),this._logHandler(this,v.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,v.WARN,...e),this._logHandler(this,v.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,v.ERROR,...e),this._logHandler(this,v.ERROR,...e)}}const Ys=(t,e)=>e.some(n=>t instanceof n);let Hn,Fn;function Js(){return Hn||(Hn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xs(){return Fn||(Fn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rr=new WeakMap,Yt=new WeakMap,Lr=new WeakMap,Ht=new WeakMap,dn=new WeakMap;function Zs(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(re(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rr.set(n,t)}).catch(()=>{}),dn.set(e,t),e}function Qs(t){if(Yt.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Yt.set(t,e)}let Jt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lr.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return re(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eo(t){Jt=t(Jt)}function to(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ft(this),e,...n);return Lr.set(r,e.sort?e.sort():[e]),re(r)}:Xs().includes(t)?function(...e){return t.apply(Ft(this),e),re(Rr.get(this))}:function(...e){return re(t.apply(Ft(this),e))}}function no(t){return typeof t=="function"?to(t):(t instanceof IDBTransaction&&Qs(t),Ys(t,Js())?new Proxy(t,Jt):t)}function re(t){if(t instanceof IDBRequest)return Zs(t);if(Ht.has(t))return Ht.get(t);const e=no(t);return e!==t&&(Ht.set(t,e),dn.set(e,t)),e}const Ft=t=>dn.get(t);function ro(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=re(o);return r&&o.addEventListener("upgradeneeded",c=>{r(re(o.result),c.oldVersion,c.newVersion,re(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const io=["get","getKey","getAll","getAllKeys","count"],so=["put","add","delete","clear"],Vt=new Map;function Vn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vt.get(e))return Vt.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=so.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||io.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&c.done]))[0]};return Vt.set(e,s),s}eo(t=>({...t,get:(e,n,r)=>Vn(e,n)||t.get(e,n,r),has:(e,n)=>!!Vn(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ao(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ao(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xt="@firebase/app",jn="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=new Or("@firebase/app"),co="@firebase/app-compat",lo="@firebase/analytics-compat",uo="@firebase/analytics",ho="@firebase/app-check-compat",fo="@firebase/app-check",po="@firebase/auth",mo="@firebase/auth-compat",go="@firebase/database",wo="@firebase/data-connect",bo="@firebase/database-compat",vo="@firebase/functions",yo="@firebase/functions-compat",_o="@firebase/installations",Io="@firebase/installations-compat",Eo="@firebase/messaging",ko="@firebase/messaging-compat",Co="@firebase/performance",To="@firebase/performance-compat",Ao="@firebase/remote-config",So="@firebase/remote-config-compat",Po="@firebase/storage",Oo="@firebase/storage-compat",Ro="@firebase/firestore",Lo="@firebase/ai",Do="@firebase/firestore-compat",xo="firebase",No="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="[DEFAULT]",Mo={[Xt]:"fire-core",[co]:"fire-core-compat",[uo]:"fire-analytics",[lo]:"fire-analytics-compat",[fo]:"fire-app-check",[ho]:"fire-app-check-compat",[po]:"fire-auth",[mo]:"fire-auth-compat",[go]:"fire-rtdb",[wo]:"fire-data-connect",[bo]:"fire-rtdb-compat",[vo]:"fire-fn",[yo]:"fire-fn-compat",[_o]:"fire-iid",[Io]:"fire-iid-compat",[Eo]:"fire-fcm",[ko]:"fire-fcm-compat",[Co]:"fire-perf",[To]:"fire-perf-compat",[Ao]:"fire-rc",[So]:"fire-rc-compat",[Po]:"fire-gcs",[Oo]:"fire-gcs-compat",[Ro]:"fire-fst",[Do]:"fire-fst-compat",[Lo]:"fire-vertex","fire-js":"fire-js",[xo]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=new Map,Bo=new Map,Qt=new Map;function Wn(t,e){try{t.container.addComponent(e)}catch(n){K.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function We(t){const e=t.name;if(Qt.has(e))return K.debug(`There were multiple attempts to register component ${e}.`),!1;Qt.set(e,t);for(const n of ft.values())Wn(n,t);for(const n of Bo.values())Wn(n,t);return!0}function Dr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function x(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ie=new Ke("app","Firebase",Uo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ae("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ie.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye=No;function xr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zt,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw ie.create("bad-app-name",{appName:String(i)});if(n||(n=Sr()),!n)throw ie.create("no-options");const s=ft.get(i);if(s){if(Te(n,s.options)&&Te(r,s.config))return s;throw ie.create("duplicate-app",{appName:i})}const o=new Ws(i);for(const c of Qt.values())o.addComponent(c);const a=new $o(n,r,o);return ft.set(i,a),a}function Ho(t=Zt){const e=ft.get(t);if(!e&&t===Zt&&Sr())return xr();if(!e)throw ie.create("no-app",{appName:t});return e}function ve(t,e,n){var r;let i=(r=Mo[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),K.warn(a.join(" "));return}We(new Ae(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo="firebase-heartbeat-database",Vo=1,ze="firebase-heartbeat-store";let jt=null;function Nr(){return jt||(jt=ro(Fo,Vo,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ze)}catch(n){console.warn(n)}}}}).catch(t=>{throw ie.create("idb-open",{originalErrorMessage:t.message})})),jt}async function jo(t){try{const n=(await Nr()).transaction(ze),r=await n.objectStore(ze).get(Mr(t));return await n.done,r}catch(e){if(e instanceof se)K.warn(e.message);else{const n=ie.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});K.warn(n.message)}}}async function zn(t,e){try{const r=(await Nr()).transaction(ze,"readwrite");await r.objectStore(ze).put(e,Mr(t)),await r.done}catch(n){if(n instanceof se)K.warn(n.message);else{const r=ie.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});K.warn(r.message)}}}function Mr(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=1024,zo=30;class qo{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Go(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=qn();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>zo){const o=Yo(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){K.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qn(),{heartbeatsToSend:r,unsentEntries:i}=Ko(this._heartbeatsCache.heartbeats),s=Tr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return K.warn(n),""}}}function qn(){return new Date().toISOString().substring(0,10)}function Ko(t,e=Wo){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Kn(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Kn(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Go{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ls()?Ds().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jo(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Kn(t){return Tr(JSON.stringify({version:2,heartbeats:t})).length}function Yo(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t){We(new Ae("platform-logger",e=>new oo(e),"PRIVATE")),We(new Ae("heartbeat",e=>new qo(e),"PRIVATE")),ve(Xt,jn,t),ve(Xt,jn,"esm2017"),ve("fire-js","")}Jo("");var Xo="firebase",Zo="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ve(Xo,Zo,"app");function un(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Br(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qo=Br,Ur=new Ke("auth","Firebase",Br());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new Or("@firebase/auth");function ea(t,...e){pt.logLevel<=v.WARN&&pt.warn(`Auth (${Ye}): ${t}`,...e)}function lt(t,...e){pt.logLevel<=v.ERROR&&pt.error(`Auth (${Ye}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t,...e){throw hn(t,...e)}function $(t,...e){return hn(t,...e)}function $r(t,e,n){const r=Object.assign(Object.assign({},Qo()),{[e]:n});return new Ke("auth","Firebase",r).create(e,{appName:t.name})}function z(t){return $r(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hn(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ur.create(t,...e)}function h(t,e,...n){if(!t)throw hn(e,...n)}function j(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lt(e),new Error(e)}function G(t,e){t||j(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ta(){return Gn()==="http:"||Gn()==="https:"}function Gn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ta()||Ps()||"connection"in navigator)?navigator.onLine:!0}function ra(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){this.shortDelay=e,this.longDelay=n,G(n>e,"Short delay should be less than long delay!"),this.isMobile=As()||Os()}get(){return na()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,e){G(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;j("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;j("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;j("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],oa=new Je(3e4,6e4);function Y(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function V(t,e,n,r,i={}){return Fr(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ge(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:c},s);return Ss()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&ln(t.emulatorConfig.host)&&(d.credentials="include"),Hr.fetch()(await Vr(t,t.config.apiHost,n,a),d)})}async function Fr(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ia),e);try{const i=new ca(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw at(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,d]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw at(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw at(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw at(t,"user-disabled",o);const p=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw $r(t,p,d);M(t,p)}}catch(i){if(i instanceof se)throw i;M(t,"network-request-failed",{message:String(i)})}}async function Xe(t,e,n,r,i={}){const s=await V(t,e,n,r,i);return"mfaPendingCredential"in s&&M(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Vr(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?fn(t.config,i):`${t.config.apiScheme}://${i}`;return sa.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function aa(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ca{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($(this.auth,"network-request-failed")),oa.get())})}}function at(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$(t,e,r);return i.customData._tokenResponse=n,i}function Yn(t){return t!==void 0&&t.enterprise!==void 0}class la{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return aa(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function da(t,e){return V(t,"GET","/v2/recaptchaConfig",Y(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(t,e){return V(t,"POST","/v1/accounts:delete",e)}async function mt(t,e){return V(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ha(t,e=!1){const n=B(t),r=await n.getIdToken(e),i=pn(r);h(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:je(Wt(i.auth_time)),issuedAtTime:je(Wt(i.iat)),expirationTime:je(Wt(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Wt(t){return Number(t)*1e3}function pn(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return lt("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ar(n);return i?JSON.parse(i):(lt("Failed to decode base64 JWT payload"),null)}catch(i){return lt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Jn(t){const e=pn(t);return h(e,"internal-error"),h(typeof e.exp<"u","internal-error"),h(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof se&&fa(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fa({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=je(this.lastLoginAt),this.creationTime=je(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Se(t,mt(n,{idToken:r}));h(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?jr(s.providerUserInfo):[],a=ga(t.providerData,o),c=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),p=c?d:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new tn(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function ma(t){const e=B(t);await gt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ga(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function jr(t){return t.map(e=>{var{providerId:n}=e,r=un(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wa(t,e){const n=await Fr(t,{},async()=>{const r=Ge({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Vr(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Hr.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ba(t,e){return V(t,"POST","/v2/accounts:revokeToken",Y(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){h(e.idToken,"internal-error"),h(typeof e.idToken<"u","internal-error"),h(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){h(e.length!==0,"internal-error");const n=Jn(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(h(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await wa(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ye;return r&&(h(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(h(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(h(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ye,this.toJSON())}_performRefresh(){return j("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t,e){h(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class N{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=un(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pa(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new tn(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Se(this,this.stsTokenManager.getToken(this.auth,e));return h(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ha(this,e)}reload(){return ma(this)}_assign(e){this!==e&&(h(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new N(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){h(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(x(this.auth.app))return Promise.reject(z(this.auth));const e=await this.getIdToken();return await Se(this,ua(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,d,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,u=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,Me=(a=n.tenantId)!==null&&a!==void 0?a:void 0,we=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,Be=(d=n.createdAt)!==null&&d!==void 0?d:void 0,oe=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:ae,emailVerified:ot,isAnonymous:Nn,providerData:Bt,stsTokenManager:Mn}=n;h(ae&&Mn,e,"internal-error");const us=ye.fromJSON(this.name,Mn);h(typeof ae=="string",e,"internal-error"),J(m,e.name),J(u,e.name),h(typeof ot=="boolean",e,"internal-error"),h(typeof Nn=="boolean",e,"internal-error"),J(g,e.name),J(P,e.name),J(Me,e.name),J(we,e.name),J(Be,e.name),J(oe,e.name);const Ut=new N({uid:ae,auth:e,email:u,emailVerified:ot,displayName:m,isAnonymous:Nn,photoURL:P,phoneNumber:g,tenantId:Me,stsTokenManager:us,createdAt:Be,lastLoginAt:oe});return Bt&&Array.isArray(Bt)&&(Ut.providerData=Bt.map(hs=>Object.assign({},hs))),we&&(Ut._redirectEventId=we),Ut}static async _fromIdTokenResponse(e,n,r=!1){const i=new ye;i.updateFromServerResponse(n);const s=new N({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await gt(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];h(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?jr(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ye;a.updateFromIdToken(r);const c=new N({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new tn(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new Map;function W(t){G(t instanceof Function,"Expected a class definition");let e=Xn.get(t);return e?(G(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xn.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wr.type="NONE";const Zn=Wr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e,n){return`firebase:${t}:${e}:${n}`}class _e{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=dt(this.userKey,i.apiKey,s),this.fullPersistenceKey=dt("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await mt(this.auth,{idToken:e}).catch(()=>{});return n?N._fromGetAccountInfoResponse(this.auth,n,e):null}return N._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _e(W(Zn),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||W(Zn);const o=dt(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const p=await d._get(o);if(p){let m;if(typeof p=="string"){const u=await mt(e,{idToken:p}).catch(()=>{});if(!u)break;m=await N._fromGetAccountInfoResponse(e,u,p)}else m=N._fromJSON(e,p);d!==s&&(a=m),s=d;break}}catch{}const c=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new _e(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new _e(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jr(e))return"Blackberry";if(Xr(e))return"Webos";if(qr(e))return"Safari";if((e.includes("chrome/")||Kr(e))&&!e.includes("edge/"))return"Chrome";if(Yr(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zr(t=C()){return/firefox\//i.test(t)}function qr(t=C()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kr(t=C()){return/crios\//i.test(t)}function Gr(t=C()){return/iemobile/i.test(t)}function Yr(t=C()){return/android/i.test(t)}function Jr(t=C()){return/blackberry/i.test(t)}function Xr(t=C()){return/webos/i.test(t)}function mn(t=C()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function va(t=C()){var e;return mn(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ya(){return Rs()&&document.documentMode===10}function Zr(t=C()){return mn(t)||Yr(t)||Xr(t)||Jr(t)||/windows phone/i.test(t)||Gr(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t,e=[]){let n;switch(t){case"Browser":n=Qn(C());break;case"Worker":n=`${Qn(C())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ye}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(t,e={}){return V(t,"GET","/v2/passwordPolicy",Y(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=6;class ka{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ea,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new er(this),this.idTokenSubscription=new er(this),this.beforeStateQueue=new _a(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ur,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=W(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await _e.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await mt(this,{idToken:e}),r=await N._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(x(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return h(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ra()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(x(this.app))return Promise.reject(z(this));const n=e?B(e):null;return n&&h(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&h(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return x(this.app)?Promise.reject(z(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return x(this.app)?Promise.reject(z(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(W(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ia(this),n=new ka(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ke("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ba(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&W(e)||this._popupRedirectResolver;h(n,this,"argument-error"),this.redirectPersistenceManager=await _e.create(this,[W(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(h(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return h(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(x(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ea(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function pe(t){return B(t)}class er{constructor(e){this.auth=e,this.observer=null,this.addObserver=Us(n=>this.observer=n)}get next(){return h(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ta(t){Pt=t}function ei(t){return Pt.loadJS(t)}function Aa(){return Pt.recaptchaEnterpriseScript}function Sa(){return Pt.gapiScript}function Pa(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Oa{constructor(){this.enterprise=new Ra}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Ra{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const La="recaptcha-enterprise",ti="NO_RECAPTCHA";class Da{constructor(e){this.type=La,this.auth=pe(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{da(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new la(c);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Yn(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(ti)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Oa().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Yn(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Aa();c.length!==0&&(c+=a),ei(c).then(()=>{i(a,s,o)}).catch(d=>{o(d)})}}).catch(a=>{o(a)})})}}async function tr(t,e,n,r=!1,i=!1){const s=new Da(t);let o;if(i)o=ti;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,d=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function nn(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await tr(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await tr(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t,e){const n=Dr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Te(s,e??{}))return i;M(i,"already-initialized")}return n.initialize({options:e})}function Na(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(W);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ma(t,e,n){const r=pe(t);h(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ni(e),{host:o,port:a}=Ba(e),c=a===null?"":`:${a}`,d={url:`${s}//${o}${c}/`},p=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){h(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),h(Te(d,r.config.emulator)&&Te(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,ln(o)?(Es(`${s}//${o}${c}`),Ts("Auth",!0)):Ua()}function ni(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ba(t){const e=ni(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:nr(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:nr(o)}}}function nr(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ua(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return j("not implemented")}_getIdTokenResponse(e){return j("not implemented")}_linkToIdToken(e,n){return j("not implemented")}_getReauthenticationResolver(e){return j("not implemented")}}async function $a(t,e){return V(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(t,e){return Xe(t,"POST","/v1/accounts:signInWithPassword",Y(t,e))}async function Fa(t,e){return V(t,"POST","/v1/accounts:sendOobCode",Y(t,e))}async function Va(t,e){return Fa(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ja(t,e){return Xe(t,"POST","/v1/accounts:signInWithEmailLink",Y(t,e))}async function Wa(t,e){return Xe(t,"POST","/v1/accounts:signInWithEmailLink",Y(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends gn{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new qe(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new qe(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nn(e,n,"signInWithPassword",Ha);case"emailLink":return ja(e,{email:this._email,oobCode:this._password});default:M(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nn(e,r,"signUpPassword",$a);case"emailLink":return Wa(e,{idToken:n,email:this._email,oobCode:this._password});default:M(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ie(t,e){return Xe(t,"POST","/v1/accounts:signInWithIdp",Y(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="http://localhost";class ue extends gn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ue(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):M("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=un(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ue(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ie(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ie(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ie(e,n)}buildRequest(){const e={requestUri:za,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ge(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ka(t){const e=He(Fe(t)).link,n=e?He(Fe(e)).deep_link_id:null,r=He(Fe(t)).deep_link_id;return(r?He(Fe(r)).link:null)||r||n||e||t}class wn{constructor(e){var n,r,i,s,o,a;const c=He(Fe(e)),d=(n=c.apiKey)!==null&&n!==void 0?n:null,p=(r=c.oobCode)!==null&&r!==void 0?r:null,m=qa((i=c.mode)!==null&&i!==void 0?i:null);h(d&&p&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=p,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ka(e);try{return new wn(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(){this.providerId=Re.PROVIDER_ID}static credential(e,n){return qe._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=wn.parseLink(n);return h(r,"argument-error"),qe._fromEmailAndCode(e,r.code,r.tenantId)}}Re.PROVIDER_ID="password";Re.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Re.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends ri{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X extends Ze{constructor(){super("facebook.com")}static credential(e){return ue._fromParams({providerId:X.PROVIDER_ID,signInMethod:X.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return X.credentialFromTaggedObject(e)}static credentialFromError(e){return X.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return X.credential(e.oauthAccessToken)}catch{return null}}}X.FACEBOOK_SIGN_IN_METHOD="facebook.com";X.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z extends Ze{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ue._fromParams({providerId:Z.PROVIDER_ID,signInMethod:Z.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Z.credentialFromTaggedObject(e)}static credentialFromError(e){return Z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Z.credential(n,r)}catch{return null}}}Z.GOOGLE_SIGN_IN_METHOD="google.com";Z.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q extends Ze{constructor(){super("github.com")}static credential(e){return ue._fromParams({providerId:Q.PROVIDER_ID,signInMethod:Q.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Q.credentialFromTaggedObject(e)}static credentialFromError(e){return Q.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Q.credential(e.oauthAccessToken)}catch{return null}}}Q.GITHUB_SIGN_IN_METHOD="github.com";Q.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee extends Ze{constructor(){super("twitter.com")}static credential(e,n){return ue._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ee.credentialFromTaggedObject(e)}static credentialFromError(e){return ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ee.credential(n,r)}catch{return null}}}ee.TWITTER_SIGN_IN_METHOD="twitter.com";ee.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ga(t,e){return Xe(t,"POST","/v1/accounts:signUp",Y(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await N._fromIdTokenResponse(e,r,i),o=rr(r);return new he({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=rr(r);return new he({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function rr(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends se{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wt(e,n,r,i)}}function ii(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wt._fromErrorAndOperation(t,s,e,r):s})}async function Ya(t,e,n=!1){const r=await Se(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return he._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ja(t,e,n=!1){const{auth:r}=t;if(x(r.app))return Promise.reject(z(r));const i="reauthenticate";try{const s=await Se(t,ii(r,i,e,t),n);h(s.idToken,r,"internal-error");const o=pn(s.idToken);h(o,r,"internal-error");const{sub:a}=o;return h(t.uid===a,r,"user-mismatch"),he._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&M(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(t,e,n=!1){if(x(t.app))return Promise.reject(z(t));const r="signIn",i=await ii(t,r,e),s=await he._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Xa(t,e){return si(pe(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(t,e,n){var r;h(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),h(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),h(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(h(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(h(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t){const e=pe(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Qa(t,e,n){if(x(t.app))return Promise.reject(z(t));const r=pe(t),o=await nn(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ga).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&oi(t),c}),a=await he._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function ec(t,e,n){return x(t.app)?Promise.reject(z(t)):Xa(B(t),Re.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&oi(t),r})}async function tc(t,e){const n=B(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Za(n.auth,i,e);const{email:s}=await Va(n.auth,i);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(t,e){return V(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=B(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Se(r,nc(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ic(t,e,n,r){return B(t).onIdTokenChanged(e,n,r)}function sc(t,e,n){return B(t).beforeAuthStateChanged(e,n)}function oc(t,e,n,r){return B(t).onAuthStateChanged(e,n,r)}function ac(t){return B(t).signOut()}const bt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bt,"1"),this.storage.removeItem(bt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=1e3,lc=10;class ci extends ai{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Zr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ya()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lc):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},cc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ci.type="LOCAL";const dc=ci;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends ai{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}li.type="SESSION";const di=li;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ot(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async d=>d(n.origin,s)),c=await uc(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ot.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const d=bn("",20);i.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const u=m;if(u.data.eventId===d)switch(u.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(u.data.response);break;default:clearTimeout(p),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(){return window}function fc(t){H().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(){return typeof H().WorkerGlobalScope<"u"&&typeof H().importScripts=="function"}async function pc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mc(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gc(){return ui()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="firebaseLocalStorageDb",wc=1,vt="firebaseLocalStorage",fi="fbase_key";class Qe{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rt(t,e){return t.transaction([vt],e?"readwrite":"readonly").objectStore(vt)}function bc(){const t=indexedDB.deleteDatabase(hi);return new Qe(t).toPromise()}function rn(){const t=indexedDB.open(hi,wc);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vt,{keyPath:fi})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vt)?e(r):(r.close(),await bc(),e(await rn()))})})}async function ir(t,e,n){const r=Rt(t,!0).put({[fi]:e,value:n});return new Qe(r).toPromise()}async function vc(t,e){const n=Rt(t,!1).get(e),r=await new Qe(n).toPromise();return r===void 0?null:r.value}function sr(t,e){const n=Rt(t,!0).delete(e);return new Qe(n).toPromise()}const yc=800,_c=3;class pi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_c)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ui()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ot._getInstance(gc()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pc(),!this.activeServiceWorker)return;this.sender=new hc(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rn();return await ir(e,bt,"1"),await sr(e,bt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ir(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vc(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Rt(i,!1).getAll();return new Qe(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pi.type="LOCAL";const Ic=pi;new Je(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(t,e){return e?W(e):(h(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends gn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ie(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ie(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ie(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kc(t){return si(t.auth,new vn(t),t.bypassAuthState)}function Cc(t){const{auth:e,user:n}=t;return h(n,e,"internal-error"),Ja(n,new vn(t),t.bypassAuthState)}async function Tc(t){const{auth:e,user:n}=t;return h(n,e,"internal-error"),Ya(n,new vn(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kc;case"linkViaPopup":case"linkViaRedirect":return Tc;case"reauthViaPopup":case"reauthViaRedirect":return Cc;default:M(this.auth,"internal-error")}}resolve(e){G(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){G(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=new Je(2e3,1e4);class be extends mi{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,be.currentPopupAction&&be.currentPopupAction.cancel(),be.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return h(e,this.auth,"internal-error"),e}async onExecution(){G(this.filter.length===1,"Popup operations only handle one event");const e=bn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,be.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ac.get())};e()}}be.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="pendingRedirect",ut=new Map;class Pc extends mi{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ut.get(this.auth._key());if(!e){try{const r=await Oc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ut.set(this.auth._key(),e)}return this.bypassAuthState||ut.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Oc(t,e){const n=Dc(e),r=Lc(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Rc(t,e){ut.set(t._key(),e)}function Lc(t){return W(t._redirectPersistence)}function Dc(t){return dt(Sc,t.config.apiKey,t.name)}async function xc(t,e,n=!1){if(x(t.app))return Promise.reject(z(t));const r=pe(t),i=Ec(r,e),o=await new Pc(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=10*60*1e3;class Mc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bc(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gi(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Nc&&this.cachedEventUids.clear(),this.cachedEventUids.has(or(e))}saveEventToCache(e){this.cachedEventUids.add(or(e)),this.lastProcessedEventTime=Date.now()}}function or(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gi({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bc(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gi(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uc(t,e={}){return V(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hc=/^https?/;async function Fc(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Uc(t);for(const n of e)try{if(Vc(n))return}catch{}M(t,"unauthorized-domain")}function Vc(t){const e=en(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Hc.test(n))return!1;if($c.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=new Je(3e4,6e4);function ar(){const t=H().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Wc(t){return new Promise((e,n)=>{var r,i,s;function o(){ar(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ar(),n($(t,"network-request-failed"))},timeout:jc.get()})}if(!((i=(r=H().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=H().gapi)===null||s===void 0)&&s.load)o();else{const a=Pa("iframefcb");return H()[a]=()=>{gapi.load?o():n($(t,"network-request-failed"))},ei(`${Sa()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ht=null,e})}let ht=null;function zc(t){return ht=ht||Wc(t),ht}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=new Je(5e3,15e3),Kc="__/auth/iframe",Gc="emulator/auth/iframe",Yc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xc(t){const e=t.config;h(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fn(e,Gc):`https://${t.config.authDomain}/${Kc}`,r={apiKey:e.apiKey,appName:t.name,v:Ye},i=Jc.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ge(r).slice(1)}`}async function Zc(t){const e=await zc(t),n=H().gapi;return h(n,t,"internal-error"),e.open({where:document.body,url:Xc(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yc,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=$(t,"network-request-failed"),a=H().setTimeout(()=>{s(o)},qc.get());function c(){H().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},el=500,tl=600,nl="_blank",rl="http://localhost";class cr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function il(t,e,n,r=el,i=tl){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Qc),{width:r.toString(),height:i.toString(),top:s,left:o}),d=C().toLowerCase();n&&(a=Kr(d)?nl:n),zr(d)&&(e=e||rl,c.scrollbars="yes");const p=Object.entries(c).reduce((u,[g,P])=>`${u}${g}=${P},`,"");if(va(d)&&a!=="_self")return sl(e||"",a),new cr(null);const m=window.open(e||"",a,p);h(m,t,"popup-blocked");try{m.focus()}catch{}return new cr(m)}function sl(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="__/auth/handler",al="emulator/auth/handler",cl=encodeURIComponent("fac");async function lr(t,e,n,r,i,s){h(t.config.authDomain,t,"auth-domain-config-required"),h(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ye,eventId:i};if(e instanceof ri){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bs(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Ze){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const p of Object.keys(a))a[p]===void 0&&delete a[p];const c=await t._getAppCheckToken(),d=c?`#${cl}=${encodeURIComponent(c)}`:"";return`${ll(t)}?${Ge(a).slice(1)}${d}`}function ll({config:t}){return t.emulator?fn(t,al):`https://${t.authDomain}/${ol}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="webStorageSupport";class dl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=di,this._completeRedirectFn=xc,this._overrideRedirectResult=Rc}async _openPopup(e,n,r,i){var s;G((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await lr(e,n,r,en(),i);return il(e,o,bn())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await lr(e,n,r,en(),i);return fc(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(G(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Zc(e),r=new Mc(e);return n.register("authEvent",i=>(h(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zt,{type:zt},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[zt];o!==void 0&&n(!!o),M(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Fc(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zr()||qr()||mn()}}const ul=dl;var dr="@firebase/auth",ur="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){h(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pl(t){We(new Ae("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;h(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qr(t)},d=new Ca(r,i,s,c);return Na(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),We(new Ae("auth-internal",e=>{const n=pe(e.getProvider("auth").getImmediate());return(r=>new hl(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ve(dr,ur,fl(t)),ve(dr,ur,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=5*60,gl=Pr("authIdTokenMaxAge")||ml;let hr=null;const wl=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gl)return;const i=n==null?void 0:n.token;hr!==i&&(hr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function bl(t=Ho()){const e=Dr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xa(t,{popupRedirectResolver:ul,persistence:[Ic,dc,di]}),r=Pr("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=wl(s.toString());sc(n,o,()=>o(n.currentUser)),ic(n,a=>o(a))}}const i=_s("auth");return i&&Ma(n,`http://${i}`),n}function vl(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ta({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=$("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vl().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pl("Browser");/*!
* sweetalert2 v11.21.2
* Released under the MIT License.
*/function wi(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function yl(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function fr(t,e){return t.get(wi(t,e))}function _l(t,e,n){yl(t,e),e.set(t,n)}function Il(t,e,n){return t.set(wi(t,e),n),n}const El=100,f={},kl=()=>{f.previousActiveElement instanceof HTMLElement?(f.previousActiveElement.focus(),f.previousActiveElement=null):document.body&&document.body.focus()},Cl=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,r=window.scrollY;f.restoreFocusTimeout=setTimeout(()=>{kl(),e()},El),window.scrollTo(n,r)}),bi="swal2-",Tl=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],l=Tl.reduce((t,e)=>(t[e]=bi+e,t),{}),Al=["success","warning","info","question","error"],yt=Al.reduce((t,e)=>(t[e]=bi+e,t),{}),vi="SweetAlert2:",yn=t=>t.charAt(0).toUpperCase()+t.slice(1),T=t=>{console.warn(`${vi} ${typeof t=="object"?t.join(" "):t}`)},me=t=>{console.error(`${vi} ${t}`)},pr=[],Sl=t=>{pr.includes(t)||(pr.push(t),T(t))},yi=(t,e=null)=>{Sl(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},Lt=t=>typeof t=="function"?t():t,_n=t=>t&&typeof t.toPromise=="function",et=t=>_n(t)?t.toPromise():Promise.resolve(t),In=t=>t&&Promise.resolve(t)===t,A=()=>document.body.querySelector(`.${l.container}`),tt=t=>{const e=A();return e?e.querySelector(t):null},R=t=>tt(`.${t}`),w=()=>R(l.popup),Le=()=>R(l.icon),Pl=()=>R(l["icon-content"]),_i=()=>R(l.title),En=()=>R(l["html-container"]),Ii=()=>R(l.image),kn=()=>R(l["progress-steps"]),Dt=()=>R(l["validation-message"]),F=()=>tt(`.${l.actions} .${l.confirm}`),De=()=>tt(`.${l.actions} .${l.cancel}`),ge=()=>tt(`.${l.actions} .${l.deny}`),Ol=()=>R(l["input-label"]),xe=()=>tt(`.${l.loader}`),nt=()=>R(l.actions),Ei=()=>R(l.footer),xt=()=>R(l["timer-progress-bar"]),Cn=()=>R(l.close),Rl=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Tn=()=>{const t=w();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((s,o)=>{const a=parseInt(s.getAttribute("tabindex")||"0"),c=parseInt(o.getAttribute("tabindex")||"0");return a>c?1:a<c?-1:0}),r=t.querySelectorAll(Rl),i=Array.from(r).filter(s=>s.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(i))].filter(s=>S(s))},An=()=>q(document.body,l.shown)&&!q(document.body,l["toast-shown"])&&!q(document.body,l["no-backdrop"]),Nt=()=>{const t=w();return t?q(t,l.toast):!1},Ll=()=>{const t=w();return t?t.hasAttribute("data-loading"):!1},L=(t,e)=>{if(t.textContent="",e){const r=new DOMParser().parseFromString(e,"text/html"),i=r.querySelector("head");i&&Array.from(i.childNodes).forEach(o=>{t.appendChild(o)});const s=r.querySelector("body");s&&Array.from(s.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},q=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let r=0;r<n.length;r++)if(!t.classList.contains(n[r]))return!1;return!0},Dl=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(l).includes(n)&&!Object.values(yt).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},O=(t,e,n)=>{if(Dl(t,e),!e.customClass)return;const r=e.customClass[n];if(r){if(typeof r!="string"&&!r.forEach){T(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof r}"`);return}b(t,r)}},Mt=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${l.popup} > .${l[e]}`);case"checkbox":return t.querySelector(`.${l.popup} > .${l.checkbox} input`);case"radio":return t.querySelector(`.${l.popup} > .${l.radio} input:checked`)||t.querySelector(`.${l.popup} > .${l.radio} input:first-child`);case"range":return t.querySelector(`.${l.popup} > .${l.range} input`);default:return t.querySelector(`.${l.popup} > .${l.input}`)}},ki=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},Ci=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(r=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(r):i.classList.remove(r)}):n?t.classList.add(r):t.classList.remove(r)}))},b=(t,e)=>{Ci(t,e,!0)},D=(t,e)=>{Ci(t,e,!1)},te=(t,e)=>{const n=Array.from(t.children);for(let r=0;r<n.length;r++){const i=n[r];if(i instanceof HTMLElement&&q(i,e))return i}},de=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},E=(t,e="flex")=>{t&&(t.style.display=e)},k=t=>{t&&(t.style.display="none")},Sn=(t,e="block")=>{t&&new MutationObserver(()=>{rt(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},mr=(t,e,n,r)=>{const i=t.querySelector(e);i&&i.style.setProperty(n,r)},rt=(t,e,n="flex")=>{e?E(t,n):k(t)},S=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),xl=()=>!S(F())&&!S(ge())&&!S(De()),sn=t=>t.scrollHeight>t.clientHeight,Nl=(t,e)=>{let n=t;for(;n&&n!==e;){if(sn(n))return!0;n=n.parentElement}return!1},Ti=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),r=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||r>0},Pn=(t,e=!1)=>{const n=xt();n&&S(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},Ml=()=>{const t=xt();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),r=e/n*100;t.style.width=`${r}%`},Bl=()=>typeof window>"u"||typeof document>"u",Ul=`
 <div aria-labelledby="${l.title}" aria-describedby="${l["html-container"]}" class="${l.popup}" tabindex="-1">
   <button type="button" class="${l.close}"></button>
   <ul class="${l["progress-steps"]}"></ul>
   <div class="${l.icon}"></div>
   <img class="${l.image}" />
   <h2 class="${l.title}" id="${l.title}"></h2>
   <div class="${l["html-container"]}" id="${l["html-container"]}"></div>
   <input class="${l.input}" id="${l.input}" />
   <input type="file" class="${l.file}" />
   <div class="${l.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${l.select}" id="${l.select}"></select>
   <div class="${l.radio}"></div>
   <label class="${l.checkbox}">
     <input type="checkbox" id="${l.checkbox}" />
     <span class="${l.label}"></span>
   </label>
   <textarea class="${l.textarea}" id="${l.textarea}"></textarea>
   <div class="${l["validation-message"]}" id="${l["validation-message"]}"></div>
   <div class="${l.actions}">
     <div class="${l.loader}"></div>
     <button type="button" class="${l.confirm}"></button>
     <button type="button" class="${l.deny}"></button>
     <button type="button" class="${l.cancel}"></button>
   </div>
   <div class="${l.footer}"></div>
   <div class="${l["timer-progress-bar-container"]}">
     <div class="${l["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),$l=()=>{const t=A();return t?(t.remove(),D([document.documentElement,document.body],[l["no-backdrop"],l["toast-shown"],l["has-column"]]),!0):!1},ce=()=>{f.currentInstance.resetValidationMessage()},Hl=()=>{const t=w(),e=te(t,l.input),n=te(t,l.file),r=t.querySelector(`.${l.range} input`),i=t.querySelector(`.${l.range} output`),s=te(t,l.select),o=t.querySelector(`.${l.checkbox} input`),a=te(t,l.textarea);e.oninput=ce,n.onchange=ce,s.onchange=ce,o.onchange=ce,a.oninput=ce,r.oninput=()=>{ce(),i.value=r.value},r.onchange=()=>{ce(),i.value=r.value}},Fl=t=>typeof t=="string"?document.querySelector(t):t,Vl=t=>{const e=w();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},jl=t=>{window.getComputedStyle(t).direction==="rtl"&&b(A(),l.rtl)},Wl=t=>{const e=$l();if(Bl()){me("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=l.container,e&&b(n,l["no-transition"]),L(n,Ul),n.dataset.swal2Theme=t.theme;const r=Fl(t.target);r.appendChild(n),t.topLayer&&(n.setAttribute("popover",""),n.showPopover()),Vl(t),jl(r),Hl()},On=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?zl(t,e):t&&L(e,t)},zl=(t,e)=>{t.jquery?ql(e,t):L(e,t.toString())},ql=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Kl=(t,e)=>{const n=nt(),r=xe();!n||!r||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?k(n):E(n),O(n,e,"actions"),Gl(n,r,e),L(r,e.loaderHtml||""),O(r,e,"loader"))};function Gl(t,e,n){const r=F(),i=ge(),s=De();!r||!i||!s||(Kt(r,"confirm",n),Kt(i,"deny",n),Kt(s,"cancel",n),Yl(r,i,s,n),n.reverseButtons&&(n.toast?(t.insertBefore(s,r),t.insertBefore(i,r)):(t.insertBefore(s,e),t.insertBefore(i,e),t.insertBefore(r,e))))}function Yl(t,e,n,r){if(!r.buttonsStyling){D([t,e,n],l.styled);return}b([t,e,n],l.styled),r.confirmButtonColor&&t.style.setProperty("--swal2-confirm-button-background-color",r.confirmButtonColor),r.denyButtonColor&&e.style.setProperty("--swal2-deny-button-background-color",r.denyButtonColor),r.cancelButtonColor&&n.style.setProperty("--swal2-cancel-button-background-color",r.cancelButtonColor),qt(t),qt(e),qt(n)}function qt(t){const e=window.getComputedStyle(t),n=e.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");t.style.setProperty("--swal2-action-button-outline",e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${n}`))}function Kt(t,e,n){const r=yn(e);rt(t,n[`show${r}Button`],"inline-block"),L(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=l[e],O(t,n,`${e}Button`)}const Jl=(t,e)=>{const n=Cn();n&&(L(n,e.closeButtonHtml||""),O(n,e,"closeButton"),rt(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},Xl=(t,e)=>{const n=A();n&&(Zl(n,e.backdrop),Ql(n,e.position),ed(n,e.grow),O(n,e,"container"))};function Zl(t,e){typeof e=="string"?t.style.background=e:e||b([document.documentElement,document.body],l["no-backdrop"])}function Ql(t,e){e&&(e in l?b(t,l[e]):(T('The "position" parameter is not valid, defaulting to "center"'),b(t,l.center)))}function ed(t,e){e&&b(t,l[`grow-${e}`])}var y={innerParams:new WeakMap,domCache:new WeakMap};const td=["input","file","range","select","radio","checkbox","textarea"],nd=(t,e)=>{const n=w();if(!n)return;const r=y.innerParams.get(t),i=!r||e.input!==r.input;td.forEach(s=>{const o=te(n,l[s]);o&&(sd(s,e.inputAttributes),o.className=l[s],i&&k(o))}),e.input&&(i&&rd(e),od(e))},rd=t=>{if(!t.input)return;if(!_[t.input]){me(`Unexpected type of input! Expected ${Object.keys(_).join(" | ")}, got "${t.input}"`);return}const e=Ai(t.input);if(!e)return;const n=_[t.input](e,t);E(e),t.inputAutoFocus&&setTimeout(()=>{ki(n)})},id=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},sd=(t,e)=>{const n=w();if(!n)return;const r=Mt(n,t);if(r){id(r);for(const i in e)r.setAttribute(i,e[i])}},od=t=>{if(!t.input)return;const e=Ai(t.input);e&&O(e,t,"input")},Rn=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},it=(t,e,n)=>{if(n.inputLabel){const r=document.createElement("label"),i=l["input-label"];r.setAttribute("for",t.id),r.className=i,typeof n.customClass=="object"&&b(r,n.customClass.inputLabel),r.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",r)}},Ai=t=>{const e=w();if(e)return te(e,l[t]||l.input)},_t=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:In(e)||T(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},_={};_.text=_.email=_.password=_.number=_.tel=_.url=_.search=_.date=_["datetime-local"]=_.time=_.week=_.month=(t,e)=>(_t(t,e.inputValue),it(t,t,e),Rn(t,e),t.type=e.input,t);_.file=(t,e)=>(it(t,t,e),Rn(t,e),t);_.range=(t,e)=>{const n=t.querySelector("input"),r=t.querySelector("output");return _t(n,e.inputValue),n.type=e.input,_t(r,e.inputValue),it(n,t,e),t};_.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");L(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return it(t,t,e),t};_.radio=t=>(t.textContent="",t);_.checkbox=(t,e)=>{const n=Mt(w(),"checkbox");n.value="1",n.checked=!!e.inputValue;const r=t.querySelector("span");return L(r,e.inputPlaceholder||e.inputLabel),n};_.textarea=(t,e)=>{_t(t,e.inputValue),Rn(t,e),it(t,t,e);const n=r=>parseInt(window.getComputedStyle(r).marginLeft)+parseInt(window.getComputedStyle(r).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const r=parseInt(window.getComputedStyle(w()).width),i=()=>{if(!document.body.contains(t))return;const s=t.offsetWidth+n(t);s>r?w().style.width=`${s}px`:de(w(),"width",e.width)};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const ad=(t,e)=>{const n=En();n&&(Sn(n),O(n,e,"htmlContainer"),e.html?(On(e.html,n),E(n,"block")):e.text?(n.textContent=e.text,E(n,"block")):k(n),nd(t,e))},cd=(t,e)=>{const n=Ei();n&&(Sn(n),rt(n,e.footer,"block"),e.footer&&On(e.footer,n),O(n,e,"footer"))},ld=(t,e)=>{const n=y.innerParams.get(t),r=Le();if(!r)return;if(n&&e.icon===n.icon){wr(r,e),gr(r,e);return}if(!e.icon&&!e.iconHtml){k(r);return}if(e.icon&&Object.keys(yt).indexOf(e.icon)===-1){me(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),k(r);return}E(r),wr(r,e),gr(r,e),b(r,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",Si)},gr=(t,e)=>{for(const[n,r]of Object.entries(yt))e.icon!==n&&D(t,r);b(t,e.icon&&yt[e.icon]),hd(t,e),Si(),O(t,e,"icon")},Si=()=>{const t=w();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let r=0;r<n.length;r++)n[r].style.backgroundColor=e},dd=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,ud=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,wr=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,r="";e.iconHtml?r=br(e.iconHtml):e.icon==="success"?(r=dd,n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?r=ud:e.icon&&(r=br({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==r.trim()&&L(t,r)},hd=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])mr(t,n,"background-color",e.iconColor);mr(t,".swal2-success-ring","border-color",e.iconColor)}},br=t=>`<div class="${l["icon-content"]}">${t}</div>`,fd=(t,e)=>{const n=Ii();if(n){if(!e.imageUrl){k(n);return}E(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),de(n,"width",e.imageWidth),de(n,"height",e.imageHeight),n.className=l.image,O(n,e,"image")}};let Ln=!1,Pi=0,Oi=0,Ri=0,Li=0;const pd=t=>{t.addEventListener("mousedown",It),document.body.addEventListener("mousemove",Et),t.addEventListener("mouseup",kt),t.addEventListener("touchstart",It),document.body.addEventListener("touchmove",Et),t.addEventListener("touchend",kt)},md=t=>{t.removeEventListener("mousedown",It),document.body.removeEventListener("mousemove",Et),t.removeEventListener("mouseup",kt),t.removeEventListener("touchstart",It),document.body.removeEventListener("touchmove",Et),t.removeEventListener("touchend",kt)},It=t=>{const e=w();if(t.target===e||Le().contains(t.target)){Ln=!0;const n=Di(t);Pi=n.clientX,Oi=n.clientY,Ri=parseInt(e.style.insetInlineStart)||0,Li=parseInt(e.style.insetBlockStart)||0,b(e,"swal2-dragging")}},Et=t=>{const e=w();if(Ln){let{clientX:n,clientY:r}=Di(t);e.style.insetInlineStart=`${Ri+(n-Pi)}px`,e.style.insetBlockStart=`${Li+(r-Oi)}px`}},kt=()=>{const t=w();Ln=!1,D(t,"swal2-dragging")},Di=t=>{let e=0,n=0;return t.type.startsWith("mouse")?(e=t.clientX,n=t.clientY):t.type.startsWith("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),{clientX:e,clientY:n}},gd=(t,e)=>{const n=A(),r=w();if(!(!n||!r)){if(e.toast){de(n,"width",e.width),r.style.width="100%";const i=xe();i&&r.insertBefore(i,Le())}else de(r,"width",e.width);de(r,"padding",e.padding),e.color&&(r.style.color=e.color),e.background&&(r.style.background=e.background),k(Dt()),wd(r,e),e.draggable&&!e.toast?(b(r,l.draggable),pd(r)):(D(r,l.draggable),md(r))}},wd=(t,e)=>{const n=e.showClass||{};t.className=`${l.popup} ${S(t)?n.popup:""}`,e.toast?(b([document.documentElement,document.body],l["toast-shown"]),b(t,l.toast)):b(t,l.modal),O(t,e,"popup"),typeof e.customClass=="string"&&b(t,e.customClass),e.icon&&b(t,l[`icon-${e.icon}`])},bd=(t,e)=>{const n=kn();if(!n)return;const{progressSteps:r,currentProgressStep:i}=e;if(!r||r.length===0||i===void 0){k(n);return}E(n),n.textContent="",i>=r.length&&T("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),r.forEach((s,o)=>{const a=vd(s);if(n.appendChild(a),o===i&&b(a,l["active-progress-step"]),o!==r.length-1){const c=yd(e);n.appendChild(c)}})},vd=t=>{const e=document.createElement("li");return b(e,l["progress-step"]),L(e,t),e},yd=t=>{const e=document.createElement("li");return b(e,l["progress-step-line"]),t.progressStepsDistance&&de(e,"width",t.progressStepsDistance),e},_d=(t,e)=>{const n=_i();n&&(Sn(n),rt(n,e.title||e.titleText,"block"),e.title&&On(e.title,n),e.titleText&&(n.innerText=e.titleText),O(n,e,"title"))},xi=(t,e)=>{gd(t,e),Xl(t,e),bd(t,e),ld(t,e),fd(t,e),_d(t,e),Jl(t,e),ad(t,e),Kl(t,e),cd(t,e);const n=w();typeof e.didRender=="function"&&n&&e.didRender(n),f.eventEmitter.emit("didRender",n)},Id=()=>S(w()),Ni=()=>{var t;return(t=F())===null||t===void 0?void 0:t.click()},Ed=()=>{var t;return(t=ge())===null||t===void 0?void 0:t.click()},kd=()=>{var t;return(t=De())===null||t===void 0?void 0:t.click()},Ne=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Mi=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},Cd=(t,e,n)=>{Mi(t),e.toast||(t.keydownHandler=r=>Ad(e,r,n),t.keydownTarget=e.keydownListenerCapture?window:w(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},on=(t,e)=>{var n;const r=Tn();if(r.length){t=t+e,t===-2&&(t=r.length-1),t===r.length?t=0:t===-1&&(t=r.length-1),r[t].focus();return}(n=w())===null||n===void 0||n.focus()},Bi=["ArrowRight","ArrowDown"],Td=["ArrowLeft","ArrowUp"],Ad=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?Sd(e,t):e.key==="Tab"?Pd(e):[...Bi,...Td].includes(e.key)?Od(e.key):e.key==="Escape"&&Rd(e,t,n)))},Sd=(t,e)=>{if(!Lt(e.allowEnterKey))return;const n=Mt(w(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;Ni(),t.preventDefault()}},Pd=t=>{const e=t.target,n=Tn();let r=-1;for(let i=0;i<n.length;i++)if(e===n[i]){r=i;break}t.shiftKey?on(r,-1):on(r,1),t.stopPropagation(),t.preventDefault()},Od=t=>{const e=nt(),n=F(),r=ge(),i=De();if(!e||!n||!r||!i)return;const s=[n,r,i];if(document.activeElement instanceof HTMLElement&&!s.includes(document.activeElement))return;const o=Bi.includes(t)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;if(a){for(let c=0;c<e.children.length;c++){if(a=a[o],!a)return;if(a instanceof HTMLButtonElement&&S(a))break}a instanceof HTMLButtonElement&&a.focus()}},Rd=(t,e,n)=>{Lt(e.allowEscapeKey)&&(t.preventDefault(),n(Ne.esc))};var Pe={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Ld=()=>{const t=A();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},Ui=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},$i=typeof window<"u"&&!!window.GestureEvent,Dd=()=>{if($i&&!q(document.body,l.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,b(document.body,l.iosfix),xd()}},xd=()=>{const t=A();if(!t)return;let e;t.ontouchstart=n=>{e=Nd(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Nd=t=>{const e=t.target,n=A(),r=En();return!n||!r||Md(t)||Bd(t)?!1:e===n||!sn(n)&&e instanceof HTMLElement&&!Nl(e,r)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(sn(r)&&r.contains(e))},Md=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",Bd=t=>t.touches&&t.touches.length>1,Ud=()=>{if(q(document.body,l.iosfix)){const t=parseInt(document.body.style.top,10);D(document.body,l.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},$d=()=>{const t=document.createElement("div");t.className=l["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let Ee=null;const Hd=t=>{Ee===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(Ee=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Ee+$d()}px`)},Fd=()=>{Ee!==null&&(document.body.style.paddingRight=`${Ee}px`,Ee=null)};function Hi(t,e,n,r){Nt()?vr(t,r):(Cl(n).then(()=>vr(t,r)),Mi(f)),$i?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),An()&&(Fd(),Ud(),Ui()),Vd()}function Vd(){D([document.documentElement,document.body],[l.shown,l["height-auto"],l["no-backdrop"],l["toast-shown"]])}function ne(t){t=Wd(t);const e=Pe.swalPromiseResolve.get(this),n=jd(this);this.isAwaitingPromise?t.isDismissed||(st(this),e(t)):n&&e(t)}const jd=t=>{const e=w();if(!e)return!1;const n=y.innerParams.get(t);if(!n||q(e,n.hideClass.popup))return!1;D(e,n.showClass.popup),b(e,n.hideClass.popup);const r=A();return D(r,n.showClass.backdrop),b(r,n.hideClass.backdrop),zd(t,e,n),!0};function Fi(t){const e=Pe.swalPromiseReject.get(this);st(this),e&&e(t)}const st=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,y.innerParams.get(t)||t._destroy())},Wd=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),zd=(t,e,n)=>{var r;const i=A(),s=Ti(e);typeof n.willClose=="function"&&n.willClose(e),(r=f.eventEmitter)===null||r===void 0||r.emit("willClose",e),s?qd(t,e,i,n.returnFocus,n.didClose):Hi(t,i,n.returnFocus,n.didClose)},qd=(t,e,n,r,i)=>{f.swalCloseEventFinishedCallback=Hi.bind(null,t,n,r,i);const s=function(o){if(o.target===e){var a;(a=f.swalCloseEventFinishedCallback)===null||a===void 0||a.call(f),delete f.swalCloseEventFinishedCallback,e.removeEventListener("animationend",s),e.removeEventListener("transitionend",s)}};e.addEventListener("animationend",s),e.addEventListener("transitionend",s)},vr=(t,e)=>{setTimeout(()=>{var n;typeof e=="function"&&e.bind(t.params)(),(n=f.eventEmitter)===null||n===void 0||n.emit("didClose"),t._destroy&&t._destroy()})},Oe=t=>{let e=w();if(e||new Ce,e=w(),!e)return;const n=xe();Nt()?k(Le()):Kd(e,t),E(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},Kd=(t,e)=>{const n=nt(),r=xe();!n||!r||(!e&&S(F())&&(e=F()),E(n),e&&(k(e),r.setAttribute("data-button-to-replace",e.className),n.insertBefore(r,e)),b([t,n],l.loading))},Gd=(t,e)=>{e.input==="select"||e.input==="radio"?Qd(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(_n(e.inputValue)||In(e.inputValue))&&(Oe(F()),eu(t,e))},Yd=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Jd(n);case"radio":return Xd(n);case"file":return Zd(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Jd=t=>t.checked?1:0,Xd=t=>t.checked?t.value:null,Zd=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Qd=(t,e)=>{const n=w();if(!n)return;const r=i=>{e.input==="select"?tu(n,Ct(i),e):e.input==="radio"&&nu(n,Ct(i),e)};_n(e.inputOptions)||In(e.inputOptions)?(Oe(F()),et(e.inputOptions).then(i=>{t.hideLoading(),r(i)})):typeof e.inputOptions=="object"?r(e.inputOptions):me(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},eu=(t,e)=>{const n=t.getInput();n&&(k(n),et(e.inputValue).then(r=>{n.value=e.input==="number"?`${parseFloat(r)||0}`:`${r}`,E(n),n.focus(),t.hideLoading()}).catch(r=>{me(`Error in inputValue promise: ${r}`),n.value="",E(n),n.focus(),t.hideLoading()}))};function tu(t,e,n){const r=te(t,l.select);if(!r)return;const i=(s,o,a)=>{const c=document.createElement("option");c.value=a,L(c,o),c.selected=Vi(a,n.inputValue),s.appendChild(c)};e.forEach(s=>{const o=s[0],a=s[1];if(Array.isArray(a)){const c=document.createElement("optgroup");c.label=o,c.disabled=!1,r.appendChild(c),a.forEach(d=>i(c,d[1],d[0]))}else i(r,a,o)}),r.focus()}function nu(t,e,n){const r=te(t,l.radio);if(!r)return;e.forEach(s=>{const o=s[0],a=s[1],c=document.createElement("input"),d=document.createElement("label");c.type="radio",c.name=l.radio,c.value=o,Vi(o,n.inputValue)&&(c.checked=!0);const p=document.createElement("span");L(p,a),p.className=l.label,d.appendChild(c),d.appendChild(p),r.appendChild(d)});const i=r.querySelectorAll("input");i.length&&i[0].focus()}const Ct=t=>{const e=[];return t instanceof Map?t.forEach((n,r)=>{let i=n;typeof i=="object"&&(i=Ct(i)),e.push([r,i])}):Object.keys(t).forEach(n=>{let r=t[n];typeof r=="object"&&(r=Ct(r)),e.push([n,r])}),e},Vi=(t,e)=>!!e&&e.toString()===t.toString(),ru=t=>{const e=y.innerParams.get(t);t.disableButtons(),e.input?ji(t,"confirm"):xn(t,!0)},iu=t=>{const e=y.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?ji(t,"deny"):Dn(t,!1)},su=(t,e)=>{t.disableButtons(),e(Ne.cancel)},ji=(t,e)=>{const n=y.innerParams.get(t);if(!n.input){me(`The "input" parameter is needed to be set when using returnInputValueOn${yn(e)}`);return}const r=t.getInput(),i=Yd(t,n);n.inputValidator?ou(t,i,e):r&&!r.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||r.validationMessage)):e==="deny"?Dn(t,i):xn(t,i)},ou=(t,e,n)=>{const r=y.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>et(r.inputValidator(e,r.validationMessage))).then(s=>{t.enableButtons(),t.enableInput(),s?t.showValidationMessage(s):n==="deny"?Dn(t,e):xn(t,e)})},Dn=(t,e)=>{const n=y.innerParams.get(t||void 0);n.showLoaderOnDeny&&Oe(ge()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>et(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),st(t)):t.close({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>Wi(t||void 0,i))):t.close({isDenied:!0,value:e})},yr=(t,e)=>{t.close({isConfirmed:!0,value:e})},Wi=(t,e)=>{t.rejectPromise(e)},xn=(t,e)=>{const n=y.innerParams.get(t||void 0);n.showLoaderOnConfirm&&Oe(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>et(n.preConfirm(e,n.validationMessage))).then(i=>{S(Dt())||i===!1?(t.hideLoading(),st(t)):yr(t,typeof i>"u"?e:i)}).catch(i=>Wi(t||void 0,i))):yr(t,e)};function Tt(){const t=y.innerParams.get(this);if(!t)return;const e=y.domCache.get(this);k(e.loader),Nt()?t.icon&&E(Le()):au(e),D([e.popup,e.actions],l.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const au=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?E(e[0],"inline-block"):xl()&&k(t.actions)};function zi(){const t=y.innerParams.get(this),e=y.domCache.get(this);return e?Mt(e.popup,t.input):null}function qi(t,e,n){const r=y.domCache.get(t);e.forEach(i=>{r[i].disabled=n})}function Ki(t,e){const n=w();if(!(!n||!t))if(t.type==="radio"){const r=n.querySelectorAll(`[name="${l.radio}"]`);for(let i=0;i<r.length;i++)r[i].disabled=e}else t.disabled=e}function Gi(){qi(this,["confirmButton","denyButton","cancelButton"],!1)}function Yi(){qi(this,["confirmButton","denyButton","cancelButton"],!0)}function Ji(){Ki(this.getInput(),!1)}function Xi(){Ki(this.getInput(),!0)}function Zi(t){const e=y.domCache.get(this),n=y.innerParams.get(this);L(e.validationMessage,t),e.validationMessage.className=l["validation-message"],n.customClass&&n.customClass.validationMessage&&b(e.validationMessage,n.customClass.validationMessage),E(e.validationMessage);const r=this.getInput();r&&(r.setAttribute("aria-invalid","true"),r.setAttribute("aria-describedby",l["validation-message"]),ki(r),b(r,l.inputerror))}function Qi(){const t=y.domCache.get(this);t.validationMessage&&k(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),D(e,l.inputerror))}const ke={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},cu=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],lu={allowEnterKey:void 0},du=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],es=t=>Object.prototype.hasOwnProperty.call(ke,t),ts=t=>cu.indexOf(t)!==-1,ns=t=>lu[t],uu=t=>{es(t)||T(`Unknown parameter "${t}"`)},hu=t=>{du.includes(t)&&T(`The parameter "${t}" is incompatible with toasts`)},fu=t=>{const e=ns(t);e&&yi(t,e)},rs=t=>{t.backdrop===!1&&t.allowOutsideClick&&T('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","minimal","borderless","embed-iframe"].includes(t.theme)&&T(`Invalid theme "${t.theme}". Expected "light", "dark", "auto", "minimal", "borderless", or "embed-iframe"`);for(const e in t)uu(e),t.toast&&hu(e),fu(e)};function is(t){const e=A(),n=w(),r=y.innerParams.get(this);if(!n||q(n,r.hideClass.popup)){T("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const i=pu(t),s=Object.assign({},r,i);rs(s),e.dataset.swal2Theme=s.theme,xi(this,s),y.innerParams.set(this,s),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const pu=t=>{const e={};return Object.keys(t).forEach(n=>{ts(n)?e[n]=t[n]:T(`Invalid parameter to update: ${n}`)}),e};function ss(){const t=y.domCache.get(this),e=y.innerParams.get(this);if(!e){os(this);return}t.popup&&f.swalCloseEventFinishedCallback&&(f.swalCloseEventFinishedCallback(),delete f.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),f.eventEmitter.emit("didDestroy"),mu(this)}const mu=t=>{os(t),delete t.params,delete f.keydownHandler,delete f.keydownTarget,delete f.currentInstance},os=t=>{t.isAwaitingPromise?(Gt(y,t),t.isAwaitingPromise=!0):(Gt(Pe,t),Gt(y,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},Gt=(t,e)=>{for(const n in t)t[n].delete(e)};var gu=Object.freeze({__proto__:null,_destroy:ss,close:ne,closeModal:ne,closePopup:ne,closeToast:ne,disableButtons:Yi,disableInput:Xi,disableLoading:Tt,enableButtons:Gi,enableInput:Ji,getInput:zi,handleAwaitingPromise:st,hideLoading:Tt,rejectPromise:Fi,resetValidationMessage:Qi,showValidationMessage:Zi,update:is});const wu=(t,e,n)=>{t.toast?bu(t,e,n):(yu(e),_u(e),Iu(t,e,n))},bu=(t,e,n)=>{e.popup.onclick=()=>{t&&(vu(t)||t.timer||t.input)||n(Ne.close)}},vu=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let At=!1;const yu=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(At=!0)}}},_u=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(At=!0)}}},Iu=(t,e,n)=>{e.container.onclick=r=>{if(At){At=!1;return}r.target===e.container&&Lt(t.allowOutsideClick)&&n(Ne.backdrop)}},Eu=t=>typeof t=="object"&&t.jquery,_r=t=>t instanceof Element||Eu(t),ku=t=>{const e={};return typeof t[0]=="object"&&!_r(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,r)=>{const i=t[r];typeof i=="string"||_r(i)?e[n]=i:i!==void 0&&me(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function Cu(...t){return new this(...t)}function Tu(t){class e extends this{_main(r,i){return super._main(r,Object.assign({},t,i))}}return e}const Au=()=>f.timeout&&f.timeout.getTimerLeft(),as=()=>{if(f.timeout)return Ml(),f.timeout.stop()},cs=()=>{if(f.timeout){const t=f.timeout.start();return Pn(t),t}},Su=()=>{const t=f.timeout;return t&&(t.running?as():cs())},Pu=t=>{if(f.timeout){const e=f.timeout.increase(t);return Pn(e,!0),e}},Ou=()=>!!(f.timeout&&f.timeout.isRunning());let Ir=!1;const an={};function Ru(t="data-swal-template"){an[t]=this,Ir||(document.body.addEventListener("click",Lu),Ir=!0)}const Lu=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in an){const r=e.getAttribute(n);if(r){an[n].fire({template:r});return}}};class Du{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const r=this._getHandlersByEventName(e);r.includes(n)||r.push(n)}once(e,n){const r=(...i)=>{this.removeListener(e,r),n.apply(this,i)};this.on(e,r)}emit(e,...n){this._getHandlersByEventName(e).forEach(r=>{try{r.apply(this,n)}catch(i){console.error(i)}})}removeListener(e,n){const r=this._getHandlersByEventName(e),i=r.indexOf(n);i>-1&&r.splice(i,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}f.eventEmitter=new Du;const xu=(t,e)=>{f.eventEmitter.on(t,e)},Nu=(t,e)=>{f.eventEmitter.once(t,e)},Mu=(t,e)=>{if(!t){f.eventEmitter.reset();return}e?f.eventEmitter.removeListener(t,e):f.eventEmitter.removeAllListeners(t)};var Bu=Object.freeze({__proto__:null,argsToParams:ku,bindClickHandler:Ru,clickCancel:kd,clickConfirm:Ni,clickDeny:Ed,enableLoading:Oe,fire:Cu,getActions:nt,getCancelButton:De,getCloseButton:Cn,getConfirmButton:F,getContainer:A,getDenyButton:ge,getFocusableElements:Tn,getFooter:Ei,getHtmlContainer:En,getIcon:Le,getIconContent:Pl,getImage:Ii,getInputLabel:Ol,getLoader:xe,getPopup:w,getProgressSteps:kn,getTimerLeft:Au,getTimerProgressBar:xt,getTitle:_i,getValidationMessage:Dt,increaseTimer:Pu,isDeprecatedParameter:ns,isLoading:Ll,isTimerRunning:Ou,isUpdatableParameter:ts,isValidParameter:es,isVisible:Id,mixin:Tu,off:Mu,on:xu,once:Nu,resumeTimer:cs,showLoading:Oe,stopTimer:as,toggleTimer:Su});class Uu{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const ls=["swal-title","swal-html","swal-footer"],$u=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return Ku(n),Object.assign(Hu(n),Fu(n),Vu(n),ju(n),Wu(n),zu(n),qu(n,ls))},Hu=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(r=>{fe(r,["name","value"]);const i=r.getAttribute("name"),s=r.getAttribute("value");!i||!s||(typeof ke[i]=="boolean"?e[i]=s!=="false":typeof ke[i]=="object"?e[i]=JSON.parse(s):e[i]=s)}),e},Fu=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(r=>{const i=r.getAttribute("name"),s=r.getAttribute("value");!i||!s||(e[i]=new Function(`return ${s}`)())}),e},Vu=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(r=>{fe(r,["type","color","aria-label"]);const i=r.getAttribute("type");!i||!["confirm","cancel","deny"].includes(i)||(e[`${i}ButtonText`]=r.innerHTML,e[`show${yn(i)}Button`]=!0,r.hasAttribute("color")&&(e[`${i}ButtonColor`]=r.getAttribute("color")),r.hasAttribute("aria-label")&&(e[`${i}ButtonAriaLabel`]=r.getAttribute("aria-label")))}),e},ju=t=>{const e={},n=t.querySelector("swal-image");return n&&(fe(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},Wu=t=>{const e={},n=t.querySelector("swal-icon");return n&&(fe(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},zu=t=>{const e={},n=t.querySelector("swal-input");n&&(fe(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const r=Array.from(t.querySelectorAll("swal-input-option"));return r.length&&(e.inputOptions={},r.forEach(i=>{fe(i,["value"]);const s=i.getAttribute("value");if(!s)return;const o=i.innerHTML;e.inputOptions[s]=o})),e},qu=(t,e)=>{const n={};for(const r in e){const i=e[r],s=t.querySelector(i);s&&(fe(s,[]),n[i.replace(/^swal-/,"")]=s.innerHTML.trim())}return n},Ku=t=>{const e=ls.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const r=n.tagName.toLowerCase();e.includes(r)||T(`Unrecognized element <${r}>`)})},fe=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&T([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},ds=10,Gu=t=>{const e=A(),n=w();typeof t.willOpen=="function"&&t.willOpen(n),f.eventEmitter.emit("willOpen",n);const i=window.getComputedStyle(document.body).overflowY;Xu(e,n,t),setTimeout(()=>{Yu(e,n)},ds),An()&&(Ju(e,t.scrollbarPadding,i),Ld()),!Nt()&&!f.previousActiveElement&&(f.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),f.eventEmitter.emit("didOpen",n),D(e,l["no-transition"])},St=t=>{const e=w();if(t.target!==e)return;const n=A();e.removeEventListener("animationend",St),e.removeEventListener("transitionend",St),n.style.overflowY="auto"},Yu=(t,e)=>{Ti(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",St),e.addEventListener("transitionend",St)):t.style.overflowY="auto"},Ju=(t,e,n)=>{Dd(),e&&n!=="hidden"&&Hd(n),setTimeout(()=>{t.scrollTop=0})},Xu=(t,e,n)=>{b(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),E(e,"grid"),setTimeout(()=>{b(e,n.showClass.popup),e.style.removeProperty("opacity")},ds)):E(e,"grid"),b([document.documentElement,document.body],l.shown),n.heightAuto&&n.backdrop&&!n.toast&&b([document.documentElement,document.body],l["height-auto"])};var Er={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Zu(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=Er.email),t.input==="url"&&(t.inputValidator=Er.url))}function Qu(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(T('Target parameter is not valid, defaulting to "body"'),t.target="body")}function eh(t){Zu(t),t.showLoaderOnConfirm&&!t.preConfirm&&T(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Qu(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),Wl(t)}let U;var ct=new WeakMap;class I{constructor(...e){if(_l(this,ct,void 0),typeof window>"u")return;U=this;const n=Object.freeze(this.constructor.argsToParams(e));this.params=n,this.isAwaitingPromise=!1,Il(ct,this,this._main(U.params))}_main(e,n={}){if(rs(Object.assign({},n,e)),f.currentInstance){const s=Pe.swalPromiseResolve.get(f.currentInstance),{isAwaitingPromise:o}=f.currentInstance;f.currentInstance._destroy(),o||s({isDismissed:!0}),An()&&Ui()}f.currentInstance=U;const r=nh(e,n);eh(r),Object.freeze(r),f.timeout&&(f.timeout.stop(),delete f.timeout),clearTimeout(f.restoreFocusTimeout);const i=rh(U);return xi(U,r),y.innerParams.set(U,r),th(U,i,r)}then(e){return fr(ct,this).then(e)}finally(e){return fr(ct,this).finally(e)}}const th=(t,e,n)=>new Promise((r,i)=>{const s=o=>{t.close({isDismissed:!0,dismiss:o})};Pe.swalPromiseResolve.set(t,r),Pe.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>{ru(t)},e.denyButton.onclick=()=>{iu(t)},e.cancelButton.onclick=()=>{su(t,s)},e.closeButton.onclick=()=>{s(Ne.close)},wu(n,e,s),Cd(f,n,s),Gd(t,n),Gu(n),ih(f,n,s),sh(e,n),setTimeout(()=>{e.container.scrollTop=0})}),nh=(t,e)=>{const n=$u(t),r=Object.assign({},ke,e,n,t);return r.showClass=Object.assign({},ke.showClass,r.showClass),r.hideClass=Object.assign({},ke.hideClass,r.hideClass),r.animation===!1&&(r.showClass={backdrop:"swal2-noanimation"},r.hideClass={}),r},rh=t=>{const e={popup:w(),container:A(),actions:nt(),confirmButton:F(),denyButton:ge(),cancelButton:De(),loader:xe(),closeButton:Cn(),validationMessage:Dt(),progressSteps:kn()};return y.domCache.set(t,e),e},ih=(t,e,n)=>{const r=xt();k(r),e.timer&&(t.timeout=new Uu(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(E(r),O(r,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Pn(e.timer)})))},sh=(t,e)=>{if(!e.toast){if(!Lt(e.allowEnterKey)){yi("allowEnterKey"),ch();return}oh(t)||ah(t,e)||on(-1,1)}},oh=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const n of e)if(n instanceof HTMLElement&&S(n))return n.focus(),!0;return!1},ah=(t,e)=>e.focusDeny&&S(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&S(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&S(t.confirmButton)?(t.confirmButton.focus(),!0):!1,ch=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const t=new Date,e=localStorage.getItem("swal-initiation");e?(t.getTime()-Date.parse(e))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const n=document.createElement("audio");n.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",n.loop=!0,document.body.appendChild(n),setTimeout(()=>{n.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${t}`)}I.prototype.disableButtons=Yi;I.prototype.enableButtons=Gi;I.prototype.getInput=zi;I.prototype.disableInput=Xi;I.prototype.enableInput=Ji;I.prototype.hideLoading=Tt;I.prototype.disableLoading=Tt;I.prototype.showValidationMessage=Zi;I.prototype.resetValidationMessage=Qi;I.prototype.close=ne;I.prototype.closePopup=ne;I.prototype.closeModal=ne;I.prototype.closeToast=ne;I.prototype.rejectPromise=Fi;I.prototype.update=is;I.prototype._destroy=ss;Object.assign(I,Bu);Object.keys(gu).forEach(t=>{I[t]=function(...e){return U&&U[t]?U[t](...e):null}});I.DismissReason=Ne;I.version="11.21.2";const Ce=I;Ce.default=Ce;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-footer-border-color: #eee;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-confirm-button-border: 0;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-border: 0;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-border: 0;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-button-transition);box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:var(--swal2-confirm-button-border);border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), black 10%)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), black 20%)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:var(--swal2-deny-button-border);border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), black 10%)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), black 20%)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:var(--swal2-cancel-button-border);border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), black 10%)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), black 20%)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-outline)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:1px solid #d9d9d9;border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const lh={apiKey:"AIzaSyC75gk-OZgLn2hE_b1LeFD5BWljx6Kv8VA",authDomain:"fir-9fb39.firebaseapp.com",projectId:"fir-9fb39",storageBucket:"fir-9fb39.firebasestorage.app",messagingSenderId:"591389234395",appId:"1:591389234395:web:f8a69851f96edc87aae8fe"},dh=xr(lh),Ue=bl(dh),$e=Ce.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:t=>{t.onmouseenter=Ce.stopTimer,t.onmouseleave=Ce.resumeTimer}});document.addEventListener("DOMContentLoaded",function(){let t=!0;const e=document.querySelector("form");e&&e.addEventListener("submit",function(c){var u;c.preventDefault();const d=(u=document.getElementById("name"))==null?void 0:u.value,p=document.getElementById("email").value,m=document.getElementById("password").value;if(t&&!d&&!p&&!m||!t&&!p&&!m){$e.fire({icon:"warning",title:"გთხოვ შეავსე ყველა ველი"});return}t?Qa(Ue,p,m).then(g=>{g!=null&&g.user&&(tc(g.user,{url:"https://fireplaceluka.netlify.app/verify.html",handleCodeInApp:!1}),rc(g.user,{displayName:d}).then(()=>{$e.fire({icon:"success",title:"✅ გაიარე ვერიფიკაცია მაილზე და შემდეგ შედი!"})}).catch(P=>{$e.fire({icon:"error",title:P.message})}))}).catch(g=>{$e.fire({icon:"error",title:g.message})}):ec(Ue,p,m).then(async g=>{g!=null&&g.user&&(await g.user.reload(),window.location="/basket.html")}).catch(g=>{console.log(g),$e.fire({icon:"error",title:g.message})})});const n=document.querySelector("#logout-btn");n&&n.addEventListener("click",()=>ac(Ue).then(()=>window.location="/")),oc(Ue,c=>{c?c.reload().then(()=>{const d=Ue.currentUser;if(d){["/basket.html","/product.html","/account.html","/AboutUsPage.html","/cart.html","/contact.html","/product","/contact","/account","/about","/basket","/verify.html"].some(u=>window.location.pathname.includes(u))||(window.location="/basket.html");const m=document.querySelector("#account");m&&(m.innerText=d.displayName||""),window.currentUser=d}}):window.location.pathname!=="/"&&!window.location.pathname.includes("verify")&&(window.location="/")});const r=document.getElementById("signupBtn"),i=document.getElementById("signinBtn"),s=document.getElementById("title"),o=document.getElementById("nameField"),a=document.querySelector(".input-group");i&&(i.onclick=()=>{t=!1,o.style.maxHeight="0",s.innerHTML="Sign In",r.classList.add("disable"),i.classList.remove("disable"),a.style.height="220px"}),r&&(r.onclick=()=>{if(!t){t=!0,o.style.maxHeight="60px",s.innerHTML="Sign Up",r.classList.remove("disable"),i.classList.add("disable"),a.style.height="280px";return}})});
