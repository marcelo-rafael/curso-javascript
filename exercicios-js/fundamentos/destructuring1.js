// novo recurso do Es2015

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

const {nome, idade} = pessoa  // acessando as variaveis nome e idade do objeto pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa  // acessando e renomeando as variaveis nome e idade do objeto pessoa
console.log(n, i)

const {sobrenome, bemHUmorada = true} = pessoa // acessando variaveis não declaradas no objeto
console.log(sobrenome, bemHUmorada)

const { endereco: { logradouro, numero, cep}} = pessoa 
console.log(logradouro, numero, cep)

const { conta: { ag, num}} = pessoa
console.log(ag, num)