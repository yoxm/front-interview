/* function myBind(oThis) {
  console.log(arguments);
  var aArgs = Array.prototype.slice.call(arguments, 1);
  var fToBind = this;
  var fNOP = function () {};
  var fBound = function () {
    return fToBind.apply(
      this instanceof fNOP ? this : oThis,
      aArgs.concat(Array.prototype.slice.call(arguments))
    );
  };

  if (this.prototype) {
    fNOP.prototype = this.prototype;
  }
  fBound.prototype = new fNOP();
  return fBound;
};

var num = 19;
var mymodule = {
  num: 81,
  getNum: function () {
    console.log(this);
    return this.num;
  }
};
var getNum = mymodule.getNum;
var boundGetNum = getNum.myBind(mymodule);
console.log(boundGetNum()); */

function a() {
  console.log(arguments[0]);
  let aArgs = Array.prototype.slice.call(arguments, 0);
  console.log(aArgs);
}

console.log(a(1, 2, 3, 4, 5));