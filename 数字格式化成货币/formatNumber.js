const formatNum1 = str => {
  let arr = [],
    count = str.length;

  while (count >= 3) {
    arr.unshift(str.slice(count - 3, count));
    count -= 3;
  }
  console.log(arr)
  // 如果是不是3的倍数就另外追加到上去
  str.length % 3 && arr.unshift(str.slice(0, str.length % 3));
  console.log(arr)
  return arr.toString();
};

const formatNum2 = str => {
    return str.split("").reduceRight((previousValue, currentValue, index) => {
        return ((index % 3) ? currentValue : (currentValue + ',')) + previousValue;
    })
}

const formatNum3 = str => {
    return (str*1).toLocaleString('en-US');
}


console.log(formatNum1("1234567890"));
console.log(formatNum2("1234567890"));
console.log(formatNum3("1234567890"));
