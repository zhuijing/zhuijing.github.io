(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{469:function(t,a,v){"use strict";v.r(a);var _=v(10),r=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"单例模式-singleton-pattern"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单例模式-singleton-pattern"}},[t._v("#")]),t._v(" 单例模式（Singleton Pattern）")]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("单例模式(Singleton Pattern)：单例模式确保某一个类只有一个实例，而且自行实例化并向整个系统提供这个实例，这个类称为单例类，它提供全局访问的方法。")]),t._v(" "),a("p",[t._v("单例模式的要点有三个：")]),t._v(" "),a("ul",[a("li",[t._v("一是某个类只能有一个实例；")]),t._v(" "),a("li",[t._v("二是它必须自行创建这个实例；")]),t._v(" "),a("li",[t._v("三是它必须自行向整个系统提供这个实例。单例模式是一种对象创建型模式。单例模式又名单件模式或单态模式。")])]),t._v(" "),a("p",[t._v("在单例模式的实现过程中，需要注意如下三点：")]),t._v(" "),a("ul",[a("li",[t._v("单例类的构造函数为私有；")]),t._v(" "),a("li",[t._v("提供一个自身的静态私有成员变量；")]),t._v(" "),a("li",[t._v("提供一个公有的静态工厂方法。")])]),t._v(" "),a("h2",{attrs:{id:"代码演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("#")]),t._v(" 代码演示")]),t._v(" "),a("h2",{attrs:{id:"场景举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景举例"}},[t._v("#")]),t._v(" 场景举例")]),t._v(" "),a("p",[t._v("在操作系统中，打印池(Print Spooler)是一个用于管理打印任务的应用程序，通过打印池用户可以删除、中止或者改变打印任务的优先级，在一个系统中只允许运行一个打印池对象，如果重复创建打印池则抛出异常。现使用单例模式来模拟实现打印池的设计。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ul",[a("li",[t._v("单例模式确保某一个类只有一个实例，而且自行实例化并向整个系统提供这个实例，这个类称为单例类，它提供全局访问的方法。单例模式的要点有三个：一是某个类只能有一个实例；二是它必须自行创建这个实例；三是它必须自行向整个系统提供这个实例。单例模式是一种对象创建型模式。")]),t._v(" "),a("li",[t._v("单例模式只包含一个单例角色：在单例类的内部实现只生成一个实例，同时它提供一个静态的工厂方法，让客户可以使用它的唯一实例；为了防止在外部对其实例化，将其构造函数设计为私有。")]),t._v(" "),a("li",[t._v("单例模式的目的是保证一个类仅有一个实例，并提供一个访问它的全局访问点。单例类拥有一个私有构造函数，确保用户无法通过new关键字直接实例化它。除此之外，该模式中包含一个静态私有成员变量与静态公有的工厂方法。该工厂方法负责检验实例的存在性并实例化自己，然后存储在静态成员变量中，以确保只有一个实例被创建。")]),t._v(" "),a("li",[t._v("单例模式的主要优点在于提供了对唯一实例的受控访问并可以节约系统资源；其主要缺点在于因为缺少抽象层而难以扩展，且单例类职责过重。")]),t._v(" "),a("li",[t._v("单例模式适用情况包括：系统只需要一个实例对象；客户调用类的单个实例只允许使用一个公共访问点。")])]),t._v(" "),a("h2",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")])])}),[],!1,null,null,null);a.default=r.exports}}]);