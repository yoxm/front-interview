let a = [
  1,
  3,
  5,
  "1",
  "23",
  "5",
  1,
  3,
  5,
  { name: "yoyo" },
  { name: "yoyo", age: "123" },
  { name: "yoyo", age: "123" }
];

const unique4 = arr => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        let j = 0;
        for (; j < res.length; j++) {
            if (ele === res[j]){
                break;
            }
        }
        if (j === res.length) {
            res.push(ele);
        }
     }
     return res;
};

const unique = arr => {
  let obj = {};
  return arr.filter(
    item =>
      obj.hasOwnProperty(typeof item + item)
        ? false
        : (obj[typeof item + item] = true)
  );
};

const unique2 = arr => {
  return arr.filter((value, index, array) => {
    return array.indexOf(value) === index;
  });
};

const unique3 = arr => [...new Set(arr)];

console.log(unique(a));

console.log(unique2(a));

console.log(unique3(a));

console.log(unique4(a));
