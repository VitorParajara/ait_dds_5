'use strict'

const ambientes = [
    'VTRIA-3-SALA-3004',
    'VTRIA-EXTER-EXTERNO',
    'VTRIA-5-LAB-5022'
]

for(let i = 0; i < ambientes.length; i++){
    const ambiente = ambientes[i].split('-');
    ambiente.splice(0,2);
    let nome = ambiente.join('-');
    console.log(nome)
}

//pega os dois ultimos

//se ultimo = externo, só ultimo