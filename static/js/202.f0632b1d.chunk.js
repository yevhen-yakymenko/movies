"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[202],{4315:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(6444),c=t(407),a=(0,r.ZP)("div")(c.$_,c.Dh,c.bK,c.GQ,c.Oq,c.Cg,c.FK)},6202:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,c,a,i,u=t(885),o=t(2791),s=t(6731),p=t(7689),l=t(4315),d=t(168),f=t(6444),h=t(6036),x=f.ZP.section(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  padding: 64px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.background})),v=(0,f.ZP)(h.wFh)(c||(c=(0,d.Z)([""]))),m=(0,f.ZP)(s.OL)(a||(a=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  width: 160px;\n  padding: 8px 24px 8px 12px;\n  border-radius: 24px;\n  color: ",";\n  background-color: ",";\n\n  :hover {\n    font-weight: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.colors.accent})),g=f.ZP.div(i||(i=(0,d.Z)(["\n  display: flex;\n  margin-top: 32px;\n"]))),Z=t(8565),k=t(184),j=function(){var n,e,t=(0,p.UO)().movieId,r=(0,o.useState)(null),c=(0,u.Z)(r,2),a=c[0],i=c[1],d=(0,p.TH)();if((0,o.useEffect)((function(){try{(0,Z.Pg)(t).then(i)}catch(n){console.log(n)}}),[t]),!a)return null;var f=a.title,h=a.tagline,j=a.genres,w=a.poster_path,b=a.release_date,y=a.overview,P=a.vote_average,_=a.runtime,O=null!==(n=null===(e=d.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",L=j.map((function(n){return n.name})).join(", "),C=Math.round(P/10*100);return(0,k.jsxs)(x,{children:[(0,k.jsxs)(l.Z,{mt:"32px",children:[(0,k.jsxs)(m,{to:O,children:[(0,k.jsx)(v,{size:"24px"})," Go back"]}),(0,k.jsxs)(g,{children:[(0,k.jsx)(l.Z,{width:"320px",children:(0,k.jsx)("img",{src:(0,Z.Pk)(w),alt:f})}),(0,k.jsxs)(l.Z,{width:"900px",children:[(0,k.jsxs)("h2",{children:[f," (",b,")"]}),(0,k.jsx)("p",{children:L}),(0,k.jsxs)("p",{children:[_," min"]}),(0,k.jsxs)("p",{children:["User score: ",C,"%"]}),(0,k.jsx)("h4",{children:h}),(0,k.jsx)("h3",{children:"Overview"}),(0,k.jsx)("p",{children:y}),(0,k.jsxs)("div",{children:[(0,k.jsx)(s.OL,{to:"cast",children:"Cast"}),(0,k.jsx)(s.OL,{to:"reviews",children:"Reviews"})]})]})]})]}),(0,k.jsx)(o.Suspense,{fallback:(0,k.jsx)("div",{children:"Loading..."}),children:(0,k.jsx)(p.j3,{})})]})}},8565:function(n,e,t){t.d(e,{IQ:function(){return p},JZ:function(){return d},Jh:function(){return l},Pg:function(){return s},Pk:function(){return f},XT:function(){return o}});var r=t(5861),c=t(7757),a=t.n(c),i=t(1044),u="f6621a4453f011cfb432a7f58c4cc70b";i.ZP.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,r.Z)(a().mark((function n(e,t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=null,n.t0=e,n.next="day"===n.t0||"week"===n.t0?4:"popular"===n.t0||"top_rated"===n.t0||"upcoming"===n.t0?8:12;break;case 4:return n.next=6,(0,i.ZP)({url:"/trending/movie/".concat(e,"?api_key=").concat(u,"&page=").concat(t)});case 6:case 10:case 14:return r=n.sent,n.abrupt("break",16);case 8:return n.next=10,(0,i.ZP)({url:"/movie/".concat(e,"?api_key=").concat(u,"&page=").concat(t)});case 12:return n.next=14,(0,i.ZP)({url:"/search/movie?api_key=".concat(u,"&query=").concat(e,"&page=").concat(t)});case 16:return n.abrupt("return",r.data);case 17:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.ZP)({url:"/movie/".concat(e,"?api_key=").concat(u)});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.ZP)({url:"/movie/".concat(e,"/credits?api_key=").concat(u)});case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,n.next=3,(0,i.ZP)({url:"/movie/".concat(e,"/reviews?api_key=").concat(u,"&page=").concat(t)});case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.ZP)({url:"/genre/movie/list?api_key=".concat(u)});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(n){return"https://image.tmdb.org/t/p/original".concat(n)}}}]);
//# sourceMappingURL=202.f0632b1d.chunk.js.map