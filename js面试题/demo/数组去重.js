// 1. new Set 注意new Set返回的是一个对象 因此需要使用扩展运算符(...)将其转换为数组
var arr1 = [1, 2, 3, 2, 4, 1];

function unique(arr) {
  return [...new Set(arr)]
}

console.log(unique(arr1));

// 2. indexOf 查找新数组中是否已有该元素的下标
var arr2 = [1, 2, 3, 2, 4, 1];

function unique(arr) {
  var brr = []; // 创新新数组
  for (var i = 0; i < arr.length; i++) { // 遍历原数组
    // 如果新数组中没有当前元素，则将其添加到新数组中
    if (brr.indexOf(arr[i]) == -1) {
      brr.push(arr[i]);
    }
  }
  return brr;
}

console.log(unique(arr2));

// 3. sort 排序后判断相邻元素是否相同来去重
var arr3 = [1, 2, 3, 2, 4, 1];

function unique(arr) {
  var brr = arr.sort(); // 排序
  var crr = []; // 创新新数组
  for (var i = 0; i < brr.length; i++) { // 遍历新数组
    if (brr[i] !== brr[i + 1]) { // 如果当前元素和下一个元素不相同，则将当前元素添加到新数组中
      crr.push(brr[i]);
    }
  }
  return crr;
}

console.log(unique(arr3));