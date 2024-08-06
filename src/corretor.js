const { GERAR_ID } = require("./id");

const prompt = require("prompt-sync")();

const CRIAR_CORRETOR = (data = "") => {
    const corretor = {
        nome: "",
        id_corretora: data,
        id_corretor: GERAR_ID()
    };

    do{
        corretor.nome = prompt("Adicione o nome: ");

        if(
            corretor.nome == "" ||
            !isNaN(corretor.nome)
        ) {
            corretor.nome = "";
            console.log("Nome inválido.\nTente novamente.");
        } else {
            return corretor;

        }
    } while(!corretor.nome);
}

const LISTAR_CORRETOR = (data) => { 
    for(let i = 0; i < data.length; i++) {
        console.log(data[i][1]);

    }
}

module.exports = {
    CRIAR_CORRETOR,
    LISTAR_CORRETOR
}

