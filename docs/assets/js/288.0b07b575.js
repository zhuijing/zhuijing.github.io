(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{684:function(s,t,a){"use strict";a.r(t);var e=a(10),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vue3-快速掌握vite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue3-快速掌握vite"}},[s._v("#")]),s._v(" vue3 快速掌握"),t("a",{attrs:{href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vite"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"安装使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装使用"}},[s._v("#")]),s._v(" 安装使用")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("\nnpm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g @vue"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cli\nnpm init @vitejs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("app my"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vue"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("app "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("template vue"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ts\ncd my"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vue"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("app \nnpm run serve\n可以选择下列几种模板\nvanilla\nvue\nvue"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ts\nreact\nreact"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ts\npreact\npreact"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ts\n\n或者 \nnpm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g create"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vite"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("app\ncreate"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vite"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("app test"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vite\ncd test"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vite\nnpm install\nnpm run dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("ul",[t("li",[s._v("浏览器原生module，减少了编译过程，速度更快")]),s._v(" "),t("li",[s._v("可以直接引入TS文件，不做类型推断，只是做ts编译。使用esbuild做ts转换js，因为esbuild不携带类型信息。")]),s._v(" "),t("li",[s._v("rollup构建")]),s._v(" "),t("li",[s._v("vite.config.js")])]),s._v(" "),t("h2",{attrs:{id:"css-json-importing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-json-importing"}},[s._v("#")]),s._v(" CSS / JSON Importing")]),s._v(" "),t("ul",[t("li",[s._v("可以直接引入json 和css")]),s._v(" "),t("li",[s._v("json默认导出object")]),s._v(" "),t("li",[s._v("css啥也不导出，除非是以.module.css结束")]),s._v(" "),t("li",[s._v("css 和json 都支持热更新")])]),s._v(" "),t("h2",{attrs:{id:"asset-url-handling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#asset-url-handling"}},[s._v("#")]),s._v(" Asset URL Handling")]),s._v(" "),t("ul",[t("li",[s._v("可以是用绝对路径(基于项目根目录) 或者相对路径（根据文件系统）")]),s._v(" "),t("li",[s._v("项目中所有的图片，字体，媒体都会被自动检测并包含到assets下，打包的时候活打包到dist/_assets下，")]),s._v(" "),t("li",[s._v("未引用的不会被打包，小于4kb会打包成base64")]),s._v(" "),t("li",[s._v("可以用"),t("code",[s._v("assetsInclude")]),s._v("进行配置")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("img标签引入的时候 ./ 路径不能少\nstyle标签里引入可以省略 ./\n直接引入的文件需要放到public下, 而且不需要带 任何路径前缀，直接写文件名\n动态路径可以配合 import.meta.env.BASE_URL使用")])]),s._v(" "),t("h2",{attrs:{id:"postcss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postcss"}},[s._v("#")]),s._v(" PostCSS")]),s._v(" "),t("p",[s._v("vite默认使用 PostCSS，在项目根目录直接新增 postcss.config.js就可以")]),s._v(" "),t("h2",{attrs:{id:"css-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-modules"}},[s._v("#")]),s._v(" CSS Modules")]),s._v(" "),t("p",[s._v("如果想使用css modules，那么就不要配置PostCSS，直接在.vue文件中写 ")]),t("style",{attrs:{module:""}}),s._v("或者直接把css文件\n命名为 xxx.module.css"),t("p"),s._v(" "),t("h2",{attrs:{id:"css-预处理器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-预处理器"}},[s._v("#")]),s._v(" css 预处理器")]),s._v(" "),t("p",[s._v("https://github.com/vitejs/vite/tree/master/#css-pre-processors")]),s._v(" "),t("h2",{attrs:{id:"jsx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsx"}},[s._v("#")]),s._v(" JSX")]),s._v(" "),t("p",[s._v(".jsx 和 .tsx也是支持的，jsx也是用esbuild来编译的\n默认的jsx配置可以直接在vue3中用，目前jsx不支持热更新")]),s._v(" "),t("h2",{attrs:{id:"config-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-file"}},[s._v("#")]),s._v(" Config File")]),s._v(" "),t("p",[s._v("可以创建 vite.config.js 或者 vite.config.ts来配置项目\nhttps://github.com/vitejs/vite/blob/master/src/node/config.ts")]),s._v(" "),t("h2",{attrs:{id:"dev-server-proxy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dev-server-proxy"}},[s._v("#")]),s._v(" Dev Server Proxy")]),s._v(" "),t("p",[s._v("使用 基于http-proxy的 koa-proxies ：https://github.com/http-party/node-http-proxy#options")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//  vite.config.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("proxy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// string shorthand")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'/foo'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:4567/foo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// with options")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'/api'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("target")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://jsonplaceholder.typicode.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("changeOrigin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("rewrite")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("path")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("^\\/api")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"production-build"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#production-build"}},[s._v("#")]),s._v(" Production Build")]),s._v(" "),t("p",[s._v("https://github.com/vitejs/vite/blob/master/src/node/build/index.ts")]),s._v(" "),t("h2",{attrs:{id:"modes-and-environment-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modes-and-environment-variables"}},[s._v("#")]),s._v(" Modes and Environment Variables")]),s._v(" "),t("ol",[t("li",[s._v("development is used by vite and vite serve")]),s._v(" "),t("li",[s._v("production is used by vite build\n可以使用--mode 显示指定环境，比如 vite build --mode development\n.env                # loaded in all cases\n.env.local          # loaded in all cases, ignored by git\n.env.[mode]         # only loaded in specified env mode\n.env.[mode].local   # only loaded in specified env mode, ignored by git\n仅仅以 VITE_开始的变量被支持")])]),s._v(" "),t("h2",{attrs:{id:"build配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build配置"}},[s._v("#")]),s._v(" build配置")]),s._v(" "),t("p",[s._v("https://github.com/vitejs/vite/blob/master/src/node/build/index.ts")]),s._v(" "),t("h2",{attrs:{id:"how-and-why"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-and-why"}},[s._v("#")]),s._v(" How and Why")]),s._v(" "),t("ol",[t("li",[s._v("使用了原生es module，每个import都进行http请求，")])])])}),[],!1,null,null,null);t.default=r.exports}}]);