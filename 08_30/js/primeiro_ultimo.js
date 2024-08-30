'use strict';

let nome = 'Ramon';
let sobrenome = 'de Holanda';

console.log(sobrenome);

const instrutor = 'DANIEL BRAVIM LEMOS';

const pieces = instrutor.split(' ');
//split faz um array separando o texto de acordo com o paramentro. Ex: 'I' -> Dan, El Brav, Lemos
//split separa uma string em um array de strings com o separador escolhido
console.log(pieces[0],pieces[pieces.length-1]);
//[] pega as partes do array
//length pega o tamanha. length-1 vai pegar a ultima posição prq o tamanho não conta 0

console.log(pieces[0],pieces.pop());
//pop remove e retorna o ultimo elemento

let array = [1,2,3,4,5,6];
console.log(array)
let num = array.pop();
console.log(num);
console.log(array);

// push empurra ao final do array
array.push(7);
console.log(array);

// shift remove e retorno o primeiro
console.log(array.shift());
console.log(array);

// unshift adiciona na primeira posição
array.unshift(0);
console.log(array);

let cores = ['verde', 'azul','roxo', 'vermelho','rosa'];

for(let i = 0; i < cores.length; i++){
    console.log(cores[i]);
}
console.log('---FOR simplificado---');
for (let cor of cores){
    console.log(cor);
}
