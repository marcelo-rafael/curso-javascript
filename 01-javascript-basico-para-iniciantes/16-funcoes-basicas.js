// Função nomeada
// function saudacao(nome) {
//   console.log(`Bom dia ${nome}`)
// }

// saudacao('Luiz')
// saudacao('Maria')

// function saudacao(nome) {
//   return `Bom dia ${nome}`
// }

// const variavel = saudacao('Luiz')
// console.log(variavel)

// function soma(x, y) {
//   const resultado = x + y
//   return resultado
// }

// console.log(soma(2, 2))

// function soma(x = 1, y = 1) {
//   const resultado = x + y
//   return resultado
// }

// const resultado = soma(4, 2)
// console.log(resultado)


//Função anonima
// const raiz = function(n) {
//   return n ** 0.5
// }

// console.log(raiz(9))
// console.log(raiz(16))

//Arrow Function
// const raiz = (n) => {
//   return n ** 0.5
// }

const raiz = n => n ** 0.5 // arrow function simplificada

console.log(raiz(9))
console.log(raiz(16))