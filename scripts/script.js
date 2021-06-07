
function calcular(){
    let resultado = document.getElementById("resultado");
    let adultos = document.getElementById("adultos").value;
    let criancas = document.getElementById("criancas").value;
    let duracao = document.getElementById("duracao").value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;

    resultado.innerHTML = `<p>${qdtTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas/2000)} garrafas de 2l de Bebidas</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja/355)} latas de Cervejas</p>`

}

function carnePP(duracao){
    if (duracao >= 6){
        return 650;
    } else {
        return 400;
    }
}

function bebidasPP(duracao){
    if (duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}

function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}