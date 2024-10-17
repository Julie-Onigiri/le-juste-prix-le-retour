# Le juste prix
Projet réalisé pendant ma formation O'Clock
## Description
Le projet "Le retour du juste prix" consiste à modifier un programme de jeu pour le rendre plus fonctionnel. L'objectif est de regrouper la configuration du jeu, de créer des fonctions pour gérer le déroulement du jeu, de générer des nombres aléatoires et de relancer automatiquement les parties tout en stockant les scores.

## Objectifs
1. **Créer un objet de configuration** : Regrouper les paramètres du jeu, comme le nombre à deviner et le nombre d'essais, dans un objet nommé `game`.
2. **Faire une fonction pour jouer** : Regrouper les instructions du jeu dans une fonction `play` et l'exécuter une première fois.
3. **Faire une fonction pour le nombre aléatoire** : Déplacer la génération du nombre aléatoire dans une fonction qui accepte deux paramètres, `min` et `max`,
   pour définir la plage de recherche.
5. **Relancer la partie automatiquement** : Utiliser la récursivité en appelant la fonction `play` à la fin de chaque partie tout en générant un nouveau nombre aléatoire.
6. **Stocker le score** : Créer un tableau pour stocker les scores de chaque partie et les afficher à l'utilisateur à la fin de chaque partie.
