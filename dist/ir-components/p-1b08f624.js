const t="ir-components";let n=false;let e=false;const s=(t,n="")=>{{return()=>{}}};const o=(t,n)=>{{return()=>{}}};const l="{visibility:hidden}.hydrated{visibility:inherit}";const c={};const i=t=>{t=typeof t;return t==="object"||t==="function"};function f(t){var n,e,s;return(s=(e=(n=t.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||e===void 0?void 0:e.getAttribute("content"))!==null&&s!==void 0?s:undefined}const r=(t,n,...e)=>{let s=null;let o=false;let l=false;const c=[];const f=n=>{for(let e=0;e<n.length;e++){s=n[e];if(Array.isArray(s)){f(s)}else if(s!=null&&typeof s!=="boolean"){if(o=typeof t!=="function"&&!i(s)){s=String(s)}if(o&&l){c[c.length-1].t+=s}else{c.push(o?u(null,s):s)}l=o}}};f(e);if(n){{const t=n.className||n.class;if(t){n.class=typeof t!=="object"?t:Object.keys(t).filter((n=>t[n])).join(" ")}}}const r=u(t,null);r.o=n;if(c.length>0){r.l=c}return r};const u=(t,n)=>{const e={i:0,u:t,t:n,h:null,l:null};{e.o=null}return e};const a={};const d=t=>t&&t.u===a;const y=(t,n)=>{if(t!=null&&!i(t)){if(n&4){return t==="false"?false:t===""||!!t}if(n&1){return String(t)}return t}return t};const h=t=>nt(t).p;const p=(t,n,e)=>{const s=h(t);return{emit:t=>m(s,n,{bubbles:!!(e&4),composed:!!(e&2),cancelable:!!(e&1),detail:t})}};const m=(t,n,e)=>{const s=at.ce(n,e);t.dispatchEvent(s);return s};const $=new WeakMap;const b=(t,n,e)=>{let s=ft.get(t);if(yt&&e){s=s||new CSSStyleSheet;if(typeof s==="string"){s=n}else{s.replaceSync(n)}}else{s=n}ft.set(t,s)};const v=(t,n,e)=>{var s;const o=S(n);const l=ft.get(o);t=t.nodeType===11?t:ut;if(l){if(typeof l==="string"){t=t.head||t;let n=$.get(t);let e;if(!n){$.set(t,n=new Set)}if(!n.has(o)){{e=ut.createElement("style");e.innerHTML=l;const n=(s=at.m)!==null&&s!==void 0?s:f(ut);if(n!=null){e.setAttribute("nonce",n)}t.insertBefore(e,t.querySelector("link"))}if(n){n.add(o)}}}else if(!t.adoptedStyleSheets.includes(l)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]}}return o};const w=t=>{const n=t.$;const e=t.p;const o=s("attachStyles",n.v);v(e.getRootNode(),n);o()};const S=(t,n)=>"sc-"+t.v;const g=(t,n,e,s,o,l)=>{if(e!==s){let c=ot(t,n);let f=n.toLowerCase();if(n==="class"){const n=t.classList;const o=k(e);const l=k(s);n.remove(...o.filter((t=>t&&!l.includes(t))));n.add(...l.filter((t=>t&&!o.includes(t))))}else if(!c&&n[0]==="o"&&n[1]==="n"){if(n[2]==="-"){n=n.slice(3)}else if(ot(rt,f)){n=f.slice(2)}else{n=f[2]+n.slice(3)}if(e){at.rel(t,n,e,false)}if(s){at.ael(t,n,s,false)}}else{const f=i(s);if((c||f&&s!==null)&&!o){try{if(!t.tagName.includes("-")){const o=s==null?"":s;if(n==="list"){c=false}else if(e==null||t[n]!=o){t[n]=o}}else{t[n]=s}}catch(t){}}if(s==null||s===false){if(s!==false||t.getAttribute(n)===""){{t.removeAttribute(n)}}}else if((!c||l&4||o)&&!f){s=s===true?"":s;{t.setAttribute(n,s)}}}}};const j=/\s/;const k=t=>!t?[]:t.split(j);const M=(t,n,e,s)=>{const o=n.h.nodeType===11&&n.h.host?n.h.host:n.h;const l=t&&t.o||c;const i=n.o||c;{for(s in l){if(!(s in i)){g(o,s,l[s],undefined,e,n.i)}}}for(s in i){g(o,s,l[s],i[s],e,n.i)}};const C=(t,e,s,o)=>{const l=e.l[s];let c=0;let i;let f;if(l.t!==null){i=l.h=ut.createTextNode(l.t)}else{i=l.h=ut.createElement(l.u);{M(null,l,n)}if(l.l){for(c=0;c<l.l.length;++c){f=C(t,l,c);if(f){i.appendChild(f)}}}}return i};const O=(t,n,e,s,o,l)=>{let c=t;let i;for(;o<=l;++o){if(s[o]){i=C(null,e,o);if(i){s[o].h=i;c.insertBefore(i,n)}}}};const P=(t,n,e)=>{for(let s=n;s<=e;++s){const n=t[s];if(n){const t=n.h;if(t){t.remove()}}}};const U=(t,n,e,s)=>{let o=0;let l=0;let c=n.length-1;let i=n[0];let f=n[c];let r=s.length-1;let u=s[0];let a=s[r];let d;while(o<=c&&l<=r){if(i==null){i=n[++o]}else if(f==null){f=n[--c]}else if(u==null){u=s[++l]}else if(a==null){a=s[--r]}else if(x(i,u)){E(i,u);i=n[++o];u=s[++l]}else if(x(f,a)){E(f,a);f=n[--c];a=s[--r]}else if(x(i,a)){E(i,a);t.insertBefore(i.h,f.h.nextSibling);i=n[++o];a=s[--r]}else if(x(f,u)){E(f,u);t.insertBefore(f.h,i.h);f=n[--c];u=s[++l]}else{{d=C(n&&n[l],e,l);u=s[++l]}if(d){{i.h.parentNode.insertBefore(d,i.h)}}}}if(o>c){O(t,s[r+1]==null?null:s[r+1].h,e,s,l,r)}else if(l>r){P(n,o,c)}};const x=(t,n)=>{if(t.u===n.u){return true}return false};const E=(t,e)=>{const s=e.h=t.h;const o=t.l;const l=e.l;const c=e.t;if(c===null){{{M(t,e,n)}}if(o!==null&&l!==null){U(s,o,e,l)}else if(l!==null){if(t.t!==null){s.textContent=""}O(s,null,e,l,0,l.length-1)}else if(o!==null){P(o,0,o.length-1)}}else if(t.t!==c){s.data=c}};const L=(t,n,e=false)=>{const s=t.p;const o=t.$;const l=t.S||u(null,null);const c=d(n)?n:r(null,null,n);if(o.g){c.o=c.o||{};o.g.map((([t,n])=>c.o[n]=s[t]))}if(e&&c.o){for(const t of Object.keys(c.o)){if(s.hasAttribute(t)&&!["key","ref","style","class"].includes(t)){c.o[t]=s[t]}}}c.u=null;c.i|=4;t.S=c;c.h=l.h=s;E(l,c)};const N=(t,n)=>{if(n&&!t.j&&n["s-p"]){n["s-p"].push(new Promise((n=>t.j=n)))}};const T=(t,n)=>{{t.i|=16}if(t.i&4){t.i|=512;return}N(t,t.k);const e=()=>W(t,n);return wt(e)};const W=(t,n)=>{const e=s("scheduleUpdate",t.$.v);const o=t.M;let l;if(n){{l=V(o,"componentWillLoad")}}e();return A(l,(()=>R(t,o,n)))};const A=(t,n)=>H(t)?t.then(n):n();const H=t=>t instanceof Promise||t&&t.then&&typeof t.then==="function";const R=async(t,n,e)=>{var o;const l=t.p;const c=s("update",t.$.v);const i=l["s-rc"];if(e){w(t)}const f=s("render",t.$.v);{q(t,n,l,e)}if(i){i.map((t=>t()));l["s-rc"]=undefined}f();c();{const n=(o=l["s-p"])!==null&&o!==void 0?o:[];const e=()=>F(t);if(n.length===0){e()}else{Promise.all(n).then(e);t.i|=4;n.length=0}}};const q=(t,n,e,s)=>{try{n=n.render();{t.i&=~16}{t.i|=2}{{{L(t,n,s)}}}}catch(n){lt(n,t.p)}return null};const F=t=>{const n=t.$.v;const e=t.p;const o=s("postUpdate",n);const l=t.k;if(!(t.i&64)){t.i|=64;{_(e)}o();{t.C(e);if(!l){I()}}}else{o()}{if(t.j){t.j();t.j=undefined}if(t.i&512){vt((()=>T(t,false)))}t.i&=~(4|512)}};const I=n=>{{_(ut.documentElement)}vt((()=>m(rt,"appload",{detail:{namespace:t}})))};const V=(t,n,e)=>{if(t&&t[n]){try{return t[n](e)}catch(t){lt(t)}}return undefined};const _=t=>t.classList.add("hydrated");const z=(t,n)=>nt(t).O.get(n);const B=(t,n,e,s)=>{const o=nt(t);const l=o.p;const c=o.O.get(n);const i=o.i;const f=o.M;e=y(e,s.P[n][0]);const r=Number.isNaN(c)&&Number.isNaN(e);const u=e!==c&&!r;if((!(i&8)||c===undefined)&&u){o.O.set(n,e);if(f){if(s.U&&i&128){const t=s.U[n];if(t){t.map((t=>{try{f[t](e,c,n)}catch(t){lt(t,l)}}))}}if((i&(2|16))===2){T(o,false)}}}};const D=(t,n,e)=>{if(n.P){if(t.watchers){n.U=t.watchers}const s=Object.entries(n.P);const o=t.prototype;s.map((([t,[s]])=>{if(s&31||e&2&&s&32){Object.defineProperty(o,t,{get(){return z(this,t)},set(e){B(this,t,e,n)},configurable:true,enumerable:true})}}));if(e&1){const e=new Map;o.attributeChangedCallback=function(t,n,s){at.jmp((()=>{const n=e.get(t);if(this.hasOwnProperty(n)){s=this[n];delete this[n]}else if(o.hasOwnProperty(n)&&typeof this[n]==="number"&&this[n]==s){return}this[n]=s===null&&typeof this[n]==="boolean"?false:s}))};t.observedAttributes=s.filter((([t,n])=>n[0]&15)).map((([t,s])=>{const o=s[1]||t;e.set(o,t);if(s[0]&512){n.g.push([t,o])}return o}))}}return t};const G=async(t,n,e,l,c)=>{if((n.i&32)===0){n.i|=32;{c=it(e);if(c.then){const t=o();c=await c;t()}if(!c.isProxied){{e.U=c.watchers}D(c,e,2);c.isProxied=true}const t=s("createInstance",e.v);{n.i|=8}try{new c(n)}catch(t){lt(t)}{n.i&=~8}{n.i|=128}t()}if(c.style){let t=c.style;const n=S(e);if(!ft.has(n)){const o=s("registerStyles",e.v);b(n,t,!!(e.i&1));o()}}}const i=n.k;const f=()=>T(n,true);if(i&&i["s-rc"]){i["s-rc"].push(f)}else{f()}};const J=t=>{};const K=t=>{if((at.i&1)===0){const n=nt(t);const e=n.$;const o=s("connectedCallback",e.v);if(!(n.i&1)){n.i|=1;{let e=t;while(e=e.parentNode||e.host){if(e["s-p"]){N(n,n.k=e);break}}}if(e.P){Object.entries(e.P).map((([n,[e]])=>{if(e&31&&t.hasOwnProperty(n)){const e=t[n];delete t[n];t[n]=e}}))}{G(t,n,e)}}else{if(n===null||n===void 0?void 0:n.M);else if(n===null||n===void 0?void 0:n.L){n.L.then((()=>J()))}}o()}};const Q=t=>{};const X=async t=>{if((at.i&1)===0){const n=nt(t);if(n===null||n===void 0?void 0:n.M);else if(n===null||n===void 0?void 0:n.L){n.L.then((()=>Q()))}}};const Y=(t,n={})=>{var e;const o=s();const c=[];const i=n.exclude||[];const r=rt.customElements;const u=ut.head;const a=u.querySelector("meta[charset]");const d=ut.createElement("style");const y=[];let h;let p=true;Object.assign(at,n);at.N=new URL(n.resourcesUrl||"./",ut.baseURI).href;t.map((t=>{t[1].map((n=>{const e={i:n[0],v:n[1],P:n[2],T:n[3]};{e.P=n[2]}{e.g=[]}{e.U={}}const s=e.v;const o=class extends HTMLElement{constructor(t){super(t);t=this;st(t,e)}connectedCallback(){if(h){clearTimeout(h);h=null}if(p){y.push(this)}else{at.jmp((()=>K(this)))}}disconnectedCallback(){at.jmp((()=>X(this)))}componentOnReady(){return nt(this).L}};e.W=t[0];if(!i.includes(s)&&!r.get(s)){c.push(s);r.define(s,D(o,e,1))}}))}));{d.innerHTML=c+l;d.setAttribute("data-styles","");const t=(e=at.m)!==null&&e!==void 0?e:f(ut);if(t!=null){d.setAttribute("nonce",t)}u.insertBefore(d,a?a.nextSibling:u.firstChild)}p=false;if(y.length){y.map((t=>t.connectedCallback()))}else{{at.jmp((()=>h=setTimeout(I,30)))}}o()};const Z=t=>at.m=t;const tt=new WeakMap;const nt=t=>tt.get(t);const et=(t,n)=>tt.set(n.M=t,n);const st=(t,n)=>{const e={i:0,p:t,$:n,O:new Map};{e.L=new Promise((t=>e.C=t));t["s-p"]=[];t["s-rc"]=[]}return tt.set(t,e)};const ot=(t,n)=>n in t;const lt=(t,n)=>(0,console.error)(t,n);const ct=new Map;const it=(t,n,e)=>{const s=t.v.replace(/-/g,"_");const o=t.W;const l=ct.get(o);if(l){return l[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${o}.entry.js${""}`).then((t=>{{ct.set(o,t)}return t[s]}),lt)};const ft=new Map;const rt=typeof window!=="undefined"?window:{};const ut=rt.document||{head:{}};const at={i:0,N:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,n,e,s)=>t.addEventListener(n,e,s),rel:(t,n,e,s)=>t.removeEventListener(n,e,s),ce:(t,n)=>new CustomEvent(t,n)};const dt=t=>Promise.resolve(t);const yt=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const ht=[];const pt=[];const mt=(t,n)=>s=>{t.push(s);if(!e){e=true;if(n&&at.i&4){vt(bt)}else{at.raf(bt)}}};const $t=t=>{for(let n=0;n<t.length;n++){try{t[n](performance.now())}catch(t){lt(t)}}t.length=0};const bt=()=>{$t(ht);{$t(pt);if(e=ht.length>0){at.raf(bt)}}};const vt=t=>dt().then(t);const wt=mt(pt,true);export{a as H,Y as b,p as c,h as g,r as h,dt as p,et as r,Z as s};
//# sourceMappingURL=p-1b08f624.js.map