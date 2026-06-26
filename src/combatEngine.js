class Creature {
  constructor(nom, niveau) {
    this.nom = nom;
    this.niveau = niveau;
  }
}

class Dresseur {
  constructor(nom, nombreBadges) {
    this.nom = nom;
    this.nombreBadges = nombreBadges;
  }

  // Règle métier : Calcule le niveau maximum d'obéissance selon les badges
  obtenirPalierObeissance() {
    // Exemple de règle : 0 badge = niv 10, 1 badge = niv 20, 2 badges = niv 30, etc.
    if (this.nombreBadges === 0) return 10;
    return this.nombreBadges * 10 + 10;
  }
}

class MoteurDeCombat {
  // Méthode qui détermine si l'ordre d'attaque est validé ou non
  verifierOrdre(dresseur, creature) {
    const palierMax = dresseur.obtenirPalierObeissance();

    // Cas 1 : La créature a un niveau inférieur ou égal au palier autorisé -> Obéissance automatique
    if (creature.niveau <= palierMax) {
      return { 
        actionValidee: true, 
        message: "La créature obéit." 
      };
    }

    // Cas 2 : Le niveau dépasse le palier -> Calcul probabiliste (50% de chance de désobéir)
    const jet = Math.random();
    if (jet >= 0.5) {
      return { 
        actionValidee: false, 
        message: "La créature n'en fait qu'à sa tête !" 
      };
    }

    return { 
      actionValidee: true, 
      message: "La créature obéit malgré tout." 
    };
  }
}

// On exporte les classes pour pouvoir les utiliser dans le fichier de test
module.exports = { Creature, Dresseur, MoteurDeCombat };