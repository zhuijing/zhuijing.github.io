(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{526:function(t,e,i){"use strict";i.r(e);var n=i(10),r=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"js读书笔记目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js读书笔记目录"}},[t._v("#")]),t._v(" JS读书笔记目录")]),t._v(" "),e("ol",[e("li",[e("RouterLink",{attrs:{to:"/view/js/1/"}},[t._v("JS执行机制")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/view/js/2/"}},[t._v("JS事件循环机制")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/view/js/3/"}},[t._v("大文件上传和断点续传")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/view/js/4/"}},[t._v("深入理解前端性能监控")])],1),t._v(" "),e("li",[e("a",{attrs:{href:"/view/js/5"}},[t._v("11个JavaScript代码重构最佳实践")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/view/js/6"}},[t._v("单点登录")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/view/js/7"}},[t._v("手写 Promise")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/view/js/8"}},[t._v("JS 常见概念")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/view/js/9"}},[t._v("ES6 Set 和 Map 数据结构")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/view/js/10"}},[t._v("你没用过的JS方法")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/view/js/11"}},[t._v("手撕问题")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/view/js/12"}},[t._v("面向对象基本原则")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/view/js/13"}},[t._v("ES6 难点")])]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/view/JS/14.html"}},[t._v("进制")])],1),t._v(" "),e("li",[t._v("无")]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/view/JS/16.html"}},[t._v("正则表达式")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/view/JS/17.html"}},[t._v("图片加载优化")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/view/JS/18.html"}},[t._v("没用过的JSAPi")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/view/JS/19.html"}},[t._v("js常用方法")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/view/JS/20.html"}},[t._v("ES6 中的高阶函数")])],1)]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/view/JS/24.html"}},[t._v("前端性能优化")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/view/JS/25.html"}},[t._v("性能分析")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/view/JS/26.html"}},[t._v("IntersectionObserver")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/view/JS/27.html"}},[t._v("ascll unicode编码")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/view/JS/28.html"}},[t._v("if (!String.prototype.codePointAt) {\n(function() {\n'use strict'; // 严格模式，needed to support "),e("code",[t._v("apply")]),t._v("/"),e("code",[t._v("call")]),t._v(" with "),e("code",[t._v("undefined")]),t._v("/"),e("code",[t._v("null")]),t._v("\nvar codePointAt = function(position) {\nif (this == null) {\nthrow TypeError();\n}\nvar string = String(this);\nvar size = string.length;\n// 变成整数\nvar index = position ? Number(position) : 0;\nif (index != index) {\n// better "),e("code",[t._v("isNaN")]),t._v("\nindex = 0;\n}\n// 边界\nif (index < 0 || index >= size) {\nreturn undefined;\n}\n// 第一个编码单元\nvar first = string.charCodeAt(index);\nvar second;\nif (\n// 检查是否开始 surrogate pair\nfirst >= 0xd800 &&\nfirst <= 0xdbff && // high surrogate\nsize > index + 1 // 下一个编码单元\n) {\nsecond = string.charCodeAt(index + 1);\nif (second >= 0xdc00 && second <= 0xdfff) {\n// low surrogate\n// http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae\nreturn (first - 0xd800) * 0x400 + second - 0xdc00 + 0x10000;\n}\n}\nreturn first;\n};\nif (Object.defineProperty) {\nObject.defineProperty(String.prototype, 'codePointAt', {\nvalue: codePointAt,\nconfigurable: true,\nwritable: true\n});\n} else {\nString.prototype.codePointAt = codePointAt;\n}\n})();\n}")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/view/JS/27.html"}},[t._v("ascll unicode编码")])],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);