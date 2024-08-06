const prompt = require("prompt-sync")();
const crud_fun = require("../Model/crud.js");

let lista = [];
let saida = 0;

do{
    console.log("1 - Criar\n2 - Listar\n3 - Atualizar\n4 - Deletar\n5 - sair.");
    let resposta = parseInt(prompt("Escolha qual opção quer realizar: "))
    
    switch (resposta) {
        case 1:
            lista.push(crud_fun.CRIAR_PROCESSO());
            
            resposta = "";
            
        break;
            
        case 2:
            crud_fun.LISTAR_PROCESSO(lista);
            
            resposta = "";
            
        break;
            
        case 3:
            crud_fun.ATUALIZAR_PROCESSO(lista);
                
            resposta = "";

        break;
        
        case 4:
            crud_fun.DELETAR_PROCESSO(lista);
            
            resposta = "";

        break;

        case 5:
            saida = 1;

        break;

        default:
            console.log("Escreva uma opção válida.");
            resposta = "";

    }
} while(!saida);