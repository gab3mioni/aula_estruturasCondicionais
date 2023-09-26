let number = parseInt(prompt("Digite um número"));

let resultado = number % 2 == 0 ? 'Par' : 'Ímpar';

if ( number <= 0 ) {
    alert("O número digitado não pode ser")
} else {
    alert(resultado)
}