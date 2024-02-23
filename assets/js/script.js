//////////////////////////////////Validazione Email//////////////////////////////////
let isValidEmail = false;
const estrattore = document.getElementById('estrattore');

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
  
  //stampo email valida
  document.querySelector('h1').innerHTML = `
  Bentornato ${userMail}!
  `;
  
//////////////////////////////////Gioco dei Dadi (solo se la mail è valida)//////////////////////////////////

  //solo se l'email è valida si può giocare al gioco dei dadi
  
  //funzione da cui parte il randomizzatore
  estrattore.addEventListener('click', function(){
      
    //randomizzatore dei dadi
    const dadiPlayer = Math.ceil(Math.random() * 6);
    const dadiCPU = Math.ceil(Math.random() * 6);

    console.log('Player:', dadiPlayer, ' CPU:', dadiCPU);

    document.querySelector('h3').innerHTML = `
    Player: ${dadiPlayer} | CPU: ${dadiCPU}
    `;

    //logica vincitore
    if (dadiPlayer > dadiCPU) {

      console.log('Vince il Giocatore');
      document.querySelector('h2').innerHTML = `
      Vince il Giocatore
      `;

    } else if (dadiPlayer < dadiCPU) {

      console.log('Vince la CPU');
      document.querySelector('h2').innerHTML = `
      Vince la CPU
      `;

    } else {

      console.log('Nessuno vince');
      document.querySelector('h2').innerHTML = `
      Nessuno vince
      `;
      
    }

  })

//////////////////////////////////Gioco dei Dadi (solo se la mail è valida)//////////////////////////////////
    
} else {
  
  //alert email non valida
  document.querySelector('h1').innerHTML = `
  ${userMail} non è un'email valida!
  `;

  estrattore.style = 'display: none;'

}