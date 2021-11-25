/**
 * Aritméticos
 * + Adição / Concatenação
 * - Subtração
 * / Divisão
 * * Multiplicação
 * ** Potenciação
 * % Resto da divisão
 * 
 * Ordem de precedência
 * () -> ** -> * / % -> + -
 * 
 * Incremento = ++
 * Decremento = --
 */

const num1 = 10
const num2 = 5
console.log('Adição')
console.log(num1 + num2)
console.log('Subtração')
console.log(num1 - num2)
console.log('Divisão')
console.log(num1 / num2)
console.log('Multiplicação')
console.log(num1 * num2)
console.log('Potenciação')
console.log(num1 ** num2)
console.log('Resto da divisão')
console.log(num1 % num2)

/**
 * Incremento
 * contador++ -> pós-incremento
 * ++contador -> pré-incremento
 * 
 * Decremento
 * contador-- -> pós-decremento
 * --contador -> pré-decremento
 */

let contador1 = 1
contador1++
console.log(`Contador: ${contador1}`)

/**
 * Operadores de Atribuição
 * +=
 * -+
 * *=
 * /=
 * **=
 * 
 */

let contador2 = 0
contador2 += 2 // contador = contador + 2
console.log(contador2)

// NaN - Not a number
// parseInt (converter para inteiro)
// parseFloat (converter para números com casas decimais)
// Number (converter para número tanto inteiro quanto decimal)
const numero1 = 10
const numero2 = parseInt('5') // converter string para number
console.log(numero1 + numero2)
console.log(typeof num2)
