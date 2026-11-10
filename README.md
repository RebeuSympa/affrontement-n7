# L'Affrontement

Course à l'Elo entre les listes **Chau7** (102 membres) et **7xAppeal** (94 membres) sur FC 27 (mode Rush), dans le cadre d'un qualifier Red Bull Wings Cup géré sur Atlas.

**Visuel télé (public) :** https://rebeusympa.github.io/affrontement-n7/ (plein écran 16:9, se recharge tout seul toutes les 5 minutes)

**Simulation (matchs inventés) :** https://rebeusympa.github.io/affrontement-n7/simulation.html

**Page en direct (claude.ai) :** https://claude.ai/artifact/9BuwUD2CrdEbpEUAPxgQGK (reçoit les matchs importés depuis Atlas ; visible une fois partagée, en étant connecté à claude.ai)

## Règles de calcul

- Les deux listes partent à **1500**.
- Chaque joueur a son propre Elo (départ 1500, K = 32, pas de match nul en mode Rush). Après chaque match, le score de la liste gagne ou perd les points Elo de son joueur.
- **Tous les matchs comptent** dès qu'un membre d'une des deux listes joue : contre l'autre liste, contre sa propre liste (0 net pour la liste) ou contre un joueur hors N7 (seule sa liste bouge).
- **Bonus d'inscription :** la liste qui a le plus fort pourcentage de membres inscrits sur Atlas gagne l'écart de pourcentage en points (exemple : 92 % contre 83 % → +9).
- L'écran affiche les deux scores, un grand « VS » et l'écart en direct.

## Mise à jour

La page publique est statique : les inscrits et les matchs y sont intégrés à chaque mise à jour du dépôt.

1. Crée un favori avec le code de `bookmarklet.js`.
2. Sur Atlas, ouvre L'Affrontement – N7, onglet **Registrations** ou **Matches**, et clique sur le favori : il copie tout l'onglet.
3. L'organisateur importe ce relevé ; la page est reconstruite et publiée ici.

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | Le visuel télé (version publique, inscrits et matchs intégrés) |
| `simulation.html` | La même page avec 60 matchs inventés entre joueurs anonymes |
| `chau7.jpg`, `7xappeal.jpg`, `bde.jpg`, `wingscup.avif` | Logos affichés sur la page |
| `bookmarklet.js` | Code du favori qui récupère les inscrits et les matchs sur Atlas |

## Confidentialité

Les noms des membres des listes ne sont pas publiés. Dans `index.html`, chaque membre est remplacé par un numéro et une empreinte (SHA-256 tronqué) de son nom, et les matchs s'affichent sous la forme « Joueur Chau7 bat Joueur 7xAppeal ».
