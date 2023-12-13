//Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(`El número más alto es ${numberOne}`)
  } else if (numberOne < numberTwo) {
    console.log(`El número más alto es ${numberTwo}`)
  }
}
sum(1, 2)
sum(4, 3)
