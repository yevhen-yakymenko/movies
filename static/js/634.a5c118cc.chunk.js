"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[634],{315:function(n,t,e){e.d(t,{Z:function(){return c}});var r=e(444),a=e(407),c=(0,r.ZP)("div")(a.$_,a.Dh,a.bK,a.GQ,a.Oq,a.Cg,a.FK)},261:function(n,t,e){e.d(t,{Z:function(){return y}});var r,a,c,u=e(982),i=e(861),o=e(885),s=e(757),p=e.n(s),f=e(791),l=e(731),d=e(689),v=e(565),h=e(168),x=e(444),m=x.ZP.li(r||(r=(0,h.Z)(["\n  width: 196px;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),Z=e(184),g=function(n){var t=n.movie,e=(0,d.TH)(),r=t.id,a=t.title,c=t.release_date,u=t.poster_path;return(0,Z.jsx)(m,{children:(0,Z.jsxs)(l.OL,{to:"../movies/".concat(r),state:{from:e},children:[(0,Z.jsx)("img",{src:(0,v.Pk)(u),alt:a}),(0,Z.jsx)("h4",{children:a}),(0,Z.jsx)("p",{children:c})]})})},b=x.ZP.ul(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n"]))),k=function(n){var t=n.movies;return(0,Z.jsx)(b,{children:t.map((function(n){return(0,Z.jsx)(g,{movie:n},n.id)}))})},w=x.ZP.div(c||(c=(0,h.Z)(["\n  flex-basis: content;\n  background-color: ",";\n  padding: 40px 16px;\n  overflow-y: scroll;\n"])),(function(n){return n.theme.colors.background})),y=function(n){var t=n.movieRef,e=n.children,r=(0,f.useState)([]),a=(0,o.Z)(r,2),c=a[0],s=a[1],l=(0,f.useState)(""),d=(0,o.Z)(l,2),h=d[0],x=d[1],m=(0,f.useState)(1),g=(0,o.Z)(m,2),b=g[0],y=g[1],j=(0,f.useState)(null),P=(0,o.Z)(j,2),_=P[0],S=P[1];(0,f.useEffect)((function(){var n=function(){var n=(0,i.Z)(p().mark((function n(){var t,e,r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.XT)(h,b);case 3:t=n.sent,e=t.results,r=t.total_pages,s((function(n){return[].concat((0,u.Z)(n),(0,u.Z)(e))})),S(r),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();if(t)return h!==t?(s([]),x(t),void y(1)):void n()}),[t,b,h]);var q=_-b;return(0,Z.jsxs)(w,{children:[e,(0,Z.jsx)(k,{movies:c}),c.length>0&&q>0&&(0,Z.jsx)("button",{type:"button",onClick:function(){y((function(n){return n+1}))},children:"Load more"})]})}},634:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r,a=e(885),c=e(731),u=e(315),i=e(261),o=e(791),s=e(168),p=e(444).ZP.form(r||(r=(0,s.Z)(["\n  width: 1280px;\n"]))),f=e(184),l=function(n){var t=n.onSubmit,e=(0,o.useState)(""),r=(0,a.Z)(e,2),c=r[0],u=r[1];return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(p,{onSubmit:function(n){n.preventDefault(),t(c),n.target.reset(),u("")},children:[(0,f.jsx)("input",{onChange:function(n){return u(n.target.value)},name:"search",required:!0}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})})},d=function(){var n=(0,c.lr)(),t=(0,a.Z)(n,2),e=t[0],r=t[1],o=e.get("request");return(0,f.jsx)(u.Z,{as:"main",display:"flex",height:"100vh",minWidth:"1280px",children:(0,f.jsx)(i.Z,{movieRef:o,children:(0,f.jsx)(l,{onSubmit:function(n){r({request:n})}})})})}},565:function(n,t,e){e.d(t,{IQ:function(){return p},Jh:function(){return f},Pg:function(){return s},Pk:function(){return l},XT:function(){return o}});var r=e(861),a=e(757),c=e.n(a),u=e(44),i="f6621a4453f011cfb432a7f58c4cc70b";u.ZP.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=null,n.t0=t,n.next="day"===n.t0||"week"===n.t0?4:"popular"===n.t0||"top_rated"===n.t0||"upcoming"===n.t0?8:12;break;case 4:return n.next=6,(0,u.ZP)({url:"/trending/movie/".concat(t,"?api_key=").concat(i,"&page=").concat(e)});case 6:case 10:case 14:return r=n.sent,n.abrupt("break",16);case 8:return n.next=10,(0,u.ZP)({url:"/movie/".concat(t,"?api_key=").concat(i,"&page=").concat(e)});case 12:return n.next=14,(0,u.ZP)({url:"/search/movie?api_key=".concat(i,"&query=").concat(t,"&page=").concat(e)});case 16:return n.abrupt("return",r.data);case 17:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.ZP)({url:"/movie/".concat(t,"?api_key=").concat(i)});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.ZP)({url:"/movie/".concat(t,"/credits?api_key=").concat(i)});case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,(0,u.ZP)({url:"/movie/".concat(t,"/reviews?api_key=").concat(i,"&page=").concat(e)});case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(n){return"https://image.tmdb.org/t/p/original".concat(n)}}}]);
//# sourceMappingURL=634.a5c118cc.chunk.js.map