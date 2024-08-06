const corretora_fun = require("../src/corretora.js");
const corretor_fun = require("../src/corretor.js");
const imovel_fun = require("../src/imovel.js");
const cliente_fun = require("../src/cliente.js");
const venda_fun = require("../src/venda.js")
const prompt = require("prompt-sync")();

const CRIAR_PROCESSO = () => {
    let processo = [];

    console.log("Corretora: ");
    processo.push(corretora_fun.CRIAR_CORRETORA());
    console.log("Corretor: ");
    processo.push(corretor_fun.CRIAR_CORRETOR(processo[0].id_corretora));
    console.log("Imovel: ");
    processo.push(imovel_fun.CRIAR_IMOVEL(processo[0].id_corretora));
    console.log("Cliente: ");
    processo.push(cliente_fun.CRIAR_CLIENTE());
    processo.push(venda_fun.CRIAR_VENDA(processo[2].id_imovel, processo[3].id_cliente, processo[1].id_corretor));

    return processo;
}

const LISTAR_PROCESSO = (data) => {
    console.log("Corretoras: ");
    corretora_fun.LISTAR_CORRETORA(data);
    console.log("Corretores: ");
    corretor_fun.LISTAR_CORRETOR(data);
    console.log("Imóveis: ");
    imovel_fun.LISTAR_IMOVEL(data);
    console.log("Clientes: ");
    cliente_fun.LISTAR_CLIENTE(data);
    console.log("Vendas: ");
    venda_fun.LISTAR_VENDA(data);
} 

const ATUALIZAR_PROCESSO = (data) => {
    for(let i = 0; i < data.length; i++) {
        console.log("Indice: ", i, "Processo: ", data[i]); 
    }

    let escolha = +prompt("Escolha um índice de processo para atualizar: ");
    escolha = Math.floor(escolha);

    if(
        escolha == "" &&
        escolha != 0 ||
        isNaN(escolha)
    ) {
        console.log("Formato inválido.");

    } else {
        data.splice(escolha, 1, CRIAR_PROCESSO());
    }

}

const DELETAR_PROCESSO = (data) => {
    for(let i = 0; i < data.length; i++) {
        console.log("Indice: ", i, "Processo: ", data[i]); 
    }

    let escolha = +prompt("Escolha um índice de processo para atualizar: ");
    escolha = Math.floor(escolha);

    if(
        escolha == "" &&
        escolha != 0 ||
        isNaN(escolha)
    ) {
        console.log("Formato inválido.");

    } else {
        data.splice(escolha, 1);
    }
}

module.exports = {
    CRIAR_PROCESSO,
    LISTAR_PROCESSO,
    ATUALIZAR_PROCESSO,
    DELETAR_PROCESSO
}