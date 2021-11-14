/**
 * Marcelo Rafael Gonçalves tem 31 anos, pesa 82 kg
 * tem 1.82 de altura e seu IMC é de 24.755464315903875
 * Marcelo Rafael nasceu em 1989
 */

const nome = 'Marcelo Rafael'
const sobrenome = 'Gonçalves'
const idade = 31
const peso = 82
const alturaEmM = 1.82
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM)
anoAtual = 2021
let anoNascimento = anoAtual - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);