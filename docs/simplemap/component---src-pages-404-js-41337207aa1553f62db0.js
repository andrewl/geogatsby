(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(154),o=a(161),s=a(4),l=a.n(s),c=a(162),u=a.n(c);function d(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,s=e.title,l=o.data.site,c=t||l.siteMetadata.description;return r.a.createElement(u.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired};var p=d;t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(p,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},148:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Simple Leaflet Map"}}}}},153:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(56),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},154:function(e,t,a){"use strict";var n=a(152),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(33),c=a.n(l),u=(a(148),i.a.createContext({})),d=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};var p=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};p.propTypes={siteTitle:s.a.string},p.defaultProps={siteTitle:""};var m=p,g=(a(155),function(e){var t=e.children;return i.a.createElement(d,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});g.propTypes={children:s.a.node.isRequired};t.a=g},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Simple Leaflet Map",description:"Demonstrating how to embed a simple map into your Gatsby site using Leaflet",author:"@andrewl"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-41337207aa1553f62db0.js.map