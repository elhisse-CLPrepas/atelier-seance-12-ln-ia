# DÉROULEMENT FORMATEUR — SÉANCE 12

**LAB-NUMÉRIQUE-IA · Challenge 100 Jours — Relance Automne 2026**  
**Module 03 — Dossier professionnel · Semaine pédagogique 06**  
**Lundi 2 novembre 2026 · 19h00 (Maroc)**  
**Responsable pédagogique : Prof. Abderrahman EL HISSE**  
**Durée indicative : 100 minutes, adaptable de 90 à 120 minutes**  
**Statut : guide d’animation corrigé · à relire et valider par le pilote**

## 1. Finalité pédagogique

La séance 12 clôture le Module 03. Elle fait passer le participant de **l’architecture du guide** (S11) à un **guide pratique rédigé**, relu et corrigé. La V1 doit pouvoir être utilisée comme base de travail ; la V2 démontre une progression grâce à des changements explicités. Ni l’application ni l’IA ne délivrent de certification automatique.

### Chaîne documentaire à rappeler

| Séance | Ressource | Utilité pour S12 |
|---|---|---|
| S09 | `note-cadrage-courte.md` | Fixe sujet, public, besoin, objectif, résultat et première action |
| S10 | `fiche-projet-v1.md` | Formalise objectifs, livrables et étapes du projet |
| S11 | `plan-guide-pratique.md` | Fournit l’architecture du guide à rédiger |
| **S12** | Guide V1 puis V2 corrigée | Transforme les parties en consignes actionnables, vérifiées et classées |

## 2. Préparation du formateur avant 19h00

1. Décompresser le pack S12, ouvrir `README.md`, `AGENTS.md` et ce guide.
2. Vérifier que le logo et les titres de séance correspondent au Module 03 — Automne 2026.
3. Choisir l’option d’ouverture : `APERCU-AUTONOME-SEANCE-12.html` pour une consultation sans installation, ou Vite avec `npm.cmd install` puis `npm.cmd run dev` dans VS Code.
4. Parcourir l’**Accueil**, la **Présentation** et l’**Atelier V1 → V2**. Tester l’export avec des données fictives, puis supprimer les fichiers de test du répertoire des téléchargements si souhaité.
5. Préparer un plan S11 fictif au format `.md` afin de montrer l’import. Préserver les documents personnels des participants.
6. Afficher les chemins de classement et le statut **V1/V2 À RELIRE**.
7. En cas de dysfonctionnement Codex dans un nouveau dossier VS Code : vérifier `Ctrl+Shift+P` → `Workspaces: Manage Workspace Trust` et faire confiance uniquement au dossier vérifié. Codex n’est pas nécessaire au fonctionnement autonome du site.

### Ressources de secours

- **Sans Vite :** ouvrir le fichier HTML autonome.
- **Sans modèle IA :** travailler directement dans l’atelier en remplissant les champs ; les prompts peuvent être copiés manuellement dans un outil IA choisi par le candidat.
- **Sans import :** recopier le titre, le public et les grandes parties du plan S11 dans le formulaire.
- **Sans téléchargement immédiat :** conserver temporairement le texte dans un éditeur local, puis vérifier son enregistrement.

## 3. Animation chronométrée — scénario de référence (100 min)

| Créneau | Durée | Séquence | Supports | Travail du candidat | Vérification du formateur |
|---|---:|---|---|---|---|
| 00–10 min | 10 min | Ouverture : acquis S09–S11 | Accueil, slides 01–04 | Retrouver note, fiche projet et plan | Le plan S11 est présent ou sa version de travail est identifiée |
| 10–25 min | 15 min | Mini-cours : écrire pour agir | Slides 05–13, Méthode | Transformer une partie de plan en action et critère | Le lecteur visé et le résultat sont explicités |
| 25–45 min | 20 min | Démonstration guidée et prompts | Slides 14–20, Démonstrations, Prompts | Observer les quatre cas fictifs, tester une formulation | Distinguer sortie simulée, erreur et responsabilité humaine |
| 45–70 min | 25 min | Atelier : rédaction de la V1 | Slide 21, Atelier | Importer S11, rédiger 3 étapes, erreurs, checklist ; exporter V1 | Guide compréhensible, fichier V1 téléchargé |
| 70–90 min | 20 min | Relecture humaine et V2 | Atelier, Validation | Corriger réellement, renseigner journal, exporter V2 et grille | Différences V1/V2 et raison des changements explicites |
| 90–100 min | 10 min | Capitalisation | Slide 22, Portfolio, Quiz | Exporter preuve S12 et bilan Module 03 | Statut annoncé et fichiers classables retrouvés |

**Ajustement 90 min :** réduire les restitutions et la démonstration collective, sans supprimer relecture ni preuves.  
**Ajustement 120 min :** prolonger la pratique individuelle et prévoir une relecture croisée par binôme.

## 4. Déroulement détaillé et consignes orales

### Séquence A — Ouverture (slides 01–04)

Dire : « La séance 11 nous a permis d’organiser le guide. Aujourd’hui nous allons transformer ce plan en actions précises et vérifier que le lecteur pourra les suivre. » Faire montrer un titre et le résultat attendu dans le plan de chaque candidat.

**Question au groupe :** que pourra faire concrètement une personne après la lecture de votre guide ?  
**Trace :** une phrase formulant un résultat observable.

### Séquence B — Du plan aux consignes (slides 05–13)

Montrer la transformation d’un titre vague en consigne concrète :

- **Titre de plan :** « Préparer son travail ».
- **Action du guide :** « Ouvrir le dossier de travail, créer `exercice.md` et saisir un titre ».
- **Contrôle :** « Le fichier existe et affiche le titre demandé ».
- **Preuve :** fichier conservé.

Rappeler les rubriques : objectif, public, résultat attendu, prérequis, au moins trois étapes, erreurs à éviter, checklist, informations à vérifier et amélioration à envisager. Aucune donnée absente ne doit être inventée.

### Séquence C — Démonstrations et prompts (slides 14–20)

Parcourir les **quatre cas fictifs** du pack :

1. Accueil de nouveaux élèves au collège — repères et vérifications d’accueil.
2. Formation — prise en main de VS Code et création d’un fichier Markdown.
3. Association — préparation d’une rencontre et répartition d’actions.
4. Responsabilité humaine — clarifier ce que l’IA propose et ce que la personne doit vérifier.

Expliquer la fonction des cinq prompts disponibles : **rédiger**, **simplifier**, **contrôler la qualité**, **corriger**, **documenter la preuve portfolio**. Les prompts peuvent être copiés ; le site ne contacte pas directement un modèle IA.

**Question :** quel élément d’une réponse IA ne pouvez-vous accepter sans contrôle personnel ?

### Séquence D — Atelier V1 (slide 21)

1. Ouvrir la rubrique **Atelier V1 → V2**.
2. Importer le plan S11 en `.md` ou `.txt` si disponible.
3. Préciser titre, public, objectif et résultat concret.
4. Remplir les trois étapes avec une action et une vérification pour chacune.
5. Ajouter erreurs fréquentes, checklist, points à vérifier et prochaine amélioration.
6. Lire l’aperçu Markdown. Exporter `guide-pratique-v1.md`.
7. Demander une explication : « En quoi ce guide sert-il le besoin formulé en S09 ? »

**Trace :** V1 téléchargeable, datée et marquée **À RELIRE**.

### Séquence E — Correction humaine et V2

Faire relire la V1 par son auteur, puis de préférence par un autre participant. L’auteur doit choisir et appliquer des corrections réelles. Exemple : remplacer « préparer les documents » par une liste des pièces réellement exigées *uniquement si ces exigences sont connues et vérifiées*, ou formuler un point « À VÉRIFIER ».

**Exiger :** (a) une V1 déjà exportée ; (b) un texte V2 réellement différent ; (c) un journal de modifications indiquant pourquoi la correction était nécessaire ; (d) une déclaration de relecture humaine. Le logiciel ne vérifie pas la vérité du journal ni la qualité éditoriale.

**Traces :** `guide-pratique-v2-a-relire.md` et `grille-relecture-s12.md`.

### Séquence F — Portfolio et clôture (slide 22)

Faire relever trois informations : ce qui a été produit, ce qui a été corrigé et ce qui reste à améliorer. Exporter la preuve S12 et le bilan du module. Déclarer le statut **À RELIRE / À VALIDER** sauf validation individuelle explicite par le pilote.

Phrase de clôture proposée : « La V1 sert à exister. La correction sert à progresser. La preuve sert à démontrer le travail réalisé. »

## 5. Fichiers à exporter et classement conseillé

```text
challenge-100jours/
├── 02-prompts/
│   └── prompt-guide-s12.md
├── 03-documents/
│   ├── note-cadrage-courte.md        # séance 09
│   ├── fiche-projet-v1.md           # séance 10
│   ├── plan-guide-pratique.md       # séance 11
│   ├── guide-pratique-v1.md         # séance 12
│   ├── guide-pratique-v2-a-relire.md
│   └── grille-relecture-s12.md
└── 07-portfolio/
    ├── preuve-seance-12.md
    └── bilan-module-03.md
```

**Important :** les boutons de téléchargement du navigateur ne classent pas automatiquement les fichiers dans ces dossiers. Le participant doit les déplacer après export.

## 6. Grille rapide de relecture par le formateur

| Critère | Question de contrôle | Preuve observable |
|---|---|---|
| Alignement | Le guide correspond-il au besoin de S09 ? | Besoin rappelé dans la V1 |
| Public | Sait-on clairement à qui le guide s’adresse ? | Rubrique « Public » renseignée |
| Résultat | Le lecteur sait-il ce qu’il doit obtenir ? | Résultat concret |
| Actions | Trois étapes au moins sont-elles faisables et ordonnées ? | Consignes numérotées |
| Vérification | Chaque étape produit-elle un résultat observable ? | Contrôles d’étape |
| Prudence | Les informations incertaines sont-elles identifiées ? | Mentions « À VÉRIFIER » |
| Clarté | Le langage est-il lisible pour le public ? | Phrases précises et courtes |
| Correction | La V2 diffère-t-elle réellement de la V1 ? | Comparaison des deux fichiers |
| Traçabilité | Le journal explique-t-il les corrections ? | Journal V2 |
| Portfolio | Les fichiers et preuves sont-ils retrouvables ? | Classement et bilan du module |

La grille sert à la décision du pilote. **Un score, un quiz ou une case cochée ne certifie pas une production.**

## 7. Évaluation et capitalisation

- **Flashcards : 12** cartes de révision disponibles dans l’application.
- **Quiz : 10** questions corrigées, utilisées pour une autoévaluation non certifiante.
- **Validation : 10** critères de contrôle humain dans la rubrique dédiée.
- **Bilan :** reprendre les preuves S09, S10, S11 et S12 ; distinguer les fichiers effectivement produits des exemples fictifs.

### À reporter dans le bilan du Module 03

- Le problème professionnel choisi et le public.
- La progression note → fiche → plan → guide.
- Les principaux choix éditoriaux.
- Les corrections entre V1 et V2.
- Les informations et risques restant à vérifier.
- Les fichiers et preuves permettant de retrouver le travail.

## 8. Pilotage technique et validation finale

Sur le PC du pilote, avant publication du site :

```powershell
npm.cmd install
npm.cmd run check
npm.cmd test
npm.cmd run build
npm.cmd run standalone
```

Puis vérifier le site dans le navigateur à la fois sur ordinateur et sur écran mobile. Consulter `docs/JOURNAL-QUALITE.md` pour les contrôles déjà réalisés et leurs limites. Ne pas confondre la vérification de l’application et la validation des documents des participants.

**Publication GitHub Pages :** uniquement après relecture et autorisation du pilote humain. La présente édition documentaire ne crée pas de commit et ne publie pas le dépôt.

## 9. Périmètre et provenance

Ce guide d’animation a été **recréé et enrichi à partir des fichiers de la séance 12 présents dans le pack**, notamment `src/data.js`, `docs/FICHE-CANDIDAT.md`, `docs/JOURNAL-QUALITE.md` et les modèles Markdown. Les exemples pédagogiques complémentaires sont des propositions d’animation. Les supports d’été restent conservés dans l’archive originale.

**LAB-NUMÉRIQUE-IA — Apprendre en produisant. Produire avec méthode. Partager avec valeur. Avancer avec conscience.**
