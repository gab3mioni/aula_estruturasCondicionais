let base = parseInt(prompt("Qual o valor da base do triângulo?"));
let altura = parseInt(prompt("Qual a altura do triângulo?"));
let c1 = parseInt(prompt("Qual o valor do primeiro cateto?"));
let c2 = parseInt(prompt("Qual o valor do segundo cateto?"));

if ( base,altura,c1,c2 <= 0 ) {
    alert("Verifique os valores novamente!")
} 

let area = ( base * altura ) / 2;
let hipotenusa = c1 * c2;

console.log(area)
console.log(hipotenusa)