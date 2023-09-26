let number = parseInt(prompt("Digite um número"));

let resultado = number % 2 == 0 ? 'Par' : 'Ímpar';

if ( number <= 0 ) {
    alert("O número deve ser maior que zero!")
} else if ( resultado == 'Par' ) {
    alert(`O número digitado foi ${number} \n
    Seu valor elevado ao quadrado é ${Math.pow(number,2)} \n
    Seu valor elevado ao cubo é ${Math.pow(number,3)} \n
    Seu valor elevado a sétima é ${Math.pow(number,7)}`)
} else {
    alert(`\n O número digitado é ${number} \n
    Sua raiz quadrada é ${Math.sqrt(number)} \n
    Sua raiz cúbica é ${Math.cbrt(number)} \n
    Sua raiz sétima é ${number * 1/7}`)
}