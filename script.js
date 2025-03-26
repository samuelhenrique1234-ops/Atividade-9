let carro = {
    modelo: "Toro",
    marca: "Fiat",
    ano: 2018,
    saudacao: function() {
        console.log("O modelo do carro é " + this.modelo)
    }
};

carro.saudacao();