# Reprise d’audit — 26 octobre 2026

Les résultats historiques du pack sont conservés plus bas. Ils ne prouvent pas la recette de la version corrigée.

| Contrôle exécuté sur Windows | Résultat réel |
|---|---|
| Installation npm | Réussie : 14 paquets ; package-lock.json généré |
| npm.cmd run check | Réussi : effectifs pédagogiques et syntaxe |
| npm.cmd test | 8/8 réussis, dont 3 régressions de conservation des travaux |
| npm.cmd run build | Réussi : Vite 6.4.5, sortie dist/ |
| npm.cmd run standalone | Réussi : HTML autonome régénéré, 85 004 octets |

Correctifs dans src/main.js : conservation de la référence V1 et du marquage fictif au rechargement ; confirmation avant remplacement du formulaire par une démo ou du texte V2 par la base V1 ; conservation des imports longs au-delà de 60 000 caractères. La déclaration de relecture doit être renouvelée après rechargement. Tests de régression ajoutés dans tests/s12.test.mjs.

Archive originale : 49 entrées, CRC réussi, SHA-256 inchangé avant/après : 15f39b7f3d4af4e8327ffa949f7292d59d11710e4ca177a78797ad77e8d0ef42.

Recette visuelle de cette version : INCOMPLÈTE. Computer Use a arrêté l’accès car l’URL Chrome ne pouvait pas être déterminée avec suffisamment de certitude. Restent à vérifier sur bureau et mobile : navigation, 22 slides et notes, clavier, plein écran, 4 démos, import réel, aperçu Markdown, téléchargements V1/V2 et journal, prompts, flashcards, quiz, grille, portfolio et liens. Les captures existantes sont historiques. Workspace Trust non vérifié et non modifié.

Versionnement demandé par le pilote : dépôt distant vide lors de git ls-remote, branche de travail atelier-s12-audit. Aucun push main ni déploiement Pages demandé. Le workflow existant publie sur main ou déclenchement manuel. Aucun diff historique Git disponible : le dossier local ne possédait pas de dépôt avant cette intervention.

Fichiers techniques modifiés : src/main.js, tests/s12.test.mjs, APERCU-AUTONOME-SEANCE-12.html. Fichiers de traçabilité actualisés : README.md, docs/JOURNAL-QUALITE.md, CHECKSUMS-SHA256.txt. Nouveau verrou de dépendances : package-lock.json. Les modèles candidats restent disponibles ; aucun travail fictif présenté comme production d’un participant.

Statut : PRÊT POUR RELECTURE — recette visuelle incomplète ; aucune validation pédagogique ni publication Pages par l’agent.

L’IA propose. Le participant produit et corrige. Le pilote valide. Le livrable prouve.

---
# Journal de qualité — Atelier S12 · 25 octobre 2026

## Tests exécutés réellement

| Contrôle | Résultat | Méthode |
|---|---|---|
| Script statique (`npm run check`) | **Réussi** | 22 slides, 4 démos, 12 flashcards, 10 questions, 10 critères, exports référencés, syntaxe JS |
| Tests de données (`npm test`) | **5/5 réussis** | Node.js test runner |
| Génération HTML autonome | **Réussie** | `python scripts/build-standalone.py` |
| Vérification du navigateur | **Réussie sur aperçu autonome** | Chromium via `page.set_content()` : accueil, slides, notes, formulaire, aperçu Markdown, téléchargement V1/V2, flashcards, quiz, validation, portfolio |
| Format mobile 390 px | **Réussi sur aperçu autonome** | Menu mobile, slide et absence de débordement horizontal |
| Erreurs JavaScript des parcours parcourus | **Aucune observée** | Écoute `pageerror` Chromium |
| Installation npm / build Vite (`npm run build`) | **Non vérifié** | Registre npm indisponible dans cet environnement ; installation hors ligne refusée |
| Publication GitHub Pages | **Non effectuée** | Dépôt cible non accessible lors du contrôle ; aucun push |

## Réserves
1. Les tests navigateur ont été exécutés sur HTML autonome injecté dans Chromium (`page.set_content`) car la navigation `file://` et `localhost` est bloquée dans cet environnement par une restriction de sécurité. Ces tests ne constituent pas un test complet du serveur Vite ni du déploiement GitHub Pages.
2. Répéter les contrôles dans VS Code/Chrome Windows avec le serveur Vite. Installer npm, contrôler `package-lock.json` généré et l'ajouter au dépôt après validation.
3. Une V2 exige une véritable correction et une justification. L'application vérifie la différence textuelle et la déclaration du participant, mais ne garantit pas la qualité ni la réalité historique de la relecture.
4. Toutes les données de simulation sont fictives. Le logo officiel fourni est intégré ; les affiches doivent être remplacées ultérieurement.
5. Les sources archivées de l’été sont préservées. Les chemins ont été harmonisés dans des copies séparées.

## Statut
**V1 — PRÊT POUR RELECTURE PÉDAGOGIQUE ET TEST VITE SUR LE PC DU PILOTE.** Pas de validation finale ni de publication distante.
