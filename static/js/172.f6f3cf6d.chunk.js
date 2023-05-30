"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[172],{172:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r,a,o,i,c,s,u,d,p,l,x,f,h,v=t(5861),g=t(9439),m=t(7757),b=t.n(m),Z=t(2791),j=t(7689),w=t(1087),k=t(8185),y=t(4390),_=t(168),P=t(6444),U=P.ZP.div(r||(r=(0,_.Z)(["\n  display: flex;\n  gap: 40px;\n  margin-top: 20px;\n"]))),S=P.ZP.img(a||(a=(0,_.Z)(["\n  height: 600px;\n  width: 400px;\n"]))),z=P.ZP.div(o||(o=(0,_.Z)(["\n  padding-top: 20px;\n  max-width: 1100px;\n"]))),T=P.ZP.h2(i||(i=(0,_.Z)(["\n  margin-bottom: 20px;\n"]))),F=P.ZP.p(c||(c=(0,_.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),N=P.ZP.span(s||(s=(0,_.Z)(["\n  display: block;\n  margin-bottom: 20px;\n  font-size: 20px;\n  font-weight: 500;\n"]))),C=P.ZP.div(u||(u=(0,_.Z)(["\n  margin-top: 20px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-top: 1px solid #d3d3d3;\n  border-bottom: 1px solid #d3d3d3;\n"]))),E=P.ZP.h3(d||(d=(0,_.Z)(["\n  font-size: 25px;\n  font-weight: 500;\n"]))),H=P.ZP.ul(p||(p=(0,_.Z)(["\n  margin-top: 20px;\n  display: flex;\n  gap: 20px;\n  font-size: 18px;\n"]))),A=P.ZP.li(l||(l=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),G=(0,P.ZP)(w.rU)(x||(x=(0,_.Z)(["\n  font-size: 16px;\n  margin-right: 5px;\n  padding: 5px 15px;\n  border: 1px solid #0d57aa;\n  border-radius: 6px;\n  background-color: #b5d1f2;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  color: #0d57aa;\n\n  &:hover,\n  &:focus {\n    background-color: #0d57aa;\n    color: #ffffff;\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n  }\n"]))),M=t(8755),O=t(184),q=function(n){var e,t,r,a,o=n.movie,i=o.title,c=o.release_date,s=o.poster_path,u=o.vote_average,d=o.overview,p=o.genres,l=(0,j.TH)(),x=new Date(c),f=isNaN(x)?"Unknown":x.getFullYear(),h=s?"https://image.tmdb.org/t/p/w400/".concat(s):"https://via.placeholder.com/400x600.png?text=Poster+Not+Available",v=u?"".concat((10*u).toFixed(0),"%"):"Not rated yet";return o&&o.title&&o.release_date&&o.poster_path?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(U,{children:[(0,O.jsx)(S,{src:h,alt:"".concat(i," poster")}),(0,O.jsxs)(z,{children:[(0,O.jsxs)(T,{children:[null!==i&&void 0!==i?i:"Unknown"," (",f,")"]}),(0,O.jsxs)(F,{children:["User Score: ",v]}),(0,O.jsxs)(F,{children:[(0,O.jsx)(N,{children:"Overview:"})," ",d]}),p&&p.length>0&&(0,O.jsxs)(F,{children:[(0,O.jsx)(N,{children:"Genres:"}),p.map((function(n){return n.name})).join(", ")]})]})]}),(0,O.jsxs)(C,{children:[(0,O.jsx)(E,{children:"Additional information"}),(0,O.jsxs)(H,{children:[(0,O.jsx)(A,{children:(0,O.jsx)(G,{to:"cast",state:{from:null!==(e=null===l||void 0===l||null===(t=l.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"},children:"Cast"})}),(0,O.jsx)(A,{children:(0,O.jsx)(G,{to:"reviews",state:{from:null!==(r=null===l||void 0===l||null===(a=l.state)||void 0===a?void 0:a.from)&&void 0!==r?r:"/"},children:"Reviews"})})]})]})]}):(0,O.jsx)(M.T,{})},D=P.ZP.div(f||(f=(0,_.Z)(["\n  padding: 20px 40px;\n"]))),I=P.ZP.button(h||(h=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  border: 1px solid #0d57aa;\n  border-radius: 6px;\n  background-color: #b5d1f2;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n\n  &:hover,\n  &:focus {\n    background-color: #0d57aa;\n    color: #ffffff;\n  }\n"]))),R=function(){var n,e,t=(0,j.UO)().movieId,r=(0,j.TH)(),a=(0,Z.useState)({}),o=(0,g.Z)(a,2),i=o[0],c=o[1],s=(0,Z.useState)(!1),u=(0,g.Z)(s,2),d=u[0],p=u[1],l=(0,Z.useState)(null),x=(0,g.Z)(l,2),f=x[0],h=x[1];return(0,Z.useEffect)((function(){var n=function(){var n=(0,v.Z)(b().mark((function n(e){var t;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!0),n.next=4,(0,y.Mc)(e);case 4:t=n.sent,c(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),h(n.t0);case 11:return n.prev=11,p(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(e){return n.apply(this,arguments)}}();n(t)}),[t]),(0,O.jsx)("main",{children:(0,O.jsxs)(D,{children:[d&&(0,O.jsx)(M.T,{}),f&&(0,O.jsxs)("div",{children:["Error: ",f.message]}),!d&&!f&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(w.rU,{to:null!==(n=null===r||void 0===r||null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:(0,O.jsxs)(I,{type:"button",children:[(0,O.jsx)(k.i1r,{style:{width:"25px",height:"25px",display:"inline-block"}}),"Go back"]})}),i&&(0,O.jsx)(q,{movie:i}),(0,O.jsx)(Z.Suspense,{fallback:(0,O.jsx)(M.T,{}),children:(0,O.jsx)(j.j3,{})})]})]})})}},4390:function(n,e,t){t.d(e,{E3:function(){return d},Hx:function(){return x},Mc:function(){return p},_k:function(){return u},uV:function(){return l}});var r=t(5861),a=t(7757),o=t.n(a),i=t(1243),c="https://api.themoviedb.org",s="8dac8a47bc620ef900b4dc8f5ca86b45",u=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/movie/").concat(e,"}/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=172.f6f3cf6d.chunk.js.map