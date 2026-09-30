function squareDigits(num){
  const digitos = String(num).split("");

  const response = digitos.map((item) => Number(item) ** 2);

  return Number(response.join(""));
}

console.log(squareDigits(9119));
