> **Adaptation LN-IA Automne 2026 — Copie de travail, non source originale.**
> Séance 12 : lundi 2 novembre 2026, 19h00 (heure du Maroc).
> Dossier : `03-documents/` ; portfolio : `07-portfolio/`. V2 = document révisé à relire, jamais une validation automatique.

# Prompts candidat - Séance 12 - Guide pratique V1

**Usage :** production controlee du guide  
**Statut :** V1 - A RELIRE  

---

## 1. Prompt principal de redaction

```text
Tu es redacteur pedagogique.

Redige une premiere version courte d'un guide pratique a partir du plan ci-dessous.

PLAN VALIDE :
[COLLER ICI LE PLAN DE LA SEANCE 11]

PUBLIC VISE :
...

RESULTAT ATTENDU :
...

Contraintes :
- respecter l'objectif et l'ordre du plan ;
- utiliser des phrases courtes et un ton clair ;
- formuler des etapes numerotees et actionnables ;
- ajouter les erreurs a eviter ;
- ajouter une checklist finale ;
- ne pas inventer d'information, de chiffre ou de promesse ;
- marquer "A VERIFIER" lorsqu'une information manque ;
- terminer par les prochaines ameliorations possibles ;
- indiquer le statut "V1 - A RELIRE".

Format attendu : Markdown.
```

## 2. Prompt de simplification

```text
Simplifie ce guide pour le public indique sans changer son objectif principal.

GUIDE :
[COLLER LE GUIDE]

PUBLIC :
...

Supprime les repetitions, raccourcis les phrases et transforme les formulations vagues en actions. N'ajoute aucune information absente. Termine par les changements effectues et les points a verifier par l'humain.
```

## 3. Prompt de controle qualite

```text
Controle ce guide pratique V1 sans le reecrire completement.

GUIDE :
[COLLER LE GUIDE]

Evalue : objectif, public, ordre logique, clarte, utilite, exactitude, etapes, erreurs a eviter, checklist et absence de promesse excessive.

Reponds avec :
1. points solides ;
2. corrections prioritaires ;
3. informations a verifier par l'humain ;
4. decision proposee : A COMPLETER, A SIMPLIFIER ou PRET POUR RELECTURE.
```

## 4. Prompt de correction ciblee

```text
Applique uniquement les corrections validees ci-dessous a mon guide V1.

GUIDE V1 :
[COLLER LE GUIDE]

CORRECTIONS VALIDEES PAR MOI :
- ...
- ...

Ne change pas le titre, le public ni l'objectif principal. Signale chaque modification dans un court rapport. Propose le nom guide-pratique-v1-corrige.md. Ne donne pas le statut VALIDE.
```

## 5. Prompt de trace portfolio

```text
Aide-moi a rediger une trace portfolio courte pour la preuve-12-guide-pratique-v1.

Indique : livrable produit, aide apportee par l'IA, corrections humaines, apprentissage, point restant a ameliorer et chemin du fichier. N'invente rien et ne reproduis aucune donnee personnelle.
```
