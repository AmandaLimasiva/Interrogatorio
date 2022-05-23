//Sistema de investigação

//Perguntas

function interrogatorio(){
    let quantSim = 0;

    let telefonou = prompt("Telefonou para a vitíma? ");
    let local = prompt("Esteve no local do crime? ");
    let moradia = prompt("Mora perto da vitíma? ");
    let divida = prompt("Devia para a vitíma? ");
    let trabalho = prompt("Já trabalhou com a vitíma? ");

    if(telefonou === "Sim"){
        quantSim += 1;
    }

    if(local === "Sim"){
        quantSim += 1;
    }

    if(moradia === "Sim"){
        quantSim += 1;
    }

    if(divida === "Sim"){
        quantSim += 1;
    }

    if(trabalho === "Sim"){
        quantSim += 1;
    }

    return quantSim;

}


function resultadoInterrogado(quantSim){  
    if( quantSim === 5){
        //Assassino
        console.log("É o assassino")
    }else if( quantSim === 3 || quantSim === 4){
         //Cúmplice
        console.log("É Cúmplice")
    }else if(quantSim === 2 ){
         //Suspeito
        console.log("É Suspeito")
    }else{
        //Inocente
        console.log("É Inocente")
    }
}

resultadoInterrogado(interrogatorio());