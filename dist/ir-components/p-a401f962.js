const t="ir-components";let e;let n;let s=false;let o=false;let l=false;let c=false;let i=false;const f=(t,e="")=>{{return()=>{}}};const r=(t,e)=>{{return()=>{}}};const u="{visibility:hidden}.hydrated{visibility:inherit}";const a={};const d=t=>{t=typeof t;return t==="object"||t==="function"};function y(t){var e,n,s;return(s=(n=(e=t.head)===null||e===void 0?void 0:e.querySelector('meta[name="csp-nonce"]'))===null||n===void 0?void 0:n.getAttribute("content"))!==null&&s!==void 0?s:undefined}const h=(t,e,...n)=>{let s=null;let o=null;let l=false;let c=false;const i=[];const f=e=>{for(let n=0;n<e.length;n++){s=e[n];if(Array.isArray(s)){f(s)}else if(s!=null&&typeof s!=="boolean"){if(l=typeof t!=="function"&&!d(s)){s=String(s)}if(l&&c){i[i.length-1].t+=s}else{i.push(l?p(null,s):s)}c=l}}};f(n);if(e){if(e.name){o=e.name}{const t=e.className||e.class;if(t){e.class=typeof t!=="object"?t:Object.keys(t).filter((e=>t[e])).join(" ")}}}if(typeof t==="function"){return t(e===null?{}:e,i,b)}const r=p(t,null);r.o=e;if(i.length>0){r.l=i}{r.i=o}return r};const p=(t,e)=>{const n={u:0,h:t,t:e,p:null,l:null};{n.o=null}{n.i=null}return n};const $={};const m=t=>t&&t.h===$;const b={forEach:(t,e)=>t.map(v).forEach(e),map:(t,e)=>t.map(v).map(e).map(w)};const v=t=>({vattrs:t.o,vchildren:t.l,vkey:t.$,vname:t.i,vtag:t.h,vtext:t.t});const w=t=>{if(typeof t.vtag==="function"){const e=Object.assign({},t.vattrs);if(t.vkey){e.key=t.vkey}if(t.vname){e.name=t.vname}return h(t.vtag,e,...t.vchildren||[])}const e=p(t.vtag,t.vtext);e.o=t.vattrs;e.l=t.vchildren;e.$=t.vkey;e.i=t.vname;return e};const S=(t,e)=>{if(t!=null&&!d(t)){if(e&4){return t==="false"?false:t===""||!!t}if(e&1){return String(t)}return t}return t};const g=t=>gt(t).m;const j=(t,e,n)=>{const s=g(t);return{emit:t=>k(s,e,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:t})}};const k=(t,e,n)=>{const s=Et.ce(e,n);t.dispatchEvent(s);return s};const O=new WeakMap;const M=(t,e,n)=>{let s=Rt.get(t);if(Nt&&n){s=s||new CSSStyleSheet;if(typeof s==="string"){s=e}else{s.replaceSync(e)}}else{s=e}Rt.set(t,s)};const C=(t,e,n)=>{var s;const o=R(e);const l=Rt.get(o);t=t.nodeType===11?t:xt;if(l){if(typeof l==="string"){t=t.head||t;let e=O.get(t);let n;if(!e){O.set(t,e=new Set)}if(!e.has(o)){{n=xt.createElement("style");n.innerHTML=l;const e=(s=Et.v)!==null&&s!==void 0?s:y(xt);if(e!=null){n.setAttribute("nonce",e)}t.insertBefore(n,t.querySelector("link"))}if(e){e.add(o)}}}else if(!t.adoptedStyleSheets.includes(l)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]}}return o};const P=t=>{const e=t.S;const n=t.m;const s=f("attachStyles",e.g);C(n.getRootNode(),e);s()};const R=(t,e)=>"sc-"+t.g;const T=(t,e,n,s,o,l)=>{if(n!==s){let c=Ot(t,e);let i=e.toLowerCase();if(e==="class"){const e=t.classList;const o=E(n);const l=E(s);e.remove(...o.filter((t=>t&&!l.includes(t))));e.add(...l.filter((t=>t&&!o.includes(t))))}else if(e==="ref"){if(s){s(t)}}else if(!c&&e[0]==="o"&&e[1]==="n"){if(e[2]==="-"){e=e.slice(3)}else if(Ot(Tt,i)){e=i.slice(2)}else{e=i[2]+e.slice(3)}if(n){Et.rel(t,e,n,false)}if(s){Et.ael(t,e,s,false)}}else{const i=d(s);if((c||i&&s!==null)&&!o){try{if(!t.tagName.includes("-")){const o=s==null?"":s;if(e==="list"){c=false}else if(n==null||t[e]!=o){t[e]=o}}else{t[e]=s}}catch(t){}}if(s==null||s===false){if(s!==false||t.getAttribute(e)===""){{t.removeAttribute(e)}}}else if((!c||l&4||o)&&!i){s=s===true?"":s;{t.setAttribute(e,s)}}}}};const x=/\s/;const E=t=>!t?[]:t.split(x);const L=(t,e,n,s)=>{const o=e.p.nodeType===11&&e.p.host?e.p.host:e.p;const l=t&&t.o||a;const c=e.o||a;{for(s in l){if(!(s in c)){T(o,s,l[s],undefined,n,e.u)}}}for(s in c){T(o,s,l[s],c[s],n,e.u)}};const N=(t,o,i,f)=>{const r=o.l[i];let u=0;let a;let d;let y;if(!s){l=true;if(r.h==="slot"){r.u|=r.l?2:1}}if(r.t!==null){a=r.p=xt.createTextNode(r.t)}else if(r.u&1){a=r.p=xt.createTextNode("")}else{a=r.p=xt.createElement(r.u&2?"slot-fb":r.h);{L(null,r,c)}if(r.l){for(u=0;u<r.l.length;++u){d=N(t,r,u);if(d){a.appendChild(d)}}}}{a["s-hn"]=n;if(r.u&(2|1)){a["s-sr"]=true;a["s-cr"]=e;a["s-sn"]=r.i||"";y=t&&t.l&&t.l[i];if(y&&y.h===r.h&&t.p){U(t.p,false)}}}return a};const U=(t,e)=>{Et.u|=1;const s=t.childNodes;for(let t=s.length-1;t>=0;t--){const o=s[t];if(o["s-hn"]!==n&&o["s-ol"]){D(o).insertBefore(o,q(o));o["s-ol"].remove();o["s-ol"]=undefined;l=true}if(e){U(o,e)}}Et.u&=~1};const W=(t,e,n,s,o,l)=>{let c=t["s-cr"]&&t["s-cr"].parentNode||t;let i;for(;o<=l;++o){if(s[o]){i=N(null,n,o);if(i){s[o].p=i;c.insertBefore(i,q(e))}}}};const A=(t,e,n)=>{for(let s=e;s<=n;++s){const e=t[s];if(e){const t=e.p;G(e);if(t){{o=true;if(t["s-ol"]){t["s-ol"].remove()}else{U(t,true)}}t.remove()}}}};const F=(t,e,n,s)=>{let o=0;let l=0;let c=e.length-1;let i=e[0];let f=e[c];let r=s.length-1;let u=s[0];let a=s[r];let d;while(o<=c&&l<=r){if(i==null){i=e[++o]}else if(f==null){f=e[--c]}else if(u==null){u=s[++l]}else if(a==null){a=s[--r]}else if(H(i,u)){I(i,u);i=e[++o];u=s[++l]}else if(H(f,a)){I(f,a);f=e[--c];a=s[--r]}else if(H(i,a)){if(i.h==="slot"||a.h==="slot"){U(i.p.parentNode,false)}I(i,a);t.insertBefore(i.p,f.p.nextSibling);i=e[++o];a=s[--r]}else if(H(f,u)){if(i.h==="slot"||a.h==="slot"){U(f.p.parentNode,false)}I(f,u);t.insertBefore(f.p,i.p);f=e[--c];u=s[++l]}else{{d=N(e&&e[l],n,l);u=s[++l]}if(d){{D(i.p).insertBefore(d,q(i.p))}}}}if(o>c){W(t,s[r+1]==null?null:s[r+1].p,n,s,l,r)}else if(l>r){A(e,o,c)}};const H=(t,e)=>{if(t.h===e.h){if(t.h==="slot"){return t.i===e.i}return true}return false};const q=t=>t&&t["s-ol"]||t;const D=t=>(t["s-ol"]?t["s-ol"]:t).parentNode;const I=(t,e)=>{const n=e.p=t.p;const s=t.l;const o=e.l;const l=e.h;const i=e.t;let f;if(i===null){{if(l==="slot");else{L(t,e,c)}}if(s!==null&&o!==null){F(n,s,e,o)}else if(o!==null){if(t.t!==null){n.textContent=""}W(n,null,e,o,0,o.length-1)}else if(s!==null){A(s,0,s.length-1)}}else if(f=n["s-cr"]){f.parentNode.textContent=i}else if(t.t!==i){n.data=i}};const V=t=>{const e=t.childNodes;let n;let s;let o;let l;let c;let i;for(s=0,o=e.length;s<o;s++){n=e[s];if(n.nodeType===1){if(n["s-sr"]){c=n["s-sn"];n.hidden=false;for(l=0;l<o;l++){i=e[l].nodeType;if(e[l]["s-hn"]!==n["s-hn"]||c!==""){if(i===1&&c===e[l].getAttribute("slot")){n.hidden=true;break}}else{if(i===1||i===3&&e[l].textContent.trim()!==""){n.hidden=true;break}}}}V(n)}}};const _=[];const z=t=>{let e;let n;let s;let l;let c;let i;let f=0;const r=t.childNodes;const u=r.length;for(;f<u;f++){e=r[f];if(e["s-sr"]&&(n=e["s-cr"])&&n.parentNode){s=n.parentNode.childNodes;l=e["s-sn"];for(i=s.length-1;i>=0;i--){n=s[i];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==e["s-hn"]){if(B(n,l)){c=_.find((t=>t.j===n));o=true;n["s-sn"]=n["s-sn"]||l;if(c){c.k=e}else{_.push({k:e,j:n})}if(n["s-sr"]){_.map((t=>{if(B(t.j,n["s-sn"])){c=_.find((t=>t.j===n));if(c&&!t.k){t.k=c.k}}}))}}else if(!_.some((t=>t.j===n))){_.push({j:n})}}}}if(e.nodeType===1){z(e)}}};const B=(t,e)=>{if(t.nodeType===1){if(t.getAttribute("slot")===null&&e===""){return true}if(t.getAttribute("slot")===e){return true}return false}if(t["s-sn"]===e){return true}return e===""};const G=t=>{{t.o&&t.o.ref&&t.o.ref(null);t.l&&t.l.map(G)}};const J=(t,c,i=false)=>{const f=t.m;const r=t.S;const u=t.O||p(null,null);const a=m(c)?c:h(null,null,c);n=f.tagName;if(r.M){a.o=a.o||{};r.M.map((([t,e])=>a.o[e]=f[t]))}if(i&&a.o){for(const t of Object.keys(a.o)){if(f.hasAttribute(t)&&!["key","ref","style","class"].includes(t)){a.o[t]=f[t]}}}a.h=null;a.u|=4;t.O=a;a.p=u.p=f;{e=f["s-cr"];s=(r.u&1)!==0;o=false}I(u,a);{Et.u|=1;if(l){z(a.p);let t;let e;let n;let s;let o;let l;let c=0;for(;c<_.length;c++){t=_[c];e=t.j;if(!e["s-ol"]){n=xt.createTextNode("");n["s-nr"]=e;e.parentNode.insertBefore(e["s-ol"]=n,e)}}for(c=0;c<_.length;c++){t=_[c];e=t.j;if(t.k){s=t.k.parentNode;o=t.k.nextSibling;n=e["s-ol"];while(n=n.previousSibling){l=n["s-nr"];if(l&&l["s-sn"]===e["s-sn"]&&s===l.parentNode){l=l.nextSibling;if(!l||!l["s-nr"]){o=l;break}}}if(!o&&s!==e.parentNode||e.nextSibling!==o){if(e!==o){if(!e["s-hn"]&&e["s-ol"]){e["s-hn"]=e["s-ol"].parentNode.nodeName}s.insertBefore(e,o)}}}else{if(e.nodeType===1){e.hidden=true}}}}if(o){V(a.p)}Et.u&=~1;_.length=0}};const K=(t,e)=>{if(e&&!t.C&&e["s-p"]){e["s-p"].push(new Promise((e=>t.C=e)))}};const Q=(t,e)=>{{t.u|=16}if(t.u&4){t.u|=512;return}K(t,t.P);const n=()=>X(t,e);return Dt(n)};const X=(t,e)=>{const n=f("scheduleUpdate",t.S.g);const s=t.R;let o;if(e){{t.u|=256;if(t.T){t.T.map((([t,e])=>ot(s,t,e)));t.T=undefined}}{o=ot(s,"componentWillLoad")}}n();return Y(o,(()=>tt(t,s,e)))};const Y=(t,e)=>Z(t)?t.then(e):e();const Z=t=>t instanceof Promise||t&&t.then&&typeof t.then==="function";const tt=async(t,e,n)=>{var s;const o=t.m;const l=f("update",t.S.g);const c=o["s-rc"];if(n){P(t)}const i=f("render",t.S.g);{et(t,e,o,n)}if(c){c.map((t=>t()));o["s-rc"]=undefined}i();l();{const e=(s=o["s-p"])!==null&&s!==void 0?s:[];const n=()=>nt(t);if(e.length===0){n()}else{Promise.all(e).then(n);t.u|=4;e.length=0}}};const et=(t,e,n,s)=>{try{e=e.render();{t.u&=~16}{t.u|=2}{{{J(t,e,s)}}}}catch(e){Mt(e,t.m)}return null};const nt=t=>{const e=t.S.g;const n=t.m;const s=f("postUpdate",e);const o=t.R;const l=t.P;if(!(t.u&64)){t.u|=64;{lt(n)}{ot(o,"componentDidLoad")}s();{t.L(n);if(!l){st()}}}else{s()}{t.N(n)}{if(t.C){t.C();t.C=undefined}if(t.u&512){qt((()=>Q(t,false)))}t.u&=~(4|512)}};const st=e=>{{lt(xt.documentElement)}qt((()=>k(Tt,"appload",{detail:{namespace:t}})))};const ot=(t,e,n)=>{if(t&&t[e]){try{return t[e](n)}catch(t){Mt(t)}}return undefined};const lt=t=>t.classList.add("hydrated");const ct=(t,e)=>gt(t).U.get(e);const it=(t,e,n,s)=>{const o=gt(t);const l=o.m;const c=o.U.get(e);const i=o.u;const f=o.R;n=S(n,s.W[e][0]);const r=Number.isNaN(c)&&Number.isNaN(n);const u=n!==c&&!r;if((!(i&8)||c===undefined)&&u){o.U.set(e,n);if(f){if(s.A&&i&128){const t=s.A[e];if(t){t.map((t=>{try{f[t](n,c,e)}catch(t){Mt(t,l)}}))}}if((i&(2|16))===2){Q(o,false)}}}};const ft=(t,e,n)=>{if(e.W){if(t.watchers){e.A=t.watchers}const s=Object.entries(e.W);const o=t.prototype;s.map((([t,[s]])=>{if(s&31||n&2&&s&32){Object.defineProperty(o,t,{get(){return ct(this,t)},set(n){it(this,t,n,e)},configurable:true,enumerable:true})}else if(n&1&&s&64){Object.defineProperty(o,t,{value(...e){const n=gt(this);return n.F.then((()=>n.R[t](...e)))}})}}));if(n&1){const n=new Map;o.attributeChangedCallback=function(t,e,s){Et.jmp((()=>{const e=n.get(t);if(this.hasOwnProperty(e)){s=this[e];delete this[e]}else if(o.hasOwnProperty(e)&&typeof this[e]==="number"&&this[e]==s){return}this[e]=s===null&&typeof this[e]==="boolean"?false:s}))};t.observedAttributes=s.filter((([t,e])=>e[0]&15)).map((([t,s])=>{const o=s[1]||t;n.set(o,t);if(s[0]&512){e.M.push([t,o])}return o}))}}return t};const rt=async(t,e,n,s,o)=>{if((e.u&32)===0){e.u|=32;{o=Pt(n);if(o.then){const t=r();o=await o;t()}if(!o.isProxied){{n.A=o.watchers}ft(o,n,2);o.isProxied=true}const t=f("createInstance",n.g);{e.u|=8}try{new o(e)}catch(t){Mt(t)}{e.u&=~8}{e.u|=128}t()}if(o.style){let t=o.style;const e=R(n);if(!Rt.has(e)){const s=f("registerStyles",n.g);M(e,t,!!(n.u&1));s()}}}const l=e.P;const c=()=>Q(e,true);if(l&&l["s-rc"]){l["s-rc"].push(c)}else{c()}};const ut=t=>{};const at=t=>{if((Et.u&1)===0){const e=gt(t);const n=e.S;const s=f("connectedCallback",n.g);if(!(e.u&1)){e.u|=1;{if(n.u&(4|8)){dt(t)}}{let n=t;while(n=n.parentNode||n.host){if(n["s-p"]){K(e,e.P=n);break}}}if(n.W){Object.entries(n.W).map((([e,[n]])=>{if(n&31&&t.hasOwnProperty(e)){const n=t[e];delete t[e];t[e]=n}}))}{rt(t,e,n)}}else{mt(t,e,n.H);if(e===null||e===void 0?void 0:e.R);else if(e===null||e===void 0?void 0:e.q){e.q.then((()=>ut()))}}s()}};const dt=t=>{const e=t["s-cr"]=xt.createComment("");e["s-cn"]=true;t.insertBefore(e,t.firstChild)};const yt=t=>{};const ht=async t=>{if((Et.u&1)===0){const e=gt(t);{if(e.D){e.D.map((t=>t()));e.D=undefined}}if(e===null||e===void 0?void 0:e.R);else if(e===null||e===void 0?void 0:e.q){e.q.then((()=>yt()))}}};const pt=(t,e={})=>{var n;const s=f();const o=[];const l=e.exclude||[];const c=Tt.customElements;const i=xt.head;const r=i.querySelector("meta[charset]");const a=xt.createElement("style");const d=[];let h;let p=true;Object.assign(Et,e);Et.I=new URL(e.resourcesUrl||"./",xt.baseURI).href;t.map((t=>{t[1].map((e=>{const n={u:e[0],g:e[1],W:e[2],H:e[3]};{n.W=e[2]}{n.H=e[3]}{n.M=[]}{n.A={}}const s=n.g;const i=class extends HTMLElement{constructor(t){super(t);t=this;kt(t,n)}connectedCallback(){if(h){clearTimeout(h);h=null}if(p){d.push(this)}else{Et.jmp((()=>at(this)))}}disconnectedCallback(){Et.jmp((()=>ht(this)))}componentOnReady(){return gt(this).q}};n.V=t[0];if(!l.includes(s)&&!c.get(s)){o.push(s);c.define(s,ft(i,n,1))}}))}));{a.innerHTML=o+u;a.setAttribute("data-styles","");const t=(n=Et.v)!==null&&n!==void 0?n:y(xt);if(t!=null){a.setAttribute("nonce",t)}i.insertBefore(a,r?r.nextSibling:i.firstChild)}p=false;if(d.length){d.map((t=>t.connectedCallback()))}else{{Et.jmp((()=>h=setTimeout(st,30)))}}s()};const $t=(t,e)=>e;const mt=(t,e,n,s)=>{if(n){n.map((([n,s,o])=>{const l=t;const c=bt(e,o);const i=vt(n);Et.ael(l,s,c,i);(e.D=e.D||[]).push((()=>Et.rel(l,s,c,i)))}))}};const bt=(t,e)=>n=>{try{{if(t.u&256){t.R[e](n)}else{(t.T=t.T||[]).push([e,n])}}}catch(t){Mt(t)}};const vt=t=>(t&2)!==0;const wt=t=>Et.v=t;const St=new WeakMap;const gt=t=>St.get(t);const jt=(t,e)=>St.set(e.R=t,e);const kt=(t,e)=>{const n={u:0,m:t,S:e,U:new Map};{n.F=new Promise((t=>n.N=t))}{n.q=new Promise((t=>n.L=t));t["s-p"]=[];t["s-rc"]=[]}mt(t,n,e.H);return St.set(t,n)};const Ot=(t,e)=>e in t;const Mt=(t,e)=>(0,console.error)(t,e);const Ct=new Map;const Pt=(t,e,n)=>{const s=t.g.replace(/-/g,"_");const o=t.V;const l=Ct.get(o);if(l){return l[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${o}.entry.js${""}`).then((t=>{{Ct.set(o,t)}return t[s]}),Mt)};const Rt=new Map;const Tt=typeof window!=="undefined"?window:{};const xt=Tt.document||{head:{}};const Et={u:0,I:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,s)=>t.addEventListener(e,n,s),rel:(t,e,n,s)=>t.removeEventListener(e,n,s),ce:(t,e)=>new CustomEvent(t,e)};const Lt=t=>Promise.resolve(t);const Nt=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const Ut=[];const Wt=[];const At=(t,e)=>n=>{t.push(n);if(!i){i=true;if(e&&Et.u&4){qt(Ht)}else{Et.raf(Ht)}}};const Ft=t=>{for(let e=0;e<t.length;e++){try{t[e](performance.now())}catch(t){Mt(t)}}t.length=0};const Ht=()=>{Ft(Ut);{Ft(Wt);if(i=Ut.length>0){Et.raf(Ht)}}};const qt=t=>Lt().then(t);const Dt=At(Wt,true);export{$t as F,$ as H,pt as b,j as c,h,Lt as p,jt as r,wt as s};
//# sourceMappingURL=p-a401f962.js.map