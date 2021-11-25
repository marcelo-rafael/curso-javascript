/**
 * Operadores de comparação
 * > maior que
 * >=maior que ou igual a
 * < menor que
 * <=menor que ou igual a
 * == igualdade (valor)
 * === igualdade estrita (valor e tipo)
 * != diferente (valor)
 * !== diferente estrito (valor e tipo)
 */

var num1 = 10
var num2 = 5
const maior = num1 > num2
console.log(maior)


var num1 = 10
var num2 = 10
const maiorIgual = num1 >= num2
console.log(maiorIgual)

var num1 = 10
var num2 = 11
const menor = num1 < num2
console.log(menor)

var num1 = 10
var num2 = 10
const menorIgual = num1 <= num2
console.log(menorIgual)


var num1 = 10
var num2 = '10'
const igualdade = num1 == num2
console.log(igualdade)

var num1 = 10
var num2 = 10
const igualdadeEstrito = num1 === num2
console.log(igualdadeEstrito)

var num1 = 10
var num2 = 5
const diferente = num1 != num2
console.log(diferente)

var num1 = 10
var num2 = '10'
const diferenteEstrito = num1 !== num2
console.log(diferenteEstrito)

