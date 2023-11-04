## 2023-11-04
### 📝 [JS红皮书笔记](/view/JS/28.md)
### 📝 [声明合并(Declaration Merging)](/view/TS/20.md)
### 📝 [模块声明](/view/TS/27.md)
### ✨ [微前端后台改造方案](/view/Other/35.md)
## 2023-09-25
### 📝 [JS红皮书笔记](/view/JS/28.md)
### 📝 [声明合并(Declaration Merging)](/view/TS/20.md)
### 📝 [模块声明](/view/TS/27.md)
## 2023-08-31
### 📝 [JS红皮书笔记](/view/JS/28.md)
## 2023-05-05
### 📝 [微信H5移动端真机调试](/view/Other/4.md)
### ✨ [逆向抓包](/view/Other/34.md)
## 2023-03-22
### 📝 [常用操作](/view/Git/2.md)
### 📝 [chrome 扩展开发](/view/Other/29.md)
### ✨ [Linux 常用命令](/view/Linux/8.md)
## 2023-02-21
### 📝 [常用操作](/view/Git/2.md)
### ✨ [新学React 18.2](/view/React/6.md)
### ✨ [动态挂载组件 [$mount](https://v2.cn.vuejs.org/v2/api/#vm-mount)](/view/Vue/24.md)
## 2023-01-30
### 📝 [常用操作](/view/Git/2.md)
### 📝 [正则表达式](/view/JS/16.md)
### 📝 [ascll unicode编码](/view/JS/27.md)
## 2022-12-22
### 📝 [git log](/view/Git/4.md)
### 📝 [chrome 扩展开发](/view/Other/29.md)
### 📝 [Vue3.0最佳实践](/view/Vue3.0/7.md)
### ✨ [ascll unicode编码](/view/JS/27.md)
## 2022-12-22
### 📝 [git log](/view/Git/4.md)
### 📝 [chrome 扩展开发](/view/Other/29.md)
### 📝 [Vue3.0最佳实践](/view/Vue3.0/7.md)
### ✨ [ascll unicode编码](/view/JS/27.md)
### ✨ [if (!String.prototype.codePointAt) {
    (function() {
        'use strict'; // 严格模式，needed to support `apply`/`call` with `undefined`/`null`
        var codePointAt = function(position) {
            if (this == null) {
                throw TypeError();
            }
            var string = String(this);
            var size = string.length;
            // 变成整数
            var index = position ? Number(position) : 0;
            if (index != index) {
                // better `isNaN`
                index = 0;
            }
            // 边界
            if (index < 0 || index >= size) {
                return undefined;
            }
            // 第一个编码单元
            var first = string.charCodeAt(index);
            var second;
            if (
                // 检查是否开始 surrogate pair
                first >= 0xd800 &&
                first <= 0xdbff && // high surrogate
                size > index + 1 // 下一个编码单元
            ) {
                second = string.charCodeAt(index + 1);
                if (second >= 0xdc00 && second <= 0xdfff) {
                    // low surrogate
                    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                    return (first - 0xd800) * 0x400 + second - 0xdc00 + 0x10000;
                }
            }
            return first;
        };
        if (Object.defineProperty) {
            Object.defineProperty(String.prototype, 'codePointAt', {
                value: codePointAt,
                configurable: true,
                writable: true
            });
        } else {
            String.prototype.codePointAt = codePointAt;
        }
    })();
}](/view/JS/28.md)
## 2022-11-07
### ✨ [Vue3.0最佳实践](/view/Vue3.0/7.md)
## 2022-10-30
### 📝 [vuejs设计与实现](/view/Vue3.0/6.md)
## 2022-10-10
### 📝 [vuejs设计与实现](/view/Vue3.0/6.md)
### ✨ [[Cargo](https://github.com/rust-lang/cargo/tree/master/src/doc)](/view/Rust/9.md)
## 2022-09-04
### 📝 [Node.js 版本的区别](/view/Nodejs/2.md)
### 📝 [错误处理](/view/Rust/7.md)
### 📝 [常用类型](/view/TS/5.md)
### ✨ [node 源码阅读](/view/Nodejs/23.md)
### ✨ [vuejs设计与实现](/view/Vue3.0/6.md)
## 2022-08-09
### 📝 [git sparse checkout (稀疏检出)](/view/Git/5.md)
## 2022-07-27
### ✨ [Nodejs 性能测试分析及优化](/view/Nodejs/21.md)
### ✨ [调试第三方库的骚操作](/view/Nodejs/22.md)
## 2022-07-04
### ✨ [git sparse checkout (稀疏检出)](/view/Git/5.md)
## 2022-06-28
### 📝 [手撕问题](/view/JS/11.md)
### 📝 [正则表达式](/view/JS/16.md)
### 📝 [chrome 扩展开发](/view/Other/29.md)
### 📝 [chrome 调试](/view/Other/6.md)
## 2022-06-14
### 📝 [mac 打不开软件](/view/Other/31.md)
## 2022-06-14
### 📝 [Keyof 类型运算符](/view/TS/10.md)
### 📝 [Typeof 类型运算符](/view/TS/11.md)
## 2022-06-08
### 📝 [在码云中使用jenkins](/view/Other/10.md)
### 📝 [Hook](/view/React/1.md)
### ✨ [React Fiber](/view/React/5.md)
## 2022-06-06
### ✨ [在线编辑](/view/Other/33.md)
## 2022-05-31
### ✨ [高阶组件](/view/React/4.md)
## 2022-05-29
### 📝 [CSS3 常见动画](/view/Css/4.md)
### 📝 [正则表达式](/view/JS/16.md)
### 📝 [mac 打不开软件](/view/Other/31.md)
## 2022-04-19
### 📝 [ES6 难点](/view/JS/13.md)
## 2022-04-17
### 📝 [Linux常用命令](/view/Linux/3.md)
### ✨ [sed](/view/Linux/6.md)
### ✨ [gawk](/view/Linux/7.md)
## 2022-04-15
### 📝 [常用操作](/view/Git/2.md)
### 📝 [手撕问题](/view/JS/11.md)
### 📝 [Linux常用命令](/view/Linux/3.md)
### 📝 [grep sed awk](/view/Linux/5.md)
## 2022-04-13
### 📝 [注意事项](/view/React/3.md)
## 2022-04-11
### ✨ [注意事项](/view/React/3.md)
### ✨ [Rust 中的过程宏](/view/Rust/1.md)
### ✨ [模块](/view/Rust/2.md)
### ✨ [crate](/view/Rust/3.md)
### ✨ [属性](/view/Rust/4.md)
### ✨ [作用域规则](/view/Rust/5.md)
### ✨ [特质 trait](/view/Rust/6.md)
### ✨ [错误处理](/view/Rust/7.md)
### ✨ [标准库类型](/view/Rust/8.md)
## 2022-04-02
## 2022-04-02
### ✨ [局部上滑加吸顶](/view/Css/17.md)
## 2022-04-01
## 2022-04-01
### 📝 [git log](/view/Git/4.md)
### 📝 [开发中调试第三方代码包](/view/Nodejs/10.md)
### ✨ [IntersectionObserver](/view/JS/26.md)
### ✨ [响应式](/view/Vue3.0/5.md)
## 2022-03-18
### 📝 [Keyof 类型运算符](/view/TS/10.md)
### 📝 [infer](/view/TS/25.md)
### ✨ [extends](/view/TS/28.md)
## 2022-03-07

## 2022-03-07
### ✨ [前端性能优化](/view/JS/24.md)
### ✨ [性能分析](/view/JS/25.md)

## 2022-02-28
### [📝 待定](/view/JS/21.md)

## 2022-02-28
## 2021-07-07
### [常见的 Node.js 部署问题](/view/Nodejs/17.md)
## 2021-07-05
### [ES6 中的高阶函数](/view/JS/20.md)
## 2021-06-18
### [TS详解](https://zhuijing.github.io/view/TS/)
## 2021-06-11
### [手写vscode插件](/view/Vscode/1.md)
### [Vs Code 扩展能力](/view/Vscode/2.md)
## 2021-06-04
### [游戏开发](/view/Other/22.md)
### [swiper匀速循环滚动](/view/Other/23.md)
### [什么是RPC](/view/Other/24.md)
### [性能分析](/view/Other/25.md)
### [抓包](/view/Other/26.md)
## 2021-05-28
### [Vue过渡 & 动画原理](/view/Vue/17.md)
### [slot 插槽](/view/Vue/18.md)
### [Ts开发 Vue](/view/Vue/19.md)
### [Vue中的设计模式](/view/Vue/20.md)

## 2021-05-21
### [设计模式](view/DesignPattern/1.md)
### [观察者模式](view/DesignPattern/2.md)

## 2021-05-07

### [ TS config](/view/TS/2.md)
## 2021-04-25

### [Express Koa  Egg 对比](/view/Nodejs/15.md)
### [Node 的事件机制](/view/Nodejs/16.md)
### [slot 插槽](/view/Vue/18.md)

## 2021-04-11
### [Docker+ webhook自动化部署](/view/Docker/4.md)
### [Electron](/view/Other/20.md)

## 2021-04-06
### [Linux 文件权限](/view/Linux/4.md)
### [阅读vue源码经验](/view/Vue/16.md)
## 2021-04-02
### [正则表达式](/view/JS/16.md)
### [图片加载优化](view/JS/17.md)
### [Docker+ webhook自动化部署](/view/Docker/4.md)
### [Electron](/view/Other/20.md)
### [没用过的JSAPi](view/JS/18.md)

## 2021-03-26 

### [mixins、高阶组件、 无渲染组件的模式](/view/Vue/14)

### [vue  diff算法](view/Vue/13.md)
### [vue执行逻辑](view/Vue/12.md)
### [学习网站分类](/view/Other/16.md)
### [Node模块加载规则](view/Nodejs/14.md)
### [进制](/view/JS/14.md)
### [ES6知识点梳理](/view/JS/15.md)

### [CSS 动效优化](view/Css/11.md)



## 2021-03-15
### [file-loader 从入口到输出调用栈](/view/Webpack/5.md)
### [loader 编写](/view/Webpack/4.md)
### [Plugin 编写](/view/Webpack/3.md)
### [Webpack 优化](/view/Webpack/1.md)
## 2021-03-14

### [koa 洋葱模型](/view/Nodejs/12.md)
### [vscode 调试node](/view/Nodejs/13.md)
### [单元测试](/view/Other/11.md)
## 2021-03-07
### [node调试](/view/Nodejs/6.md)
### [应该知道的 NPM 知识](/view/Nodejs/8.md)
### [ 手写 CO执行器](view/Nodejs/9.md)

## 2021-02-28
### [手写 Promise](/view/JS/7.md)
### [JS 常见概念](/view/JS/8.md)
### [ ES6 难点](view/JS/13.md)

## 2021-02-21
### [排序算法](/view/Algorithm/4)
### [三次握手，四次挥手](/view/Http/4)
### [HTTP缓存](/view/Http/5.md)
### [HTTP跨域](view/Http/6.md)
### [前端安全](view/Http/7.md)


## 2021-02-14
### [手撕问题](/view/js/11)
### [nrm, npm , nvm, npx](/view/Nodejs/11)
### [前端常见安全问题](/view/Other/9)
### [在码云中使用jenkins](/view/Other/10)

## 2021-02-07
### [Eslint配置](/view/Other/8)
### [Vue 预渲染首屏优化](/view/Vue/9)
### [vue打包优化](/view/Vue/11)
### [Vue 服务端渲染首屏优化](/view/Vue/10)
## 2021-01-31
### [一行代码实现吸顶效果](/view/Css/10)
### [Docker 构建node服务](/view/Docker/3)
### [开发中调试第三方代码包](/view/Nodejs/10)
### [你没用过的JS](/view/JS/10)

## 2021-01-24
### [ES6 Set 和 Map 数据结构](/view/js/9)
### [手写 CO执行器]( /view/Nodejs/9)
### [Docker实践](/views/Docker/2)
## 2021-01-17
### [vue 骨架屏](/view/Vue/8)
### [Jest 单元测试](/view/Other/5)
### [Cypress 测试框架](/view/Other/7)
### [chrome 调试 技巧](/view/Other/6)
### [微信H5移动端真机调试](/view/Other/4)
### [Linux服务器环境搭建](/view/Linux/2)
### [ http 基础知识](view/Http/3)
## 2021-01-10

### [Vue Function-based API RFC](/view/Vue3.0/3)
### [vue3 快速掌握vite](/view/Vue3.0/2)
### [vue 打包优化](/view/Vue/11/)

### [啊哈-算法](/view/Algorithm/2)
### [图解算法](/view/Algorithm/1)
### [Linux操作](/view/Linux/1)
