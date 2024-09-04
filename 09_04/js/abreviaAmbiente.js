'use strict'

function abreviaAmbiente(ambiente){
    const ambiente_vetor = ambiente.split('-');
    ambiente_vetor.splice(0,2);
    const nome = ambiente_vetor.join('-');
    return nome;
}

export default abreviaAmbiente;