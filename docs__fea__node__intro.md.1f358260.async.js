(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{Dwnp:function(e,n,a){"use strict";a.r(n);var t=a("xwgP"),l=a.n(t),o=a("IqgK"),r=a("INx8"),c=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"-node"},l.a.createElement(o["AnchorLink"],{to:"#-node","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83d\udc8a node"),l.a.createElement("p",null,"\u57fa\u4e8e chrome \u7684 V8\u5f15\u64ce \u5c01\u88c5\u7684\u4e00\u4e2aJavaScript\u8fd0\u884c\u73af\u5883\uff0c\u4e8b\u4ef6\u9a71\u52a8\u3001\u975e\u963b\u585eIO\u8fdb\u7a0b\u6a21\u578b\uff0c\u5b83\u80fd\u8ba9js\u4ee3\u7801\u8fd0\u884c\u5728\u670d\u52a1\u7aef\u3002"),l.a.createElement("p",null,"\u5bf9\u4e8e\u524d\u7aef\u5de5\u7a0b\u5e08\u6765\u8bf4\u5177\u6709\u6781\u5927\u7684\u610f\u4e49\uff0c\u4e5f\u8ba9\u524d\u7aef\u5de5\u7a0b\u5e08\u79bb\u5168\u6808\u5de5\u7a0b\u5e08\u66f4\u8fd1\u4e86\u4e00\u6b65\u3002"),l.a.createElement("p",null,"\u5bf9\u6807\u4ea7\u54c1\u4e3a\u57fa\u4e8e rust\u3001Tokio \u7684deno\uff08destroy node\uff09\uff0cdeno \u5177\u6709\u66f4\u9ad8\u7684\u6548\u7387\uff0c\u5e76\u4e14\u539f\u751f\u5c31\u652f\u6301 typescript"),l.a.createElement("h2",{id:"\u5b89\u88c5"},l.a.createElement(o["AnchorLink"],{to:"#\u5b89\u88c5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5"),l.a.createElement("h3",{id:"\u65b9\u6cd51"},l.a.createElement(o["AnchorLink"],{to:"#\u65b9\u6cd51","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u65b9\u6cd51"),l.a.createElement("h4",{id:"\u62c9\u53d6nvm"},l.a.createElement(o["AnchorLink"],{to:"#\u62c9\u53d6nvm","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u62c9\u53d6nvm"),l.a.createElement(r["a"],{code:"- wget -qO- [https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh](https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh) | bash",lang:"unknown"}),l.a.createElement("h4",{id:"\u5b89\u88c5nvm"},l.a.createElement(o["AnchorLink"],{to:"#\u5b89\u88c5nvm","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5nvm"),l.a.createElement(r["a"],{code:"// \u6253\u5f00bash\nsource ~/.bash_profile\n\n// \u5199\u5165 node\u6587\u4ef6\u6307\u5411\nexport NODE_HOME=/usr/local/tool/nodejs/node  \nexport PATH=$NODE_HOME/bin:$PATH",lang:"javascript"}),l.a.createElement(r["a"],{code:"- nvm install node\uff08\u7248\u672c\u53f7\uff09or nvm install stable\n  - \u65b9\u68482\n  - curl --silent --location [https://rpm.nodesource.com/setup_11.x](https://rpm.nodesource.com/setup_11.x)| sudo bash -",lang:"unknown"}),l.a.createElement("h3",{id:"\u65b9\u6cd52"},l.a.createElement(o["AnchorLink"],{to:"#\u65b9\u6cd52","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u65b9\u6cd52"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u7b2c\u4e00\u6b65")),l.a.createElement(r["a"],{code:"wget https://npm.taobao.org/mirrors/node/v12.16.1/node-v12.16.1-linux-x64.tar.gz",lang:"unknown"}),l.a.createElement("ol",{start:2},l.a.createElement("li",null,"\u7b2c\u4e8c\u6b65")),l.a.createElement(r["a"],{code:"tar -xvf node-v12.16.1-linux-x64.tar.gz\nyum install gcc gcc-c++",lang:"unknown"}),l.a.createElement("ol",{start:3},l.a.createElement("li",null,"\u7b2c\u4e09\u6b65")),l.a.createElement(r["a"],{code:"mv node-v12.16.1-linux-x64.tar.gz node",lang:"unknown"}),l.a.createElement("ol",{start:4},l.a.createElement("li",null,"\u7b2c\u56db\u6b65")),l.a.createElement(r["a"],{code:"ln -s /usr/local/bin/node/bin/node /usr/bin/node\nln -s /usr/local/bin/node/bin/npm /usr/bin/npm\nln -s /usr/local/bin/node/bin/npx /usr/bin/npx",lang:"unknown"}),l.a.createElement("h3",{id:"\u5b89\u88c5-git"},l.a.createElement(o["AnchorLink"],{to:"#\u5b89\u88c5-git","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5 GIT"),l.a.createElement("ul",null,l.a.createElement("li",null,"curl ",l.a.createElement(o["Link"],{to:"https://setup.ius.io/"},"https://setup.ius.io")," | sh"),l.a.createElement("li",null,"yum install -y git2u"),l.a.createElement("li",null,"git --version")),l.a.createElement("h2",{id:"cjsesmumd-\u7684\u533a\u522b"},l.a.createElement(o["AnchorLink"],{to:"#cjsesmumd-\u7684\u533a\u522b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"cjs\u3001esm\u3001umd \u7684\u533a\u522b"),l.a.createElement("p",null,"\u9996\u5148\u8fd0\u884c\u7aef\u7684\u533a\u522b\uff0ccjs\u548cesm\u53ea\u80fd\u8fd0\u884c\u5728node\u7aef\uff0c\u800cumd\u53ef\u4ee5\u540c\u65f6\u8fd0\u884c\u5728node\u548c\u6d4f\u89c8\u5668\u7aef"),l.a.createElement("ol",null,l.a.createElement("li",null,"cjs \u5373\u4e3a CommonJs, \u5c5e\u4e8e\u65e9\u671f\u7684node\u89c4\u8303\uff0c\u53ef\u4ee5\u4f7f\u7528require\u8fdb\u884c\u5f15\u7528\uff0cmodule.exports \u5bfc\u51fa\u3002"),l.a.createElement("li",null,"esm \u5373\u4e3a Es module\uff0c\u5c5e\u4e8ees6\u63d0\u51fa\u4e4b\u540e\u7248\u672c\u7684\u65b0\u7684\u89c4\u8303\uff0c\u8bed\u6cd5\u662f\u53ef\u4ee5\u7528 import \u5f15\u7528\uff0cexport default \u5bfc\u51fa\u3002"),l.a.createElement("li",null,"umd \u5373\u4e3a Universal Module Definition\uff08\u901a\u7528\u6a21\u5757\u5b9a\u4e49\uff09\uff0c\u4e5f\u5c31\u662f\u6700\u57fa\u672c\u7684\u53ef\u5728\u6d4f\u89c8\u5668\u548cnode\u7aef\u6267\u884c\u7684 js \u4ee3\u7801\u3002"))))}));n["default"]=e=>{var n=l.a.useContext(o["context"]),a=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(c,{demos:a})}}}]);