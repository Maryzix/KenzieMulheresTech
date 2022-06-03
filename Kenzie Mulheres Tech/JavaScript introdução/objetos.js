let minhaXicara = {
    cor: 'Marrom',
    peso: 30,
} //propriedade


let meuPrimeiroItemDoPedido = {
    id:0,
    nome: 'X-Burguer',
    preco: 30,
    disponivel: true,
    ingredientes:['pão', 'tomate',' alface','hamburguer', 'queijo']
}; 

console.log(meuPrimeiroItemDoPedido.ingredientes);

console.log(meuPrimeiroItemDoPedido.preco);


meuPrimeiroItemDoPedido.preco = 25
//promoção
console.log(meuPrimeiroItemDoPedido.preco);

//adicionar a propriedade

meuPrimeiroItemDoPedido.peso ="500g"
console.log("o Lance " + meuPrimeiroItemDoPedido.nome + " é muito bom");