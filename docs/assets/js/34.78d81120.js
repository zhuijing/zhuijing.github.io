(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{357:function(s,n,a){s.exports=a.p+"assets/img/20201013051901.558e8c1f.jpg"},358:function(s,n,a){s.exports=a.p+"assets/img/202010131742.0eb5e849.png"},476:function(s,n,a){"use strict";a.r(n);var e=a(10),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"手摸手-docker-从入门到实践"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#手摸手-docker-从入门到实践"}},[s._v("#")]),s._v(" 手摸手 Docker 从入门到实践")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("CentOS 版本：7.6")]),s._v(" "),n("p",[s._v("Nginx 版本：1.16.1")]),s._v(" "),n("p",[s._v("Docker 版本：19.03.12")])]),s._v(" "),n("h2",{attrs:{id:"安装-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-配置"}},[s._v("#")]),s._v(" 安装 & 配置")]),s._v(" "),n("ol",[n("li",[s._v("MAC 版本的 docker"),n("a",{attrs:{href:"https://download.docker.com/mac/stable/Docker.dmg",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("配置镜像加速,在 MacOS 的 Docker 配置 Perferences -> Docker Engine")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n  "experimental": false,\n  "features": {\n    "buildkit": true\n  },\n  "registry-mirrors": [\n    "https://reg-mirror.qiniu.com/",\n    "http://hub-mirror.c.163.com/",\n    "https://registry.docker-cn.com/"\n  ]\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("查看配置 "),n("code",[s._v("docker info")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("....\n Registry Mirrors:\n  https://reg-mirror.qiniu.com/\n  http://hub-mirror.c.163.com/\n  https://registry.docker-cn.com/\n  ....\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[s._v("开启一个简单的docker服务")])]),s._v(" "),n("blockquote",[n("p",[n("code",[s._v("docker run hello-world")])])]),s._v(" "),n("h2",{attrs:{id:"镜像-容器-仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#镜像-容器-仓库"}},[s._v("#")]),s._v(" 镜像 & 容器 & 仓库")]),s._v(" "),n("blockquote",[n("p",[s._v("镜像和容器的关系就像类和类的实例，一个镜像可以同时跑多个容器，单个容器实例又可以创建新的镜像。如下图：")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(357),alt:"performance"}})]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("概念")]),s._v(" "),n("th",[s._v("说明")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("镜像Images")]),s._v(" "),n("td",[s._v("用于创建 Docker 容器的只读模板，比如 Ubuntu 16.04系统、Nginx 1.16.0 等，是一个特殊的文件系统，包括容器运行时需要的程序、库、资源、参数等，但不包含任何动态数据，内容在构建后也不会被改变，一个镜像可以创建多个容器")])]),s._v(" "),n("tr",[n("td",[s._v("容器 Container")]),s._v(" "),n("td",[s._v("容器是独立运行、相互隔离的一个或一组应用，是镜像创建的运行实例，实质是进程，可以看作为一个简易版的 Linux 环境 + 运行在其中的应用程序")])]),s._v(" "),n("tr",[n("td",[s._v("客户端 Client")]),s._v(" "),n("td",[s._v("客户端通过命令行或者其他工具使用 Docker SDK (https://docs.docker.com/develop/sdk/) 与 Docker 的守护进程通信")])]),s._v(" "),n("tr",[n("td",[s._v("主机 Host")]),s._v(" "),n("td",[s._v("一个物理或者虚拟的机器用于执行 Docker 守护进程和容器")])]),s._v(" "),n("tr",[n("td",[s._v("仓库 Repository")]),s._v(" "),n("td",[s._v("集中存放镜像文件的地方，分为公有仓库和私有仓库。")])]),s._v(" "),n("tr",[n("td",[s._v("注册服务器 Registry")]),s._v(" "),n("td",[s._v("是一个集中存储、分发镜像的服务，官方的叫 Docker Hub。一个 Docker Registry 中可包含多个仓库，每个仓库可以包含多个标签 Tag 的镜像，不同的标签对应不同的版本")])]),s._v(" "),n("tr",[n("td",[s._v("Docker Machine")]),s._v(" "),n("td",[s._v("Docker Machine 是一个简化 Docker 安装的命令行工具，通过一个简单的命令行即可在相应的平台上安装Docker，比如 VirtualBox、 Digital Ocean、Microsoft Azure")])])])]),s._v(" "),n("h2",{attrs:{id:"容器的生命周期图示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#容器的生命周期图示"}},[s._v("#")]),s._v(" 容器的生命周期图示")]),s._v(" "),n("p",[n("img",{attrs:{src:a(358),alt:"容器的生命周期图示"}})]),s._v(" "),n("blockquote",[n("p",[s._v("容器的五个核心状态，也就是图中色块表示的：Created、Running、Paused、Stopped、Deleted：")])]),s._v(" "),n("ol",[n("li",[s._v("Created：容器已经被创建，容器所需的相关资源已经准备就绪，但容器中的程序还未处于运行状态。")]),s._v(" "),n("li",[s._v("Running：容器正在运行，也就是容器中的应用正在运行。")]),s._v(" "),n("li",[s._v("Paused：容器已暂停，表示容器中的所有程序都处于暂停 ( 不是停止 ) 状态。")]),s._v(" "),n("li",[s._v("Stopped：容器处于停止状态，占用的资源和沙盒环境都依然存在，只是容器中的应用程序均已停止。")]),s._v(" "),n("li",[s._v("Deleted：容器已删除，相关占用的资源及存储在 Docker 中的管理信息也都已释放和移除。")])]),s._v(" "),n("h2",{attrs:{id:"基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[s._v("#")]),s._v(" 基本使用")]),s._v(" "),n("h3",{attrs:{id:"操作命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#操作命令"}},[s._v("#")]),s._v(" 操作命令")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 开启 Docker 开机自启动\n$ sudo systemctl enable docke\n\n# 关闭 Docker 开机自启动\n$ sudo systemctl disable docke\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"镜像命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#镜像命令"}},[s._v("#")]),s._v(" 镜像命令")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 去下载镜像，先从本地找，没有去镜像，最后没有去 hub，标签不写默认为 lastest\n$ docker pull [镜像名]:[标签Tag]\n\n# 列出本机的所有 image 文件，\n-a 显示本地所有镜像（包括中间镜像）， 镜像是可以分层的\n-q 只显示镜像ID，\n--digests 显示镜像的摘要信息\n$ docker image ls\n$ docker images\n\n# 删除 image 文件, -f 强制删除镜像\n$ docker rmi [镜像名][:标签Tag]\n$ docker rmi [镜像名1][:标签Tag] [镜像名2][:标签Tag]    # 删多个\n$ docker rmi $(docker ps -a -q)    # 删全部，后面是子命令\n\n# 查询镜像名称\n--no-trunc 显示完整的镜像描述\n--filter=stars=30 列出star不少于指定值的镜像，\n--filter=is-automated=true 列出自动构建类型的镜像\n$ docker search [关键字]\n\n# 下载镜像，标签 tag 不写默认为 lastest，也可以自己加比如 :3.2.0\n$ docker pull [镜像名][:标签Tag]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h3",{attrs:{id:"容器命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#容器命令"}},[s._v("#")]),s._v(" 容器命令")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 列出本机正在运行的容器\n-a 列出本机所有容器包括终止运行的容器\n-q 静默模式只显示容器编号\n-l 显示最近创建的容器\n$ docker container ls     # 等价于下面这个命令\n$ docker ps\n\n# 新建并启动容器\n$ docker run [option] [容器名]\n--name 为容器指定一个名称；\n-d 容器启动后进入后台，并返回容器 ID，即启动守护式容器；\n-P 随机端口映射；\n-p 80:8080 将本地 80 端口映射到容器的 8080 端口；\nbash 容器启动以后，内部第一个执行的命令。这里启动 bash，保证用户可以使用 Shell；\n-i 以交互模式运行容器，通常与 -t 同时使用；\n-t 为容器重新分配一个伪输入终端，容器的 Shell 会映射到当前的 Shell，然后在本机窗口输入的命令，就会传入容器，通常与 -i  同时使用；\n--rm 在容器终止运行后自动删除容器文件；\n--restart=always 设置容器自启动；\n-v /xxx:/yyy 映射命令，把本机的 xxx 目录映射到容器中的 yyy 目录，也就是说改变本机的 xxx 目录下的内容， 容器 yyy 目录中的内容也会改变；\ndocker run -it -name mycentos // 启动容器并以交互式进入容器\ndocker run -d -name mycentos // 以守护式启动容器. 由于docker机制，不可用docker ps查看\n\n\n# 启动容器\n$ docker start [容器ID]/[容器Names]\n\n# 重启容器\n$ docker restart [容器ID]/[容器Names]\n\n# 终止容器运行\n$ docker kill [容器ID]  # 强行终止，相当于向容器里面的主进程发出 SIGKILL 信号，那些正在进行中的操作会全部丢失\n$ docker kill $(docker ps -a -q) # 强行终止所有容器\n$ docker stop [容器ID]  # 从容终止，相当于向容器里面的主进程发出 SIGTERM 信号，然后过一段时间再发出 SIGKILL 信号\n$ docker stop $(docker ps -a -q) # 终止所有容器\n\n# 终止运行的容器文件，依然会占据硬盘空间，可以使用 docker container rm 命令删除，-f 强制删除可以删除正在运行的容器\n$ docker rm [容器ID]\n$ docker rm `docker ps -aq`    # 删除所有已经停止的容器，因为没停止的rm删不了需要加-f\n\n# 查看容器的输出，-t加入时间戳，-f跟随最新日志打印，--tail数字显示最后多少条，如果docker run时，没有使用-it，就要用这个命令查看输出\n$ docker logs [容器ID]\n\n# 查看容器进程信息\n$ docker top [容器ID]/[容器Names]\n$ docker port [容器ID]/[容器Names]\n\n# 退出容器\n$ exit# 容器退出\nctrl + p + q     # 容器退出，快捷键\n\n# 进入容器\n$ docker attach [容器ID]      # 退出容器时会让容器停止，本机的输入直接输到容器中\n$ docker exec -it [容器ID]    # 退出容器时不会让容器停止，在已运行的容器中执行命令，不创建和启动新的容器\n\n# 设置容器在docker启动时自动启动\n$ docker container update --restart=always [容器名字]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker 容器内的应用进程之间运行于宿主的内核，容器内没有自己的内核，也没有进行硬件的虚拟\n每个容器互相隔离，每个容器都有自己的文件系统，容器之间进行不互相影响\n\ndocker 是一个Client-Server结构的系统，Docker守护进程运行在主机上，然后通过Socket连接从客户端访问，\n守护进程从客户端接受命令并管理运作在主机上的容器。容器是一个运行时环境。\n\n镜像是可以分层的\n\n容器可以看做是简易 linux\n\n\n容器停止了，里面的数据会丢失吗？\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);