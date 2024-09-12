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
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      mergedArr.push(left[0]);
      left.shift();
    } else {
      mergedArr.push(right[0]);
      right.shift();
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
