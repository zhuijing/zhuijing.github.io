(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{534:function(s,t,a){"use strict";a.r(t);var e=a(10),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"grep-sed-awk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grep-sed-awk"}},[s._v("#")]),s._v(" grep sed awk")]),s._v(" "),t("h2",{attrs:{id:"sed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sed"}},[s._v("#")]),s._v(" sed")]),s._v(" "),t("h3",{attrs:{id:"命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[s._v("#")]),s._v(" 命令")]),s._v(" "),t("blockquote",[t("p",[s._v("先 执行   "),t("code",[s._v("brew install gnu-sed")])])]),s._v(" "),t("ul",[t("li",[t("code",[s._v('gsed "2a 88888888888" testfile')]),s._v(" 在 testfile的第2行后写入hello")]),s._v(" "),t("li",[t("code",[s._v('gsed "2a 88888888888\\n999999999" testfile')]),s._v(" 在 testfile的第2行后写入两行，分别是hello 行和 world行")]),s._v(" "),t("li",[t("code",[s._v('gsed "2i hello" testfile')]),s._v("在 testfile的第2行前写入hello")]),s._v(" "),t("li",[t("code",[s._v('gsed "2d" testfile')]),s._v(" 删除第2行")]),s._v(" "),t("li",[t("code",[s._v('gsed "2,4d" testfile')]),s._v(" 删除第 [2,4]行")]),s._v(" "),t("li",[t("code",[s._v('gsed "5,+4d" testfile')]),s._v(" 删除第 [5,9]行")]),s._v(" "),t("li",[t("code",[s._v('gsed "5,$d" testfile')]),s._v(" 删除第 5行之后的所有")]),s._v(" "),t("li",[t("code",[s._v('gsed "/Runoob/, /Wiki/ d"')]),s._v(" 删除匹配到Runoob行开始到 ，匹配到Wiki结束")]),s._v(" "),t("li",[t("code",[s._v('gsed "2c hello" testfile')]),s._v("把第二行内容替换为hello")]),s._v(" "),t("li",[t("code",[s._v('gsed "s#hello# word#" testfile')]),s._v("将内容hello替换为word")]),s._v(" "),t("li",[t("code",[s._v("gsed -n 2p 1.txt")]),s._v(" 输出文件到第二行")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".txt\naaa\nbbb\nccc\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("x")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("a\n\n\ngsed "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ie")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s#'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$x")]),s._v('#eee#g"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".txt 把所有a替换为eee\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("blockquote",[t("p",[s._v("gsed 正则分组")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('echo i am caozepeng teacher. | gsed  "s/^.*am \\([a-z].*\\) tea.*$/\\1/g" \n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('\n1name copy 2.txt \n2name copy 3.txt\n3name copy 4.txt \n4name copy 5.txt\n5name copy 6.txt\n\n\nls  *copy*.txt  |gsed -r "s#(.*) copy [1-9].*#mv & \\1.txt#g"\n\nmv 1name copy 2.txt 1name.txt\nmv 2name copy 3.txt 2name.txt\nmv 3name copy 4.txt 3name.txt\nmv 4name copy 5.txt 4name.txt\nmv 5name copy 6.txt 5name.txt\nmv 7name copy 2.txt 7name.txt\n\n\nls  *copy*.txt  |gsed -r "s#(.*) copy [1-9].*#mv \\"&\\" \\1.txt#g"|bash\n\nmv "1name copy 2.txt" 1name.txt\nmv "2name copy 3.txt" 2name.txt\nmv "3name copy 4.txt" 3name.txt\nmv "4name copy 5.txt" 4name.txt\nmv "5name copy 6.txt" 5name.txt\nmv "7name copy 2.txt" 7name.txt\n\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("h3",{attrs:{id:"备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备份"}},[s._v("#")]),s._v(" 备份")]),s._v(" "),t("p",[s._v("1.txt 文件内容是")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('mv "1name copy 2.txt" 1name.txt\nmv "2name copy 3.txt" 2name.txt\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("执行    "),t("code",[s._v('sed -i.brk "s#mv#rename#" 1.txt')]),s._v(" 后")]),s._v(" "),t("p",[s._v("1.txt变为以下")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('rename "1name copy 2.txt" 1name.txt\nrename "2name copy 3.txt" 2name.txt\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("多出一个备份文件1.txt.brk")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('mv "1name copy 2.txt" 1name.txt\nmv "2name copy 3.txt" 2name.txt\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"复制文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制文件"}},[s._v("#")]),s._v(" 复制文件")]),s._v(" "),t("h2",{attrs:{id:"awk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#awk"}},[s._v("#")]),s._v(" awk")]),s._v(" "),t("p",[s._v('ls | awk \'BEGIN{ FS=" ";OFS="," }{ print $1,$2 }\'')]),s._v(" "),t("p",[s._v('ls | awk \'BEGIN{ FS=" ";OFS="","; }{ print """$1,$2 }\'')])])}),[],!1,null,null,null);t.default=n.exports}}]);