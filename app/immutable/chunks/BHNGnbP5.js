import{h as de,a as Ki,b as bc,K as $e,aa as Gd,Z as i_,_ as Cu,j as Gi,s as bn,d as _t,k as o_,$ as Ac,c as wo,p as Wd,o as Hd,au as a_,a4 as c_,ai as ku,aA as _a,v as Fa,aB as l_,aC as u_,aD as h_,n as d_,aE as f_,aF as Rc,aG as p_,aH as m_,e as g_,E as Qd,a3 as __,aI as y_,g as v_,r as I_,aJ as E_,aK as T_,aL as w_,aM as b_,aN as A_,U as R_,V as S_,X as P_,Y as Vu,W as Du,aq as xu,t as C_,Q as k_,T as V_,R as D_,P as Nu,w as x_,O as N_}from"./CB0-WiRl.js";import{b as O_,g as M_,j as L_,k as F_,m as U_,n as B_,o as z_,p as j_,q as q_,s as $_,c as Ou,d as K_}from"./BqJiUTld.js";import{i as G_}from"./Dp5-sx5g.js";import{l as Mu,p as Hn}from"./CLpNHM6I.js";function W_(r,e){return e}function H_(r,e,t,n){for(var s=[],i=e.length,o=0;o<i;o++)h_(e[o].e,s,!0);var c=i>0&&s.length===0&&t!==null;if(c){var l=t.parentNode;d_(l),l.append(t),n.clear(),Bt(r,e[0].prev,e[i-1].next)}f_(s,()=>{for(var h=0;h<i;h++){var f=e[h];c||(n.delete(f.k),Bt(r,f.prev,f.next)),Rc(f.e,!c)}})}function Q_(r,e,t,n,s,i=null){var o=r,c={flags:e,items:new Map,first:null};de&&Ki();var l=null,h=!1,f=Gd(()=>{var p=t();return a_(p)?p:p==null?[]:Hd(p)});bc(()=>{var p=$e(f),_=p.length;if(h&&_===0)return;h=_===0;let b=!1;if(de){var S=o.data===i_;S!==(_===0)&&(o=Cu(),Gi(o),bn(!1),b=!0)}if(de){for(var D=null,C,k=0;k<_;k++){if(_t.nodeType===8&&_t.data===o_){o=_t,b=!0,bn(!1);break}var O=p[k],V=n(O,k);C=Jd(_t,c,D,null,O,V,k,s,e,t),c.items.set(V,C),D=C}_>0&&Gi(Cu())}de||J_(p,c,o,s,e,n,t),i!==null&&(_===0?l?Ac(l):l=wo(()=>i(o)):l!==null&&Wd(l,()=>{l=null})),b&&bn(!0),$e(f)}),de&&(o=_t)}function J_(r,e,t,n,s,i,o){var c=r.length,l=e.items,h=e.first,f=h,p,_=null,b=[],S=[],D,C,k,O;for(O=0;O<c;O+=1){if(D=r[O],C=i(D,O),k=l.get(C),k===void 0){var V=f?f.e.nodes_start:t;_=Jd(V,e,_,_===null?e.first:_.next,D,C,O,n,s,o),l.set(C,_),b=[],S=[],f=_.next;continue}if(Y_(k,D,O),(k.e.f&_a)!==0&&Ac(k.e),k!==f){if(p!==void 0&&p.has(k)){if(b.length<S.length){var M=S[0],F;_=M.prev;var K=b[0],I=b[b.length-1];for(F=0;F<b.length;F+=1)Lu(b[F],M,t);for(F=0;F<S.length;F+=1)p.delete(S[F]);Bt(e,K.prev,I.next),Bt(e,_,K),Bt(e,I,M),f=M,_=I,O-=1,b=[],S=[]}else p.delete(k),Lu(k,f,t),Bt(e,k.prev,k.next),Bt(e,k,_===null?e.first:_.next),Bt(e,_,k),_=k;continue}for(b=[],S=[];f!==null&&f.k!==C;)(f.e.f&_a)===0&&(p??(p=new Set)).add(f),S.push(f),f=f.next;if(f===null)continue;k=f}b.push(k),_=k,f=k.next}if(f!==null||p!==void 0){for(var g=p===void 0?[]:Hd(p);f!==null;)(f.e.f&_a)===0&&g.push(f),f=f.next;var y=g.length;if(y>0){var E=null;H_(e,g,E,l)}}Fa.first=e.first&&e.first.e,Fa.last=_&&_.e}function Y_(r,e,t,n){u_(r.v,e),r.i=t}function Jd(r,e,t,n,s,i,o,c,l,h){var f=(l&p_)!==0,p=(l&m_)===0,_=f?p?c_(s):ku(s):s,b=(l&l_)===0?o:ku(o),S={i:b,v:_,k:i,a:null,e:null,prev:t,next:n};try{return S.e=wo(()=>c(r,_,b,h),de),S.e.prev=t&&t.e,S.e.next=n&&n.e,t===null?e.first=S:(t.next=S,t.e.next=S.e),n!==null&&(n.prev=S,n.e.prev=S.e),S}finally{}}function Lu(r,e,t){for(var n=r.next?r.next.e.nodes_start:t,s=e?e.e.nodes_start:t,i=r.e.nodes_start;i!==n;){var o=g_(i);s.before(i),i=o}}function Bt(r,e,t){e===null?r.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function X_(r,e,t,n,s){var c;de&&Ki();var i=(c=e.$$slots)==null?void 0:c[t],o=!1;i===!0&&(i=e.children,o=!0),i===void 0||i(r,o?()=>n:n)}function kR(r,e,...t){var n=r,s=__,i;bc(()=>{s!==(s=e())&&(i&&(Rc(i),i=null),i=wo(()=>s(n,...t)))},Qd),de&&(n=_t)}function Z_(r,e,t,n,s,i){let o=de;de&&Ki();var c,l,h=null;de&&_t.nodeType===1&&(h=_t,Ki());var f=de?_t:r,p;bc(()=>{const _=e()||null;var b=y_;_!==c&&(p&&(_===null?Wd(p,()=>{p=null,l=null}):_===l?Ac(p):Rc(p)),_&&_!==l&&(p=wo(()=>{if(h=de?h:document.createElementNS(b,_),O_(h,h),n){de&&M_(_)&&h.append(document.createComment(""));var S=de?v_(h):h.appendChild(I_());de&&(S===null?bn(!1):Gi(S)),n(h,S)}Fa.nodes_end=h,f.before(h)})),c=_,c&&(l=c))},Qd),o&&(bn(!0),Gi(f))}function Yd(r){var e,t,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(e=0;e<s;e++)r[e]&&(t=Yd(r[e]))&&(n&&(n+=" "),n+=t)}else for(t in r)r[t]&&(n&&(n+=" "),n+=t);return n}function Xd(){for(var r,e,t=0,n="",s=arguments.length;t<s;t++)(r=arguments[t])&&(e=Yd(r))&&(n&&(n+=" "),n+=e);return n}function ey(r){return typeof r=="object"?Xd(r):r??""}const Fu=[...` 	
\r\f \v\uFEFF`];function ty(r,e,t){var n=r==null?"":""+r;if(t){for(var s in t)if(t[s])n=n?n+" "+s:s;else if(n.length)for(var i=s.length,o=0;(o=n.indexOf(s,o))>=0;){var c=o+i;(o===0||Fu.includes(n[o-1]))&&(c===n.length||Fu.includes(n[c]))?n=(o===0?"":n.substring(0,o))+n.substring(c+1):o=c}}return n===""?null:n}function Uu(r,e=!1){var t=e?" !important;":";",n="";for(var s in r){var i=r[s];i!=null&&i!==""&&(n+=" "+s+": "+i+t)}return n}function ya(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function ny(r,e){if(e){var t="",n,s;if(Array.isArray(e)?(n=e[0],s=e[1]):n=e,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,c=!1,l=[];n&&l.push(...Object.keys(n).map(ya)),s&&l.push(...Object.keys(s).map(ya));var h=0,f=-1;const D=r.length;for(var p=0;p<D;p++){var _=r[p];if(c?_==="/"&&r[p-1]==="*"&&(c=!1):i?i===_&&(i=!1):_==="/"&&r[p+1]==="*"?c=!0:_==='"'||_==="'"?i=_:_==="("?o++:_===")"&&o--,!c&&i===!1&&o===0){if(_===":"&&f===-1)f=p;else if(_===";"||p===D-1){if(f!==-1){var b=ya(r.substring(h,f).trim());if(!l.includes(b)){_!==";"&&p++;var S=r.substring(h,p).trim();t+=" "+S+";"}}h=p+1,f=-1}}}}return n&&(t+=Uu(n)),s&&(t+=Uu(s,!0)),t=t.trim(),t===""?null:t}return r==null?null:String(r)}function ry(r,e,t,n,s,i){var o=r.__className;if(de||o!==t||o===void 0){var c=ty(t,n,i);(!de||c!==r.getAttribute("class"))&&(c==null?r.removeAttribute("class"):e?r.className=c:r.setAttribute("class",c)),r.__className=t}else if(i&&s!==i)for(var l in i){var h=!!i[l];(s==null||h!==!!s[l])&&r.classList.toggle(l,h)}return i}function va(r,e={},t,n){for(var s in t){var i=t[s];e[s]!==i&&(t[s]==null?r.style.removeProperty(s):r.style.setProperty(s,i,n))}}function sy(r,e,t,n){var s=r.__style;if(de||s!==e){var i=ny(e,n);(!de||i!==r.getAttribute("style"))&&(i==null?r.removeAttribute("style"):r.style.cssText=i),r.__style=e}else n&&(Array.isArray(n)?(va(r,t==null?void 0:t[0],n[0]),va(r,t==null?void 0:t[1],n[1],"important")):va(r,t,n));return n}const ns=Symbol("class"),rs=Symbol("style"),Zd=Symbol("is custom element"),ef=Symbol("is html");function VR(r){if(de){var e=!1,t=()=>{if(!e){if(e=!0,r.hasAttribute("value")){var n=r.value;Wi(r,"value",null),r.value=n}if(r.hasAttribute("checked")){var s=r.checked;Wi(r,"checked",null),r.checked=s}}};r.__on_r=t,A_(t),q_()}}function iy(r,e){e?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function Wi(r,e,t,n){var s=tf(r);de&&(s[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||s[e]!==(s[e]=t)&&(e==="loading"&&(r[b_]=t),t==null?r.removeAttribute(e):typeof t!="string"&&nf(r).includes(e)?r[e]=t:r.setAttribute(e,t))}function Bu(r,e,t,n,s=!1){var i=tf(r),o=i[Zd],c=!i[ef];let l=de&&o;l&&bn(!1);var h=e||{},f=r.tagName==="OPTION";for(var p in e)p in t||(t[p]=null);t.class?t.class=ey(t.class):t[ns]&&(t.class=null),t[rs]&&(t.style??(t.style=null));var _=nf(r);for(const V in t){let M=t[V];if(f&&V==="value"&&M==null){r.value=r.__value="",h[V]=M;continue}if(V==="class"){var b=r.namespaceURI==="http://www.w3.org/1999/xhtml";ry(r,b,M,n,e==null?void 0:e[ns],t[ns]),h[V]=M,h[ns]=t[ns];continue}if(V==="style"){sy(r,M,e==null?void 0:e[rs],t[rs]),h[V]=M,h[rs]=t[rs];continue}var S=h[V];if(M!==S){h[V]=M;var D=V[0]+V[1];if(D!=="$$")if(D==="on"){const F={},K="$$"+V;let I=V.slice(2);var C=j_(I);if(L_(I)&&(I=I.slice(0,-7),F.capture=!0),!C&&S){if(M!=null)continue;r.removeEventListener(I,h[K],F),h[K]=null}if(M!=null)if(C)r[`__${I}`]=M,U_([I]);else{let g=function(y){h[V].call(this,y)};h[K]=F_(I,r,g,F)}else C&&(r[`__${I}`]=void 0)}else if(V==="style")Wi(r,V,M);else if(V==="autofocus")B_(r,!!M);else if(!o&&(V==="__value"||V==="value"&&M!=null))r.value=r.__value=M;else if(V==="selected"&&f)iy(r,M);else{var k=V;c||(k=z_(k));var O=k==="defaultValue"||k==="defaultChecked";if(M==null&&!o&&!O)if(i[V]=null,k==="value"||k==="checked"){let F=r;const K=e===void 0;if(k==="value"){let I=F.defaultValue;F.removeAttribute(k),F.defaultValue=I,F.value=F.__value=K?I:null}else{let I=F.defaultChecked;F.removeAttribute(k),F.defaultChecked=I,F.checked=K?I:!1}}else r.removeAttribute(V);else O||_.includes(k)&&(o||typeof M!="string")?r[k]=M:typeof M!="function"&&Wi(r,k,M)}}}return l&&bn(!0),h}function tf(r){return r.__attributes??(r.__attributes={[Zd]:r.nodeName.includes("-"),[ef]:r.namespaceURI===E_})}var zu=new Map;function nf(r){var e=zu.get(r.nodeName);if(e)return e;zu.set(r.nodeName,e=[]);for(var t,n=r,s=Element.prototype;s!==n;){t=w_(n);for(var i in t)t[i].set&&e.push(i);n=T_(n)}return e}const oy=()=>{};var ju={};/**
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
 */const rf=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ay=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],c=r[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,c=o?r[s+1]:0,l=s+2<r.length,h=l?r[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let _=(c&15)<<2|h>>6,b=h&63;l||(b=64,o||(_=64)),n.push(t[f],t[p],t[_],t[b])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(rf(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):ay(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],c=s<r.length?t[r.charAt(s)]:0;++s;const h=s<r.length?t[r.charAt(s)]:64;++s;const p=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new cy;const _=i<<2|c>>4;if(n.push(_),h!==64){const b=c<<4&240|h>>2;if(n.push(b),p!==64){const S=h<<6&192|p;n.push(S)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class cy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ly=function(r){const e=rf(r);return sf.encodeByteArray(e,!0)},of=function(r){return ly(r).replace(/\./g,"")},af=function(r){try{return sf.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uy=()=>cf().__FIREBASE_DEFAULTS__,hy=()=>{if(typeof process>"u"||typeof ju>"u")return;const r=ju.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},dy=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&af(r[1]);return e&&JSON.parse(e)},bo=()=>{try{return oy()||uy()||hy()||dy()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},fy=r=>{var e,t;return(t=(e=bo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},lf=()=>{var r;return(r=bo())===null||r===void 0?void 0:r.config},uf=r=>{var e;return(e=bo())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class py{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function my(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function gy(){var r;const e=(r=bo())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _y(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yy(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function vy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Iy(){const r=Ee();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function hf(){return!gy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function df(){try{return typeof indexedDB=="object"}catch{return!1}}function Ey(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Ty="FirebaseError";class Rt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Ty,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qs.prototype.create)}}class qs{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?wy(i,n):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Rt(s,c,n)}}function wy(r,e){return r.replace(by,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const by=/\{\$([^}]+)}/g;function Ay(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Pn(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(qu(i)&&qu(o)){if(!Pn(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function qu(r){return r!==null&&typeof r=="object"}/**
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
 */function $s(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function hs(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ds(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Ry(r,e){const t=new Sy(r,e);return t.subscribe.bind(t)}class Sy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Py(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Ia),s.error===void 0&&(s.error=Ia),s.complete===void 0&&(s.complete=Ia);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Py(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Ia(){}/**
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
 */function Be(r){return r&&r._delegate?r._delegate:r}class Cn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gn="[DEFAULT]";/**
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
 */class Cy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new py;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vy(e))try{this.getOrInitializeService({instanceIdentifier:gn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gn){return this.instances.has(e)}getOptions(e=gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&o.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ky(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=gn){return this.component?this.component.multipleInstances?e:gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ky(r){return r===gn?void 0:r}function Vy(r){return r.instantiationMode==="EAGER"}/**
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
 */class Dy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Cy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Z||(Z={}));const xy={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Ny=Z.INFO,Oy={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},My=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Oy[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sc{constructor(e){this.name=e,this._logLevel=Ny,this._logHandler=My,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Ly=(r,e)=>e.some(t=>r instanceof t);let $u,Ku;function Fy(){return $u||($u=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Uy(){return Ku||(Ku=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ff=new WeakMap,Ua=new WeakMap,pf=new WeakMap,Ea=new WeakMap,Pc=new WeakMap;function By(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Wt(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ff.set(t,r)}).catch(()=>{}),Pc.set(e,r),e}function zy(r){if(Ua.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});Ua.set(r,e)}let Ba={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Ua.get(r);if(e==="objectStoreNames")return r.objectStoreNames||pf.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function jy(r){Ba=r(Ba)}function qy(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Ta(this),e,...t);return pf.set(n,e.sort?e.sort():[e]),Wt(n)}:Uy().includes(r)?function(...e){return r.apply(Ta(this),e),Wt(ff.get(this))}:function(...e){return Wt(r.apply(Ta(this),e))}}function $y(r){return typeof r=="function"?qy(r):(r instanceof IDBTransaction&&zy(r),Ly(r,Fy())?new Proxy(r,Ba):r)}function Wt(r){if(r instanceof IDBRequest)return By(r);if(Ea.has(r))return Ea.get(r);const e=$y(r);return e!==r&&(Ea.set(r,e),Pc.set(e,r)),e}const Ta=r=>Pc.get(r);function Ky(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),c=Wt(o);return n&&o.addEventListener("upgradeneeded",l=>{n(Wt(o.result),l.oldVersion,l.newVersion,Wt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Gy=["get","getKey","getAll","getAllKeys","count"],Wy=["put","add","delete","clear"],wa=new Map;function Gu(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(wa.get(e))return wa.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Wy.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Gy.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return wa.set(e,i),i}jy(r=>({...r,get:(e,t,n)=>Gu(e,t)||r.get(e,t,n),has:(e,t)=>!!Gu(e,t)||r.has(e,t)}));/**
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
 */class Hy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qy(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Qy(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const za="@firebase/app",Wu="0.11.5";/**
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
 */const Tt=new Sc("@firebase/app"),Jy="@firebase/app-compat",Yy="@firebase/analytics-compat",Xy="@firebase/analytics",Zy="@firebase/app-check-compat",ev="@firebase/app-check",tv="@firebase/auth",nv="@firebase/auth-compat",rv="@firebase/database",sv="@firebase/data-connect",iv="@firebase/database-compat",ov="@firebase/functions",av="@firebase/functions-compat",cv="@firebase/installations",lv="@firebase/installations-compat",uv="@firebase/messaging",hv="@firebase/messaging-compat",dv="@firebase/performance",fv="@firebase/performance-compat",pv="@firebase/remote-config",mv="@firebase/remote-config-compat",gv="@firebase/storage",_v="@firebase/storage-compat",yv="@firebase/firestore",vv="@firebase/vertexai",Iv="@firebase/firestore-compat",Ev="firebase",Tv="11.6.1";/**
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
 */const ja="[DEFAULT]",wv={[za]:"fire-core",[Jy]:"fire-core-compat",[Xy]:"fire-analytics",[Yy]:"fire-analytics-compat",[ev]:"fire-app-check",[Zy]:"fire-app-check-compat",[tv]:"fire-auth",[nv]:"fire-auth-compat",[rv]:"fire-rtdb",[sv]:"fire-data-connect",[iv]:"fire-rtdb-compat",[ov]:"fire-fn",[av]:"fire-fn-compat",[cv]:"fire-iid",[lv]:"fire-iid-compat",[uv]:"fire-fcm",[hv]:"fire-fcm-compat",[dv]:"fire-perf",[fv]:"fire-perf-compat",[pv]:"fire-rc",[mv]:"fire-rc-compat",[gv]:"fire-gcs",[_v]:"fire-gcs-compat",[yv]:"fire-fst",[Iv]:"fire-fst-compat",[vv]:"fire-vertex","fire-js":"fire-js",[Ev]:"fire-js-all"};/**
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
 */const kn=new Map,qa=new Map,$a=new Map;function Hu(r,e){try{r.container.addComponent(e)}catch(t){Tt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function pr(r){const e=r.name;if($a.has(e))return Tt.debug(`There were multiple attempts to register component ${e}.`),!1;$a.set(e,r);for(const t of kn.values())Hu(t,r);for(const t of qa.values())Hu(t,r);return!0}function Cc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Xe(r){return r==null?!1:r.settings!==void 0}/**
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
 */const bv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new qs("app","Firebase",bv);/**
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
 */class Av{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const xr=Tv;function Ka(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:ja,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Ht.create("bad-app-name",{appName:String(s)});if(t||(t=lf()),!t)throw Ht.create("no-options");const i=kn.get(s);if(i){if(Pn(t,i.options)&&Pn(n,i.config))return i;throw Ht.create("duplicate-app",{appName:s})}const o=new Dy(s);for(const l of $a.values())o.addComponent(l);const c=new Av(t,n,o);return kn.set(s,c),c}function mf(r=ja){const e=kn.get(r);if(!e&&r===ja&&lf())return Ka();if(!e)throw Ht.create("no-app",{appName:r});return e}function Rv(){return Array.from(kn.values())}async function Sv(r){let e=!1;const t=r.name;kn.has(t)?(e=!0,kn.delete(t)):qa.has(t)&&r.decRefCount()<=0&&(qa.delete(t),e=!0),e&&(await Promise.all(r.container.getProviders().map(n=>n.delete())),r.isDeleted=!0)}function Qt(r,e,t){var n;let s=(n=wv[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tt.warn(c.join(" "));return}pr(new Cn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Pv="firebase-heartbeat-database",Cv=1,Rs="firebase-heartbeat-store";let ba=null;function gf(){return ba||(ba=Ky(Pv,Cv,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Rs)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ht.create("idb-open",{originalErrorMessage:r.message})})),ba}async function kv(r){try{const t=(await gf()).transaction(Rs),n=await t.objectStore(Rs).get(_f(r));return await t.done,n}catch(e){if(e instanceof Rt)Tt.warn(e.message);else{const t=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tt.warn(t.message)}}}async function Qu(r,e){try{const n=(await gf()).transaction(Rs,"readwrite");await n.objectStore(Rs).put(e,_f(r)),await n.done}catch(t){if(t instanceof Rt)Tt.warn(t.message);else{const n=Ht.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Tt.warn(n.message)}}}function _f(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Vv=1024,Dv=30;class xv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ov(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ju();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Dv){const o=Mv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Tt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ju(),{heartbeatsToSend:n,unsentEntries:s}=Nv(this._heartbeatsCache.heartbeats),i=of(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Tt.warn(t),""}}}function Ju(){return new Date().toISOString().substring(0,10)}function Nv(r,e=Vv){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Yu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Yu(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Ov{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return df()?Ey().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await kv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Yu(r){return of(JSON.stringify({version:2,heartbeats:r})).length}function Mv(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
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
 */function Lv(r){pr(new Cn("platform-logger",e=>new Hy(e),"PRIVATE")),pr(new Cn("heartbeat",e=>new xv(e),"PRIVATE")),Qt(za,Wu,r),Qt(za,Wu,"esm2017"),Qt("fire-js","")}Lv("");var Fv="firebase",Uv="11.6.1";/**
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
 */Qt(Fv,Uv,"app");function kc(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(t[n[s]]=r[n[s]]);return t}function yf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bv=yf,vf=new qs("auth","Firebase",yf());/**
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
 */const Hi=new Sc("@firebase/auth");function zv(r,...e){Hi.logLevel<=Z.WARN&&Hi.warn(`Auth (${xr}): ${r}`,...e)}function ki(r,...e){Hi.logLevel<=Z.ERROR&&Hi.error(`Auth (${xr}): ${r}`,...e)}/**
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
 */function st(r,...e){throw Vc(r,...e)}function ut(r,...e){return Vc(r,...e)}function If(r,e,t){const n=Object.assign(Object.assign({},Bv()),{[e]:t});return new qs("auth","Firebase",n).create(e,{appName:r.name})}function Et(r){return If(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vc(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return vf.create(r,...e)}function Q(r,e,...t){if(!r)throw Vc(e,...t)}function yt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ki(e),new Error(e)}function wt(r,e){r||yt(e)}/**
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
 */function Ga(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function jv(){return Xu()==="http:"||Xu()==="https:"}function Xu(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function qv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jv()||yy()||"connection"in navigator)?navigator.onLine:!0}function $v(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Ks{constructor(e,t){this.shortDelay=e,this.longDelay=t,wt(t>e,"Short delay should be less than long delay!"),this.isMobile=my()||vy()}get(){return qv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Dc(r,e){wt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ef{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Kv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Gv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Wv=new Ks(3e4,6e4);function St(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Pt(r,e,t,n,s={}){return Tf(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const c=$s(Object.assign({key:r.config.apiKey},o)).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:l},i);return _y()||(h.referrerPolicy="no-referrer"),Ef.fetch()(await wf(r,r.config.apiHost,t,c),h)})}async function Tf(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},Kv),e);try{const s=new Qv(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ii(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ii(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ii(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ii(r,"user-disabled",o);const f=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw If(r,f,h);st(r,f)}}catch(s){if(s instanceof Rt)throw s;st(r,"network-request-failed",{message:String(s)})}}async function Gs(r,e,t,n,s={}){const i=await Pt(r,e,t,n,s);return"mfaPendingCredential"in i&&st(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function wf(r,e,t,n){const s=`${e}${t}?${n}`,i=r,o=i.config.emulator?Dc(r.config,s):`${r.config.apiScheme}://${s}`;return Gv.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Hv(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Qv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(ut(this.auth,"network-request-failed")),Wv.get())})}}function Ii(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=ut(r,e,n);return s.customData._tokenResponse=t,s}function Zu(r){return r!==void 0&&r.enterprise!==void 0}class Jv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Hv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Yv(r,e){return Pt(r,"GET","/v2/recaptchaConfig",St(r,e))}/**
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
 */async function Xv(r,e){return Pt(r,"POST","/v1/accounts:delete",e)}async function Qi(r,e){return Pt(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function ys(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zv(r,e=!1){const t=Be(r),n=await t.getIdToken(e),s=xc(n);Q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:ys(Aa(s.auth_time)),issuedAtTime:ys(Aa(s.iat)),expirationTime:ys(Aa(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Aa(r){return Number(r)*1e3}function xc(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return ki("JWT malformed, contained fewer than 3 sections"),null;try{const s=af(t);return s?JSON.parse(s):(ki("Failed to decode base64 JWT payload"),null)}catch(s){return ki("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function eh(r){const e=xc(r);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ss(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Rt&&eI(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function eI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class tI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ys(this.lastLoginAt),this.creationTime=ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ji(r){var e;const t=r.auth,n=await r.getIdToken(),s=await Ss(r,Qi(t,{idToken:n}));Q(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?bf(i.providerUserInfo):[],c=rI(r.providerData,o),l=r.isAnonymous,h=!(r.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Wa(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(r,p)}async function nI(r){const e=Be(r);await Ji(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rI(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function bf(r){return r.map(e=>{var{providerId:t}=e,n=kc(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function sI(r,e){const t=await Tf(r,{},async()=>{const n=$s({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=await wf(r,s,"/v1/token",`key=${i}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ef.fetch()(o,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function iI(r,e){return Pt(r,"POST","/v2/accounts:revokeToken",St(r,e))}/**
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
 */class lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):eh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const t=eh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await sI(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new lr;return n&&(Q(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lr,this.toJSON())}_performRefresh(){return yt("not implemented")}}/**
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
 */function Ot(r,e){Q(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class rt{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=kc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Wa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ss(this,this.stsTokenManager.getToken(this.auth,e));return Q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Zv(this,e)}reload(){return nI(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ji(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(Et(this.auth));const e=await this.getIdToken();return await Ss(this,Xv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,o,c,l,h,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=t.photoURL)!==null&&o!==void 0?o:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,C=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,k=(h=t.createdAt)!==null&&h!==void 0?h:void 0,O=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:V,emailVerified:M,isAnonymous:F,providerData:K,stsTokenManager:I}=t;Q(V&&I,e,"internal-error");const g=lr.fromJSON(this.name,I);Q(typeof V=="string",e,"internal-error"),Ot(p,e.name),Ot(_,e.name),Q(typeof M=="boolean",e,"internal-error"),Q(typeof F=="boolean",e,"internal-error"),Ot(b,e.name),Ot(S,e.name),Ot(D,e.name),Ot(C,e.name),Ot(k,e.name),Ot(O,e.name);const y=new rt({uid:V,auth:e,email:_,emailVerified:M,displayName:p,isAnonymous:F,photoURL:S,phoneNumber:b,tenantId:D,stsTokenManager:g,createdAt:k,lastLoginAt:O});return K&&Array.isArray(K)&&(y.providerData=K.map(E=>Object.assign({},E))),C&&(y._redirectEventId=C),y}static async _fromIdTokenResponse(e,t,n=!1){const s=new lr;s.updateFromServerResponse(t);const i=new rt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Ji(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?bf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new lr;c.updateFromIdToken(n);const l=new rt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Wa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const th=new Map;function vt(r){wt(r instanceof Function,"Expected a class definition");let e=th.get(r);return e?(wt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,th.set(r,e),e)}/**
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
 */class Af{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Af.type="NONE";const nh=Af;/**
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
 */function Vi(r,e,t){return`firebase:${r}:${e}:${t}`}class ur{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=Vi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Vi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Qi(this.auth,{idToken:e}).catch(()=>{});return t?rt._fromGetAccountInfoResponse(this.auth,t,e):null}return rt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ur(vt(nh),e,n);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||vt(nh);const o=Vi(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const _=await Qi(e,{idToken:f}).catch(()=>{});if(!_)break;p=await rt._fromGetAccountInfoResponse(e,_,f)}else p=rt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ur(i,e,n):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ur(i,e,n))}}/**
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
 */function rh(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vf(e))return"Blackberry";if(Df(e))return"Webos";if(Sf(e))return"Safari";if((e.includes("chrome/")||Pf(e))&&!e.includes("edge/"))return"Chrome";if(kf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Rf(r=Ee()){return/firefox\//i.test(r)}function Sf(r=Ee()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pf(r=Ee()){return/crios\//i.test(r)}function Cf(r=Ee()){return/iemobile/i.test(r)}function kf(r=Ee()){return/android/i.test(r)}function Vf(r=Ee()){return/blackberry/i.test(r)}function Df(r=Ee()){return/webos/i.test(r)}function Nc(r=Ee()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function oI(r=Ee()){var e;return Nc(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function aI(){return Iy()&&document.documentMode===10}function xf(r=Ee()){return Nc(r)||kf(r)||Df(r)||Vf(r)||/windows phone/i.test(r)||Cf(r)}/**
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
 */function Nf(r,e=[]){let t;switch(r){case"Browser":t=rh(Ee());break;case"Worker":t=`${rh(Ee())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xr}/${n}`}/**
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
 */class cI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function lI(r,e={}){return Pt(r,"GET","/v2/passwordPolicy",St(r,e))}/**
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
 */const uI=6;class hI{constructor(e){var t,n,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:uI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class dI{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sh(this),this.idTokenSubscription=new sh(this),this.beforeStateQueue=new cI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vt(t)),this._initializationPromise=this.queue(async()=>{var n,s,i;if(!this._deleted&&(this.persistenceManager=await ur.create(this,e),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Qi(this,{idToken:e}),n=await rt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Xe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ji(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$v()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(Et(this));const t=e?Be(e):null;return t&&Q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(Et(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(Et(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lI(this),t=new hI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qs("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await iI(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vt(e)||this._popupRedirectResolver;Q(t,this,"argument-error"),this.redirectPersistenceManager=await ur.create(this,[vt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&zv(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function sn(r){return Be(r)}class sh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ry(t=>this.observer=t)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ao={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fI(r){Ao=r}function Of(r){return Ao.loadJS(r)}function pI(){return Ao.recaptchaEnterpriseScript}function mI(){return Ao.gapiScript}function gI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class _I{constructor(){this.enterprise=new yI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class yI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const vI="recaptcha-enterprise",Mf="NO_RECAPTCHA";class II{constructor(e){this.type=vI,this.auth=sn(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Yv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Jv(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Zu(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Mf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _I().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{n(this.auth).then(c=>{if(!t&&Zu(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=pI();l.length!==0&&(l+=c),Of(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function ih(r,e,t,n=!1,s=!1){const i=new II(r);let o;if(s)o=Mf;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return n?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Yi(r,e,t,n,s){var i;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ih(r,e,t,t==="getOobCode");return n(r,o)}else return n(r,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await ih(r,e,t,t==="getOobCode");return n(r,c)}else return Promise.reject(o)})}/**
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
 */function EI(r,e){const t=Cc(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Pn(i,e??{}))return s;st(s,"already-initialized")}return t.initialize({options:e})}function TI(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(vt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function wI(r,e,t){const n=sn(r);Q(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=Lf(e),{host:o,port:c}=bI(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){Q(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),Q(Pn(h,n.config.emulator)&&Pn(f,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=h,n.emulatorConfig=f,n.settings.appVerificationDisabledForTesting=!0,AI()}function Lf(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function bI(r){const e=Lf(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:oh(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:oh(o)}}}function oh(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function AI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Oc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yt("not implemented")}_getIdTokenResponse(e){return yt("not implemented")}_linkToIdToken(e,t){return yt("not implemented")}_getReauthenticationResolver(e){return yt("not implemented")}}async function RI(r,e){return Pt(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function SI(r,e){return Gs(r,"POST","/v1/accounts:signInWithPassword",St(r,e))}async function PI(r,e){return Pt(r,"POST","/v1/accounts:sendOobCode",St(r,e))}async function CI(r,e){return PI(r,e)}/**
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
 */async function kI(r,e){return Gs(r,"POST","/v1/accounts:signInWithEmailLink",St(r,e))}async function VI(r,e){return Gs(r,"POST","/v1/accounts:signInWithEmailLink",St(r,e))}/**
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
 */class Ps extends Oc{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ps(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ps(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yi(e,t,"signInWithPassword",SI);case"emailLink":return kI(e,{email:this._email,oobCode:this._password});default:st(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yi(e,n,"signUpPassword",RI);case"emailLink":return VI(e,{idToken:t,email:this._email,oobCode:this._password});default:st(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function hr(r,e){return Gs(r,"POST","/v1/accounts:signInWithIdp",St(r,e))}/**
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
 */const DI="http://localhost";class Vn extends Oc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):st("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=kc(t,["providerId","signInMethod"]);if(!n||!s)return null;const o=new Vn(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return hr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,hr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,hr(e,t)}buildRequest(){const e={requestUri:DI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$s(t)}return e}}/**
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
 */function xI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NI(r){const e=hs(ds(r)).link,t=e?hs(ds(e)).deep_link_id:null,n=hs(ds(r)).deep_link_id;return(n?hs(ds(n)).link:null)||n||t||e||r}class Mc{constructor(e){var t,n,s,i,o,c;const l=hs(ds(e)),h=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(n=l.oobCode)!==null&&n!==void 0?n:null,p=xI((s=l.mode)!==null&&s!==void 0?s:null);Q(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=NI(e);try{return new Mc(t)}catch{return null}}}/**
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
 */class Nr{constructor(){this.providerId=Nr.PROVIDER_ID}static credential(e,t){return Ps._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Mc.parseLink(t);return Q(n,"argument-error"),Ps._fromEmailAndCode(e,n.code,n.tenantId)}}Nr.PROVIDER_ID="password";Nr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ff{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ws extends Ff{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zt extends Ws{constructor(){super("facebook.com")}static credential(e){return Vn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
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
 */class jt extends Ws{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Vn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return jt.credential(t,n)}catch{return null}}}jt.GOOGLE_SIGN_IN_METHOD="google.com";jt.PROVIDER_ID="google.com";/**
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
 */class qt extends Ws{constructor(){super("github.com")}static credential(e){return Vn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.GITHUB_SIGN_IN_METHOD="github.com";qt.PROVIDER_ID="github.com";/**
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
 */class $t extends Ws{constructor(){super("twitter.com")}static credential(e,t){return Vn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return $t.credential(t,n)}catch{return null}}}$t.TWITTER_SIGN_IN_METHOD="twitter.com";$t.PROVIDER_ID="twitter.com";/**
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
 */async function OI(r,e){return Gs(r,"POST","/v1/accounts:signUp",St(r,e))}/**
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
 */class Dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await rt._fromIdTokenResponse(e,n,s),o=ah(n);return new Dn({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=ah(n);return new Dn({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function ah(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Xi extends Rt{constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Xi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Xi(e,t,n,s)}}function Uf(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xi._fromErrorAndOperation(r,i,e,n):i})}async function MI(r,e,t=!1){const n=await Ss(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Dn._forOperation(r,"link",n)}/**
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
 */async function LI(r,e,t=!1){const{auth:n}=r;if(Xe(n.app))return Promise.reject(Et(n));const s="reauthenticate";try{const i=await Ss(r,Uf(n,s,e,r),t);Q(i.idToken,n,"internal-error");const o=xc(i.idToken);Q(o,n,"internal-error");const{sub:c}=o;return Q(r.uid===c,n,"user-mismatch"),Dn._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&st(n,"user-mismatch"),i}}/**
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
 */async function Bf(r,e,t=!1){if(Xe(r.app))return Promise.reject(Et(r));const n="signIn",s=await Uf(r,n,e),i=await Dn._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}async function FI(r,e){return Bf(sn(r),e)}/**
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
 */async function zf(r){const e=sn(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function UI(r,e,t){const n=sn(r);await Yi(n,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",CI)}async function BI(r,e,t){if(Xe(r.app))return Promise.reject(Et(r));const n=sn(r),o=await Yi(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",OI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&zf(r),l}),c=await Dn._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(c.user),c}function zI(r,e,t){return Xe(r.app)?Promise.reject(Et(r)):FI(Be(r),Nr.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&zf(r),n})}function jI(r,e,t,n){return Be(r).onIdTokenChanged(e,t,n)}function qI(r,e,t){return Be(r).beforeAuthStateChanged(e,t)}function $I(r){return Be(r).signOut()}const Zi="__sak";/**
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
 */class jf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zi,"1"),this.storage.removeItem(Zi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const KI=1e3,GI=10;class qf extends jf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);aI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,GI):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},KI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qf.type="LOCAL";const WI=qf;/**
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
 */class $f extends jf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$f.type="SESSION";const Kf=$f;/**
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
 */function HI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ro{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new Ro(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,i)),l=await HI(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ro.receivers=[];/**
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
 */function Lc(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class QI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Lc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ht(){return window}function JI(r){ht().location.href=r}/**
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
 */function Gf(){return typeof ht().WorkerGlobalScope<"u"&&typeof ht().importScripts=="function"}async function YI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function ZI(){return Gf()?self:null}/**
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
 */const Wf="firebaseLocalStorageDb",eE=1,eo="firebaseLocalStorage",Hf="fbase_key";class Hs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function So(r,e){return r.transaction([eo],e?"readwrite":"readonly").objectStore(eo)}function tE(){const r=indexedDB.deleteDatabase(Wf);return new Hs(r).toPromise()}function Ha(){const r=indexedDB.open(Wf,eE);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(eo,{keyPath:Hf})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(eo)?e(n):(n.close(),await tE(),e(await Ha()))})})}async function ch(r,e,t){const n=So(r,!0).put({[Hf]:e,value:t});return new Hs(n).toPromise()}async function nE(r,e){const t=So(r,!1).get(e),n=await new Hs(t).toPromise();return n===void 0?null:n.value}function lh(r,e){const t=So(r,!0).delete(e);return new Hs(t).toPromise()}const rE=800,sE=3;class Qf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ha(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>sE)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ro._getInstance(ZI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await YI(),!this.activeServiceWorker)return;this.sender=new QI(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ha();return await ch(e,Zi,"1"),await lh(e,Zi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ch(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>nE(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>lh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=So(s,!1).getAll();return new Hs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qf.type="LOCAL";const iE=Qf;new Ks(3e4,6e4);/**
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
 */function oE(r,e){return e?vt(e):(Q(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Fc extends Oc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return hr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function aE(r){return Bf(r.auth,new Fc(r),r.bypassAuthState)}function cE(r){const{auth:e,user:t}=r;return Q(t,e,"internal-error"),LI(t,new Fc(r),r.bypassAuthState)}async function lE(r){const{auth:e,user:t}=r;return Q(t,e,"internal-error"),MI(t,new Fc(r),r.bypassAuthState)}/**
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
 */class Jf{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aE;case"linkViaPopup":case"linkViaRedirect":return lE;case"reauthViaPopup":case"reauthViaRedirect":return cE;default:st(this.auth,"internal-error")}}resolve(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uE=new Ks(2e3,1e4);class ar extends Jf{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,ar.currentPopupAction&&ar.currentPopupAction.cancel(),ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const e=Lc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uE.get())};e()}}ar.currentPopupAction=null;/**
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
 */const hE="pendingRedirect",Di=new Map;class dE extends Jf{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Di.get(this.auth._key());if(!e){try{const n=await fE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Di.set(this.auth._key(),e)}return this.bypassAuthState||Di.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fE(r,e){const t=gE(e),n=mE(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function pE(r,e){Di.set(r._key(),e)}function mE(r){return vt(r._redirectPersistence)}function gE(r){return Vi(hE,r.config.apiKey,r.name)}async function _E(r,e,t=!1){if(Xe(r.app))return Promise.reject(Et(r));const n=sn(r),s=oE(n,e),o=await new dE(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const yE=10*60*1e3;class vE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Yf(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(ut(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yE&&this.cachedEventUids.clear(),this.cachedEventUids.has(uh(e))}saveEventToCache(e){this.cachedEventUids.add(uh(e)),this.lastProcessedEventTime=Date.now()}}function uh(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Yf({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IE(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yf(r);default:return!1}}/**
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
 */async function EE(r,e={}){return Pt(r,"GET","/v1/projects",e)}/**
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
 */const TE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wE=/^https?/;async function bE(r){if(r.config.emulator)return;const{authorizedDomains:e}=await EE(r);for(const t of e)try{if(AE(t))return}catch{}st(r,"unauthorized-domain")}function AE(r){const e=Ga(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!wE.test(t))return!1;if(TE.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const RE=new Ks(3e4,6e4);function hh(){const r=ht().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function SE(r){return new Promise((e,t)=>{var n,s,i;function o(){hh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hh(),t(ut(r,"network-request-failed"))},timeout:RE.get()})}if(!((s=(n=ht().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ht().gapi)===null||i===void 0)&&i.load)o();else{const c=gI("iframefcb");return ht()[c]=()=>{gapi.load?o():t(ut(r,"network-request-failed"))},Of(`${mI()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw xi=null,e})}let xi=null;function PE(r){return xi=xi||SE(r),xi}/**
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
 */const CE=new Ks(5e3,15e3),kE="__/auth/iframe",VE="emulator/auth/iframe",DE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NE(r){const e=r.config;Q(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Dc(e,VE):`https://${r.config.authDomain}/${kE}`,n={apiKey:e.apiKey,appName:r.name,v:xr},s=xE.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${$s(n).slice(1)}`}async function OE(r){const e=await PE(r),t=ht().gapi;return Q(t,r,"internal-error"),e.open({where:document.body,url:NE(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DE,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=ut(r,"network-request-failed"),c=ht().setTimeout(()=>{i(o)},CE.get());function l(){ht().clearTimeout(c),s(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const ME={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LE=500,FE=600,UE="_blank",BE="http://localhost";class dh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zE(r,e,t,n=LE,s=FE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},ME),{width:n.toString(),height:s.toString(),top:i,left:o}),h=Ee().toLowerCase();t&&(c=Pf(h)?UE:t),Rf(h)&&(e=e||BE,l.scrollbars="yes");const f=Object.entries(l).reduce((_,[b,S])=>`${_}${b}=${S},`,"");if(oI(h)&&c!=="_self")return jE(e||"",c),new dh(null);const p=window.open(e||"",c,f);Q(p,r,"popup-blocked");try{p.focus()}catch{}return new dh(p)}function jE(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const qE="__/auth/handler",$E="emulator/auth/handler",KE=encodeURIComponent("fac");async function fh(r,e,t,n,s,i){Q(r.config.authDomain,r,"auth-domain-config-required"),Q(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:xr,eventId:s};if(e instanceof Ff){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",Ay(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ws){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await r._getAppCheckToken(),h=l?`#${KE}=${encodeURIComponent(l)}`:"";return`${GE(r)}?${$s(c).slice(1)}${h}`}function GE({config:r}){return r.emulator?Dc(r,$E):`https://${r.authDomain}/${qE}`}/**
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
 */const Ra="webStorageSupport";class WE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kf,this._completeRedirectFn=_E,this._overrideRedirectResult=pE}async _openPopup(e,t,n,s){var i;wt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await fh(e,t,n,Ga(),s);return zE(e,o,Lc())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await fh(e,t,n,Ga(),s);return JI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(wt(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await OE(e),n=new vE(e);return t.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ra,{type:Ra},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ra];o!==void 0&&t(!!o),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xf()||Sf()||Nc()}}const HE=WE;var ph="@firebase/auth",mh="1.10.1";/**
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
 */class QE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function JE(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YE(r){pr(new Cn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nf(r)},h=new dI(n,s,i,l);return TI(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),pr(new Cn("auth-internal",e=>{const t=sn(e.getProvider("auth").getImmediate());return(n=>new QE(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(ph,mh,JE(r)),Qt(ph,mh,"esm2017")}/**
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
 */const XE=5*60,ZE=uf("authIdTokenMaxAge")||XE;let gh=null;const eT=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>ZE)return;const s=t==null?void 0:t.token;gh!==s&&(gh=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tT(r=mf()){const e=Cc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=EI(r,{popupRedirectResolver:HE,persistence:[iE,WI,Kf]}),n=uf("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=eT(i.toString());qI(t,o,()=>o(t.currentUser)),jI(t,c=>o(c))}}const s=fy("auth");return s&&wI(t,`http://${s}`),t}function nT(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}fI({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=ut("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",nT().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YE("Browser");var _h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jt,Xf;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,g){function y(){}y.prototype=g.prototype,I.D=g.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(E,T,R){for(var v=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)v[ze-2]=arguments[ze];return g.prototype[T].apply(E,v)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,y){y||(y=0);var E=Array(16);if(typeof g=="string")for(var T=0;16>T;++T)E[T]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(T=0;16>T;++T)E[T]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=I.g[0],y=I.g[1],T=I.g[2];var R=I.g[3],v=g+(R^y&(T^R))+E[0]+3614090360&4294967295;g=y+(v<<7&4294967295|v>>>25),v=R+(T^g&(y^T))+E[1]+3905402710&4294967295,R=g+(v<<12&4294967295|v>>>20),v=T+(y^R&(g^y))+E[2]+606105819&4294967295,T=R+(v<<17&4294967295|v>>>15),v=y+(g^T&(R^g))+E[3]+3250441966&4294967295,y=T+(v<<22&4294967295|v>>>10),v=g+(R^y&(T^R))+E[4]+4118548399&4294967295,g=y+(v<<7&4294967295|v>>>25),v=R+(T^g&(y^T))+E[5]+1200080426&4294967295,R=g+(v<<12&4294967295|v>>>20),v=T+(y^R&(g^y))+E[6]+2821735955&4294967295,T=R+(v<<17&4294967295|v>>>15),v=y+(g^T&(R^g))+E[7]+4249261313&4294967295,y=T+(v<<22&4294967295|v>>>10),v=g+(R^y&(T^R))+E[8]+1770035416&4294967295,g=y+(v<<7&4294967295|v>>>25),v=R+(T^g&(y^T))+E[9]+2336552879&4294967295,R=g+(v<<12&4294967295|v>>>20),v=T+(y^R&(g^y))+E[10]+4294925233&4294967295,T=R+(v<<17&4294967295|v>>>15),v=y+(g^T&(R^g))+E[11]+2304563134&4294967295,y=T+(v<<22&4294967295|v>>>10),v=g+(R^y&(T^R))+E[12]+1804603682&4294967295,g=y+(v<<7&4294967295|v>>>25),v=R+(T^g&(y^T))+E[13]+4254626195&4294967295,R=g+(v<<12&4294967295|v>>>20),v=T+(y^R&(g^y))+E[14]+2792965006&4294967295,T=R+(v<<17&4294967295|v>>>15),v=y+(g^T&(R^g))+E[15]+1236535329&4294967295,y=T+(v<<22&4294967295|v>>>10),v=g+(T^R&(y^T))+E[1]+4129170786&4294967295,g=y+(v<<5&4294967295|v>>>27),v=R+(y^T&(g^y))+E[6]+3225465664&4294967295,R=g+(v<<9&4294967295|v>>>23),v=T+(g^y&(R^g))+E[11]+643717713&4294967295,T=R+(v<<14&4294967295|v>>>18),v=y+(R^g&(T^R))+E[0]+3921069994&4294967295,y=T+(v<<20&4294967295|v>>>12),v=g+(T^R&(y^T))+E[5]+3593408605&4294967295,g=y+(v<<5&4294967295|v>>>27),v=R+(y^T&(g^y))+E[10]+38016083&4294967295,R=g+(v<<9&4294967295|v>>>23),v=T+(g^y&(R^g))+E[15]+3634488961&4294967295,T=R+(v<<14&4294967295|v>>>18),v=y+(R^g&(T^R))+E[4]+3889429448&4294967295,y=T+(v<<20&4294967295|v>>>12),v=g+(T^R&(y^T))+E[9]+568446438&4294967295,g=y+(v<<5&4294967295|v>>>27),v=R+(y^T&(g^y))+E[14]+3275163606&4294967295,R=g+(v<<9&4294967295|v>>>23),v=T+(g^y&(R^g))+E[3]+4107603335&4294967295,T=R+(v<<14&4294967295|v>>>18),v=y+(R^g&(T^R))+E[8]+1163531501&4294967295,y=T+(v<<20&4294967295|v>>>12),v=g+(T^R&(y^T))+E[13]+2850285829&4294967295,g=y+(v<<5&4294967295|v>>>27),v=R+(y^T&(g^y))+E[2]+4243563512&4294967295,R=g+(v<<9&4294967295|v>>>23),v=T+(g^y&(R^g))+E[7]+1735328473&4294967295,T=R+(v<<14&4294967295|v>>>18),v=y+(R^g&(T^R))+E[12]+2368359562&4294967295,y=T+(v<<20&4294967295|v>>>12),v=g+(y^T^R)+E[5]+4294588738&4294967295,g=y+(v<<4&4294967295|v>>>28),v=R+(g^y^T)+E[8]+2272392833&4294967295,R=g+(v<<11&4294967295|v>>>21),v=T+(R^g^y)+E[11]+1839030562&4294967295,T=R+(v<<16&4294967295|v>>>16),v=y+(T^R^g)+E[14]+4259657740&4294967295,y=T+(v<<23&4294967295|v>>>9),v=g+(y^T^R)+E[1]+2763975236&4294967295,g=y+(v<<4&4294967295|v>>>28),v=R+(g^y^T)+E[4]+1272893353&4294967295,R=g+(v<<11&4294967295|v>>>21),v=T+(R^g^y)+E[7]+4139469664&4294967295,T=R+(v<<16&4294967295|v>>>16),v=y+(T^R^g)+E[10]+3200236656&4294967295,y=T+(v<<23&4294967295|v>>>9),v=g+(y^T^R)+E[13]+681279174&4294967295,g=y+(v<<4&4294967295|v>>>28),v=R+(g^y^T)+E[0]+3936430074&4294967295,R=g+(v<<11&4294967295|v>>>21),v=T+(R^g^y)+E[3]+3572445317&4294967295,T=R+(v<<16&4294967295|v>>>16),v=y+(T^R^g)+E[6]+76029189&4294967295,y=T+(v<<23&4294967295|v>>>9),v=g+(y^T^R)+E[9]+3654602809&4294967295,g=y+(v<<4&4294967295|v>>>28),v=R+(g^y^T)+E[12]+3873151461&4294967295,R=g+(v<<11&4294967295|v>>>21),v=T+(R^g^y)+E[15]+530742520&4294967295,T=R+(v<<16&4294967295|v>>>16),v=y+(T^R^g)+E[2]+3299628645&4294967295,y=T+(v<<23&4294967295|v>>>9),v=g+(T^(y|~R))+E[0]+4096336452&4294967295,g=y+(v<<6&4294967295|v>>>26),v=R+(y^(g|~T))+E[7]+1126891415&4294967295,R=g+(v<<10&4294967295|v>>>22),v=T+(g^(R|~y))+E[14]+2878612391&4294967295,T=R+(v<<15&4294967295|v>>>17),v=y+(R^(T|~g))+E[5]+4237533241&4294967295,y=T+(v<<21&4294967295|v>>>11),v=g+(T^(y|~R))+E[12]+1700485571&4294967295,g=y+(v<<6&4294967295|v>>>26),v=R+(y^(g|~T))+E[3]+2399980690&4294967295,R=g+(v<<10&4294967295|v>>>22),v=T+(g^(R|~y))+E[10]+4293915773&4294967295,T=R+(v<<15&4294967295|v>>>17),v=y+(R^(T|~g))+E[1]+2240044497&4294967295,y=T+(v<<21&4294967295|v>>>11),v=g+(T^(y|~R))+E[8]+1873313359&4294967295,g=y+(v<<6&4294967295|v>>>26),v=R+(y^(g|~T))+E[15]+4264355552&4294967295,R=g+(v<<10&4294967295|v>>>22),v=T+(g^(R|~y))+E[6]+2734768916&4294967295,T=R+(v<<15&4294967295|v>>>17),v=y+(R^(T|~g))+E[13]+1309151649&4294967295,y=T+(v<<21&4294967295|v>>>11),v=g+(T^(y|~R))+E[4]+4149444226&4294967295,g=y+(v<<6&4294967295|v>>>26),v=R+(y^(g|~T))+E[11]+3174756917&4294967295,R=g+(v<<10&4294967295|v>>>22),v=T+(g^(R|~y))+E[2]+718787259&4294967295,T=R+(v<<15&4294967295|v>>>17),v=y+(R^(T|~g))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(T+(v<<21&4294967295|v>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+R&4294967295}n.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var y=g-this.blockSize,E=this.B,T=this.h,R=0;R<g;){if(T==0)for(;R<=y;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<g;)if(E[T++]=I.charCodeAt(R++),T==this.blockSize){s(this,E),T=0;break}}else for(;R<g;)if(E[T++]=I[R++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=g},n.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var y=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=y&255,y/=256;for(this.u(I),I=Array(16),g=y=0;4>g;++g)for(var E=0;32>E;E+=8)I[y++]=this.g[g]>>>E&255;return I};function i(I,g){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=g(I)}function o(I,g){this.h=g;for(var y=[],E=!0,T=I.length-1;0<=T;T--){var R=I[T]|0;E&&R==g||(y[T]=R,E=!1)}this.g=y}var c={};function l(I){return-128<=I&&128>I?i(I,function(g){return new o([g|0],0>g?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return C(h(-I));for(var g=[],y=1,E=0;I>=y;E++)g[E]=I/y|0,y*=4294967296;return new o(g,0)}function f(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return C(f(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(g,8)),E=p,T=0;T<I.length;T+=8){var R=Math.min(8,I.length-T),v=parseInt(I.substring(T,T+R),g);8>R?(R=h(Math.pow(g,R)),E=E.j(R).add(h(v))):(E=E.j(y),E=E.add(h(v)))}return E}var p=l(0),_=l(1),b=l(16777216);r=o.prototype,r.m=function(){if(D(this))return-C(this).m();for(var I=0,g=1,y=0;y<this.g.length;y++){var E=this.i(y);I+=(0<=E?E:4294967296+E)*g,g*=4294967296}return I},r.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(D(this))return"-"+C(this).toString(I);for(var g=h(Math.pow(I,6)),y=this,E="";;){var T=M(y,g).g;y=k(y,T.j(g));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=T,S(y))return R+E;for(;6>R.length;)R="0"+R;E=R+E}},r.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function D(I){return I.h==-1}r.l=function(I){return I=k(this,I),D(I)?-1:S(I)?0:1};function C(I){for(var g=I.g.length,y=[],E=0;E<g;E++)y[E]=~I.g[E];return new o(y,~I.h).add(_)}r.abs=function(){return D(this)?C(this):this},r.add=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],E=0,T=0;T<=g;T++){var R=E+(this.i(T)&65535)+(I.i(T)&65535),v=(R>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);E=v>>>16,R&=65535,v&=65535,y[T]=v<<16|R}return new o(y,y[y.length-1]&-2147483648?-1:0)};function k(I,g){return I.add(C(g))}r.j=function(I){if(S(this)||S(I))return p;if(D(this))return D(I)?C(this).j(C(I)):C(C(this).j(I));if(D(I))return C(this.j(C(I)));if(0>this.l(b)&&0>I.l(b))return h(this.m()*I.m());for(var g=this.g.length+I.g.length,y=[],E=0;E<2*g;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<I.g.length;T++){var R=this.i(E)>>>16,v=this.i(E)&65535,ze=I.i(T)>>>16,Je=I.i(T)&65535;y[2*E+2*T]+=v*Je,O(y,2*E+2*T),y[2*E+2*T+1]+=R*Je,O(y,2*E+2*T+1),y[2*E+2*T+1]+=v*ze,O(y,2*E+2*T+1),y[2*E+2*T+2]+=R*ze,O(y,2*E+2*T+2)}for(E=0;E<g;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=g;E<2*g;E++)y[E]=0;return new o(y,0)};function O(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function V(I,g){this.g=I,this.h=g}function M(I,g){if(S(g))throw Error("division by zero");if(S(I))return new V(p,p);if(D(I))return g=M(C(I),g),new V(C(g.g),C(g.h));if(D(g))return g=M(I,C(g)),new V(C(g.g),g.h);if(30<I.g.length){if(D(I)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var y=_,E=g;0>=E.l(I);)y=F(y),E=F(E);var T=K(y,1),R=K(E,1);for(E=K(E,2),y=K(y,2);!S(E);){var v=R.add(E);0>=v.l(I)&&(T=T.add(y),R=v),E=K(E,1),y=K(y,1)}return g=k(I,T.j(g)),new V(T,g)}for(T=p;0<=I.l(g);){for(y=Math.max(1,Math.floor(I.m()/g.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),R=h(y),v=R.j(g);D(v)||0<v.l(I);)y-=E,R=h(y),v=R.j(g);S(R)&&(R=_),T=T.add(R),I=k(I,v)}return new V(T,I)}r.A=function(I){return M(this,I).h},r.and=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)&I.i(E);return new o(y,this.h&I.h)},r.or=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)|I.i(E);return new o(y,this.h|I.h)},r.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)^I.i(E);return new o(y,this.h^I.h)};function F(I){for(var g=I.g.length+1,y=[],E=0;E<g;E++)y[E]=I.i(E)<<1|I.i(E-1)>>>31;return new o(y,I.h)}function K(I,g){var y=g>>5;g%=32;for(var E=I.g.length-y,T=[],R=0;R<E;R++)T[R]=0<g?I.i(R+y)>>>g|I.i(R+y+1)<<32-g:I.i(R+y);return new o(T,I.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Xf=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Jt=o}).apply(typeof _h<"u"?_h:typeof self<"u"?self:typeof window<"u"?window:{});var Ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zf,fs,ep,Ni,Qa,tp,np,rp;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ei=="object"&&Ei];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function s(a,u){if(u)e:{var d=n;a=a.split(".");for(var m=0;m<a.length-1;m++){var A=a[m];if(!(A in d))break e;d=d[A]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,A={next:function(){if(!m&&d<a.length){var P=d++;return{value:u(P,a[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),a.apply(u,A)}}return function(){return a.apply(u,arguments)}}function _(a,u,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,_.apply(null,arguments)}function b(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function S(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,A,P){for(var L=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)L[ae-2]=arguments[ae];return u.prototype[A].apply(m,L)}}function D(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function C(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const A=a.length||0,P=m.length||0;a.length=A+P;for(let L=0;L<P;L++)a[A+L]=m[L]}else a.push(m)}}class k{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function O(a){return/^[\s\xa0]*$/.test(a)}function V(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function M(a){return M[" "](a),a}M[" "]=function(){};var F=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function K(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function I(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function g(a){const u={};for(const d in a)u[d]=a[d];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,u){let d,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(d in m)a[d]=m[d];for(let P=0;P<y.length;P++)d=y[P],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function T(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function R(a){c.setTimeout(()=>{throw a},0)}function v(){var a=jn;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ze{constructor(){this.h=this.g=null}add(u,d){const m=Je.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Je=new k(()=>new et,a=>a.reset());class et{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let je,H=!1,jn=new ze,jr=()=>{const a=c.Promise.resolve(void 0);je=()=>{a.then(ti)}};var ti=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(d){R(d)}var u=Je;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}H=!1};function Ye(){this.s=this.s,this.C=this.C}Ye.prototype.s=!1,Ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ne(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}ne.prototype.h=function(){this.defaultPrevented=!0};var xe=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function it(a,u){if(ne.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(F){e:{try{M(u.nodeName);var A=!0;break e}catch{}A=!1}A||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ni[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&it.aa.h.call(this)}}S(it,ne);var ni={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var he="closure_listenable_"+(1e6*Math.random()|0),ri=0;function qn(a,u,d,m,A){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=A,this.key=++ri,this.da=this.fa=!1}function ft(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function kt(a){this.src=a,this.g={},this.h=0}kt.prototype.add=function(a,u,d,m,A){var P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);var L=Qo(a,u,m,A);return-1<L?(u=a[L],d||(u.fa=!1)):(u=new qn(u,this.src,P,!!m,A),u.fa=d,a.push(u)),u};function Vt(a,u){var d=u.type;if(d in a.g){var m=a.g[d],A=Array.prototype.indexOf.call(m,u,void 0),P;(P=0<=A)&&Array.prototype.splice.call(m,A,1),P&&(ft(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Qo(a,u,d,m){for(var A=0;A<a.length;++A){var P=a[A];if(!P.da&&P.listener==u&&P.capture==!!d&&P.ha==m)return A}return-1}var Jo="closure_lm_"+(1e6*Math.random()|0),Yo={};function kl(a,u,d,m,A){if(Array.isArray(u)){for(var P=0;P<u.length;P++)kl(a,u[P],d,m,A);return null}return d=xl(d),a&&a[he]?a.K(u,d,h(m)?!!m.capture:!1,A):kg(a,u,d,!1,m,A)}function kg(a,u,d,m,A,P){if(!u)throw Error("Invalid event type");var L=h(A)?!!A.capture:!!A,ae=Zo(a);if(ae||(a[Jo]=ae=new kt(a)),d=ae.add(u,d,m,L,P),d.proxy)return d;if(m=Vg(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)xe||(A=L),A===void 0&&(A=!1),a.addEventListener(u.toString(),m,A);else if(a.attachEvent)a.attachEvent(Dl(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Vg(){function a(d){return u.call(a.src,a.listener,d)}const u=Dg;return a}function Vl(a,u,d,m,A){if(Array.isArray(u))for(var P=0;P<u.length;P++)Vl(a,u[P],d,m,A);else m=h(m)?!!m.capture:!!m,d=xl(d),a&&a[he]?(a=a.i,u=String(u).toString(),u in a.g&&(P=a.g[u],d=Qo(P,d,m,A),-1<d&&(ft(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete a.g[u],a.h--)))):a&&(a=Zo(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Qo(u,d,m,A)),(d=-1<a?u[a]:null)&&Xo(d))}function Xo(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[he])Vt(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(Dl(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=Zo(u))?(Vt(d,a),d.h==0&&(d.src=null,u[Jo]=null)):ft(a)}}}function Dl(a){return a in Yo?Yo[a]:Yo[a]="on"+a}function Dg(a,u){if(a.da)a=!0;else{u=new it(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&Xo(a),a=d.call(m,u)}return a}function Zo(a){return a=a[Jo],a instanceof kt?a:null}var ea="__closure_events_fn_"+(1e9*Math.random()>>>0);function xl(a){return typeof a=="function"?a:(a[ea]||(a[ea]=function(u){return a.handleEvent(u)}),a[ea])}function Re(){Ye.call(this),this.i=new kt(this),this.M=this,this.F=null}S(Re,Ye),Re.prototype[he]=!0,Re.prototype.removeEventListener=function(a,u,d,m){Vl(this,a,u,d,m)};function Ne(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new ne(u,a);else if(u instanceof ne)u.target=u.target||a;else{var A=u;u=new ne(m,a),E(u,A)}if(A=!0,d)for(var P=d.length-1;0<=P;P--){var L=u.g=d[P];A=si(L,m,!0,u)&&A}if(L=u.g=a,A=si(L,m,!0,u)&&A,A=si(L,m,!1,u)&&A,d)for(P=0;P<d.length;P++)L=u.g=d[P],A=si(L,m,!1,u)&&A}Re.prototype.N=function(){if(Re.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)ft(d[m]);delete a.g[u],a.h--}}this.F=null},Re.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},Re.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function si(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,P=0;P<u.length;++P){var L=u[P];if(L&&!L.da&&L.capture==d){var ae=L.listener,be=L.ha||L.src;L.fa&&Vt(a.i,L),A=ae.call(be,m)!==!1&&A}}return A&&!m.defaultPrevented}function Nl(a,u,d){if(typeof a=="function")d&&(a=_(a,d));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Ol(a){a.g=Nl(()=>{a.g=null,a.i&&(a.i=!1,Ol(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class xg extends Ye{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ol(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qr(a){Ye.call(this),this.h=a,this.g={}}S(qr,Ye);var Ml=[];function Ll(a){K(a.g,function(u,d){this.g.hasOwnProperty(d)&&Xo(u)},a),a.g={}}qr.prototype.N=function(){qr.aa.N.call(this),Ll(this)},qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ta=c.JSON.stringify,Ng=c.JSON.parse,Og=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function na(){}na.prototype.h=null;function Fl(a){return a.h||(a.h=a.i())}function Ul(){}var $r={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ra(){ne.call(this,"d")}S(ra,ne);function sa(){ne.call(this,"c")}S(sa,ne);var un={},Bl=null;function ii(){return Bl=Bl||new Re}un.La="serverreachability";function zl(a){ne.call(this,un.La,a)}S(zl,ne);function Kr(a){const u=ii();Ne(u,new zl(u))}un.STAT_EVENT="statevent";function jl(a,u){ne.call(this,un.STAT_EVENT,a),this.stat=u}S(jl,ne);function Oe(a){const u=ii();Ne(u,new jl(u,a))}un.Ma="timingevent";function ql(a,u){ne.call(this,un.Ma,a),this.size=u}S(ql,ne);function Gr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Wr(){this.g=!0}Wr.prototype.xa=function(){this.g=!1};function Mg(a,u,d,m,A,P){a.info(function(){if(a.g)if(P)for(var L="",ae=P.split("&"),be=0;be<ae.length;be++){var re=ae[be].split("=");if(1<re.length){var Se=re[0];re=re[1];var Pe=Se.split("_");L=2<=Pe.length&&Pe[1]=="type"?L+(Se+"="+re+"&"):L+(Se+"=redacted&")}}else L=null;else L=P;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+u+`
`+d+`
`+L})}function Lg(a,u,d,m,A,P,L){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+u+`
`+d+`
`+P+" "+L})}function $n(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ug(a,d)+(m?" "+m:"")})}function Fg(a,u){a.info(function(){return"TIMEOUT: "+u})}Wr.prototype.info=function(){};function Ug(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(var L=1;L<A.length;L++)A[L]=""}}}}return ta(d)}catch{return u}}var oi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$l={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ia;function ai(){}S(ai,na),ai.prototype.g=function(){return new XMLHttpRequest},ai.prototype.i=function(){return{}},ia=new ai;function Dt(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new qr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Kl}function Kl(){this.i=null,this.g="",this.h=!1}var Gl={},oa={};function aa(a,u,d){a.L=1,a.v=hi(pt(u)),a.m=d,a.P=!0,Wl(a,null)}function Wl(a,u){a.F=Date.now(),ci(a),a.A=pt(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),au(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Kl,a.g=Au(a.j,d?u:null,!a.m),0<a.O&&(a.M=new xg(_(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var A="readystatechange";Array.isArray(A)||(A&&(Ml[0]=A.toString()),A=Ml);for(var P=0;P<A.length;P++){var L=kl(d,A[P],m||u.handleEvent,!1,u.h||u);if(!L)break;u.g[L.key]=L}u=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Kr(),Mg(a.i,a.u,a.A,a.l,a.R,a.m)}Dt.prototype.ca=function(a){a=a.target;const u=this.M;u&&mt(a)==3?u.j():this.Y(a)},Dt.prototype.Y=function(a){try{if(a==this.g)e:{const Pe=mt(this.g);var u=this.g.Ba();const Wn=this.g.Z();if(!(3>Pe)&&(Pe!=3||this.g&&(this.h.h||this.g.oa()||pu(this.g)))){this.J||Pe!=4||u==7||(u==8||0>=Wn?Kr(3):Kr(2)),ca(this);var d=this.g.Z();this.X=d;t:if(Hl(this)){var m=pu(this.g);a="";var A=m.length,P=mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),Hr(this);var L="";break t}this.h.i=new c.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(P&&u==A-1)});m.length=0,this.h.g+=a,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=d==200,Lg(this.i,this.u,this.A,this.l,this.R,Pe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ae,be=this.g;if((ae=be.g?be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(ae)){var re=ae;break t}}re=null}if(d=re)$n(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,la(this,d);else{this.o=!1,this.s=3,Oe(12),hn(this),Hr(this);break e}}if(this.P){d=!0;let tt;for(;!this.J&&this.C<L.length;)if(tt=Bg(this,L),tt==oa){Pe==4&&(this.s=4,Oe(14),d=!1),$n(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==Gl){this.s=4,Oe(15),$n(this.i,this.l,L,"[Invalid Chunk]"),d=!1;break}else $n(this.i,this.l,tt,null),la(this,tt);if(Hl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pe!=4||L.length!=0||this.h.h||(this.s=1,Oe(16),d=!1),this.o=this.o&&d,!d)$n(this.i,this.l,L,"[Invalid Chunked Response]"),hn(this),Hr(this);else if(0<L.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),ma(Se),Se.M=!0,Oe(11))}}else $n(this.i,this.l,L,null),la(this,L);Pe==4&&hn(this),this.o&&!this.J&&(Pe==4?Eu(this.j,this):(this.o=!1,ci(this)))}else r_(this.g),d==400&&0<L.indexOf("Unknown SID")?(this.s=3,Oe(12)):(this.s=0,Oe(13)),hn(this),Hr(this)}}}catch{}finally{}};function Hl(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Bg(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?oa:(d=Number(u.substring(d,m)),isNaN(d)?Gl:(m+=1,m+d>u.length?oa:(u=u.slice(m,m+d),a.C=m+d,u)))}Dt.prototype.cancel=function(){this.J=!0,hn(this)};function ci(a){a.S=Date.now()+a.I,Ql(a,a.I)}function Ql(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Gr(_(a.ba,a),u)}function ca(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Dt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Fg(this.i,this.A),this.L!=2&&(Kr(),Oe(17)),hn(this),this.s=2,Hr(this)):Ql(this,this.S-a)};function Hr(a){a.j.G==0||a.J||Eu(a.j,a)}function hn(a){ca(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Ll(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function la(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||ua(d.h,a))){if(!a.K&&ua(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)_i(d),mi(d);else break e;pa(d),Oe(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=Gr(_(d.Za,d),6e3));if(1>=Xl(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else fn(d,11)}else if((a.K||d.g==a)&&_i(d),!O(u))for(A=d.Da.g.parse(u),u=0;u<A.length;u++){let re=A[u];if(d.T=re[0],re=re[1],d.G==2)if(re[0]=="c"){d.K=re[1],d.ia=re[2];const Se=re[3];Se!=null&&(d.la=Se,d.j.info("VER="+d.la));const Pe=re[4];Pe!=null&&(d.Aa=Pe,d.j.info("SVER="+d.Aa));const Wn=re[5];Wn!=null&&typeof Wn=="number"&&0<Wn&&(m=1.5*Wn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const tt=a.g;if(tt){const vi=tt.g?tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vi){var P=m.h;P.g||vi.indexOf("spdy")==-1&&vi.indexOf("quic")==-1&&vi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ha(P,P.h),P.h=null))}if(m.D){const ga=tt.g?tt.g.getResponseHeader("X-HTTP-Session-Id"):null;ga&&(m.ya=ga,le(m.I,m.D,ga))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var L=a;if(m.qa=bu(m,m.J?m.ia:null,m.W),L.K){Zl(m.h,L);var ae=L,be=m.L;be&&(ae.I=be),ae.B&&(ca(ae),ci(ae)),m.g=L}else vu(m);0<d.i.length&&gi(d)}else re[0]!="stop"&&re[0]!="close"||fn(d,7);else d.G==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?fn(d,7):fa(d):re[0]!="noop"&&d.l&&d.l.ta(re),d.v=0)}}Kr(4)}catch{}}var zg=class{constructor(a,u){this.g=a,this.map=u}};function Jl(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Xl(a){return a.h?1:a.g?a.g.size:0}function ua(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function ha(a,u){a.g?a.g.add(u):a.h=u}function Zl(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Jl.prototype.cancel=function(){if(this.i=eu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function eu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return D(a.i)}function jg(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function qg(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function tu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=qg(a),m=jg(a),A=m.length,P=0;P<A;P++)u.call(void 0,m[P],d&&d[P],a)}var nu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $g(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),A=null;if(0<=m){var P=a[d].substring(0,m);A=a[d].substring(m+1)}else P=a[d];u(P,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function dn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof dn){this.h=a.h,li(this,a.j),this.o=a.o,this.g=a.g,ui(this,a.s),this.l=a.l;var u=a.i,d=new Yr;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),ru(this,d),this.m=a.m}else a&&(u=String(a).match(nu))?(this.h=!1,li(this,u[1]||"",!0),this.o=Qr(u[2]||""),this.g=Qr(u[3]||"",!0),ui(this,u[4]),this.l=Qr(u[5]||"",!0),ru(this,u[6]||"",!0),this.m=Qr(u[7]||"")):(this.h=!1,this.i=new Yr(null,this.h))}dn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Jr(u,su,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Jr(u,su,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Jr(d,d.charAt(0)=="/"?Wg:Gg,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Jr(d,Qg)),a.join("")};function pt(a){return new dn(a)}function li(a,u,d){a.j=d?Qr(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function ui(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function ru(a,u,d){u instanceof Yr?(a.i=u,Jg(a.i,a.h)):(d||(u=Jr(u,Hg)),a.i=new Yr(u,a.h))}function le(a,u,d){a.i.set(u,d)}function hi(a){return le(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Qr(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Jr(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Kg),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Kg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var su=/[#\/\?@]/g,Gg=/[#\?:]/g,Wg=/[#\?]/g,Hg=/[#\?@]/g,Qg=/#/g;function Yr(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function xt(a){a.g||(a.g=new Map,a.h=0,a.i&&$g(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}r=Yr.prototype,r.add=function(a,u){xt(this),this.i=null,a=Kn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function iu(a,u){xt(a),u=Kn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function ou(a,u){return xt(a),u=Kn(a,u),a.g.has(u)}r.forEach=function(a,u){xt(this),this.g.forEach(function(d,m){d.forEach(function(A){a.call(u,A,m,this)},this)},this)},r.na=function(){xt(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const A=a[m];for(let P=0;P<A.length;P++)d.push(u[m])}return d},r.V=function(a){xt(this);let u=[];if(typeof a=="string")ou(this,a)&&(u=u.concat(this.g.get(Kn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},r.set=function(a,u){return xt(this),this.i=null,a=Kn(this,a),ou(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},r.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function au(a,u,d){iu(a,u),0<d.length&&(a.i=null,a.g.set(Kn(a,u),D(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const P=encodeURIComponent(String(m)),L=this.V(m);for(m=0;m<L.length;m++){var A=P;L[m]!==""&&(A+="="+encodeURIComponent(String(L[m]))),a.push(A)}}return this.i=a.join("&")};function Kn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Jg(a,u){u&&!a.j&&(xt(a),a.i=null,a.g.forEach(function(d,m){var A=m.toLowerCase();m!=A&&(iu(this,m),au(this,A,d))},a)),a.j=u}function Yg(a,u){const d=new Wr;if(c.Image){const m=new Image;m.onload=b(Nt,d,"TestLoadImage: loaded",!0,u,m),m.onerror=b(Nt,d,"TestLoadImage: error",!1,u,m),m.onabort=b(Nt,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=b(Nt,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function Xg(a,u){const d=new Wr,m=new AbortController,A=setTimeout(()=>{m.abort(),Nt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(P=>{clearTimeout(A),P.ok?Nt(d,"TestPingServer: ok",!0,u):Nt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),Nt(d,"TestPingServer: error",!1,u)})}function Nt(a,u,d,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(d)}catch{}}function Zg(){this.g=new Og}function e_(a,u,d){const m=d||"";try{tu(a,function(A,P){let L=A;h(A)&&(L=ta(A)),u.push(m+P+"="+encodeURIComponent(L))})}catch(A){throw u.push(m+"type="+encodeURIComponent("_badmap")),A}}function di(a){this.l=a.Ub||null,this.j=a.eb||!1}S(di,na),di.prototype.g=function(){return new fi(this.l,this.j)},di.prototype.i=function(a){return function(){return a}}({});function fi(a,u){Re.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(fi,Re),r=fi.prototype,r.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Zr(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xr(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Zr(this)),this.g&&(this.readyState=3,Zr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function cu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Xr(this):Zr(this),this.readyState==3&&cu(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,Xr(this))},r.Qa=function(a){this.g&&(this.response=a,Xr(this))},r.ga=function(){this.g&&Xr(this)};function Xr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Zr(a)}r.setRequestHeader=function(a,u){this.u.append(a,u)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Zr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function lu(a){let u="";return K(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function da(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=lu(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):le(a,u,d))}function me(a){Re.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(me,Re);var t_=/^https?$/i,n_=["POST","PUT"];r=me.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ia.g(),this.v=this.o?Fl(this.o):Fl(ia),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(P){uu(this,P);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)d.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),A=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(n_,u,void 0))||m||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,L]of d)this.g.setRequestHeader(P,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fu(this),this.u=!0,this.g.send(a),this.u=!1}catch(P){uu(this,P)}};function uu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,hu(a),pi(a)}function hu(a){a.A||(a.A=!0,Ne(a,"complete"),Ne(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ne(this,"complete"),Ne(this,"abort"),pi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pi(this,!0)),me.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?du(this):this.bb())},r.bb=function(){du(this)};function du(a){if(a.h&&typeof o<"u"&&(!a.v[1]||mt(a)!=4||a.Z()!=2)){if(a.u&&mt(a)==4)Nl(a.Ea,0,a);else if(Ne(a,"readystatechange"),mt(a)==4){a.h=!1;try{const L=a.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=L===0){var A=String(a.D).match(nu)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),m=!t_.test(A?A.toLowerCase():"")}d=m}if(d)Ne(a,"complete"),Ne(a,"success");else{a.m=6;try{var P=2<mt(a)?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.Z()+"]",hu(a)}}finally{pi(a)}}}}function pi(a,u){if(a.g){fu(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||Ne(a,"ready");try{d.onreadystatechange=m}catch{}}}function fu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function mt(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<mt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Ng(u)}};function pu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function r_(a){const u={};a=(a.g&&2<=mt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(O(a[m]))continue;var d=T(a[m]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=u[A]||[];u[A]=P,P.push(d)}I(u,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function es(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function mu(a){this.Aa=0,this.i=[],this.j=new Wr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=es("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=es("baseRetryDelayMs",5e3,a),this.cb=es("retryDelaySeedMs",1e4,a),this.Wa=es("forwardChannelMaxRetries",2,a),this.wa=es("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Jl(a&&a.concurrentRequestLimit),this.Da=new Zg,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=mu.prototype,r.la=8,r.G=1,r.connect=function(a,u,d,m){Oe(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=bu(this,null,this.W),gi(this)};function fa(a){if(gu(a),a.G==3){var u=a.U++,d=pt(a.I);if(le(d,"SID",a.K),le(d,"RID",u),le(d,"TYPE","terminate"),ts(a,d),u=new Dt(a,a.j,u),u.L=2,u.v=hi(pt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=Au(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ci(u)}wu(a)}function mi(a){a.g&&(ma(a),a.g.cancel(),a.g=null)}function gu(a){mi(a),a.u&&(c.clearTimeout(a.u),a.u=null),_i(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function gi(a){if(!Yl(a.h)&&!a.s){a.s=!0;var u=a.Ga;je||jr(),H||(je(),H=!0),jn.add(u,a),a.B=0}}function s_(a,u){return Xl(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Gr(_(a.Ga,a,u),Tu(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const A=new Dt(this,this.j,a);let P=this.o;if(this.S&&(P?(P=g(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(A.H=P,P=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=yu(this,A,u),d=pt(this.I),le(d,"RID",a),le(d,"CVER",22),this.D&&le(d,"X-HTTP-Session-Id",this.D),ts(this,d),P&&(this.O?u="headers="+encodeURIComponent(String(lu(P)))+"&"+u:this.m&&da(d,this.m,P)),ha(this.h,A),this.Ua&&le(d,"TYPE","init"),this.P?(le(d,"$req",u),le(d,"SID","null"),A.T=!0,aa(A,d,null)):aa(A,d,u),this.G=2}}else this.G==3&&(a?_u(this,a):this.i.length==0||Yl(this.h)||_u(this))};function _u(a,u){var d;u?d=u.l:d=a.U++;const m=pt(a.I);le(m,"SID",a.K),le(m,"RID",d),le(m,"AID",a.T),ts(a,m),a.m&&a.o&&da(m,a.m,a.o),d=new Dt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=yu(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ha(a.h,d),aa(d,m,u)}function ts(a,u){a.H&&K(a.H,function(d,m){le(u,m,d)}),a.l&&tu({},function(d,m){le(u,m,d)})}function yu(a,u,d){d=Math.min(a.i.length,d);var m=a.l?_(a.l.Na,a.l,a):null;e:{var A=a.i;let P=-1;for(;;){const L=["count="+d];P==-1?0<d?(P=A[0].g,L.push("ofs="+P)):P=0:L.push("ofs="+P);let ae=!0;for(let be=0;be<d;be++){let re=A[be].g;const Se=A[be].map;if(re-=P,0>re)P=Math.max(0,A[be].g-100),ae=!1;else try{e_(Se,L,"req"+re+"_")}catch{m&&m(Se)}}if(ae){m=L.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function vu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;je||jr(),H||(je(),H=!0),jn.add(u,a),a.v=0}}function pa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Gr(_(a.Fa,a),Tu(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,Iu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Gr(_(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Oe(10),mi(this),Iu(this))};function ma(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Iu(a){a.g=new Dt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=pt(a.qa);le(u,"RID","rpc"),le(u,"SID",a.K),le(u,"AID",a.T),le(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&le(u,"TO",a.ja),le(u,"TYPE","xmlhttp"),ts(a,u),a.m&&a.o&&da(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=hi(pt(u)),d.m=null,d.P=!0,Wl(d,a)}r.Za=function(){this.C!=null&&(this.C=null,mi(this),pa(this),Oe(19))};function _i(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Eu(a,u){var d=null;if(a.g==u){_i(a),ma(a),a.g=null;var m=2}else if(ua(a.h,u))d=u.D,Zl(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var A=a.B;m=ii(),Ne(m,new ql(m,d)),gi(a)}else vu(a);else if(A=u.s,A==3||A==0&&0<u.X||!(m==1&&s_(a,u)||m==2&&pa(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),A){case 1:fn(a,5);break;case 4:fn(a,10);break;case 3:fn(a,6);break;default:fn(a,2)}}}function Tu(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function fn(a,u){if(a.j.info("Error code "+u),u==2){var d=_(a.fb,a),m=a.Xa;const A=!m;m=new dn(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||li(m,"https"),hi(m),A?Yg(m.toString(),d):Xg(m.toString(),d)}else Oe(2);a.G=0,a.l&&a.l.sa(u),wu(a),gu(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function wu(a){if(a.G=0,a.ka=[],a.l){const u=eu(a.h);(u.length!=0||a.i.length!=0)&&(C(a.ka,u),C(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function bu(a,u,d){var m=d instanceof dn?pt(d):new dn(d);if(m.g!="")u&&(m.g=u+"."+m.g),ui(m,m.s);else{var A=c.location;m=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var P=new dn(null);m&&li(P,m),u&&(P.g=u),A&&ui(P,A),d&&(P.l=d),m=P}return d=a.D,u=a.ya,d&&u&&le(m,d,u),le(m,"VER",a.la),ts(a,m),m}function Au(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new me(new di({eb:d})):new me(a.pa),u.Ha(a.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ru(){}r=Ru.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function yi(){}yi.prototype.g=function(a,u){return new qe(a,u)};function qe(a,u){Re.call(this),this.g=new mu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!O(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!O(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Gn(this)}S(qe,Re),qe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qe.prototype.close=function(){fa(this.g)},qe.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=ta(a),a=d);u.i.push(new zg(u.Ya++,a)),u.G==3&&gi(u)},qe.prototype.N=function(){this.g.l=null,delete this.j,fa(this.g),delete this.g,qe.aa.N.call(this)};function Su(a){ra.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}S(Su,ra);function Pu(){sa.call(this),this.status=1}S(Pu,sa);function Gn(a){this.g=a}S(Gn,Ru),Gn.prototype.ua=function(){Ne(this.g,"a")},Gn.prototype.ta=function(a){Ne(this.g,new Su(a))},Gn.prototype.sa=function(a){Ne(this.g,new Pu)},Gn.prototype.ra=function(){Ne(this.g,"b")},yi.prototype.createWebChannel=yi.prototype.g,qe.prototype.send=qe.prototype.o,qe.prototype.open=qe.prototype.m,qe.prototype.close=qe.prototype.close,rp=function(){return new yi},np=function(){return ii()},tp=un,Qa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},oi.NO_ERROR=0,oi.TIMEOUT=8,oi.HTTP_ERROR=6,Ni=oi,$l.COMPLETE="complete",ep=$l,Ul.EventType=$r,$r.OPEN="a",$r.CLOSE="b",$r.ERROR="c",$r.MESSAGE="d",Re.prototype.listen=Re.prototype.K,fs=Ul,me.prototype.listenOnce=me.prototype.L,me.prototype.getLastError=me.prototype.Ka,me.prototype.getLastErrorCode=me.prototype.Ba,me.prototype.getStatus=me.prototype.Z,me.prototype.getResponseJson=me.prototype.Oa,me.prototype.getResponseText=me.prototype.oa,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Ha,Zf=me}).apply(typeof Ei<"u"?Ei:typeof self<"u"?self:typeof window<"u"?window:{});const yh="@firebase/firestore",vh="4.7.11";/**
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
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
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
 */let Or="11.6.1";/**
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
 */const xn=new Sc("@firebase/firestore");function nr(){return xn.logLevel}function N(r,...e){if(xn.logLevel<=Z.DEBUG){const t=e.map(Uc);xn.debug(`Firestore (${Or}): ${r}`,...t)}}function _e(r,...e){if(xn.logLevel<=Z.ERROR){const t=e.map(Uc);xn.error(`Firestore (${Or}): ${r}`,...t)}}function Cs(r,...e){if(xn.logLevel<=Z.WARN){const t=e.map(Uc);xn.warn(`Firestore (${Or}): ${r}`,...t)}}function Uc(r){if(typeof r=="string")return r;try{/**
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
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
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
 */function z(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,sp(r,n,t)}function sp(r,e,t){let n=`FIRESTORE (${Or}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw _e(n),new Error(n)}function G(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||sp(e,s,n)}function $(r,e){return r}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Rt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class rT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ke.UNAUTHENTICATED))}shutdown(){}}class iT{constructor(e){this.t=e,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0,42304);let n=this.i;const s=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let i=new Yt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(G(typeof n.accessToken=="string",31837,{l:n}),new rT(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string",2055,{h:e}),new ke(e)}}class oT{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class aT{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new oT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ih{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){G(this.o===void 0,3512);const n=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ih(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ih(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function lT(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */function ip(){return new TextEncoder}/**
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
 */class op{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=lT(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function J(r,e){return r<e?-1:r>e?1:0}function Ja(r,e){let t=0;for(;t<r.length&&t<e.length;){const n=r.codePointAt(t),s=e.codePointAt(t);if(n!==s){if(n<128&&s<128)return J(n,s);{const i=ip(),o=uT(i.encode(Eh(r,t)),i.encode(Eh(e,t)));return o!==0?o:J(n,s)}}t+=n>65535?2:1}return J(r.length,e.length)}function Eh(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function uT(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return J(r[t],e[t]);return J(r.length,e.length)}function mr(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function ap(r){return r+"\0"}/**
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
 */const Th=-62135596800,wh=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*wh);return new pe(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Th)throw new B(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wh}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Th;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{static fromTimestamp(e){return new W(e)}static min(){return new W(new pe(0,0))}static max(){return new W(new pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const bh="__name__";class ot{constructor(e,t,n){t===void 0?t=0:t>e.length&&z(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&z(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return ot.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ot?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=ot.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return J(e.length,t.length)}static compareSegments(e,t){const n=ot.isNumericId(e),s=ot.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?ot.extractNumericId(e).compare(ot.extractNumericId(t)):Ja(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jt.fromString(e.substring(4,e.length-2))}}class se extends ot{construct(e,t,n){return new se(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new B(x.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new se(t)}static emptyPath(){return new se([])}}const hT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fe extends ot{construct(e,t,n){return new fe(e,t,n)}static isValidIdentifier(e){return hT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bh}static keyField(){return new fe([bh])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new B(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new B(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(n+=c,s++):(i(),s++)}if(i(),o)throw new B(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new fe(t)}static emptyPath(){return new fe([])}}/**
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
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(se.fromString(e))}static fromName(e){return new U(se.fromString(e).popFirst(5))}static empty(){return new U(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new se(e.slice()))}}/**
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
 */const gr=-1;class to{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function Ya(r){return r.fields.find(e=>e.kind===2)}function _n(r){return r.fields.filter(e=>e.kind!==2)}to.UNKNOWN_ID=-1;class Oi{constructor(e,t){this.fieldPath=e,this.kind=t}}class ks{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ks(0,Qe.min())}}function cp(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=W.fromTimestamp(n===1e9?new pe(t+1,0):new pe(t,n));return new Qe(s,U.empty(),e)}function lp(r){return new Qe(r.readTime,r.key,gr)}class Qe{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Qe(W.min(),U.empty(),gr)}static max(){return new Qe(W.max(),U.empty(),gr)}}function Bc(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(r.documentKey,e.documentKey),t!==0?t:J(r.largestBatchId,e.largestBatchId))}/**
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
 */const up="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function on(r){if(r.code!==x.FAILED_PRECONDITION||r.message!==up)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new w((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof w?t:w.resolve(t)}catch(t){return w.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):w.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):w.reject(t)}static resolve(e){return new w((t,n)=>{t(e)})}static reject(e){return new w((t,n)=>{n(e)})}static waitFor(e){return new w((t,n)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>n(l))}),o=!0,i===s&&t()})}static or(e){let t=w.resolve(!1);for(const n of e)t=t.next(s=>s?w.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new w((n,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++c,c===i&&n(o)},f=>s(f))}})}static doWhile(e,t){return new w((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}/**
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
 */const Ke="SimpleDb";class Po{static open(e,t,n,s){try{return new Po(t,e.transaction(s,n))}catch(i){throw new vs(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Yt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new vs(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=zc(n.target.error);this.S.reject(new vs(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(N(Ke,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new fT(t)}}class Xt{static delete(e){return N(Ke,"Removing database:",e),vn(cf().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!df())return!1;if(Xt.F())return!0;const e=Ee(),t=Xt.M(e),n=0<t&&t<10,s=dp(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.B=n,this.L=null,Xt.M(Ee())===12.2&&_e("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(N(Ke,"Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new vs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new B(x.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new B(x.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new vs(e,o))},s.onupgradeneeded=i=>{N(Ke,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;if(this.L!==null&&this.L!==i.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${i.oldVersion}, event.newVersion=${i.newVersion}, db.version=${o.version}`);this.B.q(o,s.transaction,i.oldVersion,this.version).next(()=>{N(Ke,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{const n=t.target;this.L=n.version},{passive:!0})),this.$&&(this.db.onversionchange=t=>this.$(t)),this.db}U(e){this.$=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const c=Po.open(this.db,e,i?"readonly":"readwrite",n),l=s(c).next(h=>(c.v(),h)).catch(h=>(c.abort(h),w.reject(h))).toPromise();return l.catch(()=>{}),await c.D,l}catch(c){const l=c,h=l.name!=="FirebaseError"&&o<3;if(N(Ke,"Transaction failed with error:",l.message,"Retrying:",h),this.close(),!h)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function dp(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class dT{constructor(e){this.K=e,this.W=!1,this.G=null}get isDone(){return this.W}get j(){return this.G}set cursor(e){this.K=e}done(){this.W=!0}H(e){this.G=e}delete(){return vn(this.K.delete())}}class vs extends B{constructor(e,t){super(x.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function an(r){return r.name==="IndexedDbTransactionError"}class fT{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(N(Ke,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(N(Ke,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),vn(n)}add(e){return N(Ke,"ADD",this.store.name,e,e),vn(this.store.add(e))}get(e){return vn(this.store.get(e)).next(t=>(t===void 0&&(t=null),N(Ke,"GET",this.store.name,e,t),t))}delete(e){return N(Ke,"DELETE",this.store.name,e),vn(this.store.delete(e))}count(){return N(Ke,"COUNT",this.store.name),vn(this.store.count())}J(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new w((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(n),o=[];return this.Y(i,(c,l)=>{o.push(l)}).next(()=>o)}}Z(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new w((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}})}X(e,t){N(Ke,"DELETE ALL",this.store.name);const n=this.options(e,t);n.ee=!1;const s=this.cursor(n);return this.Y(s,(i,o,c)=>c.delete())}te(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.Y(s,t)}ne(e){const t=this.cursor({});return new w((n,s)=>{t.onerror=i=>{const o=zc(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():n()}):n()}})}Y(e,t){const n=[];return new w((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new dT(c),h=t(c.primaryKey,c.value,l);if(h instanceof w){const f=h.catch(p=>(l.done(),w.reject(p)));n.push(f)}l.isDone?s():l.j===null?c.continue():c.continue(l.j)}}).next(()=>w.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.ee?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function vn(r){return new w((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=zc(n.target.error);t(s)}})}let Ah=!1;function zc(r){const e=Xt.M(Ee());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ah||(Ah=!0,setTimeout(()=>{throw n},0)),n}}return r}const Is="IndexBackfiller";class pT{constructor(e,t){this.asyncQueue=e,this.re=t,this.task=null}start(){this.ie(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ie(e){N(Is,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.re.se();N(Is,`Documents written: ${t}`)}catch(t){an(t)?N(Is,"Ignoring IndexedDB error during index backfill: ",t):await on(t)}await this.ie(6e4)})}}class mT{constructor(e,t){this.localStore=e,this.persistence=t}async se(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.oe(t,e))}oe(e,t){const n=new Set;let s=t,i=!0;return w.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return N(Is,`Processing collection: ${o}`),this._e(e,o,s).next(c=>{s-=c,n.add(o)});i=!1})).next(()=>t-s)}_e(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ae(s,i)).next(c=>(N(Is,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}ae(e,t){let n=e;return t.changes.forEach((s,i)=>{const o=lp(i);Bc(o,n)>0&&(n=o)}),new Qe(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Fe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ue(n),this.ce=n=>t.writeSequenceNumber(n))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Fe.le=-1;/**
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
 */const An=-1;function Co(r){return r==null}function Vs(r){return r===0&&1/r==-1/0}function fp(r){return typeof r=="number"&&Number.isInteger(r)&&!Vs(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const no="";function De(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Rh(e)),e=gT(r.get(t),e);return Rh(e)}function gT(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case no:t+="";break;default:t+=i}}return t}function Rh(r){return r+no+""}function ct(r){const e=r.length;if(G(e>=2,64408,{path:r}),e===2)return G(r.charAt(0)===no&&r.charAt(1)==="",56145,{path:r}),se.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf(no,i);switch((o<0||o>t)&&z(50515,{path:r}),r.charAt(o+1)){case"":const c=r.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:z(61167,{path:r})}i=o+2}return new se(n)}/**
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
 */const yn="remoteDocuments",Qs="owner",Qn="owner",Ds="mutationQueues",_T="userId",nt="mutations",Sh="batchId",wn="userMutationsIndex",Ph=["userId","batchId"];/**
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
 */function Mi(r,e){return[r,De(e)]}function pp(r,e,t){return[r,De(e),t]}const yT={},_r="documentMutations",ro="remoteDocumentsV14",vT=["prefixPath","collectionGroup","readTime","documentId"],Li="documentKeyIndex",IT=["prefixPath","collectionGroup","documentId"],mp="collectionGroupIndex",ET=["collectionGroup","readTime","prefixPath","documentId"],xs="remoteDocumentGlobal",Xa="remoteDocumentGlobalKey",yr="targets",gp="queryTargetsIndex",TT=["canonicalId","targetId"],vr="targetDocuments",wT=["targetId","path"],jc="documentTargetsIndex",bT=["path","targetId"],so="targetGlobalKey",Rn="targetGlobal",Ns="collectionParents",AT=["collectionId","parent"],Ir="clientMetadata",RT="clientId",ko="bundles",ST="bundleId",Vo="namedQueries",PT="name",qc="indexConfiguration",CT="indexId",Za="collectionGroupIndex",kT="collectionGroup",io="indexState",VT=["indexId","uid"],_p="sequenceNumberIndex",DT=["uid","sequenceNumber"],oo="indexEntries",xT=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],yp="documentKeyIndex",NT=["indexId","uid","orderedDocumentKey"],Do="documentOverlays",OT=["userId","collectionPath","documentId"],ec="collectionPathOverlayIndex",MT=["userId","collectionPath","largestBatchId"],vp="collectionGroupOverlayIndex",LT=["userId","collectionGroup","largestBatchId"],$c="globals",FT="name",Ip=[Ds,nt,_r,yn,yr,Qs,Rn,vr,Ir,xs,Ns,ko,Vo],UT=[...Ip,Do],Ep=[Ds,nt,_r,ro,yr,Qs,Rn,vr,Ir,xs,Ns,ko,Vo,Do],Tp=Ep,Kc=[...Tp,qc,io,oo],BT=Kc,zT=[...Kc,$c];/**
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
 */class tc extends hp{constructor(e,t){super(),this.he=e,this.currentSequenceNumber=t}}function Te(r,e){const t=$(r);return Xt.N(t.he,e)}/**
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
 */function Ch(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Bn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function wp(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ce{constructor(e,t){this.comparator=e,this.root=t||Ae.EMPTY}insert(e,t){return new ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ti(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ti(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ti(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ti(this.root,e,this.comparator,!0)}}class Ti{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Ae.RED,this.left=s??Ae.EMPTY,this.right=i??Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Ae(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ae.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw z(27949);return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new Ae(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ie{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new kh(this.data.getIterator())}getIteratorFrom(e){return new kh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ie(this.comparator);return t.data=e,t}}class kh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Jn(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Ze{constructor(e){this.fields=e,e.sort(fe.comparator)}static empty(){return new Ze([])}unionWith(e){let t=new ie(fe.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mr(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class bp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bp("Invalid base64 string: "+i):i}}(e);return new ye(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const jT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bt(r){if(G(!!r,39018),typeof r=="string"){let e=0;const t=jT.exec(r);if(G(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ue(r.seconds),nanos:ue(r.nanos)}}function ue(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function At(r){return typeof r=="string"?ye.fromBase64String(r):ye.fromUint8Array(r)}/**
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
 */const Ap="server_timestamp",Rp="__type__",Sp="__previous_value__",Pp="__local_write_time__";function Gc(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Rp])===null||t===void 0?void 0:t.stringValue)===Ap}function xo(r){const e=r.mapValue.fields[Sp];return Gc(e)?xo(e):e}function Os(r){const e=bt(r.mapValue.fields[Pp].timestampValue);return new pe(e.seconds,e.nanos)}/**
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
 */class qT{constructor(e,t,n,s,i,o,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}const ao="(default)";class Nn{constructor(e,t){this.projectId=e,this.database=t||ao}static empty(){return new Nn("","")}get isDefaultDatabase(){return this.database===ao}isEqual(e){return e instanceof Nn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Wc="__type__",Cp="__max__",Gt={mapValue:{fields:{__type__:{stringValue:Cp}}}},Hc="__vector__",Er="value",Fi={nullValue:"NULL_VALUE"};function en(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Gc(r)?4:kp(r)?9007199254740991:No(r)?10:11:z(28295,{value:r})}function dt(r,e){if(r===e)return!0;const t=en(r);if(t!==en(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Os(r).isEqual(Os(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=bt(s.timestampValue),c=bt(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return At(s.bytesValue).isEqual(At(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return ue(s.geoPointValue.latitude)===ue(i.geoPointValue.latitude)&&ue(s.geoPointValue.longitude)===ue(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ue(s.integerValue)===ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ue(s.doubleValue),c=ue(i.doubleValue);return o===c?Vs(o)===Vs(c):isNaN(o)&&isNaN(c)}return!1}(r,e);case 9:return mr(r.arrayValue.values||[],e.arrayValue.values||[],dt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Ch(o)!==Ch(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!dt(o[l],c[l])))return!1;return!0}(r,e);default:return z(52216,{left:r})}}function Ms(r,e){return(r.values||[]).find(t=>dt(t,e))!==void 0}function tn(r,e){if(r===e)return 0;const t=en(r),n=en(e);if(t!==n)return J(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(r.booleanValue,e.booleanValue);case 2:return function(i,o){const c=ue(i.integerValue||i.doubleValue),l=ue(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(r,e);case 3:return Vh(r.timestampValue,e.timestampValue);case 4:return Vh(Os(r),Os(e));case 5:return Ja(r.stringValue,e.stringValue);case 6:return function(i,o){const c=At(i),l=At(o);return c.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=J(c[h],l[h]);if(f!==0)return f}return J(c.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const c=J(ue(i.latitude),ue(o.latitude));return c!==0?c:J(ue(i.longitude),ue(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Dh(r.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},_=o.fields||{},b=(c=p[Er])===null||c===void 0?void 0:c.arrayValue,S=(l=_[Er])===null||l===void 0?void 0:l.arrayValue,D=J(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Dh(b,S)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===Gt.mapValue&&o===Gt.mapValue)return 0;if(i===Gt.mapValue)return 1;if(o===Gt.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const _=Ja(l[p],f[p]);if(_!==0)return _;const b=tn(c[l[p]],h[f[p]]);if(b!==0)return b}return J(l.length,f.length)}(r.mapValue,e.mapValue);default:throw z(23264,{Pe:t})}}function Vh(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return J(r,e);const t=bt(r),n=bt(e),s=J(t.seconds,n.seconds);return s!==0?s:J(t.nanos,n.nanos)}function Dh(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=tn(t[s],n[s]);if(i)return i}return J(t.length,n.length)}function Tr(r){return nc(r)}function nc(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=bt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return At(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return U.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=nc(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${nc(t.fields[o])}`;return s+"}"}(r.mapValue):z(61005,{value:r})}function Ui(r){switch(en(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xo(r);return e?16+Ui(e):16;case 5:return 2*r.stringValue.length;case 6:return At(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+Ui(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Bn(n.fields,(i,o)=>{s+=i.length+Ui(o)}),s}(r.mapValue);default:throw z(13486,{value:r})}}function Qc(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function rc(r){return!!r&&"integerValue"in r}function Ls(r){return!!r&&"arrayValue"in r}function xh(r){return!!r&&"nullValue"in r}function Nh(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Bi(r){return!!r&&"mapValue"in r}function No(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Wc])===null||t===void 0?void 0:t.stringValue)===Hc}function Es(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Bn(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Es(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Es(r.arrayValue.values[t]);return e}return Object.assign({},r)}function kp(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Cp}const Vp={mapValue:{fields:{[Wc]:{stringValue:Hc},[Er]:{arrayValue:{}}}}};function $T(r){return"nullValue"in r?Fi:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Qc(Nn.empty(),U.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?No(r)?Vp:{mapValue:{}}:z(35942,{value:r})}function KT(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Qc(Nn.empty(),U.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Vp:"mapValue"in r?No(r)?{mapValue:{}}:Gt:z(61959,{value:r})}function Oh(r,e){const t=tn(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Mh(r,e){const t=tn(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class Le{constructor(e){this.value=e}static empty(){return new Le({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Bi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Es(t)}setAll(e){let t=fe.emptyPath(),n={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,n,s),n={},s=[],t=c.popLast()}o?n[c.lastSegment()]=Es(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());Bi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Bi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Bn(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new Le(Es(this.value))}}function Dp(r){const e=[];return Bn(r.fields,(t,n)=>{const s=new fe([t]);if(Bi(n)){const i=Dp(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ze(e)}/**
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
 */class ge{constructor(e,t,n,s,i,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ge(e,0,W.min(),W.min(),W.min(),Le.empty(),0)}static newFoundDocument(e,t,n,s){return new ge(e,1,t,W.min(),n,s,0)}static newNoDocument(e,t){return new ge(e,2,t,W.min(),W.min(),Le.empty(),0)}static newUnknownDocument(e,t){return new ge(e,3,t,W.min(),W.min(),Le.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Le.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wr{constructor(e,t){this.position=e,this.inclusive=t}}function Lh(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=U.comparator(U.fromName(o.referenceValue),t.key):n=tn(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Fh(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!dt(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class co{constructor(e,t="asc"){this.field=e,this.dir=t}}function GT(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class xp{}class ee extends xp{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new WT(e,t,n):t==="array-contains"?new JT(e,n):t==="in"?new Up(e,n):t==="not-in"?new YT(e,n):t==="array-contains-any"?new XT(e,n):new ee(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new HT(e,n):new QT(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(tn(t,this.value)):t!==null&&en(this.value)===en(t)&&this.matchesComparison(tn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class oe extends xp{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new oe(e,t)}matches(e){return br(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function br(r){return r.op==="and"}function sc(r){return r.op==="or"}function Jc(r){return Np(r)&&br(r)}function Np(r){for(const e of r.filters)if(e instanceof oe)return!1;return!0}function ic(r){if(r instanceof ee)return r.field.canonicalString()+r.op.toString()+Tr(r.value);if(Jc(r))return r.filters.map(e=>ic(e)).join(",");{const e=r.filters.map(t=>ic(t)).join(",");return`${r.op}(${e})`}}function Op(r,e){return r instanceof ee?function(n,s){return s instanceof ee&&n.op===s.op&&n.field.isEqual(s.field)&&dt(n.value,s.value)}(r,e):r instanceof oe?function(n,s){return s instanceof oe&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,c)=>i&&Op(o,s.filters[c]),!0):!1}(r,e):void z(19439)}function Mp(r,e){const t=r.filters.concat(e);return oe.create(t,r.op)}function Lp(r){return r instanceof ee?function(t){return`${t.field.canonicalString()} ${t.op} ${Tr(t.value)}`}(r):r instanceof oe?function(t){return t.op.toString()+" {"+t.getFilters().map(Lp).join(" ,")+"}"}(r):"Filter"}class WT extends ee{constructor(e,t,n){super(e,t,n),this.key=U.fromName(n.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class HT extends ee{constructor(e,t){super(e,"in",t),this.keys=Fp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class QT extends ee{constructor(e,t){super(e,"not-in",t),this.keys=Fp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Fp(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>U.fromName(n.referenceValue))}class JT extends ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ls(t)&&Ms(t.arrayValue,this.value)}}class Up extends ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ms(this.value.arrayValue,t)}}class YT extends ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ms(this.value.arrayValue,t)}}class XT extends ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ls(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Ms(this.value.arrayValue,n))}}/**
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
 */class ZT{constructor(e,t=null,n=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Ie=null}}function oc(r,e=null,t=[],n=[],s=null,i=null,o=null){return new ZT(r,e,t,n,s,i,o)}function On(r){const e=$(r);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>ic(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Co(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Tr(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Tr(n)).join(",")),e.Ie=t}return e.Ie}function Js(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!GT(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Op(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Fh(r.startAt,e.startAt)&&Fh(r.endAt,e.endAt)}function lo(r){return U.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function uo(r,e){return r.filters.filter(t=>t instanceof ee&&t.field.isEqual(e))}function Uh(r,e,t){let n=Fi,s=!0;for(const i of uo(r,e)){let o=Fi,c=!0;switch(i.op){case"<":case"<=":o=$T(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=Fi}Oh({value:n,inclusive:s},{value:o,inclusive:c})<0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Oh({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function Bh(r,e,t){let n=Gt,s=!0;for(const i of uo(r,e)){let o=Gt,c=!0;switch(i.op){case">=":case">":o=KT(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Gt}Mh({value:n,inclusive:s},{value:o,inclusive:c})>0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Mh({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class Oo{constructor(e,t=null,n=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Bp(r,e,t,n,s,i,o,c){return new Oo(r,e,t,n,s,i,o,c)}function Mo(r){return new Oo(r)}function zh(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ew(r){return r.collectionGroup!==null}function Ts(r){const e=$(r);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ie(fe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new co(i,n))}),t.has(fe.keyField().canonicalString())||e.Ee.push(new co(fe.keyField(),n))}return e.Ee}function We(r){const e=$(r);return e.de||(e.de=tw(e,Ts(r))),e.de}function tw(r,e){if(r.limitType==="F")return oc(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new co(s.field,i)});const t=r.endAt?new wr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new wr(r.startAt.position,r.startAt.inclusive):null;return oc(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function ac(r,e,t){return new Oo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Lo(r,e){return Js(We(r),We(e))&&r.limitType===e.limitType}function zp(r){return`${On(We(r))}|lt:${r.limitType}`}function rr(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Lp(s)).join(", ")}]`),Co(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Tr(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Tr(s)).join(",")),`Target(${n})`}(We(r))}; limitType=${r.limitType})`}function Ys(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):U.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of Ts(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,c,l){const h=Lh(o,c,l);return o.inclusive?h<=0:h<0}(n.startAt,Ts(n),s)||n.endAt&&!function(o,c,l){const h=Lh(o,c,l);return o.inclusive?h>=0:h>0}(n.endAt,Ts(n),s))}(r,e)}function jp(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function qp(r){return(e,t)=>{let n=!1;for(const s of Ts(r)){const i=nw(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function nw(r,e,t){const n=r.field.isKeyField()?U.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?tn(l,h):z(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return z(19790,{direction:r.dir})}}/**
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
 */class Ct{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Bn(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return wp(this.inner)}size(){return this.innerSize}}/**
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
 */const rw=new ce(U.comparator);function Ge(){return rw}const $p=new ce(U.comparator);function ps(...r){let e=$p;for(const t of r)e=e.insert(t.key,t);return e}function Kp(r){let e=$p;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function lt(){return ws()}function Gp(){return ws()}function ws(){return new Ct(r=>r.toString(),(r,e)=>r.isEqual(e))}const sw=new ce(U.comparator),iw=new ie(U.comparator);function X(...r){let e=iw;for(const t of r)e=e.add(t);return e}const ow=new ie(J);function Yc(){return ow}/**
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
 */function Xc(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vs(e)?"-0":e}}function Wp(r){return{integerValue:""+r}}function aw(r,e){return fp(e)?Wp(e):Xc(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Fo{constructor(){this._=void 0}}function cw(r,e,t){return r instanceof Fs?function(s,i){const o={fields:{[Rp]:{stringValue:Ap},[Pp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Gc(i)&&(i=xo(i)),i&&(o.fields[Sp]=i),{mapValue:o}}(t,e):r instanceof Ar?Qp(r,e):r instanceof Rr?Jp(r,e):function(s,i){const o=Hp(s,i),c=jh(o)+jh(s.Re);return rc(o)&&rc(s.Re)?Wp(c):Xc(s.serializer,c)}(r,e)}function lw(r,e,t){return r instanceof Ar?Qp(r,e):r instanceof Rr?Jp(r,e):t}function Hp(r,e){return r instanceof Us?function(n){return rc(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class Fs extends Fo{}class Ar extends Fo{constructor(e){super(),this.elements=e}}function Qp(r,e){const t=Yp(e);for(const n of r.elements)t.some(s=>dt(s,n))||t.push(n);return{arrayValue:{values:t}}}class Rr extends Fo{constructor(e){super(),this.elements=e}}function Jp(r,e){let t=Yp(e);for(const n of r.elements)t=t.filter(s=>!dt(s,n));return{arrayValue:{values:t}}}class Us extends Fo{constructor(e,t){super(),this.serializer=e,this.Re=t}}function jh(r){return ue(r.integerValue||r.doubleValue)}function Yp(r){return Ls(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class uw{constructor(e,t){this.field=e,this.transform=t}}function hw(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof Ar&&s instanceof Ar||n instanceof Rr&&s instanceof Rr?mr(n.elements,s.elements,dt):n instanceof Us&&s instanceof Us?dt(n.Re,s.Re):n instanceof Fs&&s instanceof Fs}(r.transform,e.transform)}class dw{constructor(e,t){this.version=e,this.transformResults=t}}class Ue{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ue}static exists(e){return new Ue(void 0,e)}static updateTime(e){return new Ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zi(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Uo{}function Xp(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Bo(r.key,Ue.none()):new Mr(r.key,r.data,Ue.none());{const t=r.data,n=Le.empty();let s=new ie(fe.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new cn(r.key,n,new Ze(s.toArray()),Ue.none())}}function fw(r,e,t){r instanceof Mr?function(s,i,o){const c=s.value.clone(),l=$h(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):r instanceof cn?function(s,i,o){if(!zi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=$h(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Zp(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function bs(r,e,t,n){return r instanceof Mr?function(i,o,c,l){if(!zi(i.precondition,o))return c;const h=i.value.clone(),f=Kh(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof cn?function(i,o,c,l){if(!zi(i.precondition,o))return c;const h=Kh(i.fieldTransforms,l,o),f=o.data;return f.setAll(Zp(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(i,o,c){return zi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(r,e,t)}function pw(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Hp(n.transform,s||null);i!=null&&(t===null&&(t=Le.empty()),t.set(n.field,i))}return t||null}function qh(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&mr(n,s,(i,o)=>hw(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Mr extends Uo{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class cn extends Uo{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Zp(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function $h(r,e,t){const n=new Map;G(r.length===t.length,32656,{Ve:t.length,me:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,c=e.data.field(i.field);n.set(i.field,lw(o,c,t[s]))}return n}function Kh(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,cw(i,o,e))}return n}class Bo extends Uo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class em extends Uo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Zc{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&fw(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=bs(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=bs(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Gp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=Xp(o,c);l!==null&&n.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),X())}isEqual(e){return this.batchId===e.batchId&&mr(this.mutations,e.mutations,(t,n)=>qh(t,n))&&mr(this.baseMutations,e.baseMutations,(t,n)=>qh(t,n))}}class el{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){G(e.mutations.length===n.length,58842,{fe:e.mutations.length,ge:n.length});let s=function(){return sw}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new el(e,t,n,s)}}/**
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
 */class tl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class mw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ve,te;function gw(r){switch(r){case x.OK:return z(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return z(15467,{code:r})}}function tm(r){if(r===void 0)return _e("GRPC error has no .code"),x.UNKNOWN;switch(r){case ve.OK:return x.OK;case ve.CANCELLED:return x.CANCELLED;case ve.UNKNOWN:return x.UNKNOWN;case ve.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case ve.INTERNAL:return x.INTERNAL;case ve.UNAVAILABLE:return x.UNAVAILABLE;case ve.UNAUTHENTICATED:return x.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case ve.NOT_FOUND:return x.NOT_FOUND;case ve.ALREADY_EXISTS:return x.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return x.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case ve.ABORTED:return x.ABORTED;case ve.OUT_OF_RANGE:return x.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return x.UNIMPLEMENTED;case ve.DATA_LOSS:return x.DATA_LOSS;default:return z(39323,{code:r})}}(te=ve||(ve={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const _w=new Jt([4294967295,4294967295],0);function Gh(r){const e=ip().encode(r),t=new Xf;return t.update(e),new Uint8Array(t.digest())}function Wh(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Jt([t,n],0),new Jt([s,i],0)]}class nl{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ms(`Invalid padding: ${t}`);if(n<0)throw new ms(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new ms(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new ms(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=Jt.fromNumber(this.pe)}we(e,t,n){let s=e.add(t.multiply(Jt.fromNumber(n)));return s.compare(_w)===1&&(s=new Jt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Gh(e),[n,s]=Wh(t);for(let i=0;i<this.hashCount;i++){const o=this.we(n,s,i);if(!this.be(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new nl(i,s,t);return n.forEach(c=>o.insert(c)),o}insert(e){if(this.pe===0)return;const t=Gh(e),[n,s]=Wh(t);for(let i=0;i<this.hashCount;i++){const o=this.we(n,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ms extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xs{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Zs.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Xs(W.min(),s,new ce(J),Ge(),X())}}class Zs{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Zs(n,t,X(),X(),X())}}/**
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
 */class ji{constructor(e,t,n,s){this.De=e,this.removedTargetIds=t,this.key=n,this.ve=s}}class nm{constructor(e,t){this.targetId=e,this.Ce=t}}class rm{constructor(e,t,n=ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Hh{constructor(){this.Fe=0,this.Me=Qh(),this.xe=ye.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=X(),t=X(),n=X();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:z(38017,{changeType:i})}}),new Zs(this.xe,this.Oe,e,t,n)}Qe(){this.Ne=!1,this.Me=Qh()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,G(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class yw{constructor(e){this.ze=e,this.je=new Map,this.He=Ge(),this.Je=wi(),this.Ye=wi(),this.Ze=new ce(J)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const n=this.rt(t);switch(e.state){case 0:this.it(t)&&n.ke(e.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(e.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(t);break;case 3:this.it(t)&&(n.Ge(),n.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),n.ke(e.resumeToken));break;default:z(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((n,s)=>{this.it(s)&&t(s)})}ot(e){const t=e.targetId,n=e.Ce.count,s=this._t(t);if(s){const i=s.target;if(lo(i))if(n===0){const o=new U(i.path);this.tt(t,o,ge.newNoDocument(o,W.min()))}else G(n===1,20013,{expectedCount:n});else{const o=this.ut(t);if(o!==n){const c=this.ct(e),l=c?this.lt(c,e,o):1;if(l!==0){this.st(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=At(n).toUint8Array()}catch(l){if(l instanceof bp)return Cs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new nl(o,s,i)}catch(l){return Cs(l instanceof ms?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.pe===0?null:c}lt(e,t,n){return t.Ce.count===n-this.Tt(e,t.targetId)?0:2}Tt(e,t){const n=this.ze.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.ze.Pt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.tt(t,i,null),s++)}),s}It(e){const t=new Map;this.je.forEach((i,o)=>{const c=this._t(o);if(c){if(i.current&&lo(c.target)){const l=new U(c.target.path);this.Et(l).has(o)||this.dt(o,l)||this.tt(o,l,ge.newNoDocument(l,e))}i.Le&&(t.set(o,i.qe()),i.Qe())}});let n=X();this.Ye.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this._t(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new Xs(e,t,this.Ze,this.He,n);return this.He=Ge(),this.Je=wi(),this.Ye=wi(),this.Ze=new ce(J),s}et(e,t){if(!this.it(e))return;const n=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,n),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,n){if(!this.it(e))return;const s=this.rt(e);this.dt(e,t)?s.$e(t,1):s.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),n&&(this.He=this.He.insert(t,n))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Hh,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new ie(J),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ie(J),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Hh),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function wi(){return new ce(U.comparator)}function Qh(){return new ce(U.comparator)}const vw={asc:"ASCENDING",desc:"DESCENDING"},Iw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ew={and:"AND",or:"OR"};class Tw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function cc(r,e){return r.useProto3Json||Co(e)?e:{value:e}}function Sr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sm(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function ww(r,e){return Sr(r,e.toTimestamp())}function Me(r){return G(!!r,49232),W.fromTimestamp(function(t){const n=bt(t);return new pe(n.seconds,n.nanos)}(r))}function rl(r,e){return lc(r,e).canonicalString()}function lc(r,e){const t=function(s){return new se(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function im(r){const e=se.fromString(r);return G(pm(e),10190,{key:e.toString()}),e}function ho(r,e){return rl(r.databaseId,e.path)}function Sn(r,e){const t=im(e);if(t.get(1)!==r.databaseId.projectId)throw new B(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new B(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new U(cm(t))}function om(r,e){return rl(r.databaseId,e)}function am(r){const e=im(r);return e.length===4?se.emptyPath():cm(e)}function uc(r){return new se(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function cm(r){return G(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Jh(r,e,t){return{name:ho(r,e),fields:t.value.mapValue.fields}}function bw(r,e,t){const n=Sn(r,e.name),s=Me(e.updateTime),i=e.createTime?Me(e.createTime):W.min(),o=new Le({mapValue:{fields:e.fields}}),c=ge.newFoundDocument(n,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function Aw(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:z(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(G(f===void 0||typeof f=="string",58123),ye.fromBase64String(f||"")):(G(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ye.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?x.UNKNOWN:tm(h.code);return new B(f,h.message||"")}(o);t=new rm(n,s,i,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=Sn(r,n.document.name),i=Me(n.document.updateTime),o=n.document.createTime?Me(n.document.createTime):W.min(),c=new Le({mapValue:{fields:n.document.fields}}),l=ge.newFoundDocument(s,i,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new ji(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=Sn(r,n.document),i=n.readTime?Me(n.readTime):W.min(),o=ge.newNoDocument(s,i),c=n.removedTargetIds||[];t=new ji([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=Sn(r,n.document),i=n.removedTargetIds||[];t=new ji([],i,s,null)}else{if(!("filter"in e))return z(11601,{Vt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new mw(s,i),c=n.targetId;t=new nm(c,o)}}return t}function fo(r,e){let t;if(e instanceof Mr)t={update:Jh(r,e.key,e.value)};else if(e instanceof Bo)t={delete:ho(r,e.key)};else if(e instanceof cn)t={update:Jh(r,e.key,e.data),updateMask:Vw(e.fieldMask)};else{if(!(e instanceof em))return z(16599,{ft:e.type});t={verify:ho(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const c=o.transform;if(c instanceof Fs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ar)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Rr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Us)return{fieldPath:o.field.canonicalString(),increment:c.Re};throw z(20930,{transform:o.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ww(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z(27497)}(r,e.precondition)),t}function hc(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Ue.updateTime(Me(i.updateTime)):i.exists!==void 0?Ue.exists(i.exists):Ue.none()}(e.currentDocument):Ue.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)G(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),l=new Fs;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new Ar(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new Rr(f)}else"increment"in c?l=new Us(o,c.increment):z(16584,{proto:c});const h=fe.fromServerFormat(c.fieldPath);return new uw(h,l)}(r,s)):[];if(e.update){e.update.name;const s=Sn(r,e.update.name),i=new Le({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const h=l.fieldPaths||[];return new Ze(h.map(f=>fe.fromServerFormat(f)))}(e.updateMask);return new cn(s,i,o,t,n)}return new Mr(s,i,t,n)}if(e.delete){const s=Sn(r,e.delete);return new Bo(s,t)}if(e.verify){const s=Sn(r,e.verify);return new em(s,t)}return z(1463,{proto:e})}function Rw(r,e){return r&&r.length>0?(G(e!==void 0,14353),r.map(t=>function(s,i){let o=s.updateTime?Me(s.updateTime):Me(i);return o.isEqual(W.min())&&(o=Me(i)),new dw(o,s.transformResults||[])}(t,e))):[]}function lm(r,e){return{documents:[om(r,e.path)]}}function um(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=om(r,s);const i=function(h){if(h.length!==0)return fm(oe.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:sr(_.field),direction:Pw(_.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=cc(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:t,parent:s}}function hm(r){let e=am(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){G(n===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const _=dm(p);return _ instanceof oe&&Jc(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(_=>function(S){return new co(ir(S.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(p){let _;return _=typeof p=="object"?p.value:p,Co(_)?null:_}(t.limit));let l=null;t.startAt&&(l=function(p){const _=!!p.before,b=p.values||[];return new wr(b,_)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const _=!p.before,b=p.values||[];return new wr(b,_)}(t.endAt)),Bp(e,s,o,i,c,"F",l,h)}function Sw(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function dm(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=ir(t.unaryFilter.field);return ee.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ir(t.unaryFilter.field);return ee.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ir(t.unaryFilter.field);return ee.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ir(t.unaryFilter.field);return ee.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return z(61313);default:return z(60726)}}(r):r.fieldFilter!==void 0?function(t){return ee.create(ir(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return z(58110);default:return z(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return oe.create(t.compositeFilter.filters.map(n=>dm(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z(1026)}}(t.compositeFilter.op))}(r):z(30097,{filter:r})}function Pw(r){return vw[r]}function Cw(r){return Iw[r]}function kw(r){return Ew[r]}function sr(r){return{fieldPath:r.canonicalString()}}function ir(r){return fe.fromServerFormat(r.fieldPath)}function fm(r){return r instanceof ee?function(t){if(t.op==="=="){if(Nh(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NAN"}};if(xh(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Nh(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NOT_NAN"}};if(xh(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sr(t.field),op:Cw(t.op),value:t.value}}}(r):r instanceof oe?function(t){const n=t.getFilters().map(s=>fm(s));return n.length===1?n[0]:{compositeFilter:{op:kw(t.op),filters:n}}}(r):z(54877,{filter:r})}function Vw(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function pm(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class It{constructor(e,t,n,s,i=W.min(),o=W.min(),c=ye.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new It(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class mm{constructor(e){this.wt=e}}function Dw(r,e){let t;if(e.document)t=bw(r.wt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=U.fromSegments(e.noDocument.path),s=Ln(e.noDocument.readTime);t=ge.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return z(56709);{const n=U.fromSegments(e.unknownDocument.path),s=Ln(e.unknownDocument.version);t=ge.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new pe(s[0],s[1]);return W.fromTimestamp(i)}(e.readTime)),t}function Yh(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:po(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,o){return{name:ho(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Sr(i,o.version.toTimestamp()),createTime:Sr(i,o.createTime.toTimestamp())}}(r.wt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:Mn(e.version)};else{if(!e.isUnknownDocument())return z(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:Mn(e.version)}}return n}function po(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function Mn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ln(r){const e=new pe(r.seconds,r.nanoseconds);return W.fromTimestamp(e)}function In(r,e){const t=(e.baseMutations||[]).map(i=>hc(r.wt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>hc(r.wt,i)),s=pe.fromMillis(e.localWriteTimeMs);return new Zc(e.batchId,s,t,n)}function gs(r){const e=Ln(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?Ln(r.lastLimboFreeSnapshotVersion):W.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){const o=i.documents.length;return G(o===1,1966,{count:o}),We(Mo(am(i.documents[0])))}(r.query):function(i){return We(hm(i))}(r.query),new It(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,ye.fromBase64String(r.resumeToken))}function gm(r,e){const t=Mn(e.snapshotVersion),n=Mn(e.lastLimboFreeSnapshotVersion);let s;s=lo(e.target)?lm(r.wt,e.target):um(r.wt,e.target).gt;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:On(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function _m(r){const e=hm({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ac(e,e.limit,"L"):e}function Sa(r,e){return new tl(e.largestBatchId,hc(r.wt,e.overlayMutation))}function Xh(r,e){const t=e.path.lastSegment();return[r,De(e.path.popLast()),t]}function Zh(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:Mn(n.readTime),documentKey:De(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class xw{getBundleMetadata(e,t){return ed(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:Ln(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return ed(e).put(function(s){return{bundleId:s.id,createTime:Mn(Me(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return td(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:_m(i.bundledQuery),readTime:Ln(i.readTime)}}(n)})}saveNamedQuery(e,t){return td(e).put(function(s){return{name:s.name,readTime:Mn(Me(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function ed(r){return Te(r,ko)}function td(r){return Te(r,Vo)}/**
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
 */class zo{constructor(e,t){this.serializer=e,this.userId=t}static bt(e,t){const n=t.uid||"";return new zo(e,n)}getOverlay(e,t){return ss(e).get(Xh(this.userId,t)).next(n=>n?Sa(this.serializer,n):null)}getOverlays(e,t){const n=lt();return w.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,o)=>{const c=new tl(t,o);s.push(this.St(e,c))}),w.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(o=>s.add(De(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(ss(e).X(ec,c))}),w.waitFor(i)}getOverlaysForCollection(e,t,n){const s=lt(),i=De(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ss(e).J(ec,o).next(c=>{for(const l of c){const h=Sa(this.serializer,l);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=lt();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ss(e).te({index:vp,range:c},(l,h,f)=>{const p=Sa(this.serializer,h);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>i)}St(e,t){return ss(e).put(function(s,i,o){const[c,l,h]=Xh(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:fo(s.wt,o.mutation)}}(this.serializer,this.userId,t))}}function ss(r){return Te(r,Do)}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Nw{Dt(e){return Te(e,$c)}getSessionToken(e){return this.Dt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?ye.fromUint8Array(n):ye.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class En{constructor(){}vt(e,t){this.Ct(e,t),t.Ft()}Ct(e,t){if("nullValue"in e)this.Mt(t,5);else if("booleanValue"in e)this.Mt(t,10),t.xt(e.booleanValue?1:0);else if("integerValue"in e)this.Mt(t,15),t.xt(ue(e.integerValue));else if("doubleValue"in e){const n=ue(e.doubleValue);isNaN(n)?this.Mt(t,13):(this.Mt(t,15),Vs(n)?t.xt(0):t.xt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Mt(t,20),typeof n=="string"&&(n=bt(n)),t.Ot(`${n.seconds||""}`),t.xt(n.nanos||0)}else if("stringValue"in e)this.Nt(e.stringValue,t),this.Bt(t);else if("bytesValue"in e)this.Mt(t,30),t.Lt(At(e.bytesValue)),this.Bt(t);else if("referenceValue"in e)this.kt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Mt(t,45),t.xt(n.latitude||0),t.xt(n.longitude||0)}else"mapValue"in e?kp(e)?this.Mt(t,Number.MAX_SAFE_INTEGER):No(e)?this.qt(e.mapValue,t):(this.Qt(e.mapValue,t),this.Bt(t)):"arrayValue"in e?(this.$t(e.arrayValue,t),this.Bt(t)):z(19022,{Ut:e})}Nt(e,t){this.Mt(t,25),this.Kt(e,t)}Kt(e,t){t.Ot(e)}Qt(e,t){const n=e.fields||{};this.Mt(t,55);for(const s of Object.keys(n))this.Nt(s,t),this.Ct(n[s],t)}qt(e,t){var n,s;const i=e.fields||{};this.Mt(t,53);const o=Er,c=((s=(n=i[o].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.Mt(t,15),t.xt(ue(c)),this.Nt(o,t),this.Ct(i[o],t)}$t(e,t){const n=e.values||[];this.Mt(t,50);for(const s of n)this.Ct(s,t)}kt(e,t){this.Mt(t,37),U.fromName(e).path.forEach(n=>{this.Mt(t,60),this.Kt(n,t)})}Mt(e,t){e.xt(t)}Bt(e){e.xt(2)}}En.Wt=new En;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=255;function Ow(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function nd(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const o=Ow(255&n[i]);if(s+=o,o!==8)break}return s}(r);return Math.ceil(e/8)}class Mw{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Gt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.zt(n.value),n=t.next();this.jt()}Ht(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Jt(n.value),n=t.next();this.Yt()}Zt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.zt(n);else if(n<2048)this.zt(960|n>>>6),this.zt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.zt(480|n>>>12),this.zt(128|63&n>>>6),this.zt(128|63&n);else{const s=t.codePointAt(0);this.zt(240|s>>>18),this.zt(128|63&s>>>12),this.zt(128|63&s>>>6),this.zt(128|63&s)}}this.jt()}Xt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Yt()}en(e){const t=this.tn(e),n=nd(t);this.nn(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}rn(e){const t=this.tn(e),n=nd(t);this.nn(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}sn(){this._n(Yn),this._n(255)}an(){this.un(Yn),this.un(255)}reset(){this.position=0}seed(e){this.nn(e.length),this.buffer.set(e,this.position),this.position+=e.length}cn(){return this.buffer.slice(0,this.position)}tn(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}zt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===Yn?(this._n(Yn),this._n(0)):this._n(t)}Jt(e){const t=255&e;t===0?(this.un(0),this.un(255)):t===Yn?(this.un(Yn),this.un(0)):this.un(e)}jt(){this._n(0),this._n(1)}Yt(){this.un(0),this.un(1)}_n(e){this.nn(1),this.buffer[this.position++]=e}un(e){this.nn(1),this.buffer[this.position++]=~e}nn(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class Lw{constructor(e){this.ln=e}Lt(e){this.ln.Gt(e)}Ot(e){this.ln.Zt(e)}xt(e){this.ln.en(e)}Ft(){this.ln.sn()}}class Fw{constructor(e){this.ln=e}Lt(e){this.ln.Ht(e)}Ot(e){this.ln.Xt(e)}xt(e){this.ln.rn(e)}Ft(){this.ln.an()}}class is{constructor(){this.ln=new Mw,this.hn=new Lw(this.ln),this.Pn=new Fw(this.ln)}seed(e){this.ln.seed(e)}Tn(e){return e===0?this.hn:this.Pn}cn(){return this.ln.cn()}reset(){this.ln.reset()}}/**
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
 */class Tn{constructor(e,t,n,s){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=s}In(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Tn(this.indexId,this.documentKey,this.arrayValue,n)}}function Mt(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=rd(r.arrayValue,e.arrayValue),t!==0?t:(t=rd(r.directionalValue,e.directionalValue),t!==0?t:U.comparator(r.documentKey,e.documentKey)))}function rd(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
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
 */class sd{constructor(e){this.En=new ie((t,n)=>fe.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.An=[];for(const t of e.filters){const n=t;n.isInequality()?this.En=this.En.add(n):this.An.push(n)}}get Rn(){return this.En.size>1}Vn(e){if(G(e.collectionGroup===this.collectionId,49279),this.Rn)return!1;const t=Ya(e);if(t!==void 0&&!this.mn(t))return!1;const n=_n(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.mn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.En.size>0){const c=this.En.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=n[i];if(!this.fn(c,l)||!this.gn(this.dn[o++],l))return!1}++i}for(;i<n.length;++i){const c=n[i];if(o>=this.dn.length||!this.gn(this.dn[o++],c))return!1}return!0}pn(){if(this.Rn)return null;let e=new ie(fe.comparator);const t=[];for(const n of this.An)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Oi(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Oi(n.field,0))}for(const n of this.dn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Oi(n.field,n.dir==="asc"?0:1)));return new to(to.UNKNOWN_ID,this.collectionId,t,ks.empty())}mn(e){for(const t of this.An)if(this.fn(t,e))return!0;return!1}fn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}gn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function ym(r){var e,t;if(G(r instanceof ee||r instanceof oe,20012),r instanceof ee){if(r instanceof Up){const s=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>ee.create(r.field,"==",i)))||[];return oe.create(s,"or")}return r}const n=r.filters.map(s=>ym(s));return oe.create(n,r.op)}function Uw(r){if(r.getFilters().length===0)return[];const e=pc(ym(r));return G(vm(e),7391),dc(e)||fc(e)?[e]:e.getFilters()}function dc(r){return r instanceof ee}function fc(r){return r instanceof oe&&Jc(r)}function vm(r){return dc(r)||fc(r)||function(t){if(t instanceof oe&&sc(t)){for(const n of t.getFilters())if(!dc(n)&&!fc(n))return!1;return!0}return!1}(r)}function pc(r){if(G(r instanceof ee||r instanceof oe,34018),r instanceof ee)return r;if(r.filters.length===1)return pc(r.filters[0]);const e=r.filters.map(n=>pc(n));let t=oe.create(e,r.op);return t=mo(t),vm(t)?t:(G(t instanceof oe,64498),G(br(t),40251),G(t.filters.length>1,57927),t.filters.reduce((n,s)=>sl(n,s)))}function sl(r,e){let t;return G(r instanceof ee||r instanceof oe,38388),G(e instanceof ee||e instanceof oe,25473),t=r instanceof ee?e instanceof ee?function(s,i){return oe.create([s,i],"and")}(r,e):id(r,e):e instanceof ee?id(e,r):function(s,i){if(G(s.filters.length>0&&i.filters.length>0,48005),br(s)&&br(i))return Mp(s,i.getFilters());const o=sc(s)?s:i,c=sc(s)?i:s,l=o.filters.map(h=>sl(h,c));return oe.create(l,"or")}(r,e),mo(t)}function id(r,e){if(br(e))return Mp(e,r.getFilters());{const t=e.filters.map(n=>sl(r,n));return oe.create(t,"or")}}function mo(r){if(G(r instanceof ee||r instanceof oe,11850),r instanceof ee)return r;const e=r.getFilters();if(e.length===1)return mo(e[0]);if(Np(r))return r;const t=e.map(s=>mo(s)),n=[];return t.forEach(s=>{s instanceof ee?n.push(s):s instanceof oe&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:oe.create(n,r.op)}/**
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
 */class Bw{constructor(){this.yn=new il}addToCollectionParentIndex(e,t){return this.yn.add(t),w.resolve()}getCollectionParents(e,t){return w.resolve(this.yn.getEntries(t))}addFieldIndex(e,t){return w.resolve()}deleteFieldIndex(e,t){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,t){return w.resolve()}getDocumentsMatchingTarget(e,t){return w.resolve(null)}getIndexType(e,t){return w.resolve(0)}getFieldIndexes(e,t){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,t){return w.resolve(Qe.min())}getMinOffsetFromCollectionGroup(e,t){return w.resolve(Qe.min())}updateCollectionGroup(e,t,n){return w.resolve()}updateIndexEntries(e,t){return w.resolve()}}class il{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new ie(se.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new ie(se.comparator)).toArray()}}/**
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
 */const od="IndexedDbIndexManager",bi=new Uint8Array(0);class zw{constructor(e,t){this.databaseId=t,this.wn=new il,this.bn=new Ct(n=>On(n),(n,s)=>Js(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.wn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.wn.add(t)});const i={collectionId:n,parent:De(s)};return ad(e).put(i)}return w.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[ap(t),""],!1,!0);return ad(e).J(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;n.push(ct(o.parent))}return n})}addFieldIndex(e,t){const n=os(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=Zn(e);return i.next(c=>{o.put(Zh(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=os(e),s=Zn(e),i=Xn(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=os(e),n=Xn(e),s=Zn(e);return t.X().next(()=>n.X()).next(()=>s.X())}createTargetIndexes(e,t){return w.forEach(this.Sn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new sd(n).pn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=Xn(e);let s=!0;const i=new Map;return w.forEach(this.Sn(t),o=>this.Dn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=X();const c=[];return w.forEach(i,(l,h)=>{N(od,`Using index ${function(V){return`id=${V.indexId}|cg=${V.collectionGroup}|f=${V.fields.map(M=>`${M.fieldPath}:${M.kind}`).join(",")}`}(l)} to execute ${On(t)}`);const f=function(V,M){const F=Ya(M);if(F===void 0)return null;for(const K of uo(V,F.fieldPath))switch(K.op){case"array-contains-any":return K.value.arrayValue.values||[];case"array-contains":return[K.value]}return null}(h,l),p=function(V,M){const F=new Map;for(const K of _n(M))for(const I of uo(V,K.fieldPath))switch(I.op){case"==":case"in":F.set(K.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return F.set(K.fieldPath.canonicalString(),I.value),Array.from(F.values())}return null}(h,l),_=function(V,M){const F=[];let K=!0;for(const I of _n(M)){const g=I.kind===0?Uh(V,I.fieldPath,V.startAt):Bh(V,I.fieldPath,V.startAt);F.push(g.value),K&&(K=g.inclusive)}return new wr(F,K)}(h,l),b=function(V,M){const F=[];let K=!0;for(const I of _n(M)){const g=I.kind===0?Bh(V,I.fieldPath,V.endAt):Uh(V,I.fieldPath,V.endAt);F.push(g.value),K&&(K=g.inclusive)}return new wr(F,K)}(h,l),S=this.vn(l,h,_),D=this.vn(l,h,b),C=this.Cn(l,h,p),k=this.Fn(l.indexId,f,S,_.inclusive,D,b.inclusive,C);return w.forEach(k,O=>n.Z(O,t.limit).next(V=>{V.forEach(M=>{const F=U.fromSegments(M.documentKey);o.has(F)||(o=o.add(F),c.push(F))})}))}).next(()=>c)}return w.resolve(null)})}Sn(e){let t=this.bn.get(e);return t||(e.filters.length===0?t=[e]:t=Uw(oe.create(e.filters,"and")).map(n=>oc(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.bn.set(e,t),t)}Fn(e,t,n,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(n.length,i.length),h=l/(t!=null?t.length:1),f=[];for(let p=0;p<l;++p){const _=t?this.Mn(t[p/h]):bi,b=this.xn(e,_,n[p%h],s),S=this.On(e,_,i[p%h],o),D=c.map(C=>this.xn(e,_,C,!0));f.push(...this.createRange(b,S,D))}return f}xn(e,t,n,s){const i=new Tn(e,U.empty(),t,n);return s?i:i.In()}On(e,t,n,s){const i=new Tn(e,U.empty(),t,n);return s?i.In():i}Dn(e,t){const n=new sd(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)n.Vn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let n=2;const s=this.Sn(t);return w.forEach(s,i=>this.Dn(e,i).next(o=>{o?n!==0&&o.fields.length<function(l){let h=new ie(fe.comparator),f=!1;for(const p of l.filters)for(const _ of p.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:h=h.add(_.field));for(const p of l.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&n===2?1:n)}Nn(e,t){const n=new is;for(const s of _n(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.Tn(s.kind);En.Wt.vt(i,o)}return n.cn()}Mn(e){const t=new is;return En.Wt.vt(e,t.Tn(0)),t.cn()}Bn(e,t){const n=new is;return En.Wt.vt(Qc(this.databaseId,t),n.Tn(function(i){const o=_n(i);return o.length===0?0:o[o.length-1].kind}(e))),n.cn()}Cn(e,t,n){if(n===null)return[];let s=[];s.push(new is);let i=0;for(const o of _n(e)){const c=n[i++];for(const l of s)if(this.Ln(t,o.fieldPath)&&Ls(c))s=this.kn(s,o,c);else{const h=l.Tn(o.kind);En.Wt.vt(c,h)}}return this.qn(s)}vn(e,t,n){return this.Cn(e,t,n.position)}qn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].cn();return t}kn(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const c of s){const l=new is;l.seed(c.cn()),En.Wt.vt(o,l.Tn(t.kind)),i.push(l)}return i}Ln(e,t){return!!e.filters.find(n=>n instanceof ee&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=os(e),s=Zn(e);return(t?n.J(Za,IDBKeyRange.bound(t,t)):n.J()).next(i=>{const o=[];return w.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(f,p){const _=p?new ks(p.sequenceNumber,new Qe(Ln(p.readTime),new U(ct(p.documentKey)),p.largestBatchId)):ks.empty(),b=f.fields.map(([S,D])=>new Oi(fe.fromServerFormat(S),D));return new to(f.indexId,f.collectionGroup,b,_)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:J(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=os(e),i=Zn(e);return this.Qn(e).next(o=>s.J(Za,IDBKeyRange.bound(t,t)).next(c=>w.forEach(c,l=>i.put(Zh(l.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return w.forEach(t,(s,i)=>{const o=n.get(s.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(n.set(s.collectionGroup,c),w.forEach(c,l=>this.$n(e,s,l).next(h=>{const f=this.Un(i,l);return h.isEqual(f)?w.resolve():this.Kn(e,i,l,h,f)}))))})}Wn(e,t,n,s){return Xn(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.Bn(n,t.key),documentKey:t.key.path.toArray()})}Gn(e,t,n,s){return Xn(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.Bn(n,t.key),t.key.path.toArray()])}$n(e,t,n){const s=Xn(e);let i=new ie(Mt);return s.te({index:yp,range:IDBKeyRange.only([n.indexId,this.uid,this.Bn(n,t)])},(o,c)=>{i=i.add(new Tn(n.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>i)}Un(e,t){let n=new ie(Mt);const s=this.Nn(t,e);if(s==null)return n;const i=Ya(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Ls(o))for(const c of o.arrayValue.values||[])n=n.add(new Tn(t.indexId,e.key,this.Mn(c),s))}else n=n.add(new Tn(t.indexId,e.key,bi,s));return n}Kn(e,t,n,s,i){N(od,"Updating index entries for document '%s'",t.key);const o=[];return function(l,h,f,p,_){const b=l.getIterator(),S=h.getIterator();let D=Jn(b),C=Jn(S);for(;D||C;){let k=!1,O=!1;if(D&&C){const V=f(D,C);V<0?O=!0:V>0&&(k=!0)}else D!=null?O=!0:k=!0;k?(p(C),C=Jn(S)):O?(_(D),D=Jn(b)):(D=Jn(b),C=Jn(S))}}(s,i,Mt,c=>{o.push(this.Wn(e,t,n,c))},c=>{o.push(this.Gn(e,t,n,c))}),w.waitFor(o)}Qn(e){let t=1;return Zn(e).te({index:_p,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,c)=>Mt(o,c)).filter((o,c,l)=>!c||Mt(o,l[c-1])!==0);const s=[];s.push(e);for(const o of n){const c=Mt(o,e),l=Mt(o,t);if(c===0)s[0]=e.In();else if(c>0&&l<0)s.push(o),s.push(o.In());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.zn(s[o],s[o+1]))return[];const c=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,bi,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,bi,[]];i.push(IDBKeyRange.bound(c,l))}return i}zn(e,t){return Mt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(cd)}getMinOffset(e,t){return w.mapArray(this.Sn(t),n=>this.Dn(e,n).next(s=>s||z(44426))).next(cd)}}function ad(r){return Te(r,Ns)}function Xn(r){return Te(r,oo)}function os(r){return Te(r,qc)}function Zn(r){return Te(r,io)}function cd(r){G(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Bc(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Qe(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const ld={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Im=41943040;class Ve{static withCacheSize(e){return new Ve(e,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function Em(r,e,t){const n=r.store(nt),s=r.store(_r),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=n.te({range:o},(f,p,_)=>(c++,_.delete()));i.push(l.next(()=>{G(c===1,47070,{batchId:t.batchId})}));const h=[];for(const f of t.mutations){const p=pp(e,f.key.path,t.batchId);i.push(s.delete(p)),h.push(f.key)}return w.waitFor(i).next(()=>h)}function go(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw z(14731);e=r.noDocument}return JSON.stringify(e).length}/**
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
 */Ve.DEFAULT_COLLECTION_PERCENTILE=10,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ve.DEFAULT=new Ve(Im,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ve.DISABLED=new Ve(-1,0,0);class jo{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.jn={}}static bt(e,t,n,s){G(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new jo(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Lt(e).te({index:wn,range:n},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=or(e),o=Lt(e);return o.add({}).next(c=>{G(typeof c=="number",49019);const l=new Zc(c,t,n,s),h=function(b,S,D){const C=D.baseMutations.map(O=>fo(b.wt,O)),k=D.mutations.map(O=>fo(b.wt,O));return{userId:S,batchId:D.batchId,localWriteTimeMs:D.localWriteTime.toMillis(),baseMutations:C,mutations:k}}(this.serializer,this.userId,l),f=[];let p=new ie((_,b)=>J(_.canonicalString(),b.canonicalString()));for(const _ of s){const b=pp(this.userId,_.key.path,c);p=p.add(_.key.path.popLast()),f.push(o.put(h)),f.push(i.put(b,yT))}return p.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.jn[c]=l.keys()}),w.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return Lt(e).get(t).next(n=>n?(G(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),In(this.serializer,n)):null)}Hn(e,t){return this.jn[t]?w.resolve(this.jn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.jn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Lt(e).te({index:wn,range:s},(o,c,l)=>{c.userId===this.userId&&(G(c.batchId>=n,47524,{Jn:n}),i=In(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=An;return Lt(e).te({index:wn,range:t,reverse:!0},(s,i,o)=>{n=i.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,An],[this.userId,Number.POSITIVE_INFINITY]);return Lt(e).J(wn,t).next(n=>n.map(s=>In(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Mi(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return or(e).te({range:s},(o,c,l)=>{const[h,f,p]=o,_=ct(f);if(h===this.userId&&t.path.isEqual(_))return Lt(e).get(p).next(b=>{if(!b)throw z(61480,{Yn:o,batchId:p});G(b.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:b.userId,batchId:p}),i.push(In(this.serializer,b))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ie(J);const s=[];return t.forEach(i=>{const o=Mi(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=or(e).te({range:c},(h,f,p)=>{const[_,b,S]=h,D=ct(b);_===this.userId&&i.path.isEqual(D)?n=n.add(S):p.done()});s.push(l)}),w.waitFor(s).next(()=>this.Zn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=Mi(this.userId,n),o=IDBKeyRange.lowerBound(i);let c=new ie(J);return or(e).te({range:o},(l,h,f)=>{const[p,_,b]=l,S=ct(_);p===this.userId&&n.isPrefixOf(S)?S.length===s&&(c=c.add(b)):f.done()}).next(()=>this.Zn(e,c))}Zn(e,t){const n=[],s=[];return t.forEach(i=>{s.push(Lt(e).get(i).next(o=>{if(o===null)throw z(35274,{batchId:i});G(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),n.push(In(this.serializer,o))}))}),w.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return Em(e.he,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Xn(t.batchId)}),w.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}Xn(e){delete this.jn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return w.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return or(e).te({range:n},(i,o,c)=>{if(i[0]===this.userId){const l=ct(i[1]);s.push(l)}else c.done()}).next(()=>{G(s.length===0,56720,{er:s.map(i=>i.canonicalString())})})})}containsKey(e,t){return Tm(e,this.userId,t)}tr(e){return wm(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:An,lastStreamToken:""})}}function Tm(r,e,t){const n=Mi(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return or(r).te({range:i,ee:!0},(c,l,h)=>{const[f,p,_]=c;f===e&&p===s&&(o=!0),h.done()}).next(()=>o)}function Lt(r){return Te(r,nt)}function or(r){return Te(r,_r)}function wm(r){return Te(r,Ds)}/**
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
 */class Fn{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new Fn(0)}static ir(){return new Fn(-1)}}/**
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
 */class jw{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.sr(e).next(t=>{const n=new Fn(t.highestTargetId);return t.highestTargetId=n.next(),this._r(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.sr(e).next(t=>W.fromTimestamp(new pe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.sr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.sr(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this._r(e,s)))}addTargetData(e,t){return this.ar(e,t).next(()=>this.sr(e).next(n=>(n.targetCount+=1,this.ur(t,n),this._r(e,n))))}updateTargetData(e,t){return this.ar(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>er(e).delete(t.targetId)).next(()=>this.sr(e)).next(n=>(G(n.targetCount>0,8065),n.targetCount-=1,this._r(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return er(e).te((o,c)=>{const l=gs(c);l.sequenceNumber<=t&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>w.waitFor(i)).next(()=>s)}forEachTarget(e,t){return er(e).te((n,s)=>{const i=gs(s);t(i)})}sr(e){return ud(e).get(so).next(t=>(G(t!==null,2888),t))}_r(e,t){return ud(e).put(so,t)}ar(e,t){return er(e).put(gm(this.serializer,t))}ur(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.sr(e).next(t=>t.targetCount)}getTargetData(e,t){const n=On(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return er(e).te({range:s,index:gp},(o,c,l)=>{const h=gs(c);Js(t,h.target)&&(i=h,l.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=Kt(e);return t.forEach(o=>{const c=De(o.path);s.push(i.put({targetId:n,path:c})),s.push(this.referenceDelegate.addReference(e,n,o))}),w.waitFor(s)}removeMatchingKeys(e,t,n){const s=Kt(e);return w.forEach(t,i=>{const o=De(i.path);return w.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=Kt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=Kt(e);let i=X();return s.te({range:n,ee:!0},(o,c,l)=>{const h=ct(o[1]),f=new U(h);i=i.add(f)}).next(()=>i)}containsKey(e,t){const n=De(t.path),s=IDBKeyRange.bound([n],[ap(n)],!1,!0);let i=0;return Kt(e).te({index:jc,ee:!0,range:s},([o,c],l,h)=>{o!==0&&(i++,h.done())}).next(()=>i>0)}Rt(e,t){return er(e).get(t).next(n=>n?gs(n):null)}}function er(r){return Te(r,yr)}function ud(r){return Te(r,Rn)}function Kt(r){return Te(r,vr)}/**
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
 */const hd="LruGarbageCollector",bm=1048576;function dd([r,e],[t,n]){const s=J(r,t);return s===0?J(e,n):s}class qw{constructor(e){this.cr=e,this.buffer=new ie(dd),this.lr=0}hr(){return++this.lr}Pr(e){const t=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();dd(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Am{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){N(hd,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){an(t)?N(hd,"Ignoring IndexedDB error during garbage collection: ",t):await on(t)}await this.Ir(3e5)})}}class $w{constructor(e,t){this.Er=e,this.params=t}calculateTargetCount(e,t){return this.Er.dr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return w.resolve(Fe.le);const n=new qw(t);return this.Er.forEachTarget(e,s=>n.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(e,s=>n.Pr(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Er.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Er.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(ld)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ld):this.Rr(e,t))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,t){let n,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(n=p,c=Date.now(),this.removeTargets(e,n,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(h=Date.now(),nr()<=Z.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Rm(r,e){return new $w(r,e)}/**
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
 */class Kw{constructor(e,t){this.db=e,this.garbageCollector=Rm(this,t)}dr(e){const t=this.Vr(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}Vr(e){let t=0;return this.Ar(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ar(e,t){return this.mr(e,(n,s)=>t(s))}addReference(e,t,n){return Ai(e,n)}removeReference(e,t,n){return Ai(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ai(e,t)}gr(e,t){return function(s,i){let o=!1;return wm(s).ne(c=>Tm(s,c,i).next(l=>(l&&(o=!0),w.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.mr(e,(o,c)=>{if(c<=t){const l=this.gr(e,o).next(h=>{if(!h)return i++,n.getEntry(e,o).next(()=>(n.removeEntry(o,W.min()),Kt(e).delete(function(p){return[0,De(p.path)]}(o))))});s.push(l)}}).next(()=>w.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ai(e,t)}mr(e,t){const n=Kt(e);let s,i=Fe.le;return n.te({index:jc},([o,c],{path:l,sequenceNumber:h})=>{o===0?(i!==Fe.le&&t(new U(ct(s)),i),i=h,s=l):i=Fe.le}).next(()=>{i!==Fe.le&&t(new U(ct(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ai(r,e){return Kt(r).put(function(n,s){return{targetId:0,path:De(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
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
 */class Sm{constructor(){this.changes=new Ct(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ge.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?w.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Gw{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return pn(e).put(n)}removeEntry(e,t,n){return pn(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],po(o),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.pr(e,n)))}getEntry(e,t){let n=ge.newInvalidDocument(t);return pn(e).te({index:Li,range:IDBKeyRange.only(as(t))},(s,i)=>{n=this.yr(t,i)}).next(()=>n)}wr(e,t){let n={size:0,document:ge.newInvalidDocument(t)};return pn(e).te({index:Li,range:IDBKeyRange.only(as(t))},(s,i)=>{n={document:this.yr(t,i),size:go(i)}}).next(()=>n)}getEntries(e,t){let n=Ge();return this.br(e,t,(s,i)=>{const o=this.yr(s,i);n=n.insert(s,o)}).next(()=>n)}Sr(e,t){let n=Ge(),s=new ce(U.comparator);return this.br(e,t,(i,o)=>{const c=this.yr(i,o);n=n.insert(i,c),s=s.insert(i,go(o))}).next(()=>({documents:n,Dr:s}))}br(e,t,n){if(t.isEmpty())return w.resolve();let s=new ie(md);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(as(s.first()),as(s.last())),o=s.getIterator();let c=o.getNext();return pn(e).te({index:Li,range:i},(l,h,f)=>{const p=U.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&md(c,p)<0;)n(c,null),c=o.getNext();c&&c.isEqual(p)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.H(as(c)):f.done()}).next(()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),po(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return pn(e).J(IDBKeyRange.bound(c,l,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=Ge();for(const p of h){const _=this.yr(U.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);_.isFoundDocument()&&(Ys(t,_)||s.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(e,t,n,s){let i=Ge();const o=pd(t,n),c=pd(t,Qe.max());return pn(e).te({index:mp,range:IDBKeyRange.bound(o,c,!0)},(l,h,f)=>{const p=this.yr(U.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(p.key,p),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new Ww(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return fd(e).get(Xa).next(t=>(G(!!t,20021),t))}pr(e,t){return fd(e).put(Xa,t)}yr(e,t){if(t){const n=Dw(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(W.min())))return n}return ge.newInvalidDocument(e)}}function Pm(r){return new Gw(r)}class Ww extends Sm{constructor(e,t){super(),this.vr=e,this.trackRemovals=t,this.Cr=new Ct(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new ie((i,o)=>J(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.Cr.get(i);if(t.push(this.vr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=Yh(this.vr.serializer,o);s=s.add(i.path.popLast());const h=go(l);n+=h-c.size,t.push(this.vr.addEntry(e,i,l))}else if(n-=c.size,this.trackRemovals){const l=Yh(this.vr.serializer,o.convertToNoDocument(W.min()));t.push(this.vr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.vr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.vr.updateMetadata(e,n)),w.waitFor(t)}getFromCache(e,t){return this.vr.wr(e,t).next(n=>(this.Cr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.vr.Sr(e,t).next(({documents:n,Dr:s})=>(s.forEach((i,o)=>{this.Cr.set(i,{size:o,readTime:n.get(i).readTime})}),n))}}function fd(r){return Te(r,xs)}function pn(r){return Te(r,ro)}function as(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function pd(r,e){const t=e.documentKey.path.toArray();return[r,po(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function md(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=J(t[i],n[i]),s)return s;return s=J(t.length,n.length),s||(s=J(t[t.length-2],n[n.length-2]),s||J(t[t.length-1],n[n.length-1]))}/**
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
 *//**
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
 */class Hw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Cm{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&bs(n.mutation,s,Ze.empty(),pe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,X()).next(()=>n))}getLocalViewOfDocuments(e,t,n=X()){const s=lt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=ps();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=lt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,X()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,n,s){let i=Ge();const o=ws(),c=function(){return ws()}();return t.forEach((l,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof cn)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),bs(f.mutation,h,f.mutation.getFieldMask(),pe.now())):o.set(h.key,Ze.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var p;return c.set(h,new Hw(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const n=ws();let s=new ce((o,c)=>o-c),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=n.get(l)||Ze.empty();f=c.applyToLocalView(h,f),n.set(l,f);const p=(s.get(c.batchId)||X()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Gp();f.forEach(_=>{if(!i.has(_)){const b=Xp(t.get(_),n.get(_));b!==null&&p.set(_,b),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return w.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(o){return U.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ew(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):w.resolve(lt());let c=gr,l=i;return o.next(h=>w.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?w.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{l=l.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,X())).next(f=>({batchId:c,changes:Kp(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(n=>{let s=ps();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=ps();return this.indexManager.getCollectionParents(e,i).next(c=>w.forEach(c,l=>{const h=function(p,_){return new Oo(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,n,s).next(f=>{f.forEach((p,_)=>{o=o.insert(p,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ge.newInvalidDocument(f)))});let c=ps();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&bs(f.mutation,h,Ze.empty(),pe.now()),Ys(t,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class Qw{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,t){return w.resolve(this.Fr.get(t))}saveBundleMetadata(e,t){return this.Fr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Me(s.createTime)}}(t)),w.resolve()}getNamedQuery(e,t){return w.resolve(this.Mr.get(t))}saveNamedQuery(e,t){return this.Mr.set(t.name,function(s){return{name:s.name,query:_m(s.bundledQuery),readTime:Me(s.readTime)}}(t)),w.resolve()}}/**
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
 */class Jw{constructor(){this.overlays=new ce(U.comparator),this.Or=new Map}getOverlay(e,t){return w.resolve(this.overlays.get(t))}getOverlays(e,t){const n=lt();return w.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.St(e,t,i)}),w.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Or.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Or.delete(n)),w.resolve()}getOverlaysForCollection(e,t,n){const s=lt(),i=t.length+1,o=new U(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return w.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new ce((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=lt(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=lt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return w.resolve(c)}St(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Or.get(s.largestBatchId).delete(n.key);this.Or.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new tl(t,n));let i=this.Or.get(t);i===void 0&&(i=X(),this.Or.set(t,i)),this.Or.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Yw{constructor(){this.sessionToken=ye.EMPTY_BYTE_STRING}getSessionToken(e){return w.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,w.resolve()}}/**
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
 */class ol{constructor(){this.Nr=new ie(we.Br),this.Lr=new ie(we.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,t){const n=new we(e,t);this.Nr=this.Nr.add(n),this.Lr=this.Lr.add(n)}qr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Qr(new we(e,t))}$r(e,t){e.forEach(n=>this.removeReference(n,t))}Ur(e){const t=new U(new se([])),n=new we(t,e),s=new we(t,e+1),i=[];return this.Lr.forEachInRange([n,s],o=>{this.Qr(o),i.push(o.key)}),i}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const t=new U(new se([])),n=new we(t,e),s=new we(t,e+1);let i=X();return this.Lr.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new we(e,0),n=this.Nr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class we{constructor(e,t){this.key=e,this.Gr=t}static Br(e,t){return U.comparator(e.key,t.key)||J(e.Gr,t.Gr)}static kr(e,t){return J(e.Gr,t.Gr)||U.comparator(e.key,t.key)}}/**
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
 */class Xw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Jn=1,this.zr=new ie(we.Br)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Zc(i,t,n,s);this.mutationQueue.push(o);for(const c of s)this.zr=this.zr.add(new we(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,t){return w.resolve(this.jr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Hr(n),i=s<0?0:s;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?An:this.Jn-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new we(t,0),s=new we(t,Number.POSITIVE_INFINITY),i=[];return this.zr.forEachInRange([n,s],o=>{const c=this.jr(o.Gr);i.push(c)}),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ie(J);return t.forEach(s=>{const i=new we(s,0),o=new we(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([i,o],c=>{n=n.add(c.Gr)})}),w.resolve(this.Jr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;U.isDocumentKey(i)||(i=i.child(""));const o=new we(new U(i),0);let c=new ie(J);return this.zr.forEachWhile(l=>{const h=l.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Gr)),!0)},o),w.resolve(this.Jr(c))}Jr(e){const t=[];return e.forEach(n=>{const s=this.jr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){G(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.zr;return w.forEach(t.mutations,s=>{const i=new we(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.zr=n})}Xn(e){}containsKey(e,t){const n=new we(t,0),s=this.zr.firstAfterOrEqual(n);return w.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Yr(e,t){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const t=this.Hr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Zw{constructor(e){this.Zr=e,this.docs=function(){return new ce(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.Zr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return w.resolve(n?n.document.mutableCopy():ge.newInvalidDocument(t))}getEntries(e,t){let n=Ge();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ge.newInvalidDocument(s))}),w.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=Ge();const o=t.path,c=new U(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Bc(lp(f),n)<=0||(s.has(f.key)||Ys(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(e,t,n,s){z(9500)}Xr(e,t){return w.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new eb(this)}getSize(e){return w.resolve(this.size)}}class eb extends Sm{constructor(e){super(),this.vr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.vr.addEntry(e,s)):this.vr.removeEntry(n)}),w.waitFor(t)}getFromCache(e,t){return this.vr.getEntry(e,t)}getAllFromCache(e,t){return this.vr.getEntries(e,t)}}/**
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
 */class tb{constructor(e){this.persistence=e,this.ei=new Ct(t=>On(t),Js),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.ti=0,this.ni=new ol,this.targetCount=0,this.ri=Fn.rr()}forEachTarget(e,t){return this.ei.forEach((n,s)=>t(s)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ti&&(this.ti=t),w.resolve()}ar(e){this.ei.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ri=new Fn(t),this.highestTargetId=t),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,t){return this.ar(t),this.targetCount+=1,w.resolve()}updateTargetData(e,t){return this.ar(t),w.resolve()}removeTargetData(e,t){return this.ei.delete(t.target),this.ni.Ur(t.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.ei.forEach((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.ei.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),w.waitFor(i).next(()=>s)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,t){const n=this.ei.get(t)||null;return w.resolve(n)}addMatchingKeys(e,t,n){return this.ni.qr(t,n),w.resolve()}removeMatchingKeys(e,t,n){this.ni.$r(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),w.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ni.Ur(t),w.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ni.Wr(t);return w.resolve(n)}containsKey(e,t){return w.resolve(this.ni.containsKey(t))}}/**
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
 */class al{constructor(e,t){this.ii={},this.overlays={},this.si=new Fe(0),this.oi=!1,this.oi=!0,this._i=new Yw,this.referenceDelegate=e(this),this.ai=new tb(this),this.indexManager=new Bw,this.remoteDocumentCache=function(s){return new Zw(s)}(n=>this.referenceDelegate.ui(n)),this.serializer=new mm(t),this.ci=new Qw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Jw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ii[e.toKey()];return n||(n=new Xw(t,this.referenceDelegate),this.ii[e.toKey()]=n),n}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,t,n){N("MemoryPersistence","Starting transaction:",e);const s=new nb(this.si.next());return this.referenceDelegate.li(),n(s).next(i=>this.referenceDelegate.hi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Pi(e,t){return w.or(Object.values(this.ii).map(n=>()=>n.containsKey(e,t)))}}class nb extends hp{constructor(e){super(),this.currentSequenceNumber=e}}class qo{constructor(e){this.persistence=e,this.Ti=new ol,this.Ii=null}static Ei(e){return new qo(e)}get di(){if(this.Ii)return this.Ii;throw z(60996)}addReference(e,t,n){return this.Ti.addReference(n,t),this.di.delete(n.toString()),w.resolve()}removeReference(e,t,n){return this.Ti.removeReference(n,t),this.di.add(n.toString()),w.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),w.resolve()}removeTarget(e,t){this.Ti.Ur(t.targetId).forEach(s=>this.di.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}li(){this.Ii=new Set}hi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.di,n=>{const s=U.fromPath(n);return this.Ai(e,s).next(i=>{i||t.removeEntry(s,W.min())})}).next(()=>(this.Ii=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ai(e,t).next(n=>{n?this.di.delete(t.toString()):this.di.add(t.toString())})}ui(e){return 0}Ai(e,t){return w.or([()=>w.resolve(this.Ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Pi(e,t)])}}class _o{constructor(e,t){this.persistence=e,this.Ri=new Ct(n=>De(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=Rm(this,t)}static Ei(e,t){return new _o(e,t)}li(){}hi(e){return w.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}Vr(e){let t=0;return this.Ar(e,n=>{t++}).next(()=>t)}Ar(e,t){return w.forEach(this.Ri,(n,s)=>this.gr(e,n,s).next(i=>i?w.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Xr(e,o=>this.gr(e,o,t).next(c=>{c||(n++,i.removeEntry(o,W.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.Ri.set(t,e.currentSequenceNumber),w.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.Ri.set(n,e.currentSequenceNumber),w.resolve()}removeReference(e,t,n){return this.Ri.set(n,e.currentSequenceNumber),w.resolve()}updateLimboDocument(e,t){return this.Ri.set(t,e.currentSequenceNumber),w.resolve()}ui(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ui(e.data.value)),t}gr(e,t,n){return w.or([()=>this.persistence.Pi(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.Ri.get(t);return w.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class rb{constructor(e){this.serializer=e}q(e,t,n,s){const i=new Po("createOrUpgrade",t);n<1&&s>=1&&(function(l){l.createObjectStore(Qs)}(e),function(l){l.createObjectStore(Ds,{keyPath:_T}),l.createObjectStore(nt,{keyPath:Sh,autoIncrement:!0}).createIndex(wn,Ph,{unique:!0}),l.createObjectStore(_r)}(e),gd(e),function(l){l.createObjectStore(yn)}(e));let o=w.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore(vr),l.deleteObjectStore(yr),l.deleteObjectStore(Rn)}(e),gd(e)),o=o.next(()=>function(l){const h=l.store(Rn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:W.min().toTimestamp(),targetCount:0};return h.put(so,f)}(i))),n<4&&s>=4&&(n!==0&&(o=o.next(()=>function(l,h){return h.store(nt).J().next(p=>{l.deleteObjectStore(nt),l.createObjectStore(nt,{keyPath:Sh,autoIncrement:!0}).createIndex(wn,Ph,{unique:!0});const _=h.store(nt),b=p.map(S=>_.put(S));return w.waitFor(b)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore(Ir,{keyPath:RT})})(e)})),n<5&&s>=5&&(o=o.next(()=>this.Vi(i))),n<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore(xs)}(e),this.mi(i)))),n<7&&s>=7&&(o=o.next(()=>this.fi(i))),n<8&&s>=8&&(o=o.next(()=>this.gi(e,i))),n<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(o=o.next(()=>this.pi(i))),n<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore(ko,{keyPath:ST})})(e),function(l){l.createObjectStore(Vo,{keyPath:PT})}(e)})),n<12&&s>=12&&(o=o.next(()=>{(function(l){const h=l.createObjectStore(Do,{keyPath:OT});h.createIndex(ec,MT,{unique:!1}),h.createIndex(vp,LT,{unique:!1})})(e)})),n<13&&s>=13&&(o=o.next(()=>function(l){const h=l.createObjectStore(ro,{keyPath:vT});h.createIndex(Li,IT),h.createIndex(mp,ET)}(e)).next(()=>this.yi(e,i)).next(()=>e.deleteObjectStore(yn))),n<14&&s>=14&&(o=o.next(()=>this.wi(e,i))),n<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore(qc,{keyPath:CT,autoIncrement:!0}).createIndex(Za,kT,{unique:!1}),l.createObjectStore(io,{keyPath:VT}).createIndex(_p,DT,{unique:!1}),l.createObjectStore(oo,{keyPath:xT}).createIndex(yp,NT,{unique:!1})}(e))),n<16&&s>=16&&(o=o.next(()=>{t.objectStore(io).clear()}).next(()=>{t.objectStore(oo).clear()})),n<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore($c,{keyPath:FT})})(e)})),o}mi(e){let t=0;return e.store(yn).te((n,s)=>{t+=go(s)}).next(()=>{const n={byteSize:t};return e.store(xs).put(Xa,n)})}Vi(e){const t=e.store(Ds),n=e.store(nt);return t.J().next(s=>w.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,An],[i.userId,i.lastAcknowledgedBatchId]);return n.J(wn,o).next(c=>w.forEach(c,l=>{G(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const h=In(this.serializer,l);return Em(e,i.userId,h).next(()=>{})}))}))}fi(e){const t=e.store(vr),n=e.store(yn);return e.store(Rn).get(so).next(s=>{const i=[];return n.te((o,c)=>{const l=new se(o),h=function(p){return[0,De(p)]}(l);i.push(t.get(h).next(f=>f?w.resolve():(p=>t.put({targetId:0,path:De(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>w.waitFor(i))})}gi(e,t){e.createObjectStore(Ns,{keyPath:AT});const n=t.store(Ns),s=new il,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return n.put({collectionId:c,parent:De(l)})}};return t.store(yn).te({ee:!0},(o,c)=>{const l=new se(o);return i(l.popLast())}).next(()=>t.store(_r).te({ee:!0},([o,c,l],h)=>{const f=ct(c);return i(f.popLast())}))}pi(e){const t=e.store(yr);return t.te((n,s)=>{const i=gs(s),o=gm(this.serializer,i);return t.put(o)})}yi(e,t){const n=t.store(yn),s=[];return n.te((i,o)=>{const c=t.store(ro),l=function(p){return p.document?new U(se.fromString(p.document.name).popFirst(5)):p.noDocument?U.fromSegments(p.noDocument.path):p.unknownDocument?U.fromSegments(p.unknownDocument.path):z(36783)}(o).path.toArray(),h={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(h))}).next(()=>w.waitFor(s))}wi(e,t){const n=t.store(nt),s=Pm(this.serializer),i=new al(qo.Ei,this.serializer.wt);return n.J().next(o=>{const c=new Map;return o.forEach(l=>{var h;let f=(h=c.get(l.userId))!==null&&h!==void 0?h:X();In(this.serializer,l).keys().forEach(p=>f=f.add(p)),c.set(l.userId,f)}),w.forEach(c,(l,h)=>{const f=new ke(h),p=zo.bt(this.serializer,f),_=i.getIndexManager(f),b=jo.bt(f,this.serializer,_,i.referenceDelegate);return new Cm(s,b,p,_).recalculateAndSaveOverlaysForDocumentKeys(new tc(t,Fe.le),l).next()})})}}function gd(r){r.createObjectStore(vr,{keyPath:wT}).createIndex(jc,bT,{unique:!0}),r.createObjectStore(yr,{keyPath:"targetId"}).createIndex(gp,TT,{unique:!0}),r.createObjectStore(Rn)}const Ft="IndexedDbPersistence",Pa=18e5,Ca=5e3,ka="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",sb="main";class cl{constructor(e,t,n,s,i,o,c,l,h,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.bi=i,this.window=o,this.document=c,this.Si=h,this.Di=f,this.Ci=p,this.si=null,this.oi=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Fi=null,this.inForeground=!1,this.Mi=null,this.xi=null,this.Oi=Number.NEGATIVE_INFINITY,this.Ni=_=>Promise.resolve(),!cl.C())throw new B(x.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Kw(this,s),this.Bi=t+sb,this.serializer=new mm(l),this.Li=new Xt(this.Bi,this.Ci,new rb(this.serializer)),this._i=new Nw,this.ai=new jw(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Pm(this.serializer),this.ci=new xw,this.window&&this.window.localStorage?this.ki=this.window.localStorage:(this.ki=null,f===!1&&_e(Ft,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.qi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new B(x.FAILED_PRECONDITION,ka);return this.Qi(),this.$i(),this.Ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ai.getHighestSequenceNumber(e))}).then(e=>{this.si=new Fe(e,this.Si)}).then(()=>{this.oi=!0}).catch(e=>(this.Li&&this.Li.close(),Promise.reject(e)))}Ki(e){return this.Ni=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Li.U(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.bi.enqueueAndForget(async()=>{this.started&&await this.qi()}))}qi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ri(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Wi(e).next(t=>{t||(this.isPrimary=!1,this.bi.enqueueRetryable(()=>this.Ni(!1)))})}).next(()=>this.Gi(e)).next(t=>this.isPrimary&&!t?this.zi(e).next(()=>!1):!!t&&this.ji(e).next(()=>!0))).catch(e=>{if(an(e))return N(Ft,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N(Ft,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.bi.enqueueRetryable(()=>this.Ni(e)),this.isPrimary=e})}Wi(e){return cs(e).get(Qn).next(t=>w.resolve(this.Hi(t)))}Ji(e){return Ri(e).delete(this.clientId)}async Yi(){if(this.isPrimary&&!this.Zi(this.Oi,Pa)){this.Oi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=Te(t,Ir);return n.J().next(s=>{const i=this.Xi(s,Pa),o=s.filter(c=>i.indexOf(c)===-1);return w.forEach(o,c=>n.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.ki)for(const t of e)this.ki.removeItem(this.es(t.clientId))}}Ui(){this.xi=this.bi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.qi().then(()=>this.Yi()).then(()=>this.Ui()))}Hi(e){return!!e&&e.ownerId===this.clientId}Gi(e){return this.Di?w.resolve(!0):cs(e).get(Qn).next(t=>{if(t!==null&&this.Zi(t.leaseTimestampMs,Ca)&&!this.ts(t.ownerId)){if(this.Hi(t)&&this.networkEnabled)return!0;if(!this.Hi(t)){if(!t.allowTabSynchronization)throw new B(x.FAILED_PRECONDITION,ka);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ri(e).J().next(n=>this.Xi(n,Ca).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&N(Ft,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.oi=!1,this.ns(),this.xi&&(this.xi.cancel(),this.xi=null),this.rs(),this.ss(),await this.Li.runTransaction("shutdown","readwrite",[Qs,Ir],e=>{const t=new tc(e,Fe.le);return this.zi(t).next(()=>this.Ji(t))}),this.Li.close(),this._s()}Xi(e,t){return e.filter(n=>this.Zi(n.updateTimeMs,t)&&!this.ts(n.clientId))}us(){return this.runTransaction("getActiveClients","readonly",e=>Ri(e).J().next(t=>this.Xi(t,Pa).map(n=>n.clientId)))}get started(){return this.oi}getGlobalsCache(){return this._i}getMutationQueue(e,t){return jo.bt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new zw(e,this.serializer.wt.databaseId)}getDocumentOverlayCache(e){return zo.bt(this.serializer,e)}getBundleCache(){return this.ci}runTransaction(e,t,n){N(Ft,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?zT:l===16?BT:l===15?Kc:l===14?Tp:l===13?Ep:l===12?UT:l===11?Ip:void z(60245)}(this.Ci);let o;return this.Li.runTransaction(e,s,i,c=>(o=new tc(c,this.si?this.si.next():Fe.le),t==="readwrite-primary"?this.Wi(o).next(l=>!!l||this.Gi(o)).next(l=>{if(!l)throw _e(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.bi.enqueueRetryable(()=>this.Ni(!1)),new B(x.FAILED_PRECONDITION,up);return n(o)}).next(l=>this.ji(o).next(()=>l)):this.cs(o).next(()=>n(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}cs(e){return cs(e).get(Qn).next(t=>{if(t!==null&&this.Zi(t.leaseTimestampMs,Ca)&&!this.ts(t.ownerId)&&!this.Hi(t)&&!(this.Di||this.allowTabSynchronization&&t.allowTabSynchronization))throw new B(x.FAILED_PRECONDITION,ka)})}ji(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return cs(e).put(Qn,t)}static C(){return Xt.C()}zi(e){const t=cs(e);return t.get(Qn).next(n=>this.Hi(n)?(N(Ft,"Releasing primary lease."),t.delete(Qn)):w.resolve())}Zi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(_e(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Qi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Mi=()=>{this.bi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.qi()))},this.document.addEventListener("visibilitychange",this.Mi),this.inForeground=this.document.visibilityState==="visible")}rs(){this.Mi&&(this.document.removeEventListener("visibilitychange",this.Mi),this.Mi=null)}$i(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Fi=()=>{this.ns();const t=/(?:Version|Mobile)\/1[456]/;hf()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.bi.enterRestrictedMode(!0),this.bi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Fi))}ss(){this.Fi&&(this.window.removeEventListener("pagehide",this.Fi),this.Fi=null)}ts(e){var t;try{const n=((t=this.ki)===null||t===void 0?void 0:t.getItem(this.es(e)))!==null;return N(Ft,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return _e(Ft,"Failed to get zombied client id.",n),!1}}ns(){if(this.ki)try{this.ki.setItem(this.es(this.clientId),String(Date.now()))}catch(e){_e("Failed to set zombie client id.",e)}}_s(){if(this.ki)try{this.ki.removeItem(this.es(this.clientId))}catch{}}es(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function cs(r){return Te(r,Qs)}function Ri(r){return Te(r,Ir)}function km(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class ll{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.ls=n,this.hs=s}static Ps(e,t){let n=X(),s=X();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ll(e,t.fromCache,n,s)}}/**
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
 */class ib{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Vm{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return hf()?8:dp(Ee())>0?6:4}()}initialize(e,t){this.As=e,this.indexManager=t,this.Ts=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.Rs(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Vs(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ib;return this.fs(e,t,o).next(c=>{if(i.result=c,this.Is)return this.gs(e,t,o,c.size)})}).next(()=>i.result)}gs(e,t,n,s){return n.documentReadCount<this.Es?(nr()<=Z.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",rr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),w.resolve()):(nr()<=Z.DEBUG&&N("QueryEngine","Query:",rr(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ds*s?(nr()<=Z.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",rr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,We(t))):w.resolve())}Rs(e,t){if(zh(t))return w.resolve(null);let n=We(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ac(t,null,"F"),n=We(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=X(...i);return this.As.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,n).next(l=>{const h=this.ps(t,c);return this.ys(t,h,o,l.readTime)?this.Rs(e,ac(t,null,"F")):this.ws(e,h,t,l)}))})))}Vs(e,t,n,s){return zh(t)||s.isEqual(W.min())?w.resolve(null):this.As.getDocuments(e,n).next(i=>{const o=this.ps(t,i);return this.ys(t,o,n,s)?w.resolve(null):(nr()<=Z.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rr(t)),this.ws(e,o,t,cp(s,gr)).next(c=>c))})}ps(e,t){let n=new ie(qp(e));return t.forEach((s,i)=>{Ys(e,i)&&(n=n.add(i))}),n}ys(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}fs(e,t,n){return nr()<=Z.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",rr(t)),this.As.getDocumentsMatchingQuery(e,t,Qe.min(),n)}ws(e,t,n,s){return this.As.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const ul="LocalStore",ob=3e8;class ab{constructor(e,t,n,s){this.persistence=e,this.bs=t,this.serializer=s,this.Ss=new ce(J),this.Ds=new Ct(i=>On(i),Js),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(n)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Cm(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ss))}}function Dm(r,e,t,n){return new ab(r,e,t,n)}async function xm(r,e){const t=$(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.Fs(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],c=[];let l=X();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(n,l).next(h=>({Ms:h,removedBatchIds:o,addedBatchIds:c}))})})}function cb(r,e){const t=$(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.Cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,_=p.keys();let b=w.resolve();return _.forEach(S=>{b=b.next(()=>f.getEntry(l,S)).next(D=>{const C=h.docVersions.get(S);G(C!==null,48541),D.version.compareTo(C)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=X();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Nm(r){const e=$(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ai.getLastRemoteSnapshotVersion(t))}function lb(r,e){const t=$(r),n=e.snapshotVersion;let s=t.Ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Cs.newChangeBuffer({trackRemovals:!0});s=t.Ss;const c=[];e.targetChanges.forEach((f,p)=>{const _=s.get(p);if(!_)return;c.push(t.ai.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.ai.addMatchingKeys(i,f.addedDocuments,p)));let b=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(ye.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,n)),s=s.insert(p,b),function(D,C,k){return D.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=ob?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(_,b,f)&&c.push(t.ai.updateTargetData(i,b))});let l=Ge(),h=X();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(ub(i,o,e.documentUpdates).next(f=>{l=f.xs,h=f.Os})),!n.isEqual(W.min())){const f=t.ai.getLastRemoteSnapshotVersion(i).next(p=>t.ai.setTargetsMetadata(i,i.currentSequenceNumber,n));c.push(f)}return w.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.Ss=s,i))}function ub(r,e,t){let n=X(),s=X();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=Ge();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):N(ul,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{xs:o,Os:s}})}function hb(r,e){const t=$(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=An),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function yo(r,e){const t=$(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.ai.getTargetData(n,e).next(i=>i?(s=i,w.resolve(s)):t.ai.allocateTargetId(n).next(o=>(s=new It(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.ai.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.Ss.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ss=t.Ss.insert(n.targetId,n),t.Ds.set(e,n.targetId)),n})}async function Pr(r,e,t){const n=$(r),s=n.Ss.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!an(o))throw o;N(ul,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ss=n.Ss.remove(e),n.Ds.delete(s.target)}function mc(r,e,t){const n=$(r);let s=W.min(),i=X();return n.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=$(l),_=p.Ds.get(f);return _!==void 0?w.resolve(p.Ss.get(_)):p.ai.getTargetData(h,f)}(n,o,We(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.ai.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>n.bs.getDocumentsMatchingQuery(o,e,t?s:W.min(),t?i:X())).next(c=>(Lm(n,jp(e),c),{documents:c,Ns:i})))}function Om(r,e){const t=$(r),n=$(t.ai),s=t.Ss.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>n.Rt(i,e).next(o=>o?o.target:null))}function Mm(r,e){const t=$(r),n=t.vs.get(e)||W.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.Cs.getAllFromCollectionGroup(s,e,cp(n,gr),Number.MAX_SAFE_INTEGER)).then(s=>(Lm(t,e,s),s))}function Lm(r,e,t){let n=r.vs.get(e)||W.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.vs.set(e,n)}/**
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
 */const Fm="firestore_clients";function _d(r,e){return`${Fm}_${r}_${e}`}const Um="firestore_mutations";function yd(r,e,t){let n=`${Um}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const Bm="firestore_targets";function Va(r,e){return`${Bm}_${r}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const at="SharedClientState";class vo{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static qs(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new B(s.error.code,s.error.message))),o?new vo(e,t,s.state,i):(_e(at,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Qs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class As{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static qs(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new B(n.error.code,n.error.message))),i?new As(e,n.state,s):(_e(at,`Failed to parse target state for ID '${e}': ${t}`),null)}Qs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Io{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static qs(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Yc();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=fp(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new Io(e,i):(_e(at,`Failed to parse client data for instance '${e}': ${t}`),null)}}class hl{constructor(e,t){this.clientId=e,this.onlineState=t}static qs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new hl(t.clientId,t.onlineState):(_e(at,`Failed to parse online state: ${e}`),null)}}class gc{constructor(){this.activeTargetIds=Yc()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Da{constructor(e,t,n,s,i){this.window=e,this.bi=t,this.persistenceKey=n,this.Ks=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ws=this.Gs.bind(this),this.zs=new ce(J),this.started=!1,this.js=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Hs=_d(this.persistenceKey,this.Ks),this.Js=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.zs=this.zs.insert(this.Ks,new gc),this.Ys=new RegExp(`^${Fm}_${o}_([^_]*)$`),this.Zs=new RegExp(`^${Um}_${o}_(\\d+)(?:_(.*))?$`),this.Xs=new RegExp(`^${Bm}_${o}_(\\d+)$`),this.eo=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.no=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ws)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.us();for(const n of e){if(n===this.Ks)continue;const s=this.getItem(_d(this.persistenceKey,n));if(s){const i=Io.qs(n,s);i&&(this.zs=this.zs.insert(i.clientId,i))}}this.ro();const t=this.storage.getItem(this.eo);if(t){const n=this.io(t);n&&this.so(n)}for(const n of this.js)this.Gs(n);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Js,JSON.stringify(e))}getAllActiveQueryTargets(){return this.oo(this.zs)}isActiveQueryTarget(e){let t=!1;return this.zs.forEach((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this._o(e,"pending")}updateMutationState(e,t,n){this._o(e,t,n),this.ao(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Va(this.persistenceKey,e));if(s){const i=As.qs(e,s);i&&(n=i.state)}}return t&&this.uo.$s(e),this.ro(),n}removeLocalQueryTarget(e){this.uo.Us(e),this.ro()}isLocalQueryTarget(e){return this.uo.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Va(this.persistenceKey,e))}updateQueryState(e,t,n){this.co(e,t,n)}handleUserChange(e,t,n){t.forEach(s=>{this.ao(s)}),this.currentUser=e,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.lo(e)}notifyBundleLoaded(e){this.ho(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ws),this.removeItem(this.Hs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return N(at,"READ",e,t),t}setItem(e,t){N(at,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){N(at,"REMOVE",e),this.storage.removeItem(e)}Gs(e){const t=e;if(t.storageArea===this.storage){if(N(at,"EVENT",t.key,t.newValue),t.key===this.Hs)return void _e("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.bi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ys.test(t.key)){if(t.newValue==null){const n=this.Po(t.key);return this.To(n,null)}{const n=this.Io(t.key,t.newValue);if(n)return this.To(n.clientId,n)}}else if(this.Zs.test(t.key)){if(t.newValue!==null){const n=this.Eo(t.key,t.newValue);if(n)return this.Ao(n)}}else if(this.Xs.test(t.key)){if(t.newValue!==null){const n=this.Ro(t.key,t.newValue);if(n)return this.Vo(n)}}else if(t.key===this.eo){if(t.newValue!==null){const n=this.io(t.newValue);if(n)return this.so(n)}}else if(t.key===this.Js){const n=function(i){let o=Fe.le;if(i!=null)try{const c=JSON.parse(i);G(typeof c=="number",30636,{mo:i}),o=c}catch(c){_e(at,"Failed to read sequence number from WebStorage",c)}return o}(t.newValue);n!==Fe.le&&this.sequenceNumberHandler(n)}else if(t.key===this.no){const n=this.fo(t.newValue);await Promise.all(n.map(s=>this.syncEngine.po(s)))}}}else this.js.push(t)})}}get uo(){return this.zs.get(this.Ks)}ro(){this.setItem(this.Hs,this.uo.Qs())}_o(e,t,n){const s=new vo(this.currentUser,e,t,n),i=yd(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Qs())}ao(e){const t=yd(this.persistenceKey,this.currentUser,e);this.removeItem(t)}lo(e){const t={clientId:this.Ks,onlineState:e};this.storage.setItem(this.eo,JSON.stringify(t))}co(e,t,n){const s=Va(this.persistenceKey,e),i=new As(e,t,n);this.setItem(s,i.Qs())}ho(e){const t=JSON.stringify(Array.from(e));this.setItem(this.no,t)}Po(e){const t=this.Ys.exec(e);return t?t[1]:null}Io(e,t){const n=this.Po(e);return Io.qs(n,t)}Eo(e,t){const n=this.Zs.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return vo.qs(new ke(i),s,t)}Ro(e,t){const n=this.Xs.exec(e),s=Number(n[1]);return As.qs(s,t)}io(e){return hl.qs(e)}fo(e){return JSON.parse(e)}async Ao(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.yo(e.batchId,e.state,e.error);N(at,`Ignoring mutation for non-active user ${e.user.uid}`)}Vo(e){return this.syncEngine.wo(e.targetId,e.state,e.error)}To(e,t){const n=t?this.zs.insert(e,t):this.zs.remove(e),s=this.oo(this.zs),i=this.oo(n),o=[],c=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||c.push(l)}),this.syncEngine.bo(o,c).then(()=>{this.zs=n})}so(e){this.zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}oo(e){let t=Yc();return e.forEach((n,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class zm{constructor(){this.So=new gc,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,t,n){this.Do[e]=t}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new gc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class db{vo(e){}shutdown(){}}/**
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
 */const vd="ConnectivityMonitor";class Id{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){N(vd,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){N(vd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Si=null;function _c(){return Si===null?Si=function(){return 268435456+Math.round(2147483648*Math.random())}():Si++,"0x"+Si.toString(16)}/**
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
 */const xa="RestConnection",fb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class pb{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=t+"://"+e.host,this.ko=`projects/${n}/databases/${s}`,this.qo=this.databaseId.database===ao?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Qo(e,t,n,s,i){const o=_c(),c=this.$o(e,t.toUriEncodedString());N(xa,`Sending RPC '${e}' ${o}:`,c,n);const l={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(l,s,i),this.Ko(e,c,l,n).then(h=>(N(xa,`Received RPC '${e}' ${o}: `,h),h),h=>{throw Cs(xa,`RPC '${e}' ${o} failed with error: `,h,"url: ",c,"request:",n),h})}Wo(e,t,n,s,i,o){return this.Qo(e,t,n,s,i)}Uo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Or}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),n&&n.headers.forEach((s,i)=>e[i]=s)}$o(e,t){const n=fb[e];return`${this.Lo}/v1/${t}:${n}`}terminate(){}}/**
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
 */class mb{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
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
 */const Ce="WebChannelConnection";class gb extends pb{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,t,n,s){const i=_c();return new Promise((o,c)=>{const l=new Zf;l.setWithCredentials(!0),l.listenOnce(ep.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ni.NO_ERROR:const f=l.getResponseJson();N(Ce,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Ni.TIMEOUT:N(Ce,`RPC '${e}' ${i} timed out`),c(new B(x.DEADLINE_EXCEEDED,"Request time out"));break;case Ni.HTTP_ERROR:const p=l.getStatus();if(N(Ce,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let _=l.getResponseJson();Array.isArray(_)&&(_=_[0]);const b=_==null?void 0:_.error;if(b&&b.status&&b.message){const S=function(C){const k=C.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(k)>=0?k:x.UNKNOWN}(b.status);c(new B(S,b.message))}else c(new B(x.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new B(x.UNAVAILABLE,"Connection failed."));break;default:z(9055,{s_:e,streamId:i,o_:l.getLastErrorCode(),__:l.getLastError()})}}finally{N(Ce,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);N(Ce,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",h,n,15)})}a_(e,t,n){const s=_c(),i=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=rp(),c=np(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Uo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const f=i.join("");N(Ce,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let _=!1,b=!1;const S=new mb({Go:C=>{b?N(Ce,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(_||(N(Ce,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),N(Ce,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},zo:()=>p.close()}),D=(C,k,O)=>{C.listen(k,V=>{try{O(V)}catch(M){setTimeout(()=>{throw M},0)}})};return D(p,fs.EventType.OPEN,()=>{b||(N(Ce,`RPC '${e}' stream ${s} transport opened.`),S.t_())}),D(p,fs.EventType.CLOSE,()=>{b||(b=!0,N(Ce,`RPC '${e}' stream ${s} transport closed`),S.r_())}),D(p,fs.EventType.ERROR,C=>{b||(b=!0,Cs(Ce,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),S.r_(new B(x.UNAVAILABLE,"The operation could not be completed")))}),D(p,fs.EventType.MESSAGE,C=>{var k;if(!b){const O=C.data[0];G(!!O,16349);const V=O,M=(V==null?void 0:V.error)||((k=V[0])===null||k===void 0?void 0:k.error);if(M){N(Ce,`RPC '${e}' stream ${s} received error:`,M);const F=M.status;let K=function(y){const E=ve[y];if(E!==void 0)return tm(E)}(F),I=M.message;K===void 0&&(K=x.INTERNAL,I="Unknown error status: "+F+" with message "+M.message),b=!0,S.r_(new B(K,I)),p.close()}else N(Ce,`RPC '${e}' stream ${s} received:`,O),S.i_(O)}}),D(c,tp.STAT_EVENT,C=>{C.stat===Qa.PROXY?N(Ce,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===Qa.NOPROXY&&N(Ce,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.n_()},0),S}}/**
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
 *//**
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
 */function jm(){return typeof window<"u"?window:null}function qi(){return typeof document<"u"?document:null}/**
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
 */function $o(r){return new Tw(r,!0)}/**
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
 */class qm{constructor(e,t,n=1e3,s=1.5,i=6e4){this.bi=e,this.timerId=t,this.u_=n,this.c_=s,this.l_=i,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const t=Math.floor(this.h_+this.d_()),n=Math.max(0,Date.now()-this.T_),s=Math.max(0,t-n);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
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
 */const Ed="PersistentStream";class $m{constructor(e,t,n,s,i,o,c,l){this.bi=e,this.R_=n,this.V_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new qm(e,t)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,t){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(_e(t.toString()),_e("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(t)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),t=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.m_===t&&this.B_(n,s)},n=>{e(()=>{const s=new B(x.UNKNOWN,"Fetching auth token failed: "+n.message);return this.L_(s)})})}B_(e,t){const n=this.N_(this.m_);this.stream=this.k_(e,t),this.stream.jo(()=>{n(()=>this.listener.jo())}),this.stream.Jo(()=>{n(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{n(()=>this.L_(s))}),this.stream.onMessage(s=>{n(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return N(Ed,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return t=>{this.bi.enqueueAndForget(()=>this.m_===e?t():(N(Ed,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _b extends $m{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}k_(e,t){return this.connection.a_("Listen",e,t)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const t=Aw(this.serializer,e),n=function(i){if(!("targetChange"in i))return W.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?Me(o.readTime):W.min()}(e);return this.listener.Q_(t,n)}U_(e){const t={};t.database=uc(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=lo(l)?{documents:lm(i,l)}:{query:um(i,l).gt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=sm(i,o.resumeToken);const h=cc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(W.min())>0){c.readTime=Sr(i,o.snapshotVersion.toTimestamp());const h=cc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const n=Sw(this.serializer,e);n&&(t.labels=n),this.F_(t)}K_(e){const t={};t.database=uc(this.serializer),t.removeTarget=e,this.F_(t)}}class yb extends $m{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,t){return this.connection.a_("Write",e,t)}q_(e){return G(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){G(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const t=Rw(e.writeResults,e.commitTime),n=Me(e.commitTime);return this.listener.j_(n,t)}H_(){const e={};e.database=uc(this.serializer),this.F_(e)}G_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>fo(this.serializer,n))};this.F_(t)}}/**
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
 */class vb{}class Ib extends vb{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new B(x.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,t,n,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Qo(e,lc(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(x.UNKNOWN,i.toString())})}Wo(e,t,n,s,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Wo(e,lc(t,n),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(x.UNKNOWN,o.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class Eb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(_e(t),this.ea=!1):N("OnlineStateTracker",t)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
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
 */const Un="RemoteStore";class Tb{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=i,this.ca.vo(o=>{n.enqueueAndForget(async()=>{zn(this)&&(N(Un,"Restarting streams for network reachability change."),await async function(l){const h=$(l);h.aa.add(4),await ei(h),h.la.set("Unknown"),h.aa.delete(4),await Ko(h)}(this))})}),this.la=new Eb(n,s)}}async function Ko(r){if(zn(r))for(const e of r.ua)await e(!0)}async function ei(r){for(const e of r.ua)await e(!1)}function Go(r,e){const t=$(r);t._a.has(e.targetId)||(t._a.set(e.targetId,e),pl(t)?fl(t):Fr(t).b_()&&dl(t,e))}function Cr(r,e){const t=$(r),n=Fr(t);t._a.delete(e),n.b_()&&Km(t,e),t._a.size===0&&(n.b_()?n.v_():zn(t)&&t.la.set("Unknown"))}function dl(r,e){if(r.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Fr(r).U_(e)}function Km(r,e){r.ha.Ke(e),Fr(r).K_(e)}function fl(r){r.ha=new yw({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>r._a.get(e)||null,Pt:()=>r.datastore.serializer.databaseId}),Fr(r).start(),r.la.ta()}function pl(r){return zn(r)&&!Fr(r).w_()&&r._a.size>0}function zn(r){return $(r).aa.size===0}function Gm(r){r.ha=void 0}async function wb(r){r.la.set("Online")}async function bb(r){r._a.forEach((e,t)=>{dl(r,e)})}async function Ab(r,e){Gm(r),pl(r)?(r.la.ia(e),fl(r)):r.la.set("Unknown")}async function Rb(r,e,t){if(r.la.set("Online"),e instanceof rm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s._a.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s._a.delete(c),s.ha.removeTarget(c))}(r,e)}catch(n){N(Un,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Eo(r,n)}else if(e instanceof ji?r.ha.Xe(e):e instanceof nm?r.ha.ot(e):r.ha.nt(e),!t.isEqual(W.min()))try{const n=await Nm(r.localStore);t.compareTo(n)>=0&&await function(i,o){const c=i.ha.It(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i._a.get(h);f&&i._a.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i._a.get(l);if(!f)return;i._a.set(l,f.withResumeToken(ye.EMPTY_BYTE_STRING,f.snapshotVersion)),Km(i,l);const p=new It(f.target,l,h,f.sequenceNumber);dl(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){N(Un,"Failed to raise snapshot:",n),await Eo(r,n)}}async function Eo(r,e,t){if(!an(e))throw e;r.aa.add(1),await ei(r),r.la.set("Offline"),t||(t=()=>Nm(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{N(Un,"Retrying IndexedDB access"),await t(),r.aa.delete(1),await Ko(r)})}function Wm(r,e){return e().catch(t=>Eo(r,t,e))}async function Lr(r){const e=$(r),t=nn(e);let n=e.oa.length>0?e.oa[e.oa.length-1].batchId:An;for(;Sb(e);)try{const s=await hb(e.localStore,n);if(s===null){e.oa.length===0&&t.v_();break}n=s.batchId,Pb(e,s)}catch(s){await Eo(e,s)}Hm(e)&&Qm(e)}function Sb(r){return zn(r)&&r.oa.length<10}function Pb(r,e){r.oa.push(e);const t=nn(r);t.b_()&&t.W_&&t.G_(e.mutations)}function Hm(r){return zn(r)&&!nn(r).w_()&&r.oa.length>0}function Qm(r){nn(r).start()}async function Cb(r){nn(r).H_()}async function kb(r){const e=nn(r);for(const t of r.oa)e.G_(t.mutations)}async function Vb(r,e,t){const n=r.oa.shift(),s=el.from(n,e,t);await Wm(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Lr(r)}async function Db(r,e){e&&nn(r).W_&&await async function(n,s){if(function(o){return gw(o)&&o!==x.ABORTED}(s.code)){const i=n.oa.shift();nn(n).D_(),await Wm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Lr(n)}}(r,e),Hm(r)&&Qm(r)}async function Td(r,e){const t=$(r);t.asyncQueue.verifyOperationInProgress(),N(Un,"RemoteStore received new credentials");const n=zn(t);t.aa.add(3),await ei(t),n&&t.la.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.aa.delete(3),await Ko(t)}async function yc(r,e){const t=$(r);e?(t.aa.delete(2),await Ko(t)):e||(t.aa.add(2),await ei(t),t.la.set("Unknown"))}function Fr(r){return r.Pa||(r.Pa=function(t,n,s){const i=$(t);return i.Y_(),new _b(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{jo:wb.bind(null,r),Jo:bb.bind(null,r),Zo:Ab.bind(null,r),Q_:Rb.bind(null,r)}),r.ua.push(async e=>{e?(r.Pa.D_(),pl(r)?fl(r):r.la.set("Unknown")):(await r.Pa.stop(),Gm(r))})),r.Pa}function nn(r){return r.Ta||(r.Ta=function(t,n,s){const i=$(t);return i.Y_(),new yb(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{jo:()=>Promise.resolve(),Jo:Cb.bind(null,r),Zo:Db.bind(null,r),z_:kb.bind(null,r),j_:Vb.bind(null,r)}),r.ua.push(async e=>{e?(r.Ta.D_(),await Lr(r)):(await r.Ta.stop(),r.oa.length>0&&(N(Un,`Stopping write stream with ${r.oa.length} pending writes`),r.oa=[]))})),r.Ta}/**
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
 */class ml{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,c=new ml(e,t,o,s,i);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gl(r,e){if(_e("AsyncQueue",`${e}: ${r}`),an(r))return new B(x.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class dr{static emptySet(e){return new dr(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||U.comparator(t.key,n.key):(t,n)=>U.comparator(t.key,n.key),this.keyedMap=ps(),this.sortedSet=new ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof dr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new dr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class wd{constructor(){this.Ia=new ce(U.comparator)}track(e){const t=e.doc.key,n=this.Ia.get(t);n?e.type!==0&&n.type===3?this.Ia=this.Ia.insert(t,e):e.type===3&&n.type!==1?this.Ia=this.Ia.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.Ia=this.Ia.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.Ia=this.Ia.remove(t):e.type===1&&n.type===2?this.Ia=this.Ia.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):z(63341,{Vt:e,Ea:n}):this.Ia=this.Ia.insert(t,e)}da(){const e=[];return this.Ia.inorderTraversal((t,n)=>{e.push(n)}),e}}class kr{constructor(e,t,n,s,i,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new kr(e,t,dr.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class xb{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class Nb{constructor(){this.queries=bd(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(t,n){const s=$(t),i=s.queries;s.queries=bd(),i.forEach((o,c)=>{for(const l of c.Ra)l.onError(n)})})(this,new B(x.ABORTED,"Firestore shutting down"))}}function bd(){return new Ct(r=>zp(r),Lo)}async function Ob(r,e){const t=$(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.Va()&&e.ma()&&(n=2):(i=new xb,n=e.ma()?0:1);try{switch(n){case 0:i.Aa=await t.onListen(s,!0);break;case 1:i.Aa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=gl(o,`Initialization of query '${rr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Ra.push(e),e.ga(t.onlineState),i.Aa&&e.pa(i.Aa)&&_l(t)}async function Mb(r,e){const t=$(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.Ra.indexOf(e);o>=0&&(i.Ra.splice(o,1),i.Ra.length===0?s=e.ma()?0:1:!i.Va()&&e.ma()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Lb(r,e){const t=$(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.Ra)c.pa(s)&&(n=!0);o.Aa=s}}n&&_l(t)}function Fb(r,e,t){const n=$(r),s=n.queries.get(e);if(s)for(const i of s.Ra)i.onError(t);n.queries.delete(e)}function _l(r){r.fa.forEach(e=>{e.next()})}var vc,Ad;(Ad=vc||(vc={})).ya="default",Ad.Cache="cache";class Ub{constructor(e,t,n){this.query=e,this.wa=t,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=n||{}}pa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new kr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ba?this.Da(e)&&(this.wa.next(e),t=!0):this.va(e,this.onlineState)&&(this.Ca(e),t=!0),this.Sa=e,t}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let t=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),t=!0),t}va(e,t){if(!e.fromCache||!this.ma())return!0;const n=t!=="Offline";return(!this.options.Fa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const t=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ca(e){e=kr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==vc.Cache}}/**
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
 */class Jm{constructor(e){this.key=e}}class Ym{constructor(e){this.key=e}}class Bb{constructor(e,t){this.query=e,this.qa=t,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=X(),this.mutatedKeys=X(),this.Ua=qp(e),this.Ka=new dr(this.Ua)}get Wa(){return this.qa}Ga(e,t){const n=t?t.za:new wd,s=t?t.Ka:this.Ka;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const _=s.get(f),b=Ys(this.query,p)?p:null,S=!!_&&this.mutatedKeys.has(_.key),D=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let C=!1;_&&b?_.data.isEqual(b.data)?S!==D&&(n.track({type:3,doc:b}),C=!0):this.ja(_,b)||(n.track({type:2,doc:b}),C=!0,(l&&this.Ua(b,l)>0||h&&this.Ua(b,h)<0)&&(c=!0)):!_&&b?(n.track({type:0,doc:b}),C=!0):_&&!b&&(n.track({type:1,doc:_}),C=!0,(l||h)&&(c=!0)),C&&(b?(o=o.add(b),i=D?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{Ka:o,za:n,ys:c,mutatedKeys:i}}ja(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const o=e.za.da();o.sort((f,p)=>function(b,S){const D=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z(20277,{Vt:C})}};return D(b)-D(S)}(f.type,p.type)||this.Ua(f.doc,p.doc)),this.Ha(n),s=s!=null&&s;const c=t&&!s?this.Ja():[],l=this.$a.size===0&&this.current&&!s?1:0,h=l!==this.Qa;return this.Qa=l,o.length!==0||h?{snapshot:new kr(this.query,e.Ka,i,o,e.mutatedKeys,l===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ya:c}:{Ya:c}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new wd,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(t=>this.qa=this.qa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qa=this.qa.delete(t)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=X(),this.Ka.forEach(n=>{this.Za(n.key)&&(this.$a=this.$a.add(n.key))});const t=[];return e.forEach(n=>{this.$a.has(n)||t.push(new Ym(n))}),this.$a.forEach(n=>{e.has(n)||t.push(new Jm(n))}),t}Xa(e){this.qa=e.Ns,this.$a=X();const t=this.Ga(e.documents);return this.applyChanges(t,!0)}eu(){return kr.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const Ur="SyncEngine";class zb{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class jb{constructor(e){this.key=e,this.tu=!1}}class qb{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nu={},this.ru=new Ct(c=>zp(c),Lo),this.iu=new Map,this.su=new Set,this.ou=new ce(U.comparator),this._u=new Map,this.au=new ol,this.uu={},this.cu=new Map,this.lu=Fn.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function $b(r,e,t=!0){const n=Wo(r);let s;const i=n.ru.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.eu()):s=await Xm(n,e,t,!0),s}async function Kb(r,e){const t=Wo(r);await Xm(t,e,!0,!1)}async function Xm(r,e,t,n){const s=await yo(r.localStore,We(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let c;return n&&(c=await yl(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&Go(r.remoteStore,s),c}async function yl(r,e,t,n,s){r.Pu=(p,_,b)=>async function(D,C,k,O){let V=C.view.Ga(k);V.ys&&(V=await mc(D.localStore,C.query,!1).then(({documents:I})=>C.view.Ga(I,V)));const M=O&&O.targetChanges.get(C.targetId),F=O&&O.targetMismatches.get(C.targetId)!=null,K=C.view.applyChanges(V,D.isPrimaryClient,M,F);return Ic(D,C.targetId,K.Ya),K.snapshot}(r,p,_,b);const i=await mc(r.localStore,e,!0),o=new Bb(e,i.Ns),c=o.Ga(i.documents),l=Zs.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),h=o.applyChanges(c,r.isPrimaryClient,l);Ic(r,t,h.Ya);const f=new zb(e,t,o);return r.ru.set(e,f),r.iu.has(t)?r.iu.get(t).push(e):r.iu.set(t,[e]),h.snapshot}async function Gb(r,e,t){const n=$(r),s=n.ru.get(e),i=n.iu.get(s.targetId);if(i.length>1)return n.iu.set(s.targetId,i.filter(o=>!Lo(o,e))),void n.ru.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Pr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&Cr(n.remoteStore,s.targetId),Vr(n,s.targetId)}).catch(on)):(Vr(n,s.targetId),await Pr(n.localStore,s.targetId,!0))}async function Wb(r,e){const t=$(r),n=t.ru.get(e),s=t.iu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Cr(t.remoteStore,n.targetId))}async function Hb(r,e,t){const n=Tl(r);try{const s=await function(o,c){const l=$(o),h=pe.now(),f=c.reduce((b,S)=>b.add(S.key),X());let p,_;return l.persistence.runTransaction("Locally write mutations","readwrite",b=>{let S=Ge(),D=X();return l.Cs.getEntries(b,f).next(C=>{S=C,S.forEach((k,O)=>{O.isValidDocument()||(D=D.add(k))})}).next(()=>l.localDocuments.getOverlayedDocuments(b,S)).next(C=>{p=C;const k=[];for(const O of c){const V=pw(O,p.get(O.key).overlayedDocument);V!=null&&k.push(new cn(O.key,V,Dp(V.value.mapValue),Ue.exists(!0)))}return l.mutationQueue.addMutationBatch(b,h,k,c)}).next(C=>{_=C;const k=C.applyToLocalDocumentSet(p,D);return l.documentOverlayCache.saveOverlays(b,C.batchId,k)})}).then(()=>({batchId:_.batchId,changes:Kp(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.uu[o.currentUser.toKey()];h||(h=new ce(J)),h=h.insert(c,l),o.uu[o.currentUser.toKey()]=h}(n,s.batchId,t),await ln(n,s.changes),await Lr(n.remoteStore)}catch(s){const i=gl(s,"Failed to persist write");t.reject(i)}}async function Zm(r,e){const t=$(r);try{const n=await lb(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t._u.get(i);o&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.tu=!0:s.modifiedDocuments.size>0?G(o.tu,14607):s.removedDocuments.size>0&&(G(o.tu,42227),o.tu=!1))}),await ln(t,n,e)}catch(n){await on(n)}}function Rd(r,e,t){const n=$(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.ru.forEach((i,o)=>{const c=o.view.ga(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=$(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const _ of p.Ra)_.ga(c)&&(h=!0)}),h&&_l(l)}(n.eventManager,e),s.length&&n.nu.Q_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Qb(r,e,t){const n=$(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n._u.get(e),i=s&&s.key;if(i){let o=new ce(U.comparator);o=o.insert(i,ge.newNoDocument(i,W.min()));const c=X().add(i),l=new Xs(W.min(),new Map,new ce(J),o,c);await Zm(n,l),n.ou=n.ou.remove(i),n._u.delete(e),El(n)}else await Pr(n.localStore,e,!1).then(()=>Vr(n,e,t)).catch(on)}async function Jb(r,e){const t=$(r),n=e.batch.batchId;try{const s=await cb(t.localStore,e);Il(t,n,null),vl(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await ln(t,s)}catch(s){await on(s)}}async function Yb(r,e,t){const n=$(r);try{const s=await function(o,c){const l=$(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(G(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(n.localStore,e);Il(n,e,t),vl(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await ln(n,s)}catch(s){await on(s)}}function vl(r,e){(r.cu.get(e)||[]).forEach(t=>{t.resolve()}),r.cu.delete(e)}function Il(r,e,t){const n=$(r);let s=n.uu[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.uu[n.currentUser.toKey()]=s}}function Vr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.iu.get(e))r.ru.delete(n),t&&r.nu.Tu(n,t);r.iu.delete(e),r.isPrimaryClient&&r.au.Ur(e).forEach(n=>{r.au.containsKey(n)||eg(r,n)})}function eg(r,e){r.su.delete(e.path.canonicalString());const t=r.ou.get(e);t!==null&&(Cr(r.remoteStore,t),r.ou=r.ou.remove(e),r._u.delete(t),El(r))}function Ic(r,e,t){for(const n of t)n instanceof Jm?(r.au.addReference(n.key,e),Xb(r,n)):n instanceof Ym?(N(Ur,"Document no longer in limbo: "+n.key),r.au.removeReference(n.key,e),r.au.containsKey(n.key)||eg(r,n.key)):z(19791,{Iu:n})}function Xb(r,e){const t=e.key,n=t.path.canonicalString();r.ou.get(t)||r.su.has(n)||(N(Ur,"New document in limbo: "+t),r.su.add(n),El(r))}function El(r){for(;r.su.size>0&&r.ou.size<r.maxConcurrentLimboResolutions;){const e=r.su.values().next().value;r.su.delete(e);const t=new U(se.fromString(e)),n=r.lu.next();r._u.set(n,new jb(t)),r.ou=r.ou.insert(t,n),Go(r.remoteStore,new It(We(Mo(t.path)),n,"TargetPurposeLimboResolution",Fe.le))}}async function ln(r,e,t){const n=$(r),s=[],i=[],o=[];n.ru.isEmpty()||(n.ru.forEach((c,l)=>{o.push(n.Pu(l,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=ll.Ps(l.targetId,h);i.push(p)}}))}),await Promise.all(o),n.nu.Q_(s),await async function(l,h){const f=$(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>w.forEach(h,_=>w.forEach(_.ls,b=>f.persistence.referenceDelegate.addReference(p,_.targetId,b)).next(()=>w.forEach(_.hs,b=>f.persistence.referenceDelegate.removeReference(p,_.targetId,b)))))}catch(p){if(!an(p))throw p;N(ul,"Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const b=f.Ss.get(_),S=b.snapshotVersion,D=b.withLastLimboFreeSnapshotVersion(S);f.Ss=f.Ss.insert(_,D)}}}(n.localStore,i))}async function Zb(r,e){const t=$(r);if(!t.currentUser.isEqual(e)){N(Ur,"User change. New user:",e.toKey());const n=await xm(t.localStore,e);t.currentUser=e,function(i,o){i.cu.forEach(c=>{c.forEach(l=>{l.reject(new B(x.CANCELLED,o))})}),i.cu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await ln(t,n.Ms)}}function eA(r,e){const t=$(r),n=t._u.get(e);if(n&&n.tu)return X().add(n.key);{let s=X();const i=t.iu.get(e);if(!i)return s;for(const o of i){const c=t.ru.get(o);s=s.unionWith(c.view.Wa)}return s}}async function tA(r,e){const t=$(r),n=await mc(t.localStore,e.query,!0),s=e.view.Xa(n);return t.isPrimaryClient&&Ic(t,e.targetId,s.Ya),s}async function nA(r,e){const t=$(r);return Mm(t.localStore,e).then(n=>ln(t,n))}async function rA(r,e,t,n){const s=$(r),i=await function(c,l){const h=$(c),f=$(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.Hn(p,l).next(_=>_?h.localDocuments.getDocuments(p,_):w.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await Lr(s.remoteStore):t==="acknowledged"||t==="rejected"?(Il(s,e,n||null),vl(s,e),function(c,l){$($(c).mutationQueue).Xn(l)}(s.localStore,e)):z(6720,"Unknown batchState",{Eu:t}),await ln(s,i)):N(Ur,"Cannot apply mutation batch with id: "+e)}async function sA(r,e){const t=$(r);if(Wo(t),Tl(t),e===!0&&t.hu!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await Sd(t,n.toArray());t.hu=!0,await yc(t.remoteStore,!0);for(const i of s)Go(t.remoteStore,i)}else if(e===!1&&t.hu!==!1){const n=[];let s=Promise.resolve();t.iu.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then(()=>(Vr(t,o),Pr(t.localStore,o,!0))),Cr(t.remoteStore,o)}),await s,await Sd(t,n),function(o){const c=$(o);c._u.forEach((l,h)=>{Cr(c.remoteStore,h)}),c.au.Kr(),c._u=new Map,c.ou=new ce(U.comparator)}(t),t.hu=!1,await yc(t.remoteStore,!1)}}async function Sd(r,e,t){const n=$(r),s=[],i=[];for(const o of e){let c;const l=n.iu.get(o);if(l&&l.length!==0){c=await yo(n.localStore,We(l[0]));for(const h of l){const f=n.ru.get(h),p=await tA(n,f);p.snapshot&&i.push(p.snapshot)}}else{const h=await Om(n.localStore,o);c=await yo(n.localStore,h),await yl(n,tg(h),o,!1,c.resumeToken)}s.push(c)}return n.nu.Q_(i),s}function tg(r){return Bp(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function iA(r){return function(t){return $($(t).persistence).us()}($(r).localStore)}async function oA(r,e,t,n){const s=$(r);if(s.hu)return void N(Ur,"Ignoring unexpected query state notification.");const i=s.iu.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Mm(s.localStore,jp(i[0])),c=Xs.createSynthesizedRemoteEventForCurrentChange(e,t==="current",ye.EMPTY_BYTE_STRING);await ln(s,o,c);break}case"rejected":await Pr(s.localStore,e,!0),Vr(s,e,n);break;default:z(64155,t)}}async function aA(r,e,t){const n=Wo(r);if(n.hu){for(const s of e){if(n.iu.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){N(Ur,"Adding an already active target "+s);continue}const i=await Om(n.localStore,s),o=await yo(n.localStore,i);await yl(n,tg(i),o.targetId,!1,o.resumeToken),Go(n.remoteStore,o)}for(const s of t)n.iu.has(s)&&await Pr(n.localStore,s,!1).then(()=>{Cr(n.remoteStore,s),Vr(n,s)}).catch(on)}}function Wo(r){const e=$(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Qb.bind(null,e),e.nu.Q_=Lb.bind(null,e.eventManager),e.nu.Tu=Fb.bind(null,e.eventManager),e}function Tl(r){const e=$(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Jb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yb.bind(null,e),e}class Bs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$o(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,t){return null}fu(e,t){return null}Vu(e){return Dm(this.persistence,new Vm,e.initialUser,this.serializer)}Ru(e){return new al(qo.Ei,this.serializer)}Au(e){return new zm}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bs.provider={build:()=>new Bs};class cA extends Bs{constructor(e){super(),this.cacheSizeBytes=e}mu(e,t){G(this.persistence.referenceDelegate instanceof _o,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Am(n,e.asyncQueue,t)}Ru(e){const t=this.cacheSizeBytes!==void 0?Ve.withCacheSize(this.cacheSizeBytes):Ve.DEFAULT;return new al(n=>_o.Ei(n,t),this.serializer)}}class ng extends Bs{constructor(e,t,n){super(),this.gu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.gu.initialize(this,e),await Tl(this.gu.syncEngine),await Lr(this.gu.remoteStore),await this.persistence.Ki(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Vu(e){return Dm(this.persistence,new Vm,e.initialUser,this.serializer)}mu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Am(n,e.asyncQueue,t)}fu(e,t){const n=new mT(t,this.persistence);return new pT(e.asyncQueue,n)}Ru(e){const t=km(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Ve.withCacheSize(this.cacheSizeBytes):Ve.DEFAULT;return new cl(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,jm(),qi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Au(e){return new zm}}class lA extends ng{constructor(e,t){super(e,t,!1),this.gu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.gu.syncEngine;this.sharedClientState instanceof Da&&(this.sharedClientState.syncEngine={yo:rA.bind(null,t),wo:oA.bind(null,t),bo:aA.bind(null,t),us:iA.bind(null,t),po:nA.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ki(async n=>{await sA(this.gu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Au(e){const t=jm();if(!Da.C(t))throw new B(x.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=km(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Da(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class zs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Rd(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zb.bind(null,this.syncEngine),await yc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Nb}()}createDatastore(e){const t=$o(e.databaseInfo.databaseId),n=function(i){return new gb(i)}(e.databaseInfo);return function(i,o,c,l){return new Ib(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,c){return new Tb(n,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Rd(this.syncEngine,t,0),function(){return Id.C()?new Id:new db}())}createSyncEngine(e,t){return function(s,i,o,c,l,h,f){const p=new qb(s,i,o,c,l,h);return f&&(p.hu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=$(s);N(Un,"RemoteStore shutting down."),i.aa.add(5),await ei(i),i.ca.shutdown(),i.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}zs.provider={build:()=>new zs};/**
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
 *//**
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
 */class uA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):_e("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const rn="FirestoreClient";class hA{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=ke.UNAUTHENTICATED,this.clientId=op.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{N(rn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(N(rn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=gl(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Na(r,e){r.asyncQueue.verifyOperationInProgress(),N(rn,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await xm(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Pd(r,e){r.asyncQueue.verifyOperationInProgress();const t=await dA(r);N(rn,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Td(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Td(e.remoteStore,s)),r._onlineComponents=e}async function dA(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N(rn,"Using user provided OfflineComponentProvider");try{await Na(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Cs("Error using user provided cache. Falling back to memory cache: "+t),await Na(r,new Bs)}}else N(rn,"Using default OfflineComponentProvider"),await Na(r,new cA(void 0));return r._offlineComponents}async function rg(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N(rn,"Using user provided OnlineComponentProvider"),await Pd(r,r._uninitializedComponentsProvider._online)):(N(rn,"Using default OnlineComponentProvider"),await Pd(r,new zs))),r._onlineComponents}function fA(r){return rg(r).then(e=>e.syncEngine)}async function Cd(r){const e=await rg(r),t=e.eventManager;return t.onListen=$b.bind(null,e.syncEngine),t.onUnlisten=Gb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Kb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Wb.bind(null,e.syncEngine),t}/**
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
 */function sg(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const kd=new Map;/**
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
 */function ig(r,e,t){if(!t)throw new B(x.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function pA(r,e,t,n){if(e===!0&&n===!0)throw new B(x.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Vd(r){if(!U.isDocumentKey(r))throw new B(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Dd(r){if(U.isDocumentKey(r))throw new B(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function wl(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":z(12329,{type:typeof r})}function fr(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new B(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=wl(r);throw new B(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */const mA="firestore.googleapis.com",xd=!0;class Nd{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mA,this.ssl=xd}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:xd;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Im;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<bm)throw new B(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sg((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bl{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new sT;switch(n.type){case"firstParty":return new aT(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new B(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=kd.get(t);n&&(N("ComponentProvider","Removing Datastore"),kd.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Ho{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ho(this.firestore,e,this._query)}}class He{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}}class Zt extends Ho{constructor(e,t,n){super(e,t,Mo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new U(e))}withConverter(e){return new Zt(this.firestore,e,this._path)}}function gA(r,e,...t){if(r=Be(r),ig("collection","path",e),r instanceof bl){const n=se.fromString(e,...t);return Dd(n),new Zt(r,null,n)}{if(!(r instanceof He||r instanceof Zt))throw new B(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(se.fromString(e,...t));return Dd(n),new Zt(r.firestore,null,n)}}function Od(r,e,...t){if(r=Be(r),arguments.length===1&&(e=op.newId()),ig("doc","path",e),r instanceof bl){const n=se.fromString(e,...t);return Vd(n),new He(r,null,new U(n))}{if(!(r instanceof He||r instanceof Zt))throw new B(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(se.fromString(e,...t));return Vd(n),new He(r.firestore,r instanceof Zt?r.converter:null,new U(n))}}/**
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
 */const Md="AsyncQueue";class Ld{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new qm(this,"async_queue_retry"),this.ju=()=>{const n=qi();n&&N(Md,"Visibility state changed to "+n.visibilityState),this.y_.A_()},this.Hu=e;const t=qi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const t=qi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const t=new Yt;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!an(e))throw e;N(Md,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const t=this.Hu.then(()=>(this.Wu=!0,e().catch(n=>{throw this.Ku=n,this.Wu=!1,_e("INTERNAL UNHANDLED ERROR: ",Fd(n)),n}).then(n=>(this.Wu=!1,n))));return this.Hu=t,t}enqueueAfterDelay(e,t,n){this.Ju(),this.zu.indexOf(e)>-1&&(t=0);const s=ml.createAndSchedule(this,e,t,n,i=>this.Xu(i));return this.Uu.push(s),s}Ju(){this.Ku&&z(47125,{ec:Fd(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const t of this.Uu)if(t.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Uu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const t=this.Uu.indexOf(e);this.Uu.splice(t,1)}}function Fd(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
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
 */function Ud(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class js extends bl{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Ld,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ld(e),this._firestoreClient=void 0,await e}}}function _A(r,e,t){t||(t=ao);const n=Cc(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(Pn(i,e))return s;throw new B(x.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new B(x.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<bm)throw new B(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e,instanceIdentifier:t})}function og(r){if(r._terminated)throw new B(x.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||yA(r),r._firestoreClient}function yA(r){var e,t,n;const s=r._freezeSettings(),i=function(c,l,h,f){return new qT(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,sg(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new hA(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(r._componentsProvider))}/**
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
 */class Dr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dr(ye.fromBase64String(e))}catch(t){throw new B(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Dr(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Al{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ag{constructor(e){this._methodName=e}}/**
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
 */class Rl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Sl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const vA=/^__.*__$/;class IA{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new cn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mr(e,this.data,t,this.fieldTransforms)}}function cg(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z(40011,{oc:r})}}class Pl{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this._c(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new Pl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ac({path:n,cc:!1});return s.lc(e),s}hc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ac({path:n,cc:!1});return s._c(),s}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return To(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(cg(this.oc)&&vA.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class EA{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||$o(e)}dc(e,t,n,s=!1){return new Pl({oc:e,methodName:t,Ec:n,path:fe.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function TA(r){const e=r._freezeSettings(),t=$o(r._databaseId);return new EA(r._databaseId,!!e.ignoreUndefinedProperties,t)}function wA(r,e,t,n,s,i={}){const o=r.dc(i.merge||i.mergeFields?2:0,e,t,s);dg("Data must be an object, but it was:",o,n);const c=ug(n,o);let l,h;if(i.merge)l=new Ze(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const _=bA(e,p,t);if(!o.contains(_))throw new B(x.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);RA(f,_)||f.push(_)}l=new Ze(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new IA(new Le(c),l,h)}function lg(r,e){if(hg(r=Be(r)))return dg("Unsupported field value:",e,r),ug(r,e);if(r instanceof ag)return function(n,s){if(!cg(s.oc))throw s.Tc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const c of n){let l=lg(c,s.Pc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=Be(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return aw(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=pe.fromDate(n);return{timestampValue:Sr(s.serializer,i)}}if(n instanceof pe){const i=new pe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Sr(s.serializer,i)}}if(n instanceof Rl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Dr)return{bytesValue:sm(s.serializer,n._byteString)};if(n instanceof He){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.Tc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:rl(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Sl)return function(o,c){return{mapValue:{fields:{[Wc]:{stringValue:Hc},[Er]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Tc("VectorValues must only contain numeric values.");return Xc(c.serializer,h)})}}}}}}(n,s);throw s.Tc(`Unsupported field value: ${wl(n)}`)}(r,e)}function ug(r,e){const t={};return wp(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bn(r,(n,s)=>{const i=lg(s,e.uc(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function hg(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof pe||r instanceof Rl||r instanceof Dr||r instanceof He||r instanceof ag||r instanceof Sl)}function dg(r,e,t){if(!hg(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=wl(t);throw n==="an object"?e.Tc(r+" a custom object"):e.Tc(r+" "+n)}}function bA(r,e,t){if((e=Be(e))instanceof Al)return e._internalPath;if(typeof e=="string")return fg(r,e);throw To("Field path arguments must be of type string or ",r,!1,void 0,t)}const AA=new RegExp("[~\\*/\\[\\]]");function fg(r,e,t){if(e.search(AA)>=0)throw To(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Al(...e.split("."))._internalPath}catch{throw To(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function To(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${n}`),o&&(l+=` in document ${s}`),l+=")"),new B(x.INVALID_ARGUMENT,c+r+l)}function RA(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class pg{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(mg("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class SA extends pg{data(){return super.data()}}function mg(r,e){return typeof e=="string"?fg(r,e):e instanceof Al?e._internalPath:e._delegate._internalPath}/**
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
 */function PA(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new B(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class CA{convertValue(e,t="none"){switch(en(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(At(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Bn(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t[Er].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(o=>ue(o.doubleValue));return new Sl(i)}convertGeoPoint(e){return new Rl(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=xo(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Os(e));default:return null}}convertTimestamp(e){const t=bt(e);return new pe(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=se.fromString(e);G(pm(n),9688,{name:e});const s=new Nn(n.get(1),n.get(3)),i=new U(n.popFirst(5));return s.isEqual(t)||_e(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function kA(r,e,t){let n;return n=r?r.toFirestore(e):e,n}/**
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
 */class _s{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gg extends pg{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $i(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(mg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class $i extends gg{data(e={}){return super.data(e)}}class VA{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new _s(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new $i(this._firestore,this._userDataWriter,n.key,n,new _s(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new $i(s._firestore,s._userDataWriter,c.doc.key,c.doc,new _s(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new $i(s._firestore,s._userDataWriter,c.doc.key,c.doc,new _s(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:DA(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function DA(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z(61501,{type:r})}}class _g extends CA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,t)}}function xA(r,e,t){r=fr(r,He);const n=fr(r.firestore,js),s=kA(r.converter,e);return yg(n,[wA(TA(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Ue.none())])}function NA(r){return yg(fr(r.firestore,js),[new Bo(r._key,Ue.none())])}function Bd(r,...e){var t,n,s;r=Be(r);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Ud(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Ud(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,f;if(r instanceof He)h=fr(r.firestore,js),f=Mo(r._key.path),l={next:p=>{e[o]&&e[o](OA(h,r,p))},error:e[o+1],complete:e[o+2]};else{const p=fr(r,Ho);h=fr(p.firestore,js),f=p._query;const _=new _g(h);l={next:b=>{e[o]&&e[o](new VA(h,_,p,b))},error:e[o+1],complete:e[o+2]},PA(r._query)}return function(_,b,S,D){const C=new uA(D),k=new Ub(b,C,S);return _.asyncQueue.enqueueAndForget(async()=>Ob(await Cd(_),k)),()=>{C.yu(),_.asyncQueue.enqueueAndForget(async()=>Mb(await Cd(_),k))}}(og(h),f,c,l)}function yg(r,e){return function(n,s){const i=new Yt;return n.asyncQueue.enqueueAndForget(async()=>Hb(await fA(n),s,i)),i.promise}(og(r),e)}function OA(r,e,t){const n=t.docs.get(e._key),s=new _g(r);return new gg(r,s,e._key,n,new _s(t.hasPendingWrites,t.fromCache),e.converter)}class MA{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=BA(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function LA(r){return new MA(r)}class FA{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=zs.provider,this._offlineComponentProvider={build:t=>new ng(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class UA{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=zs.provider,this._offlineComponentProvider={build:t=>new lA(t,e==null?void 0:e.cacheSizeBytes)}}}function BA(r){return new FA(void 0)}function zA(){return new UA}(function(e,t=!0){(function(s){Or=s})(xr),pr(new Cn("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),c=new js(new iT(n.getProvider("auth-internal")),new cT(o,n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new B(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nn(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Qt(yh,vh,e),Qt(yh,vh,"esm2017")})();const zd={apiKey:"AIzaSyAKVO6gUqEqKuvFdVewWsV-kE4Bq6SB7Kw",authDomain:"fast-stack-8a068.firebaseapp.com",projectId:"fast-stack-8a068",storageBucket:"fast-stack-8a068.firebasestorage.app",messagingSenderId:"47147120648",appId:"1:47147120648:web:94b850912f0e8bbb5fb9bd"};let cr;Rv().length&&(cr=mf(),Sv(cr)),cr=Ka(zd);const ls=tT(cr),Oa=_A(cr,{localCache:LA({tabManager:zA()})}),Cl="-",jA=r=>{const e=$A(r),{conflictingClassGroups:t,conflictingClassGroupModifiers:n}=r;return{getClassGroupId:o=>{const c=o.split(Cl);return c[0]===""&&c.length!==1&&c.shift(),vg(c,e)||qA(o)},getConflictingClassGroupIds:(o,c)=>{const l=t[o]||[];return c&&n[o]?[...l,...n[o]]:l}}},vg=(r,e)=>{var o;if(r.length===0)return e.classGroupId;const t=r[0],n=e.nextPart.get(t),s=n?vg(r.slice(1),n):void 0;if(s)return s;if(e.validators.length===0)return;const i=r.join(Cl);return(o=e.validators.find(({validator:c})=>c(i)))==null?void 0:o.classGroupId},jd=/^\[(.+)\]$/,qA=r=>{if(jd.test(r)){const e=jd.exec(r)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},$A=r=>{const{theme:e,classGroups:t}=r,n={nextPart:new Map,validators:[]};for(const s in t)Ec(t[s],n,s,e);return n},Ec=(r,e,t,n)=>{r.forEach(s=>{if(typeof s=="string"){const i=s===""?e:qd(e,s);i.classGroupId=t;return}if(typeof s=="function"){if(KA(s)){Ec(s(n),e,t,n);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([i,o])=>{Ec(o,qd(e,i),t,n)})})},qd=(r,e)=>{let t=r;return e.split(Cl).forEach(n=>{t.nextPart.has(n)||t.nextPart.set(n,{nextPart:new Map,validators:[]}),t=t.nextPart.get(n)}),t},KA=r=>r.isThemeGetter,GA=r=>{if(r<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,n=new Map;const s=(i,o)=>{t.set(i,o),e++,e>r&&(e=0,n=t,t=new Map)};return{get(i){let o=t.get(i);if(o!==void 0)return o;if((o=n.get(i))!==void 0)return s(i,o),o},set(i,o){t.has(i)?t.set(i,o):s(i,o)}}},Tc="!",wc=":",WA=wc.length,HA=r=>{const{prefix:e,experimentalParseClassName:t}=r;let n=s=>{const i=[];let o=0,c=0,l=0,h;for(let S=0;S<s.length;S++){let D=s[S];if(o===0&&c===0){if(D===wc){i.push(s.slice(l,S)),l=S+WA;continue}if(D==="/"){h=S;continue}}D==="["?o++:D==="]"?o--:D==="("?c++:D===")"&&c--}const f=i.length===0?s:s.substring(l),p=QA(f),_=p!==f,b=h&&h>l?h-l:void 0;return{modifiers:i,hasImportantModifier:_,baseClassName:p,maybePostfixModifierPosition:b}};if(e){const s=e+wc,i=n;n=o=>o.startsWith(s)?i(o.substring(s.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:o,maybePostfixModifierPosition:void 0}}if(t){const s=n;n=i=>t({className:i,parseClassName:s})}return n},QA=r=>r.endsWith(Tc)?r.substring(0,r.length-1):r.startsWith(Tc)?r.substring(1):r,JA=r=>{const e=Object.fromEntries(r.orderSensitiveModifiers.map(n=>[n,!0]));return n=>{if(n.length<=1)return n;const s=[];let i=[];return n.forEach(o=>{o[0]==="["||e[o]?(s.push(...i.sort(),o),i=[]):i.push(o)}),s.push(...i.sort()),s}},YA=r=>({cache:GA(r.cacheSize),parseClassName:HA(r),sortModifiers:JA(r),...jA(r)}),XA=/\s+/,ZA=(r,e)=>{const{parseClassName:t,getClassGroupId:n,getConflictingClassGroupIds:s,sortModifiers:i}=e,o=[],c=r.trim().split(XA);let l="";for(let h=c.length-1;h>=0;h-=1){const f=c[h],{isExternal:p,modifiers:_,hasImportantModifier:b,baseClassName:S,maybePostfixModifierPosition:D}=t(f);if(p){l=f+(l.length>0?" "+l:l);continue}let C=!!D,k=n(C?S.substring(0,D):S);if(!k){if(!C){l=f+(l.length>0?" "+l:l);continue}if(k=n(S),!k){l=f+(l.length>0?" "+l:l);continue}C=!1}const O=i(_).join(":"),V=b?O+Tc:O,M=V+k;if(o.includes(M))continue;o.push(M);const F=s(k,C);for(let K=0;K<F.length;++K){const I=F[K];o.push(V+I)}l=f+(l.length>0?" "+l:l)}return l};function eR(){let r=0,e,t,n="";for(;r<arguments.length;)(e=arguments[r++])&&(t=Ig(e))&&(n&&(n+=" "),n+=t);return n}const Ig=r=>{if(typeof r=="string")return r;let e,t="";for(let n=0;n<r.length;n++)r[n]&&(e=Ig(r[n]))&&(t&&(t+=" "),t+=e);return t};function tR(r,...e){let t,n,s,i=o;function o(l){const h=e.reduce((f,p)=>p(f),r());return t=YA(h),n=t.cache.get,s=t.cache.set,i=c,c(l)}function c(l){const h=n(l);if(h)return h;const f=ZA(l,t);return s(l,f),f}return function(){return i(eR.apply(null,arguments))}}const Ie=r=>{const e=t=>t[r]||[];return e.isThemeGetter=!0,e},Eg=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Tg=/^\((?:(\w[\w-]*):)?(.+)\)$/i,nR=/^\d+\/\d+$/,rR=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,sR=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,iR=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,oR=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,aR=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,tr=r=>nR.test(r),Y=r=>!!r&&!Number.isNaN(Number(r)),Ut=r=>!!r&&Number.isInteger(Number(r)),Ma=r=>r.endsWith("%")&&Y(r.slice(0,-1)),gt=r=>rR.test(r),cR=()=>!0,lR=r=>sR.test(r)&&!iR.test(r),wg=()=>!1,uR=r=>oR.test(r),hR=r=>aR.test(r),dR=r=>!j(r)&&!q(r),fR=r=>Br(r,Rg,wg),j=r=>Eg.test(r),mn=r=>Br(r,Sg,lR),La=r=>Br(r,yR,Y),$d=r=>Br(r,bg,wg),pR=r=>Br(r,Ag,hR),Pi=r=>Br(r,Pg,uR),q=r=>Tg.test(r),us=r=>zr(r,Sg),mR=r=>zr(r,vR),Kd=r=>zr(r,bg),gR=r=>zr(r,Rg),_R=r=>zr(r,Ag),Ci=r=>zr(r,Pg,!0),Br=(r,e,t)=>{const n=Eg.exec(r);return n?n[1]?e(n[1]):t(n[2]):!1},zr=(r,e,t=!1)=>{const n=Tg.exec(r);return n?n[1]?e(n[1]):t:!1},bg=r=>r==="position"||r==="percentage",Ag=r=>r==="image"||r==="url",Rg=r=>r==="length"||r==="size"||r==="bg-size",Sg=r=>r==="length",yR=r=>r==="number",vR=r=>r==="family-name",Pg=r=>r==="shadow",IR=()=>{const r=Ie("color"),e=Ie("font"),t=Ie("text"),n=Ie("font-weight"),s=Ie("tracking"),i=Ie("leading"),o=Ie("breakpoint"),c=Ie("container"),l=Ie("spacing"),h=Ie("radius"),f=Ie("shadow"),p=Ie("inset-shadow"),_=Ie("text-shadow"),b=Ie("drop-shadow"),S=Ie("blur"),D=Ie("perspective"),C=Ie("aspect"),k=Ie("ease"),O=Ie("animate"),V=()=>["auto","avoid","all","avoid-page","page","left","right","column"],M=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],F=()=>[...M(),q,j],K=()=>["auto","hidden","clip","visible","scroll"],I=()=>["auto","contain","none"],g=()=>[q,j,l],y=()=>[tr,"full","auto",...g()],E=()=>[Ut,"none","subgrid",q,j],T=()=>["auto",{span:["full",Ut,q,j]},Ut,q,j],R=()=>[Ut,"auto",q,j],v=()=>["auto","min","max","fr",q,j],ze=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Je=()=>["start","end","center","stretch","center-safe","end-safe"],et=()=>["auto",...g()],je=()=>[tr,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...g()],H=()=>[r,q,j],jn=()=>[...M(),Kd,$d,{position:[q,j]}],jr=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ti=()=>["auto","cover","contain",gR,fR,{size:[q,j]}],Ye=()=>[Ma,us,mn],ne=()=>["","none","full",h,q,j],xe=()=>["",Y,us,mn],it=()=>["solid","dashed","dotted","double"],ni=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],he=()=>[Y,Ma,Kd,$d],ri=()=>["","none",S,q,j],qn=()=>["none",Y,q,j],ft=()=>["none",Y,q,j],kt=()=>[Y,q,j],Vt=()=>[tr,"full",...g()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[gt],breakpoint:[gt],color:[cR],container:[gt],"drop-shadow":[gt],ease:["in","out","in-out"],font:[dR],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[gt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[gt],shadow:[gt],spacing:["px",Y],text:[gt],"text-shadow":[gt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",tr,j,q,C]}],container:["container"],columns:[{columns:[Y,j,q,c]}],"break-after":[{"break-after":V()}],"break-before":[{"break-before":V()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:F()}],overflow:[{overflow:K()}],"overflow-x":[{"overflow-x":K()}],"overflow-y":[{"overflow-y":K()}],overscroll:[{overscroll:I()}],"overscroll-x":[{"overscroll-x":I()}],"overscroll-y":[{"overscroll-y":I()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:y()}],"inset-x":[{"inset-x":y()}],"inset-y":[{"inset-y":y()}],start:[{start:y()}],end:[{end:y()}],top:[{top:y()}],right:[{right:y()}],bottom:[{bottom:y()}],left:[{left:y()}],visibility:["visible","invisible","collapse"],z:[{z:[Ut,"auto",q,j]}],basis:[{basis:[tr,"full","auto",c,...g()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Y,tr,"auto","initial","none",j]}],grow:[{grow:["",Y,q,j]}],shrink:[{shrink:["",Y,q,j]}],order:[{order:[Ut,"first","last","none",q,j]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:T()}],"col-start":[{"col-start":R()}],"col-end":[{"col-end":R()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:T()}],"row-start":[{"row-start":R()}],"row-end":[{"row-end":R()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":v()}],"auto-rows":[{"auto-rows":v()}],gap:[{gap:g()}],"gap-x":[{"gap-x":g()}],"gap-y":[{"gap-y":g()}],"justify-content":[{justify:[...ze(),"normal"]}],"justify-items":[{"justify-items":[...Je(),"normal"]}],"justify-self":[{"justify-self":["auto",...Je()]}],"align-content":[{content:["normal",...ze()]}],"align-items":[{items:[...Je(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Je(),{baseline:["","last"]}]}],"place-content":[{"place-content":ze()}],"place-items":[{"place-items":[...Je(),"baseline"]}],"place-self":[{"place-self":["auto",...Je()]}],p:[{p:g()}],px:[{px:g()}],py:[{py:g()}],ps:[{ps:g()}],pe:[{pe:g()}],pt:[{pt:g()}],pr:[{pr:g()}],pb:[{pb:g()}],pl:[{pl:g()}],m:[{m:et()}],mx:[{mx:et()}],my:[{my:et()}],ms:[{ms:et()}],me:[{me:et()}],mt:[{mt:et()}],mr:[{mr:et()}],mb:[{mb:et()}],ml:[{ml:et()}],"space-x":[{"space-x":g()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":g()}],"space-y-reverse":["space-y-reverse"],size:[{size:je()}],w:[{w:[c,"screen",...je()]}],"min-w":[{"min-w":[c,"screen","none",...je()]}],"max-w":[{"max-w":[c,"screen","none","prose",{screen:[o]},...je()]}],h:[{h:["screen",...je()]}],"min-h":[{"min-h":["screen","none",...je()]}],"max-h":[{"max-h":["screen",...je()]}],"font-size":[{text:["base",t,us,mn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,q,La]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Ma,j]}],"font-family":[{font:[mR,j,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,q,j]}],"line-clamp":[{"line-clamp":[Y,"none",q,La]}],leading:[{leading:[i,...g()]}],"list-image":[{"list-image":["none",q,j]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",q,j]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:H()}],"text-color":[{text:H()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...it(),"wavy"]}],"text-decoration-thickness":[{decoration:[Y,"from-font","auto",q,mn]}],"text-decoration-color":[{decoration:H()}],"underline-offset":[{"underline-offset":[Y,"auto",q,j]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:g()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",q,j]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",q,j]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:jn()}],"bg-repeat":[{bg:jr()}],"bg-size":[{bg:ti()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Ut,q,j],radial:["",q,j],conic:[Ut,q,j]},_R,pR]}],"bg-color":[{bg:H()}],"gradient-from-pos":[{from:Ye()}],"gradient-via-pos":[{via:Ye()}],"gradient-to-pos":[{to:Ye()}],"gradient-from":[{from:H()}],"gradient-via":[{via:H()}],"gradient-to":[{to:H()}],rounded:[{rounded:ne()}],"rounded-s":[{"rounded-s":ne()}],"rounded-e":[{"rounded-e":ne()}],"rounded-t":[{"rounded-t":ne()}],"rounded-r":[{"rounded-r":ne()}],"rounded-b":[{"rounded-b":ne()}],"rounded-l":[{"rounded-l":ne()}],"rounded-ss":[{"rounded-ss":ne()}],"rounded-se":[{"rounded-se":ne()}],"rounded-ee":[{"rounded-ee":ne()}],"rounded-es":[{"rounded-es":ne()}],"rounded-tl":[{"rounded-tl":ne()}],"rounded-tr":[{"rounded-tr":ne()}],"rounded-br":[{"rounded-br":ne()}],"rounded-bl":[{"rounded-bl":ne()}],"border-w":[{border:xe()}],"border-w-x":[{"border-x":xe()}],"border-w-y":[{"border-y":xe()}],"border-w-s":[{"border-s":xe()}],"border-w-e":[{"border-e":xe()}],"border-w-t":[{"border-t":xe()}],"border-w-r":[{"border-r":xe()}],"border-w-b":[{"border-b":xe()}],"border-w-l":[{"border-l":xe()}],"divide-x":[{"divide-x":xe()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":xe()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...it(),"hidden","none"]}],"divide-style":[{divide:[...it(),"hidden","none"]}],"border-color":[{border:H()}],"border-color-x":[{"border-x":H()}],"border-color-y":[{"border-y":H()}],"border-color-s":[{"border-s":H()}],"border-color-e":[{"border-e":H()}],"border-color-t":[{"border-t":H()}],"border-color-r":[{"border-r":H()}],"border-color-b":[{"border-b":H()}],"border-color-l":[{"border-l":H()}],"divide-color":[{divide:H()}],"outline-style":[{outline:[...it(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Y,q,j]}],"outline-w":[{outline:["",Y,us,mn]}],"outline-color":[{outline:H()}],shadow:[{shadow:["","none",f,Ci,Pi]}],"shadow-color":[{shadow:H()}],"inset-shadow":[{"inset-shadow":["none",p,Ci,Pi]}],"inset-shadow-color":[{"inset-shadow":H()}],"ring-w":[{ring:xe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:H()}],"ring-offset-w":[{"ring-offset":[Y,mn]}],"ring-offset-color":[{"ring-offset":H()}],"inset-ring-w":[{"inset-ring":xe()}],"inset-ring-color":[{"inset-ring":H()}],"text-shadow":[{"text-shadow":["none",_,Ci,Pi]}],"text-shadow-color":[{"text-shadow":H()}],opacity:[{opacity:[Y,q,j]}],"mix-blend":[{"mix-blend":[...ni(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ni()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Y]}],"mask-image-linear-from-pos":[{"mask-linear-from":he()}],"mask-image-linear-to-pos":[{"mask-linear-to":he()}],"mask-image-linear-from-color":[{"mask-linear-from":H()}],"mask-image-linear-to-color":[{"mask-linear-to":H()}],"mask-image-t-from-pos":[{"mask-t-from":he()}],"mask-image-t-to-pos":[{"mask-t-to":he()}],"mask-image-t-from-color":[{"mask-t-from":H()}],"mask-image-t-to-color":[{"mask-t-to":H()}],"mask-image-r-from-pos":[{"mask-r-from":he()}],"mask-image-r-to-pos":[{"mask-r-to":he()}],"mask-image-r-from-color":[{"mask-r-from":H()}],"mask-image-r-to-color":[{"mask-r-to":H()}],"mask-image-b-from-pos":[{"mask-b-from":he()}],"mask-image-b-to-pos":[{"mask-b-to":he()}],"mask-image-b-from-color":[{"mask-b-from":H()}],"mask-image-b-to-color":[{"mask-b-to":H()}],"mask-image-l-from-pos":[{"mask-l-from":he()}],"mask-image-l-to-pos":[{"mask-l-to":he()}],"mask-image-l-from-color":[{"mask-l-from":H()}],"mask-image-l-to-color":[{"mask-l-to":H()}],"mask-image-x-from-pos":[{"mask-x-from":he()}],"mask-image-x-to-pos":[{"mask-x-to":he()}],"mask-image-x-from-color":[{"mask-x-from":H()}],"mask-image-x-to-color":[{"mask-x-to":H()}],"mask-image-y-from-pos":[{"mask-y-from":he()}],"mask-image-y-to-pos":[{"mask-y-to":he()}],"mask-image-y-from-color":[{"mask-y-from":H()}],"mask-image-y-to-color":[{"mask-y-to":H()}],"mask-image-radial":[{"mask-radial":[q,j]}],"mask-image-radial-from-pos":[{"mask-radial-from":he()}],"mask-image-radial-to-pos":[{"mask-radial-to":he()}],"mask-image-radial-from-color":[{"mask-radial-from":H()}],"mask-image-radial-to-color":[{"mask-radial-to":H()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":M()}],"mask-image-conic-pos":[{"mask-conic":[Y]}],"mask-image-conic-from-pos":[{"mask-conic-from":he()}],"mask-image-conic-to-pos":[{"mask-conic-to":he()}],"mask-image-conic-from-color":[{"mask-conic-from":H()}],"mask-image-conic-to-color":[{"mask-conic-to":H()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:jn()}],"mask-repeat":[{mask:jr()}],"mask-size":[{mask:ti()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",q,j]}],filter:[{filter:["","none",q,j]}],blur:[{blur:ri()}],brightness:[{brightness:[Y,q,j]}],contrast:[{contrast:[Y,q,j]}],"drop-shadow":[{"drop-shadow":["","none",b,Ci,Pi]}],"drop-shadow-color":[{"drop-shadow":H()}],grayscale:[{grayscale:["",Y,q,j]}],"hue-rotate":[{"hue-rotate":[Y,q,j]}],invert:[{invert:["",Y,q,j]}],saturate:[{saturate:[Y,q,j]}],sepia:[{sepia:["",Y,q,j]}],"backdrop-filter":[{"backdrop-filter":["","none",q,j]}],"backdrop-blur":[{"backdrop-blur":ri()}],"backdrop-brightness":[{"backdrop-brightness":[Y,q,j]}],"backdrop-contrast":[{"backdrop-contrast":[Y,q,j]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Y,q,j]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Y,q,j]}],"backdrop-invert":[{"backdrop-invert":["",Y,q,j]}],"backdrop-opacity":[{"backdrop-opacity":[Y,q,j]}],"backdrop-saturate":[{"backdrop-saturate":[Y,q,j]}],"backdrop-sepia":[{"backdrop-sepia":["",Y,q,j]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":g()}],"border-spacing-x":[{"border-spacing-x":g()}],"border-spacing-y":[{"border-spacing-y":g()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",q,j]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Y,"initial",q,j]}],ease:[{ease:["linear","initial",k,q,j]}],delay:[{delay:[Y,q,j]}],animate:[{animate:["none",O,q,j]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[D,q,j]}],"perspective-origin":[{"perspective-origin":F()}],rotate:[{rotate:qn()}],"rotate-x":[{"rotate-x":qn()}],"rotate-y":[{"rotate-y":qn()}],"rotate-z":[{"rotate-z":qn()}],scale:[{scale:ft()}],"scale-x":[{"scale-x":ft()}],"scale-y":[{"scale-y":ft()}],"scale-z":[{"scale-z":ft()}],"scale-3d":["scale-3d"],skew:[{skew:kt()}],"skew-x":[{"skew-x":kt()}],"skew-y":[{"skew-y":kt()}],transform:[{transform:[q,j,"","none","gpu","cpu"]}],"transform-origin":[{origin:F()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Vt()}],"translate-x":[{"translate-x":Vt()}],"translate-y":[{"translate-y":Vt()}],"translate-z":[{"translate-z":Vt()}],"translate-none":["translate-none"],accent:[{accent:H()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:H()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",q,j]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":g()}],"scroll-mx":[{"scroll-mx":g()}],"scroll-my":[{"scroll-my":g()}],"scroll-ms":[{"scroll-ms":g()}],"scroll-me":[{"scroll-me":g()}],"scroll-mt":[{"scroll-mt":g()}],"scroll-mr":[{"scroll-mr":g()}],"scroll-mb":[{"scroll-mb":g()}],"scroll-ml":[{"scroll-ml":g()}],"scroll-p":[{"scroll-p":g()}],"scroll-px":[{"scroll-px":g()}],"scroll-py":[{"scroll-py":g()}],"scroll-ps":[{"scroll-ps":g()}],"scroll-pe":[{"scroll-pe":g()}],"scroll-pt":[{"scroll-pt":g()}],"scroll-pr":[{"scroll-pr":g()}],"scroll-pb":[{"scroll-pb":g()}],"scroll-pl":[{"scroll-pl":g()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",q,j]}],fill:[{fill:["none",...H()]}],"stroke-w":[{stroke:[Y,us,mn,La]}],stroke:[{stroke:["none",...H()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},ER=tR(IR);function xR(...r){return ER(Xd(r))}const TR=(r,e=300)=>{let t;return(...n)=>{clearTimeout(t),t=setTimeout(()=>{r.apply(void 0,n)},e)}};function wR(){let e=P_({}),t=Du(!0),n=xu(()=>Object.keys(e).length>0),s=Du(null),i=xu(()=>{var k;return"users/"+((k=$e(s))==null?void 0:k.uid)}),o=[],c=[];function l(k,O){if(!$e(s)){o.push(()=>l(k,O));return}const V=Od(Oa,$e(i),...k),M=Bd(V,F=>{O(F.id,F.exists()?F.data():null)},F=>{console.warn("Error while syncing firestore doc",k,F)});c.push(M)}function h(k,O){if(!$e(s)){o.push(()=>h(k,O));return}const V=gA(Oa,$e(i),...k),M=Bd(V,F=>{F.docChanges().forEach(K=>{console.log("fetched doc",K.doc.id,F.metadata.fromCache||F.metadata.hasPendingWrites?"(local)":"(server)"),O(K.doc.id,K.type==="removed"?null:K.doc.data())})},F=>{console.warn("Error while syncing firestore collection",k,F)});c.push(M)}function f(k,O){const V=k.join("/");if(e[V]!==void 0){e[V].data=O,e[V].publish();return}e[V]={publish:TR(async()=>{try{const M=Od(Oa,$e(i),...k);O?(console.log("Publishing doc to firestore",V),await xA(M,e[V].data)):(console.log("Deleting doc from firestore",V),await NA(M))}catch(M){console.warn("Error while publishing doc to firestore",V,M)}finally{delete e[V]}},1e3),data:O},e[V].publish()}async function p(k,O){return zI(ls,k,O)}async function _(){return $I(ls)}async function b(k){return UI(ls,k).then(()=>{console.info("Password reset email sent to:",k)}).catch(O=>{const V=O.code,M=O.message;throw console.warn("Error during password reset:",V,M),O})}async function S(k,O){return BI(ls,k,O).then(V=>{const M=V.user;console.info("User signed up:",M.email)}).catch(V=>{const M=V.code,F=V.message;throw console.warn("Error during sign up:",M,F),V})}const D=ls.onAuthStateChanged(k=>{Vu(s,k,!0),Vu(t,!1),k===null?(console.info("Logged out, unsubscribing from docs"),c.forEach(O=>O()),c=[]):(console.info("Logged in, subscribing to docs"),o.forEach(O=>O()),o=[])});function C(){console.warn("Closing Firebase"),c.forEach(k=>k()),c=[],D()}return{get resetPassword(){return b},get signUp(){return S},get user(){return $e(s)},get isLoading(){return $e(t)},get isPublishing(){return $e(n)},get login(){return p},get logout(){return _},get destroy(){return C},get subscribeToCollection(){return h},get subscribeToDoc(){return l},get publishDoc(){return f}}}const Cg=Symbol("firebase"),NR=()=>{const r=wR();return R_(Cg,r)},OR=()=>S_(Cg);/**
 * @license lucide-svelte v0.507.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */const bR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var AR=$_("<svg><!><!></svg>");function MR(r,e){const t=Mu(e,["children","$$slots","$$events","$$legacy"]),n=Mu(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);C_(e,!1);let s=Hn(e,"name",8,void 0),i=Hn(e,"color",8,"currentColor"),o=Hn(e,"size",8,24),c=Hn(e,"strokeWidth",8,2),l=Hn(e,"absoluteStrokeWidth",8,!1),h=Hn(e,"iconNode",24,()=>[]);const f=(...D)=>D.filter((C,k,O)=>!!C&&O.indexOf(C)===k).join(" ");G_();var p=AR();let _;var b=k_(p);Q_(b,1,h,W_,(D,C)=>{let k=()=>$e(C)[0],O=()=>$e(C)[1];var V=K_(),M=N_(V);Z_(M,k,!0,(F,K)=>{let I;Nu(()=>I=Bu(F,I,{...O()}))}),Ou(D,V)});var S=V_(b);X_(S,e,"default",{}),D_(p),Nu((D,C)=>_=Bu(p,_,{...bR,...n,width:o(),height:o(),stroke:i(),"stroke-width":D,class:C}),[()=>l()?Number(c())*24/Number(o()):c(),()=>f("lucide-icon","lucide",s()?`lucide-${s()}`:"",t.class)],Gd),Ou(r,p),x_()}export{MR as I,kR as a,Bu as b,xR as c,Wi as d,Xd as e,NR as f,OR as g,VR as r,X_ as s};
