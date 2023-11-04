(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{487:function(s,a,t){"use strict";t.r(a);var e=t(10),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-log"}},[s._v("#")]),s._v(" git log")]),s._v(" "),a("p",[s._v("git log的本质是展示提交信息。")]),s._v(" "),a("p",[s._v("但是该命令配合一些参数，可以如同 "),a("code",[s._v("git rev-list")]),s._v(" 一样控制输出哪些提交和提交的显示方式，也可以如同 "),a("code",[s._v("git diff-*")]),s._v(" 一样决定怎样显示每个提交的修改内容。")]),s._v(" "),a("p",[s._v("是不是非常惊讶了？另外 "),a("code",[s._v("git rev-list")]),s._v("这个命令是什么鬼？我至今未用过，先当作黑盒不管它了。由此可见，关于 "),a("code",[s._v("git log")]),s._v(" 这个命令我们真的应该重新认识一下它")]),s._v(" "),a("p",[a("code",[s._v("git log --oneline --stat --no-merges -p -n 2 --graph")])]),s._v(" "),a("h2",{attrs:{id:"commit-limiting-过滤提交的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit-limiting-过滤提交的"}},[s._v("#")]),s._v(" Commit Limiting（过滤提交的）")]),s._v(" "),a("p",[s._v("提交太多了，不好找，就需要用一些特别的参数帮忙限制一下输出。例如只想找昨天的，只想找小明的，只想修改过A.txt 文件的等等各种只想，只要你敢想，基本都能实现。")]),s._v(" "),a("h3",{attrs:{id:"search-作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search-作者"}},[s._v("#")]),s._v(" Search-作者")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//命令格式\ngit log  --author=<pattern>\ngit log --committer=<pattern>\n\n//示例\ngit log --author=“小明”\ngit log --author=“小明\\|小红”\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"search-作者-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search-作者-2"}},[s._v("#")]),s._v(" Search-作者")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//某个日期之后\ngit log --since=<date>\ngit log --after=<date>\n\n//某个日期之前\ngit log --until=<date>\ngit log --before=<date>\n\n\n如果你想要一个具体的时间区间的，可以把这个参数组合起来的,例如下面的命令：\n\n//查出 03.12-03.18 期间的提交\ngit log --since="2018.03.12" --until="2018.03.18"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"search-提交信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search-提交信息"}},[s._v("#")]),s._v(" Search-提交信息")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git log --grep=<pattern>\n\n//示例\ngit log --grep='喜欢' --oneline\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"search-修改内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search-修改内容"}},[s._v("#")]),s._v(" Search-修改内容")]),s._v(" "),a("p",[s._v("一般情况下，我们想找一个提交，大多是为了某个修改去找，这个修改对应要么是具体的文件，要么是具体的修改的内容。放心，这个条件也支持。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//文件\ngit log [\\--] <path>…​\n\n//示例\ngit log --oneline -- 11.txt\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"修改内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改内容"}},[s._v("#")]),s._v(" 修改内容")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//查看某个字符串的变动历史提交\ngit log -S<string>\n//查看某符合某一个正则表达式内容的变动历史提交  \ngit log -G<regex>\n\n\n//例子\ngit log -S"喜欢你" --oneine\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"search-合并相关的提交-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search-合并相关的提交-文件"}},[s._v("#")]),s._v(" Search-合并相关的提交 & 文件")]),s._v(" "),a("p",[s._v("工作中，分支之间的合并，往往不是 fast-forword,而是 recursive strategy merge 策略式合并，所以会在历史中出现很多合并提交。运用下面的命令，你可以选择只看合并提交，或者非合并提交。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//查看合并提交\ngit log --merges\n\n//查看非合并提交\ngit log --no-merges\n\n\n//查看发生合并冲突的文件\ngit log --merge\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("查看哪个人修改了哪个文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git log --stat  -- src/app/payingMembers-ceshi/js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在指定的文件中查找哪个字段的改动信息")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('git log -S"另存为" -p  -- ./src/views/event/index.vue\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"官方文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官方文档"}},[s._v("#")]),s._v(" 官方文档")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://git-scm.com/docs/git-log/zh_HANS-CN",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("git log")]),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"}},[s._v("git book"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/qq_32452623/article/details/79599503",target:"_blank",rel:"noopener noreferrer"}},[s._v("好文推荐"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ksylor/ohshitgit",target:"_blank",rel:"noopener noreferrer"}},[s._v("oh shit git"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/carloscuesta/gitmoji",target:"_blank",rel:"noopener noreferrer"}},[s._v("gitmoji"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);