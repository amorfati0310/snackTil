const mergeSort = arr => {
  const merge = (left, right) => {
    const merged = [];
    let x = 0;
    let y = 0;
    while (left.length && right.length) {
      if (left[x] < right[y]) {
        merged.push(left.shift());
      } else {
        merged.push(right.shift());
      }
    }
    if (left.length) {
      return merged.concat(left);
    }
    if (right.length) {
      return merged.concat(right);
    }
    return merged;
  };

  // array를 제일 작게 나눠서 return 한다.
  if (arr.length === 1) return arr;
  else {
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  }
};

console.log(mergeSort([1, 3, 5, 4, 2, 6]));
console.log(mergeSort([1, 6, 3, 4, 2, 5]));

// console.log(merge([1, 2, 3], [4, 5, 6]));
