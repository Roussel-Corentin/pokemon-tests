const { calculateDamage } = require('../src/damage-calculator')

describe('US 1 - Multiplicateurs de type', () => {

  test('Faiblesse (x2) - Attaque Eau (40) vs Défenseur Feu', () => {
    const attack = { type: 'Eau', baseDamage: 40 };
    const defender = { type: 'Feu' };

    const result = calculateDamage(attack, defender);

    expect(result.damage).toBe(80);
  });

  test('Résistance (x0.5) - Attaque Plante (40) vs Défenseur Feu', () => {
    const attack = { type: 'Plante', baseDamage: 40 };
    const defender = { type: 'Feu' };

    const result = calculateDamage(attack, defender);

    expect(result.damage).toBe(20);
  });

  test('Immunité (x0) - Attaque Électrik (40) vs Défenseur Sol', () => {
    const attack = { type: 'Électrik', baseDamage: 40 };
    const defender = { type: 'Sol' };

    const result = calculateDamage(attack, defender);

    expect(result.damage).toBe(0);
    expect(result.message).toBe("Cela n'a aucun effet");
  });

});