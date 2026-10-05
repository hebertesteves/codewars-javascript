function positiveSum(arr) {
  return arr.filter(n => n > 0).reduce((total, n) => total + n, 0);
}

console.log(positiveSum([]));
console.log(positiveSum([1, 2, -4, 3]));
