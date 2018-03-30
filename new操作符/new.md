# new 操作符具体发生了什么

```javascript
function a() {
  name: "yoyo";
}

let b = new a();
```

这个new到底做了什么呢？

```javascript
let obj = {};
obj.__proto__ = a.prototype;
obj.call(a);
```

归纳起来就是

* 创建一个空对象
* 将创建出的空对象的隐原型指向显式原型。
* 最后将创造出的对象的this指向a
