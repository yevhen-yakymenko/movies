"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[65],{4315:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(6444),i=t(407),o=(0,r.ZP)("div")(i.$_,i.Dh,i.bK,i.GQ,i.Oq,i.Cg,i.FK)},8824:function(n,e,t){t.d(e,{Z:function(){return R}});var r,i,o,c,a,u,s,d,f,l=t(4165),m=t(3433),p=t(5861),h=t(9439),Z=t(2791),x=t(7689),g=t(8565),b=t(168),v=t(6444),k=t(1087),w=v.ZP.li(r||(r=(0,b.Z)(["\n  /* max-width: 400px; */\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n\n  color: ",";\n\n  transition: color ",";\n\n  :hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.transitions.main}),(function(n){return n.theme.colors.accent})),y=(0,v.ZP)(k.OL)(i||(i=(0,b.Z)(["\n  color: inherit;\n\n  & > img {\n    min-height: 100px;\n\n    @media screen and (min-width: ",") {\n    }\n\n    @media screen and (min-width: ",") {\n    }\n\n    @media screen and (min-width: ",") {\n      /* min-height: 300px; */\n    }\n  }\n"])),(function(n){return n.theme.breakpoints.mobile}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.pc})),j=v.ZP.h4(o||(o=(0,b.Z)(["\n  font-size: ",";\n  font-family: ",";\n  padding: 0.375rem 0;\n"])),(function(n){return n.theme.fontSizes[4]}),(function(n){return n.theme.fonts.heading})),P=v.ZP.p(c||(c=(0,b.Z)(["\n  font-size: ",";\n  font-style: italic;\n  padding: 0.125rem 0;\n"])),(function(n){return n.theme.fontSizes[2]})),_=t(184),S=function(n){var e=n.movie,t=n.genres,r=(0,x.TH)(),i=e.id,o=e.title,c=e.release_date,a=e.poster_path,u=e.genre_ids,s=t.filter((function(n){var e=n.id;return u.includes(e)})).map((function(n){return n.name}));return(0,_.jsx)(w,{children:(0,_.jsxs)(y,{to:"../movies/".concat(i),state:{from:r},children:[(0,_.jsx)("img",{src:(0,g.Pk)(a),alt:o}),(0,_.jsx)(j,{children:o}),(0,_.jsx)(P,{children:s.join(", ")}),(0,_.jsx)(P,{children:c})]})})},q=v.ZP.div(a||(a=(0,b.Z)(["\n  padding-top: 5rem;\n  padding-bottom: 2.5rem;\n  padding-left: 3.375rem;\n  width: 100%;\n\n  @media screen and (min-width: ",") {\n    padding-left: 0.9375rem;\n  }\n\n  @media screen and (min-width: ",") {\n    padding-top: 5.5rem;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.pc})),z=v.ZP.h1(u||(u=(0,b.Z)(["\n  margin-bottom: 1rem;\n  font-family: ",";\n  font-weight: ",";\n  color: ",";\n\n  @media screen and (min-width: ",") {\n    margin-bottom: 1.5rem;\n  }\n"])),(function(n){return n.theme.fonts.heading}),(function(n){return n.theme.fontWeights.heading}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.breakpoints.pc})),C=v.ZP.ul(s||(s=(0,b.Z)(["\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n\n  & > li {\n    flex-basis: calc((100% - 1rem) / 2);\n\n    @media screen and (min-width: ",") {\n      flex-basis: calc((100% - 2rem) / 3);\n    }\n\n    @media screen and (min-width: ",") {\n      flex-basis: calc((100% - 3rem) / 4);\n    }\n\n    @media screen and (min-width: ",") {\n      flex-basis: calc((100% - 4rem) / 5);\n    }\n  }\n"])),(function(n){return n.theme.breakpoints.mobile}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.pc})),J=v.ZP.li(d||(d=(0,b.Z)(["\n  display: flex;\n  align-items: flex-end;\n"]))),L=v.ZP.button(f||(f=(0,b.Z)(["\n  padding: 0.5rem 1.5rem;\n  width: 100%;\n\n  color: ",";\n  border: none;\n  border-radius: 1.5rem;\n  background-color: ",";\n\n  cursor: pointer;\n\n  transition: color ",";\n\n  :hover,\n  :focus-visible {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.transitions.main}),(function(n){return n.theme.colors.accent})),R=function(n){var e=n.movieRef,t=n.title,r=(0,Z.useState)([]),i=(0,h.Z)(r,2),o=i[0],c=i[1],a=(0,Z.useState)(""),u=(0,h.Z)(a,2),s=u[0],d=u[1],f=(0,Z.useState)(1),x=(0,h.Z)(f,2),b=x[0],v=x[1],k=(0,Z.useState)(null),w=(0,h.Z)(k,2),y=w[0],j=w[1],P=(0,Z.useState)([]),R=(0,h.Z)(P,2),T=R[0],D=R[1];(0,Z.useEffect)((function(){var n=function(){var n=(0,p.Z)((0,l.Z)().mark((function n(){var e,t,r,i,o;return(0,l.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,g.XT)(s,b);case 3:return e=n.sent,t=e.results,r=e.total_pages,c((function(n){return[].concat((0,m.Z)(n),(0,m.Z)(t))})),console.log(t),j(r),n.next=11,(0,g.JZ)();case 11:i=n.sent,o=i.genres,D(o),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[0,16]])})));return function(){return n.apply(this,arguments)}}();if(e)return s!==e?(c([]),d(e),void v(1)):void n()}),[e,b,s]);var F=y-b;return(0,_.jsxs)(q,{children:[(0,_.jsx)(z,{children:t}),(0,_.jsxs)(C,{children:[o.map((function(n){return(0,_.jsx)(S,{movie:n,genres:T},n.id)})),(0,_.jsx)(J,{children:o.length>0&&F>0&&(0,_.jsx)(L,{type:"button",onClick:function(){v((function(n){return n+1}))},children:"Load more"})})]})]})}},3065:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,i,o,c,a,u,s=t(9439),d=t(1087),f=t(4315),l=t(8824),m=t(2791),p=t(168),h=t(6444),Z=t(7692),x=(h.ZP.div(r||(r=(0,p.Z)([""]))),h.ZP.form(i||(i=(0,p.Z)(["\n  width: 75%;\n  align-self: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])))),g=h.ZP.input(o||(o=(0,p.Z)(["\n  width: 50%;\n  font-weight: ",";\n  line-height: ",";\n  color: ",";\n  background-color: ",";\n  border: none;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  outline: none;\n  padding: 8px 16px;\n"])),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.lineHeights.body}),(function(n){return n.theme.colors.muted}),(function(n){return n.theme.colors.text})),b=h.ZP.button(c||(c=(0,p.Z)(["\n  display: flex;\n  padding: 8px;\n  background-color: ",";\n  border: none;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  cursor: pointer;\n"])),(function(n){return n.theme.colors.secondary})),v=(0,h.ZP)(Z.Goc)(a||(a=(0,p.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.text})),k=t(184),w=function(n){var e=n.onSubmit,t=(0,m.useState)(""),r=(0,s.Z)(t,2),i=r[0],o=r[1];return(0,k.jsxs)(x,{onSubmit:function(n){n.preventDefault(),e(i),n.target.reset(),o("")},children:[(0,k.jsx)(g,{type:"text",name:"search",placeholder:"Find a movies...",autofocus:!0,required:!0,onChange:function(n){return o(n.target.value)}}),(0,k.jsx)(b,{type:"submit",children:(0,k.jsx)(v,{size:"24px"})})]})},y=h.ZP.div(u||(u=(0,p.Z)(["\n  min-width: 240px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.muted})),j=function(){var n=(0,d.lr)(),e=(0,s.Z)(n,2),t=e[0],r=e[1],i=t.get("request");return(0,k.jsxs)(f.Z,{as:"section",display:"flex",height:"100%",children:[(0,k.jsx)(y,{}),(0,k.jsx)(l.Z,{movieRef:i,children:(0,k.jsx)(w,{onSubmit:function(n){r({request:n})}})})]})}},8565:function(n,e,t){t.d(e,{IQ:function(){return s},JZ:function(){return f},Jh:function(){return d},Pg:function(){return u},Pk:function(){return l},XT:function(){return a}});var r=t(4165),i=t(5861),o=t(1243),c="f6621a4453f011cfb432a7f58c4cc70b";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var a=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=null,n.t0=e,n.next="day"===n.t0||"week"===n.t0?4:"popular"===n.t0||"top_rated"===n.t0||"upcoming"===n.t0?8:12;break;case 4:return n.next=6,(0,o.Z)({url:"/trending/movie/".concat(e,"?api_key=").concat(c,"&page=").concat(t)});case 6:case 10:case 14:return i=n.sent,n.abrupt("break",16);case 8:return n.next=10,(0,o.Z)({url:"/movie/".concat(e,"?api_key=").concat(c,"&page=").concat(t)});case 12:return n.next=14,(0,o.Z)({url:"/search/movie?api_key=".concat(c,"&query=").concat(e,"&page=").concat(t)});case 16:return n.abrupt("return",i.data);case 17:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),u=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)({url:"/movie/".concat(e,"?api_key=").concat(c)});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)({url:"/movie/".concat(e,"/credits?api_key=").concat(c)});case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,(0,o.Z)({url:"/movie/".concat(e,"/reviews?api_key=").concat(c,"&page=").concat(t)});case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)({url:"/genre/movie/list?api_key=".concat(c)});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(n){return"https://image.tmdb.org/t/p/original".concat(n)}}}]);
//# sourceMappingURL=65.e0a0aa49.chunk.js.map