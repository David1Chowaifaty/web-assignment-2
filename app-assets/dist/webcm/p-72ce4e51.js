const t="webcm";let n;let e;let s=false;let o=false;const l=(t,n="")=>{{return()=>{}}};const c=(t,n)=>{{return()=>{}}};const i="{visibility:hidden}.hydrated{visibility:inherit}";const f={};const r=t=>t!=null;const u=t=>{t=typeof t;return t==="object"||t==="function"};function a(t){var n,e,s;return(s=(e=(n=t.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||e===void 0?void 0:e.getAttribute("content"))!==null&&s!==void 0?s:undefined}const d=(t,n,...e)=>{let s=null;let o=false;let l=false;const c=[];const i=n=>{for(let e=0;e<n.length;e++){s=n[e];if(Array.isArray(s)){i(s)}else if(s!=null&&typeof s!=="boolean"){if(o=typeof t!=="function"&&!u(s)){s=String(s)}if(o&&l){c[c.length-1].t+=s}else{c.push(o?y(null,s):s)}l=o}}};i(e);if(n){{const t=n.className||n.class;if(t){n.class=typeof t!=="object"?t:Object.keys(t).filter((n=>t[n])).join(" ")}}}const f=y(t,null);f.o=n;if(c.length>0){f.l=c}return f};const y=(t,n)=>{const e={i:0,u:t,t:n,h:null,l:null};{e.o=null}return e};const h={};const p=t=>t&&t.u===h;const m=(t,n)=>{if(t!=null&&!u(t)){if(n&4){return t==="false"?false:t===""||!!t}if(n&1){return String(t)}return t}return t};const $=(t,n,e)=>{const s=dt.ce(n,e);t.dispatchEvent(s);return s};const b=new WeakMap;const v=(t,n,e)=>{let s=rt.get(t);if(ht&&e){s=s||new CSSStyleSheet;if(typeof s==="string"){s=n}else{s.replaceSync(n)}}else{s=n}rt.set(t,s)};const w=(t,n,e)=>{var s;const o=g(n);const l=rt.get(o);t=t.nodeType===11?t:at;if(l){if(typeof l==="string"){t=t.head||t;let n=b.get(t);let e;if(!n){b.set(t,n=new Set)}if(!n.has(o)){{e=at.createElement("style");e.innerHTML=l;const n=(s=dt.p)!==null&&s!==void 0?s:a(at);if(n!=null){e.setAttribute("nonce",n)}t.insertBefore(e,t.querySelector("link"))}if(n){n.add(o)}}}else if(!t.adoptedStyleSheets.includes(l)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]}}return o};const S=t=>{const n=t.m;const e=t.$;const s=n.i;const o=l("attachStyles",n.v);const c=w(e.shadowRoot?e.shadowRoot:e.getRootNode(),n);if(s&10){e["s-sc"]=c;e.classList.add(c+"-h")}o()};const g=(t,n)=>"sc-"+t.v;const j=(t,n,e,s,o,l)=>{if(e!==s){let c=lt(t,n);let i=n.toLowerCase();if(n==="class"){const n=t.classList;const o=M(e);const l=M(s);n.remove(...o.filter((t=>t&&!l.includes(t))));n.add(...l.filter((t=>t&&!o.includes(t))))}else if(!c&&n[0]==="o"&&n[1]==="n"){if(n[2]==="-"){n=n.slice(3)}else if(lt(ut,i)){n=i.slice(2)}else{n=i[2]+n.slice(3)}if(e){dt.rel(t,n,e,false)}if(s){dt.ael(t,n,s,false)}}else{const i=u(s);if((c||i&&s!==null)&&!o){try{if(!t.tagName.includes("-")){const o=s==null?"":s;if(n==="list"){c=false}else if(e==null||t[n]!=o){t[n]=o}}else{t[n]=s}}catch(t){}}if(s==null||s===false){if(s!==false||t.getAttribute(n)===""){{t.removeAttribute(n)}}}else if((!c||l&4||o)&&!i){s=s===true?"":s;{t.setAttribute(n,s)}}}}};const k=/\s/;const M=t=>!t?[]:t.split(k);const C=(t,n,e,s)=>{const o=n.h.nodeType===11&&n.h.host?n.h.host:n.h;const l=t&&t.o||f;const c=n.o||f;{for(s in l){if(!(s in c)){j(o,s,l[s],undefined,e,n.i)}}}for(s in c){j(o,s,l[s],c[s],e,n.i)}};const O=(t,e,o,l)=>{const c=e.l[o];let i=0;let f;let u;{f=c.h=at.createElement(c.u);{C(null,c,s)}if(r(n)&&f["s-si"]!==n){f.classList.add(f["s-si"]=n)}if(c.l){for(i=0;i<c.l.length;++i){u=O(t,c,i);if(u){f.appendChild(u)}}}}return f};const P=(t,n,s,o,l,c)=>{let i=t;let f;if(i.shadowRoot&&i.tagName===e){i=i.shadowRoot}for(;l<=c;++l){if(o[l]){f=O(null,s,l);if(f){o[l].h=f;i.insertBefore(f,n)}}}};const U=(t,n,e)=>{for(let s=n;s<=e;++s){const n=t[s];if(n){const t=n.h;if(t){t.remove()}}}};const x=(t,n,e,s)=>{let o=0;let l=0;let c=n.length-1;let i=n[0];let f=n[c];let r=s.length-1;let u=s[0];let a=s[r];let d;while(o<=c&&l<=r){if(i==null){i=n[++o]}else if(f==null){f=n[--c]}else if(u==null){u=s[++l]}else if(a==null){a=s[--r]}else if(E(i,u)){L(i,u);i=n[++o];u=s[++l]}else if(E(f,a)){L(f,a);f=n[--c];a=s[--r]}else if(E(i,a)){L(i,a);t.insertBefore(i.h,f.h.nextSibling);i=n[++o];a=s[--r]}else if(E(f,u)){L(f,u);t.insertBefore(f.h,i.h);f=n[--c];u=s[++l]}else{{d=O(n&&n[l],e,l);u=s[++l]}if(d){{i.h.parentNode.insertBefore(d,i.h)}}}}if(o>c){P(t,s[r+1]==null?null:s[r+1].h,e,s,l,r)}else if(l>r){U(n,o,c)}};const E=(t,n)=>{if(t.u===n.u){return true}return false};const L=(t,n)=>{const e=n.h=t.h;const o=t.l;const l=n.l;{{{C(t,n,s)}}if(o!==null&&l!==null){x(e,o,n,l)}else if(l!==null){P(e,null,n,l,0,l.length-1)}else if(o!==null){U(o,0,o.length-1)}}};const N=(t,s,o=false)=>{const l=t.$;const c=t.m;const i=t.S||y(null,null);const f=p(s)?s:d(null,null,s);e=l.tagName;if(c.g){f.o=f.o||{};c.g.map((([t,n])=>f.o[n]=l[t]))}if(o&&f.o){for(const t of Object.keys(f.o)){if(l.hasAttribute(t)&&!["key","ref","style","class"].includes(t)){f.o[t]=l[t]}}}f.u=null;f.i|=4;t.S=f;f.h=i.h=l.shadowRoot||l;{n=l["s-sc"]}L(i,f)};const T=(t,n)=>{if(n&&!t.j&&n["s-p"]){n["s-p"].push(new Promise((n=>t.j=n)))}};const W=(t,n)=>{{t.i|=16}if(t.i&4){t.i|=512;return}T(t,t.k);const e=()=>A(t,n);return St(e)};const A=(t,n)=>{const e=l("scheduleUpdate",t.m.v);const s=t.M;let o;if(n){{o=_(s,"componentWillLoad")}}e();return R(o,(()=>F(t,s,n)))};const R=(t,n)=>q(t)?t.then(n):n();const q=t=>t instanceof Promise||t&&t.then&&typeof t.then==="function";const F=async(t,n,e)=>{var s;const o=t.$;const c=l("update",t.m.v);const i=o["s-rc"];if(e){S(t)}const f=l("render",t.m.v);{H(t,n,o,e)}if(i){i.map((t=>t()));o["s-rc"]=undefined}f();c();{const n=(s=o["s-p"])!==null&&s!==void 0?s:[];const e=()=>I(t);if(n.length===0){e()}else{Promise.all(n).then(e);t.i|=4;n.length=0}}};const H=(t,n,e,s)=>{try{n=n.render();{t.i&=~16}{t.i|=2}{{{N(t,n,s)}}}}catch(n){ct(n,t.$)}return null};const I=t=>{const n=t.m.v;const e=t.$;const s=l("postUpdate",n);const o=t.k;if(!(t.i&64)){t.i|=64;{z(e)}s();{t.C(e);if(!o){V()}}}else{s()}{if(t.j){t.j();t.j=undefined}if(t.i&512){wt((()=>W(t,false)))}t.i&=~(4|512)}};const V=n=>{{z(at.documentElement)}wt((()=>$(ut,"appload",{detail:{namespace:t}})))};const _=(t,n,e)=>{if(t&&t[n]){try{return t[n](e)}catch(t){ct(t)}}return undefined};const z=t=>t.classList.add("hydrated");const B=(t,n)=>et(t).O.get(n);const D=(t,n,e,s)=>{const o=et(t);const l=o.O.get(n);const c=o.i;const i=o.M;e=m(e,s.P[n][0]);const f=Number.isNaN(l)&&Number.isNaN(e);const r=e!==l&&!f;if((!(c&8)||l===undefined)&&r){o.O.set(n,e);if(i){if((c&(2|16))===2){W(o,false)}}}};const G=(t,n,e)=>{if(n.P){const s=Object.entries(n.P);const o=t.prototype;s.map((([t,[s]])=>{if(s&31||e&2&&s&32){Object.defineProperty(o,t,{get(){return B(this,t)},set(e){D(this,t,e,n)},configurable:true,enumerable:true})}}));if(e&1){const e=new Map;o.attributeChangedCallback=function(t,n,s){dt.jmp((()=>{const n=e.get(t);if(this.hasOwnProperty(n)){s=this[n];delete this[n]}else if(o.hasOwnProperty(n)&&typeof this[n]==="number"&&this[n]==s){return}this[n]=s===null&&typeof this[n]==="boolean"?false:s}))};t.observedAttributes=s.filter((([t,n])=>n[0]&15)).map((([t,s])=>{const o=s[1]||t;e.set(o,t);if(s[0]&512){n.g.push([t,o])}return o}))}}return t};const J=async(t,n,e,s,o)=>{if((n.i&32)===0){n.i|=32;{o=ft(e);if(o.then){const t=c();o=await o;t()}if(!o.isProxied){G(o,e,2);o.isProxied=true}const t=l("createInstance",e.v);{n.i|=8}try{new o(n)}catch(t){ct(t)}{n.i&=~8}t()}if(o.style){let t=o.style;const n=g(e);if(!rt.has(n)){const s=l("registerStyles",e.v);v(n,t,!!(e.i&1));s()}}}const i=n.k;const f=()=>W(n,true);if(i&&i["s-rc"]){i["s-rc"].push(f)}else{f()}};const K=t=>{};const Q=t=>{if((dt.i&1)===0){const n=et(t);const e=n.m;const s=l("connectedCallback",e.v);if(!(n.i&1)){n.i|=1;{let e=t;while(e=e.parentNode||e.host){if(e["s-p"]){T(n,n.k=e);break}}}if(e.P){Object.entries(e.P).map((([n,[e]])=>{if(e&31&&t.hasOwnProperty(n)){const e=t[n];delete t[n];t[n]=e}}))}{J(t,n,e)}}else{if(n===null||n===void 0?void 0:n.M);else if(n===null||n===void 0?void 0:n.U){n.U.then((()=>K()))}}s()}};const X=t=>{};const Y=async t=>{if((dt.i&1)===0){const n=et(t);if(n===null||n===void 0?void 0:n.M);else if(n===null||n===void 0?void 0:n.U){n.U.then((()=>X()))}}};const Z=(t,n={})=>{var e;const s=l();const o=[];const c=n.exclude||[];const f=ut.customElements;const r=at.head;const u=r.querySelector("meta[charset]");const d=at.createElement("style");const y=[];let h;let p=true;Object.assign(dt,n);dt.L=new URL(n.resourcesUrl||"./",at.baseURI).href;t.map((t=>{t[1].map((n=>{const e={i:n[0],v:n[1],P:n[2],N:n[3]};{e.P=n[2]}{e.g=[]}const s=e.v;const l=class extends HTMLElement{constructor(t){super(t);t=this;ot(t,e);if(e.i&1){{{t.attachShadow({mode:"open"})}}}}connectedCallback(){if(h){clearTimeout(h);h=null}if(p){y.push(this)}else{dt.jmp((()=>Q(this)))}}disconnectedCallback(){dt.jmp((()=>Y(this)))}componentOnReady(){return et(this).U}};e.T=t[0];if(!c.includes(s)&&!f.get(s)){o.push(s);f.define(s,G(l,e,1))}}))}));{d.innerHTML=o+i;d.setAttribute("data-styles","");const t=(e=dt.p)!==null&&e!==void 0?e:a(at);if(t!=null){d.setAttribute("nonce",t)}r.insertBefore(d,u?u.nextSibling:r.firstChild)}p=false;if(y.length){y.map((t=>t.connectedCallback()))}else{{dt.jmp((()=>h=setTimeout(V,30)))}}s()};const tt=t=>dt.p=t;const nt=new WeakMap;const et=t=>nt.get(t);const st=(t,n)=>nt.set(n.M=t,n);const ot=(t,n)=>{const e={i:0,$:t,m:n,O:new Map};{e.U=new Promise((t=>e.C=t));t["s-p"]=[];t["s-rc"]=[]}return nt.set(t,e)};const lt=(t,n)=>n in t;const ct=(t,n)=>(0,console.error)(t,n);const it=new Map;const ft=(t,n,e)=>{const s=t.v.replace(/-/g,"_");const o=t.T;const l=it.get(o);if(l){return l[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${o}.entry.js${""}`).then((t=>{{it.set(o,t)}return t[s]}),ct)};const rt=new Map;const ut=typeof window!=="undefined"?window:{};const at=ut.document||{head:{}};const dt={i:0,L:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,n,e,s)=>t.addEventListener(n,e,s),rel:(t,n,e,s)=>t.removeEventListener(n,e,s),ce:(t,n)=>new CustomEvent(t,n)};const yt=t=>Promise.resolve(t);const ht=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const pt=[];const mt=[];const $t=(t,n)=>e=>{t.push(e);if(!o){o=true;if(n&&dt.i&4){wt(vt)}else{dt.raf(vt)}}};const bt=t=>{for(let n=0;n<t.length;n++){try{t[n](performance.now())}catch(t){ct(t)}}t.length=0};const vt=()=>{bt(pt);{bt(mt);if(o=pt.length>0){dt.raf(vt)}}};const wt=t=>yt().then(t);const St=$t(mt,true);export{Z as b,d as h,yt as p,st as r,tt as s};
//# sourceMappingURL=p-72ce4e51.js.map