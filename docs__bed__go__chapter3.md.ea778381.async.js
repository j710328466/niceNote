(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{X4GZ:function(n,e,t){"use strict";t.r(e);var a=t("xwgP"),r=t.n(a),l=t("OS9G"),o=t("W+6v");t("Rsk4");e["default"]=n=>(r.a.useEffect((()=>{var e;null!==n&&void 0!==n&&null!==(e=n.location)&&void 0!==e&&e.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u7b2c\u4e09\u7ae0"},r.a.createElement(l["AnchorLink"],{to:"#\u7b2c\u4e09\u7ae0","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u7b2c\u4e09\u7ae0"),r.a.createElement(o["a"],{code:'package main\n\nimport (\n\t"log"\n\t"net/http"\n)\n\nfunc wsHandler(w http.ResponseWriter, r *http.Request) {\n\tw.Write([]byte("hello world"))\n}\n\nfunc main() {\n\t// \u5f53\u6709\u8bf7\u6c42\u8bbf\u95eews\u65f6\uff0c\u6267\u884c\u6b64\u56de\u8c03\u65b9\u6cd5\n\thttp.HandleFunc("/ws", wsHandler)\n\t// \u76d1\u542c127.0.0.1:7777\n\terr := http.ListenAndServe("0.0.0.0:7777", nil)\n\tif err != nil {\n\t\tlog.Fatal("ListenAndServe", err.Error())\n\t}\n}',lang:"js"}))))}}]);