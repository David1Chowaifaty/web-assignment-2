const t="webcm";let n=false;let e=false;const s=(t,n="")=>{{return()=>{}}};const o=(t,n)=>{{return()=>{}}};const l="{visibility:hidden}.hydrated{visibility:inherit}";const c={};const i=t=>{t=typeof t;return t==="object"||t==="function"};function f(t){var n,e,s;return(s=(e=(n=t.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||e===void 0?void 0:e.getAttribute("content"))!==null&&s!==void 0?s:undefined}const r=(t,n,...e)=>{let s=null;let o=false;let l=false;const c=[];const f=n=>{for(let e=0;e<n.length;e++){s=n[e];if(Array.isArray(s)){f(s)}else if(s!=null&&typeof s!=="boolean"){if(o=typeof t!=="function"&&!i(s)){s=String(s)}if(o&&l){c[c.length-1].t+=s}else{c.push(o?u(null,s):s)}l=o}}};f(e);if(n){{const t=n.className||n.class;if(t){n.class=typeof t!=="object"?t:Object.keys(t).filter((n=>t[n])).join(" ")}}}const r=u(t,null);r.o=n;if(c.length>0){r.l=c}return r};const u=(t,n)=>{const e={i:0,u:t,t:n,h:null,l:null};{e.o=null}return e};const a={};const d=t=>t&&t.u===a;const y=(t,n)=>{if(t!=null&&!i(t)){if(n&4){return t==="false"?false:t===""||!!t}if(n&1){return String(t)}return t}return t};const h=(t,n,e)=>{const s=rt.ce(n,e);t.dispatchEvent(s);return s};const p=new WeakMap;const $=(t,n,e)=>{let s=ct.get(t);if(at&&e){s=s||new CSSStyleSheet;if(typeof s==="string"){s=n}else{s.replaceSync(n)}}else{s=n}ct.set(t,s)};const m=(t,n,e)=>{var s;const o=v(n);const l=ct.get(o);t=t.nodeType===11?t:ft;if(l){if(typeof l==="string"){t=t.head||t;let n=p.get(t);let e;if(!n){p.set(t,n=new Set)}if(!n.has(o)){{e=ft.createElement("style");e.innerHTML=l;const n=(s=rt.p)!==null&&s!==void 0?s:f(ft);if(n!=null){e.setAttribute("nonce",n)}t.insertBefore(e,t.querySelector("link"))}if(n){n.add(o)}}}else if(!t.adoptedStyleSheets.includes(l)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]}}return o};const b=t=>{const n=t.$;const e=t.m;const o=s("attachStyles",n.v);m(e.getRootNode(),n);o()};const v=(t,n)=>"sc-"+t.v;const w=(t,n,e,s,o,l)=>{if(e!==s){let c=et(t,n);let f=n.toLowerCase();if(n==="class"){const n=t.classList;const o=g(e);const l=g(s);n.remove(...o.filter((t=>t&&!l.includes(t))));n.add(...l.filter((t=>t&&!o.includes(t))))}else if(!c&&n[0]==="o"&&n[1]==="n"){if(n[2]==="-"){n=n.slice(3)}else if(et(it,f)){n=f.slice(2)}else{n=f[2]+n.slice(3)}if(e){rt.rel(t,n,e,false)}if(s){rt.ael(t,n,s,false)}}else{const f=i(s);if((c||f&&s!==null)&&!o){try{if(!t.tagName.includes("-")){const o=s==null?"":s;if(n==="list"){c=false}else if(e==null||t[n]!=o){t[n]=o}}else{t[n]=s}}catch(t){}}if(s==null||s===false){if(s!==false||t.getAttribute(n)===""){{t.removeAttribute(n)}}}else if((!c||l&4||o)&&!f){s=s===true?"":s;{t.setAttribute(n,s)}}}}};const S=/\s/;const g=t=>!t?[]:t.split(S);const j=(t,n,e,s)=>{const o=n.h.nodeType===11&&n.h.host?n.h.host:n.h;const l=t&&t.o||c;const i=n.o||c;{for(s in l){if(!(s in i)){w(o,s,l[s],undefined,e,n.i)}}}for(s in i){w(o,s,l[s],i[s],e,n.i)}};const k=(t,e,s,o)=>{const l=e.l[s];let c=0;let i;let f;{i=l.h=ft.createElement(l.u);{j(null,l,n)}if(l.l){for(c=0;c<l.l.length;++c){f=k(t,l,c);if(f){i.appendChild(f)}}}}return i};const M=(t,n,e,s,o,l)=>{let c=t;let i;for(;o<=l;++o){if(s[o]){i=k(null,e,o);if(i){s[o].h=i;c.insertBefore(i,n)}}}};const C=(t,n,e)=>{for(let s=n;s<=e;++s){const n=t[s];if(n){const t=n.h;if(t){t.remove()}}}};const O=(t,n,e,s)=>{let o=0;let l=0;let c=n.length-1;let i=n[0];let f=n[c];let r=s.length-1;let u=s[0];let a=s[r];let d;while(o<=c&&l<=r){if(i==null){i=n[++o]}else if(f==null){f=n[--c]}else if(u==null){u=s[++l]}else if(a==null){a=s[--r]}else if(P(i,u)){U(i,u);i=n[++o];u=s[++l]}else if(P(f,a)){U(f,a);f=n[--c];a=s[--r]}else if(P(i,a)){U(i,a);t.insertBefore(i.h,f.h.nextSibling);i=n[++o];a=s[--r]}else if(P(f,u)){U(f,u);t.insertBefore(f.h,i.h);f=n[--c];u=s[++l]}else{{d=k(n&&n[l],e,l);u=s[++l]}if(d){{i.h.parentNode.insertBefore(d,i.h)}}}}if(o>c){M(t,s[r+1]==null?null:s[r+1].h,e,s,l,r)}else if(l>r){C(n,o,c)}};const P=(t,n)=>{if(t.u===n.u){return true}return false};const U=(t,e)=>{const s=e.h=t.h;const o=t.l;const l=e.l;{{{j(t,e,n)}}if(o!==null&&l!==null){O(s,o,e,l)}else if(l!==null){M(s,null,e,l,0,l.length-1)}else if(o!==null){C(o,0,o.length-1)}}};const x=(t,n,e=false)=>{const s=t.m;const o=t.$;const l=t.S||u(null,null);const c=d(n)?n:r(null,null,n);if(o.g){c.o=c.o||{};o.g.map((([t,n])=>c.o[n]=s[t]))}if(e&&c.o){for(const t of Object.keys(c.o)){if(s.hasAttribute(t)&&!["key","ref","style","class"].includes(t)){c.o[t]=s[t]}}}c.u=null;c.i|=4;t.S=c;c.h=l.h=s;U(l,c)};const E=(t,n)=>{if(n&&!t.j&&n["s-p"]){n["s-p"].push(new Promise((n=>t.j=n)))}};const L=(t,n)=>{{t.i|=16}if(t.i&4){t.i|=512;return}E(t,t.k);const e=()=>N(t,n);return bt(e)};const N=(t,n)=>{const e=s("scheduleUpdate",t.$.v);const o=t.M;let l;if(n){{l=H(o,"componentWillLoad")}}e();return T(l,(()=>A(t,o,n)))};const T=(t,n)=>W(t)?t.then(n):n();const W=t=>t instanceof Promise||t&&t.then&&typeof t.then==="function";const A=async(t,n,e)=>{var o;const l=t.m;const c=s("update",t.$.v);const i=l["s-rc"];if(e){b(t)}const f=s("render",t.$.v);{R(t,n,l,e)}if(i){i.map((t=>t()));l["s-rc"]=undefined}f();c();{const n=(o=l["s-p"])!==null&&o!==void 0?o:[];const e=()=>q(t);if(n.length===0){e()}else{Promise.all(n).then(e);t.i|=4;n.length=0}}};const R=(t,n,e,s)=>{try{n=n.render();{t.i&=~16}{t.i|=2}{{{x(t,n,s)}}}}catch(n){st(n,t.m)}return null};const q=t=>{const n=t.$.v;const e=t.m;const o=s("postUpdate",n);const l=t.k;if(!(t.i&64)){t.i|=64;{I(e)}o();{t.C(e);if(!l){F()}}}else{o()}{if(t.j){t.j();t.j=undefined}if(t.i&512){mt((()=>L(t,false)))}t.i&=~(4|512)}};const F=n=>{{I(ft.documentElement)}mt((()=>h(it,"appload",{detail:{namespace:t}})))};const H=(t,n,e)=>{if(t&&t[n]){try{return t[n](e)}catch(t){st(t)}}return undefined};const I=t=>t.classList.add("hydrated");const V=(t,n)=>Z(t).O.get(n);const _=(t,n,e,s)=>{const o=Z(t);const l=o.O.get(n);const c=o.i;const i=o.M;e=y(e,s.P[n][0]);const f=Number.isNaN(l)&&Number.isNaN(e);const r=e!==l&&!f;if((!(c&8)||l===undefined)&&r){o.O.set(n,e);if(i){if((c&(2|16))===2){L(o,false)}}}};const z=(t,n,e)=>{if(n.P){const s=Object.entries(n.P);const o=t.prototype;s.map((([t,[s]])=>{if(s&31||e&2&&s&32){Object.defineProperty(o,t,{get(){return V(this,t)},set(e){_(this,t,e,n)},configurable:true,enumerable:true})}}));if(e&1){const e=new Map;o.attributeChangedCallback=function(t,n,s){rt.jmp((()=>{const n=e.get(t);if(this.hasOwnProperty(n)){s=this[n];delete this[n]}else if(o.hasOwnProperty(n)&&typeof this[n]==="number"&&this[n]==s){return}this[n]=s===null&&typeof this[n]==="boolean"?false:s}))};t.observedAttributes=s.filter((([t,n])=>n[0]&15)).map((([t,s])=>{const o=s[1]||t;e.set(o,t);if(s[0]&512){n.g.push([t,o])}return o}))}}return t};const B=async(t,n,e,l,c)=>{if((n.i&32)===0){n.i|=32;{c=lt(e);if(c.then){const t=o();c=await c;t()}if(!c.isProxied){z(c,e,2);c.isProxied=true}const t=s("createInstance",e.v);{n.i|=8}try{new c(n)}catch(t){st(t)}{n.i&=~8}t()}if(c.style){let t=c.style;const n=v(e);if(!ct.has(n)){const o=s("registerStyles",e.v);$(n,t,!!(e.i&1));o()}}}const i=n.k;const f=()=>L(n,true);if(i&&i["s-rc"]){i["s-rc"].push(f)}else{f()}};const D=t=>{};const G=t=>{if((rt.i&1)===0){const n=Z(t);const e=n.$;const o=s("connectedCallback",e.v);if(!(n.i&1)){n.i|=1;{let e=t;while(e=e.parentNode||e.host){if(e["s-p"]){E(n,n.k=e);break}}}if(e.P){Object.entries(e.P).map((([n,[e]])=>{if(e&31&&t.hasOwnProperty(n)){const e=t[n];delete t[n];t[n]=e}}))}{B(t,n,e)}}else{if(n===null||n===void 0?void 0:n.M);else if(n===null||n===void 0?void 0:n.U){n.U.then((()=>D()))}}o()}};const J=t=>{};const K=async t=>{if((rt.i&1)===0){const n=Z(t);if(n===null||n===void 0?void 0:n.M);else if(n===null||n===void 0?void 0:n.U){n.U.then((()=>J()))}}};const Q=(t,n={})=>{var e;const o=s();const c=[];const i=n.exclude||[];const r=it.customElements;const u=ft.head;const a=u.querySelector("meta[charset]");const d=ft.createElement("style");const y=[];let h;let p=true;Object.assign(rt,n);rt.L=new URL(n.resourcesUrl||"./",ft.baseURI).href;t.map((t=>{t[1].map((n=>{const e={i:n[0],v:n[1],P:n[2],N:n[3]};{e.P=n[2]}{e.g=[]}const s=e.v;const o=class extends HTMLElement{constructor(t){super(t);t=this;nt(t,e)}connectedCallback(){if(h){clearTimeout(h);h=null}if(p){y.push(this)}else{rt.jmp((()=>G(this)))}}disconnectedCallback(){rt.jmp((()=>K(this)))}componentOnReady(){return Z(this).U}};e.T=t[0];if(!i.includes(s)&&!r.get(s)){c.push(s);r.define(s,z(o,e,1))}}))}));{d.innerHTML=c+l;d.setAttribute("data-styles","");const t=(e=rt.p)!==null&&e!==void 0?e:f(ft);if(t!=null){d.setAttribute("nonce",t)}u.insertBefore(d,a?a.nextSibling:u.firstChild)}p=false;if(y.length){y.map((t=>t.connectedCallback()))}else{{rt.jmp((()=>h=setTimeout(F,30)))}}o()};const X=t=>rt.p=t;const Y=new WeakMap;const Z=t=>Y.get(t);const tt=(t,n)=>Y.set(n.M=t,n);const nt=(t,n)=>{const e={i:0,m:t,$:n,O:new Map};{e.U=new Promise((t=>e.C=t));t["s-p"]=[];t["s-rc"]=[]}return Y.set(t,e)};const et=(t,n)=>n in t;const st=(t,n)=>(0,console.error)(t,n);const ot=new Map;const lt=(t,n,e)=>{const s=t.v.replace(/-/g,"_");const o=t.T;const l=ot.get(o);if(l){return l[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${o}.entry.js${""}`).then((t=>{{ot.set(o,t)}return t[s]}),st)};const ct=new Map;const it=typeof window!=="undefined"?window:{};const ft=it.document||{head:{}};const rt={i:0,L:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,n,e,s)=>t.addEventListener(n,e,s),rel:(t,n,e,s)=>t.removeEventListener(n,e,s),ce:(t,n)=>new CustomEvent(t,n)};const ut=t=>Promise.resolve(t);const at=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const dt=[];const yt=[];const ht=(t,n)=>s=>{t.push(s);if(!e){e=true;if(n&&rt.i&4){mt($t)}else{rt.raf($t)}}};const pt=t=>{for(let n=0;n<t.length;n++){try{t[n](performance.now())}catch(t){st(t)}}t.length=0};const $t=()=>{pt(dt);{pt(yt);if(e=dt.length>0){rt.raf($t)}}};const mt=t=>ut().then(t);const bt=ht(yt,true);export{Q as b,r as h,ut as p,tt as r,X as s};
//# sourceMappingURL=p-e0b59560.js.map