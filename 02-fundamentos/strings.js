const escola = 'Cod3r'

console.log(escola.charAt(4)) // (charAt) devolve o indice da string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // (charCodeAt) devolve o código do caractere
console.log(escola.indexOf('3')) // (indexOf) devolve o indice
console.log(escola.substring(1)) // (substring) extrai caracteres desde indexStart até, mas não incluindo, indexEnd 
console.log(escola.substring(0, 3)) // (substring) começar do indice 0 e excluir o indice 3
console.log('Escola '.concat(escola).concat('!')) // (concat) concatenar string
console.log(escola.replace(3, 'e')) // (replace) substituir caractere
console.log('Ana, Maria, Pedro'.split(',')) // O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.

