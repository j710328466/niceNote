(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{SQ6J:function(n,e,t){"use strict";t.r(e);var a=t("xwgP"),c=t.n(a),o=t("OS9G"),r=t("W+6v");t("Rsk4");e["default"]=n=>(c.a.useEffect((()=>{var e;null!==n&&void 0!==n&&null!==(e=n.location)&&void 0!==e&&e.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h2",{id:"\u5355\u4f8b\u6a21\u5f0f"},c.a.createElement(o["AnchorLink"],{to:"#\u5355\u4f8b\u6a21\u5f0f","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u5355\u4f8b\u6a21\u5f0f"),c.a.createElement(r["a"],{code:"// ------------------- \u5355\u4f8b\u6a21\u5f0f -------------------\nexport default class Singleton {\n    constructor(name, creator, products) {\n        this.name = name\n        this.creator = creator\n        this.products = products\n    }\n\n    static getInstance(name, creator, products) {\n        if (!this.instance) {\n            this.instance = new Singleton(name, creator, products)\n        }\n        return this.instance\n    }\n}",lang:"js"}))))}}]);