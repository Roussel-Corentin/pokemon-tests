const { Creature, Dresseur, MoteurDeCombat } = require('../src/combatEngine');

describe("US 3 : Obéissance des créatures selon les badges et le niveau", () => {
  let moteur;

  beforeEach(() => {
    moteur = new MoteurDeCombat();
  });

  afterEach(() => {
    // Restaure le comportement natif de Math.random après chaque test
    jest.spyOn(Math, 'random').mockRestore();
  });

  test("TEST-US3-01 : Obéissance nominale (Niveau inférieur au palier)", () => {
    // Étant donné : Un dresseur avec 2 badges (palier niveau 30) et un Pokémon niveau 25
    const dresseur = new Dresseur("Sacha", 2); 
    const pokemon = new Creature("Pikachu", 25);

    // Quand : Le dresseur donne un ordre de combat
    const resultat = moteur.verifierOrdre(dresseur, pokemon);

    // Alors : La créature obéit systématiquement
    expect(resultat.actionValidee).toBe(true);
    expect(resultat.message).toBe("La créature obéit.");
  });

  test("TEST-US3-02 : Désobéissance (Niveau supérieur au palier et échec du jet)", () => {
    // Étant donné : Un dresseur avec 2 badges (palier niveau 30) et un Pokémon niveau 35
    const dresseur = new Dresseur("Sacha", 2);
    const pokemon = new Creature("Dracaufeu", 35);

    // On force Math.random() à retourner 0.8 (simule un échec du jet d'obéissance)
    jest.spyOn(Math, 'random').mockReturnValue(0.8);

    // Quand : Le dresseur donne un ordre de combat
    const resultat = moteur.verifierOrdre(dresseur, pokemon);

    // Alors : L'action est refusée et le message de désobéissance est généré
    expect(resultat.actionValidee).toBe(false);
    expect(resultat.message).toBe("La créature n'en fait qu'à sa tête !");
  });

  test("TEST-US3-03 : Cas limite (Niveau parfaitement égal au palier)", () => {
    // Étant donné : Limite badge à 30 (2 badges) et Pokémon pile au niveau 30
    const dresseur = new Dresseur("Sacha", 2);
    const pokemon = new Creature("Tortank", 30);

    // Quand : Le dresseur donne un ordre de combat
    const resultat = moteur.verifierOrdre(dresseur, pokemon);

    // Alors : La créature doit obéir (la borne est incluse)
    expect(resultat.actionValidee).toBe(true);
    expect(resultat.message).toBe("La créature obéit.");
  });
});