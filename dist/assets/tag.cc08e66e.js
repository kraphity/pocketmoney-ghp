import{J as c,r as a,V as u,P as f,W as i,R,p as v}from"./index.54b61c48.js";function p(n){const t=c("useRender");t.render=n}function g(n){const t=a(),r=a();if(u){const s=new ResizeObserver(e=>{n==null||n(e,s),e.length&&(r.value=e[0].contentRect)});f(()=>{s.disconnect()}),i(t,(e,o)=>{o&&(s.unobserve(o),r.value=void 0),e&&s.observe(e)},{flush:"post"})}return{resizeRef:t,contentRect:R(r)}}const m=v({tag:{type:String,default:"div"}},"tag");export{g as a,m,p as u};
