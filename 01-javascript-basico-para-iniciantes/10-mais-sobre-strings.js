let umaString = "Um texto"

console.log(umaString)
console.log(umaString[4])
console.log(umaString[9])
console.log(umaString[-1])
console.log(umaString.charAt(6)) // o método charAt() retorna o caractere no indice especifico em uma string.
console.log(umaString.concat(' em', ' um', ' lindo', ' dia')) //o método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro.
console.log(`${umaString} em um lindo dia.`)
console.log(umaString.indexOf('o', 3)) // O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
console.log(umaString.lastIndexOf('m', 3)) // O método lastIndexOf() retorna o índice da última ocorrência do valor especificado encontrado na String.
console.log(umaString.replace('Um', 'Outra')) // o método replace() retorna uma nova string com algumas ou todas as correspondências de um padrão substituidas por um determinado caractere/s
console.log(umaString.length) // A propriedade length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array
console.log(umaString.slice(3, 9)) // o método slice() retorna uma cópia da parte de um array a partir de um subarray criado entre as posições inicio e fim.
console.log(umaString.split(' ')) // o método split() divide uma string em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
console.log(umaString.toUpperCase())// O método toUpperCase() retorna o valor da string original convertido em letras maiúsculas
console.log(umaString.toLowerCase())// O método toLowerCase() retorna o valor da string original convertido em letras minusculas
