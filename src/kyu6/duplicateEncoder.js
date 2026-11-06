function duplicateEncode(word){
    let words = word.toLowerCase().split("");

    return words.map(w => {
        let cont = 0;
        for (let i in words) {
            if (words[i] === w.toLowerCase()) cont++;
        }

        return cont > 1 ? ")" : "(";
    }).join("");
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("Success"));
