function unusedDigits(...array) {
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let digitsArray = array.join("").split("").map(n => Number(n));

    return digits.filter((d) => !digitsArray.includes(d)).join("");
}

console.log(unusedDigits(12, 34, 56, 78));
console.log(unusedDigits(2015, 8, 26));
