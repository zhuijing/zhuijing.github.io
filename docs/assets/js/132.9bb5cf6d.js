(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{522:function(t,e,r){"use strict";r.r(e);var o=r(10),a=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"单点登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单点登录"}},[t._v("#")]),t._v(" 单点登录")]),t._v(" "),e("h2",{attrs:{id:"域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#域名"}},[t._v("#")]),t._v(" 域名")]),t._v(" "),e("ol",[e("li",[t._v(".com 顶级域名，一级域名")]),t._v(" "),e("li",[t._v("baidu.com 二级域名")]),t._v(" "),e("li",[t._v("ww.baidu.com 三级域名")])]),t._v(" "),e("blockquote",[e("p",[t._v("cookie可以支持二级及以上共享\nsession共享，做redis存储共享")])]),t._v(" "),e("h2",{attrs:{id:"单点登录-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单点登录-2"}},[t._v("#")]),t._v(" 单点登录")]),t._v(" "),e("blockquote",[e("p",[t._v("三级域名不同的单点登录，只需要做到cookie共享\n一级，二级域名同的单点登录需要借助  CAS")])]),t._v(" "),e("h2",{attrs:{id:"cas-central-authentication-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cas-central-authentication-service"}},[t._v("#")]),t._v(" CAS Central Authentication Service")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://www.zhihu.com/question/342103776/answer/798611224",target:"_blank",rel:"noopener noreferrer"}},[t._v("java版详细"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://youngzhang08.github.io/2018/08/08/%E8%81%8A%E8%81%8A%E9%98%BF%E9%87%8C%E6%B7%98%E5%AE%9DSSO%E8%B7%A8%E5%9F%9F%E7%99%BB%E5%BD%95%E8%BF%87%E7%A8%8B/",target:"_blank",rel:"noopener noreferrer"}},[t._v("聊聊阿里淘宝SSO跨域登录过程/"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://heartaway.cn/2018/01/04/Program/2018-01-04-taobao-sso/",target:"_blank",rel:"noopener noreferrer"}},[t._v("淘系单点登录详细版"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/R_BhxzZLo-Vvd4N5kn8AAg",target:"_blank",rel:"noopener noreferrer"}},[t._v("单点登录的三种实现方式"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/da1B1EQ3GYcZzdAotaCOsA",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端登录，这一篇就够了"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/TtIxPRzxTz_gG4OqKGutxw",target:"_blank",rel:"noopener noreferrer"}},[t._v("常见登录鉴权方案"),e("OutboundLink")],1),t._v("\n\x3c!--\n域名A www.taobao.com\n域名B www.tmall.com")])]),t._v(" "),e("p",[t._v("认证中心 www.sso.com")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("用户 A进入 www.taobao.com, 系统发现用户未登陆。用户点击登录，则重定向到 认证中心并代入当前url最终形成 www.sso.com?redirect=www.taobao.com")])]),t._v(" "),e("li",[e("p",[t._v("认证中心 发现该用户未登陆，则跳转至 www.sso.com/login，用户输入用户名密码，进行登陆。认证中心将session写入到redis 并将cookie返回到  www.sso.com")])]),t._v(" "),e("li",[e("p",[t._v("认证中心 重定向到 www.taobao.com,")])]),t._v(" "),e("li",[e("p",[t._v("用户A进入www.tmall.com，改系统向 认证中心 发送是否登陆，此时会代入 第2步认证中心下发的cookie，认证中心判断用户是否登陆，未登陆就 执行第2，3步")])])]),t._v(" "),e("p",[t._v("--\x3e")])])}),[],!1,null,null,null);e.default=a.exports}}]);