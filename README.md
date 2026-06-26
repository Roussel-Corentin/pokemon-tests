# Pokemon Tests

Projet de tests unitaires avec **Jest** autour d'un moteur de combat type Pokemon.

## Objectif du projet

Ce projet sert a developper et tester progressivement les fonctionnalites du moteur de combat.

Pour le moment, le travail porte sur :

- le calcul des PV restants apres une attaque ;
- le blocage des PV a 0 minimum ;
- la mise K.O. d'un combattant lorsque ses PV atteignent 0.

## Installation

Apres avoir clone le depot, installer les dependances :

```powershell
npm install
```

## Lancer les tests

Pour lancer tous les tests :

```powershell
npm test
```

Pour lancer les tests en mode watch :

```powershell
npm run test:watch
```

Pour generer un rapport de couverture :

```powershell
npm run test:cov
```

## Structure du projet

```text
pokemon-tests/
├── src/
│   └── pv-Ko.js
├── tests/
│   └── pv-ko.test.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Fonctionnalite actuelle

### US 1 - Application des multiplicateurs de type

- Super efficace : Multiplicateur x2 (ex: Eau contre Feu).
- Pas très efficace : Multiplicateur x0.5 (ex: Plante contre Vol).
- Immunité : Multiplicateur x0 (ex: Électrik contre Sol).

### US 2 - Calcul des PV restants et mise K.O.

Regles implementees :

- quand les degats sont inferieurs aux PV actuels, le combattant survit ;
- les PV restants sont calcules en soustrayant les degats aux PV actuels ;
- les PV ne peuvent jamais devenir negatifs ;
- si les PV atteignent 0, le statut du combattant passe a `K.O.` ;
- sinon, le statut reste `Actif`.

Exemple :

```js
const { appliquerDegats } = require("./src/pv-Ko");

const defenseur = {
  nom: "Pikachu",
  pv: 100,
  statut: "Actif",
};

const resultat = appliquerDegats(defenseur, 45);

console.log(resultat);
// { nom: "Pikachu", pv: 55, statut: "Actif" }
```

## Commandes Git utiles

Verifier les fichiers modifies :

```powershell
git status
```

Ajouter les changements :

```powershell
git add .
```

Creer un commit :

```powershell
git commit -m "docs: mise a jour du README"
```

Pousser la branche :

```powershell
git push origin PV_and_KO
```
