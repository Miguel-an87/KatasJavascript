//Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
//Puedes usar este array para probar tu función:
const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(param) {
  let longerArray = param[0]
  for (let i = 1; i < param.length; i++) {
    if (param[i].length > longerArray.length) {
      longerArray = param[i]
    }
  }
  return longerArray
}

console.log(findLongestWord(avengers))
