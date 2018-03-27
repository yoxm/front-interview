# 翻转字符串

## 使用函数

```javascript
const reverseStr = str => {
  return str
    .split("")
    .reverse()
    .join("");
};
```

## 使用循环

```javascript
const reverseStr = str => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};
```

## 使用递归

```javascript
const reverseStr = str => {
  return str === "" ? "" : reverseStr(str.substr(1)) + str.charAt(0);
};
```
