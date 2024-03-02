function checkBL() {
  const users = [
    { name: "Panda777", id: "17240", reason: "toxicité, dirigisme extrême" },
    { name: "VariationSauvage", id: "15930", reason: "semeuse de zizanie" },
    {
      name: "Vince",
      id: "17564",
      reason:
        'joue trop solo, a réparé le Réacteur, dévoré par Molotov pour "avoir posé une question" dans les Abîmes réactionnaires des Pensées Futiles',
    },
    {
      name: "Roubaisien_nerveux",
      id: "15503",
      reason:
        "laisse volontairement des cadeaux empoisonnés derrière lui, a tué Nibel par empoisonnement dans les Abîmes réactionnaires des Pensées Futiles",
    },
    {
      name: "PAPA_POULE",
      id: "235",
      reason:
        "agressif, mauvais perdant, a dévoré Nibel dans la Frontière livide",
    },
    {
      name: "Elya_Edhellen",
      id: "17896",
      reason: "joue trop perso, vol d'objets, Taudis J2",
    },
    {
      name: "Shadker",
      id: "17736",
      reason:
        'joue trop perso, vol d\'objets, amélioration "Maison" et tentative de "Maison clôturée" J5',
    },
    {
      name: "Laura",
      id: "17730",
      reason:
        'joue trop perso, vol d\'objets, amélioration "Maison" et tentative de "Maison clôturée" J5',
    },
  ];

  const userNamesElements = document.getElementsByClassName("username");
  const userNames = Array.prototype.map.call(userNamesElements, (element) => ({
    name: element.textContent,
    id: element.getAttribute("x-user-id"),
  }));

  const usersInUserNames = users.filter((user) =>
    userNames.some((userName) => userName.id.toString() === user.id.toString())
  );

  if (usersInUserNames.length > 0) {
    alert(
      `Attention, des joueurs indésirables ont été détectés dans la partie. \n${usersInUserNames
        .map((u) => `${u.name}: ${u.reason}`)
        .join("\n")}.`
    );
  } else {
    alert("Aucun joueur indésirable détecté dans la partie.");
  }

  return usersInUserNames;
}