(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(160),o=a(167),s=a(4),l=a.n(s),c=a(168),d=a.n(c);function u(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,s=e.title,l=o.data.site,c=t||l.siteMetadata.description;return r.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired};var p=u;t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(p,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},150:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Simple Leaflet Map"}}}}},159:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(56),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},160:function(e,t,a){"use strict";var n=a(154),r=a(148),i=a.n(r),o=a(149),s=a.n(o),l=a(0),c=a.n(l),d=a(4),u=a.n(d),p=a(33),m=a.n(p),g=(a(150),c.a.createContext({})),y=function(e){return c.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};y.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func};var f=function(e){e.siteTitle;return i.a.createElement("header",{style:{background:"#006600",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(m.a,{to:"/",style:{color:"white",textDecoration:"none"}},"Mapping with GatsbyJS"))))};f.propTypes={siteTitle:s.a.string},f.defaultProps={siteTitle:"aaaaa"};var h=f,w=(a(161),function(e){var t=e.children;return i.a.createElement(y,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built by ",i.a.createElement("a",{href:"https://www.andrewl.net"},"Andrew Larcombe")," with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});w.propTypes={children:s.a.node.isRequired};t.a=w},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Simple Leaflet Map",description:"Demonstrating how to embed a simple map into your Gatsby site using Leaflet",author:"@andrewl"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-0c17fd2bc0a428dac1ca.js.map