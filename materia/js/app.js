// estruturas condicionais

let idade = 18

if (idade >= 18) { // verifica se o número ao lado é maior ou igual a variável "idade"
    console.log("Você é maior de 18 anos."); // se o valor é igual a variável "idade", retorna no console
} else {
    console.log("Você é menor de idade, sai fora!"); //  se o valor não é igual a variável "idade", retorna no console
}

// if else

let diaSemana = "quarta";

if (diaSemana === "segunda") { // verifica se a variável diaSemana é igual a segunda
    console.log("Hoje é segunda-feira"); // se for igual, retorna no console
} else if (diaSemana === "terça" ) { // se não for igual a variável acima, verifica se é igual a terça
    console.log("Hoje é terça-feira"); // se for igual, retorna no console
} else if (diaSemana === "quarta") { // se não for igual a outra variável acima, verifica se é igual a quarta
    console.log("Hoje é quarta-feira"); // se for igual, retorna no console
} else {
    console.log("É um dia diferente da semana."); // se não for igual a nenhuma das três acima, retorna no console
}

// operador ternário

let mensagem = idade >=18 ? "Maior de idade" : "Menor de idade"; // se for verdadeiro, retorna a mensagem antes dos dois pontos, se não, mensagem após os dois pontos
console.log(mensagem)

// outro exemplo de operador ternário

let nota = 5.00;
let texto = (nota >= 6.00) ? "Aprovado" : "Reprovado";

console.log(texto)

// operadores lógicos

// E lógico

let a = true;
let b = false;

let resultado = a && b; // ambos precisam ser true para resultado ser true, se uma das variáveis for false, a variável resultado será false

// outro exemplo

let eCidadao = true;

if (idade >= 18 && eCidadao == true){ // verifica se idade é maior ou igual a 18 e se eCidadao é true
console.log("Você é elegível para votar."); // se ambos forem true, retorna mensagem
} else {
    console.log("Você não é elegível para votar.") // se um deles não forem true, retorna mensagem
} 

// necessariamente utilizando && ambas as condições devem ser verdadeiras para o código ser executado dentro do if, se pelo menos uma não for
// será retornado a mensagem dentro do else

// OU lógico

let c = true;
let d = false;

let resultado2 = a || b; // resultado é igual a true, porque pelo menos uma das variáveis é true

// outro exemplo

let assinaturaMensal = false;
let assinaturaAnual = true;

if (assinaturaMensal || assinaturaAnual) {
    console.log("Você tem acesso ao contéudo premium.");
} else {
    console.log("Você não tem acesso ao contéudo premium.");
}

// NÃO lógico

let e = true;

let resultado3 = !e; //resultado é igual a false

// sempre que utilizado o ! ele retorna o valor inverso, ou seja, como a variável e é true, irá retornar false

// outro exemplo

let usuarioBanido = false;

if (!usuarioBanido) {
    console.log("Você não está banido do fórum");
} else {
    console.log("Você está banido do fórum");
}