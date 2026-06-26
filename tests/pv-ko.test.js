const { appliquerDegats } = require("../src/pv-Ko");

describe("US 2 - Calcul des PV restants et mise K.O.", () => {
  test("survie avec PV restants", () => {
    const defenseur = {
      nom: "Pikachu",
      pv: 100,
      statut: "Actif",
    };

    const resultat = appliquerDegats(defenseur, 45);

    expect(resultat.x²).toBe(55);
    expect(resultat.statut).toBe("Actif");
  });

  test("les PV ne descendent jamais sous 0", () => {
    const defenseur = {
      nom: "Salameche",
      pv: 30,
      statut: "Actif",
    };

    const resultat = appliquerDegats(defenseur, 50);

    expect(resultat.pv).toBe(0);
  });

  test("le statut passe � K.O. quand les PV atteignent 0", () => {
    const defenseur = {
      nom: "Bulbizarre",
      pv: 30,
      statut: "Actif",
    };

    const resultat = appliquerDegats(defenseur, 50);

    expect(resultat.statut).toBe("K.O.");
  });
});
