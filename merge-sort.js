function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    let arrLeft = arr.slice(0, arr.length / 2);
    let arrRight = arr.slice(arr.length / 2);
    return merge(mergeSort(arrLeft), mergeSort(arrRight));
  }
}

function merge(left, right) {
  let mergedArr = [];
  let l = 0;
  let r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] <= right[r]) {
      mergedArr.push(left[l]);
      left.shift();
      l++;
    } else {
      mergedArr.push(right[r]);
      right.shift();
      r++;
    }
  }
  return [...mergedArr, ...left, ...right];
}
console.log(mergeSort([105, 79, 100, 110]));

/*
    sort left half
    sort right half
    merge

    base case :
    if array length is 1, array is sorted
*/
