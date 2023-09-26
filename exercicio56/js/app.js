let n1 = parseFloat(prompt("Digite a primeira nota"));
let n2 = parseFloat(prompt("Digite a segunda nota"));
let n3 = parseFloat(prompt("Digite a terceira nota"));

let nFinal = n1 + n2 + n3 / 3;

if ( nFinal >= 7.50 ) {
    console.log("Você foi aprovado!");
} else {
    console.log("Você foi reprovado!")
}