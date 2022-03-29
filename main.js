let listaCodiciSconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
let isCodiceCorretto = false;


const richiestaPreventivo = document.getElementById("preventivatore");
richiestaPreventivo.addEventListener("click", elaboraPreventivo);

//funzione richiamata dal tasto Submit------
function elaboraPreventivo() {
    //funzione che trova il value del Lavoro richiesto in Type of work: estraiValueLavoro();
    //estrarre le ore preventivate
    let tariffatore = estraiValueLavoro();
    let moltiplicatore = calcolaTariffa(tariffatore); // calcola la tariffa in base al valore di TYpe of Work
    //contare ore per tariffa oraria
    let oreLavoro = estraiOreLavoro();
    //fare il calcolo della tariffa
    let spesaDelCliente = eseguiPreventivo(oreLavoro, moltiplicatore);
    console.log(spesaDelCliente);

    let codiceScontoInserito = document.getElementById("codiceSconto").value;
    console.log(codiceScontoInserito);
    convalidaCodici(codiceScontoInserito);

    if (isCodiceCorretto == true) {
        spesaDelCliente = (spesaDelCliente * 0.75);
    }else{
        alert("Il codice inserito non è valido");
    }

    document.getElementById("output").innerHTML = spesaDelCliente.toFixed(2);
}
//-----------------------------------------

function convalidaCodici(scontoInserito) {
    for (let i=0; i < listaCodiciSconto.length; i++) {
        if (listaCodiciSconto[i] == scontoInserito) {
            isCodiceCorretto=true;
            break; //uscita anticipata dal loop
        }
    }
}


function estraiValueLavoro() {
    let valueDelLavoro = parseInt(document.getElementById("tipoDiLavoro").value);
    console.log(valueDelLavoro);
    console.log(typeof "valueDelLavoro");
    valueDelLavoro = parseInt(valueDelLavoro);
    console.log(typeof "valueDelLavoro");
    return valueDelLavoro;

}


function estraiOreLavoro() {
    let tempoPreventivato = document.getElementById("tempoPreventivato").value;
    tempoPreventivato = parseInt(tempoPreventivato);
    console.log(tempoPreventivato);
    return tempoPreventivato;
}


function calcolaTariffa (workValue) {
    let tariffaOraria = 3;
    let input = parseInt(workValue);
    if (input == "1") {
        tariffaOraria = 20.5;
    }else if (input == "2") {
        tariffaOraria = 15.3;
    }else{
        tariffaOraria = 33.6;
    }
    console.log(tariffaOraria);
    return tariffaOraria;
}


function eseguiPreventivo(tempo, tariffa) {
    let preventivo = tempo * tariffa;
    return preventivo;
}