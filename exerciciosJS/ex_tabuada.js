//Criando estrutura simples para tabuada
const tab = 2;
const nMax = 10;

escrevendoTabuada();

function escrevendoTabuada(){
    let calc = 0;
    for(let i = 0;i<=nMax;i++){
        calc = tab*i;
       console.log(`${tab} vezes ${i} é igual à ${calc}`);
    }

}



