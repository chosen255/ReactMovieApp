(this.webpackJsonpreact_movie_app=this.webpackJsonpreact_movie_app||[]).push([[0],{56:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(29),r=n.n(c),i=n(8),o=n(2),j=n(17),l=n.n(j),m=n(30),u=n(11),d=n(12),b=n(14),v=n(13),h=n(31),p=n.n(h),O=(n(56),n(1));var x=function(e){var t=e.id,n=e.year,a=e.title,s=e.summary,c=e.poster,r=e.genres;return Object(O.jsx)(i.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:a,summary:s,poster:c,genres:r}},children:Object(O.jsxs)("div",{className:"movie",children:[Object(O.jsx)("img",{src:c,alt:a,title:a}),Object(O.jsxs)("div",{className:"movie_data",children:[Object(O.jsx)("h3",{className:"movie_title",children:a}),Object(O.jsx)("h5",{className:"movie_year",children:n}),Object(O.jsx)("ul",{className:"movie_genres",children:r.map((function(e,t){return Object(O.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(O.jsxs)("p",{className:"movie_summary",children:[s.slice(0,180),"..."]})]})]})})},f=(n(63),function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(l.a.mark((function t(){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(O.jsx)("section",{className:"container",children:t?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("span",{className:"loader_text",children:'"Loading..."'})}):Object(O.jsx)("div",{className:"movies",children:n.map((function(e){return Object(O.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(s.a.Component));n(64);var y=function(){return Object(O.jsxs)("div",{className:"about_container",children:[Object(O.jsx)("span",{children:"..."}),Object(O.jsx)("span",{children:"..."})]})},g=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(O.jsx)("span",{children:e.state.title}):null}}]),n}(s.a.Component);n(65);var _=function(){return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)(i.b,{to:"/",children:"Home"}),Object(O.jsx)(i.b,{to:"/about",children:"About"})]})};var N=function(){return Object(O.jsxs)(i.a,{children:[Object(O.jsx)(_,{}),Object(O.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(O.jsx)(o.a,{path:"/about",component:y}),Object(O.jsx)(o.a,{path:"/movie/:id",component:g})]})};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.0f9d101f.chunk.js.map