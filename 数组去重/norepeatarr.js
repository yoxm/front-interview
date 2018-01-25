const arr = [1, 2, 3, '1', '2', 3, 5, 1, {"name": 'Yoyo'}, {'name': 'Yoyo'}]

const unique = arr => {
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

const unique1 = arr => {
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

console.log(unique(arr));

console.log(unique1(arr));

console.log(unique2(arr));

console.log(unique3(arr));
