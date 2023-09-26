let n1 = parseInt(prompt("Digite o primeiro número"));
let n2 = parseInt(prompt("Digite o segundo número"));

let adicao = n1 + n2;

if ( adicao > 10 ) {
    alert(`Os valores digitados são ${n1} e ${n2} \n A adição dos valores é ${adicao} \n A raiz cúbica da adição é ${Math.cbrt(adicao)}`)
} else {
    alert(`Os valores digitados são ${n1} e ${n2} \n A adição dos valores é ${adicao}`)
}