import{n as B,d as I,L as z,y as E,N as O,x as $,a as R,$ as a,r as U,o as n,c as r,w as e,f as s,h as t,b as S,J as w,K as C,g as u,t as i,Q as A,B as F}from"./index-Bd7waQnO.js";import{S as H,C as J}from"./index-D8fl3xnZ.js";import{D as K,a as P}from"./index-BjeNQVM5.js";import{T as Q}from"./index-5BxRhnMZ.js";import"./responsiveObserve-Bb_p94FE.js";function j(){const d=B();function m(l){return d.isLogin?typeof l=="string"?d.userInfo.buttons.includes(l):l.some(c=>d.userInfo.buttons.includes(c)):!1}return{hasAuth:m}}const ee=I({name:"function_toggle-auth",__name:"index",setup(d){const m=z(),l=E(),c=B(),D=O(),{hasAuth:_}=j(),{loading:h,startLoading:L,endLoading:N}=$(),v=R(()=>[{key:"super",label:a("page.login.pwdLogin.superAdmin"),userName:"Super",password:"123456"},{key:"admin",label:a("page.login.pwdLogin.admin"),userName:"Admin",password:"123456"},{key:"user",label:a("page.login.pwdLogin.user"),userName:"User",password:"123456"}]),b=U("super");async function T(p){b.value=p.key,L(),await c.login(p.userName,p.password,!1),D.initTabStore(m),N(),l.reloadPage()}return(p,q)=>{const x=Q,g=H,k=K,f=F,V=P,y=J;return n(),r(g,{direction:"vertical",size:16},{default:e(()=>[s(y,{title:t(a)("route.function_toggle-auth"),bordered:!1,size:"small",class:"card-wrapper"},{default:e(()=>[s(V,{layout:"vertical",bordered:"",size:"small",column:1},{default:e(()=>[s(k,{label:t(a)("page.manage.user.userRole")},{default:e(()=>[s(g,null,{default:e(()=>[(n(!0),S(C,null,w(t(c).userInfo.roles,o=>(n(),r(x,{key:o},{default:e(()=>[u(i(o),1)]),_:2},1024))),128))]),_:1})]),_:1},8,["label"]),s(k,{"ions-item":"",label:t(a)("page.function.toggleAuth.toggleAccount")},{default:e(()=>[s(g,null,{default:e(()=>[(n(!0),S(C,null,w(v.value,o=>(n(),r(f,{key:o.key,loading:t(h)&&b.value===o.key,disabled:t(h)&&b.value!==o.key,onClick:G=>T(o)},{default:e(()=>[u(i(o.label),1)]),_:2},1032,["loading","disabled","onClick"]))),128))]),_:1})]),_:1},8,["label"])]),_:1})]),_:1},8,["title"]),s(y,{title:t(a)("page.function.toggleAuth.authHook"),bordered:!1,size:"small",class:"card-wrapper"},{default:e(()=>[s(g,null,{default:e(()=>[t(_)("B_CODE1")?(n(),r(f,{key:0},{default:e(()=>[u(i(t(a)("page.function.toggleAuth.superAdminVisible")),1)]),_:1})):A("",!0),t(_)("B_CODE2")?(n(),r(f,{key:1},{default:e(()=>[u(i(t(a)("page.function.toggleAuth.adminVisible")),1)]),_:1})):A("",!0),t(_)("B_CODE3")?(n(),r(f,{key:2},{default:e(()=>[u(i(t(a)("page.function.toggleAuth.adminOrUserVisible")),1)]),_:1})):A("",!0)]),_:1})]),_:1},8,["title"])]),_:1})}}});export{ee as default};
