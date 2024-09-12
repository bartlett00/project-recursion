function fibs(n) {
  let fibArr = [];
  let fib0 = 0;
  let fib1 = 1;
  let fibNext = 0;
  for (let i = 0; i < n; i++) {
    fibArr.push(fib0);
    fibNext = fib1 + fib0;
    fib0 = fib1;
    fib1 = fibNext;
  }
  return fibArr;
}
console.log(fibs(8));

function fibsRec(n) {
  if (n == 1) {
    return [n - 1, n];
  } else if (n == 0) {
    return [n];
  } else {
    let fibNumOne = fibsRec(n - 1);
    return [...fibNumOne, fibNumOne[n - 1] + fibNumOne[n - 2]];
  }
}
console.log(fibsRec(8));
