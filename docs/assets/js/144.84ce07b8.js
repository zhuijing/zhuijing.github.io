(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{534:function(t,s,a){"use strict";a.r(s);var v=a(10),_=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux常用命令"}},[t._v("#")]),t._v(" Linux常用命令")]),t._v(" "),s("h2",{attrs:{id:"ls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ls"}},[t._v("#")]),t._v(" ls")]),t._v(" "),s("ul",[s("li",[t._v("ls -l")]),t._v(" "),s("li",[t._v("ls -a")]),t._v(" "),s("li",[t._v("ls -R")]),t._v(" "),s("li",[t._v("ls -l test*")]),t._v(" "),s("li",[t._v("ls -F")]),t._v(" "),s("li",[t._v("ls -i 查看文件或目录的inode编号")])]),t._v(" "),s("h2",{attrs:{id:"cp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cp"}},[t._v("#")]),t._v(" cp")]),t._v(" "),s("ul",[s("li",[t._v("cp -R Scripts/ Mod_Scripts")]),t._v(" "),s("li",[t._v("cp *script Mod_Scripts/")]),t._v(" "),s("li",[t._v("cp -i test.js test2.js 冲突会提示")])]),t._v(" "),s("h2",{attrs:{id:"ln"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ln"}},[t._v("#")]),t._v(" ln")]),t._v(" "),s("ul",[s("li",[t._v("ls test.js test1.js")])]),t._v(" "),s("h2",{attrs:{id:"mv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mv"}},[t._v("#")]),t._v(" mv")]),t._v(" "),s("ul",[s("li",[t._v("mv test.js test1.js")]),t._v(" "),s("li",[t._v("mv -i test.js test2.js 冲突会提示")])]),t._v(" "),s("h2",{attrs:{id:"mkdir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mkdir"}},[t._v("#")]),t._v(" mkdir")]),t._v(" "),s("ul",[s("li",[t._v("mkdir -p New_Dir/Sub_Dir/Under_Dir 同时创建多个目录和子目录")])]),t._v(" "),s("h2",{attrs:{id:"rm-rmdir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rm-rmdir"}},[t._v("#")]),t._v(" rm rmdir")]),t._v(" "),s("ul",[s("li",[t._v("rm -i test.js 提示是否要删除文件")]),t._v(" "),s("li",[t._v("rm -ir New_Dir 递归删除并提示")]),t._v(" "),s("li",[t._v("rmdir New_Dir New_Dir文件夹为空才可以删除")])]),t._v(" "),s("h2",{attrs:{id:"cat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cat"}},[t._v("#")]),t._v(" cat")]),t._v(" "),s("ul",[s("li",[t._v("cat -n test.js 加上行号")]),t._v(" "),s("li",[t._v("cat -a test.js 给有文本的加上行号")])]),t._v(" "),s("h2",{attrs:{id:"more"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#more"}},[t._v("#")]),t._v(" more")]),t._v(" "),s("h2",{attrs:{id:"less"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#less"}},[t._v("#")]),t._v(" less")]),t._v(" "),s("h2",{attrs:{id:"tail"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tail"}},[t._v("#")]),t._v(" tail")]),t._v(" "),s("ul",[s("li",[t._v("tail test.js")]),t._v(" "),s("li",[t._v("tail 20 test.js")]),t._v(" "),s("li",[t._v("tail -fn 20 test.js")])]),t._v(" "),s("h2",{attrs:{id:"head"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[t._v("#")]),t._v(" head")]),t._v(" "),s("ul",[s("li",[t._v("head test.js")]),t._v(" "),s("li",[t._v("head 20 test.js")])]),t._v(" "),s("h2",{attrs:{id:"env-printenv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#env-printenv"}},[t._v("#")]),t._v(" env printenv")]),t._v(" "),s("ul",[s("li",[t._v("env 或者printenv查看 全局环境变量")]),t._v(" "),s("li",[t._v("printenv PWD 打印全局环境变量PWD")]),t._v(" "),s("li",[t._v("echo $PWD")])]),t._v(" "),s("h2",{attrs:{id:"set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[t._v("#")]),t._v(" set")]),t._v(" "),s("ul",[s("li",[t._v("set命令会显示为某个特定进程设置的所有环境变量，包括局部变量、全局变量\n以及用户定义变量")])]),t._v(" "),s("h2",{attrs:{id:"设置全局环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置全局环境变量"}},[t._v("#")]),t._v(" 设置全局环境变量")]),t._v(" "),s("ul",[s("li",[t._v('czp="曹泽鹏')]),t._v(" "),s("li",[t._v("export czp")]),t._v(" "),s("li",[t._v("env")])]),t._v(" "),s("h2",{attrs:{id:"unset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unset"}},[t._v("#")]),t._v(" unset")]),t._v(" "),s("ul",[s("li",[t._v("unset czp 删除全局变量 czp")])]),t._v(" "),s("h2",{attrs:{id:"设置-path-环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置-path-环境变量"}},[t._v("#")]),t._v(" 设置 PATH 环境变量")]),t._v(" "),s("p",[t._v("PATH中的目录使用冒号分隔")]),t._v(" "),s("ul",[s("li",[t._v("echo $PATH")]),t._v(" "),s("li",[t._v("PATH=$PATH:/home/christine/Scripts")])]),t._v(" "),s("h2",{attrs:{id:"杂记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#杂记"}},[t._v("#")]),t._v(" 杂记")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("cat 1.txt.sh > 1.txt")]),t._v(" 把 文件"),s("code",[t._v("1.txt.sh")]),t._v(" 的内容复制到"),s("code",[t._v("1.txt")])]),t._v(" "),s("li",[s("code",[t._v('gsed "w 1.tx1" 1.txt.sh')]),t._v(" 把 文件"),s("code",[t._v("1.txt.sh")]),t._v(" 的内容复制到"),s("code",[t._v("1.tx1")])]),t._v(" "),s("li")])])}),[],!1,null,null,null);s.default=_.exports}}]);