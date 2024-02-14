/*// Le nombre max
const MAX_NUMBER = 500; 

// Le nombre cherché
const searchedNumber =Math.round(Math.random() * MAX_NUMBER) ;

// Le nombre saisi
let enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));

// Le nombre d'essais
let attempts = 1;

// Tant que le nombre saisi n'est pas bon on redemande un nombre
while (enteredNumber !== searchedNumber) {
    // on vérifie que l'utilisateur a répondu, sinon on sort de la boucle
    if(!enteredNumber){
        break;
    }
    // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
    if (enteredNumber < searchedNumber) {
        enteredNumber = parseInt(prompt('C\'est plus'));
    }
    else {
        enteredNumber = parseInt(prompt('C\'est moins'));
    }
    // on incrémente le nombre d'essais
    attempts += 1;
}

// on est sorti de la boucle, c'est soit que le nombre saisi est bien le nombre cherché
// soit que le joueur n'a pas répondu et que enteredNumber est 'falsy'
if(enteredNumber){
    // on affiche un message de victoire
    alert('Bravo ! C\'était bien ' + searchedNumber + ' - Nombre d\'essais : ' + attempts);
} else {
    // on affiche un message d'abandon
    alert('Vous abandonnez ? Dommage...');
}*/

const MAX_NUMBER =20; 
const MIN_NUMBER =10
const fourchette=(MAX_NUMBER,MIN_NUMBER)
/*const searchedNumber=Math.round(Math.random() * fourchette);*/

function generateRandomNumber(){
    return Math.round(Math.random() * fourchette)
}


/*const searchedNumber=generateRandomNumber()
let attempts=1;
const game={
searchedNumber,
attempts
}
console.log(game)*/



function play(){
   const searchedNumber=generateRandomNumber()
   console.log(searchedNumber) ;
    let attempts=1;
    let enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));
    
        
while (enteredNumber !== searchedNumber) {
        // on vérifie que l'utilisateur a répondu, sinon on sort de la boucle
        if(!enteredNumber){
            break;
        }
        // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
        if (enteredNumber < searchedNumber) {
            enteredNumber = parseInt(prompt('C\'est plus'));
        }
        else {
            enteredNumber = parseInt(prompt('C\'est moins'));
        }
        // on incrémente le nombre d'essais
        attempts += 1;
        
    }
 
    // on est sorti de la boucle, c'est soit que le nombre saisi est bien le nombre cherché
    // soit que le joueur n'a pas répondu et que enteredNumber est 'falsy'
    if(enteredNumber){
        // on affiche un message de victoire
        alert('Bravo ! C\'était bien ' + searchedNumber + ' - Nombre d\'essais : ' + attempts);
    } else {
        // on affiche un message d'abandon
        alert('Vous abandonnez ? Dommage...');
    }
    
 


}
  play()