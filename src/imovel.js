const prompt = require("prompt-sync")();
const {GERAR_ID} = require("../src/id");

const CRIAR_IMOVEL = (data = "") => {
    const imovel = {
        numero: 0,
        rua: "",
        bairro: "",
        id_corretora: data,
        id_imovel: GERAR_ID()
    }

    do{
        imovel.numero = +prompt("Coloque o número do imóvel: ");
        imovel.numero = Math.floor(imovel.numero);

        if(
            imovel.numero == "" ||
            isNaN(imovel.numero)
        ) {
            imovel.numero = "";
            console.log("Formato inválido. Tente Novamente.");

        }
    } while(!imovel.numero);

    do{
        imovel.rua = prompt("Coloque a rua do imóvel: ");

        if(
            imovel.rua == "" ||
            !isNaN(imovel.rua)
        ) {
            imovel.rua = "";
            console.log("Formato inválido. Tente Novamente.");
            
        }

    } while(!imovel.rua);

    do{
        imovel.bairro = prompt("Coloque o bairro do imóvel: ");

        if(
            imovel.bairro == "" ||
            !isNaN(imovel.bairro)
        ) {
            imovel.bairro = "";
            console.log("Formato inválido. Tente Novamente.");
            
        } else {
            return imovel;
        }

    } while(!imovel.bairro);
}

const LISTAR_IMOVEL = (data) => { 
    for(let i = 0; i < data.length; i++) {
        console.log(data[i][2]);

    }
}

module.exports = {
    CRIAR_IMOVEL,
    LISTAR_IMOVEL
}