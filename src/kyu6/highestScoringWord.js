function high(x){
    let words = x.trim().toLowerCase().split(" ");
    let resultHigh = {scoring: 0, word: ''};
    for (let i = 0; i < words.length; i++) {
        let sum = words[i].split("").reduce((total, n) => (n.charCodeAt(0) - 96) + total, 0)

        if (resultHigh.scoring < sum) {
            resultHigh.scoring = sum;
            resultHigh.word = words[i];
        } 
    }

    return resultHigh.word;
}

console.log(high('aa b'));
