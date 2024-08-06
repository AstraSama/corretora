const prompt = require("prompt-sync")();
const {GERAR_ID} = require("../src/id");

const CRIAR_CLIENTE = () => {
    const cliente = {
        nome: "",
        id_cliente: GERAR_ID()
    }

    do{
        cliente.nome = prompt("Adicione o nome do cliente: ");

        if(
            cliente.nome == "" ||
            !isNaN(cliente.nome)
        ) {
            cliente.nome = "";
            console.log("Formato inválido. Tente novamente.");

        } else {
            return cliente;
        }

    } while(!cliente.nome)
}

const LISTAR_CLIENTE = (data) => { 
    for(let i = 0; i < data.length; i++) {
        console.log(data[i][3]);

    }
}


module.exports = {
    CRIAR_CLIENTE,
    LISTAR_CLIENTE
}