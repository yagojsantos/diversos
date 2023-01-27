 
function exercicioDois(){
    return document.alert("Olá Mundo");
}

function exercicioTres(){
    let result = 2+2;
    return alert(`O resultado de 2 + 2 é: ${result}`);
}

function exercicioQuatro(){
    const campo = document.querySelector("#nomeCompleto");
    const botao = document.querySelector("#btnExibirNome");

    botao.addEventListener("click",function(){
        const nome = campo.value;   
        return alert(`O Nome Completo é: ${nome}`);
    
    })
}