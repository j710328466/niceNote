(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{P0G4:function(e,t,a){},Suj0:function(e,t,a){"use strict";var n=a("xwgP"),l=a.n(n),r=a("q3Yw"),c=a.n(r);a("P0G4");function i(e,t){return E(e)||d(e,t)||o(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function d(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,i=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(m){i=!0,l=m}finally{try{c||null==a["return"]||a["return"]()}finally{if(i)throw l}}return r}}function E(e){if(Array.isArray(e))return e}var g=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),m=i(r,2),o=m[0],s=m[1],d=Object(n["useState"])(!1),E=i(d,2),g=E[0],u=E[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){s(e.scrollLeft>0),u(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":o||void 0,"data-right-folded":g||void 0},l.a.createElement("table",null,t)))};t["a"]=g},"VR+z":function(e,t,a){"use strict";a.r(t);var n=a("xwgP"),l=a.n(n),r=a("nFtg"),c=a("Suj0"),i=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"-\u5b66\u4e60\u6587\u6863"},l.a.createElement(r["AnchorLink"],{to:"#-\u5b66\u4e60\u6587\u6863","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83d\udc8a \u5b66\u4e60\u6587\u6863"),l.a.createElement("h3",{id:"ts-\u5b66\u4e60"},l.a.createElement(r["AnchorLink"],{to:"#ts-\u5b66\u4e60","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"TS \u5b66\u4e60"),l.a.createElement(c["a"],null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"http://ts.xcatliu.com/",target:"_blank"},l.a.createElement("img",{src:"http://ts.xcatliu.com/favicon.png",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"TS-book"),l.a.createElement("div",null,"Ts \u5165\u95e8\u6559\u7a0b")))))),l.a.createElement("h3",{id:"\u5916\u5305\u6a21\u677f"},l.a.createElement(r["AnchorLink"],{to:"#\u5916\u5305\u6a21\u677f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5916\u5305\u6a21\u677f"),l.a.createElement(c["a"],null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://panjiachen.github.io/vue-element-admin-site/zh/",target:"_blank"},l.a.createElement("img",{src:"https://panjiachen.github.io/vue-element-admin-site/home.png",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"vue-admin"),l.a.createElement("div",null,"Vue \u4e2d\u53f0\u89e3\u51b3\u65b9\u6848"))),l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://pro.ant.design/zh-CN/",target:"_blank"},l.a.createElement("img",{src:"https://pro.ant.design/favicon.png",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"antd-pro"),l.a.createElement("div",null,"react \u4e2d\u53f0\u89e3\u51b3\u65b9\u6848")))))),l.a.createElement("h3",{id:"\u524d\u6cbf\u6280\u672f"},l.a.createElement(r["AnchorLink"],{to:"#\u524d\u6cbf\u6280\u672f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u524d\u6cbf\u6280\u672f"),l.a.createElement(c["a"],null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://deno.land/",target:"_blank"},l.a.createElement("img",{src:"https://deno.land/logo.svg",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"deno"),l.a.createElement("div",null,"\u65b0\u751f\u4ee3 node"))),l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://lerna.js.org/",target:"_blank"},l.a.createElement("img",{src:"https://lerna.js.org/images/lerna-hero.svg",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"Lerna"),l.a.createElement("div",null,"\u5305\u7ba1\u7406\u5668"))),l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://ant.design/",target:"_blank"},l.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"antd"),l.a.createElement("div",null,"react UI\u6846\u67b6")))))),l.a.createElement("h3",{id:"\u52a8\u753b\u5e93"},l.a.createElement(r["AnchorLink"],{to:"#\u52a8\u753b\u5e93","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u52a8\u753b\u5e93"),l.a.createElement(c["a"],null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://airbnb.io/lottie/#/README",target:"_blank"},l.a.createElement("img",{src:"https://airbnb.io/lottie/images/logo.webp",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"Bodymovin"),l.a.createElement("div",null,"UI\u52a8\u753b\u751f\u6210\u5e93"))),l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://matthew.wagerfield.com/parallax/",target:"_blank"},l.a.createElement("img",{src:"http://matthew.wagerfield.com/parallax/favicon.png",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"parallaxJs"),l.a.createElement("div",null,"\u89c6\u5dee\u52a8\u753b\u5e93"))),l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://dixonandmoe.com/rellax/",target:"_blank"},l.a.createElement("img",{src:"http://matthew.wagerfield.com/parallax/favicon.png",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"rellaxJs"),l.a.createElement("div",null,"mini \u89c6\u5dee\u52a8\u753b\u5e93")))),l.a.createElement("tr",null,l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://svgjs.dev/docs/3.0/",target:"_blank"},l.a.createElement("img",{src:"https://svgjs.dev/docs/3.0/assets/images/logo-svg-js-01d-128.png",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"SvgJs"),l.a.createElement("div",null,"svg\u5de5\u5177\u5e93"))),l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://mojs.github.io/",target:"_blank"},l.a.createElement("img",{src:"https://mojs.github.io/assets/img/logo.svg",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"MoJs"),l.a.createElement("div",null,"motion\u52a8\u753b\u5e93"))),l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://zzz.dog/",target:"_blank"},l.a.createElement("img",{src:"https://zzz.dog/img/solids.png",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"zdogJs"),l.a.createElement("div",null,"\u4f2a3D\u5f15\u64ce\u5e93")))))),l.a.createElement("h3",{id:"react-\u65b9\u5411"},l.a.createElement(r["AnchorLink"],{to:"#react-\u65b9\u5411","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"React \u65b9\u5411"),l.a.createElement(c["a"],null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://antv.vision/zh",target:"_blank"},l.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"antv"),l.a.createElement("div",null,"react \u6570\u636e\u53ef\u89c6\u5316\u65b9\u6848"))),l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://nicecoders.github.io/",target:"_blank"},l.a.createElement("img",{src:"http://jzx-h5.oss-cn-hangzhou.aliyuncs.com/logo.png",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"NiceCode"),l.a.createElement("div",null,"\u805a\u5408\u5de5\u5177\u5e93"))),l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://ant.design/",target:"_blank"},l.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"antd"),l.a.createElement("div",null,"react UI\u6846\u67b6")))),l.a.createElement("tr",null,l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://ahooks.js.org/",target:"_blank"},l.a.createElement("img",{src:"https://ahooks.js.org/logo.svg"}),l.a.createElement("br",null),l.a.createElement("strong",null,"ahooks"),l.a.createElement("div",null,"react hook \u62d3\u5c55\u5e93"))),l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://mobile.ant.design/index-cn",target:"_blank"},l.a.createElement("img",{src:"https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"ant-mobile"),l.a.createElement("div",null,"react \u79fb\u52a8\u7aefUI\u6846\u67b6"))),l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://motion.ant.design/index-cn",target:"_blank"},l.a.createElement("img",{src:"https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"ant-motion"),l.a.createElement("div",null,"react \u52a8\u6548\u5e93")))),l.a.createElement("tr",null,l.a.createElement("td",{width:160,align:"center"},l.a.createElement(r["Link"],{to:"https://qiankun.umijs.org/",target:"_blank"},l.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"qiankun"),l.a.createElement("div",null,"\u5fae\u5e94\u7528\u6846\u67b6"))),l.a.createElement("td",{width:160,align:"center"},l.a.createElement(r["Link"],{to:"https://umijs.org/",target:"_blank"},l.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/bmw-prod/598d14af-4f1c-497d-b579-5ac42cd4dd1f/k7bjua9c_w132_h130.png",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"UmiJS"),l.a.createElement("div",null,"react \u4f01\u4e1a\u7ea7\u5e94\u7528\u6846\u67b6"))),l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://scaffold.ant.design/",target:"_blank"},l.a.createElement("img",{src:"https://zos.alipayobjects.com/rmsportal/HXZvKsbcQljpFToWbjPj.svg",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"scaffold"),l.a.createElement("div",null,"\u811a\u624b\u67b6\u5e02\u573a")))),l.a.createElement("tr",null,l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://nextjs.org/",target:"_blank"},l.a.createElement("img",{src:"https://nextjs.org/static/favicon/safari-pinned-tab.svg",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"NextJs"),l.a.createElement("div",null,"\u670d\u52a1\u7aef\u6e32\u67d3\u65b9\u6848")))))),l.a.createElement("h3",{id:"vue-\u65b9\u5411"},l.a.createElement(r["AnchorLink"],{to:"#vue-\u65b9\u5411","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Vue \u65b9\u5411"),l.a.createElement(c["a"],null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://cn.vuejs.org/",target:"_blank"},l.a.createElement("img",{src:"https://cn.vuejs.org/images/logo.svg",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"vue"),l.a.createElement("div",null,"\u6e10\u8fdb\u5f0f\u6846\u67b6"))),l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://www.iviewui.com/",target:"_blank"},l.a.createElement("img",{src:"https://file.iviewui.com/dist/d6fcbeecd3f5ff1b1dd0a0f68bdf6ce7.svg",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"IView"),l.a.createElement("div",null,"vue UI\u6846\u67b6"))),l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://zh.nuxtjs.org/",target:"_blank"},l.a.createElement("img",{src:"https://zh.nuxtjs.org/_nuxt/icons/icon_512x512.c20795.png",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"Nuxt"),l.a.createElement("div",null,"vue \u670d\u52a1\u7aef\u6e32\u67d3\u65b9\u6848")))))),l.a.createElement("h3",{id:"node-\u65b9\u5411"},l.a.createElement(r["AnchorLink"],{to:"#node-\u65b9\u5411","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Node \u65b9\u5411"),l.a.createElement(c["a"],null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://antv.vision/zh",target:"_blank"},l.a.createElement("img",{src:"https://gw.alicdn.com/tfs/TB1eGsrk79l0K4jSZFKXXXFjpXa-347-340.png",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"midway"),l.a.createElement("div",null,"\u4f01\u4e1a\u7ea7 node \u6846\u67b6"))),l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://cnodejs.org/",target:"_blank"},l.a.createElement("img",{src:"https://static2.cnodejs.org/public/images/cnode_icon_64.png",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"CNode"),l.a.createElement("div",null,"Node.js \u5f00\u6e90\u6280\u672f\u793e\u533a"))),l.a.createElement("td",{width:240,align:"center"},l.a.createElement(r["Link"],{to:"https://www.koajs.com.cn/",target:"_blank"},l.a.createElement("img",{src:"https://tva1.sinaimg.cn/large/008i3skNly1gu7waxo9bxj60jk09s3ym02.jpg",width:42}),l.a.createElement("br",null),l.a.createElement("strong",null,"Koa"),l.a.createElement("div",null,"Node \u5f00\u53d1\u6846\u67b6"))))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:a})}}}]);