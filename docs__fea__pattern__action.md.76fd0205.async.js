(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{"9kvl":function(e,n,t){"use strict";var a=t("FfOG");t.d(n,"a",(function(){return a["b"]}));t("bCY9")},BqrT:function(e,n,t){"use strict";t.r(n);var a=t("xwgP"),r=t.n(a),l=t("OS9G"),o=t("oSqR"),s=t("W+6v"),c=t("Rsk4"),i=r.a.memo(c["default"]["action-demo"].component);n["default"]=e=>(r.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u884c\u4e3a\u578b"},r.a.createElement(l["AnchorLink"],{to:"#\u884c\u4e3a\u578b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u884c\u4e3a\u578b"),r.a.createElement("h3",{id:"\u72b6\u6001\u6a21\u5f0f"},r.a.createElement(l["AnchorLink"],{to:"#\u72b6\u6001\u6a21\u5f0f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u72b6\u6001\u6a21\u5f0f"),r.a.createElement("h4",{id:"\u72b6\u6001\u6a21\u5f0f-1"},r.a.createElement(l["AnchorLink"],{to:"#\u72b6\u6001\u6a21\u5f0f-1","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u72b6\u6001\u6a21\u5f0f"),r.a.createElement("p",null,"\u573a\u666f\uff1a"),r.a.createElement("p",null,"\u4e00\u53f0\u5496\u5561\u673a\uff0c\u6309\u9700\u6c42\u7ed9\u4e0d\u540c\u7684\u5496\u5561\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7f8e\u5f0f\u5496\u5561\u6001\uff08american)\uff1a\u53ea\u5410\u9ed1\u5496\u5561"),r.a.createElement("li",null,"\u666e\u901a\u62ff\u94c1\u6001(latte)\uff1a\u9ed1\u5496\u5561\u52a0\u70b9\u5976"),r.a.createElement("li",null,"\u9999\u8349\u62ff\u94c1\u6001\uff08vanillaLatte\uff09\uff1a\u9ed1\u5496\u5561\u52a0\u70b9\u5976\u518d\u52a0\u9999\u8349\u7cd6\u6d46"),r.a.createElement("li",null,"\u6469\u5361\u5496\u5561\u6001(mocha)\uff1a\u9ed1\u5496\u5561\u52a0\u70b9\u5976\u518d\u52a0\u70b9\u5de7\u514b\u529b")),r.a.createElement(s["a"],{code:"import React, { useRef, useEffect } from 'react';\n\nclass CoffeeMachine {\n  constructor() {\n    this.state = 'init';\n    this.leftMilk = '500ml';\n  }\n\n  // \u7f8e\u5f0f\n  american() {\n    // \u5c1d\u8bd5\u5728\u884c\u4e3a\u51fd\u6570\u91cc\u62ff\u5230\u5496\u5561\u673a\u5b9e\u4f8b\u7684\u4fe1\u606f\u5e76\u8f93\u51fa\n    console.log('\u5496\u5561\u673a\u73b0\u5728\u7684\u725b\u5976\u5b58\u50a8\u91cf\u662f:', this.leftMilk);\n    console.log('\u6211\u53ea\u5410\u9ed1\u5496\u5561');\n    return '\u7f8e\u5f0f';\n  }\n\n  // \u666e\u901a\u62ff\u94c1\n  latte() {\n    this.american();\n    console.log('\u52a0\u70b9\u5976');\n    return '\u666e\u901a\u62ff\u94c1';\n  }\n\n  // \u9999\u8349\u62ff\u94c1\n  vanillaLatte() {\n    this.latte();\n    console.log('\u518d\u52a0\u9999\u8349\u7cd6\u6d46');\n    return '\u9999\u8349\u62ff\u94c1';\n  }\n\n  // \u6469\u5361\n  mocha() {\n    this.latte();\n    console.log('\u518d\u52a0\u5de7\u514b\u529b');\n    return '\u6469\u5361';\n  }\n\n  changeState(state) {\n    this.state = state;\n    if (!this[state]) {\n      return;\n    }\n    return this[state]();\n  }\n}\n\nconst mk = new CoffeeMachine();\n\nexport default () => <div>\u5496\u5561\u7c7b\u578b\uff1a{mk.changeState('mocha')}</div>;",lang:"js"}),r.a.createElement("h3",{id:"\u89c2\u5bdf\u8005\u6a21\u5f0f\uff08\u53d1\u5e03\u8ba2\u9605\u8005\u6a21\u5f0f\uff09"},r.a.createElement(l["AnchorLink"],{to:"#\u89c2\u5bdf\u8005\u6a21\u5f0f\uff08\u53d1\u5e03\u8ba2\u9605\u8005\u6a21\u5f0f\uff09","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u89c2\u5bdf\u8005\u6a21\u5f0f\uff08\u53d1\u5e03\u8ba2\u9605\u8005\u6a21\u5f0f\uff09"),r.a.createElement("p",null,"\u5b9a\u4e49\u4e86\u4e00\u79cd\u4e00\u5bf9\u591a\u7684\u5173\u7cfb\uff0c\u8ba9\u591a\u4e2a\u89c2\u5bdf\u8005\u5bf9\u8c61\u540c\u65f6\u76d1\u542c\u67d0\u4e00\u4e2a\u4e3b\u9898\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u4e3b\u9898\u5bf9\u8c61\u7684\u72b6\u6001\u53d1\u751f\u53d8\u5316\u65f6\u5c31\u4f1a\u901a\u77e5\u6240\u6709\u7684\u89c2\u5bdf\u8005\u5bf9\u8c61\uff0c\u4f7f\u5b83\u4eec\u80fd\u591f\u81ea\u52a8\u66f4\u65b0\u81ea\u5df1\uff0c\u5f53\u4e00\u4e2a\u5bf9\u8c61\u7684\u6539\u53d8\u9700\u8981\u540c\u65f6\u6539\u53d8\u5176\u5b83\u5bf9\u8c61\uff0c\u5e76\u4e14\u5b83\u4e0d\u77e5\u9053\u5177\u4f53\u6709\u591a\u5c11\u5bf9\u8c61\u9700\u8981\u6539\u53d8\u7684\u65f6\u5019\uff0c\u5c31\u5e94\u8be5\u8003\u8651\u4f7f\u7528\u89c2\u5bdf\u8005\u6a21\u5f0f\u3002"),r.a.createElement("h4",{id:"\u7b80\u5355\u7248"},r.a.createElement(l["AnchorLink"],{to:"#\u7b80\u5355\u7248","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u7b80\u5355\u7248"),r.a.createElement(s["a"],{code:"import React from 'react';\n// \u4e3b\u9898 \u4fdd\u5b58\u72b6\u6001\uff0c\u72b6\u6001\u53d8\u5316\u4e4b\u540e\u89e6\u53d1\u6240\u6709\u89c2\u5bdf\u8005\u5bf9\u8c61\nclass Publisher {\n  constructor() {\n    this.state = 0;\n    this.observers = [];\n  }\n  getState() {\n    return this.state;\n  }\n  setState(state) {\n    this.state = state;\n    this.notifyAllObservers();\n  }\n  notifyAllObservers() {\n    this.observers.forEach((observer) => {\n      observer.update();\n    });\n  }\n  attach(observer) {\n    this.observers.push(observer);\n  }\n}\n\n// \u89c2\u5bdf\u8005\nclass Observer {\n  constructor(name, publisher) {\n    this.name = name;\n    this.publisher = publisher;\n    this.publisher.attach(this);\n  }\n  update() {\n    console.log(`${this.name} \u66f4\u65b0, state: ${this.publisher.getState()}`);\n  }\n}\n\n// \u6d4b\u8bd5\nlet pub = new Publisher();\nlet o1 = new Observer('o1', pub);\nlet o2 = new Observer('02', pub);\n\npub.setState(12);\n\nexport default () => null;",lang:"js"}),r.a.createElement("h4",{id:"\u590d\u6742\u7248"},r.a.createElement(l["AnchorLink"],{to:"#\u590d\u6742\u7248","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u590d\u6742\u7248"),r.a.createElement(s["a"],{code:"// \u5b9a\u4e49\u53d1\u5e03\u8005\nclass Publisher {\n  constructor() {\n    this.observers = []\n    console.log('\u53d1\u5e03\u8005\u521b\u5efa-\u6267\u884c')\n  }\n\n  // \u589e\u52a0\u8ba2\u9605\u8005\n  add(observer) {\n    console.log('\u589e\u52a0\u8ba2\u9605\u8005-\u6267\u884c')\n    this.observers.push(observer)\n  }\n\n  // \u79fb\u9664\u8ba2\u9605\u8005\n  remove(observer) {\n    console.log('\u53d1\u5e03\u8005\u79fb\u9664-\u6267\u884c')\n    this.observers.forEach((item, i) => {\n      if (item === observer) {\n        this.observers.splice(i, 1)\n      }\n    })\n  }\n\n  // \u901a\u77e5\u6240\u6709\u8ba2\u9605\u8005\n  notify() {\n    console.log('\u901a\u77e5\u6240\u6709\u8ba2\u9605\u8005-\u6267\u884c')\n    this.observers.forEach(observer => {\n      observer.update(this)\n    })\n  }\n}\n\n// \u5b9a\u4e49\u8ba2\u9605\u8005\u7c7b\nclass Observer {\n  constructor() {\n    console.log('\u8ba2\u9605\u8005\u521b\u5efa-\u6267\u884c')\n  }\n\n  update() {\n    console.log('\u8ba2\u9605\u8005\u88ab\u901a\u77e5\u4e86\uff01\uff01')\n  }\n}\n\n// \u5b9a\u4e49\u4e00\u4e2a\u5177\u4f53\u7684\u9700\u6c42\u6587\u6863\u53d1\u5e03\u7c7b\nclass ProPublisher extends Publisher {\n  constructor() {\n    super()\n    // \u521d\u59cb\u5316\u9700\u6c42\u6587\u6863\n    this.proState = null\n    this.observers = []\n    console.log('\u4e1a\u52a1\u8ba2\u9605\u8005\u521b\u5efa-\u6267\u884c')\n  }\n\n  getState() {\n    console.log('\u4e1a\u52a1\u83b7\u53d6\u72b6\u6001-\u6267\u884c')\n  }\n\n  setState(state) {\n    console.log('\u4e1a\u52a1\u8bbe\u7f6e\u72b6\u6001-\u6267\u884c')\n    this.proState = state\n    this.notify()\n  }\n}\n\n// \u5b9a\u4e49\u4e00\u4e2a\u76d1\u542c\u8005\nclass ProObserver extends Observer {\n  constructor() {\n    super()\n    // \u9700\u6c42\u6587\u6863\u4e00\u5f00\u59cb\u8fd8\u4e0d\u5b58\u5728\uff0cprd\u521d\u59cb\u4e3a\u7a7a\u5bf9\u8c61\n    this.prdState = {}\n    console.log('ProObserver created')\n  }\n\n  // \u91cd\u5199\u4e00\u4e2a\u5177\u4f53\u7684update\u65b9\u6cd5\n  update(publisher) {\n    console.log('ProObserver \u5df2\u6267\u884c')\n    // \u66f4\u65b0\u9700\u6c42\u6587\u6863\n    this.prdState = publisher.getState()\n    // \u8c03\u7528\u5de5\u4f5c\u51fd\u6570\n    this.work()\n  }\n\n  // work\u65b9\u6cd5\uff0c\u4e00\u4e2a\u4e13\u95e8\u642c\u7816\u7684\u65b9\u6cd5\n  work() {\n    // \u83b7\u53d6\u9700\u6c42\u6587\u6863\n    const prd = this.prdState\n    // \u5f00\u59cb\u57fa\u4e8e\u9700\u6c42\u6587\u6863\u63d0\u4f9b\u7684\u4fe1\u606f\u642c\u7816\u3002\u3002\u3002\n    ...\n    console.log('996 \u5f00\u59cb\u4e86...')\n  }\n}\n\n// \u521b\u5efa\u8ba2\u9605\u8005\uff1a\u524d\u7aef\u5f00\u53d1C\nconst C = new ProObserver()\n// \u521b\u5efa\u8ba2\u9605\u8005\uff1a\u670d\u52a1\u7aef\u5f00\u53d1\u5c0fA\nconst A = new ProObserver()\n// \u521b\u5efa\u8ba2\u9605\u8005\uff1a\u6d4b\u8bd5\u540c\u5b66\u5c0fB\nconst B = new ProObserver()\n// \u97e9\u6885\u6885\u51fa\u73b0\u4e86\nconst hanMeiMei = new PrdPublisher()\n// \u9700\u6c42\u6587\u6863\u51fa\u73b0\u4e86\nconst prd = {\n    // \u5177\u4f53\u7684\u9700\u6c42\u5185\u5bb9\n    ...\n}\n// \u97e9\u6885\u6885\u5f00\u59cb\u62c9\u7fa4\nhanMeiMei.add(C)\nhanMeiMei.add(A)\nhanMeiMei.add(B)\n// \u97e9\u6885\u6885\u53d1\u9001\u4e86\u9700\u6c42\u6587\u6863\uff0c\u5e76@\u4e86\u6240\u6709\u4eba\nhanMeiMei.setState(prd)",lang:"js"}),r.a.createElement("h3",{id:"\u7b56\u7565\u6a21\u5f0f"},r.a.createElement(l["AnchorLink"],{to:"#\u7b56\u7565\u6a21\u5f0f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u7b56\u7565\u6a21\u5f0f"),r.a.createElement("p",null,"\u548c\u72b6\u6001\u6a21\u5f0f\u7684\u533a\u522b\uff0c\u7b56\u7565\u6a21\u5f0f\u66f4\u504f\u5411\u7b97\u6cd5\uff0c\u8ba1\u7b97\u903b\u8f91\u7684\u5c01\u88c5\uff0c\u72b6\u6001\u66f4\u504f\u5411\u5b9a\u503c\u7684\u5224\u65ad"),r.a.createElement("h4",{id:"\u7b80\u5355\u7248-1"},r.a.createElement(l["AnchorLink"],{to:"#\u7b80\u5355\u7248-1","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u7b80\u5355\u7248"),r.a.createElement("p",null,"\u4e1a\u52a1\u573a\u666f\u5982\u4e0b\uff1a"),r.a.createElement("p",null,"\u9a6c\u4e0a\u5927\u4fc3\u8981\u6765\u4e86\uff0c\u6211\u4eec\u672c\u6b21\u5927\u4fc3\u8981\u505a\u5dee\u5f02\u5316\u8be2\u4ef7\u3002\u5565\u662f\u5dee\u5f02\u5316\u8be2\u4ef7\uff1f\u5c31\u662f\u8bf4\u540c\u4e00\u4e2a\u5546\u54c1\uff0c\u6211\u901a\u8fc7\u5728\u540e\u53f0\u7ed9\u5b83\u8bbe\u7f6e\u4e0d\u540c\u7684\u4ef7\u683c\u7c7b\u578b\uff0c\u53ef\u4ee5\u8ba9\u5b83\u5c55\u793a\u4e0d\u540c\u7684\u4ef7\u683c\u3002\u5177\u4f53\u7684\u903b\u8f91\u5982\u4e0b\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5f53\u4ef7\u683c\u7c7b\u578b\u4e3a\u201c\u9884\u552e\u4ef7\u201d\u65f6\uff0c\u6ee1 100 - 20\uff0c\u4e0d\u6ee1 100 \u6253 9 \u6298"),r.a.createElement("li",null,"\u5f53\u4ef7\u683c\u7c7b\u578b\u4e3a\u201c\u5927\u4fc3\u4ef7\u201d\u65f6\uff0c\u6ee1 100 - 30\uff0c\u4e0d\u6ee1 100 \u6253 8 \u6298"),r.a.createElement("li",null,"\u5f53\u4ef7\u683c\u7c7b\u578b\u4e3a\u201c\u8fd4\u573a\u4ef7\u201d\u65f6\uff0c\u6ee1 200 - 50\uff0c\u4e0d\u53e0\u52a0"),r.a.createElement("li",null,"\u5f53\u4ef7\u683c\u7c7b\u578b\u4e3a\u201c\u5c1d\u9c9c\u4ef7\u201d\u65f6\uff0c\u76f4\u63a5\u6253 5 \u6298"))),r.a.createElement(o["default"],c["default"]["action-demo"].previewerProps,r.a.createElement(i,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u8fed\u4ee3\u5668\u6a21\u5f0f"},r.a.createElement(l["AnchorLink"],{to:"#\u8fed\u4ee3\u5668\u6a21\u5f0f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u8fed\u4ee3\u5668\u6a21\u5f0f"),r.a.createElement("p",null,"\u5c11\u6709\u7684\u76ee\u7684\u6027\u6781\u5f3a\u7684\u6a21\u5f0f\u3002"),r.a.createElement("p",null,"\u4e3e\u4f8b\uff1afor...of...\u5c31\u662f\u5bf9 next \u7684\u53cd\u590d\u8c03\u7528\u3002"),r.a.createElement(s["a"],{code:"// \u81ea\u5e26\u8fed\u4ee3\u5668\u8bed\u6cd5\nconst arr = [1,2,3]\nconst iterator = arr[Symbol.iterator]()\n\niterator.next() -> { value: 1, done: false}\niterator.next() -> { value: 2, done: false}\niterator.next() -> { value: 3, done: false}\niterator.next() -> { value: undefined, done: true}\n\n// \u624b\u64b8\u7248\u8fed\u4ee3\u5668,\u95ed\u5305\nconst itaratorFunc = (arr: any  ) => {\n  const idx = 0\n  const len = arr.length\n\n  if (Object.prototype.toString.call(arr) !== '[object Array]') throw new Error('\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u6570\u7ec4\u683c\u5f0f')\n\n  return {\n    next: () => {\n      var done = idx >= len\n      var value = !done ? list[idx++] : undefined\n\n      return {\n        done,\n        value\n      }\n    }\n  }\n}\n\nconst iterator = itaratorFunc([1,2,3])\n\nconst iterator.next()\nconst iterator.next()\nconst iterator.next()",lang:"js"})))))}}]);