# AGENTS.md — Atelier LN-IA · Séance 12

## Mission
Produire et maintenir l’atelier Vite de la séance 12 : **lundi 2 novembre 2026 à 19h00**, Module 03, semaine 06, Challenge 100 Jours — Relance Automne 2026.

## Règles de supervision
- **Inspecter le dossier et Git avant d’écrire.** Ne pas écraser les fichiers de candidats ni les adaptations validées.
- Lire `README.md`, `INDEX-PACK.md`, `docs/PROVENANCE.md`, le ZIP source conservé et le prompt maître Codex.
- Conserver l'archive historique **inchangée** dans `ressources-originales/` ; les corrections se font exclusivement dans les copies de travail `ressources-adaptees/`.
- Les quatre cas d’usage sont **FICTIFS**. Aucun chiffre, lieu, procédure ou attestation non sourcé.
- Aucun appel à un modèle IA depuis le site. Le participant copie les prompts vers son outil, puis relit.
- Le dossier documentaire actif est `03-documents/`, les prompts vont dans `02-prompts/` et les preuves dans `07-portfolio/`. L’ancien `02-DOCUMENTS/` apparaît uniquement comme chemin historique.
- S12 doit produire **V1**, puis **V2 réellement corrigée** avec un journal des modifications, sans validation automatique. Le statut final appartient au pilote humain.
- Ne pas supprimer massivement, pousser vers `main`, créer de commits ou déployer sans instruction explicite du pilote.
- Ne pas intégrer de clés API, secrets ni données sensibles aux sources ou aux exemples.

## Tests obligatoires
`npm run check`, `npm test`, `npm run build`, `npm run standalone`, puis inspection dans Chrome/Chromium bureau et mobile : 22 slides, 4 démos, import des sources, aperçu Markdown, V1, V2, prompts, quiz, flashcards, validation, portfolio et liens.

## Acceptance
1. Exactement 22 diapositives et notes formateur.
2. Quatre cas fictifs, douze flashcards, dix questions et dix critères de contrôle.
3. Export V1, export V2 modifiée avec journal et preuve, prompt et bilan du Module 03.
4. Atelier utilisable en local, responsive et autonome hors ligne.
5. Le logo officiel LN-IA est intégré ; les anciennes affiches ne sont pas présentées comme la nouvelle édition.
6. Un journal de tests distingue résultats réels et étapes restant à vérifier.

**Règle LN-IA :** besoin réel → cadrage → prompt → production → contrôle humain → correction → documentation → preuve.
