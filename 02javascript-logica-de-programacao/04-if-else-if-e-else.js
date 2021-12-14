/**
 * Entre 0 - 11 - Bom dia
 * Entre 12 - 17 - Boa tarde
 * Entre 18 - 23 - Boa noite
 */

// if pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários "else ifs" na checagem
// So posso ter um else na checagem
// Podemos usar condições sem else ifs utilizando apenas if e else

// const hora = 19

// if (hora >= 0 && hora <= 11) {
//   console.log('Bom dia')
// } else if (hora >= 12 && hora <= 17) {
//   console.log('Boa tarde')
// } else if (hora >= 18 && hora <= 23) {
//   console.log('Boa noite')
// } else {
//   console.log('Olá, hora invalida')
// }

const numero = 5

if ( numero >= 0 && numero <= 5) {
  console.log('O número está entre 0 e 5.')
} else {
  console.log('O número NÂO está entre 0 e 5.')
}