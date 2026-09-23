function getAverage(marks){
  return Math.trunc(marks.reduce((total, n) => total + n, 0) / marks.length);
}

console.log(getAverage([2,2,2,2]));
