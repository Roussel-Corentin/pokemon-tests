function appliquerDegats(defenseur, degats) {
  const pvRestants = Math.max(defenseur.pv - degats, 0);

  return {
    ...defenseur,
    pv: pvRestants,
    statut: pvRestants === 0 ? "K.O." : "Actif",
  };
}

module.exports = { appliquerDegats };
