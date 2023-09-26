let n1 = parseFloat(prompt("Qual é sua primeira nota?"));
let n2 = parseFloat(prompt("Qual é sua segunda nota?"));
let n3 = parseFloat(prompt("Qual é a sua terceira nota?"));
let n4 = parseFloat(prompt("Qual é a sua quarta nota?"));

let nFinal = ( n1 * 3) + ( n2 * 5 ) + ( n3 * 6 ) + ( n4 * 6 ) / 20;

if ( nFinal >= 6) {
    console.log(`Você foi aprovado!`);
} else { 
    console.log(`Você foi reprovado!`)
}