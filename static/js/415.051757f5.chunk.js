"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{792:function(n,t,e){e.d(t,{Bt:function(){return f},Mc:function(){return p},wr:function(){return s},xj:function(){return o},y:function(){return d}});var r=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="66d85cdc98fdcbda260546142accdb60",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/week?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},365:function(n,t,e){e.d(t,{Z:function(){return v}});var r,a,c,u=e(87),i=e(689),s=e(168),o=e(444),p=o.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),f=o.ZP.li(a||(a=(0,s.Z)(["\n  list-style: none;\n  gap: 10px;\n"]))),d=o.ZP.img(c||(c=(0,s.Z)(["\n  width: 150px;\n  margin: 5px 10px;\n  border-radius: 6px;\n"]))),l=e(184),v=function(n){var t=n.movies,e=(0,i.TH)();return(0,l.jsx)(p,{children:t.length>0&&t.map((function(n){return(0,l.jsx)(f,{children:(0,l.jsx)(u.rU,{to:"/movies/".concat(n.id),state:{from:e},children:!!n.poster_path&&(0,l.jsx)(d,{src:"".concat("https://image.tmdb.org/t/p/w500/"+n.poster_path),alt:n.title})})},n.id)}))})}},415:function(n,t,e){e.r(t);var r=e(439),a=e(792),c=e(791),u=e(689),i=e(365),s=e(377),o=e(184);t.default=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],p=t[1],f=(0,u.TH)();return(0,c.useEffect)((function(){(0,a.wr)().then((function(n){p(n.results)}))}),[]),(0,o.jsxs)("div",{state:{from:f},children:[(0,o.jsx)(s.rq,{children:"Trending movies"}),(0,o.jsx)(i.Z,{movies:e})]})}}}]);
//# sourceMappingURL=415.051757f5.chunk.js.map