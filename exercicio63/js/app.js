let n1 = parseInt(prompt("Digite o primeiro valor"));
let n2 = parseInt(prompt("Digite o segundo valor"));
let n3 = parseInt(prompt("Digite o terceiro valor"));

let soma = (Math.pow(n1,2)) * (Math.pow(n2,2)) * (Math.pow(n3,2));

alert(soma)

if ( soma % 2 == 0 ) {
    alert("A soma é par")
} else {
    alert("A soma é ímpar")
}