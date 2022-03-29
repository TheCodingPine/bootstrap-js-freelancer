PARTE HTML
La consegna è di replicare il layout in allegato usando soltanto il framework Bootstrap.
- create il repo sul github (copiate correttamente il nome del repo, tutto in minuscolo!)
- clonatelo in VSCode
- partite dal solito template fornito da bootstrap nella documentazione iniziale
- create la struttura dell’HTML includendo tutte le risorse necessarie
- aggiungete la cartella delle immagini che trovate allegata (img.zip)
- individuate le macro-aree di layout e cominciate creando lo scheletro HTML della pagina (aiutatevi con i commenti <!-- --> e con i giusti tag HTML)
- implementate area per area aiutandovi con la documentazione: osservate bene se ci possono essere dei “Componets” già fatti che vi possono aiutare a raggiungere più velocemente il risultato e aiutatevi con le classi messe a disposizione da Bootstrap (margini, padding, colori, colori di sfondo, ...)
- I tipi di lavoro che posso commissionare sono: Backed Development, Frontend Development, Project Analisys
- Non è richiesto che il layout sia responsive per la parte normale dell’esercizio.
PARTE JAVASCRIPT
A questo punto una volta terminato il vostro layout, include un vostro file javascript chiamato main.js e fate in modo che quando l’utente fa click sul bottone “send” del form, il sito vi calcoli l’ammontare del vostro lavoro per le ore di lavoro richieste dall’utente. Il prezzo orario per una commissione varia in questo modo:
- Se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
- Se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
- Se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€
Se poi l’utente inserisce un codice promozionale tra i seguenti YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24, fate in modo che l’utente abbia diritto ad uno sconto del 25% sul prezzo finale. Se il codice inserito non è valido, informate l’utente che il codice è sbagliato e calcolate il prezzo finale senza applicare sconti. Mostrare il risultato del calcolo del prezzo finale in una “forma umana” in un apposito tag HTML appena sotto il bottone send.
- Ricordatevi che se non state bene attenti, Javascript vi fa le magie con i tipi :faccia_leggermente_sorridente:
- Ricordatevi che il form ha un comportamento “strano” quando fate click sul bottone Send che è di tipo submit (type=submit).
CONSIDERAZIONI FINALI e BONUS:
Una volta completata tutta la consegna, chi vuole può aggiungere il comportamento responsive come bonus, replicando i layout per tablet e smartphone che trovate nell’allegato bonus.zip.
Mentre come bonus javascript dovete far diventare il codice sconto inserito di colore rosso, qualora quello inserito non sia valido. Inoltre se il codice fornito è valido, eliminare quel codice dall’elenco dei codici sconto disponibili.
Il codice sconto inoltre non potrà più essere usato se reinserito. Attenzione che in questo caso bisogna usare le variabili globali che quindi possono essere dichiarate anche fuori dalle funzioni, e usate dentro la funzione: vedi sezione Global JavaScript Variables alla pagina https://www.w3schools.com/js/js_scope.asp