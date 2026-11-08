# L'Affrontement N7

Course à l'Elo entre les listes **Chau7** et **7xAppeal** sur FC 27 (mode Rush), dans le cadre d'un qualifier Red Bull Wings Cup géré sur Atlas.

**Page publique :** https://rebeusympa.github.io/affrontement-n7/ (inscrits mis à jour à la main, sans les matchs en direct)

**Simulation (matchs inventés) :** https://rebeusympa.github.io/affrontement-n7/simulation.html

**Page en direct (claude.ai) :** https://claude.ai/artifact/9BuwUD2CrdEbpEUAPxgQGK (reçoit les matchs importés depuis Atlas ; visible une fois partagée, en étant connecté à claude.ai)

## Règles de calcul

- Chaque inscrit sur Atlas compte **1500** pour sa liste dès son inscription.
- Après chaque match, l'Elo des deux joueurs change selon la formule classique (K = 32). Il n'y a pas de match nul.
- L'Elo total d'une liste est la somme des Elo de ses inscrits. La liste qui a le plus gros total est en tête.

## Mettre à jour depuis Atlas

1. Crée un favori avec le code de `bookmarklet.js` (ou glisse le bouton « Récup Atlas N7 » depuis la page).
2. Sur Atlas, ouvre L'Affrontement – N7, onglet **Registrations** ou **Matches**, et clique sur le favori.
3. Colle le résultat dans « Mettre à jour depuis Atlas » sur la page, puis clique sur **Importer**.

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | La page de la course (version publique). Les matchs en direct ne fonctionnent que sur claude.ai. |
| `chau7.jpg`, `7xappeal.jpg`, `bde.jpg`, `wingscup.avif` | Logos affichés sur la page |
| `bookmarklet.js` | Code du favori qui récupère les inscrits et les matchs sur Atlas |

## Confidentialité

Les noms des membres des listes ne sont pas publiés. Dans `index.html`, chaque membre est remplacé par un numéro et une empreinte (SHA-256 tronqué) de son nom : la page reconnaît un joueur quand Atlas lui donne son nom, mais on ne peut pas lire la liste des membres dans le fichier.
