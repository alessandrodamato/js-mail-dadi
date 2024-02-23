//Mail

//email utente
const userMail = prompt('Scrivi la tua email');

//lista di chi può accedervi
const whiteList = ['pincopallo@gmail.com', 'pallopinco@libero.it', 'ugodeughi@gmail.com'];

//logica email consentita
for (let i = 0; i < whiteList.length; i++) {

  console.log(whiteList[i]);
  
  if (userMail !== whiteList[i]){
  
    console.log('Email ' + userMail + ' errata - Vietato l\'accesso');
    
  } else {
    
    console.log('Bentornato ' + userMail + '!');
  
  }
}
