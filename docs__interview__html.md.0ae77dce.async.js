(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{WpQk:function(e,n,t){},"dMo/":function(e,n,t){"use strict";var a=t("q1tI"),l=t.n(a),r=t("hKI/"),i=t.n(r);t("WpQk");function c(e,n){return u(e)||s(e,n)||m(e,n)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,n){if(e){if("string"===typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,n):void 0}}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function s(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,l,r=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(a=t.next()).done);i=!0)if(r.push(a.value),n&&r.length===n)break}catch(o){c=!0,l=o}finally{try{i||null==t["return"]||t["return"]()}finally{if(c)throw l}}return r}}function u(e){if(Array.isArray(e))return e}var E=function(e){var n=e.children,t=Object(a["useRef"])(),r=Object(a["useState"])(!1),o=c(r,2),m=o[0],d=o[1],s=Object(a["useState"])(!1),u=c(s,2),E=u[0],h=u[1];return Object(a["useEffect"])((function(){var e=t.current,n=i()((function(){d(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return n(),e.addEventListener("scroll",n),window.addEventListener("resize",n),function(){e.removeEventListener("scroll",n),window.removeEventListener("resize",n)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:t,"data-left-folded":m||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,n)))};n["a"]=E},v2Y3:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=t("dEAq"),i=t("H1Ra"),c=t("dMo/"),o=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"html"},l.a.createElement(r["AnchorLink"],{to:"#html","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"HTML"),l.a.createElement("h2",{id:"\u5f00\u53d1\u80fd\u529b\u6a21\u578b"},l.a.createElement(r["AnchorLink"],{to:"#\u5f00\u53d1\u80fd\u529b\u6a21\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5f00\u53d1\u80fd\u529b\u6a21\u578b"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u57fa\u7840\u5f00\u53d1 - \u54cd\u5e94\u5f0f\u5f00\u53d1 - \u6ed1\u5c4f\u5e94\u7528\u5f00\u53d1 - \u52a8\u753b\u6548\u679c\u5f00\u53d1 - \u6e38\u620f\u5f00\u53d1")),l.a.createElement("h2",{id:"\u57fa\u7840\u9875\u9762\u5f00\u53d1"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u9875\u9762\u5f00\u53d1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u9875\u9762\u5f00\u53d1"),l.a.createElement("h3",{id:"\u4e00\u601d\u8003\u6d41\u7a0b"},l.a.createElement(r["AnchorLink"],{to:"#\u4e00\u601d\u8003\u6d41\u7a0b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4e00\u3001\u601d\u8003\u6d41\u7a0b"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u786e\u5b9a\u8bbe\u8ba1\u7a3f\u662f\u5426\u5f00\u53d1\u53cb\u597d\uff1f\u8fd8\u539f\u6210\u672c\uff1f"),l.a.createElement("li",null,"\u786e\u5b9a\u7279\u6b8a\u5143\u7d20\u662f\u5426\u6709\u5408\u7406\u7684\u8fb9\u754c\u5904\u7406\uff08\u6bd4\u5982\u6587\u6848\u8d85\u51fa\u3001\u8f93\u5165\u6846\u6587\u6848\u6821\u9a8c\uff09"),l.a.createElement("li",null,"\u786e\u5b9a\u9875\u9762\u6846\u67b6\u7ed3\u6784\uff1aLayout"),l.a.createElement("li",null,"\u786e\u5b9a\u6574\u4f53\u7f51\u9875\u53ef\u590d\u7528\u6027\u7ec4\u4ef6\uff1aSite component"),l.a.createElement("li",null,"\u786e\u5b9a\u5f53\u524d\u9875\u9762\u53ef\u590d\u7528\u7ec4\u4ef6\uff1aPage component")),l.a.createElement("h3",{id:"\u4e8c\u7f16\u5199\u9875\u9762\u9aa8\u9abc\u6846\u67b6"},l.a.createElement(r["AnchorLink"],{to:"#\u4e8c\u7f16\u5199\u9875\u9762\u9aa8\u9abc\u6846\u67b6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4e8c\u3001\u7f16\u5199\u9875\u9762\u9aa8\u9abc\u6846\u67b6"),l.a.createElement("h4",{id:"\u76d2\u6a21\u578b"},l.a.createElement(r["AnchorLink"],{to:"#\u76d2\u6a21\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u76d2\u6a21\u578b"),l.a.createElement("p",null,"margin\u3001border\u3001padding\u3001content \u533a\u5206\u5143\u7d20\u5bbd\u5ea6\u548c\u76d2\u5b50\u5bbd\u5ea6\uff08\u662f\u5426\u5305\u62ecmargin\uff0c\u5728css3\u6837\u5f0f\u4e2d\u53ef\u4ee5\u4f7f\u7528\uff1abox-sizing\uff1acontent-box\u3001border-box\uff09"),l.a.createElement("h4",{id:"\u5e03\u5c40"},l.a.createElement(r["AnchorLink"],{to:"#\u5e03\u5c40","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5e03\u5c40"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u666e\u901a\u6587\u6863\u5e03\u5c40\uff08display\uff09"),l.a.createElement("li",null,"\u6d6e\u52a8\u5e03\u5c40\uff08float\uff09"),l.a.createElement("li",null,"\u7edd\u5bf9\u5e03\u5c40\uff08position\uff09"),l.a.createElement("li",null,"\u5f39\u6027\u5e03\u5c40\uff08display\uff1aflex\uff09"),l.a.createElement("li",null,"\u7f51\u683c\u5e03\u5c40\uff08grad\uff09")),l.a.createElement("h4",{id:"\u8bed\u4e49\u5316"},l.a.createElement(r["AnchorLink"],{to:"#\u8bed\u4e49\u5316","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u4e49\u5316"),l.a.createElement("p",null,l.a.createElement("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/195884/1598154888954-152e1a38-b189-4bbf-8a5e-49720f81fb1b.png#height=1192&id=swYj7&margin=%5Bobject%20Object%5D&name=%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202020-08-23%20%E4%B8%8A%E5%8D%8811.54.26.png&originHeight=1192&originWidth=1312&originalType=binary&ratio=1&size=408275&status=done&style=none&width=1312",alt:"\u5c4f\u5e55\u5feb\u7167 2020-08-23 \u4e0a\u534811.54.26.png"})),l.a.createElement("h3",{id:"\u4e09\u586b\u5145\u7f51\u9875\u8840\u8089\u5185\u5bb9"},l.a.createElement(r["AnchorLink"],{to:"#\u4e09\u586b\u5145\u7f51\u9875\u8840\u8089\u5185\u5bb9","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4e09\u3001\u586b\u5145\u7f51\u9875\u8840\u8089\u5185\u5bb9"),l.a.createElement("p",null,"\u5207\u56fe\u53ef\u4ee5\u4f7f\u7528 PS \u7684\u300c\u751f\u6210 > \u56fe\u50cf\u8d44\u6e90\u300d"),l.a.createElement("h3",{id:"\u56db\u6da6\u8272"},l.a.createElement(r["AnchorLink"],{to:"#\u56db\u6da6\u8272","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u56db\u3001\u6da6\u8272"),l.a.createElement("p",null,"\u4f7f\u7528bem\u65b9\u5f0f\u547d\u540d class\uff08block\u3001element\u3001modify\uff09"),l.a.createElement("h3",{id:"\u517c\u5bb9\u6027\u6d4b\u8bd5"},l.a.createElement(r["AnchorLink"],{to:"#\u517c\u5bb9\u6027\u6d4b\u8bd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u517c\u5bb9\u6027\u6d4b\u8bd5"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u9875\u9762\u5728\u5404\u6d4f\u89c8\u5668\uff0c\u4e0d\u540c\u5206\u8fa8\u7387\u4e0b\u662f\u5426\u80fd\u6b63\u5e38\u5c55\u793a"),l.a.createElement("li",null,"\u7f51\u9875\u7684\u529f\u80fd\u662f\u5426\u80fd\u5728\u5404\u4e2a\u6d4f\u89c8\u5668\u4e2d\u4f7f\u7528")),l.a.createElement("h2",{id:"\u54cd\u5e94\u5f0f\u9875\u9762"},l.a.createElement(r["AnchorLink"],{to:"#\u54cd\u5e94\u5f0f\u9875\u9762","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u54cd\u5e94\u5f0f\u9875\u9762"),l.a.createElement("h3",{id:"\u4e00\u6dfb\u52a0-viewport-meta-\u6807\u7b7e"},l.a.createElement(r["AnchorLink"],{to:"#\u4e00\u6dfb\u52a0-viewport-meta-\u6807\u7b7e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4e00\u3001\u6dfb\u52a0 viewport meta \u6807\u7b7e"),l.a.createElement("h4",{id:"pagespeed-\u51c6\u5219"},l.a.createElement(r["AnchorLink"],{to:"#pagespeed-\u51c6\u5219","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"pageSpeed \u51c6\u5219"),l.a.createElement("p",null,"\u63a8\u8350\u5728\u79fb\u52a8\u7aef\u5934\u6587\u4ef6\u4e2d\uff0c\u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801\uff1a"),l.a.createElement("blockquote",null,l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})),l.a.createElement("h3",{id:"\u4e8c\u4f7f\u7528-media-queries"},l.a.createElement(r["AnchorLink"],{to:"#\u4e8c\u4f7f\u7528-media-queries","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4e8c\u3001\u4f7f\u7528 Media Queries"),l.a.createElement("h4",{id:"\u516d\u4e2a\u53c2\u6570"},l.a.createElement(r["AnchorLink"],{to:"#\u516d\u4e2a\u53c2\u6570","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u516d\u4e2a\u53c2\u6570"),l.a.createElement(c["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570\u540d"),l.a.createElement("th",null,"\u63cf\u8ff0"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"min-width"),l.a.createElement("td",null,"\u5f53\u89c6\u7a97\u5bbd\u5ea6\u5927\u4e8e\u6216\u7b49\u4e8e\u6307\u5b9a\u503c\u65f6\uff0c@media \u89c4\u5219\u4e0b\u7684\u6837\u5f0f\u5c06\u88ab\u5e94\u7528")),l.a.createElement("tr",null,l.a.createElement("td",null,"max-width"),l.a.createElement("td",null,"\u5f53\u89c6\u7a97\u5bbd\u5ea6\u5c0f\u4e8e\u6216\u7b49\u4e8e\u6307\u5b9a\u503c\u65f6\uff0c@media \u89c4\u5219\u4e0b\u7684\u6837\u5f0f\u5c06\u88ab\u5e94\u7528")),l.a.createElement("tr",null,l.a.createElement("td",null,"min-height"),l.a.createElement("td",null,"\u5f53\u89c6\u7a97\u9ad8\u5ea6\u5927\u4e8e\u6216\u7b49\u4e8e\u6307\u5b9a\u503c\u65f6\uff0c@media \u89c4\u5219\u4e0b\u7684\u6837\u5f0f\u5c06\u88ab\u5e94\u7528")),l.a.createElement("tr",null,l.a.createElement("td",null,"max-height"),l.a.createElement("td",null,"\u5f53\u89c6\u7a97\u9ad8\u5ea6\u5c0f\u4e8e\u6216\u7b49\u4e8e\u6307\u5b9a\u503c\u65f6\uff0c@media \u89c4\u5219\u4e0b\u7684\u6837\u5f0f\u5c06\u88ab\u5e94\u7528")),l.a.createElement("tr",null,l.a.createElement("td",null,"orientation=portrait"),l.a.createElement("td",null,"\u5f53\u89c6\u7a97\u9ad8\u5ea6\u5927\u4e8e\u6216\u7b49\u4e8e\u5bbd\u5ea6\u65f6\uff0c@media \u89c4\u5219\u4e0b\u7684\u6837\u5f0f\u5c06\u88ab\u5e94\u7528")),l.a.createElement("tr",null,l.a.createElement("td",null,"orientation=landscape"),l.a.createElement("td",null,"\u5f53\u89c6\u7a97\u5bbd\u5ea6\u5927\u4e8e\u9ad8\u5ea6\u65f6\uff0c@media \u89c4\u5219\u4e0b\u7684\u6837\u5f0f\u5c06\u88ab\u5e94\u7528")))),l.a.createElement("h4",{id:"2\u79cd\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#2\u79cd\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\u79cd\u7528\u6cd5"),l.a.createElement("p",null,"\u65b9\u6cd5\u4e00\uff0c\u4f7f\u7528link\u6807\u7b7e\uff1a"),l.a.createElement(i["a"],{code:'<link rel="stylesheet" media="(max-width: 640px)" href="max-640px.css">',lang:"js"}),l.a.createElement("p",null,"\u65b9\u6cd5\u4e8c\uff0c\u76f4\u63a5\u5728style\u4e2d\u4f7f\u7528\uff1a"),l.a.createElement(i["a"],{code:"@media (max-width: 640px) {\n  /*\u5f53\u89c6\u7a97\u5bbd\u5ea6\u5c0f\u4e8e\u6216\u7b49\u4e8e 640px \u65f6\uff0c\u8fd9\u91cc\u7684\u6837\u5f0f\u5c06\u751f\u6548*/\n}",lang:"js"}),l.a.createElement("h3",{id:"\u4e09\u4f7f\u7528viewport\u5355\u4f4d\u4ee5\u53carem"},l.a.createElement(r["AnchorLink"],{to:"#\u4e09\u4f7f\u7528viewport\u5355\u4f4d\u4ee5\u53carem","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4e09\u3001\u4f7f\u7528viewport\u5355\u4f4d\u4ee5\u53carem"),l.a.createElement("h4",{id:"\u65b9\u6cd5\u4e00\u4ec5\u4f7f\u7528vw\u4f5c\u4e3acss\u957f\u5ea6\u5355\u4f4d"},l.a.createElement(r["AnchorLink"],{to:"#\u65b9\u6cd5\u4e00\u4ec5\u4f7f\u7528vw\u4f5c\u4e3acss\u957f\u5ea6\u5355\u4f4d","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u65b9\u6cd5\u4e00\uff1a\u4ec5\u4f7f\u7528vw\u4f5c\u4e3acss\u957f\u5ea6\u5355\u4f4d"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u5229\u7528sass\u51fd\u6570\u5c06\u8bbe\u8ba1\u7a3f\u5c3a\u5bf8\u8f6c\u6362\u4e3avw")),l.a.createElement(i["a"],{code:"// iPhone 6\u5c3a\u5bf8\u4f5c\u4e3a\u8bbe\u8ba1\u7a3f\u57fa\u51c6\n$vw_base: 375; \n@function vw($px) {\n    @return ($px / $vm_base) * 100vw;\n}",lang:"js"}),l.a.createElement("ol",{start:2},l.a.createElement("li",null,"\u65e0\u8bba\u662f\u6587\u672c\u5b57\u53f7\u5927\u5c0f\u8fd8\u662f\u5e03\u5c40\u9ad8\u5bbd\u3001\u95f4\u8ddd\u3001\u7559\u767d\u7b49\u90fd\u4f7f\u7528 vw \u4f5c\u4e3a CSS \u5355\u4f4d")),l.a.createElement(i["a"],{code:".mod_nav {\n    background-color: #fff;\n    &_list {\n        display: flex;\n        padding: vw(15) vw(10) vw(10); // \u5185\u95f4\u8ddd\n        &_item {\n            flex: 1;\n            text-align: center;\n            font-size: vw(10); // \u5b57\u4f53\u5927\u5c0f\n            &_logo {\n                display: block;\n                margin: 0 auto;\n                width: vw(40); // \u5bbd\u5ea6\n                height: vw(40); // \u9ad8\u5ea6\n                img {\n                    display: block;\n                    margin: 0 auto;\n                    max-width: 100%;\n                }\n            }\n            &_name {\n                margin-top: vw(2);\n            }\n        }\n    }\n}",lang:"js"}),l.a.createElement("ol",{start:3},l.a.createElement("li",null,"\u7269\u7406\u50cf\u7d20\u7ebf\uff081px\uff09\uff0c\u91c7\u7528transform\u5c5e\u6027scale\u5b9e\u73b0")),l.a.createElement(i["a"],{code:".mod_grid {\n    position: relative;\n    &::after {\n        // \u5b9e\u73b01\u7269\u7406\u50cf\u7d20\u7684\u4e0b\u8fb9\u6846\u7ebf\n        content: '';\n        position: absolute;\n        z-index: 1;\n        pointer-events: none;\n        background-color: #ddd;\n        height: 1px;\n        left: 0;\n        right: 0;\n        top: 0;\n        @media only screen and (-webkit-min-device-pixel-ratio: 2) {\n            -webkit-transform: scaleY(0.5);\n            -webkit-transform-origin: 50% 0%;\n        }\n    }\n}",lang:"js"}),l.a.createElement("ol",{start:4},l.a.createElement("li",null,"\u5bf9\u4e8e\u9700\u8981\u4fdd\u6301\u9ad8\u5bbd\u6bd4\u7684\u56fe\uff0c\u4f7f\u7528padding-top\u5b9e\u73b0\uff1a")),l.a.createElement(i["a"],{code:".mod_banner {\n    position: relative;\n    // \u4f7f\u7528padding-top \u5b9e\u73b0\u5bbd\u9ad8\u6bd4\u4e3a 100:750 \u7684\u56fe\u7247\u533a\u57df\n    padding-top: percentage(100/750);\n    height: 0;\n    overflow: hidden;\n    img {\n        width: 100%;\n        height: auto;\n        position: absolute;\n        left: 0;\n        top: 0; \n    }\n}",lang:"js"}),l.a.createElement("h4",{id:"\u65b9\u6cd5\u4e8cvw\u642d\u914drem\u5bfb\u627e\u6700\u4f18\u89e3"},l.a.createElement(r["AnchorLink"],{to:"#\u65b9\u6cd5\u4e8cvw\u642d\u914drem\u5bfb\u627e\u6700\u4f18\u89e3","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u65b9\u6cd5\u4e8c\uff1avw\u642d\u914drem\uff0c\u5bfb\u627e\u6700\u4f18\u89e3"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u7ed9\u66f4\u5143\u7d20\u7684\u5b57\u4f53\u5927\u5c0f\u8bbe\u7f6e\u968f\u7740\u89c6\u7a97\u53d8\u5316\u800c\u53d8\u5316\u7684vw\u5355\u4f4d\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5b9e\u73b0\u52a8\u6001\u6539\u53d8\u5176\u5927\u5c0f"),l.a.createElement("li",null,"\u5176\u5b83\u5143\u7d20\u7684\u6587\u672c\u5b57\u5927\u5c0f\u3001\u5e03\u5c40\u9ad8\u5bbd\u3001\u95f4\u8ddd\u3001\u7559\u767d\u4f7f\u7528rem\u5355\u4f4d"),l.a.createElement("li",null,"\u9650\u5236\u6839\u5143\u7d20\u5927\u5c0f\u7684\u6700\u5927\u6700\u5c0f\u503c\uff0c\u914d\u5408 body \u52a0\u4e0a\u6700\u5927\u5bbd\u5ea6\u548c\u6700\u5c0f\u5bbd\u5ea6\uff0c\u5b9e\u73b0\u5e03\u5c40\u5bbd\u5ea6\u7684\u6700\u5927\u6700\u5c0f\u9650\u5236")),l.a.createElement("p",null,"\u6838\u5fc3\u4ee3\u7801\u5982\u4e0b\uff1a"),l.a.createElement(i["a"],{code:"// rem \u5355\u4f4d\u6362\u7b97\uff1a\u5b9a\u4e3a 75px \u53ea\u662f\u65b9\u4fbf\u8fd0\u7b97\uff0c750px-75px\u3001640-64px\u30011080px-108px\uff0c\u5982\u6b64\u7c7b\u63a8\n$vw_fontsize: 75; // iPhone 6\u5c3a\u5bf8\u7684\u6839\u5143\u7d20\u5927\u5c0f\u57fa\u51c6\u503c\n@function rem($px) {\n     @return ($px / $vw_fontsize ) * 1rem;\n}\n// \u6839\u5143\u7d20\u5927\u5c0f\u4f7f\u7528 vw \u5355\u4f4d\n$vw_design: 750;\nhtml {\n    font-size: ($vw_fontsize / ($vw_design / 2)) * 100vw; \n    // \u540c\u65f6\uff0c\u901a\u8fc7Media Queries \u9650\u5236\u6839\u5143\u7d20\u6700\u5927\u6700\u5c0f\u503c\n    @media screen and (max-width: 320px) {\n        font-size: 64px;\n    }\n    @media screen and (min-width: 540px) {\n        font-size: 108px;\n    }\n}\n// body \u4e5f\u589e\u52a0\u6700\u5927\u6700\u5c0f\u5bbd\u5ea6\u9650\u5236\uff0c\u907f\u514d\u9ed8\u8ba4100%\u5bbd\u5ea6\u7684 block \u5143\u7d20\u8ddf\u968f body \u800c\u8fc7\u5927\u8fc7\u5c0f\nbody {\n    max-width: 540px;\n    min-width: 320px;\n}",lang:"js"}),l.a.createElement("h2",{id:"\u6ed1\u5c4f\u5e94\u7528\u5f00\u53d1"},l.a.createElement(r["AnchorLink"],{to:"#\u6ed1\u5c4f\u5e94\u7528\u5f00\u53d1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6ed1\u5c4f\u5e94\u7528\u5f00\u53d1"),l.a.createElement("h3",{id:"\u5584\u7528\u5229\u5668"},l.a.createElement(r["AnchorLink"],{to:"#\u5584\u7528\u5229\u5668","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5584\u7528\u5229\u5668"),l.a.createElement("p",null,"\u719f\u7ec3\u4f7f\u7528\u73b0\u6709\u7684\u6ed1\u52a8\u7ec4\u4ef6 swiper \u6216\u8005\u5176\u5b83")))}));n["default"]=e=>{var n=l.a.useContext(r["context"]),t=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:t})}}}]);