// Le nombre max
const MAX_NUMBER = 500;

const randomNumber = function (min = 10, max = 20) {
  /* let generate = Math.round(Math.random() * MAX_NUMBER); //* génère un nombre
  return generate; //* retourne ce nombre */
  //* entre 10 et 20
  const randomBase = Math.random();
  //* génère entre 0 et 1
  const randomNumber = randomBase * (max - min) + min;
  //* (0.149 * (20-10)) + min
  //* max - min = 20 - 10 = 10
  //* 0*10 = 0 + min = 10
  //* 1*10 = 10 + min = 20
  //* ex de generation: au minimum 10, 12.56, 15.55... au maximum 20
  const roundedRandomNumber = Math.round(randomNumber);
  return roundedRandomNumber;
};

//* sert à configurer notre jeu
const game = {
  score: [],
  randomNumber: function (salutation) {
    console.log(salutation + 'je suis une méthode');
  },
};

//* game.randomNumber('Bonjour, ');

//* je mets toute la logique de mon jeu dans une fonction
function play() {
  //* je veux générer un nouveau nombre aléatoire à chaque lancement de play()
  //* donc je veux modifier la propriété de game, searchedNumber pour qu'elle est comme valeur
  //* un nouveau nombre aléatoire
  //! Pour réinitialiser l'objet game à chaque partie
  game.searchedNumber = randomNumber(10, 20);
  game.attempts = 1;
  console.log(game.searchedNumber);
  //! -----------------------------------------
  // Le nombre saisi
  let enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));

  // Tant que le nombre saisi n'est pas bon on redemande un nombre
  while (enteredNumber !== game.searchedNumber) {
    // on vérifie que l'utilisateur a répondu, sinon on sort de la boucle
    if (!enteredNumber) {
      break;
    }
    // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
    if (enteredNumber < game.searchedNumber) {
      enteredNumber = parseInt(prompt("C'est plus"));
    } else {
      enteredNumber = parseInt(prompt("C'est moins"));
    }
    // on incrémente le nombre d'essais
    game.attempts += 1;
  }

  // on est sorti de la boucle, c'est soit que le nombre saisi est bien le nombre cherché
  // soit que le joueur n'a pas répondu et que enteredNumber est 'falsy'
  if (enteredNumber) {
    // on affiche un message de victoire
    alert(
      "Bravo !  " +
        game.searchedNumber +
        " - Nombre d'essais : " +
        game.attempts
    );
    game.score.push(game.attempts);
  } else {
    // on affiche un message d'abandon
    alert('Vous abandonnez ? Dommage...');
  }

  const replay = confirm('Voulez-vous rejouer ?');
  //* confirm() renverra soit true soit false
  //* Si ok, reinitialise game attempts et rejoue
  //* sinon affiche le message de score finale

  if (replay) {
    //! On peut réinitialiser l'objet game ici également
    //* game.searchedNumber = randomNumber(10, 20);
    //* game.attempts = 1;
    play();
  } else {
    //* Pour chaque score, genere une popup qui affiche la partie et son score
    /* for (let index = 0; index < game.score.length; index++) {
      console.log(index);
      alert(`Partie ${index + 1} : ${game.score[index]} essais`);
    } */
    //* cette variable va contenir l'ensemble des messages de chaque partie
    let message = 'Voici le résumé de vos parties: \n';
    for (let index = 0; index < game.score.length; index++) {
      //* message = "partie 1 : bla"
      //* message = "partie 1 : bla  partie 2 : bla"
      //* ect..
      message =
        message + `Partie ${index + 1} : ${game.score[index]} essais \n`;
      //   message += `Partie ${index + 1} : ${game.score[index]} essais`
    }
    /* const resultText = document.getElementById('result');
    resultText.textContent = message; */
    // alert(message);
    renderHtml(message);
  }
}

//* au lancement de la page, execute le jeu
play();

function renderHtml(paramMessage) {
  //? EXO
  //* creer un element div
  const divElement = document.createElement('div');
  //* la div a un id = a "result"
  divElement.id = 'result';
  //* la div va contenir en text: la variable message
  divElement.textContent = paramMessage;
  //* insérer la div dans le body html
  const bodyElement = document.body;

  //? EXO 2
  //* Ajouter un titre h1 dans le body
  //* le titre est une class "title"
  const h1Element = document.createElement('h1');
  h1Element.classList.add('title');
  h1Element.textContent = 'La jeu de la fourchette';

  //* ajoute d'abord le titre
  bodyElement.appendChild(h1Element);
  //* puis ajoute la div
  bodyElement.appendChild(divElement);

  //? EXO
  //* recuperer dans une variable l'élément header par son id
  //* avec cet element header, recuperer dans une variable le titre h2
  //* changer le texte du titre h2
  const headerElement = document.getElementById('header');
  const h2Element = headerElement.querySelector('h2');
  h2Element.textContent = ' Super ce jeu';
}
