const peso1 = 1.0
const peso2 = Number('2.0') // (Number)convertendo string para número

console.log(peso1 + peso2)
console.log(Number.isInteger(peso1)) // (isInteger) verificar se p número é inteiro)
console.log(Number.isInteger(peso2)) 

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 +peso2)

console.log(media.toFixed(2)) // (toFixed(2) formatar o número para ter só 2 casas decimais ou o número que for colocado entre parenteses)
console.log(media.toString()) // (toString) converter o número para string
console.log(media.toString(2)) // (toString(2)) converter o número para binário
console.log(typeof media) // (typeof) verificar o tipo do dado