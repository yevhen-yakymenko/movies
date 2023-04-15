"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[260],{6260:function(n,e,r){r.r(e),r.d(e,{default:function(){return F}});var t,i,c,a,o,s,u,d,l,m,p,h,f,x,v=r(9439),Z=r(2791),g=r(7689),b=r(6036),k=r(168),w=r(1087),j=r(6444),y=j.ZP.div(t||(t=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.background})),P=j.ZP.div.attrs((function(n){return{className:"container"}}))(i||(i=(0,k.Z)(["\n  width: 100%;\n  min-height: calc(100vh - 3.75rem);\n  display: flex;\n"]))),_=j.ZP.aside(c||(c=(0,k.Z)(["\n  position: sticky;\n  top: 0;\n\n  padding-top: 8.25rem;\n  width: 2.75rem;\n  height: 100vh;\n  /* height: calc(100vh - 60px); */\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  background-color: ",";\n\n  @media screen and (min-width: ",") {\n    position: sticky;\n    flex-shrink: 0;\n    width: ",";\n  }\n"])),(function(n){return n.theme.colors.muted}),(function(n){return n.theme.breakpoints.pc}),(function(n){return n.theme.sizes.aside})),R=(0,j.ZP)(w.OL)(a||(a=(0,k.Z)(["\n  position: fixed;\n  top: 4.625rem;\n  margin: 0 auto;\n  padding: 0.5rem 0.5rem;\n  display: flex;\n\n  color: ",";\n  background-color: ",";\n\n  border-radius: 0.25rem;\n\n  transition: color ",";\n\n  :hover,\n  :focus-within {\n    font-weight: ",";\n    color: ",";\n  }\n\n  @media screen and (min-width: ",") {\n    top: 6rem;\n    align-items: center;\n    justify-content: center;\n    gap: 0.75rem;\n    min-width: 10rem;\n    padding: 0.5rem 1.5rem 0.5rem 1.5rem;\n    border-radius: 1.5rem;\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.transitions.main}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.breakpoints.pc})),L=j.ZP.span(o||(o=(0,k.Z)(["\n  display: flex;\n  font-size: 1.5rem;\n"]))),O=j.ZP.span(s||(s=(0,k.Z)(["\n  @media screen and (max-width: calc("," - 0.0375rem)) {\n    display: none;\n  }\n"])),(function(n){return n.theme.breakpoints.pc})),z=j.ZP.article(u||(u=(0,k.Z)(["\n  max-width: 70.625rem;\n  padding: 4.625rem 0 0.625rem 0.625rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n\n  overflow-x: clip;\n\n  @media screen and (min-width: ",") {\n    padding: 6rem 0 2rem 2rem;\n  }\n"])),(function(n){return n.theme.breakpoints.pc})),C=j.ZP.div(d||(d=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet})),I=j.ZP.div(l||(l=(0,k.Z)(["\n  flex: 1 1;\n  min-width: 18.75rem;\n"]))),G=j.ZP.div(m||(m=(0,k.Z)(["\n  flex: 2 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 2rem;\n\n  & h1 {\n    font-size: 2rem;\n  }\n"]))),J=j.ZP.div(p||(p=(0,k.Z)([""]))),S=j.ZP.ul(h||(h=(0,k.Z)(["\n  display: inline-flex;\n  flex-wrap: wrap;\n\n  border: 1px solid ",";\n  border-bottom: none;\n  border-top-left-radius: 0.75rem;\n  border-top-right-radius: 0.75rem;\n\n  overflow: hidden;\n"])),(function(n){return n.theme.colors.secondary})),T=(0,j.ZP)(w.OL)(f||(f=(0,k.Z)(["\n  padding: 1rem 1rem 1rem 1rem;\n  min-width: 100px;\n  display: inline-flex;\n  justify-content: center;\n\n  line-height: 1.5;\n  color: ",";\n\n  transition: background-color ",";\n\n  &.active {\n    background-color: ",";\n  }\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: ",";\n  }\n\n  @media screen and (min-width: ",") {\n    padding: 0.5rem 1rem;\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.transitions.main}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.breakpoints.tablet})),U=j.ZP.div(x||(x=(0,k.Z)(["\n  padding: 0.5rem;\n  border: 0.0625rem solid ",";\n  border-radius: 0.75rem;\n  border-top-left-radius: 0;\n\n  @media screen and (min-width: ",") {\n    padding: 1rem;\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.breakpoints.pc})),q=r(8565),E=r(184),F=function(){var n,e,r=(0,g.UO)().movieId,t=(0,Z.useState)(null),i=(0,v.Z)(t,2),c=i[0],a=i[1],o=(0,g.TH)();if((0,Z.useEffect)((function(){try{(0,q.Pg)(r).then(a)}catch(n){console.log(n)}}),[r]),!c)return null;var s=c.title,u=c.genres,d=c.poster_path,l=c.release_date,m=c.overview,p=c.vote_average,h=c.vote_count,f=c.runtime,x=null!==(n=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",k=l.split("-").reverse().join("-"),w=u.map((function(n){return n.name})).join(", "),j="".concat(parseInt(f/60),"h ").concat(f%60,"min"),F=Math.round(10*p)/10;return(0,E.jsx)(y,{children:(0,E.jsxs)(P,{children:[(0,E.jsx)(_,{children:(0,E.jsxs)(R,{to:x,children:[(0,E.jsx)(L,{children:(0,E.jsx)(b.wFh,{})}),(0,E.jsx)(O,{children:"Go back"})]})}),(0,E.jsxs)(z,{children:[(0,E.jsxs)(C,{children:[(0,E.jsx)(I,{children:(0,E.jsx)("img",{src:(0,q.Pk)(d),alt:s})}),(0,E.jsxs)(G,{children:[(0,E.jsx)("h1",{children:s}),(0,E.jsxs)("p",{children:[(0,E.jsx)("span",{children:"Genre:"})," ",w]}),(0,E.jsxs)("p",{children:[(0,E.jsx)("span",{children:"Release date:"})," ",k]}),(0,E.jsxs)("p",{children:[(0,E.jsx)("span",{children:"Runtime:"})," ",f," min (",j,")"]}),(0,E.jsxs)("p",{children:[(0,E.jsx)("span",{children:"Rating:"})," ",F,"/10 (",h,")"]}),(0,E.jsxs)("div",{children:[(0,E.jsx)("h3",{children:"Overview:"}),(0,E.jsx)("p",{children:m})]})]})]}),(0,E.jsxs)(J,{children:[(0,E.jsxs)(S,{children:[(0,E.jsx)("li",{children:(0,E.jsx)(T,{to:"cast",children:"Cast"})}),(0,E.jsx)("li",{children:(0,E.jsx)(T,{to:"reviews",children:"Reviews"})})]}),(0,E.jsx)(U,{children:(0,E.jsx)(Z.Suspense,{fallback:(0,E.jsx)("div",{children:"Loading..."}),children:(0,E.jsx)(g.j3,{})})})]})]})]})})}},8565:function(n,e,r){r.d(e,{IQ:function(){return u},JZ:function(){return l},Jh:function(){return d},Pg:function(){return s},Pk:function(){return m},XT:function(){return o}});var t=r(4165),i=r(5861),c=r(1243),a="f6621a4453f011cfb432a7f58c4cc70b";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e,r){var i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=null,n.t0=e,n.next="day"===n.t0||"week"===n.t0?4:"popular"===n.t0||"top_rated"===n.t0||"upcoming"===n.t0?8:12;break;case 4:return n.next=6,(0,c.Z)({url:"/trending/movie/".concat(e,"?api_key=").concat(a,"&page=").concat(r)});case 6:case 10:case 14:return i=n.sent,n.abrupt("break",16);case 8:return n.next=10,(0,c.Z)({url:"/movie/".concat(e,"?api_key=").concat(a,"&page=").concat(r)});case 12:return n.next=14,(0,c.Z)({url:"/search/movie?api_key=".concat(a,"&query=").concat(e,"&page=").concat(r)});case 16:return n.abrupt("return",i.data);case 17:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)({url:"/movie/".concat(e,"?api_key=").concat(a)});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)({url:"/movie/".concat(e,"/credits?api_key=").concat(a)});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var r,i,o=arguments;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:1,n.next=3,(0,c.Z)({url:"/movie/".concat(e,"/reviews?api_key=").concat(a,"&page=").concat(r)});case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(){var e;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)({url:"/genre/movie/list?api_key=".concat(a)});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),m=function(n){return"https://image.tmdb.org/t/p/original".concat(n)}}}]);
//# sourceMappingURL=260.0c783f45.chunk.js.map