const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // (length ) verificar quantos elementos tem non array

valores.push({id: 3}, false, null, 'teste') // (push) adiciona elementos no array
console.log(valores)

console.log(valores.pop()) // (pop) mostra na tela o último elemento e deletar do array
delete valores[0]
console.log(valores)

console.log(typeof valores)