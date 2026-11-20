function checkExam(array1, array2) {
    let result = 0;
    for (let i in array2) {
        if (array2[i] === '') continue;

        array2[i] === array1[i] ? result += 4 : result -= 1;
    }

    return result < 0 ? 0 : result;
}

console.log(checkExam(["b","c","a","a","b","c","c","a","c","c","c","b","c","b","c","b","b"], ["b","c","","b","","b","a","b","a","c","","c","c","c","","",""]));
