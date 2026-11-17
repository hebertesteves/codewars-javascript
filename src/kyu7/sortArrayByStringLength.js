function sortByLength (array) {
  return array.sort((elemento1, elemento2) => elemento1.length - elemento2.length);
}

console.log(sortByLength(["Beg", "Life", "I", "To"]));
