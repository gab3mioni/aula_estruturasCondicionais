let n1 = parseInt(prompt("Digite o primeiro número"));
let n2 = parseInt(prompt("Digite o segundo número"));
let n3 = parseInt(prompt("Digite o terceiro número"));

if ( n1 > 0 ) {
    alert("O primeiro número é  maior que zero") 
} else if ( n1 == 0 ) {
    alert("O primeiro número é igual a zero")
} else if ( n1 < 0 ) {
    alert("O primeiro número é menor que zero")
}

if ( n2 > 0 ) {
    alert("O segundo número é maior que zero") 
} else if ( n2 == 0 ) {
    alert("O segundo número é igual a zero")
} else if ( n2 < 0 ) {
    alert("O segundo número é menor que zero")
}

if ( n3 > 0 ) {
    alert("O terceiro número é maior que zero") 
} else if ( n3 == 0 ) {
    alert("O terceiro número é igual a zero")
} else if ( n3 < 0 ) {
    alert("O terceiro número é menor que zero")
}

alert(`O maior número é o ${Math.max(n1,n2,n3)}`)