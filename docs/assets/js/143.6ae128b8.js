(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{533:function(s,a,n){"use strict";n.r(a);var e=n(10),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux服务器环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux服务器环境搭建"}},[s._v("#")]),s._v(" Linux服务器环境搭建")]),s._v(" "),a("h2",{attrs:{id:"配置git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置git"}},[s._v("#")]),s._v(" 配置git")]),s._v(" "),a("ol",[a("li",[s._v("yum -y install git //安装git")]),s._v(" "),a("li",[s._v("git --version  查看git版本，//是否安装成功")]),s._v(" "),a("li",[s._v('ssh-keygen -t rsa -C "1401271211@qq.com"  生成git秘钥')]),s._v(" "),a("li",[s._v("cat /root/.ssh/gitee_id_rsa.pub")]),s._v(" "),a("li",[s._v("复制内容")]),s._v(" "),a("li",[s._v("把内容粘贴到https://gitee.com/profile/sshkeys")]),s._v(" "),a("li",[s._v("ssh-agent bash")]),s._v(" "),a("li",[s._v("ssh-add -k id_rsa")]),s._v(" "),a("li",[s._v("ssh -T git@gitee.com")]),s._v(" "),a("li",[s._v("提示 "),a("code",[s._v("Hi xxx! You've successfully authenticated, but GITEE.COM does not provide shell access.")])])]),s._v(" "),a("h2",{attrs:{id:"配置node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置node"}},[s._v("#")]),s._v(" 配置node")]),s._v(" "),a("ol",[a("li",[s._v("uname -a 查看服务器信息")]),s._v(" "),a("li",[s._v("打印出 Linux VM_0_7_centos 3.10.0-514.26.2.el7.x86_64 #1 SMP Tue Jul 4 15:04:05 UTC 2017 "),a("strong",[s._v("x86_64 x86_64 x86_64")]),s._v(" GNU/Linux   粗体部分代表服务器是64位")]),s._v(" "),a("li",[s._v("wget https://nodejs.org/dist/v10.16.0/node-v10.16.0-linux-x64.tar.xz 下载 node")]),s._v(" "),a("li",[s._v("tar xf  node-v10.16.0-linux-x64.tar.xz        解压")]),s._v(" "),a("li",[s._v("cd /usr/bin/node-v10.16.0-linux-x64           进入解压目录")]),s._v(" "),a("li",[s._v("cd /usr/local/bin")]),s._v(" "),a("li",[s._v("ln -s /usr/bin/node-v10.16.0-linux-x64/bin/node "),a("strong",[s._v("注意这里有一个空格")]),s._v("node     使用 ln 命令来设置软连接")]),s._v(" "),a("li",[s._v("ln -s /usr/bin/node-v10.16.0-linux-x64/bin/npm"),a("strong",[s._v("注意这里有一个空格")]),s._v(" npm      使用 ln 命令来设置软连接")]),s._v(" "),a("li",[s._v("服务器配置 "),a("a",{attrs:{href:"https://console.cloud.tencent.com/cvm/securitygroup",target:"_blank",rel:"noopener noreferrer"}},[s._v("安全组"),a("OutboundLink")],1),s._v("，开放需要的端口")]),s._v(" "),a("li",[s._v("测试服务器是否配置正常的代码")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const http = require('http')\nconst os = require('os');\nconst hostname = os.networkInterfaces().eth0[0].address;\nconsole.log(hostname,'hostname')\nhttp.createServer(function(req,res) {\nconsole.log(req.url)\n  res.end('ok')\n\n}).listen('8081',hostname,function(){\n\tconsole.log(8081)\n}) \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"安装mogodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装mogodb"}},[s._v("#")]),s._v(" 安装mogodb")]),s._v(" "),a("ol",[a("li",[s._v("建立存放mongodb的数据库文件夹/project_caozepeng_front_end/project_data，和存放日志的文件夹/project_caozepeng_front_end/project_log/mongodb/logs")]),s._v(" "),a("li",[s._v("wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-4.0.10.tgz 安装mongodb")]),s._v(" "),a("li",[s._v("tar zxvf mongodb-linux-x86_64-4.0.10.tgz       解压")]),s._v(" "),a("li",[s._v("cd mongodb-linux-x86_64-4.0.10/")]),s._v(" "),a("li",[s._v("ln -s /src/mongodb-linux-x86_64-4.0.10/bin/*  /usr/local/bin     使用 ln 命令来设置软连接 这样就可以在全局使用mongod 命令了")]),s._v(" "),a("li",[s._v("mongo --version  查看mongo版本")]),s._v(" "),a("li",[s._v("mongod --dbpath=/project_caozepeng_front_end/project_data 测试下看能不能启动")]),s._v(" "),a("li",[s._v("pstree -p | grep mongod 查看 行程并以树状图显示")]),s._v(" "),a("li",[s._v("pkill mongod")])]),s._v(" "),a("h2",{attrs:{id:"mongodb-操作-mac本地模拟"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-操作-mac本地模拟"}},[s._v("#")]),s._v(" mongodb 操作（mac本地模拟）")]),s._v(" "),a("ol",[a("li",[s._v("新建mongo.conf  并配置为以下")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("dbpath = /Users/zhuge1/学习/vuedata\n#日志文件存放目录\nlogpath = /Users/zhuge1/logs/mongolog.log\n#端口\nport = 27017\n#以守护进程的方式启用，即后台运行;默认false\nfork = true\n# 关闭web管理访问，默认关闭27018端口访问，这个是在prot端口上加1000\n#httpinterface = true\n#是否开启权限验证\nauth = false\n#绑定ip，让其能够通过外网访问， 0.0.0.0代表所有\nbind_ip = 0.0.0.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ol",{attrs:{start:"11"}},[a("li",[s._v("mongod -f /Users/zhuge1/mongodb/bin/mongo.conf 开启服务")]),s._v(" "),a("li",[s._v("打开控制台输入 mongo 进入mongo shell")]),s._v(" "),a("li",[s._v("use admin 切换至admin")]),s._v(" "),a("li",[s._v("创建超级管理员, 用于管理用户角色")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('添加超管用户root\ndb.createUser(\n    {\n        user:"root",\n        pwd: "qwer1234!@#$",\n        roles: [{ role: "root", db: "admin"}]\n    }\n)\n\ndb.createUser(\n    {\n        user:"caozepeng",\n        pwd:"qwer1234!@#$",\n        roles:[{\n            role:"userAdmin",\n            db:"admin"\n            }\n        ]\n    }\n);\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("ol",{attrs:{start:"15"}},[a("li",[s._v("创建超级管理员，赋予用户所有数据库的userAdmin权限")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('db.createUser(\n    {\n        user:"userAdmin",\n        pwd:"qwer1234!@#$",\n        roles:[{\n            role:"userAdminAnyDatabase",\n            db:"admin"\n            }\n        ]\n    }\n);\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ol",{attrs:{start:"16"}},[a("li",[s._v("exit 退出mogno shell")]),s._v(" "),a("li",[s._v("ps -ef | grep mongo 查看mongo的进程")]),s._v(" "),a("li",[s._v("sudo kill  74316(pid)关闭mongo进程")]),s._v(" "),a("li",[s._v("lsof -i tcp:27017 mac查看端口占用情况")]),s._v(" "),a("li",[s._v("将 mongod.conf 写入 auth = true")]),s._v(" "),a("li",[s._v("mongod -f /Users/zhuge1/mongodb/bin/mongo.conf 重启服务")]),s._v(" "),a("li",[s._v("输入mongo, 进入mongo shell")]),s._v(" "),a("li",[s._v("use admin 切换到admin")]),s._v(" "),a("li",[s._v("db.auth('userAdmin','521kl...') 认证权限")]),s._v(" "),a("li",[s._v("db.system.users.find() 查看用户")]),s._v(" "),a("li",[s._v("use projectData 新建数据库")]),s._v(" "),a("li",[s._v("创建账户密码")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('db.createUser(\n    {\n        user:"projectData",\n        pwd: "qwer1234!@#$",\n        roles: [{ role: "readWrite", db: "projectData"}]\n    }\n)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ol",{attrs:{start:"28"}},[a("li",[s._v("db.auth('projectData','projectData.')")]),s._v(" "),a("li",[s._v("show collections  此时你要是没有集合的话，执行以下方法")]),s._v(" "),a("li",[s._v("db.demo.insert({name:1})  插入一个集合 demo")]),s._v(" "),a("li",[s._v("show collections   会看到一个demo集合")])]),s._v(" "),a("h2",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" Nginx")]),s._v(" "),a("ol",[a("li",[s._v("小程序 xcx")]),s._v(" "),a("li",[s._v("公众号 gzh")]),s._v(" "),a("li",[s._v("h5网站 h5")]),s._v(" "),a("li",[s._v("pc站点 pc")]),s._v(" "),a("li",[s._v("静态资源")])]),s._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("ol",[a("li",[s._v("sudo yum install nginx 安装Nginx .")]),s._v(" "),a("li",[s._v("nginx -v 查看nginx版本")]),s._v(" "),a("li",[s._v("nginx -h 查看nginx的配置项  或者 nginx -V")]),s._v(" "),a("li",[s._v("cd /etc/nginx 进入nginx安装目录")]),s._v(" "),a("li",[s._v("cd conf.d/ 进入conf.d/ 文件夹")]),s._v(" "),a("li",[s._v("pwd 查看当前所在目录")]),s._v(" "),a("li",[s._v("kill -HUP 26733 优雅重启 或者 nginx -s reload")]),s._v(" "),a("li",[s._v("kill -USR1 26733 修改日志文件，并重新写入到该文件 nginx -s reopen 重读配置")]),s._v(" "),a("li",[s._v("nginx -t")]),s._v(" "),a("li",[s._v("chmod -R 777 /data nginx权限不足")])]),s._v(" "),a("h3",{attrs:{id:"内置变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置变量"}},[s._v("#")]),s._v(" 内置变量")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("$document_root")]),s._v(" "),a("th",[s._v("$fastcgi_script_name")]),s._v(" "),a("th",[s._v("$query_string")]),s._v(" "),a("th",[s._v("$request_method")]),s._v(" "),a("th",[s._v("$content_type")]),s._v(" "),a("th",[s._v("$content_length")]),s._v(" "),a("th",[s._v("$request_uri")]),s._v(" "),a("th",[s._v("$document_uri")]),s._v(" "),a("th",[s._v("$document_root")]),s._v(" "),a("th",[s._v("$server_protocol")]),s._v(" "),a("th",[s._v("$scheme")]),s._v(" "),a("th",[s._v("$https if_not_empty")]),s._v(" "),a("th",[s._v("$remote_addr")]),s._v(" "),a("th",[s._v("$remote_port")]),s._v(" "),a("th",[s._v("$server_addr")]),s._v(" "),a("th",[s._v("$server_port")]),s._v(" "),a("th",[s._v("$server_name")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("/usr/local/etc/nginx/static/cao/html")]),s._v(" "),a("td",[s._v("/404.html")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("GET")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("/static/imgs/timg.jpeg")]),s._v(" "),a("td",[s._v("/404.html")]),s._v(" "),a("td",[s._v("/usr/local/etc/nginx/static/cao/html")]),s._v(" "),a("td",[s._v("HTTP/1.1")]),s._v(" "),a("td",[s._v("http")]),s._v(" "),a("td",[s._v("if_not_empty")]),s._v(" "),a("td",[s._v("127.0.0.1")]),s._v(" "),a("td",[s._v("52858")]),s._v(" "),a("td",[s._v("127.0.0.1")]),s._v(" "),a("td",[s._v("8080")]),s._v(" "),a("td",[s._v("cao.com")])])])]),s._v(" "),a("h3",{attrs:{id:"rewrite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rewrite"}},[s._v("#")]),s._v(" rewrite")]),s._v(" "),a("ol",[a("li",[s._v("set  设置变量")]),s._v(" "),a("li",[s._v("break 跳出rewrite")]),s._v(" "),a("li",[s._v("if       条件")]),s._v(" "),a("li",[s._v("rewrite  重写")]),s._v(" "),a("li",[s._v("return   设置状态吗")])]),s._v(" "),a("h3",{attrs:{id:"日志分割"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志分割"}},[s._v("#")]),s._v(" 日志分割")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LOGPATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/etc/nginx/logs/access.log\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BASEPATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/etc/nginx/backLogs/"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y%m"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BASEPATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bak")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BASEPATH")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%d%H%M"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(".access.log\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LOGPATH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bak")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LOGPATH")]),s._v("\nnginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ol",[a("li",[s._v("crontab -e")]),s._v(" "),a("li",[s._v("*/1 * * * * sh /usr/local/etc/nginx/backLog.sh")])]),s._v(" "),a("h3",{attrs:{id:"文件目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件目录"}},[s._v("#")]),s._v(" 文件目录")]),s._v(" "),a("ol",[a("li",[s._v("/etc/nginx nginx  文件目录")]),s._v(" "),a("li",[s._v("/run/nginx.pid    nginx 的pid目录")]),s._v(" "),a("li",[s._v("/var/log/nginx    nginx日志的文件目录")]),s._v(" "),a("li",[s._v("/usr/share/nginx/ 静态文件目录")])]),s._v(" "),a("h2",{attrs:{id:"redis安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis安装"}},[s._v("#")]),s._v(" redis安装")]),s._v(" "),a("ol",[a("li",[s._v("cd /src")]),s._v(" "),a("li",[s._v("wget http://download.redis.io/releases/redis-5.0.5.tar.gz")]),s._v(" "),a("li",[s._v("tar xzf redis-5.0.5.tar.gz")]),s._v(" "),a("li",[s._v("cd redis-5.0.5")]),s._v(" "),a("li",[s._v("make")]),s._v(" "),a("li",[s._v("如果报错")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@VM_0_7_centos redis-5.0.5]# make\ncd src && make all\nmake[1]: 进入目录“/src/redis-5.0.5/src”\n    CC adlist.o\n/bin/sh: cc: 未找到命令\nmake[1]: *** [adlist.o] 错误 127\nmake[1]: 离开目录“/src/redis-5.0.5/src”\nmake: *** [all] 错误 2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ol",{attrs:{start:"7"}},[a("li",[s._v("yum install gcc-c++   yum安装gcc")]),s._v(" "),a("li",[s._v("make distclean      清空上次编译失败残留文件 =="),a("strong",[s._v("注意:必须清空后在编译及安装,s否则会报如下错误")]),s._v("==")]),s._v(" "),a("li",[s._v("make && make install    执行编译及安装")]),s._v(" "),a("li",[s._v("cd /usr/local")]),s._v(" "),a("li",[s._v("mkdir redis")]),s._v(" "),a("li",[s._v("cd /src/redis-5.0.5/src")]),s._v(" "),a("li",[s._v("cp redis-cli redis-server /usr/local/redis")]),s._v(" "),a("li",[s._v("cd ..")]),s._v(" "),a("li",[s._v("cp redis.conf /usr/local/redis")]),s._v(" "),a("li",[s._v("修改redis.conf")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("daemonize no => daemonize yes 表示后台启动\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"17"}},[a("li",[s._v("redis-server redis.conf")]),s._v(" "),a("li",[s._v("ps -A | grep redis")])]),s._v(" "),a("blockquote",[a("p",[s._v("如果mac 不能make就 执行 sudo xcode-select -switch /")])]),s._v(" "),a("h3",{attrs:{id:"知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[s._v("#")]),s._v(" 知识点")]),s._v(" "),a("ol",[a("li",[s._v("redis-benchmark 压力测试")]),s._v(" "),a("li",[s._v("redis-check-aof 备份文件")]),s._v(" "),a("li",[s._v("redis-check-rdb")]),s._v(" "),a("li",[s._v("npm install 没有权限的时候 npm install --unsafe-perm=true --allow-root；")])])])}),[],!1,null,null,null);a.default=t.exports}}]);