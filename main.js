/*- Se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
- Se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
- Se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€
Se poi l’utente inserisce un codice promozionale tra i seguenti
YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24,
fate in modo che l’utente abbia diritto ad uno sconto del 25% sul prezzo finale.
Se il codice inserito non è valido, informate l’utente che il codice è sbagliato e
calcolate il prezzo finale senza applicare sconti. Mostrare il risultato del calcolo
del prezzo finale in una “forma umana” in un apposito tag HTML appena sotto il bottone send.

------------------------------------------------------------------

to do: collegare send al print

to do: contare i soldi

let tariffa

if work is 1 then tariffa = 20.5
else if work is 2 then tariffa = 15.3
else if work is 3 then tariffa = 33.6
else alert ("Inserisci un tipo di lavoro")

let array dei codici
let codice = true

for loop in cerca del codice


if 


opzione 1: hours x

*/

let listaCodiciSconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
let isCodiceCorretto = false;



const richiestaPreventivo = document.getElementById("preventivatore");
richiestaPreventivo.addEventListener("click", elaboraPreventivo);

//funzioen richiamata dal tasto Submit------
function elaboraPreventivo() {
    console.log("Funziona il tasto");
    let valueDelLavoro = document.getElementById("tipoDiLavoro").value;
    console.log(valueDelLavoro);
}//-----------------------------------------




function tariffaOrariaScelta() {
     
}





let tempoPreventivato = Number(document.getElementById("tempoPreventivato"));
console.log(tempoPreventivato);

