# 疑问

## for in , Object.keys, Objecet.getOwnPropertyNames 区别
### for in 

遍历自身可枚举属性及原型链上的可枚举属性。 如果只遍历实例自身的属性需要用 `xxx.hasOwnProperty('name')`

```js
Object.prototype.run = function() {}
function Dog () {
    this.name = '哈士奇'
}

Dog.prototype.say = function () {}

console.log(Object.getOwnPropertyDescriptor(Dog.prototype, 'say'), '======'); 

{
  value: [Function (anonymous)],
  writable: true,
  enumerable: true,
  configurable: true
}

var user = new Dog
Object.defineProperty(user, 'xxx', {
    value: 42,
    writable: false,
    enumerable: false
});

// 遍历自身属性
for (const key in user) {
    if(user.hasOwnProperty(key)) {
        console.log('key :>> ', key); // 只打印 name 
    }
}
// 遍历自身及原型链上可以枚举的属性
for (const key in user) {
    console.log('key :>> ', key); // 打印 name ,say , run 
}
```


### Object.keys

返回实例自身可枚举的属性
```js

Object.prototype.run = function() {}
function Dog () {
    this.name = '哈士奇'
}

Dog.prototype.say = function () {}
console.log(Object.getOwnPropertyDescriptor(Dog.prototype, 'say'), '======'); 

var user = new Dog

Object.defineProperty(user, 'age', {
    enumerable: false,
    value: 100
})
var a = Object.getOwnPropertyNames(user)
console.log('a :>> ', a); // [ 'name']
```

### Objecet.getOwnPropertyNames

返回实例自身所有属性（可枚举，不可枚举）

```js

Object.prototype.run = function() {}
function Dog () {
    this.name = '哈士奇'
}

Dog.prototype.say = function () {}
console.log(Object.getOwnPropertyDescriptor(Dog.prototype, 'say'), '======'); 

var user = new Dog

Object.defineProperty(user, 'age', {
    enumerable: false,
    value: 100
})
var a = Object.getOwnPropertyNames(user)
console.log('a :>> ', a); // [ 'name', 'age' ]
```


## let与var 的区别

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let

```js
var 和 let 的不同之处在于后者是在编译时才初始化（见下面）。

let 不会变量提升

let 会有块作用域概念

let 不会在全局对象里新建一个属性

let 在同一个作用域声明多次会报错

let 会有暂时性死区，声明之前不可用
```