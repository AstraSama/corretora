const CRIAR_VENDA = (imovel = "", cliente = "", corretor = "") => {
    const venda = {
        id_imovel: imovel,
        id_cliente: cliente,
        id_corretor: corretor
    }

    return venda;
}

const LISTAR_VENDA = (data) => { 
    for(let i = 0; i < data.length; i++) {
        console.log(data[i][4]);

    }
}


module.exports = {
    CRIAR_VENDA,
    LISTAR_VENDA
}