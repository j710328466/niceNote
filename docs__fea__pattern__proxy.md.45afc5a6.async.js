(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"53YT":function(e,n,t){"use strict";t.r(n);var a=t("xwgP"),r=t.n(a),o=t("OS9G"),c=t("W+6v");t("Rsk4");n["default"]=e=>(r.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u4ee3\u7406\u6a21\u5f0f"},r.a.createElement(o["AnchorLink"],{to:"#\u4ee3\u7406\u6a21\u5f0f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7406\u6a21\u5f0f"),r.a.createElement(c["a"],{code:"/**\n * \u4ee3\u7406\u6a21\u5f0f\n */\nexport default class ProxyPro {\n    constructor(args) {\n        return new Proxy(args, {\n            get: function (target, key, receiver) {\n                // console.log(target, key, receiver);\n                console.log(`\u83b7\u53d6 ${key}`)\n                return Reflect.get(target, key, receiver)\n            },\n            set: function (target, key, value, reciver) {\n                console.log(`\u8bbe\u7f6e ${key} \u4e3a ${value}`)\n                return Reflect.set(target, key, value, reciver)\n            }\n        })\n    }\n}",lang:"js"}))))}}]);