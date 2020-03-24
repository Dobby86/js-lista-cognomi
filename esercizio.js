// console.log("ciao");
//lista cognomi, ordinamento e posizione cognome inserito
//DESCRIZIONE:
//Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
//Scrivi anche la posizione della lista in cui il nuovo utente si trova

// chiedere cognome utente
var cognomeUtente = prompt("inserisca il suo cognome");
//
// console.log("grazie e benvenuti");

//inserirlo in una erray con altri cognomi + cognomeUtente
var listaCognomi = ["castro", "basso","astotele" , "giletti", "zontana"];
//aggiunta del cognome utente
listaCognomi.push(cognomeUtente);

console.log(listaCognomi);

//variabili aggiuntivi
var itemN , vecchioContenuto ,ordine ,ultimaLista ;


//stampare lista di cognomi in ordine alfabetico con  la posizione del nuovo utente

for (var i = 0 ; i < listaCognomi.length ; i++) {
    itemN = listaCognomi[i];

    console.log(itemN);
    //diamo un ordine alla lista
    listaCognomi.sort();
    
    vecchioContenuto = document.getElementById('nomignoli').innerHTML;
    // console.log("iterazione numero : " + 1 + vecchioContenuto);
    document.getElementById('nomignoli').innerHTML = vecchioContenuto + "<li>" + itemN + "</li>";
}
