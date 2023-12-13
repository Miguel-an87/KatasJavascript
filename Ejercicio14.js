//Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(param, wordToCount) {
  let count = 0
  for (i = 0; i < param.length; i++) {
    if (wordToCount === param[i]) {
      count++
    }
  }
  return `La palabra ${wordToCount} se repite ${count} veces.`
}
console.log(repeatCounter(counterWords, 'code'))
console.log(repeatCounter(counterWords, 'repeat'))
console.log(repeatCounter(counterWords, 'eat'))
console.log(repeatCounter(counterWords, 'sleep'))
