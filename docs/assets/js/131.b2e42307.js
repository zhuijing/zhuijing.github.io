(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{519:function(n,s,a){"use strict";a.r(s);var r=a(10),t=Object(r.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"_11个javascript代码重构最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11个javascript代码重构最佳实践"}},[n._v("#")]),n._v(" 11个JavaScript代码重构最佳实践")]),n._v(" "),s("ol",[s("li",[n._v("提炼函数")])]),n._v(" "),s("ul",[s("li",[n._v("避免出现超大函数。")]),n._v(" "),s("li",[n._v("独立出来的函数有助于代码复用。")]),n._v(" "),s("li",[n._v("独立出来的函数更容易被覆写。")]),n._v(" "),s("li",[n._v("独立出来的函数如果拥有一个良好的命名，它本身就起到了注释的作用。")])]),n._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[n._v("合并重复的条件片段")]),n._v(" "),s("li",[n._v("把条件分支语句提炼成函数")]),n._v(" "),s("li",[n._v("函数提前退出")]),n._v(" "),s("li",[n._v("用return退出多重循环")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("bad\nvar func = function(){\n    var flag = false;\n    for ( var i = 0; i < 10; i++ ){\n        for ( var j = 0; j < 10; j++ ){\n            if ( i * j >30 ){\n                flag = true;\n                break;\n            }\n        }\n        if ( flag === true ){\n            break;\n        }\n    }\n};\n\ngood good good \nvar print = function( i ){\n    console.log( i );\n};\nvar func = function(){\n    for ( var i = 0; i < 10; i++ ){\n        for ( var j = 0; j < 10; j++ ){\n            if ( i * j >30 ){\n                return print( i );\n            }\n        }\n    }\n};\n\nfunc();\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);