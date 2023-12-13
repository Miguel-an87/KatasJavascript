//Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

//pista (typeof)
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']

function averageWord(param) {
  let sumeNumbers = 0
  let sumeStrings = 0

  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      sumeNumbers += param[i]
    } else if (typeof param[i] === 'string') {
      sumeStrings += param[i].length
    }
  }

  const totalElements = param.length
  const average = (sumeNumbers + sumeStrings) / totalElements

  return average
}

console.log(averageWord(mixedElements))
