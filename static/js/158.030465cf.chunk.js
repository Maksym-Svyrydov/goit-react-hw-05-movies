"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[158],{792:function(n,t,e){e.d(t,{Bt:function(){return f},Mc:function(){return p},wr:function(){return o},xj:function(){return s},y:function(){return d}});var r=e(861),a=e(757),u=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="66d85cdc98fdcbda260546142accdb60",o=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},365:function(n,t,e){e.d(t,{Z:function(){return x}});var r,a,u,c=e(87),i=e(689),o=e(168),s=e(444),p=s.ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),f=s.ZP.li(a||(a=(0,o.Z)(["\n  list-style: none;\n  gap: 10px;\n"]))),d=s.ZP.img(u||(u=(0,o.Z)(["\n  width: 150px;\n  margin: 5px 10px;\n  border-radius: 6px;\n"]))),l=e(184),x=function(n){var t=n.movies,e=(0,i.TH)();return(0,l.jsx)(p,{children:t.map((function(n){return(0,l.jsx)(f,{children:(0,l.jsx)(c.rU,{to:"/movies/".concat(n.id),state:{from:e},children:n.poster_path&&(0,l.jsx)(d,{src:"".concat("https://image.tmdb.org/t/p/w500/"+n.poster_path),alt:n.title})})},n.id)}))})}},158:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a,u,c,i=e(439),o=e(791),s=e(87),p=e(792),f=e(365),d=e(168),l=e(444),x=l.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),h=l.ZP.form(a||(a=(0,d.Z)(["\n  display: flex;\n  gap: 5px;\n  padding: 5px 10px;\n"]))),v=l.ZP.input(u||(u=(0,d.Z)(["\n  border-radius: 4px;\n"]))),g=l.ZP.button(c||(c=(0,d.Z)(["\n  padding: 4px;\n  font-weight: 400px;\n  min-width: 100px;\n  min-height: 32px;\n  border-radius: 4px;\n  cursor: pointer;\n  &:hover {\n    background-color: #cfd8dc;\n    font-weight: 800px;\n    font-size: 17px;\n  }\n"]))),m=e(184),Z=function(){var n=(0,o.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,o.useState)(""),u=(0,i.Z)(a,2),c=u[0],d=u[1],l=(0,s.lr)(),Z=(0,i.Z)(l,2),w=Z[0],y=Z[1];return(0,o.useEffect)((function(){var n,t=null!==(n=w.get("query"))&&void 0!==n?n:"";t!=={}&&(0,p.xj)(t).then(r)}),[w]),(0,m.jsxs)(x,{children:[(0,m.jsxs)(h,{onSubmit:function(n){if(n.preventDefault(),""===c)return y({});y({query:c})},children:[(0,m.jsx)(v,{type:"text",name:"search",placeholder:"Search your film :)",onChange:function(n){d(n.target.value)},value:c}),(0,m.jsx)(g,{type:"submit",children:"Search film"})]}),(0,m.jsx)(f.Z,{movies:e})]})}}}]);
//# sourceMappingURL=158.030465cf.chunk.js.map