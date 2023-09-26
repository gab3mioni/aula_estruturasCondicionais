let number = parseInt(prompt("Digite um número"));

let resultado = number % 2 == 0

console.log(resultado)

if ( resultado == !true) {
    alert(Math.pow(number,3));
} else {
   alert(Math.pow(number,2));
}