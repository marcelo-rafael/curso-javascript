function tratarErroELancar(erro) {
  throw new Error('...errado')
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (error) {
    tratarErroELancar(error)
  } finally {
    console.log('final')
  }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)