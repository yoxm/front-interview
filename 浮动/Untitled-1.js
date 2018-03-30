const deepClone = obj => {
  let buff;
  if (obj instanceof Array) {
    buff = [];
    let i = obj.length;
    while (i--) {
      buff[i] = deepClone(obj[i]);
    }
    return buff;
  } else if (obj instanceof Object) {
    buff = {};
    for (let item in buff) {
      buff[item] = deepClone(obj[item]);
    }
    return buff;
  } else {
    return obj;
  }
};

 const depClone  = obj => {
    let proto = Object.getPrototypeOf(obj);
    return Object.assign({}, Object.create(obj), obj);
 }

function clone(Obj) {
  var buf;
  if (Obj instanceof Array) {
    buf = []; //创建一个空的数组
    var i = Obj.length;
    while (i--) {
      buf[i] = clone(Obj[i]);
    }
    return buf;
  } else if (Obj instanceof Object) {
    buf = {}; //创建一个空对象
    for (var k in Obj) {
      //为这个对象添加新的属性
      buf[k] = clone(Obj[k]);
    }
    return buf;
  } else {
    return Obj;
  }
}

const obj = {
  name: "yoyo",
  arr: [12, 3, {io: '432'}]
};
console.log(depClone(obj));
