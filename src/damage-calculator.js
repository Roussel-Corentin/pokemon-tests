const typeChart = {
    'Eau': {
      'Eau': 0.5, 'Plante': 0.5, 'Feu': 2, 'Électrik': 1, 'Sol': 2, 'Normal': 1, 'Roche': 2
    },
    'Plante': {
      'Eau': 2, 'Plante': 0.5, 'Feu': 0.5, 'Électrik': 1, 'Sol': 2, 'Normal': 1, 'Roche': 2
    },
    'Feu': {
      'Eau': 0.5, 'Plante': 2, 'Feu': 0.5, 'Électrik': 1, 'Sol': 1, 'Normal': 1, 'Roche': 0.5
    },
    'Électrik': {
      'Eau': 2, 'Plante': 0.5, 'Feu': 1, 'Électrik': 0.5, 'Sol': 0, 'Normal': 1, 'Roche': 1
    },
    'Sol': {
      'Eau': 1, 'Plante': 0.5, 'Feu': 2, 'Électrik': 2, 'Sol': 1, 'Normal': 1, 'Roche': 2
    },
    'Normal': {
      'Eau': 1, 'Plante': 1, 'Feu': 1, 'Électrik': 1, 'Sol': 1, 'Normal': 1, 'Roche': 0.5
    },
    'Roche': {
      'Eau': 1, 'Plante': 1, 'Feu': 2, 'Électrik': 1, 'Sol': 0.5, 'Normal': 1, 'Roche': 1
    }
  };

function calculateDamage(attack, defender) {

    let multiplier = 1; 
    if (typeChart[attack.type] && typeChart[attack.type][defender.type] !== undefined) {
      multiplier = typeChart[attack.type][defender.type];
    }
  
    const finalDamage = attack.baseDamage * multiplier;
  
    let message;
    if (multiplier === 0) {
      message = "Cela n'a aucun effet";
    }
  
    return {
      damage: finalDamage,
      message: message
    };
  }
  
  module.exports = { calculateDamage };