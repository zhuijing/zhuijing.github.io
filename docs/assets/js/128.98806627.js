(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{517:function(t,n,e){"use strict";e.r(n);var v=e(10),_=Object(v.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"ascll-unicode编码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ascll-unicode编码"}},[t._v("#")]),t._v(" ascll unicode编码")]),t._v(" "),n("p",[t._v("4个字节的字符")]),t._v(" "),n("p",[t._v("ascll 是unicode子集")]),t._v(" "),n("p",[t._v("1kb=1024b\n1b就是1字节\n8个 二进制位构成1个字节")]),t._v(" "),n("p",[t._v("相当于一个字符，8位=1字节")]),t._v(" "),n("p",[t._v("1字节(Byte)=8位(bit)")]),t._v(" "),n("p",[t._v("一个位就代表一个0或1（即二进制）")]),t._v(" "),n("p",[t._v("bit")]),t._v(" "),n("p",[t._v("位 bit")]),t._v(" "),n("p",[t._v("字节 Byte")]),t._v(" "),n("p",[t._v("字符 1个或多个字节组成")]),t._v(" "),n("p",[t._v("ASCII")]),t._v(" "),n("p",[t._v("UNICODE")]),t._v(" "),n("p",[t._v("utf-8")]),t._v(" "),n("p",[t._v("utf-16")]),t._v(" "),n("p",[t._v("utf-32")]),t._v(" "),n("p",[t._v("utf-8是一种变长的编码方式，它可以使用1~4个字节表示一个符号，根据不同的符号而变化字节长度；\nutf-16是，好处在于大部分字符都以固定长度的字节 (2字节) 储存，但UTF-16无法兼容于ASCLL编码；\nUTF-32(或 UCS-4)是以4个字节的长度固定存储的。")]),t._v(" "),n("h2",{attrs:{id:"ascii"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ascii"}},[t._v("#")]),t._v(" ASCII")]),t._v(" "),n("p",[t._v("ASCII 码使用指定的7 位或8 位二进制数组合来表示128 或256 种可能的字符。标准ASCII 码也叫基础ASCII码，使用7 位二进制数（剩下的1位二进制为0）来表示所有的大写和小写字母，数字0 到9、标点符号，以及在美式英语中使用的特殊控制字符")]),t._v(" "),n("h2",{attrs:{id:"unicode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#unicode"}},[t._v("#")]),t._v(" unicode")]),t._v(" "),n("p",[t._v("http://www.unicode.org/charts/PDF/U0000.pdf")]),t._v(" "),n("p",[t._v("NICODE")]),t._v(" "),n("p",[t._v("基本多文种平面 基本多文种平面，BMP(Basic Multilingual Plane)，或称第零平面(Plane 0)，是Unicode中的一个编码区段。编码从U+0000至U+FFFF。")]),t._v(" "),n("p",[t._v("https://tieba.baidu.com/p/6948560860")]),t._v(" "),n("p",[t._v("http://www.unicode.org/charts/PDF/U0000.pdf")]),t._v(" "),n("p",[t._v("Unicode的平面\nUnicode有17个平面，即第0平面（0000-FFFF）到\n第16平面（100000-10FFFF）。")]),t._v(" "),n("p",[t._v("第0平面称为BMP（Basic Multilingual Plane）平面，又称为基本多文种平面，第0平面外的平面统称为辅助平面，其范围为0000-FFFF。\n第1辅助平面称为SMP（Supplementary Multilingual Plane）平面，又称为多文种补充平面，主要摆放拼音文字及符号，其范围为10000-1FFFF。\n第2辅助平面称为SIP（Supplementary Ideographic Plane）平面，又称为表意文字补充平面，其范围为20000-2FFFF。\n第3辅助平面称为TIP（Tertiary Ideographic Plane）平面，又称为表意文字第三平面，其范围为30000-3FFFF。\n第4至13辅助平面尚未使用。\n第14辅助平面称为SSP（Supplementary Special-purpose Plane）平面，又称为特殊用途补充平面，摆放语言标签（Language Tags）和异体字选择器（Variation Selectors）,这些都是控制字符，其范围为E0000-EFFFF。\n第15辅助平面为私人使用区：\n补充私人使用区-A (F0000-FFFFF)")]),t._v(" "),n("ul",[n("li",[t._v("Supplementary Private Use Area-A\n第16辅助平面为私人使用区：\n补充私人使用区-B(100000-10FFFF)")]),t._v(" "),n("li",[t._v("Supplementary Private Use Area-B")])]),t._v(" "),n("h2",{attrs:{id:"uft-8"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uft-8"}},[t._v("#")]),t._v(" uft-8")]),t._v(" "),n("p",[t._v("在UTF-8编码中，ASCII码中的字符还是ASCII码的值，只需要一个字节表示，其余的字符需要2字节、3字节或4字节来表示。")]),t._v(" "),n("p",[t._v("(1) 对于ASCII码中的符号，使用单字节编码，其编码值与ASCII值相同"),n("a",{attrs:{href:"http://www.unicode.org/charts/PDF/U0000.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("详见：U0000.pdf"),n("OutboundLink")],1),t._v("。其中ASCII值的范围为0~0x7F，\n所有编码的二进制值中第一位为0（这个正好可以用来区分单字节编码和多字节编码）。")]),t._v(" "),n("p",[t._v("(2) 其它字符用多个字节来编码（假设用N个字节），多字节编码需满足：第一个字节的前N位都为1，第N+1位为0，后面N-1 个字节的前两位都为10，这N个字节中其余位全部用来存储Unicode中的码位值。")]),t._v(" "),n("p",[t._v("字节数\tUnicode\tUTF-8编码\n1\t000000-00007F\t0xxxxxxx\n2\t000080-0007FF\t110xxxxx 10xxxxxx\n3\t000800-00FFFF\t1110xxxx 10xxxxxx 10xxxxxx\n4\t010000-10FFFF\t11110xxx 10xxxxxx 10xxxxxx 10xxxxxx")]),t._v(" "),n("p",[t._v("UTFXX是Unicode的具体实现方式。")]),t._v(" "),n("p",[t._v("Unicode属于字符集，不属于编码，UTF-8、UTF-16等是针对Unicode字符集的编码。")]),t._v(" "),n("p",[t._v("parseInt('01111110',2) = 126")]),t._v(" "),n("p",[t._v("parseInt('01111110',2).toString(16) = '7e'\n'\\u007E' = ~")]),t._v(" "),n("p",[t._v("'汉'.codePointAt(0) = 27721")]),t._v(" "),n("p",[t._v("(27721).toString(2) = 110110001001001")]),t._v(" "),n("p",[t._v("parseInt('110110001001001',2).toString(16) = 6c49")]),t._v(" "),n("p",[t._v("'\\u6c49'")]),t._v(" "),n("p",[t._v("ASCII")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("utf-16\nutf-8\n")])])]),n("p",[t._v("字节")]),t._v(" "),n("p",[t._v("位")]),t._v(" "),n("p",[t._v("charCodeAt与codePointAt的用法：")]),t._v(" "),n("p",[t._v("相同点：\n　　charCodeAt与codePointAt都是字符串实例上的方法，用途都是用来返回指定索引位字符的Unicode编码。\n不同点：\n　　 charCodeAt与codePointAt匹配索引位的规则不一样。charCodeAt是根据码元来匹配，codePointAt是根据码点来进行匹配的。")]),t._v(" "),n("p",[t._v("utf Unicode Transformation Format\n概念\t概念描述\t举例")]),t._v(" "),n("p",[t._v("位 bit\t 位（bit） 来自英文bit，音译为“比特”，表示二进制位。位是计算机内部数据储存的最小单位，\n11010100是一个8位二进制数。一个二进制位只可以表示0和1两种状态；两个二进制位可以表示00、01、10、11四种状态；三位二进制数可表示八种状态")]),t._v(" "),n("p",[t._v("字节 Byte\t字节（byte） 字节来自英文Byte，音译为“拜特”，习惯上用大写的“B”表示。字节是计算机中数据处理的基本单位。计算机中以字节为单位存储和解释信息，规定一个字节由八个二进制位构成，即1个字节等于8个比特（1Byte=8bit）。八位二进制数最小为00000000，最大为11111111；通常1个字节可以存入一个ASCII码，2个字节可以存放一个汉字国标码。\n0x01, 0x45, 0xFA,")]),t._v(" "),n("p",[t._v("字\t字（word） 计算机进行数据处理时，一次存取、加工和传送的数据长度称为字（word）。一个字通常由一个或多个（一般是字节的整数位）字节构成。\n'1', '中', 'a', '$', '￥',")]),t._v(" "),n("p",[t._v("ASCII码\tASCII (American Standard Code for Information Interchange)：美国信息交换标准代码是基于拉丁字母的一套电脑编码系统，主要用于显示现代英语和其他西欧语言。包括26个字母，甚至加上大写和小写，阿拉伯数字，计算机中的控制符（回车啥的）都不超过256个（只有127个）")]),t._v(" "),n("p",[t._v("Unicode 码\tUnicode编码点分为17个平面（plane），每个平面包含216（即65536）个码位（code point），而第一个平面称为“基本多语言平面”（Basic Multilingual Plane，简称BMP），其余平面称为“辅助平面”（Supplementary Planes）。其中“基本多语言平面”（0~0xFFFF）中0xD800~0xDFFF之间的码位作为保留，未使用")]),t._v(" "),n("p",[t._v("Unicode编码点分为17个平面（plane），每个平面包含216（即65536）个码位（code point）。17个平面的码位可表示为从U+xx0000到U+xxFFFF，其中xx表示十六进制值从0016到1016，共计17个平面。")]),t._v(" "),n("p",[t._v("uft-8\tutf-8是一种变长的编码方式，它可以使用1~4个字节表示一个符号，根据不同的符号而变化字节长度")]),t._v(" "),n("p",[t._v("8代表的是8位\t\nuft-16")]),t._v(" "),n("p",[t._v("16代表的是16位")]),t._v(" "),n("p",[t._v("uft-32")]),t._v(" "),n("p",[t._v("https://www.qqxiuzi.cn/bianma/zifuji.php")]),t._v(" "),n("p",[t._v("parseInt('FFFF',16) = 15 * 16 * 16 "),n("em",[t._v("16 +15 * 16")]),t._v(" 16  +15 * 16 + 15")]),t._v(" "),n("p",[t._v('let strSpecial = "a𠮷c";\nstrSpecial.split(\'\')\n[..."a𠮷c"]\n[..."a𠮷c"].length')]),t._v(" "),n("p",[t._v("'\\ud842\\udfb7'\n'𠮷'")]),t._v(" "),n("p",[t._v("一个码点=两个码元")]),t._v(" "),n("p",[t._v("字符串的length属性返回的是码元")]),t._v(" "),n("p",[t._v("https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae")]),t._v(" "),n("p",[t._v("https://decodeunicode.org/en/search/search")]),t._v(" "),n("p",[t._v("https://www.jianshu.com/p/3fcfb26002b6")]),t._v(" "),n("p",[t._v("https://www.lanmper.cn/mysql/t7648")]),t._v(" "),n("p",[t._v("http://www.ruanyifeng.com/blog/2014/12/unicode.html")]),t._v(" "),n("p",[t._v("每个二进制数字0或1就是一个位(bit)\n1位=0.125 字节\n1字节等于8位即 1Byte=8bit\n通常8个二进制位为一个字节（byte）\n8（bit）= 1（byte）")]),t._v(" "),n("p",[t._v("一个字节八个比特,就是八个二进制位")]),t._v(" "),n("p",[t._v("一个字节 =两个16进制位\n1个Byte    = 8个二进制位\n1个16进制数 = 4个二进制数位，\n2个16进制数 = 8个二进制数位 = 1字节\n4个16进制数 = 16个二进制数位 = 2字节")]),t._v(" "),n("p",[t._v("四个二进制数最大表示为15,就是一个16进制数,所以八位可以表示成两个16进制的数!\n4bit最大表示为15,就是一个16进制数,所以8bit可以表示成两个16进制的数!\n0xF -> 1111 -> 8+4+2+1=15")]),t._v(" "),n("p",[t._v("0xFF -> 11111111")]),t._v(" "),n("p",[t._v("console.log(0x0f)\nconsole.log(010)")]),t._v(" "),n("p",[t._v("1.十进制：除表示正负的符号外，以1~9开头，由0~9组成。如 128，+234，-278。\n2,八进制：以0开头，由0~7组成的数。如 0126, 050000.\n3,十六进制：以0X或0x开头，由0~9，A~F或a~f 组成。如 0x12A, 0x5a000。")]),t._v(" "),n("p",[t._v("汉字区间 \\u4e00-\\u9fa5")]),t._v(" "),n("p",[t._v("http://t.zoukankan.com/onblog-p-13036324.html")]),t._v(" "),n("p",[t._v("if (!String.prototype.codePointAt) {\n(function() {\n'use strict'; // 严格模式，needed to support "),n("code",[t._v("apply")]),t._v("/"),n("code",[t._v("call")]),t._v(" with "),n("code",[t._v("undefined")]),t._v("/"),n("code",[t._v("null")]),t._v("\nvar codePointAt = function(position) {\nif (this == null) {\nthrow TypeError();\n}\nvar string = String(this);\nvar size = string.length;\n// 变成整数\nvar index = position ? Number(position) : 0;\nif (index != index) {\n// better "),n("code",[t._v("isNaN")]),t._v("\nindex = 0;\n}\n// 边界\nif (index < 0 || index >= size) {\nreturn undefined;\n}\n// 第一个编码单元\nvar first = string.charCodeAt(index);\nvar second;\nif (\n// 检查是否开始 surrogate pair\nfirst >= 0xd800 &&\nfirst <= 0xdbff && // high surrogate\nsize > index + 1 // 下一个编码单元\n) {\nsecond = string.charCodeAt(index + 1);\nif (second >= 0xdc00 && second <= 0xdfff) {\n// low surrogate\n// http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae\nreturn (first - 0xd800) * 0x400 + second - 0xdc00 + 0x10000;\n}\n}\nreturn first;\n};\nif (Object.defineProperty) {\nObject.defineProperty(String.prototype, 'codePointAt', {\nvalue: codePointAt,\nconfigurable: true,\nwritable: true\n});\n} else {\nString.prototype.codePointAt = codePointAt;\n}\n})();\n}")]),t._v(" "),n("p",[t._v("charCodeAt\ncharCodeAt() 方法返回 0 到 65535 之间的整数，表示给定索引处的 UTF-16 代码单元。")]),t._v(" "),n("p",[t._v("注意")]),t._v(" "),n("p",[t._v("UTF-16 编码单元匹配能用一个 UTF-16 编码单元表示的 Unicode 码点。")]),t._v(" "),n("p",[t._v("如果 Unicode 码点不能用一个 UTF-16 编码单元表示（因为它的值大于0xFFFF），则所返回的编码单元会是这个码点代理对的第一个编码单元) 。如果你想要整个码点的值，使用 codePointAt()。")]),t._v(" "),n("p",[t._v("String.fromCharCode(65, 66, 67) //10进制.              ABC\nString.fromCharCode(0x41, 0x42, 0x43) // 16进制.       ABC\nString.fromCharCode(0x4eba)           // 16进制        人\nString.fromCharCode(0x14eba)         // 16进制，截断    人\nString.fromCharCode(0xD83D, 0xDC31,65)                '🐱A'\n'\\uD83DA\\uDC31A'.length ???\n'\\uD83D\\uDC31A'.length ???")]),t._v(" "),n("p",[t._v("术语解释")]),t._v(" "),n("p",[t._v("代码单元 ：即在具体编码形式中的最小单位。比如 ：UTF-16 中，一个代码单元为 16 位，UTF-8 中一个代码单元为 8 位（bit）")]),t._v(" "),n("p",[t._v("具体编码：UTF-8、UTF-16等是针对Unicode字符集的编码。Unicode属于字符集，不属于编码")]),t._v(" "),n("p",[t._v("fromCharCode\nString.fromCharCode(num1[, ...[, numN]]) 方法接受一系列 UTF-16 代码单元的数字。范围介于 0 到 65535（0xFFFF）之间，大于 0xFFFF 的数字将被截断 返回由指定的 UTF-16 代码单元序列创建的字符串。")]),t._v(" "),n("p",[t._v("注意")]),t._v(" "),n("p",[t._v("如果在指定的位置没有元素则返回 undefined。如果在索引处开始没有 UTF-16 代理对，将直接返回在那个索引处的编码单元。")]),t._v(" "),n("p",[t._v("大于 0xFFFF 的数字将被截断, 例如 String.fromCharCode(0x14eba)，因为0x14eba大于0xFFFF，所以截断为String.fromCharCode(0x4eba) ，所以String.fromCharCode(0x14eba)==String.fromCharCode(0x4eba) = 人")]),t._v(" "),n("p",[t._v("术语解释")]),t._v(" "),n("p",[t._v("代理对 Surrogate Pair ：是 UTF-16 中用于扩展字符而使用的编码方式，是一种采用四个字节 (两个 UTF-16 编码) 来表示一个字符，称作代理对。")]),t._v(" "),n("p",[t._v("举例")]),t._v(" "),n("p",[t._v("codePointAt\ncodePointAt() 方法返回 一个 Unicode 编码点值的非负整数。")]),t._v(" "),n("p",[t._v("注意")]),t._v(" "),n("p",[t._v("如果在指定的位置没有元素则返回 undefined。如果在索引处开始没有 UTF-16 代理对，将直接返回在那个索引处的编码单元。")]),t._v(" "),n("p",[t._v("术语解释")]),t._v(" "),n("p",[t._v("代理对 Surrogate Pair ：是 UTF-16 中用于扩展字符而使用的编码方式，是一种采用四个字节 (两个 UTF-16 编码) 来表示一个字符，称作代理对。")]),t._v(" "),n("p",[t._v("Surrogate pair 是专门用于 UTF-16 的，以向后兼容 UCS-2，做法是取 UCS-2 范围里的 0xD800~0xDBFF(称为 high surrogates) 和 0xDC00~0xDFFF(称为 low surrogates) 的 code point，一个 high surrogate 接一个 low surrogate 拼成四个字节表示超出 BMP 的字符，两个 surrogate range 都是 1024 个 code point，所以 surrogate pair 可以表达 1024 x 1024 = 1048576 = 0x100000 个字符，surrogate pair加上BMP的就是 0x10FFFF，这就是Unicode 的字符集范围上限是 0x10FFFF 的原因。")]),t._v(" "),n("p",[t._v("UCS2就是标准的unicode编码， 它是某国际组织设计的一种文字符号编码表，包括了世界上绝大多数文字和符号，包括中文，每个字符使用2字节编码，因此叫ucs2。")]),t._v(" "),n("p",[t._v("BMP基本多文种平面(Basic Multilingual Plane)，或称第零平面(Plane 0)，是Unicode中的一个编码区段。编码从U+0000至U+FFFF。")]),t._v(" "),n("p",[t._v("fromCodePoint\nString.fromCodePoint(num1[, ...[, numN]]) 静态方法接受一串 Unicode 编码位置，即“代码点”，返回使用指定的代码点序列创建的字符串。")]),t._v(" "),n("p",[t._v("术语解释")]),t._v(" "),n("p",[t._v("代理对 Surrogate Pair ：是 UTF-16 中用于扩展字符而使用的编码方式，是一种采用四个字节 (两个 UTF-16 编码) 来表示一个字符，称作代理对。")]),t._v(" "),n("p",[t._v("代码")]),t._v(" "),n("p",[t._v("String.fromCodePoint(0x41)\t\t\t\t\t\t\t\t A\nString.fromCodePoint(65)\t\t\t\t\t\t\t\t A\nString.fromCharCode(128049)    \t\t\t\t\t\t\t'你'\nString.fromCodePoint(0x2F804). \t\t\t\t\t\t\t'你'")]),t._v(" "),n("p",[t._v("实例练习\nJavaScript 内部，字符以 UTF-16（字符用两个字节Byte或四个字节Byte表示） 的格式储存，码点范围介于U+0000到U+FFFF，每个字符固定为2个字节，一个码元。")]),t._v(" "),n("p",[t._v("对于那些需要4个字节储存的字符（Unicode 码点大于0xFFFF的字符），两个码元，JavaScript 会认为它们是两个字符。")]),t._v(" "),n("p",[t._v("特别要注意，码点可以是一个码元，也可以是两个码元")]),t._v(" "),n("p",[t._v("字符串的length属性返回的是码元")]),t._v(" "),n("p",[t._v("0")]),t._v(" "),n("p",[t._v("二进制 0b01100 = 12")]),t._v(" "),n("p",[t._v("八进制 0o14 = 12  字符串 '\\43'")]),t._v(" "),n("p",[t._v("十进制 12 = 12")]),t._v(" "),n("p",[t._v("十六进制 0xc = 12")]),t._v(" "),n("p",[t._v("unicode  '\\u4f60' = 你\n16进制 '\\x63\\x68' = ch\n8进制   '\\43' = # = String.fromCharCode(parseInt(43,8))")]),t._v(" "),n("p",[t._v("'\\x45'  '\\105'  '\\u0045' === E")])])}),[],!1,null,null,null);n.default=_.exports}}]);