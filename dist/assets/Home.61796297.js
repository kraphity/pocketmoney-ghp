import{u as x}from"./accounts.8755777d.js";import{V as h,a as _,b as v,c as A}from"./VCard.b43ae83d.js";import{V as r,h as w,y,z as g}from"./VSpacer.abf45f70.js";import{d as C,o as s,c as u,w as a,g as t,e as p,t as l,a as V,f as i,am as k,b as B,C as b,F as z}from"./index.54b61c48.js";import{V as F,a as N}from"./VRow.9b3fd24f.js";import"./useAlerts.8f98e397.js";import"./tag.cc08e66e.js";const S={class:"text-h3 font-weight-bold text-surface"},$={class:"text-yellow"},H=C({__name:"AccountCard",props:{account:null},setup(e){const{topUpAccount:c,cashOutAccount:o}=x();return(d,n)=>(s(),u(A,{class:"text-center"},{default:a(()=>[t(h,{size:"64",class:"mt-4",color:"surface-variant"},{default:a(()=>[p("span",S,l(e.account.data.name[0]),1)]),_:1}),t(_,null,{default:a(()=>[V(l(e.account.data.name),1)]),_:1}),t(_,null,{default:a(()=>[p("span",$,l(e.account.data.credit)+" CHF",1)]),_:1}),t(v,null,{default:a(()=>[t(r,{color:"primary",variant:"text",onClick:n[0]||(n[0]=m=>i(o)(e.account.id))},{default:a(()=>[V("auszahlen")]),_:1}),t(w),t(r,{icon:"mdi-cog",variant:"text",color:"surface-variant",active:!1,to:{name:"edit-account",params:{id:e.account.id}}},null,8,["to"]),t(r,{variant:"text",icon:"mdi-cash-plus",color:"surface-variant",onClick:n[1]||(n[1]=m=>i(c)(e.account.id))})]),_:1})]),_:1}))}}),q=C({__name:"Home",async setup(e){let c,o;const{accounts:d,fetchAccounts:n}=x();return[c,o]=k(()=>n()),await c,o(),(m,R)=>(s(),u(y,null,{default:a(()=>[t(g,{class:"d-flex fill-height"},{default:a(()=>[t(F,null,{default:a(()=>[(s(!0),B(z,null,b(i(d),f=>(s(),u(N,{key:f.id,cols:"12",sm:"6",md:"4",xl:"2"},{default:a(()=>[t(H,{account:f},null,8,["account"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}))}});export{q as default};
