(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{375:function(s,t,a){s.exports=a.p+"assets/img/screenshot-20210226-112536.ffb657c5.png"},551:function(s,t,a){"use strict";a.r(t);var n=a(10),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vscode-调试node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vscode-调试node"}},[s._v("#")]),s._v(" vscode 调试node")]),s._v(" "),t("h2",{attrs:{id:"auto-attach"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auto-attach"}},[s._v("#")]),s._v(" Auto Attach")]),s._v(" "),t("p",[s._v("Auto Attach 有 三种调试模式 ，可以按住 "),t("code",[s._v("command ,")]),s._v("调出用户设置并搜索"),t("code",[s._v("debug.javascript.autoAttachFilter")]),s._v(" 修改调试模式")]),s._v(" "),t("ul",[t("li",[s._v("smart 默认")]),s._v(" "),t("li",[s._v("always")]),s._v(" "),t("li",[s._v("onlyWithFlag")])]),s._v(" "),t("h3",{attrs:{id:"第一种-smart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一种-smart"}},[s._v("#")]),s._v(" 第一种 smart")]),s._v(" "),t("p",[s._v("默认使用这种模式。")]),s._v(" "),t("p",[s._v("直接在需要调试的代码右侧打上断点， 打开控制台执行 "),t("code",[s._v("node test.js")]),s._v("。就会进入调试模式\n"),t("img",{attrs:{src:a(375),alt:"smart"}})]),s._v(" "),t("h3",{attrs:{id:"第二种-always"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二种-always"}},[s._v("#")]),s._v(" 第二种 always")]),s._v(" "),t("p",[s._v("打开控制台就会打开调试")]),s._v(" "),t("h3",{attrs:{id:"第三种-onlywithflag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三种-onlywithflag"}},[s._v("#")]),s._v(" 第三种  onlyWithFlag")]),s._v(" "),t("p",[s._v("调试的时候需要加上 --inspect参数，比如 "),t("code",[s._v("node test.js --inspect")]),s._v("，才能进入调试模式")]),s._v(" "),t("h2",{attrs:{id:"常见方案的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见方案的配置"}},[s._v("#")]),s._v(" 常见方案的配置")]),s._v(" "),t("ul",[t("li",[s._v("Launch Program: 在调试模式下启动Node.js程序")]),s._v(" "),t("li",[s._v("Launch via npm: 通过"),t("code",[s._v("npm debug")]),s._v("脚本启动Node.js程序。如果在package.json中定义了"),t("code",[s._v("npm debug")]),s._v("脚本，则可以直接在启动配置中使用它。")]),s._v(" "),t("li",[s._v("Attach: 附加到本地运行的Node.js程序的调试端口.确保已在调试模式下启动要调试的Node.js程序，并且所使用的调试端口与代码段中指定的端口相同。")])]),s._v(" "),t("h2",{attrs:{id:"启动对-npm-和其他工具的配置支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动对-npm-和其他工具的配置支持"}},[s._v("#")]),s._v(" 启动对“ npm”和其他工具的配置支持")]),s._v(" "),t("p",[s._v("如果package.json 文件指定了 "),t("code",[s._v('"debug": "node test.js"')]),s._v("，则不需要再launch.json中指定"),t("code",[s._v("program")]),s._v("属性。举例如下")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//package.json")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"debug"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node myProgram.js"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// launch.json则如下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Launch via npm"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"request"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"launch"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"cwd"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${workspaceFolder}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"runtimeExecutable"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"runtimeArgs"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"run-script"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"debug"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h2",{attrs:{id:"支持从外部文件加载环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#支持从外部文件加载环境变量"}},[s._v("#")]),s._v(" 支持从外部文件加载环境变量")]),s._v(" "),t("p",[s._v("launch.json配置如下")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"envFile"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${workspaceFolder}/.env"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"env"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"USER"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"john doe"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v(".env如下")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("doe\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("abc123\n\n# a comment\n\n# an empty value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\nempty"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n\n# "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("lines")]),s._v(" expanded "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" quoted strings"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\nlines"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo\\nbar"')]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[s._v("#")]),s._v(" 文档")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_launch-configuration-attributes",target:"_blank",rel:"noopener noreferrer"}},[s._v("调试配置属性"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);