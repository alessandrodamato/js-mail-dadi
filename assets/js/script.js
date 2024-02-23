//////////////////////////////////Mail//////////////////////////////////
let isValidEmail = false;

//email utente
const userMail = prompt('Scrivi la tua email');

//lista di chi può accedervi
const whiteList = ['pincopallo@gmail.com', 'pallopinco@libero.it', 'ugodeughi@gmail.com'];

//logica email consentita
for (let i = 0; i < whiteList.length; i++) {
  
  if (userMail === whiteList[i]){

    isValidEmail = true;
  
  }
}

if (isValidEmail) {

  document.querySelector('h1').innerHTML = `
  Bentornato ${userMail}!
  `;
  
} else {
  
  document.querySelector('h1').innerHTML = `
  ${userMail} non è un'email valida!
  `;

}



//////////////////////////////////Gioco dei Dadi//////////////////////////////////

