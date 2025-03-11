let nomeRecruta, sobrenomeRecruta, campoEstudo, nascimento, idadeRecruta
const anoAtual = new Date().getFullYear();

console.log(anoAtual)

nomeRecruta = prompt("Escreva o nome do recruta")
sobrenomeRecruta = prompt("Escreva o sobrenome do recruta")
campoEstudo = prompt("Escreva o campo de estudo do recruta")
nascimento = prompt("Escreva a data de nascimento do recruta")

alert("O nome do recruta é " + nomeRecruta)
alert("O sobrenome do recruta é " + sobrenomeRecruta)
alert("O campo de estudo do recruta é " + campoEstudo)
alert("A data de nascimento do recruta é " + nascimento)
idadeRecruta = anoAtual - nascimento
alert("Se o ano atual é " + anoAtual + ", então o recruta tem " + (idadeRecruta - 1) + " ou " + idadeRecruta + " anos")

let n1, n2;
let soma, subtração, multiplicação, divisão

n1 = parseFloat(prompt("Escreva o primeiro número"))
n2 = parseFloat(prompt("Escreva o segundo número"))

// parseFloat serve para mudar uma string para número

soma = n1 + n2 
subtração = n1 - n2 
multiplicação = n1 * n2 
divisão = n1 / n2

alert(
    'N1 = ' + n1 + ', n2 = ' + n2 + '.' +
    "\nSoma é " + soma +
    "\nSubtração " + subtração +
    "\nMultiplicação " + multiplicação +
    "\nDivisão " + divisão
)
// \n serve para quebra de linha