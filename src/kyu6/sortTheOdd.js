function sortArray(array) {
    let odds = array.filter(num => num % 2 !== 0).sort((n1, n2) => n1 - n2);
    
    let cont = 0;
    return array.map(num => {
        if (num % 2 === 0) return num;

        return odds[cont++];
    });
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
