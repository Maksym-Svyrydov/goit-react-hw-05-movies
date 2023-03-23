"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[840],{792:function(n,e,t){t.d(e,{Bt:function(){return d},Mc:function(){return p},wr:function(){return o},xj:function(){return u},y:function(){return x}});var r=t(861),a=t(757),i=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="66d85cdc98fdcbda260546142accdb60",o=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},840:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,i,c,s,o,u,p,d,x=t(439),l=t(791),f=t(87),g=t(689),h=t(792),v=t(168),y=t(444),m=y.ZP.div(r||(r=(0,v.Z)(["\n  padding: 10px 40px;\n"]))),w=y.ZP.div(a||(a=(0,v.Z)(["\n  display: flex;\n  ","\n  width: 100px;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid gray;\n  border-radius: 4px;\n  margin: 5px 10px;\n  padding: 4px;\n"])),""),Z=y.ZP.div(i||(i=(0,v.Z)(["\n  display: flex;\n  ","\n  padding: 10px 10px;\n  border-bottom: 1px solid gray;\n\n  @media screen and (max-width: 647px) {\n     {\n      flex-wrap: wrap;\n      gap: 10px;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n"])),""),b=y.ZP.p(c||(c=(0,v.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  padding-left: 20px;\n  padding-top: 5px;\n  border-top: 2px solid gray;\n  ","\n"])),""),j=y.ZP.img(s||(s=(0,v.Z)(["\n  border-radius: 10px;\n  border: 2px solid gray;\n  margin-right: 20px;\n  padding: 0;\n  width: 250px ",";\n"])),""),k=y.ZP.div(o||(o=(0,v.Z)(["\n  padding: 5px 15px;\n  ","\n  font-size: 18px;\n  font-weight: 400;\n  text-align: justify;\n  line-height: 1.4;\n  border-radius: 6px;\n  background-color: #eceff1;\n"])),""),_=y.ZP.div(u||(u=(0,v.Z)(["\n  display: flex;\n  padding: 5px 50px;\n  ","\n  gap: 15px;\n  border-bottom: 3px solid gray;\n"])),""),P=y.ZP.div(p||(p=(0,v.Z)(["\n  display: flex;\n  width: 80px;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid gray;\n  border-radius: 4px;\n  padding: 4px;\n"]))),U=y.ZP.div(d||(d=(0,v.Z)(["\n  display: flex;\n  width: 80px;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid gray;\n  border-radius: 4px;\n  padding: 4px;\n"]))),S=t(184),C=function(){var n,e,t=(0,l.useState)(null),r=(0,x.Z)(t,2),a=r[0],i=r[1],c=(0,g.UO)().movieId,s=(0,g.TH)(),o=(0,l.useRef)(null!==(n=null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies/:movieId");if((0,l.useEffect)((function(){(0,h.Mc)(c).then((function(n){return i(n)}))})),a)return(0,S.jsxs)(m,{children:[(0,S.jsx)(w,{children:(0,S.jsx)(f.rU,{style:{textDecoration:"none"},to:o.current,children:"Go BACK"})}),(0,S.jsx)(b,{children:a.title}),(0,S.jsxs)(Z,{children:[(0,S.jsx)(j,{src:"".concat("https://image.tmdb.org/t/p/w500/"+a.poster_path),alt:a.title}),(0,S.jsxs)(k,{children:[(0,S.jsx)("p",{children:"Overview"}),(0,S.jsx)("p",{children:a.overview})]})]}),(0,S.jsxs)(_,{children:[(0,S.jsx)(P,{children:(0,S.jsx)(f.rU,{style:{textDecoration:"none"},to:"cast",state:s.state,children:"Cast"})}),(0,S.jsx)(U,{children:(0,S.jsx)(f.rU,{style:{textDecoration:"none"},to:"reviews",state:s.state,children:"Reviews"})})]}),(0,S.jsx)(g.j3,{})]})}}}]);
//# sourceMappingURL=840.c5fe84ef.chunk.js.map