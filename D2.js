/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1Esercize1 = 10;
const num2Esercize1 = 15;

console.log(
  "esercizio 1 :",
  num1Esercize1 > num2Esercize1 ? "il primo valore è più grande" : "il secondo valore è più grande"
);

// --------------------------------------------------------------------

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1Esercize2 = -5;
console.log("esercizio 2 :", 5 === num1Esercize2 ? "it's equals" : "not equals");

// -------------------------------------------------------------------------------

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1Esercize3 = 7;
result1Esercize3 = num1Esercize3 % 5;
console.log("esercizio 3 : ", result1Esercize3 === 0 ? "è divisibile per 5" : "non è divisibile per 5");

//-------------------------------------------------------------------------------

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1Esercize4 = 3;
const num2Esercize4 = 4;

console.log(
  "esercizio 4 : ",
  num1Esercize4 - num2Esercize4 === 8 ||
    num1Esercize4 + num2Esercize4 === 8 ||
    num1Esercize4 === 8 ||
    num2Esercize4 === 8
    ? "posso ottenere 8 in qualche modo"
    : "non posso ottenere 8 in nessun modo"
);

// ------------------------------------------------------------------

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 10;

if (totalShoppingCart > 50) {
  console.log("esercizio 5 : la spedizione è gratutita il totale è", totalShoppingCart);
} else {
  console.log("esercizio 5 : addebitati 10€ di spedizione il totale è", totalShoppingCart + 10);
}

//----------------------------------------------------------------

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

totalShoppingCart = 10;

if (totalShoppingCart > 50) {
  console.log("esercizio 6 : bonus black friday , la spedizione è gratutita, il totale è", (totalShoppingCart / 5) * 4);
} else {
  console.log("esercizio 6 : addebitati 10€ di spedizione il totale è", (totalShoppingCart / 5) * 4 + 10);
}

//-----------------------------------------------------------------------------

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1_E7 = 71;
const num2_E7 = 4;
const num3_E7 = 12;

if (num1_E7 > num2_E7 && num2_E7 > num3_E7) {
  console.log("esercizio 7 : l'ordine è ", num1_E7, num2_E7, num3_E7);
} else if (num1_E7 > num3_E7 && num3_E7 > num2_E7) {
  console.log("esercizio 7 : l'ordine è ", num1_E7, num3_E7, num2_E7);
} else if (num2_E7 > num3_E7 && num3_E7 > num1_E7) {
  console.log("esercizio 7 : l'ordine è ", num2_E7, num3_E7, num1_E7);
} else if (num2_E7 > num1_E7 && num2_E7 > num3_E7) {
  console.log("esercizio 7 : l'ordine è ", num2_E7, num1_E7, num3_E7);
} else if (num3_E7 > num1_E7 && num1_E7 > num2_E7) {
  console.log("esercizio 7 : l'ordine è ", num3_E7, num1_E7, num2_E7);
} else {
  console.log("esercizio 7 : l'ordine è ", num3_E7, num2_E7, num1_E7);
}

//------------------------------------------------------------

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num2Esercize8 = 8;
const STR1Esercize8 = "Franco l'idraulico";

console.log(
  typeof num2Esercize8 === "number"
    ? "esercizio 8 : il dato fornito è un numero"
    : "esercizio 8 : il dato fornito non è un numero"
);

//---------------------------------------------------

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1Esercize9 = 40;
console.log(num1Esercize9 % 2 === 0 ? "esercizio 9 : il numero è pari" : "esercizio 9 : il numero è dispari");

//-------------------------------------------

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 3;
if (val < 10 && val >= 5) {
  console.log("esercizio 10 : Meno di 10");
} else if (val < 5) {
  console.log("esercizio 10 : Meno di 5");
} else {
  console.log("esercizio 10 : Uguale a 10 o maggiore");
}

//---------------------------------------------------------------------------
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";
console.log("esercizio 11 : ", me);

//-----------------------------------------------------------------------------
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log("esercizio 12 : ", me);

//---------------------------------------------------------

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();
console.log("esercizio 13 : ", me);

//---------------------------------------------------------------------

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const exercize14 = [];

// exercize14.push(0);
// exercize14.push(1);
// exercize14.push(2);
// exercize14.push(3);
// exercize14.push(4);
// exercize14.push(5);
// exercize14.push(6);
// exercize14.push(7);
// exercize14.push(8);
// exercize14.push(9);
// exercize14.push(10);

exercize14.unshift(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log("esercizio 14 :", exercize14);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//console.log(exercize14.lenght)
exercize14[10] = 100;
console.log("esercizio 15", exercize14);
