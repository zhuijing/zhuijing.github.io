# 设计模式基础知识
## 设计模式七大原则

## 单一职责模式(Single Responsibility Principle，简称SRP)
> 单一职责：又称单一功能原则，面向对象五个基本原则（SOLID）之一。它规定一个类应该只有一个发生变化的原因。
- 一个程序只做好一件事
- 如果功能过于复杂就拆分开，每个部分保持独立
- 核心思想：应该有且仅有一个原因引起类的变更
- 问题描述：假如有类Class1完成职责T1，T2，当职责T1或T2有变更需要修改时，有可能影响到该类的另外一个职责正常工作。
- 好处：类的复杂度降低、可读性提高、可维护性提高、扩展性提高、降低了变更引起的风险。
- 需注意：单一职责原则提出了一个编写程序的标准，用“职责”或“变化原因”来衡量接口或类设计得是否优良，但是“职责”和“变化原因”都是不可以度量的，因项目和环境而异。


## 开放封闭原则(Open Close Principle,简称OCP)
> 开闭原则的意思是：对扩展开放，对修改关闭。在程序需要进行拓展的时候，不需要修改原有的代码，实现一个热插拔的效果。简言之，就是为了是程序的扩展性好，易于升级维护。想要达到这样的效果，我们需要使用接口和抽象类，。

- 对扩展开放对修改封闭
- 增加需求时，扩展新代码，而非修改已有代码
- 核心思想：尽量通过扩展软件实体来解决需求变化，而不是通过修改已有的代码来完成变化
- 通俗来讲：一个软件产品在生命周期内，都会发生变化，既然变化是一个既定的事实，我们就应该在设计的时候尽量适应这些变化，以提高项目的稳定性和灵活性。
- 软件设计的终极目标
## 里氏替换原则(Liskov Substitution Principle,简称LSP)

> 里氏代换原则是面向对象设计的基本原则之一。 里氏代换原则中说，任何基类可以出现的地方，子类一定可以出现。LSP 是继承复用的基石，只有当派生类可以替换掉基类，且软件单位的功能不受到影响时，基类才能真正被复用，而派生类也能够在基类的基础上增加新的行为。里氏代换原则是对开闭原则的补充。实现开闭原则的关键步骤就是抽象化，而基类与子类的继承关系就是抽象化的具体实现，所以里氏代换原则是对实现抽象化的具体步骤的规范

- 子类能覆盖父类
- 父类能出现的地方子类就能出现
- JS中使用较少(弱类型&继承使用较少)
- 核心思想：在使用基类的的地方可以任意使用其子类，能保证子类完美替换基类。
- 通俗来讲：只要父类能出现的地方子类就能出现。反之，父类则未必能胜任。
- 好处：增强程序的健壮性，即使增加了子类，原有的子类还可以继续运行。
- 需注意：如果子类不能完整地实现父类的方法，或者父类的某些方法在子类中已经发生“畸变”，则建议断开父子继承关系 采用依赖、聚合、组合等关系代替继承。

## 接口隔离原则(Interface Segregation Principle,简称ISP)
> 这个原则的意思是：使用多个隔离的接口，比使用单个接口要好。它还有另外一个意思是：降低类之间的耦合度。由此可见，其实设计模式就是从大型软件架构出发、便于升级和维护的软件设计思想，它强调降低依赖，降低耦合。

- 保持接口的单一独立，避免出现"胖接口"
- JS中 没有接口（typescript例外）使用较少
- 类似于单一职责所在，这里更关注接口
- 核心思想：类间的依赖关系应该建立在最小的接口上
- 通俗来讲：建立单一接口，不要建立庞大臃肿的接口，尽量细化接口，接口中的方法尽量少。也就是说，我们要为各个类建立专用的接口，而不要试图去建立一个很庞大的接口供所有依赖它的类去调用。
- 问题描述：类A通过接口interface依赖类B，类C通过接口interface依赖类D，如果接口interface对于类A和类B来说不是最小接口，则类B和类D必须去实现他们不需要的方法。
- 需注意：
==接口尽量小，但是要有限度==。对接口进行细化可以提高程序设计灵活性，但是如果过小，则会造成接口数量过多，使设计复杂化。所以一定要==适度提高内聚，减少对外交互==。使接口用最少的方法去完成最多的事情
==为依赖接口的类定制服务==。只暴露给调用的类它需要的方法，它不需要的方法则隐藏起来。只有专注地为一个模块提供定制服务，才能建立最小的依赖关系。

## 依赖倒置原则(Dependence Inversion Principle,简称DIP)
> 这个原则是开闭原则的基础，具体内容：针对接口编程，依赖于抽象而不依赖于具体

- 面向接口编程，依赖于抽象而不依赖于具体实现
- 使用方只关注接口而不关注具体类的实现
- JS中使用较少(没有接口&弱类型)
- 核心思想：高层模块不应该依赖底层模块，二者都该依赖其抽象；抽象不应该依赖细节；细节应该依赖抽象；
- 说明：高层模块就是调用端，低层模块就是具体实现类。抽象就是指接口或抽象类。细节就是实现类。
- 通俗来讲：依赖倒置原则的本质就是通过抽象（接口或抽象类）使个各类或模块的实现彼此独立，互不影响，实现模块间的松耦合。
- 问题描述：类A直接依赖类B，假如要将类A改为依赖类C，则必须通过修改类A的代码来达成。这种场景下，类A一般是高层模块，负责复杂的业务逻辑；类B和类C是低层模块，负责基本的原子操作；假如修改类A，会给程序带来不必要的风险。
- 解决方案：将类A修改为依赖接口interface，类B和类C各自实现接口interface，类A通过接口interface间接与类B或者类C发生联系，则会大大降低修改类A的几率。
- 好处：依赖倒置的好处在小型项目中很难体现出来。但在大中型项目中可以减少需求变化引起的工作量。使并行开发更友好。

## 迪米特法则（Law of Demeter,简称LoD）
>最少知道原则是指：一个实体应当尽量少地与其他实体之间发生相互作用，使得系统功能模块相对独立。

- 核心思想：类间解耦。
- 通俗来讲： 一个类对自己依赖的类知道的越少越好。自从我们接触编程开始，就知道了软件编程的总的原则：低耦合，高内聚。无论是面向过程编程还是面向对象编程，只有使各个模块之间的耦合尽量的低，才能提高代码的复用率。低耦合的优点不言而喻，但是怎么样编程才能做到低耦合呢？那正是迪米特法则要去完成的。

## 合成复用原则（Composite Reuse Principle）

> 合成复用原则是指：尽量使用合成/聚合的方式，而不是使用继承。


一句话概括:
 - 单一职责原则告诉我们实现类要职责单一；
 - 里氏替换原则告诉我们不要破坏继承体系；
 - 依赖倒置原则告诉我们要面向接口编程；
 - 接口隔离原则告诉我们在设计接口的时候要精简单一；
 - 迪米特法则告诉我们要降低耦合。而开闭原则是总纲，他告诉我们要对扩展开放，对修改关闭



## 设计模式分类
### 创建型
>  将创建和使用代码解耦
>
>  创建型模式的目的就是封装创建对象的变化。 

> **==这些设计模式提供了一种在创建对象的同时隐藏创建逻辑的方式，而不是使用 new 运算符直接实例化对象。这使得程序在判断针对某个给定实例需要创建哪些对象时更加灵活==**
- [简单工厂模式（Simple Factory Pattern）](/view/DesignPattern/1.md)
- [抽象方法模式（Factory Method Pattern）](/view/DesignPattern/2.md)
- [抽象工厂模式（Abstract Factory Pattern）](/view/DesignPattern/3.md) 
- [单例模式（Singleton Pattern） ](/view/DesignPattern/4.md)
- [建造者模式（Builder Pattern）](/view/DesignPattern/5.md)
- [原型模式（Prototype Pattern）](/view/DesignPattern/6.md)

### 结构型
>将不同功能代码进行解耦
>
>结构型模式封装的是对象之间的组合关系。

> **==这些设计模式关注类和对象的组合。继承的概念被用来组合接口和定义组合对象获得新功能的方式==**
- 适配器模式（Adapter Pattern） 也就是 包装器（wrapper）
- 桥接模式（Bridge Pattern） 
- 装饰器模式（Decorator Pattern） 
- 外观模式（Facade Pattern） 
- 享元模式（Flyweight Pattern） 
- 代理模式（Proxy Pattern） 
- 组合模式（Composite Pattern）

### 行为型
> 将不同行为代码解耦
>
> 行为型模式封装的是对象的行为变化。

> **==这些设计模式特别关注对象之间的通信==**


- 策略模式（Strategy Pattern） 
- 模板方法模式（Template Method Pattern）
- 观察者模式（Observer Pattern）
- 迭代器模式（Iterator Pattern）
- 责任链模式（Chain of Responsibility Pattern）
- 命令模式（Command Pattern）
- 备忘录模式（Memento Pattern）
- 状态模式（State Pattern）
- 访问者模式（Visitor Pattern）
- 中介者模式（Mediator Pattern）
- 解释器模式（Interpreter Pattern）

## 文章推荐

- [观察者模式 vs 发布/订阅](https://luncher.github.io/2020/08/16/%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F-vs-%E5%8F%91%E5%B8%83-%E8%AE%A2%E9%98%85/)
- [谈谈观察者模式和发布订阅模式](https://cloud.tencent.com/developer/article/1612544)
- [观察者模式 vs 发布-订阅模式](https://juejin.cn/post/6844903513009422343)
- [观察者模式 vs 发布订阅模式](https://zhuanlan.zhihu.com/p/51357583)
- [常用设计模式精讲](http://www.68kejian.com/page/study/course/115/640?name=JavaScript%E5%B8%B8%E7%94%A8%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E7%B2%BE%E8%AE%B2)
- [5大设计原则(SOLID)](https://juejin.im/post/5c1d1f04e51d4544d544b600)
- [7大设计原则文章](https://mp.weixin.qq.com/s/O6-EarzPI-7t5m3a0eOmhQ)
- [设计模式](https://design-patterns.readthedocs.io/zh_CN/latest/read_uml.html)
- [https://juejin.cn/post/6994102811218673700](https://juejin.cn/post/6994102811218673700)
- [https://www.cnblogs.com/steffen/p/11546001.html](https://www.cnblogs.com/steffen/p/11546001.html)