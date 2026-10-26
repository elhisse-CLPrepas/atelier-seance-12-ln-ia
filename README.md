# LN-IA · Séance 12 — Atelier pratique : produire un guide professionnel V1 puis V2

**Challenge 100 Jours — Relance Automne 2026 · Module 03 · Semaine 06**
**Lundi 2 novembre 2026 · 19h00**
**Pilotage : Prof. Abderrahman EL HISSE**
**Statut éditorial : V1 — À RELIRE / À VALIDER**

## Démarrer immédiatement
Ouvrez `APERCU-AUTONOME-SEANCE-12.html` en double-cliquant. Cette version rassemble CSS, JS, données, logo dans un fichier HTML fonctionnant sans serveur.

## Démarrer dans VS Code avec Vite
Ouvrir le dossier `atelier-seance-12-ln-ia` puis exécuter :

```powershell
npm.cmd install
npm.cmd run dev
```

Ouvrir l'URL locale affichée (normalement `http://127.0.0.1:5173/`). Si Codex ne s’ouvre pas dans ce dossier neuf, vérifier **Workspace Trust** via `Ctrl+Shift+P` → `Workspaces: Manage Workspace Trust`, puis autoriser ce dossier uniquement s’il provient de sources de confiance.

### Contrôles
```powershell
npm.cmd run check
npm.cmd test
npm.cmd run build
npm.cmd run standalone
```

`npm install` doit être exécuté au premier démarrage. Un `package-lock.json` sera généré : vérifiez-le puis versionnez-le. Le pack n'en inclut pas car le registre npm est inaccessible dans l’environnement de préparation ; ne prétendez pas que le build Vite a été testé sans l'avoir exécuté.

## Onze rubriques
Accueil ; Présentation (**22 diapositives** avec notes/clavier/plein écran) ; Méthode ; Démonstrations (**4 cas pédagogiques fictifs**) ; Atelier V1 → V2 (import S09/S10/S11 `.md/.txt`, formulaires, prévisualisation, exports) ; Prompts (**5**) ; Flashcards (**12**) ; Quiz (**10 questions**) ; Validation (**10 critères**) ; Portfolio ; Ressources.

### Livrables à exporter et ranger
```text
challenge-100jours/
├── 02-prompts/
│   └── prompt-guide-s12.md
├── 03-documents/
│   ├── note-cadrage-courte.md      # S09
│   ├── fiche-projet-v1.md         # S10
│   ├── plan-guide-pratique.md     # S11
│   ├── guide-pratique-v1.md       # S12
│   ├── guide-pratique-v2-a-relire.md # S12, après correction
│   └── grille-relecture-s12.md
└── 07-portfolio/
    ├── preuve-seance-12.md
    └── bilan-module-03.md
```

Le navigateur télécharge les fichiers dans votre dossier **Téléchargements** : il ne modifie pas automatiquement les dossiers locaux. Exportez vos travaux régulièrement. Les champs sont conservés localement dans le navigateur, sans transmission serveur. Le site **n’utilise aucun modèle IA**. Les prompts doivent être copiés manuellement dans votre outil choisi. Ne mettez pas de données confidentielles dans les démonstrations.

### Différence entre V1 et V2
La V1 est enregistrée comme référence au téléchargement. Le bouton V2 exige une V1, un texte révisé différent, un journal de corrections et une déclaration de relecture humaine. **Ce mécanisme vérifie des saisies ; il ne certifie pas la réalité des corrections ni la qualité du contenu.** Les deux versions restent « À RELIRE » jusqu'à décision humaine du pilote.

## Sources et adaptation de l'été
- Source reçue : `ressources-originales/supports-seance-12-ETE-2026.zip`, archivée et intacte.
- Copies adaptées : `ressources-adaptees/`. Le chemin historique `02-DOCUMENTS` a été harmonisé en `03-documents` selon les ateliers Automne.
- Le support historique utilise `guide-pratique-v1-corrige.md` comme fichier de correction. L'édition S12 adopte `guide-pratique-v2-a-relire.md` pour rendre la version explicitement distincte.
- Les anciennes affiches seront mises à jour plus tard ; seul le logo officiel LN-IA fourni est utilisé en page d'accueil.
- Voir `docs/PROVENANCE.md` et `docs/JOURNAL-QUALITE.md`.

## Références du module
- [S09](https://github.com/elhisse-CLPrepas/atelier-seance-09-ln-ia)
- [S10](https://github.com/elhisse-CLPrepas/atelier-seance-10-ln-ia)
- [S11](https://github.com/elhisse-CLPrepas/atelier-seance-11-ln-ia)
- [Dépôt cible S12](https://github.com/elhisse-CLPrepas/atelier-seance-12-ln-ia) — non confirmé disponible lors de la préparation. **Aucun push n'a été effectué.**

## Pour Codex
Lire `AGENTS.md` et copier `prompts/PROMPT-MAITRE-CODEX-S12.md` dans Codex depuis VS Code. L'agent doit commencer par l'inventaire et attendre une autorisation humaine avant publication.

## Publication GitHub Pages
Le workflow `.github/workflows/deploy-pages.yml` est prêt. Quand le dépôt sera créé/accessible et le pack validé, activer **Settings → Pages → GitHub Actions**, pousser le code après vérification des contrôles, puis consulter **Actions** et l'URL réellement publiée. Suivre `docs/DEPLOIEMENT.md`.


## Reprise du 26 octobre 2026

Installation npm, check, 8 tests, build Vite et génération autonome réussis sur Windows. Le fichier package-lock.json est désormais inclus pour reproduire les dépendances. Les réserves d’installation ci-dessus décrivent la préparation historique du pack. La recette visuelle de la version corrigée reste incomplète ; voir docs/JOURNAL-QUALITE.md. Versionnement sur atelier-s12-audit pour relecture, sans déploiement Pages.
