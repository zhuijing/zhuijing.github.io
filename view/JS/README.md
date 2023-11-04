# JS读书笔记目录
1. [JS执行机制](/view/js/1/)
2. [JS事件循环机制](/view/js/2/)
3. [大文件上传和断点续传](/view/js/3/)
4. [深入理解前端性能监控](/view/js/4/)
5. [11个JavaScript代码重构最佳实践](/view/js/5)
6. [单点登录](/view/js/6)
7. [手写 Promise](/view/js/7)
8. [JS 常见概念](/view/js/8)
9. [ES6 Set 和 Map 数据结构](/view/js/9)
10. [你没用过的JS方法](/view/js/10)
11. [手撕问题](/view/js/11)
12. [面向对象基本原则](/view/js/12)
13. [ES6 难点](/view/js/13)
14. [进制](/view/JS/14.md)
15. 无
16. [正则表达式](/view/JS/16.md)
17. [图片加载优化](/view/JS/17.md)
18. [没用过的JSAPi](/view/JS/18.md)
19. [js常用方法](/view/JS/19.md)
20. [ES6 中的高阶函数](/view/JS/20.md)
- [前端性能优化](/view/JS/24.md)
- [性能分析](/view/JS/25.md)
- [IntersectionObserver](/view/JS/26.md)
- [ascll unicode编码](/view/JS/27.md)
- [if (!String.prototype.codePointAt) {
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
- [ascll unicode编码](/view/JS/27.md)