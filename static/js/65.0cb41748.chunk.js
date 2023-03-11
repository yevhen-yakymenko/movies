"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[65],{4315:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(6444),i=t(407),o=(0,r.ZP)("div")(i.$_,i.Dh,i.bK,i.GQ,i.Oq,i.Cg,i.FK)},8824:function(n,e,t){t.d(e,{Z:function(){return T}});var r,i,o,c,a,u,s,d,f,l=t(2982),m=t(5861),p=t(885),h=t(7757),x=t.n(h),g=t(2791),b=t(7689),v=t(8565),Z=t(168),k=t(6444),w=t(6731),y=k.ZP.li(r||(r=(0,Z.Z)(["\n  /* max-width: 400px; */\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n\n  color: ",";\n\n  transition: color ",";\n\n  :hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.transitions.main}),(function(n){return n.theme.colors.accent})),P=(0,k.ZP)(w.OL)(i||(i=(0,Z.Z)(["\n  color: inherit;\n\n  & > img {\n    min-height: 100px;\n\n    @media screen and (min-width: ",") {\n    }\n\n    @media screen and (min-width: ",") {\n    }\n\n    @media screen and (min-width: ",") {\n      /* min-height: 300px; */\n    }\n  }\n"])),(function(n){return n.theme.breakpoints.mobile}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.pc})),j=k.ZP.h4(o||(o=(0,Z.Z)(["\n  font-size: ",";\n  font-family: ",";\n  padding: 0.375rem 0;\n"])),(function(n){return n.theme.fontSizes[4]}),(function(n){return n.theme.fonts.heading})),_=k.ZP.p(c||(c=(0,Z.Z)(["\n  font-size: ",";\n  font-style: italic;\n  padding: 0.125rem 0;\n"])),(function(n){return n.theme.fontSizes[2]})),S=t(184),q=function(n){var e=n.movie,t=n.genres,r=(0,b.TH)(),i=e.id,o=e.title,c=e.release_date,a=e.poster_path,u=e.genre_ids,s=t.filter((function(n){var e=n.id;return u.includes(e)})).map((function(n){return n.name}));return(0,S.jsx)(y,{children:(0,S.jsxs)(P,{to:"../movies/".concat(i),state:{from:r},children:[(0,S.jsx)("img",{src:(0,v.Pk)(a),alt:o}),(0,S.jsx)(j,{children:o}),(0,S.jsx)(_,{children:s.join(", ")}),(0,S.jsx)(_,{children:c})]})})},z=k.ZP.div(a||(a=(0,Z.Z)(["\n  padding-top: 5rem;\n  padding-bottom: 2.5rem;\n  padding-left: 3.375rem;\n  width: 100%;\n\n  @media screen and (min-width: ",") {\n    padding-left: 0.9375rem;\n  }\n\n  @media screen and (min-width: ",") {\n    padding-top: 5.5rem;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.pc})),C=k.ZP.h1(u||(u=(0,Z.Z)(["\n  margin-bottom: 1rem;\n  font-family: ",";\n  font-weight: ",";\n  color: ",";\n\n  @media screen and (min-width: ",") {\n    margin-bottom: 1.5rem;\n  }\n"])),(function(n){return n.theme.fonts.heading}),(function(n){return n.theme.fontWeights.heading}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.breakpoints.pc})),J=k.ZP.ul(s||(s=(0,Z.Z)(["\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n\n  & > li {\n    flex-basis: calc((100% - 1rem) / 2);\n\n    @media screen and (min-width: ",") {\n      flex-basis: calc((100% - 2rem) / 3);\n    }\n\n    @media screen and (min-width: ",") {\n      flex-basis: calc((100% - 3rem) / 4);\n    }\n\n    @media screen and (min-width: ",") {\n      flex-basis: calc((100% - 4rem) / 5);\n    }\n  }\n"])),(function(n){return n.theme.breakpoints.mobile}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.pc})),L=k.ZP.li(d||(d=(0,Z.Z)(["\n  display: flex;\n  align-items: flex-end;\n"]))),R=k.ZP.button(f||(f=(0,Z.Z)(["\n  padding: 0.5rem 1.5rem;\n  width: 100%;\n\n  color: ",";\n  border: none;\n  border-radius: 1.5rem;\n  background-color: ",";\n\n  cursor: pointer;\n\n  transition: color ",";\n\n  :hover,\n  :focus-visible {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.transitions.main}),(function(n){return n.theme.colors.accent})),T=function(n){var e=n.movieRef,t=n.title,r=(0,g.useState)([]),i=(0,p.Z)(r,2),o=i[0],c=i[1],a=(0,g.useState)(""),u=(0,p.Z)(a,2),s=u[0],d=u[1],f=(0,g.useState)(1),h=(0,p.Z)(f,2),b=h[0],Z=h[1],k=(0,g.useState)(null),w=(0,p.Z)(k,2),y=w[0],P=w[1],j=(0,g.useState)([]),_=(0,p.Z)(j,2),T=_[0],D=_[1];(0,g.useEffect)((function(){var n=function(){var n=(0,m.Z)(x().mark((function n(){var e,t,r,i,o;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.XT)(s,b);case 3:return e=n.sent,t=e.results,r=e.total_pages,c((function(n){return[].concat((0,l.Z)(n),(0,l.Z)(t))})),console.log(t),P(r),n.next=11,(0,v.JZ)();case 11:i=n.sent,o=i.genres,D(o),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[0,16]])})));return function(){return n.apply(this,arguments)}}();if(e)return s!==e?(c([]),d(e),void Z(1)):void n()}),[e,b,s]);var F=y-b;return(0,S.jsxs)(z,{children:[(0,S.jsx)(C,{children:t}),(0,S.jsxs)(J,{children:[o.map((function(n){return(0,S.jsx)(q,{movie:n,genres:T},n.id)})),(0,S.jsx)(L,{children:o.length>0&&F>0&&(0,S.jsx)(R,{type:"button",onClick:function(){Z((function(n){return n+1}))},children:"Load more"})})]})]})}},3065:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,i,o,c,a,u,s=t(885),d=t(6731),f=t(4315),l=t(8824),m=t(2791),p=t(168),h=t(6444),x=t(7692),g=(h.ZP.div(r||(r=(0,p.Z)([""]))),h.ZP.form(i||(i=(0,p.Z)(["\n  width: 75%;\n  align-self: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])))),b=h.ZP.input(o||(o=(0,p.Z)(["\n  width: 50%;\n  font-weight: ",";\n  line-height: ",";\n  color: ",";\n  background-color: ",";\n  border: none;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  outline: none;\n  padding: 8px 16px;\n"])),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.lineHeights.body}),(function(n){return n.theme.colors.muted}),(function(n){return n.theme.colors.text})),v=h.ZP.button(c||(c=(0,p.Z)(["\n  display: flex;\n  padding: 8px;\n  background-color: ",";\n  border: none;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  cursor: pointer;\n"])),(function(n){return n.theme.colors.secondary})),Z=(0,h.ZP)(x.Goc)(a||(a=(0,p.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.text})),k=t(184),w=function(n){var e=n.onSubmit,t=(0,m.useState)(""),r=(0,s.Z)(t,2),i=r[0],o=r[1];return(0,k.jsxs)(g,{onSubmit:function(n){n.preventDefault(),e(i),n.target.reset(),o("")},children:[(0,k.jsx)(b,{type:"text",name:"search",placeholder:"Find a movies...",autofocus:!0,required:!0,onChange:function(n){return o(n.target.value)}}),(0,k.jsx)(v,{type:"submit",children:(0,k.jsx)(Z,{size:"24px"})})]})},y=h.ZP.div(u||(u=(0,p.Z)(["\n  min-width: 240px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.muted})),P=function(){var n=(0,d.lr)(),e=(0,s.Z)(n,2),t=e[0],r=e[1],i=t.get("request");return(0,k.jsxs)(f.Z,{as:"section",display:"flex",height:"100%",children:[(0,k.jsx)(y,{}),(0,k.jsx)(l.Z,{movieRef:i,children:(0,k.jsx)(w,{onSubmit:function(n){r({request:n})}})})]})}},8565:function(n,e,t){t.d(e,{IQ:function(){return d},JZ:function(){return l},Jh:function(){return f},Pg:function(){return s},Pk:function(){return m},XT:function(){return u}});var r=t(5861),i=t(7757),o=t.n(i),c=t(1044),a="f6621a4453f011cfb432a7f58c4cc70b";c.ZP.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=null,n.t0=e,n.next="day"===n.t0||"week"===n.t0?4:"popular"===n.t0||"top_rated"===n.t0||"upcoming"===n.t0?8:12;break;case 4:return n.next=6,(0,c.ZP)({url:"/trending/movie/".concat(e,"?api_key=").concat(a,"&page=").concat(t)});case 6:case 10:case 14:return r=n.sent,n.abrupt("break",16);case 8:return n.next=10,(0,c.ZP)({url:"/movie/".concat(e,"?api_key=").concat(a,"&page=").concat(t)});case 12:return n.next=14,(0,c.ZP)({url:"/search/movie?api_key=".concat(a,"&query=").concat(e,"&page=").concat(t)});case 16:return n.abrupt("return",r.data);case 17:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.ZP)({url:"/movie/".concat(e,"?api_key=").concat(a)});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.ZP)({url:"/movie/".concat(e,"/credits?api_key=").concat(a)});case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,i=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:1,n.next=3,(0,c.ZP)({url:"/movie/".concat(e,"/reviews?api_key=").concat(a,"&page=").concat(t)});case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.ZP)({url:"/genre/movie/list?api_key=".concat(a)});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),m=function(n){return"https://image.tmdb.org/t/p/original".concat(n)}}}]);
//# sourceMappingURL=65.0cb41748.chunk.js.map