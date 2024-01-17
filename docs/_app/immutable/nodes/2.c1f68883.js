var an=Object.defineProperty;var on=(i,t,e)=>t in i?an(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Se=(i,t,e)=>(on(i,typeof t!="symbol"?t+"":t,e),e),Ue=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var I=(i,t,e)=>(Ue(i,t,"read from private field"),e?e.call(i):t.get(i)),Pt=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},Le=(i,t,e,n)=>(Ue(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e);var W=(i,t,e)=>(Ue(i,t,"access private method"),e);import{s as se,e as $t,i as u,C as V,d as s,o as $e,l as F,m as P,f as p,a as H,g as v,h as Z,z as C,c as M,j as b,v as w,n as ie,D as ae,E as un,F as Ae,G as Ie}from"../chunks/scheduler.646e10fa.js";import{S as oe,i as ue,g as Fe,t as Q,c as Pe,a as J,b as Ht,d as Mt,m as Lt,e as Et}from"../chunks/index.a3a4acac.js";import{s as ot,b as Bt,t as cn,a as Je,f as fn}from"../chunks/constants.7aa5bcec.js";import{a as hn,d as dn,b as zt,c as Wt,g as Re,e as mn,t as pn,f as vn,h as Ve,m as Xe,B as _n,C as bn}from"../chunks/provider-browser.63ef9ceb.js";import{E as Ne}from"../chunks/EducateYourself.d36ef772.js";import{S as Cn}from"../chunks/Seo.34987476.js";const gn=BigInt(-1),Tt=BigInt(0),he=BigInt(1),wn=BigInt(5),fe={};let de="0000";for(;de.length<80;)de+=de;function le(i){let t=de;for(;t.length<i;)t+=t;return BigInt("1"+t.substring(0,i))}function ve(i,t,e){const n=BigInt(t.width);if(t.signed){const l=he<<n-he;Wt(e==null||i>=-l&&i<l,"overflow","NUMERIC_FAULT",{operation:e,fault:"overflow",value:i}),i>Tt?i=Ve(Xe(i,n),n):i=-Ve(Xe(-i,n),n)}else{const l=he<<n;Wt(e==null||i>=0&&i<l,"overflow","NUMERIC_FAULT",{operation:e,fault:"overflow",value:i}),i=(i%l+l)%l&l-he}return i}function qe(i){typeof i=="number"&&(i=`fixed128x${i}`);let t=!0,e=128,n=18;if(typeof i=="string"){if(i!=="fixed")if(i==="ufixed")t=!1;else{const r=i.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);zt(r,"invalid fixed format","format",i),t=r[1]!=="u",e=parseInt(r[2]),n=parseInt(r[3])}}else if(i){const r=i,o=(h,c,f)=>r[h]==null?f:(zt(typeof r[h]===c,"invalid fixed format ("+h+" not "+c+")","format."+h,r[h]),r[h]);t=o("signed","boolean",t),e=o("width","number",e),n=o("decimals","number",n)}zt(e%8===0,"invalid FixedNumber width (not byte aligned)","format.width",e),zt(n<=80,"invalid FixedNumber decimals (too large)","format.decimals",n);const l=(t?"":"u")+"fixed"+String(e)+"x"+String(n);return{signed:t,width:e,decimals:n,name:l}}function kn(i,t){let e="";i<Tt&&(e="-",i*=gn);let n=i.toString();if(t===0)return e+n;for(;n.length<=t;)n=de+n;const l=n.length-t;for(n=n.substring(0,l)+"."+n.substring(l);n[0]==="0"&&n[1]!==".";)n=n.substring(1);for(;n[n.length-1]==="0"&&n[n.length-2]!==".";)n=n.substring(0,n.length-1);return e+n}var yt,N,at,Vt,re,xt,qt,_e,ze,be,Oe,Ce,De,ge,We;const Rt=class Rt{constructor(t,e,n){Pt(this,Vt);Pt(this,xt);Pt(this,_e);Pt(this,be);Pt(this,Ce);Pt(this,ge);Se(this,"format");Pt(this,yt,void 0);Pt(this,N,void 0);Pt(this,at,void 0);Se(this,"_value");hn(t,fe,"FixedNumber"),Le(this,N,e),Le(this,yt,n);const l=kn(e,n.decimals);dn(this,{format:n.name,_value:l}),Le(this,at,le(n.decimals))}get signed(){return I(this,yt).signed}get width(){return I(this,yt).width}get decimals(){return I(this,yt).decimals}get value(){return I(this,N)}addUnsafe(t){return W(this,_e,ze).call(this,t)}add(t){return W(this,_e,ze).call(this,t,"add")}subUnsafe(t){return W(this,be,Oe).call(this,t)}sub(t){return W(this,be,Oe).call(this,t,"sub")}mulUnsafe(t){return W(this,Ce,De).call(this,t)}mul(t){return W(this,Ce,De).call(this,t,"mul")}mulSignal(t){W(this,Vt,re).call(this,t);const e=I(this,N)*I(t,N);return Wt(e%I(this,at)===Tt,"precision lost during signalling mul","NUMERIC_FAULT",{operation:"mulSignal",fault:"underflow",value:this}),W(this,xt,qt).call(this,e/I(this,at),"mulSignal")}divUnsafe(t){return W(this,ge,We).call(this,t)}div(t){return W(this,ge,We).call(this,t,"div")}divSignal(t){Wt(I(t,N)!==Tt,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),W(this,Vt,re).call(this,t);const e=I(this,N)*I(this,at);return Wt(e%I(t,N)===Tt,"precision lost during signalling div","NUMERIC_FAULT",{operation:"divSignal",fault:"underflow",value:this}),W(this,xt,qt).call(this,e/I(t,N),"divSignal")}cmp(t){let e=this.value,n=t.value;const l=this.decimals-t.decimals;return l>0?n*=le(l):l<0&&(e*=le(-l)),e<n?-1:e>n?1:0}eq(t){return this.cmp(t)===0}lt(t){return this.cmp(t)<0}lte(t){return this.cmp(t)<=0}gt(t){return this.cmp(t)>0}gte(t){return this.cmp(t)>=0}floor(){let t=I(this,N);return I(this,N)<Tt&&(t-=I(this,at)-he),t=I(this,N)/I(this,at)*I(this,at),W(this,xt,qt).call(this,t,"floor")}ceiling(){let t=I(this,N);return I(this,N)>Tt&&(t+=I(this,at)-he),t=I(this,N)/I(this,at)*I(this,at),W(this,xt,qt).call(this,t,"ceiling")}round(t){if(t==null&&(t=0),t>=this.decimals)return this;const e=this.decimals-t,n=wn*le(e-1);let l=this.value+n;const r=le(e);return l=l/r*r,ve(l,I(this,yt),"round"),new Rt(fe,l,I(this,yt))}isZero(){return I(this,N)===Tt}isNegative(){return I(this,N)<Tt}toString(){return this._value}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return Rt.fromString(this.toString(),t)}static fromValue(t,e,n){const l=e==null?0:Re(e),r=qe(n);let o=mn(t,"value");const h=l-r.decimals;if(h>0){const c=le(h);Wt(o%c===Tt,"value loses precision for format","NUMERIC_FAULT",{operation:"fromValue",fault:"underflow",value:t}),o/=c}else h<0&&(o*=le(-h));return ve(o,r,"fromValue"),new Rt(fe,o,r)}static fromString(t,e){const n=t.match(/^(-?)([0-9]*)\.?([0-9]*)$/);zt(n&&n[2].length+n[3].length>0,"invalid FixedNumber string value","value",t);const l=qe(e);let r=n[2]||"0",o=n[3]||"";for(;o.length<l.decimals;)o+=de;Wt(o.substring(l.decimals).match(/^0*$/),"too many decimals for format","NUMERIC_FAULT",{operation:"fromString",fault:"underflow",value:t}),o=o.substring(0,l.decimals);const h=BigInt(n[1]+r+o);return ve(h,l,"fromString"),new Rt(fe,h,l)}static fromBytes(t,e){let n=pn(vn(t,"value"));const l=qe(e);return l.signed&&(n=Ve(n,l.width)),ve(n,l,"fromBytes"),new Rt(fe,n,l)}};yt=new WeakMap,N=new WeakMap,at=new WeakMap,Vt=new WeakSet,re=function(t){zt(this.format===t.format,"incompatible format; use fixedNumber.toFormat","other",t)},xt=new WeakSet,qt=function(t,e){return t=ve(t,I(this,yt),e),new Rt(fe,t,I(this,yt))},_e=new WeakSet,ze=function(t,e){return W(this,Vt,re).call(this,t),W(this,xt,qt).call(this,I(this,N)+I(t,N),e)},be=new WeakSet,Oe=function(t,e){return W(this,Vt,re).call(this,t),W(this,xt,qt).call(this,I(this,N)-I(t,N),e)},Ce=new WeakSet,De=function(t,e){return W(this,Vt,re).call(this,t),W(this,xt,qt).call(this,I(this,N)*I(t,N)/I(this,at),e)},ge=new WeakSet,We=function(t,e){return Wt(I(t,N)!==Tt,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),W(this,Vt,re).call(this,t),W(this,xt,qt).call(this,I(this,N)*I(this,at)/I(t,N),e)};let Be=Rt;const nn=["wei","kwei","mwei","gwei","szabo","finney","ether"];function Ee(i,t){let e=18;if(typeof t=="string"){const n=nn.indexOf(t);zt(n>=0,"invalid unit","unit",t),e=3*n}else t!=null&&(e=Re(t,"unit"));return Be.fromValue(i,e,{decimals:e,width:512}).toString()}function ln(i,t){zt(typeof i=="string","value must be a string","value",i);let e=18;if(typeof t=="string"){const n=nn.indexOf(t);zt(n>=0,"invalid unit","unit",t),e=3*n}else t!=null&&(e=Re(t,"unit"));return Be.fromString(i,{decimals:e,width:512}).value}function Tn(i){return Ee(i,18)}function rn(i){return ln(i,18)}function yn(i){let t;return{c(){t=F("... loading data from blockchain ...")},l(e){t=P(e,"... loading data from blockchain ...")},m(e,n){u(e,t,n)},p:V,d(e){e&&s(t)}}}function xn(i){let t,e,n,l='<th class="svelte-1d7t3w1">Key</th> <th class="svelte-1d7t3w1">Value</th>',r,o,h,c="Connected Wallet",f,_,x,L,d,m,k="Wallet Balance",g,E,A,q,D,R="Freedom Cash",K,Y,U,y="Buy Price",S,j,It,dt,z,O,X,ft="Guaranteed Minimum Sell Price",tt,et,nt,lt,vt,$,B,_t="Market Capitalization (according to contract)",rt,Ft,At,bt,ce,ht,it,me="Smart Contract Address",Ot,Ct,mt,gt;return{c(){t=p("div"),e=p("table"),n=p("tr"),n.innerHTML=l,r=H(),o=p("tr"),h=p("td"),h.textContent=c,f=H(),_=p("td"),x=F(i[0]),L=H(),d=p("tr"),m=p("td"),m.textContent=k,g=H(),E=p("td"),A=F(i[1]),q=H(),D=p("a"),D.textContent=R,K=H(),Y=p("tr"),U=p("td"),U.textContent=y,S=H(),j=p("td"),It=F(i[3]),dt=F(" Ether"),z=H(),O=p("tr"),X=p("td"),X.textContent=ft,tt=H(),et=p("td"),nt=F(i[4]),lt=F(" Ether"),vt=H(),$=p("tr"),B=p("td"),B.textContent=_t,rt=H(),Ft=p("td"),At=F(i[5]),bt=F(" Ether"),ce=H(),ht=p("tr"),it=p("td"),it.textContent=me,Ot=H(),Ct=p("td"),mt=p("a"),gt=F(ot),this.h()},l(ut){t=v(ut,"DIV",{class:!0});var st=Z(t);e=v(st,"TABLE",{class:!0});var G=Z(e);n=v(G,"TR",{class:!0,"data-svelte-h":!0}),C(n)!=="svelte-18z3kxz"&&(n.innerHTML=l),r=M(G),o=v(G,"TR",{class:!0});var jt=Z(o);h=v(jt,"TD",{class:!0,"data-svelte-h":!0}),C(h)!=="svelte-qrf8j6"&&(h.textContent=c),f=M(jt),_=v(jt,"TD",{class:!0});var Gt=Z(_);x=P(Gt,i[0]),Gt.forEach(s),jt.forEach(s),L=M(G),d=v(G,"TR",{class:!0});var pt=Z(d);m=v(pt,"TD",{class:!0,"data-svelte-h":!0}),C(m)!=="svelte-upo3l3"&&(m.textContent=k),g=M(pt),E=v(pt,"TD",{class:!0});var Kt=Z(E);A=P(Kt,i[1]),q=M(Kt),D=v(Kt,"A",{href:!0,target:!0,"data-svelte-h":!0}),C(D)!=="svelte-1hohkqi"&&(D.textContent=R),Kt.forEach(s),pt.forEach(s),K=M(G),Y=v(G,"TR",{class:!0});var St=Z(Y);U=v(St,"TD",{class:!0,"data-svelte-h":!0}),C(U)!=="svelte-vese2l"&&(U.textContent=y),S=M(St),j=v(St,"TD",{class:!0});var wt=Z(j);It=P(wt,i[3]),dt=P(wt," Ether"),wt.forEach(s),St.forEach(s),z=M(G),O=v(G,"TR",{class:!0});var Ut=Z(O);X=v(Ut,"TD",{class:!0,"data-svelte-h":!0}),C(X)!=="svelte-1w7yvf"&&(X.textContent=ft),tt=M(Ut),et=v(Ut,"TD",{class:!0});var kt=Z(et);nt=P(kt,i[4]),lt=P(kt," Ether"),kt.forEach(s),Ut.forEach(s),vt=M(G),$=v(G,"TR",{class:!0});var Yt=Z($);B=v(Yt,"TD",{class:!0,"data-svelte-h":!0}),C(B)!=="svelte-o8lyom"&&(B.textContent=_t),rt=M(Yt),Ft=v(Yt,"TD",{class:!0});var Dt=Z(Ft);At=P(Dt,i[5]),bt=P(Dt," Ether"),Dt.forEach(s),Yt.forEach(s),ce=M(G),ht=v(G,"TR",{class:!0});var ct=Z(ht);it=v(ct,"TD",{class:!0,"data-svelte-h":!0}),C(it)!=="svelte-1cvg04r"&&(it.textContent=me),Ot=M(ct),Ct=v(ct,"TD",{class:!0});var pe=Z(Ct);mt=v(pe,"A",{href:!0,target:!0});var Zt=Z(mt);gt=P(Zt,ot),Zt.forEach(s),pe.forEach(s),ct.forEach(s),G.forEach(s),st.forEach(s),this.h()},h(){b(n,"class","svelte-1d7t3w1"),b(h,"class","svelte-1d7t3w1"),b(_,"class","longInfo svelte-1d7t3w1"),b(o,"class","svelte-1d7t3w1"),b(m,"class","svelte-1d7t3w1"),b(D,"href",Bt+"token/"+ot+"#code#L891"),b(D,"target","_blank"),b(E,"class","svelte-1d7t3w1"),b(d,"class","svelte-1d7t3w1"),b(U,"class","svelte-1d7t3w1"),b(j,"class","svelte-1d7t3w1"),b(Y,"class","svelte-1d7t3w1"),b(X,"class","svelte-1d7t3w1"),b(et,"class","svelte-1d7t3w1"),b(O,"class","svelte-1d7t3w1"),b(B,"class","svelte-1d7t3w1"),b(Ft,"class","svelte-1d7t3w1"),b($,"class","svelte-1d7t3w1"),b(it,"class","svelte-1d7t3w1"),b(mt,"href",Bt+"token/"+ot+"#code#L891"),b(mt,"target","_blank"),b(Ct,"class","longInfo svelte-1d7t3w1"),b(ht,"class","svelte-1d7t3w1"),b(e,"class","svelte-1d7t3w1"),b(t,"class","tableDiv svelte-1d7t3w1")},m(ut,st){u(ut,t,st),w(t,e),w(e,n),w(e,r),w(e,o),w(o,h),w(o,f),w(o,_),w(_,x),w(e,L),w(e,d),w(d,m),w(d,g),w(d,E),w(E,A),w(E,q),w(E,D),w(e,K),w(e,Y),w(Y,U),w(Y,S),w(Y,j),w(j,It),w(j,dt),w(e,z),w(e,O),w(O,X),w(O,tt),w(O,et),w(et,nt),w(et,lt),w(e,vt),w(e,$),w($,B),w($,rt),w($,Ft),w(Ft,At),w(Ft,bt),w(e,ce),w(e,ht),w(ht,it),w(ht,Ot),w(ht,Ct),w(Ct,mt),w(mt,gt)},p(ut,st){st&1&&ie(x,ut[0]),st&2&&ie(A,ut[1]),st&8&&ie(It,ut[3]),st&16&&ie(nt,ut[4]),st&32&&ie(At,ut[5])},d(ut){ut&&s(t)}}}function Hn(i){let t;function e(r,o){return r[2]?xn:yn}let n=e(i),l=n(i);return{c(){l.c(),t=$t()},l(r){l.l(r),t=$t()},m(r,o){l.m(r,o),u(r,t,o)},p(r,[o]){n===(n=e(r))&&l?l.p(r,o):(l.d(1),l=n(r),l&&(l.c(),l.m(t.parentNode,t)))},i:V,o:V,d(r){r&&s(t),l.d(r)}}}function Mn(i,t,e){let{contract:n}=t,{publicWalletAddressOfVisitor:l}=t,{provider:r}=t,o,h=!1,c,f,_;$e(async()=>{x(),setInterval(()=>{x()},9*1e3)});async function x(){await n.balanceOf(ot);const L=await n.balanceOf(l);e(1,o=Tn(L));const d=await n.getBuyPrice(ln("1","ether"));e(3,c=Ee(d.toString(),"ether"));try{e(4,f=Ee((await n.getSellPrice()).toString(),"ether"))}catch(m){console.log(m.message)}e(5,_=Ee((await r.getBalance(ot)).toString(),"ether")),e(2,h=!0)}return i.$$set=L=>{"contract"in L&&e(6,n=L.contract),"publicWalletAddressOfVisitor"in L&&e(0,l=L.publicWalletAddressOfVisitor),"provider"in L&&e(7,r=L.provider)},[l,o,h,c,f,_,n,r]}class Ln extends oe{constructor(t){super(),ue(this,t,Mn,Hn,se,{contract:6,publicWalletAddressOfVisitor:0,provider:7})}}function En(i){let t,e="<br/>",n,l,r="Freedom Cash",o,h,c="here on zkevm.polygonscan.com",f,_,x="<br/>",L,d,m,k,g="<br/>",E,A,q="O.K.",D,R,K="<br/>",Y,U;return{c(){t=p("p"),t.innerHTML=e,n=F(`
You can observe your interactions with the
`),l=p("a"),l.textContent=r,o=F(` Smart
Contract
`),h=p("a"),h.textContent=c,f=F(`.
`),_=p("p"),_.innerHTML=x,L=H(),d=F(i[0]),m=H(),k=p("p"),k.innerHTML=g,E=H(),A=p("button"),A.textContent=q,D=H(),R=p("p"),R.innerHTML=K,this.h()},l(y){t=v(y,"P",{"data-svelte-h":!0}),C(t)!=="svelte-pntvnr"&&(t.innerHTML=e),n=P(y,`
You can observe your interactions with the
`),l=v(y,"A",{href:!0,target:!0,"data-svelte-h":!0}),C(l)!=="svelte-d8j4di"&&(l.textContent=r),o=P(y,` Smart
Contract
`),h=v(y,"A",{href:!0,target:!0,"data-svelte-h":!0}),C(h)!=="svelte-1cl676x"&&(h.textContent=c),f=P(y,`.
`),_=v(y,"P",{"data-svelte-h":!0}),C(_)!=="svelte-pntvnr"&&(_.innerHTML=x),L=M(y),d=P(y,i[0]),m=M(y),k=v(y,"P",{"data-svelte-h":!0}),C(k)!=="svelte-pntvnr"&&(k.innerHTML=g),E=M(y),A=v(y,"BUTTON",{class:!0,"data-svelte-h":!0}),C(A)!=="svelte-b2hd0d"&&(A.textContent=q),D=M(y),R=v(y,"P",{"data-svelte-h":!0}),C(R)!=="svelte-pntvnr"&&(R.innerHTML=K),this.h()},h(){b(l,"href",Bt+"token/"+ot+"#code"),b(l,"target","_blank"),b(h,"href",Bt+"token/"+ot),b(h,"target","_blank"),b(A,"class","button inside")},m(y,S){u(y,t,S),u(y,n,S),u(y,l,S),u(y,o,S),u(y,h,S),u(y,f,S),u(y,_,S),u(y,L,S),u(y,d,S),u(y,m,S),u(y,k,S),u(y,E,S),u(y,A,S),u(y,D,S),u(y,R,S),Y||(U=ae(A,"click",i[2]),Y=!0)},p(y,[S]){S&1&&ie(d,y[0])},i:V,o:V,d(y){y&&(s(t),s(n),s(l),s(o),s(h),s(f),s(_),s(L),s(d),s(m),s(k),s(E),s(A),s(D),s(R)),Y=!1,U()}}}function In(i,t,e){let{message:n=""}=t;const l=un(),r=()=>l("clickedOK");return i.$$set=o=>{"message"in o&&e(0,n=o.message)},[n,l,r]}class sn extends oe{constructor(t){super(),ue(this,t,In,En,se,{message:0})}}function Fn(i){let t,e;return t=new sn({}),t.$on("clickedOK",i[6]),{c(){Ht(t.$$.fragment)},l(n){Mt(t.$$.fragment,n)},m(n,l){Lt(t,n,l),e=!0},p:V,i(n){e||(J(t.$$.fragment,n),e=!0)},o(n){Q(t.$$.fragment,n),e=!1},d(n){Et(t,n)}}}function Pn(i){let t,e,n="<br/>",l,r,o,h,c="<br/>",f,_,x,L,d=i[0]>0&&tn(i);return{c(){t=F(`How much would you like to sell?
		`),e=p("p"),e.innerHTML=n,l=H(),r=p("input"),o=H(),h=p("p"),h.innerHTML=c,f=H(),d&&d.c(),_=$t(),this.h()},l(m){t=P(m,`How much would you like to sell?
		`),e=v(m,"P",{"data-svelte-h":!0}),C(e)!=="svelte-pntvnr"&&(e.innerHTML=n),l=M(m),r=v(m,"INPUT",{class:!0,type:!0,placeholder:!0}),o=M(m),h=v(m,"P",{"data-svelte-h":!0}),C(h)!=="svelte-pntvnr"&&(h.innerHTML=c),f=M(m),d&&d.l(m),_=$t(),this.h()},h(){b(r,"class","myInputField"),b(r,"type","number"),b(r,"placeholder","your investment e.g. 0.000000009 ETH")},m(m,k){u(m,t,k),u(m,e,k),u(m,l,k),u(m,r,k),Ie(r,i[0]),u(m,o,k),u(m,h,k),u(m,f,k),d&&d.m(m,k),u(m,_,k),x||(L=ae(r,"input",i[4]),x=!0)},p(m,k){k&1&&Ae(r.value)!==m[0]&&Ie(r,m[0]),m[0]>0?d?d.p(m,k):(d=tn(m),d.c(),d.m(_.parentNode,_)):d&&(d.d(1),d=null)},i:V,o:V,d(m){m&&(s(t),s(e),s(l),s(r),s(o),s(h),s(f),s(_)),d&&d.d(m),x=!1,L()}}}function tn(i){let t,e="Sell Freedom Cash",n,l;return{c(){t=p("button"),t.textContent=e,this.h()},l(r){t=v(r,"BUTTON",{class:!0,"data-svelte-h":!0}),C(t)!=="svelte-fkle52"&&(t.textContent=e),this.h()},h(){b(t,"class","inside")},m(r,o){u(r,t,o),n||(l=ae(t,"click",i[5]),n=!0)},p:V,d(r){r&&s(t),n=!1,l()}}}function Bn(i){let t,e,n,l;const r=[Pn,Fn],o=[];function h(c,f){return c[1]?0:1}return e=h(i),n=o[e]=r[e](i),{c(){t=p("section"),n.c(),this.h()},l(c){t=v(c,"SECTION",{class:!0});var f=Z(t);n.l(f),f.forEach(s),this.h()},h(){b(t,"class","text-center")},m(c,f){u(c,t,f),o[e].m(t,null),l=!0},p(c,[f]){let _=e;e=h(c),e===_?o[e].p(c,f):(Fe(),Q(o[_],1,1,()=>{o[_]=null}),Pe(),n=o[e],n?n.p(c,f):(n=o[e]=r[e](c),n.c()),J(n,1),n.m(t,null))},i(c){l||(J(n),l=!0)},o(c){Q(n),l=!1},d(c){c&&s(t),o[e].d()}}}function $n(i,t,e){let{contract:n}=t,l=1,r=0,o=!0;$e(async()=>{r=await n.getSellPrice()});async function h(){try{r=await n.getSellPrice();const x=rn(l.toString());let L=await n.sellFreedomCash(x,r.toString());e(1,o=!1),console.log(`result: ${L}`)}catch(x){alert(x.message)}}function c(){l=Ae(this.value),e(0,l)}const f=()=>h(),_=()=>{e(1,o=!0)};return i.$$set=x=>{"contract"in x&&e(3,n=x.contract)},[l,o,h,n,c,f,_]}class An extends oe{constructor(t){super(),ue(this,t,$n,Bn,se,{contract:3})}}function Sn(i){let t,e;return t=new sn({}),t.$on("clickedOK",i[9]),{c(){Ht(t.$$.fragment)},l(n){Mt(t.$$.fragment,n)},m(n,l){Lt(t,n,l),e=!0},p:V,i(n){e||(J(t.$$.fragment,n),e=!0)},o(n){Q(t.$$.fragment,n),e=!1},d(n){Et(t,n)}}}function Un(i){let t;function e(r,o){return r[2]>0?qn:Nn}let n=e(i),l=n(i);return{c(){l.c(),t=$t()},l(r){l.l(r),t=$t()},m(r,o){l.m(r,o),u(r,t,o)},p(r,o){n===(n=e(r))&&l?l.p(r,o):(l.d(1),l=n(r),l&&(l.c(),l.m(t.parentNode,t)))},i:V,o:V,d(r){r&&s(t),l.d(r)}}}function Nn(i){let t,e,n="Freedom Cash",l,r,o="<br/>",h,c,f="portal.polygon.technology/bridge",_,x,L="<br/>";return{c(){t=F(`In order to invest into
		`),e=p("a"),e.textContent=n,l=F(`
		, you need to have some Ether on the Polygon zkEVM Blockchain.
		`),r=p("p"),r.innerHTML=o,h=F(`
		You can transfer some Ether from the Ethereum Mainnet to the Polygon zkEVM Blockchain via
		`),c=p("a"),c.textContent=f,_=F(`.
		`),x=p("p"),x.innerHTML=L,this.h()},l(d){t=P(d,`In order to invest into
		`),e=v(d,"A",{href:!0,target:!0,"data-svelte-h":!0}),C(e)!=="svelte-1f2yvrv"&&(e.textContent=n),l=P(d,`
		, you need to have some Ether on the Polygon zkEVM Blockchain.
		`),r=v(d,"P",{"data-svelte-h":!0}),C(r)!=="svelte-pntvnr"&&(r.innerHTML=o),h=P(d,`
		You can transfer some Ether from the Ethereum Mainnet to the Polygon zkEVM Blockchain via
		`),c=v(d,"A",{href:!0,target:!0,"data-svelte-h":!0}),C(c)!=="svelte-1spk867"&&(c.textContent=f),_=P(d,`.
		`),x=v(d,"P",{"data-svelte-h":!0}),C(x)!=="svelte-pntvnr"&&(x.innerHTML=L),this.h()},h(){b(e,"href",Bt+"token/"+ot+"#code#L891"),b(e,"target","_blank"),b(c,"href","https://portal.polygon.technology/bridge"),b(c,"target","_blank")},m(d,m){u(d,t,m),u(d,e,m),u(d,l,m),u(d,r,m),u(d,h,m),u(d,c,m),u(d,_,m),u(d,x,m)},p:V,d(d){d&&(s(t),s(e),s(l),s(r),s(h),s(c),s(_),s(x))}}}function qn(i){let t,e,n="<br/>",l,r,o,h,c="<br/>",f,_,x,L,d=i[0]>0&&en(i);return{c(){t=F(`How much Freedom Cash do you want to buy?
		`),e=p("p"),e.innerHTML=n,l=H(),r=p("input"),o=H(),h=p("p"),h.innerHTML=c,f=H(),d&&d.c(),_=$t(),this.h()},l(m){t=P(m,`How much Freedom Cash do you want to buy?
		`),e=v(m,"P",{"data-svelte-h":!0}),C(e)!=="svelte-pntvnr"&&(e.innerHTML=n),l=M(m),r=v(m,"INPUT",{class:!0,type:!0,placeholder:!0,min:!0,max:!0,step:!0}),o=M(m),h=v(m,"P",{"data-svelte-h":!0}),C(h)!=="svelte-pntvnr"&&(h.innerHTML=c),f=M(m),d&&d.l(m),_=$t(),this.h()},h(){b(r,"class","myInputField"),b(r,"type","number"),b(r,"placeholder","e.g. 369 Freedom Cash"),b(r,"min","0.1"),b(r,"max","999999"),b(r,"step","0.1")},m(m,k){u(m,t,k),u(m,e,k),u(m,l,k),u(m,r,k),Ie(r,i[0]),u(m,o,k),u(m,h,k),u(m,f,k),d&&d.m(m,k),u(m,_,k),x||(L=ae(r,"input",i[7]),x=!0)},p(m,k){k&1&&Ae(r.value)!==m[0]&&Ie(r,m[0]),m[0]>0?d?d.p(m,k):(d=en(m),d.c(),d.m(_.parentNode,_)):d&&(d.d(1),d=null)},d(m){m&&(s(t),s(e),s(l),s(r),s(o),s(h),s(f),s(_)),d&&d.d(m),x=!1,L()}}}function en(i){let t,e="Buy Freedom Cash",n,l;return{c(){t=p("button"),t.textContent=e,this.h()},l(r){t=v(r,"BUTTON",{class:!0,"data-svelte-h":!0}),C(t)!=="svelte-hz4hi8"&&(t.textContent=e),this.h()},h(){b(t,"class","inside")},m(r,o){u(r,t,o),n||(l=ae(t,"click",i[8]),n=!0)},p:V,d(r){r&&s(t),n=!1,l()}}}function Vn(i){let t,e,n,l;const r=[Un,Sn],o=[];function h(c,f){return c[1]?0:1}return t=h(i),e=o[t]=r[t](i),{c(){e.c(),n=$t()},l(c){e.l(c),n=$t()},m(c,f){o[t].m(c,f),u(c,n,f),l=!0},p(c,[f]){let _=t;t=h(c),t===_?o[t].p(c,f):(Fe(),Q(o[_],1,1,()=>{o[_]=null}),Pe(),e=o[t],e?e.p(c,f):(e=o[t]=r[t](c),e.c()),J(e,1),e.m(n.parentNode,n))},i(c){l||(J(e),l=!0)},o(c){Q(e),l=!1},d(c){c&&s(n),o[t].d(c)}}}function zn(i,t,e){let{contract:n}=t,{provider:l}=t,{publicWalletAddressOfVisitor:r}=t,o=1,h=!0,c=0;$e(async()=>{e(2,c=await l.getBalance(r))});async function f(){const d=rn(o.toString()),m=await n.getBuyPrice(d),k=BigInt(o)*m,g=BigInt(await l.getBalance(r));try{const A=await n.buyFreedomCash.estimateGas(d,m,{value:BigInt(k)})*(await l.getFeeData()).gasPrice;if(g<k+BigInt(A))alert("you might enter a smaller amount");else try{let q=await n.buyFreedomCash(d,m,{value:BigInt(k)});e(1,h=!1),console.log(q)}catch{alert("you might enter a smaller amount")}}catch(E){alert(E)}}function _(){o=Ae(this.value),e(0,o)}const x=()=>f(),L=()=>{e(1,h=!0)};return i.$$set=d=>{"contract"in d&&e(4,n=d.contract),"provider"in d&&e(5,l=d.provider),"publicWalletAddressOfVisitor"in d&&e(6,r=d.publicWalletAddressOfVisitor)},[o,h,c,f,n,l,r,_,x,L]}class On extends oe{constructor(t){super(),ue(this,t,zn,Vn,se,{contract:4,provider:5,publicWalletAddressOfVisitor:6})}}function Dn(i){let t,e="Total Supply",n,l,r="Freedom Cash",o,h,c="Utility",f,_,x="<br/>",L,d,m="Freedom Enterprise",k,g,E="<br/>",A,q,D="Liquidity",R,K,Y="smart contract",U,y,S,j,It="Questions & Answers",dt,z,O="<br/>",X,ft,tt="Why don&#39;t you create liquidity as an ETH/FreedomCash Tradingpair on Uniswap? <br/>",et,nt,lt="<br/>",vt,$,B="Freedom Cash",_t,rt,Ft="<br/>",At,bt,ce="<br/><br/>",ht,it,me="What happens if anyone creates a liquidity pool for Freedom Cash on Uniswap?",Ot,Ct,mt,gt,ut="<br/><br/>",st,G,jt="How is it possible that the sell price never drops? <br/>",Gt,pt,Kt="<br/>",St,wt,Ut,kt,Yt="<br/>",Dt,ct,pe='<div class="center"><img class="tokenomicsImage" src="/price-functions.png" alt=""/></div>',Zt,Qt,je="<br/><br/>",we,Jt,Ge="This seems too good to be true. What&#39;s the catch? <br/>",ke,Xt,Ke="<br/>",Te,te,ye,ee,Ye="<br/>",xe,Nt,Ze="here",He,ne,Qe="<br/>",Me;return y=new Ne({}),wt=new Ne({}),te=new Ne({}),{c(){t=p("h4"),t.textContent=e,n=F(`
369.369.369
`),l=p("a"),l.textContent=r,o=H(),h=p("h4"),h.textContent=c,f=F(`
Funding playgrounds for freedom.
`),_=p("p"),_.innerHTML=x,L=F(`
Freedom Cash is the currency for the
`),d=p("a"),d.textContent=m,k=F(`.
`),g=p("p"),g.innerHTML=E,A=F(`

Freedom Cash provides a buy and sell function within the smart contract itself, defining a reasonable
pricing algorithm and ensuring that people do not waste gas-, liquidity provider- and exchange fees.

`),q=p("h4"),q.textContent=D,R=F(`
The total supply of Freedom Cash was minted not to the developer or deployer but to the
`),K=p("a"),K.textContent=Y,U=F(`
itself.

`),Ht(y.$$.fragment),S=H(),j=p("h4"),j.textContent=It,dt=H(),z=p("p"),z.innerHTML=O,X=H(),ft=p("h6"),ft.innerHTML=tt,et=H(),nt=p("p"),nt.innerHTML=lt,vt=F(`
With our approach we reduce gas fees and avoid pool fees for
`),$=p("a"),$.textContent=B,_t=F(`
investors.
`),rt=p("p"),rt.innerHTML=Ft,At=F(`
Additionally our pricing approach protects against ponzi like vulnerabilities & drops of the sell price.
`),bt=p("p"),bt.innerHTML=ce,ht=H(),it=p("h6"),it.textContent=me,Ot=H(),Ct=p("br"),mt=F(` People are free to create liquidity pools e.g. with ETH/FreedomCash liquidity on Uniswap.
It's just not necessary and not useful.
`),gt=p("p"),gt.innerHTML=ut,st=H(),G=p("h6"),G.innerHTML=jt,Gt=H(),pt=p("p"),pt.innerHTML=Kt,St=F(`
The sell price of Freedom Cash expressed in Ether can stay as it is or go up. It can never drop.
`),Ht(wt.$$.fragment),Ut=H(),kt=p("p"),kt.innerHTML=Yt,Dt=H(),ct=p("a"),ct.innerHTML=pe,Zt=H(),Qt=p("p"),Qt.innerHTML=je,we=H(),Jt=p("h6"),Jt.innerHTML=Ge,ke=H(),Xt=p("p"),Xt.innerHTML=Ke,Te=F(`
It might take a while until people realize that the sell price is at all times the minimum sell price
which will never go below the current value expressed in Ether - even in a "bankrun" like situation.
`),Ht(te.$$.fragment),ye=H(),ee=p("p"),ee.innerHTML=Ye,xe=F(`
If you find any serious catch, please raise an issue
`),Nt=p("a"),Nt.textContent=Ze,He=F(`.
`),ne=p("p"),ne.innerHTML=Qe,this.h()},l(a){t=v(a,"H4",{class:!0,"data-svelte-h":!0}),C(t)!=="svelte-10nzcsz"&&(t.textContent=e),n=P(a,`
369.369.369
`),l=v(a,"A",{href:!0,target:!0,"data-svelte-h":!0}),C(l)!=="svelte-1f2yvrv"&&(l.textContent=r),o=M(a),h=v(a,"H4",{class:!0,"data-svelte-h":!0}),C(h)!=="svelte-3o3qda"&&(h.textContent=c),f=P(a,`
Funding playgrounds for freedom.
`),_=v(a,"P",{"data-svelte-h":!0}),C(_)!=="svelte-pntvnr"&&(_.innerHTML=x),L=P(a,`
Freedom Cash is the currency for the
`),d=v(a,"A",{href:!0,target:!0,"data-svelte-h":!0}),C(d)!=="svelte-v1gy1w"&&(d.textContent=m),k=P(a,`.
`),g=v(a,"P",{"data-svelte-h":!0}),C(g)!=="svelte-pntvnr"&&(g.innerHTML=E),A=P(a,`

Freedom Cash provides a buy and sell function within the smart contract itself, defining a reasonable
pricing algorithm and ensuring that people do not waste gas-, liquidity provider- and exchange fees.

`),q=v(a,"H4",{class:!0,"data-svelte-h":!0}),C(q)!=="svelte-1ecgay2"&&(q.textContent=D),R=P(a,`
The total supply of Freedom Cash was minted not to the developer or deployer but to the
`),K=v(a,"A",{href:!0,target:!0,"data-svelte-h":!0}),C(K)!=="svelte-13569o3"&&(K.textContent=Y),U=P(a,`
itself.

`),Mt(y.$$.fragment,a),S=M(a),j=v(a,"H4",{"data-svelte-h":!0}),C(j)!=="svelte-f4bw6e"&&(j.textContent=It),dt=M(a),z=v(a,"P",{"data-svelte-h":!0}),C(z)!=="svelte-pntvnr"&&(z.innerHTML=O),X=M(a),ft=v(a,"H6",{"data-svelte-h":!0}),C(ft)!=="svelte-1glocal"&&(ft.innerHTML=tt),et=M(a),nt=v(a,"P",{"data-svelte-h":!0}),C(nt)!=="svelte-pntvnr"&&(nt.innerHTML=lt),vt=P(a,`
With our approach we reduce gas fees and avoid pool fees for
`),$=v(a,"A",{href:!0,target:!0,"data-svelte-h":!0}),C($)!=="svelte-1f2yvrv"&&($.textContent=B),_t=P(a,`
investors.
`),rt=v(a,"P",{"data-svelte-h":!0}),C(rt)!=="svelte-pntvnr"&&(rt.innerHTML=Ft),At=P(a,`
Additionally our pricing approach protects against ponzi like vulnerabilities & drops of the sell price.
`),bt=v(a,"P",{"data-svelte-h":!0}),C(bt)!=="svelte-5q9igk"&&(bt.innerHTML=ce),ht=M(a),it=v(a,"H6",{"data-svelte-h":!0}),C(it)!=="svelte-17jd9g7"&&(it.textContent=me),Ot=M(a),Ct=v(a,"BR",{}),mt=P(a,` People are free to create liquidity pools e.g. with ETH/FreedomCash liquidity on Uniswap.
It's just not necessary and not useful.
`),gt=v(a,"P",{"data-svelte-h":!0}),C(gt)!=="svelte-5q9igk"&&(gt.innerHTML=ut),st=M(a),G=v(a,"H6",{"data-svelte-h":!0}),C(G)!=="svelte-qkuzda"&&(G.innerHTML=jt),Gt=M(a),pt=v(a,"P",{"data-svelte-h":!0}),C(pt)!=="svelte-pntvnr"&&(pt.innerHTML=Kt),St=P(a,`
The sell price of Freedom Cash expressed in Ether can stay as it is or go up. It can never drop.
`),Mt(wt.$$.fragment,a),Ut=M(a),kt=v(a,"P",{"data-svelte-h":!0}),C(kt)!=="svelte-pntvnr"&&(kt.innerHTML=Yt),Dt=M(a),ct=v(a,"A",{href:!0,target:!0,"data-svelte-h":!0}),C(ct)!=="svelte-1usnwy3"&&(ct.innerHTML=pe),Zt=M(a),Qt=v(a,"P",{"data-svelte-h":!0}),C(Qt)!=="svelte-5q9igk"&&(Qt.innerHTML=je),we=M(a),Jt=v(a,"H6",{"data-svelte-h":!0}),C(Jt)!=="svelte-1kcbugp"&&(Jt.innerHTML=Ge),ke=M(a),Xt=v(a,"P",{"data-svelte-h":!0}),C(Xt)!=="svelte-pntvnr"&&(Xt.innerHTML=Ke),Te=P(a,`
It might take a while until people realize that the sell price is at all times the minimum sell price
which will never go below the current value expressed in Ether - even in a "bankrun" like situation.
`),Mt(te.$$.fragment,a),ye=M(a),ee=v(a,"P",{"data-svelte-h":!0}),C(ee)!=="svelte-pntvnr"&&(ee.innerHTML=Ye),xe=P(a,`
If you find any serious catch, please raise an issue
`),Nt=v(a,"A",{href:!0,target:!0,"data-svelte-h":!0}),C(Nt)!=="svelte-1cn4rod"&&(Nt.textContent=Ze),He=P(a,`.
`),ne=v(a,"P",{"data-svelte-h":!0}),C(ne)!=="svelte-pntvnr"&&(ne.innerHTML=Qe),this.h()},h(){b(t,"class","text-center"),b(l,"href",Bt+"token/"+ot+"#code#L891"),b(l,"target","_blank"),b(h,"class","text-center"),b(d,"href","https://github.com/monique-baumann/FreedomEnterprise/blob/main/README.md"),b(d,"target","_blank"),b(q,"class","text-center"),b(K,"href",Bt+"token/"+ot+"#code#L891"),b(K,"target","_blank"),b($,"href",Bt+"token/"+ot+"#code#L891"),b($,"target","_blank"),b(ct,"href",Bt+"token/"+ot+"#code#L891"),b(ct,"target","_blank"),b(Nt,"href","https://github.com/monique-baumann/freedom-cash/issues/new"),b(Nt,"target","_blank")},m(a,T){u(a,t,T),u(a,n,T),u(a,l,T),u(a,o,T),u(a,h,T),u(a,f,T),u(a,_,T),u(a,L,T),u(a,d,T),u(a,k,T),u(a,g,T),u(a,A,T),u(a,q,T),u(a,R,T),u(a,K,T),u(a,U,T),Lt(y,a,T),u(a,S,T),u(a,j,T),u(a,dt,T),u(a,z,T),u(a,X,T),u(a,ft,T),u(a,et,T),u(a,nt,T),u(a,vt,T),u(a,$,T),u(a,_t,T),u(a,rt,T),u(a,At,T),u(a,bt,T),u(a,ht,T),u(a,it,T),u(a,Ot,T),u(a,Ct,T),u(a,mt,T),u(a,gt,T),u(a,st,T),u(a,G,T),u(a,Gt,T),u(a,pt,T),u(a,St,T),Lt(wt,a,T),u(a,Ut,T),u(a,kt,T),u(a,Dt,T),u(a,ct,T),u(a,Zt,T),u(a,Qt,T),u(a,we,T),u(a,Jt,T),u(a,ke,T),u(a,Xt,T),u(a,Te,T),Lt(te,a,T),u(a,ye,T),u(a,ee,T),u(a,xe,T),u(a,Nt,T),u(a,He,T),u(a,ne,T),Me=!0},p:V,i(a){Me||(J(y.$$.fragment,a),J(wt.$$.fragment,a),J(te.$$.fragment,a),Me=!0)},o(a){Q(y.$$.fragment,a),Q(wt.$$.fragment,a),Q(te.$$.fragment,a),Me=!1},d(a){a&&(s(t),s(n),s(l),s(o),s(h),s(f),s(_),s(L),s(d),s(k),s(g),s(A),s(q),s(R),s(K),s(U),s(S),s(j),s(dt),s(z),s(X),s(ft),s(et),s(nt),s(vt),s($),s(_t),s(rt),s(At),s(bt),s(ht),s(it),s(Ot),s(Ct),s(mt),s(gt),s(st),s(G),s(Gt),s(pt),s(St),s(Ut),s(kt),s(Dt),s(ct),s(Zt),s(Qt),s(we),s(Jt),s(ke),s(Xt),s(Te),s(ye),s(ee),s(xe),s(Nt),s(He),s(ne)),Et(y,a),Et(wt,a),Et(te,a)}}}class Wn extends oe{constructor(t){super(),ue(this,t,null,Dn,se,{})}}function Rn(i){let t,e="State of the Game",n,l,r,o,h="<br/><br/><br/>",c,f,_,x,L="<br/><br/>",d,m,k;return l=new Ln({props:{publicWalletAddressOfVisitor:i[0],contract:i[2],provider:i[4]}}),f=new On({props:{contract:i[2],publicWalletAddressOfVisitor:i[0],provider:i[4]}}),m=new An({props:{contract:i[2]}}),{c(){t=p("h4"),t.textContent=e,n=H(),Ht(l.$$.fragment),r=H(),o=p("p"),o.innerHTML=h,c=H(),Ht(f.$$.fragment),_=H(),x=p("p"),x.innerHTML=L,d=H(),Ht(m.$$.fragment),this.h()},l(g){t=v(g,"H4",{class:!0,"data-svelte-h":!0}),C(t)!=="svelte-1xt9bzt"&&(t.textContent=e),n=M(g),Mt(l.$$.fragment,g),r=M(g),o=v(g,"P",{"data-svelte-h":!0}),C(o)!=="svelte-102w9s7"&&(o.innerHTML=h),c=M(g),Mt(f.$$.fragment,g),_=M(g),x=v(g,"P",{"data-svelte-h":!0}),C(x)!=="svelte-5q9igk"&&(x.innerHTML=L),d=M(g),Mt(m.$$.fragment,g),this.h()},h(){b(t,"class","text-center")},m(g,E){u(g,t,E),u(g,n,E),Lt(l,g,E),u(g,r,E),u(g,o,E),u(g,c,E),Lt(f,g,E),u(g,_,E),u(g,x,E),u(g,d,E),Lt(m,g,E),k=!0},p(g,E){const A={};E&1&&(A.publicWalletAddressOfVisitor=g[0]),E&4&&(A.contract=g[2]),E&16&&(A.provider=g[4]),l.$set(A);const q={};E&4&&(q.contract=g[2]),E&1&&(q.publicWalletAddressOfVisitor=g[0]),E&16&&(q.provider=g[4]),f.$set(q);const D={};E&4&&(D.contract=g[2]),m.$set(D)},i(g){k||(J(l.$$.fragment,g),J(f.$$.fragment,g),J(m.$$.fragment,g),k=!0)},o(g){Q(l.$$.fragment,g),Q(f.$$.fragment,g),Q(m.$$.fragment,g),k=!1},d(g){g&&(s(t),s(n),s(r),s(o),s(c),s(_),s(x),s(d)),Et(l,g),Et(f,g),Et(m,g)}}}function jn(i){let t,e="<br/>",n,l,r,o,h;return{c(){t=p("p"),t.innerHTML=e,n=H(),l=p("button"),r=F(i[5]),this.h()},l(c){t=v(c,"P",{"data-svelte-h":!0}),C(t)!=="svelte-pntvnr"&&(t.innerHTML=e),n=M(c),l=v(c,"BUTTON",{class:!0});var f=Z(l);r=P(f,i[5]),f.forEach(s),this.h()},h(){b(l,"class","button")},m(c,f){u(c,t,f),u(c,n,f),u(c,l,f),w(l,r),o||(h=ae(l,"click",i[7]),o=!0)},p(c,f){f&32&&ie(r,c[5])},i:V,o:V,d(c){c&&(s(t),s(n),s(l)),o=!1,h()}}}function Gn(i){let t,e,n="metamask.io",l,r,o="brave.com",h;return{c(){t=F(`Please install a browserwallet which you trust like
		`),e=p("a"),e.textContent=n,l=F(`
		or use the integrated browserwallet in the
		`),r=p("a"),r.textContent=o,h=F(" browser and come again."),this.h()},l(c){t=P(c,`Please install a browserwallet which you trust like
		`),e=v(c,"A",{href:!0,target:!0,"data-svelte-h":!0}),C(e)!=="svelte-ckwul2"&&(e.textContent=n),l=P(c,`
		or use the integrated browserwallet in the
		`),r=v(c,"A",{href:!0,target:!0,"data-svelte-h":!0}),C(r)!=="svelte-12y5jy6"&&(r.textContent=o),h=P(c," browser and come again."),this.h()},h(){b(e,"href","https://metamask.io"),b(e,"target","_blank"),b(r,"href","https://brave.com"),b(r,"target","_blank")},m(c,f){u(c,t,f),u(c,e,f),u(c,l,f),u(c,r,f),u(c,h,f)},p:V,i:V,o:V,d(c){c&&(s(t),s(e),s(l),s(r),s(h))}}}function Kn(i){let t,e;return t=new Wn({}),{c(){Ht(t.$$.fragment)},l(n){Mt(t.$$.fragment,n)},m(n,l){Lt(t,n,l),e=!0},p:V,i(n){e||(J(t.$$.fragment,n),e=!0)},o(n){Q(t.$$.fragment,n),e=!1},d(n){Et(t,n)}}}function Yn(i){let t,e="Show Details",n,l;return{c(){t=p("button"),t.textContent=e,this.h()},l(r){t=v(r,"BUTTON",{class:!0,"data-svelte-h":!0}),C(t)!=="svelte-am6a1"&&(t.textContent=e),this.h()},h(){b(t,"class","button")},m(r,o){u(r,t,o),n||(l=ae(t,"click",i[8]),n=!0)},p:V,i:V,o:V,d(r){r&&s(t),n=!1,l()}}}function Zn(i){let t,e,n,l="<br/>",r,o,h="<br/><br/>",c,f,_='<img class="moniqueImage svelte-ofeuli" src="/monique-baumann.jpeg" alt=""/>',x,L,d="<br/>",m,k,g="Freedom Cash",E,A,q="<i>Monique Baumann</i>",D,R,K="<br/><br/>",Y,U,y,S,j,It="<br/><br/>",dt,z,O,X;const ft=[Gn,jn,Rn],tt=[];function et($,B){return $[1]?$[0]==""?1:2:0}U=et(i),y=tt[U]=ft[U](i);const nt=[Yn,Kn],lt=[];function vt($,B){return $[3]?1:0}return z=vt(i),O=lt[z]=nt[z](i),{c(){t=p("section"),e=F(`Freedom Cash makes crypto cypherpunk again, while being simple enough for everyone who cares.
	`),n=p("p"),n.innerHTML=l,r=H(),o=p("p"),o.innerHTML=h,c=H(),f=p("div"),f.innerHTML=_,x=H(),L=p("p"),L.innerHTML=d,m=F(`

	I buy and sell
	`),k=p("a"),k.textContent=g,E=F(`,
	silver and gold.
	`),A=p("a"),A.innerHTML=q,D=H(),R=p("p"),R.innerHTML=K,Y=H(),y.c(),S=H(),j=p("p"),j.innerHTML=It,dt=H(),O.c(),this.h()},l($){t=v($,"SECTION",{class:!0});var B=Z(t);e=P(B,`Freedom Cash makes crypto cypherpunk again, while being simple enough for everyone who cares.
	`),n=v(B,"P",{"data-svelte-h":!0}),C(n)!=="svelte-pntvnr"&&(n.innerHTML=l),r=M(B),o=v(B,"P",{"data-svelte-h":!0}),C(o)!=="svelte-5q9igk"&&(o.innerHTML=h),c=M(B),f=v(B,"DIV",{class:!0,"data-svelte-h":!0}),C(f)!=="svelte-4eez5y"&&(f.innerHTML=_),x=M(B),L=v(B,"P",{"data-svelte-h":!0}),C(L)!=="svelte-pntvnr"&&(L.innerHTML=d),m=P(B,`

	I buy and sell
	`),k=v(B,"A",{href:!0,target:!0,"data-svelte-h":!0}),C(k)!=="svelte-1f2yvrv"&&(k.textContent=g),E=P(B,`,
	silver and gold.
	`),A=v(B,"A",{href:!0,target:!0,"data-svelte-h":!0}),C(A)!=="svelte-1yjiq05"&&(A.innerHTML=q),D=M(B),R=v(B,"P",{"data-svelte-h":!0}),C(R)!=="svelte-xsz3ql"&&(R.innerHTML=K),Y=M(B),y.l(B),S=M(B),j=v(B,"P",{"data-svelte-h":!0}),C(j)!=="svelte-xsz3ql"&&(j.innerHTML=It),dt=M(B),O.l(B),B.forEach(s),this.h()},h(){b(f,"class","center"),b(k,"href",Bt+"token/"+ot+"#code#L891"),b(k,"target","_blank"),b(A,"href","https://github.com/monique-baumann"),b(A,"target","_blank"),b(t,"class","text-center")},m($,B){u($,t,B),w(t,e),w(t,n),w(t,r),w(t,o),w(t,c),w(t,f),w(t,x),w(t,L),w(t,m),w(t,k),w(t,E),w(t,A),w(t,D),w(t,R),w(t,Y),tt[U].m(t,null),w(t,S),w(t,j),w(t,dt),lt[z].m(t,null),X=!0},p($,[B]){let _t=U;U=et($),U===_t?tt[U].p($,B):(Fe(),Q(tt[_t],1,1,()=>{tt[_t]=null}),Pe(),y=tt[U],y?y.p($,B):(y=tt[U]=ft[U]($),y.c()),J(y,1),y.m(t,S));let rt=z;z=vt($),z===rt?lt[z].p($,B):(Fe(),Q(lt[rt],1,1,()=>{lt[rt]=null}),Pe(),O=lt[z],O?O.p($,B):(O=lt[z]=nt[z]($),O.c()),J(O,1),O.m(t,null))},i($){X||(J(y),J(O),X=!0)},o($){Q(y),Q(O),X=!1},d($){$&&s(t),tt[U].d(),lt[z].d()}}}function Qn(i){alert("the chain has been changed via Metamask. So I reload."),window.location.reload()}function Jn(i,t,e){let n="",l=!1,r=!1,o="",h,c,f,_,x=`Connect To ${cn}`;$e(()=>{typeof window.ethereum>"u"?e(1,r=!1):e(1,r=!0)});async function L(){if(r){try{if(o=await window.ethereum.request({method:"eth_chainId"}),o!==Je)try{await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:Je}]})}catch{await window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x44d",chainName:"Polygon zkEVM",rpcUrls:["https://zkevm-rpc.com"],nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},blockExplorerUrls:["https://zkevm.polygonscan.com"]}]})}else e(5,x="Invest Into Freedom Cash");c=await window.ethereum.request({method:"eth_requestAccounts"}),e(4,_=new _n(window.ethereum));const k=await _.getSigner();e(2,h=new bn(ot,fn,k)),e(0,n=c[0]),window.ethereum.on("chainChanged",Qn),l=!0}catch(k){alert(k.message)}l=!0}window.ethereum.on("accountsChanged",function(k){alert("the account has been changed via Metamask. So I reload."),window.location.reload()})}return[n,r,h,f,_,x,L,()=>{L()},()=>e(3,f=!f)]}class Xn extends oe{constructor(t){super(),ue(this,t,Jn,Zn,se,{})}}function tl(i){let t,e,n,l,r="Freedom Cash",o,h,c;return t=new Cn({props:{title:"Home",description:"Freedom Cash is the currency for the Freedom Enterprise."}}),h=new Xn({}),{c(){Ht(t.$$.fragment),e=H(),n=p("main"),l=p("h2"),l.textContent=r,o=H(),Ht(h.$$.fragment),this.h()},l(f){Mt(t.$$.fragment,f),e=M(f),n=v(f,"MAIN",{});var _=Z(n);l=v(_,"H2",{class:!0,"data-svelte-h":!0}),C(l)!=="svelte-1g3s3uj"&&(l.textContent=r),o=M(_),Mt(h.$$.fragment,_),_.forEach(s),this.h()},h(){b(l,"class","text-center")},m(f,_){Lt(t,f,_),u(f,e,_),u(f,n,_),w(n,l),w(n,o),Lt(h,n,null),c=!0},p:V,i(f){c||(J(t.$$.fragment,f),J(h.$$.fragment,f),c=!0)},o(f){Q(t.$$.fragment,f),Q(h.$$.fragment,f),c=!1},d(f){f&&(s(e),s(n)),Et(t,f),Et(h)}}}class ol extends oe{constructor(t){super(),ue(this,t,null,tl,se,{})}}export{ol as component};
