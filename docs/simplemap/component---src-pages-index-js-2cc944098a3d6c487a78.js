(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(154),o=a(7),l=a.n(o),s=a(4),u=a.n(s),p=a(176),c=a(177),m=a(175),d=a(178),f=(a(170),function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return n.a.createElement(p.a,{center:this.props.position,zoom:this.props.zoom},n.a.createElement(c.a,{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),""!==this.props.markerText&&n.a.createElement(m.a,{position:this.props.position},n.a.createElement(d.a,null,this.props.markerText)))},t}(n.a.Component));f.propTypes={position:u.a.array,zoom:u.a.number,markerText:u.a.string},f.defaultProps={position:[51,-1],zoom:13,markerText:""};var h=f;t.default=function(){return n.a.createElement(i.a,null,n.a.createElement("h1",null,"Simple Leaflet Map"),"undefined"!=typeof window&&n.a.createElement(h,{position:[52,-.5],zoom:8,markerText:"Hello, this is a marker"}))}},148:function(e,t,a){var r;e.exports=(r=a(153))&&r.default||r},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Simple Leaflet Map"}}}}},153:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),i=a(4),o=a.n(i),l=a(56),s=a(2),u=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},154:function(e,t,a){"use strict";var r=a(152),n=a(0),i=a.n(n),o=a(4),l=a.n(o),s=a(33),u=a.n(s),p=(a(148),i.a.createContext({})),c=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func};var m=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(u.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};m.propTypes={siteTitle:l.a.string},m.defaultProps={siteTitle:""};var d=m,f=(a(155),function(e){var t=e.children;return i.a.createElement(c,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:r})});f.propTypes={children:l.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-index-js-2cc944098a3d6c487a78.js.map