 
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
function exercicioCinco(){
    const camp = document.querySelector("#texto");
    const botao = document.querySelector("#btnContar");

    botao.addEventListener("click",()=>{
        const texto = camp.value;
        alert(`Há ${texto.length} caracteres`);
    })

}
function exercicioSeis(){
    const lampada = document.querySelector("#lampada");
    const botao = document.querySelector("#btn_liga_desliga");
    botao.addEventListener("click",function (){
        const imgLampada =  lampada.name;
        if(imgLampada=="on"){
            lampada.setAttribute("name","off");
            lampada.setAttribute("src","imgs/lamp-off.png");
        } else {
            lampada.setAttribute("name","on");
            lampada.setAttribute("src","imgs/lamp-on.png");
        }
    })
}
function exercicioSete(){
    const lampada = document.querySelector("#lampada");
    const lamp = lampada;
    
    lampada.addEventListener("mouseover",function(evento){
        evento.target.setAttribute("src","imgs/lamp-on.png");
    })
    lampada.addEventListener("mouseout",function(evento){
        evento.target.setAttribute("src","imgs/lamp-off.png");
    })
}
function exercicioSeteA(){
    const botaoExibir = document.querySelector("#btnExibir");
    const botaoLimpar = document.querySelector("#btnLimpar");
    const campoNome = document.querySelector("#nome");
    const campoSobreNome = document.querySelector("#sobreNome");
    const elementoSaidaNome = document.querySelector("#nome-completo");

    botaoExibir.addEventListener("click",function(){
        alert(`Olá ${campoNome.value} ${campoSobreNome.value}!`);
        elementoSaidaNome.innerHTML = `Olá ${campoNome.value} ${campoSobreNome.value}!`;
    });
    botaoLimpar.addEventListener("click",()=>{
        campoNome.value="";
        campoSobreNome.value="";
        elementoSaidaNome.innerHTML="";
    })
}