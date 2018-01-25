# Array Splice

语法如下：

```javascript
array.splice(start)

array.splice(start, deleteCount)

array.splice(start, deleteCount, item1, item2, ...)

```

参数

`start​`

指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从1计数）；若只使用`start`参数而不使用`deleteCount`、`item`，如：`array.splice(start)` ，表示删除[start，end]的元素。

`deleteCount`可选

整数，表示要移除的数组元素的个数。如果 `deleteCount` 是 0，则不移除元素。这种情况下，至少应添加一个新元素。如果 `deleteCount` `大于start` 之后的元素的总数，则从 start 后面的元素都将被删除（含第 `start` 位）。
如果deleteCount被省略，则其相当于`(arr.length - start)`。

`item1, item2, ...` 可选

要添加进数组的元素,从`start` 位置开始。如果不指定，则 `splice()` 将只删除数组元素。

#### 值得注意的是，start位置是不会被删除的，如果splice（2，3），arr为[1,2,3,4,5,6]，则表示从2开始，不删除2，删除了3，4，5这三个元素，2是删除不了的。
