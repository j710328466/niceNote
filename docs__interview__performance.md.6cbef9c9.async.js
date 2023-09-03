(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{S3xV:function(e,a,n){"use strict";n.r(a);var t=n("xwgP"),c=n.n(t),l=n("IqgK"),r=n("INx8"),i=c.a.memo((e=>{e.demos;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"\u6027\u80fd"},c.a.createElement(l["AnchorLink"],{to:"#\u6027\u80fd","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u6027\u80fd"),c.a.createElement("h2",{id:"1-\u4e0d\u8981\u7528-eval"},c.a.createElement(l["AnchorLink"],{to:"#1-\u4e0d\u8981\u7528-eval","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"1. \u4e0d\u8981\u7528 Eval"),c.a.createElement("p",null,"eval \u7684\u4f5c\u7528\u662f\u5c06\u7528\u6237\u8f93\u5165\u7684\u5b57\u7b26\u4e32\u8f6c\u5316\u4e3a\u53ef\u6267\u884c\u7684\u4ee3\u7801\uff0c\u7c7b\u4f3c\u6b3a\u9a97\u7684\u6548\u679c\uff0c\u8fd9\u6837\u7684\u574f\u5904\u662f\u4f1a\u53d7\u5230 XSS \u653b\u51fb\u3002"),c.a.createElement("h2",{id:"2-\u4f7f\u7528-strict-\u6a21\u5f0f"},c.a.createElement(l["AnchorLink"],{to:"#2-\u4f7f\u7528-strict-\u6a21\u5f0f","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"2. \u4f7f\u7528 strict \u6a21\u5f0f"),c.a.createElement("p",null,"\u4e25\u683c\u6a21\u5f0f\u4e0b\u7684\u53d8\u91cf ",c.a.createElement("strong",null,"\u91cd\u590d\u58f0\u660e")," \u7b49\u64cd\u4f5c\u4f1a\u629b\u51fa\u4e00\u4e9b\u9690\u85cf\u7684\u9519\u8bef\u3002"),c.a.createElement(r["a"],{code:"'use strict'\nvar obj = {\n  a: '1',\n  a: '2'\n}\n// \u629b\u51fa\u9519\u8bef syntax error",lang:"javascript"}),c.a.createElement("h2",{id:"3-\u4f7f\u7528-eslint-\u6d4b\u8bd5\u4ee3\u7801\u89c4\u8303"},c.a.createElement(l["AnchorLink"],{to:"#3-\u4f7f\u7528-eslint-\u6d4b\u8bd5\u4ee3\u7801\u89c4\u8303","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"3. \u4f7f\u7528 Eslint \u6d4b\u8bd5\u4ee3\u7801\u89c4\u8303"),c.a.createElement("p",null,"\u53ef\u4ee5\u4f7f\u6211\u4eec\u65e9\u671f\u6355\u83b7\u4e00\u4e9b bug\uff0c\u5e76\u53ca\u65f6\u4fee\u6b63\u3002"),c.a.createElement("h2",{id:"4-\u5168\u9762\u6d4b\u8bd5"},c.a.createElement(l["AnchorLink"],{to:"#4-\u5168\u9762\u6d4b\u8bd5","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"4. \u5168\u9762\u6d4b\u8bd5"),c.a.createElement("p",null,"\u6d4b\u8bd5\u5f88\u91cd\u8981\uff0c\u4e0d\u4f46\u5355\u5143\u8981\u6d4b\u8bd5\uff0c\u8fd8\u8981\u5168\u9762\u6d4b\u8bd5\uff0c\u4f8b\u5982\u7528 mocha \u6d4b\u8bd5\u4ee3\u7801\u8986\u76d6\u7387\u3002"),c.a.createElement("h2",{id:"5-unix-\u4e0b\u4e0d\u8981\u76f4\u63a5\u4f7f\u7528-sudo-node-appjs"},c.a.createElement(l["AnchorLink"],{to:"#5-unix-\u4e0b\u4e0d\u8981\u76f4\u63a5\u4f7f\u7528-sudo-node-appjs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"5. Unix \u4e0b\u4e0d\u8981\u76f4\u63a5\u4f7f\u7528 sudo node app.js"),c.a.createElement("p",null,"\u8fd9\u6837\u5982\u679c\u4ea7\u751f\u9519\u8bef\uff0c\u4f1a\u8ba9\u6574\u4e2a\u7cfb\u7edf\u5b95\u673a\uff0c\u53ef\u4ee5\u4f7f\u7528 nginx \u53cd\u5411\u4ee3\u7406\u3002"),c.a.createElement("h2",{id:"6-\u907f\u514d-shell-command-\u6ce8\u5165"},c.a.createElement(l["AnchorLink"],{to:"#6-\u907f\u514d-shell-command-\u6ce8\u5165","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"6. \u907f\u514d shell command \u6ce8\u5165"),c.a.createElement(r["a"],{code:"child_process.exec('ls', function (err, data) {\n    console.log(data);\n});",lang:"unknown"}),c.a.createElement("p",null,"\u4e0a\u9762\u7684 child_process.exec \u8c03\u7528\u7684\u662f /bin/sh ,\u4e5f\u5c31\u662f\u6267\u884c\u4e86\u4e00\u4e2a\u89e3\u91ca\u5668\u3002"),c.a.createElement("blockquote",null,c.a.createElement("p",null,"\u4e3a\u4e86\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\uff1achild_process.execFile\u3002")),c.a.createElement("h2",{id:"7-\u4e34\u65f6\u6587\u4ef6"},c.a.createElement(l["AnchorLink"],{to:"#7-\u4e34\u65f6\u6587\u4ef6","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"7. \u4e34\u65f6\u6587\u4ef6"),c.a.createElement("p",null,"\u521b\u5efa\u6587\u4ef6\u65f6\uff0c\u5904\u7406\u4e0a\u4f20\u7684\u6587\u4ef6\u8981\u6ce8\u610f\uff0c\u8fd9\u4e9b\u6587\u4ef6\u53ef\u80fd\u4f1a\u5403\u6389\u4f60\u7684\u78c1\u76d8\u6240\u6709\u7a7a\u95f4\u3002"),c.a.createElement("blockquote",null,c.a.createElement("p",null,"\u4f7f\u7528 Streams\u3002")),c.a.createElement("h2",{id:"8-\u52a0\u5bc6-web-\u5e94\u7528"},c.a.createElement(l["AnchorLink"],{to:"#8-\u52a0\u5bc6-web-\u5e94\u7528","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"8. \u52a0\u5bc6 Web \u5e94\u7528"),c.a.createElement("p",null,"\u7528 https \u4ee3\u66ff http\uff0c\u8bf7\u6c42\u7684\u8fc7\u7a0b\u53ef\u4ee5\u6dfb\u52a0\u7b7e\u540d\u5934\u3002"),c.a.createElement("h2",{id:"9-reflected-cross-site-scripting"},c.a.createElement(l["AnchorLink"],{to:"#9-reflected-cross-site-scripting","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"9. Reflected Cross Site Scripting"),c.a.createElement("p",null,"\u4e5f\u5c31\u662f\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff0c\u5c31\u662f\u4f46\u7528\u6237\u53d1\u9001\u4e00\u6bb5\u6570\u636e\uff0c\u5982\u679c\u5728\u672a\u505a\u4efb\u4f55\u5904\u7406\u7684\u60c5\u51b5\u4e0b\u76f4\u63a5\u63d2\u5165 DOM\uff0c\u8fd9\u53ef\u80fd\u4f1a\u51fa\u73b0\u5b89\u5168\u95ee\u9898\uff0c\u4f8b\u5982\uff1a"),c.a.createElement(r["a"],{code:"//\u7528\u6237\u8f93\u5165\u7684\u6570\u636e\u4e2d\u5e26\u811a\u672c\uff0c\u5982\u679c\u4e0d\u505a\u5904\u7406\uff0c\u4f1a\u88ab\u6267\u884c\u3002\nIm human <script>alert('I\u2018m hacker')<script>",lang:"javascript"}),c.a.createElement("blockquote",null,c.a.createElement("p",null,"\u5904\u7406\u65b9\u5f0f\uff1a1. \u5bf9\u63d2\u5165\u7684\u6570\u636e\u8fdb\u884c\u9a8c\u8bc1\uff0c\u9664\u53bb HTML\u3002")),c.a.createElement("h2",{id:"10-\u770b\u597d\u4f60\u7684-cookie"},c.a.createElement(l["AnchorLink"],{to:"#10-\u770b\u597d\u4f60\u7684-cookie","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"10. \u770b\u597d\u4f60\u7684 cookie"),c.a.createElement("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0ccookie \u53ef\u4ee5\u901a\u8fc7 js \u5728\u540c\u4e00\u4e2a\u57df\u4e2d\u8bfb\u53d6\uff0c\u8fd9\u5c31\u6709\u53ef\u80fd\u4f1a\u88ab\u8de8\u7ad9\u70b9\u811a\u672c\u653b\u51fb\uff0c\u800c\u4e14\u53ef\u80fd\u88ab\u7b2c\u4e09\u65b9\u5e93\u8bfb\u53d6\u3002\u4e3a\u4e86\u5904\u7406\u8fd9\u79cd\u60c5\u51b5\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 cookies \u4e0a\u4f7f\u7528 HTTPOnly\uff0c\u8fd9\u4e2a\u6807\u7b7e\u53ef\u4ee5\u8ba9 js \u65e0\u6cd5\u8bfb\u53d6\u3002"),c.a.createElement("h2",{id:"11-\u5185\u5bb9\u5b89\u5168\u7b56\u7565csp"},c.a.createElement(l["AnchorLink"],{to:"#11-\u5185\u5bb9\u5b89\u5168\u7b56\u7565csp","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"11. \u5185\u5bb9\u5b89\u5168\u7b56\u7565\uff08CSP\uff09"),c.a.createElement("p",null,"\u9644\u52a0\u7684\u5b89\u5168\u5c42\uff0c\u53ef\u4ee5\u68c0\u6d4b\u548c\u7f13\u89e3\u67d0\u7c7b\u653b\u51fb\uff0c\u4f8b\u5982\uff1aXSS\u3001\u6570\u636e\u6ce8\u5165\u3002\u542f\u7528\u65b9\u6cd5\u5982\u4e0b\uff1a"),c.a.createElement(r["a"],{code:"Content-Security-Policy: default-src 'self' *.mydomain.com",lang:"unknown"}),c.a.createElement("h2",{id:"12-cross-site-request-forgery"},c.a.createElement(l["AnchorLink"],{to:"#12-cross-site-request-forgery","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"12. Cross-Site Request Forgery"),c.a.createElement("p",null,"\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\u662f\u4e00\u79cd\u8feb\u4f7f\u7ec8\u7aef\u7528\u6237\u5728\u4ed6\u76ee\u524d\u5df2\u9a8c\u8bc1\u6388\u6743\u7684Web\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6267\u884c\u5176\u5b83\u7684actions\u3002node \u793e\u533a\u5df2\u5b9e\u73b0\uff0c\u53ef\u4ee5\u4f7f\u7528\u540c\u6b65\u4ee4\u724c\u6a21\u5f0f\u5904\u7406\u3002")))}));a["default"]=e=>{var a=c.a.useContext(l["context"]),n=a.demos;return c.a.useEffect((()=>{var a;null!==e&&void 0!==e&&null!==(a=e.location)&&void 0!==a&&a.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),c.a.createElement(i,{demos:n})}}}]);