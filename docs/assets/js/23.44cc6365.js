(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{360:function(t,a,e){t.exports=e.p+"assets/img/20210308204112.8acd95f3.png"},361:function(t,a,e){t.exports=e.p+"assets/img/20210308204131.a6ecabc6.png"},362:function(t,a,e){t.exports=e.p+"assets/img/202103082056.daf330c1.png"},363:function(t,a,e){t.exports=e.p+"assets/img/20210309100204.69a4be0d.png"},364:function(t,a,e){t.exports=e.p+"assets/img/20210309103706.7702c0df.png"},493:function(t,a,e){"use strict";e.r(a);var s=e(10),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http-基础知识-hypertext-transfer-protocol超文本传输协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-基础知识-hypertext-transfer-protocol超文本传输协议"}},[t._v("#")]),t._v(" http 基础知识 (hypertext transfer protocol超文本传输协议)")]),t._v(" "),a("p",[t._v("HTTP 是一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范")]),t._v(" "),a("p",[t._v("http是基于tcp协议的一个的请求-响应协议，它指定了客户端可能发送给服务器什么样的消息以及得到什么样的响应。")]),t._v(" "),a("p",[t._v("他指定了发送和接受请求的数据格式，比如说发送请求的时候携带的请求头，请求体。响应头响应体，状态码等")]),t._v(" "),a("h2",{attrs:{id:"网络模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络模型"}},[t._v("#")]),t._v(" 网络模型")]),t._v(" "),a("p",[t._v("网络是一个复杂的系统，不仅包括大量的应用程序、端系统、通信链路、分组交换机等，还有各种各样的协议组成，那么现在我们就来聊一下网络中的协议层次。")]),t._v(" "),a("p",[t._v("为了给网络协议的设计提供一个结构，网络设计者以分层(layer)的方式组织协议，每个协议属于层次模型之一。每一层都是向它的上一层提供服务(service)，即所谓的服务模型(service model)。每个分层中所有的协议称为 协议栈(protocol stack)。因特网的协议栈由五个部分组成："),a("code",[t._v("物理层、链路层、网络层、运输层和应用层。")]),t._v("我们采用自上而下的方法研究其原理，也就是应用层 -> 物理层的方式。")]),t._v(" "),a("h2",{attrs:{id:"应用层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用层"}},[t._v("#")]),t._v(" 应用层")]),t._v(" "),a("p",[t._v("应用层是网络应用程序和网络协议存放的分层，因特网的应用层包括许多协议，例如我们学 web 离不开的 HTTP，电子邮件传送协议 SMTP、端系统文件上传协议 FTP、还有为我们进行域名解析的 DNS 协议。应用层协议分布在多个端系统上，一个端系统应用程序与另外一个端系统应用程序交换信息分组，我们把位于应用层的信息分组称为 报文(message)。")]),t._v(" "),a("h2",{attrs:{id:"运输层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运输层"}},[t._v("#")]),t._v(" 运输层")]),t._v(" "),a("p",[t._v("因特网的运输层在应用程序断点之间传送应用程序报文，在这一层主要有两种传输协议 TCP和 UDP，利用这两者中的任何一个都能够传输报文，不过这两种协议有巨大的不同。")]),t._v(" "),a("p",[t._v("TCP 向它的应用程序提供了面向连接的服务，它能够控制并确认报文是否到达，并提供了拥塞机制来控制网络传输，因此当网络拥塞时，会抑制其传输速率。")]),t._v(" "),a("p",[t._v("UDP 协议向它的应用程序提供了无连接服务。它不具备可靠性的特征，没有流量控制，也没有拥塞控制。我们把运输层的分组称为 报文段(segment)")]),t._v(" "),a("h2",{attrs:{id:"网络层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络层"}},[t._v("#")]),t._v(" 网络层")]),t._v(" "),a("p",[t._v("因特网的网络层负责将称为 数据报(datagram) 的网络分层从一台主机移动到另一台主机。网络层一个非常重要的协议是 IP 协议，所有具有网络层的因特网组件都必须运行 IP 协议，IP 协议是一种网际协议，除了 IP 协议外，网络层还包括一些其他网际协议和路由选择协议，一般把网络层就称为 IP 层，由此可知 IP 协议的重要性。")]),t._v(" "),a("h2",{attrs:{id:"链路层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链路层"}},[t._v("#")]),t._v(" 链路层")]),t._v(" "),a("p",[t._v("现在我们有应用程序通信的协议，有了给应用程序提供运输的协议，还有了用于约定发送位置的 IP 协议，那么如何才能真正的发送数据呢？为了将分组从一个节点（主机或路由器）运输到另一个节点，网络层必须依靠链路层提供服务。链路层的例子包括以太网、WiFi 和电缆接入的 DOCSIS 协议，因为数据从源目的地传送通常需要经过几条链路，一个数据包可能被沿途不同的链路层协议处理，我们把链路层的分组称为 帧(frame)")]),t._v(" "),a("h2",{attrs:{id:"物理层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#物理层"}},[t._v("#")]),t._v(" 物理层")]),t._v(" "),a("p",[t._v("虽然链路层的作用是将帧从一个端系统运输到另一个端系统，而物理层的作用是将帧中的一个个 比特 从一个节点运输到另一个节点，物理层的协议仍然使用链路层协议，这些协议与实际的物理传输介质有关，例如，以太网有很多物理层协议：关于双绞铜线、关于同轴电缆、关于光纤等等。\n20210308204112.png")]),t._v(" "),a("h2",{attrs:{id:"osi-模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#osi-模型"}},[t._v("#")]),t._v(" OSI 模型")]),t._v(" "),a("p",[t._v("我们上面讨论的计算网络协议模型不是唯一的 协议栈，ISO（国际标准化组织）提出来计算机网络应该按照7层来组织，那么7层网络协议栈与5层的区别在哪里？\n"),a("img",{attrs:{src:e(360),alt:"20210308204112.png"}}),t._v(" "),a("img",{attrs:{src:e(361),alt:"20210308204131.png"}})]),t._v(" "),a("p",[t._v("从图中可以一眼看出，OSI 要比上面的网络模型多了 表示层 和 会话层，其他层基本一致。表示层主要包括数据压缩和数据加密以及数据描述，数据描述使得应用程序不必担心计算机内部存储格式的问题，而会话层提供了数据交换的定界和同步功能，包括建立检查点和恢复方案。")]),t._v(" "),a("h2",{attrs:{id:"浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器"}},[t._v("#")]),t._v(" 浏览器")]),t._v(" "),a("p",[t._v("浏览器是使用 HTTP 协议的主要载体.")]),t._v(" "),a("p",[t._v("浏览器正式的名字叫做 Web Broser，顾名思义，就是检索、查看互联网上网页资源的应用程序，名字里的 Web，实际上指的就是 World Wide Web，也就是万维网。")]),t._v(" "),a("h2",{attrs:{id:"cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[t._v("#")]),t._v(" CDN")]),t._v(" "),a("p",[t._v("CDN的全称是Content Delivery Network，即内容分发网络，它应用了 HTTP 协议里的缓存和代理技术，代替源站响应客户端的请求。CDN 是构建在现有网络基础之上的网络，它依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。CDN的关键技术主要有内容存储和分发技术。")]),t._v(" "),a("h2",{attrs:{id:"waf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#waf"}},[t._v("#")]),t._v(" WAF")]),t._v(" "),a("p",[t._v("WAF 是一种 Web 应用程序防护系统（Web Application Firewall，简称 WAF），它是一种通过执行一系列针对HTTP / HTTPS的安全策略来专门为Web应用提供保护的一款产品，它是应用层面的防火墙，专门检测 HTTP 流量，是防护 Web 应用的安全技术。")]),t._v(" "),a("p",[t._v("WAF 通常位于 Web 服务器之前，可以阻止如 SQL 注入、跨站脚本等攻击，目前应用较多的一个开源项目是 ModSecurity，它能够完全集成进 Apache 或 Nginx。")]),t._v(" "),a("h2",{attrs:{id:"webservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webservice"}},[t._v("#")]),t._v(" WebService")]),t._v(" "),a("p",[t._v("WebService 是一种 Web 应用程序，WebService是一种跨编程语言和跨操作系统平台的远程调用技术。")]),t._v(" "),a("p",[t._v("Web Service 是一种由 W3C 定义的应用服务开发规范，使用 client-server 主从架构，通常使用 WSDL 定义服务接口，使用 HTTP 协议传输 XML 或 SOAP 消息，它是一个基于 Web（HTTP）的服务架构技术，既可以运行在内网，也可以在适当保护后运行在外网。")]),t._v(" "),a("h2",{attrs:{id:"tcp-ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip"}},[t._v("#")]),t._v(" TCP/IP")]),t._v(" "),a("p",[t._v("TCP/IP 协议你一定听过，TCP/IP 我们一般称之为协议簇，什么意思呢？就是 TCP/IP 协议簇中不仅仅只有 TCP 协议和 IP 协议，它是一系列网络通信协议的统称。而其中最核心的两个协议就是 TCP / IP 协议，其他的还有 UDP、ICMP、ARP 等等，共同构成了一个复杂但有层次的协议栈。")]),t._v(" "),a("p",[t._v("TCP 协议的全称是 Transmission Control Protocol 的缩写，意思是传输控制协议，HTTP 使用 TCP 作为通信协议，这是因为 TCP 是一种可靠的协议，而可靠能保证数据不丢失。")]),t._v(" "),a("p",[t._v("IP 协议的全称是 Internet Protocol 的缩写，它主要解决的是通信双方寻址的问题。IP 协议使用 IP 地址 来标识互联网上的每一台计算机，可以把 IP 地址想象成为你手机的电话号码，你要与他人通话必须先要知道他人的手机号码，计算机网络中信息交换必须先要知道对方的 IP 地址")]),t._v(" "),a("h2",{attrs:{id:"dns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[t._v("#")]),t._v(" DNS")]),t._v(" "),a("p",[t._v("你有没有想过为什么你可以通过键入 www.google.com 就能够获取你想要的网站？我们上面说到，计算机网络中的每个端系统都有一个 IP 地址存在，而把 IP 地址转换为便于人类记忆的协议就是 DNS 协议。")]),t._v(" "),a("p",[t._v("DNS 的全称是域名系统（Domain Name System，缩写：DNS），它作为将域名和 IP 地址相互映射的一个分布式数据库，能够使人更方便地访问互联网。")]),t._v(" "),a("h2",{attrs:{id:"uri-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uri-url"}},[t._v("#")]),t._v(" URI / URL")]),t._v(" "),a("p",[t._v("URI的全称是（Uniform Resource Identifier），中文名称是统一资源标识符，使用它就能够唯一地标记互联网上资源。")]),t._v(" "),a("p",[t._v("URL的全称是（Uniform Resource Locator），中文名称是统一资源定位符，也就是我们俗称的网址，它实际上是 URI 的一个子集。")]),t._v(" "),a("p",[t._v("URI 不仅包括 URL，还包括 URN（统一资源名称），它们之间的关系如下")]),t._v(" "),a("p",[a("img",{attrs:{src:e(362),alt:"202103082056.png"}})]),t._v(" "),a("h2",{attrs:{id:"https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" HTTPS")]),t._v(" "),a("p",[t._v("HTTP 一般是明文传输，很容易被攻击者窃取重要信息，鉴于此，HTTPS 应运而生。HTTPS 的全称为 （Hyper Text Transfer Protocol over SecureSocket Layer），全称有点长，HTTPS 和 HTTP 有很大的不同在于 HTTPS 是以安全为目标的 HTTP 通道，在 HTTP 的基础上通过传输加密和身份认证保证了传输过程的安全性。HTTPS 在 HTTP 的基础上增加了 SSL 层，也就是说 HTTPS = HTTP + SSL。")]),t._v(" "),a("h2",{attrs:{id:"http-请求响应过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-请求响应过程"}},[t._v("#")]),t._v(" HTTP 请求响应过程")]),t._v(" "),a("p",[t._v("当你在浏览器中输入网址后，到底发生了什么事情？你想要的内容是如何展现出来的？让我们通过一个例子来探讨一下，我们假设访问的 URL 地址为 http://www.someSchool.edu/someDepartment/home.index，当我们输入网址并点击回车时，浏览器内部会进行如下操作")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("DNS服务器会首先进行域名的映射，找到访问www.someSchool.edu所在的地址，然后HTTP 客户端进程在 80 端口发起一个到服务器 www.someSchool.edu 的 TCP 连接（80 端口是 HTTP 的默认端口）。在客户和服务器进程中都会有一个套接字与其相连。")])]),t._v(" "),a("li",[a("p",[t._v("HTTP 客户端通过它的套接字向服务器发送一个 HTTP 请求报文。该报文中包含了路径 someDepartment/home.index 的资源，我们后面会详细讨论 HTTP 请求报文。")])]),t._v(" "),a("li",[a("p",[t._v("HTTP 服务器通过它的套接字接受该报文，进行请求的解析工作，并从其存储器(RAM 或磁盘)中检索出对象 www.someSchool.edu/someDepartment/home.index，然后把检索出来的对象进行封装，封装到 HTTP 响应报文中，并通过套接字向客户进行发送。")])]),t._v(" "),a("li",[a("p",[t._v("HTTP 服务器随即通知 TCP 断开 TCP 连接，实际上是需要等到客户接受完响应报文后才会断开 TCP 连接。")])]),t._v(" "),a("li",[a("p",[t._v("HTTP 客户端接受完响应报文后，TCP 连接会关闭。HTTP 客户端从响应中提取出报文中是一个 HTML 响应文件，并检查该 HTML 文件，然后循环检查报文中其他内部对象。\n检查完成后，HTTP 客户端会把对应的资源通过显示器呈现给用户。")])])]),t._v(" "),a("h2",{attrs:{id:"http-请求特征"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-请求特征"}},[t._v("#")]),t._v(" HTTP 请求特征")]),t._v(" "),a("ol",[a("li",[t._v("支持客户-服务器模式")]),t._v(" "),a("li",[t._v("简单快速：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有 GET、HEAD、POST。每种方法规定了客户与服务器联系的类型不同。由于 HTTP 协议简单，使得 HTTP 服务器的程序规模小，因而通信速度很快。")]),t._v(" "),a("li",[t._v("灵活：HTTP 允许传输任意类型的数据对象。正在传输的类型由 Content-Type 加以标记。")]),t._v(" "),a("li",[t._v("无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。")]),t._v(" "),a("li",[t._v("无状态：HTTP 协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。")])]),t._v(" "),a("h2",{attrs:{id:"详解-http-报文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#详解-http-报文"}},[t._v("#")]),t._v(" 详解 HTTP 报文")]),t._v(" "),a("p",[t._v("HTTP 协议主要由三大部分组成：")]),t._v(" "),a("ol",[a("li",[t._v("起始行（start line）：描述请求或响应的基本信息；")]),t._v(" "),a("li",[t._v("头部字段（header）：使用 key-value 形式更详细地说明报文；")]),t._v(" "),a("li",[t._v("消息正文（entity）：实际传输的数据，它不一定是纯文本，可以是图片、视频等二进制数据。")])]),t._v(" "),a("p",[t._v("其中起始行和头部字段并成为 请求头 或者 响应头，统称为 Header；消息正文也叫做实体，称为 body。HTTP 协议规定每次发送的报文必须要有 Header，但是可以没有 body，也就是说头信息是必须的，实体信息可以没有。而且在 header 和 body 之间必须要有一个空行（CRLF）")]),t._v(" "),a("h2",{attrs:{id:"http-请求方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-请求方法"}},[t._v("#")]),t._v(" HTTP 请求方法")]),t._v(" "),a("p",[t._v("HTTP 请求方法一般分为 8 种，它们分别是")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("GET 获取资源，GET 方法用来请求访问已被 URI 识别的资源。指定的资源经服务器端解析后返回响应内容。也就是说，如果请求的资源是文本，那就保持原样返回；")])]),t._v(" "),a("li",[a("p",[t._v("POST 传输实体，虽然 GET 方法也可以传输主体信息，但是便于区分，我们一般不用 GET 传输实体信息，反而使用 POST 传输实体信息，")])]),t._v(" "),a("li",[a("p",[t._v("PUT 传输文件，PUT 方法用来传输文件。就像 FTP 协议的文件上传一样，要求在请求报文的主体中包含文件内容，然后保存到请求 URI 指定的位置。")])])]),t._v(" "),a("p",[t._v("但是，鉴于 HTTP 的 PUT 方法自身不带验证机制，任何人都可以上传文件 , 存在安全性问题，因此一般的 W eb 网站不使用该方法。若配合 W eb 应用程序的验证机制，或架构设计采用REST（REpresentational State Transfer，表征状态转移）标准的同类 Web 网站，就可能会开放使用 PUT 方法。")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[t._v("HEAD 获得响应首部，HEAD 方法和 GET 方法一样，只是不返回报文主体部分。用于确认 URI 的有效性及资源更新的日期时间等。")])]),t._v(" "),a("li",[a("p",[t._v("DELETE 删除文件，DELETE 方法用来删除文件，是与 PUT 相反的方法。DELETE 方法按请求 URI 删除指定的资源。")])]),t._v(" "),a("li",[a("p",[t._v("OPTIONS 询问支持的方法，OPTIONS 方法用来查询针对请求 URI 指定的资源支持的方法。")])]),t._v(" "),a("li",[a("p",[t._v("TRACE 追踪路径，TRACE 方法是让 Web 服务器端将之前的请求通信环回给客户端的方法。")])]),t._v(" "),a("li",[a("p",[t._v("CONNECT 要求用隧道协议连接代理，CONNECT 方法要求在与代理服务器通信时建立隧道，实现用隧道协议进行 TCP 通信。主要使用 SSL（Secure Sockets Layer，安全套接层）和 TLS（Transport Layer Security，传输层安全）协议把通信内容加 密后经网络隧道传输。")])])]),t._v(" "),a("h2",{attrs:{id:"http-请求-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-请求-url"}},[t._v("#")]),t._v(" HTTP 请求 URL")]),t._v(" "),a("p",[a("code",[t._v("http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument")])]),t._v(" "),a("ul",[a("li",[t._v("协议： http://")]),t._v(" "),a("li",[t._v("主机：www.example.com")]),t._v(" "),a("li",[t._v("端口：:80")]),t._v(" "),a("li",[t._v("路径：/path/to/myfile.html")]),t._v(" "),a("li",[t._v("查询：?key1=value1&key2=value2")]),t._v(" "),a("li",[t._v("片段hash：#SomewhereInTheDocument")])]),t._v(" "),a("h2",{attrs:{id:"请求头部"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求头部"}},[t._v("#")]),t._v(" 请求头部")]),t._v(" "),a("p",[t._v("HTTP 的请求标头分为四种： 通用标头、请求标头、响应标头 和 实体标头，")]),t._v(" "),a("h3",{attrs:{id:"通用标头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用标头"}},[t._v("#")]),t._v(" 通用标头")]),t._v(" "),a("p",[t._v("通用标头主要有三个，分别是 Date、Cache-Control 和 Connection")]),t._v(" "),a("h4",{attrs:{id:"date"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date"}},[t._v("#")]),t._v(" Date")]),t._v(" "),a("p",[t._v("Date 是一个通用标头，它可以出现在请求标头和响应标头中，它的基本表示如下")]),t._v(" "),a("p",[a("code",[t._v("Date: Wed, 21 Oct 2015 07:28:00 GMT")])]),t._v(" "),a("p",[t._v("表示的是格林威治标准时间，这个时间要比北京时间慢八个小时")]),t._v(" "),a("h4",{attrs:{id:"cache-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[t._v("#")]),t._v(" Cache-Control")]),t._v(" "),a("h4",{attrs:{id:"connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connection"}},[t._v("#")]),t._v(" Connection")]),t._v(" "),a("p",[t._v("Connection 决定当前事务（一次三次握手和四次挥手）完成后，是否会关闭网络连接。Connection 有两种，一种是持久性连接，即一次事务完成后不关闭网络连接")]),t._v(" "),a("p",[a("code",[t._v("Connection: keep-alive")])]),t._v(" "),a("p",[t._v("另一种是非持久性连接，即一次事务完成后关闭网络连接")]),t._v(" "),a("p",[a("code",[t._v("Connection: close")])]),t._v(" "),a("h3",{attrs:{id:"实体标头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实体标头"}},[t._v("#")]),t._v(" 实体标头")]),t._v(" "),a("p",[t._v("实体标头是描述消息正文内容的 HTTP 标头。实体标头用于 HTTP 请求和响应中。头部Content-Length、 Content-Language、 Content-Encoding 是实体头。")]),t._v(" "),a("ul",[a("li",[t._v("Content-Length 实体报头指示实体主体的大小，以字节为单位，发送到接收方。")]),t._v(" "),a("li",[t._v("Content-Language 实体报头描述了客户端或者服务端能够接受的语言")]),t._v(" "),a("li",[t._v("Content-Encoding 指示对实体应用了何种编码。常见的内容编码有这几种： gzip、compress、deflate、identity")])]),t._v(" "),a("h3",{attrs:{id:"请求标头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求标头"}},[t._v("#")]),t._v(" 请求标头")]),t._v(" "),a("p",[a("img",{attrs:{src:e(363),alt:"20210309100204.png"}})]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Host")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" developer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mozilla"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org\nUser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Agent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Mozilla"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Macintosh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Intel Mac "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" rv"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Gecko"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20100101")]),t._v(" Firefox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Accept")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xhtml"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*;q=0.8\nAccept-Language: en-US,en;q=0.5\nAccept-Encoding: gzip, deflate, br\nReferer: https://developer.mozilla.org/testpage.html\nConnection: keep-alive\nUpgrade-Insecure-Requests: 1\nIf-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT\nIf-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"\nCache-Control: max-age=0 \n')])])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h4",{attrs:{id:"host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[t._v("#")]),t._v(" Host")]),t._v(" "),a("p",[t._v("Host 请求头指明了服务器的域名（对于虚拟主机来说），以及（可选的）服务器监听的TCP端口号。如果没有给定端口号，会自动使用被请求服务的默认端口（比如请求一个 HTTP 的 URL 会自动使用80作为端口）。")]),t._v(" "),a("h4",{attrs:{id:"referer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#referer"}},[t._v("#")]),t._v(" Referer")]),t._v(" "),a("p",[t._v("HTTP Referer 属性是请求标头的一部分，当浏览器向 web 服务器发送请求的时候，一般会带上 Referer，告诉服务器该网页是从哪个页面链接过来的，服务器因此可以获得一些信息用于处理。")]),t._v(" "),a("h4",{attrs:{id:"if-modified-since"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-modified-since"}},[t._v("#")]),t._v(" If-Modified-Since")]),t._v(" "),a("p",[t._v("HTTP 的 If-Modified-Since 使其成为条件请求：")]),t._v(" "),a("ul",[a("li",[t._v("返回200，只有在给定日期的最后一次修改资源后，服务器才会以200状态发送回请求的资源。")]),t._v(" "),a("li",[t._v("如果请求从开始以来没有被修改过，响应会返回304并且没有任何响应体")])]),t._v(" "),a("p",[t._v("If-Modified-Since 通常会与 If-None-Match 搭配使用，If-Modified-Since 用于确认代理或客户端拥有的本地资源的有效性。获取资源的更新日期时间，可通过确认首部字段 Last-Modified 来确定。")]),t._v(" "),a("p",[t._v("大白话说就是如果在 Last-Modified 之后更新了服务器资源，那么服务器会响应200，如果在 Last-Modified 之后没有更新过资源，则返回 304。")]),t._v(" "),a("h4",{attrs:{id:"if-none-match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-none-match"}},[t._v("#")]),t._v(" If-None-Match")]),t._v(" "),a("p",[t._v("If-None-Match HTTP请求标头使请求成为条件请求。 对于 GET 和 HEAD 方法，仅当服务器没有与给定资源匹配的 ETag 时，服务器才会以200状态发送回请求的资源。 对于其他方法，仅当最终现有资源的ETag与列出的任何值都不匹配时，才会处理请求。")]),t._v(" "),a("h4",{attrs:{id:"内容协商"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容协商"}},[t._v("#")]),t._v(" 内容协商")]),t._v(" "),a("p",[t._v("内容协商机制是指客户端和服务器端就响应的资源内容进行交涉，然后提供给客户端最为适合的资源。内容协商会以响应资源的语言、字符集、编码方式等作为判断的标准。")]),t._v(" "),a("p",[t._v("内容协商的分类有很多种，主要的几种类型是 Accept、Accept-Charset、Accept-Encoding、Accept-Language、Content-Language。")]),t._v(" "),a("h4",{attrs:{id:"accept"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accept"}},[t._v("#")]),t._v(" Accept")]),t._v(" "),a("p",[t._v("接受请求 HTTP 标头会通告客户端其能够理解的 MIME 类型")]),t._v(" "),a("blockquote",[a("p",[t._v("MIME: MIME (Multipurpose Internet Mail Extensions) 是描述消息内容类型的因特网标准。MIME 消息能包含文本、图像、音频、视频以及其他应用程序专用的数据。")])]),t._v(" "),a("p",[t._v("MIME 类型都有哪些呢")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("文本文件： text/html、text/plain、text/css、application/xhtml+xml、application/xml")])]),t._v(" "),a("li",[a("p",[t._v("图片文件： image/jpeg、image/gif、image/png")])]),t._v(" "),a("li",[a("p",[t._v("视频文件： video/mpeg、video/quicktime")])]),t._v(" "),a("li",[a("p",[t._v("应用程序二进制文件： application/octet-stream、application/zip")])])]),t._v(" "),a("p",[t._v("一般 MIME 类型也会和 q 这个属性一起使用，q 是什么？q 表示的是权重，来看一个例子")]),t._v(" "),a("p",[a("code",[t._v("Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("q")]),t._v(" "),a("th",[t._v("MIME")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1.0")]),t._v(" "),a("td",[t._v("text/html")])]),t._v(" "),a("tr",[a("td",[t._v("1.0")]),t._v(" "),a("td",[t._v("application/xhtml+xml")])]),t._v(" "),a("tr",[a("td",[t._v("0.9")]),t._v(" "),a("td",[t._v("application/xml")])]),t._v(" "),a("tr",[a("td",[t._v("0.8")]),t._v(" "),a("td",[t._v("* / *")])])])]),t._v(" "),a("h4",{attrs:{id:"accept-charset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accept-charset"}},[t._v("#")]),t._v(" Accept-Charset")]),t._v(" "),a("p",[t._v("accept-charset 属性规定服务器处理表单数据所接受的字符集。")]),t._v(" "),a("p",[t._v("accept-charset 属性允许您指定一系列字符集，服务器必须支持这些字符集，从而得以正确解释表单中的数据。")]),t._v(" "),a("p",[t._v("该属性的值是用引号包含字符集名称列表。如果可接受字符集与用户所使用的字符即不相匹配的话，浏览器可以选择忽略表单或是将该表单区别对待。")]),t._v(" "),a("p",[t._v("此属性的默认值是 unknown，表示表单的字符集与包含表单的文档的字符集相同。")]),t._v(" "),a("p",[t._v("常用的字符集有： UTF-8 - Unicode 字符编码 ； ISO-8859-1 - 拉丁字母表的字符编码")]),t._v(" "),a("h4",{attrs:{id:"accept-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accept-language"}},[t._v("#")]),t._v(" Accept-Language")]),t._v(" "),a("p",[t._v("首部字段 Accept-Language 用来告知服务器用户代理能够处理的自然语言集（指中文或英文等），以及自然语言集的相对优先级。可一次指定多种自然语言集。\n和 Accept 首部字段一样，按权重值 q来表示相对优先级。")]),t._v(" "),a("p",[a("code",[t._v("Accept-Language: en-US,en;q=0.5")])]),t._v(" "),a("h3",{attrs:{id:"响应标头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应标头"}},[t._v("#")]),t._v(" 响应标头")]),t._v(" "),a("p",[a("img",{attrs:{src:e(364),alt:"20210309103706.png"}})]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OK")]),t._v("\nAccess"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Allow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Connection")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Keep"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Alive\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" gzip\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Mon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" Jul "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2016")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("06")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Etag")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c561c68d0ba92bbeb8b0f612a9199f722e3a621a"')]),t._v("\nKeep"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Alive"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("997")]),t._v("\nLast"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Modified"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Mon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" Jul "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2016")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("02")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("04")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Server")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Apache\nSet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Cookie"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mykey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("myvalue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" expires"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Mon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Jul"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("06")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Max"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31449600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" secure\nTransfer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" chunked\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Vary")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Accept"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding\nx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("frame"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DENY")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h4",{attrs:{id:"响应状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应状态码"}},[t._v("#")]),t._v(" 响应状态码")]),t._v(" "),a("p",[t._v("以 2xx 为开头的都表示请求成功响应。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("状态码")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("200")]),t._v(" "),a("td",[t._v("成功响应")])]),t._v(" "),a("tr",[a("td",[t._v("204")]),t._v(" "),a("td",[t._v("请求处理成功，但是没有资源可以返回")])]),t._v(" "),a("tr",[a("td",[t._v("206")]),t._v(" "),a("td",[t._v("对资源某一部分进行响应，由Content-Range 指定范围的实体内容。")])])])]),t._v(" "),a("p",[t._v("以 3xx 为开头的都表示需要进行附加操作以完成请求")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("状态码")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("301")]),t._v(" "),a("td",[t._v("永久性重定向，该状态码表示请求的资源已经重新分配 URI，以后应该使用资源现有的 URI")])]),t._v(" "),a("tr",[a("td",[t._v("302")]),t._v(" "),a("td",[t._v("临时性重定向。该状态码表示请求的资源已被分配了新的 URI，希望用户（本次）能使用新的 URI 访问。")])]),t._v(" "),a("tr",[a("td",[t._v("303")]),t._v(" "),a("td",[t._v("该状态码表示由于请求对应的资源存在着另一个 URI，应使用 GET 方法定向获取请求的资源。")])]),t._v(" "),a("tr",[a("td",[t._v("304")]),t._v(" "),a("td",[t._v("该状态码表示客户端发送附带条件的请求时，服务器端允许请求访问资源，但未满足条件的情况。")])]),t._v(" "),a("tr",[a("td",[t._v("307")]),t._v(" "),a("td",[t._v("临时重定向。该状态码与 302 Found 有着相同的含义。")])])])]),t._v(" "),a("p",[t._v("以 4xx 的响应结果表明客户端是发生错误的原因所在。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("状态码")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("400")]),t._v(" "),a("td",[t._v("该状态码表示请求报文中存在语法错误。当错误发生时，需修改请求的内容后再次发送请求。")])]),t._v(" "),a("tr",[a("td",[t._v("401")]),t._v(" "),a("td",[t._v("该状态码表示发送的请求需要有通过 HTTP 认证（BASIC 认证、DIGEST 认证）的认证信息。")])]),t._v(" "),a("tr",[a("td",[t._v("403")]),t._v(" "),a("td",[t._v("该状态码表明对请求资源的访问被服务器拒绝了。")])]),t._v(" "),a("tr",[a("td",[t._v("404")]),t._v(" "),a("td",[t._v("该状态码表明服务器上无法找到请求的资源。")])])])]),t._v(" "),a("p",[t._v("以 5xx 为开头的响应标头都表示服务器本身发生错误")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("状态码")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("500")]),t._v(" "),a("td",[t._v("该状态码表明服务器端在执行请求时发生了错误。")])]),t._v(" "),a("tr",[a("td",[t._v("503")]),t._v(" "),a("td",[t._v("该状态码表明服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。")])])])]),t._v(" "),a("h4",{attrs:{id:"access-control-allow-origin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-control-allow-origin"}},[t._v("#")]),t._v(" Access-Control-Allow-Origin")]),t._v(" "),a("p",[t._v("一个返回的 HTTP 标头可能会具有 Access-Control-Allow-Origin ，Access-Control-Allow-Origin 指定一个来源，它告诉浏览器允许该来源进行资源访问。 否则-对于没有凭据的请求 *通配符，告诉浏览器允许任何源访问资源。例如，要允许源 https://mozilla.org 的代码访问资源，可以指定：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Access"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Allow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mozilla"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Vary")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Origin\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("如果服务器指定单个来源而不是 *通配符的话 ，则服务器还应在 Vary 响应标头中包含 Origin ，以向客户端指示 服务器响应将根据原始请求标头的值而有所不同。")]),t._v(" "),a("h4",{attrs:{id:"keep-alive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive"}},[t._v("#")]),t._v(" Keep-Alive")]),t._v(" "),a("p",[t._v("上面我们提到，HTTP 报文标头会分为四种，这其实是按着上下文来分类的")]),t._v(" "),a("p",[t._v("还有一种分类是根据代理进行分类，根据代理会分为端到端头 和 逐跳标头")]),t._v(" "),a("p",[t._v("而 Keep-Alive 表示的是 Connection 非持续连接的存活时间，如下")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Connection: Keep-Alive\nKeep-Alive: timeout=5, max=997\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("Keep-Alive 有两个参数，它们是以逗号分隔的参数列表，每个参数由一个标识符和一个由等号 = 分隔的值组成。")]),t._v(" "),a("p",[t._v("timeout：指示空闲连接必须保持打开状态的最短时间（以秒为单位）。")]),t._v(" "),a("p",[t._v("max：指示在关闭连接之前可以在此连接上发送的最大请求数。")]),t._v(" "),a("p",[t._v("上述 HTTP 代码的意思就是限制最大的超时时间是 5s 和 最大的连接请求是 997 个。")]),t._v(" "),a("h4",{attrs:{id:"server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[t._v("#")]),t._v(" Server")]),t._v(" "),a("p",[t._v("服务器标头包含有关原始服务器用来处理请求的软件的信息。")]),t._v(" "),a("p",[t._v("应该避免使用过于冗长和详细的 Server 值，因为它们可能会泄露内部实施细节，这可能会使攻击者容易地发现并利用已知的安全漏洞。例如下面这种写法")]),t._v(" "),a("p",[a("code",[t._v("Server: Apache/2.4.1 (Unix)")])]),t._v(" "),a("h4",{attrs:{id:"set-cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-cookie"}},[t._v("#")]),t._v(" Set-Cookie")]),t._v(" "),a("h4",{attrs:{id:"transfer-encoding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transfer-encoding"}},[t._v("#")]),t._v(" Transfer-Encoding")]),t._v(" "),a("p",[t._v("首部字段 Transfer-Encoding 规定了传输报文主体时采用的编码方式。")]),t._v(" "),a("p",[a("code",[t._v("Transfer-Encoding: chunked")])]),t._v(" "),a("p",[t._v("HTTP /1.1 的传输编码方式仅对分块传输编码有效。")]),t._v(" "),a("h4",{attrs:{id:"x-frame-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#x-frame-options"}},[t._v("#")]),t._v(" X-Frame-Options")]),t._v(" "),a("p",[t._v("首部字段 X-Frame-Options 属于 HTTP 响应首部，用于控制网站内容在其他 Web 网站的 Frame 标签内的显示问题。其主要目的是为了防止点击劫持（clickjacking）攻击。")]),t._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 教程 MDN"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("https://juejin.cn/post/6844903865410650126")]),t._v(" "),a("li",[t._v("https://juejin.cn/post/6844904121510854664#comment")]),t._v(" "),a("li",[t._v("https://juejin.cn/post/6844903991411736590")]),t._v(" "),a("li",[t._v("https://mp.weixin.qq.com/s/UmSud7L4Bwz3EK1Zf7vcpw")])])])}),[],!1,null,null,null);a.default=r.exports}}]);