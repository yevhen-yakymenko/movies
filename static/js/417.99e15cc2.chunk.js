"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[417],{8824:function(n,e,t){t.d(e,{Z:function(){return T}});var r,i,o,a,c,u,s,d,m,l=t(4165),f=t(3433),p=t(5861),h=t(9439),b=t(2791),v=t(7689),x=t(8565),Z=t(168),g=t(6444),k=t(1087),w=g.ZP.li(r||(r=(0,Z.Z)(["\n  /* max-width: 400px; */\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n\n  color: ",";\n\n  transition: color ",";\n\n  :hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.transitions.main}),(function(n){return n.theme.colors.accent})),y=(0,g.ZP)(k.OL)(i||(i=(0,Z.Z)(["\n  color: inherit;\n\n  & > img {\n    min-height: 100px;\n\n    @media screen and (min-width: ",") {\n    }\n\n    @media screen and (min-width: ",") {\n    }\n\n    @media screen and (min-width: ",") {\n      /* min-height: 300px; */\n    }\n  }\n"])),(function(n){return n.theme.breakpoints.mobile}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.pc})),j=g.ZP.h4(o||(o=(0,Z.Z)(["\n  font-size: ",";\n  font-family: ",";\n  padding: 0.375rem 0;\n"])),(function(n){return n.theme.fontSizes[4]}),(function(n){return n.theme.fonts.heading})),P=g.ZP.p(a||(a=(0,Z.Z)(["\n  font-size: ",";\n  font-style: italic;\n  padding: 0.125rem 0;\n"])),(function(n){return n.theme.fontSizes[2]})),_=t(184),S=function(n){var e=n.movie,t=n.genres,r=(0,v.TH)(),i=e.id,o=e.title,a=e.release_date,c=e.poster_path,u=e.genre_ids,s=t.filter((function(n){var e=n.id;return u.includes(e)})).map((function(n){return n.name}));return(0,_.jsx)(w,{children:(0,_.jsxs)(y,{to:"../movies/".concat(i),state:{from:r},children:[(0,_.jsx)("img",{src:(0,x.Pk)(c),alt:o}),(0,_.jsx)(j,{children:o}),(0,_.jsx)(P,{children:s.join(", ")}),(0,_.jsx)(P,{children:a})]})})},z=g.ZP.div(c||(c=(0,Z.Z)(["\n  padding-top: 5rem;\n  padding-bottom: 2.5rem;\n  padding-left: 3.375rem;\n  width: 100%;\n\n  @media screen and (min-width: ",") {\n    padding-left: 0.9375rem;\n  }\n\n  @media screen and (min-width: ",") {\n    padding-top: 5.5rem;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.pc})),L=g.ZP.h1(u||(u=(0,Z.Z)(["\n  margin-bottom: 1rem;\n  font-family: ",";\n  font-weight: ",";\n  color: ",";\n\n  @media screen and (min-width: ",") {\n    margin-bottom: 1.5rem;\n  }\n"])),(function(n){return n.theme.fonts.heading}),(function(n){return n.theme.fontWeights.heading}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.breakpoints.pc})),R=g.ZP.ul(s||(s=(0,Z.Z)(["\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n\n  & > li {\n    flex-basis: calc((100% - 1rem) / 2);\n\n    @media screen and (min-width: ",") {\n      flex-basis: calc((100% - 2rem) / 3);\n    }\n\n    @media screen and (min-width: ",") {\n      flex-basis: calc((100% - 3rem) / 4);\n    }\n\n    @media screen and (min-width: ",") {\n      flex-basis: calc((100% - 4rem) / 5);\n    }\n  }\n"])),(function(n){return n.theme.breakpoints.mobile}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.pc})),C=g.ZP.li(d||(d=(0,Z.Z)(["\n  display: flex;\n  align-items: flex-end;\n"]))),E=g.ZP.button(m||(m=(0,Z.Z)(["\n  padding: 0.5rem 1.5rem;\n  width: 100%;\n\n  color: ",";\n  border: none;\n  border-radius: 1.5rem;\n  background-color: ",";\n\n  cursor: pointer;\n\n  transition: color ",";\n\n  :hover,\n  :focus-visible {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.transitions.main}),(function(n){return n.theme.colors.accent})),T=function(n){var e=n.movieRef,t=n.title,r=(0,b.useState)([]),i=(0,h.Z)(r,2),o=i[0],a=i[1],c=(0,b.useState)(""),u=(0,h.Z)(c,2),s=u[0],d=u[1],m=(0,b.useState)(1),v=(0,h.Z)(m,2),Z=v[0],g=v[1],k=(0,b.useState)(null),w=(0,h.Z)(k,2),y=w[0],j=w[1],P=(0,b.useState)([]),T=(0,h.Z)(P,2),X=T[0],J=T[1];(0,b.useEffect)((function(){var n=function(){var n=(0,p.Z)((0,l.Z)().mark((function n(){var e,t,r,i,o;return(0,l.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.XT)(s,Z);case 3:return e=n.sent,t=e.results,r=e.total_pages,a((function(n){return[].concat((0,f.Z)(n),(0,f.Z)(t))})),console.log(t),j(r),n.next=11,(0,x.JZ)();case 11:i=n.sent,o=i.genres,J(o),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[0,16]])})));return function(){return n.apply(this,arguments)}}();if(e)return s!==e?(a([]),d(e),void g(1)):void n()}),[e,Z,s]);var O=y-Z;return(0,_.jsxs)(z,{children:[(0,_.jsx)(L,{children:t}),(0,_.jsxs)(R,{children:[o.map((function(n){return(0,_.jsx)(S,{movie:n,genres:X},n.id)})),(0,_.jsx)(C,{children:o.length>0&&O>0&&(0,_.jsx)(E,{type:"button",onClick:function(){g((function(n){return n+1}))},children:"Load more"})})]})]})}},5417:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,i,o,a,c,u,s,d,m,l=t(9439),f=t(2791),p=t(71),h=t(8617),b=t(5255),v=t(168),x=t(6444),Z=t(1087),g=x.ZP.aside(r||(r=(0,v.Z)(["\n  position: fixed;\n  top: 0;\n\n  padding-top: 4rem;\n  width: ",";\n  height: 100vh;\n  display: flex;\n\n  background-color: ",";\n\n  @media screen and (max-width: calc("," - 0.0375rem)) {\n    transform: translateX(calc(-100% + 44px));\n\n    transition: transform ",";\n\n    &.menu-open {\n      transform: translateX(0);\n    }\n  }\n\n  @media screen and (min-width: ",") {\n    position: sticky;\n    flex-shrink: 0;\n    display: block;\n  }\n"])),(function(n){return n.theme.sizes.aside}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.transitions.main}),(function(n){return n.theme.breakpoints.tablet})),k=x.ZP.button(i||(i=(0,v.Z)(["\n  padding: 0;\n  width: 2.75rem;\n  flex-shrink: 0;\n\n  font-size: 24px;\n  color: ",";\n\n  background-color: ",";\n  border: none;\n\n  transition: color ",";\n\n  &:hover,\n  &:focus-within {\n    color: ",";\n  }\n\n  @media screen and (min-width: ",") {\n    display: none;\n  }\n\n  & > span {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    transition: transform ",";\n\n    ",".menu-open & {\n      transform: rotate(-180deg);\n    }\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.muted}),(function(n){return n.theme.transitions.main}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.transitions.main}),g),w=x.ZP.nav(o||(o=(0,v.Z)(["\n  padding-top: 3.5rem;\n  padding-bottom: 3.5rem;\n  width: 100%;\n\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n\n  background-color: ",";\n\n  overflow-y: auto;\n\n  @media screen and (max-width: calc("," - 0.0375rem)) {\n    width: calc("," - 44px);\n\n    border-right: 2px solid ",";\n    opacity: 0;\n    pointer-events: none;\n    visibility: hidden;\n\n    transition: opacity "," 100ms;\n\n    ",".menu-open & {\n      opacity: 1;\n      pointer-events: auto;\n      visibility: visible;\n    }\n  }\n"])),(function(n){return n.theme.colors.muted}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.sizes.aside}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.transitions.main}),g),y=x.ZP.li(a||(a=(0,v.Z)(["\n  position: relative;\n  padding-left: 0.25rem;\n  width: 100%;\n"]))),j=(0,x.ZP)(Z.OL)(c||(c=(0,v.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 0rem 1rem 1rem;\n  color: ",";\n\n  transition: color ",",\n    background-color ",";\n\n  &.active {\n    background-color: ",";\n    color: ",";\n  }\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: ",";\n  }\n\n  @media screen and (min-width: ",") {\n    padding: 1rem 1rem 1rem 1.25rem;\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.transitions.main}),(function(n){return n.theme.transitions.main}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.breakpoints.tablet})),P=x.ZP.span(u||(u=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n\n  color: #535a5f;\n  opacity: 0;\n\n  pointer-events: none;\n  transition: opacity ",";\n\n  ",".active & {\n    opacity: 1;\n  }\n\n  @media screen and (max-width: calc("," - 0.0375rem)) {\n    display: none;\n  }\n"])),(function(n){return n.theme.transitions.main}),j,(function(n){return n.theme.breakpoints.tablet})),_=t(184),S=function(){var n=(0,f.useState)(!1),e=(0,l.Z)(n,2),t=e[0],r=e[1],i=(0,f.useRef)(),o=(0,f.useRef)(),a=(0,f.useRef)();(0,f.useEffect)((function(){var n=function(n){n.target!==a.current&&n.target!==o.current&&(i.current.classList.remove("menu-open"),r(!1))};if(t)return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}),[t]);return(0,_.jsxs)(g,{id:"aside-menu",ref:i,children:[(0,_.jsx)(w,{ref:a,children:(0,_.jsx)("ul",{children:b.map((function(n){var e=n.name,t=n.title;return(0,_.jsx)(y,{children:(0,_.jsxs)(j,{to:"../".concat(e),children:[t,(0,_.jsx)(P,{children:(0,_.jsx)(h.T7S,{})})]})},e)}))})}),(0,_.jsx)(k,{type:"button","aria-label":"open aside menu button","aria-controls":"aside-menu","aria-expanded":t,onClick:function(){return i.current.classList.toggle("menu-open"),void r(!t)},ref:o,children:(0,_.jsx)("span",{"aria-label":"button icon",children:(0,_.jsx)(p.mzm,{})})})]})},z=t(8824),L=x.ZP.section(s||(s=(0,v.Z)(["\n  width: 100%;\n\n  background-color: ",";\n"])),(function(n){return n.theme.colors.background})),R=x.ZP.div.attrs((function(n){return{className:"container"}}))(d||(d=(0,v.Z)(["\n  width: 100%;\n"]))),C=x.ZP.div(m||(m=(0,v.Z)(["\n  position: relative;\n  width: 100%;\n  display: flex;\n\n  @media screen and (max-width: calc("," - 0.0375rem)) {\n    overflow-y: hidden;\n  }\n\n  @media screen and (min-width: ",") {\n    display: flex;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.mobile})),E=function(n){var e=n.title,t=n.movieRef;return(0,_.jsx)(L,{children:(0,_.jsx)(R,{children:(0,_.jsxs)(C,{children:[(0,_.jsx)(S,{}),(0,_.jsx)(z.Z,{movieRef:t,title:e})]})})})}},8565:function(n,e,t){t.d(e,{IQ:function(){return s},JZ:function(){return m},Jh:function(){return d},Pg:function(){return u},Pk:function(){return l},XT:function(){return c}});var r=t(4165),i=t(5861),o=t(1243),a="f6621a4453f011cfb432a7f58c4cc70b";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=null,n.t0=e,n.next="day"===n.t0||"week"===n.t0?4:"popular"===n.t0||"top_rated"===n.t0||"upcoming"===n.t0?8:12;break;case 4:return n.next=6,(0,o.Z)({url:"/trending/movie/".concat(e,"?api_key=").concat(a,"&page=").concat(t)});case 6:case 10:case 14:return i=n.sent,n.abrupt("break",16);case 8:return n.next=10,(0,o.Z)({url:"/movie/".concat(e,"?api_key=").concat(a,"&page=").concat(t)});case 12:return n.next=14,(0,o.Z)({url:"/search/movie?api_key=".concat(a,"&query=").concat(e,"&page=").concat(t)});case 16:return n.abrupt("return",i.data);case 17:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),u=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)({url:"/movie/".concat(e,"?api_key=").concat(a)});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)({url:"/movie/".concat(e,"/credits?api_key=").concat(a)});case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,c=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,n.next=3,(0,o.Z)({url:"/movie/".concat(e,"/reviews?api_key=").concat(a,"&page=").concat(t)});case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)({url:"/genre/movie/list?api_key=".concat(a)});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(n){return"https://image.tmdb.org/t/p/original".concat(n)}}}]);
//# sourceMappingURL=417.99e15cc2.chunk.js.map