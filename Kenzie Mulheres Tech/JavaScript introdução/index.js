//console.log("Eu funciono");
//console.log("Arquivo de script externo");

//let meuNumero = 90;
//console.log(meuNumero);
//aqui acontece a retribuição

//let outroNumero = 10;

//console.log(`Meu Numero é : ${meuNumero + outroNumero}`);

//let x = 5; 
//let y = 3;
//let z = "5";
// == não ve o tipo, entao se for string ou numero ele vai fazer true, ja o === significa que o tipo é igual e o valor, !== ver se é diferente

//let idadeDoJoao = 22;
//let idadeDaMaria = 15; 

//let joaoPodeEntrar = idadeDoJoao > 18;
//console.log("joao pode entrar?", joaoPodeEntrar)

//let mariaPodeEntrar = idadeDaMaria > 15;
//console.log("Maria pode entrar?", mariaPodeEntrar)

// false = palavra reservada, Undefined = também é false, porem não foi conferido. Null = false, ou string vazia e não funciona, 0 = false, NaN = false e erro

//let stringVazia = "" ;

let x = 3;

if (x < 4) {
    console.log("X é menor que 4")
} else if (x===4) { //mas se
    console.log("X é igual a 4")
} else {
    console.log("x é maior que quatro")
}


//array é uuma lista de itens, n tem limite de tamanho e cada item pode ser qualquer tipo de dado

let numbers = [1, 2, 3,];
let frutas = ['banana', 'maça', 'laranja', 'pêra'];
let numerosEFrutas = [1, 'banana', '3','maça']
console.log(numbers);
console.log(frutas);
console.log(numerosEFrutas);


let predio = ['terreo', 'primeiroAndar', 'segundoAndar','terceiroAndar','quartoAndar'];

console.log(predio);

console.log(predio[3]);
console.log(predio[0]);
console.log(predio[5]) //não definido

//adicionar um item no array 

predio.push('quintoAndar')
console.log(predio[5])

predio.pop() // metodo pop retira o ultimo colocado
console.log(predio)

predio.unshift('subsolo') // coloca em primeiro lugar
console.log(predio)

predio.shift() // retira o primeiro
console.log(predio)