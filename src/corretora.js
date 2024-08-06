const prompt = require("prompt-sync")();
const {GERAR_ID} = require("../src/id.js")

const CRIAR_CORRETORA = (data = []) => {
    let corretora = {
        nome: "",
        cnpj: 0,
        id_corretora: GERAR_ID()
    }

    do{
        corretora.nome = prompt("Adicione o nome da corretora: ");

        if(corretora.nome != "") {
            corretora.cnpj = +prompt("Adicione seu cnpj: ");

            if(
                corretora.cnpj == "" ||
                isNaN(corretora.cnpj)
            ) {
                corretora.cnpj = "";
                corretora.nome = "";
                console.log("Formato inválido. Tente novamente.");

            } else {
                return corretora;
            }
        } else {
            corretora.nome = "";
            console.log("Corretora inválida.\nTente novamente.");

        }
    } while(!corretora.nome);
}

const LISTAR_CORRETORA = (data) => { 
    for(let i = 0; i < data.length; i++) {
        console.log(data[i][0]);

    }
}

module.exports = {
    CRIAR_CORRETORA,
    LISTAR_CORRETORA
}

