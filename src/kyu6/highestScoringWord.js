function high(x){
    let words = x.trim().toLowerCase().split(" ");
    let resultHigh = {scoring: 0, word: ''};
    for (let i = 0; i < words.length; i++) {
        let sum = 0;
        for (let j = 0; j < words[i].length; j++) {
            sum += words[i].charCodeAt(j) - 96;
        }

        if (resultHigh.scoring < sum) {
            resultHigh.scoring = sum;
            resultHigh.word = words[i];
        } 
    }

    return resultHigh.word;
}

console.log(high('aa b'));
