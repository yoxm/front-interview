const serilizeUrl = str => {
  let ref = str.split("?")[1];
  let map = ref.split("&");
  let result = {};
  map.map(item => {
    result[item.split("=")[0]] = item.split("=")[1];
  });
  return result;
};

console.log(serilizeUrl("http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e"));
//