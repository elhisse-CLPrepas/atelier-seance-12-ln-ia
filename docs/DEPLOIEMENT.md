# Préparation GitHub Pages — atelier-seance-12-ln-ia

**État lors du pack :** dépôt cible non accessible depuis GitHub. Aucune création ou publication effectuée.

## Avant publication
1. Relire `AGENTS.md`, `docs/JOURNAL-QUALITE.md` et le mini-audit.
2. Dans VS Code, vérifier **Workspace Trust** pour le dossier choisi, seulement après contrôle des fichiers.
3. Exécuter `npm.cmd install`, `npm.cmd run check`, `npm.cmd test`, `npm.cmd run build`, `npm.cmd run standalone`.
4. Vérifier la navigation, les exports V1/V2 et le rendu mobile/ordinateur.
5. Vérifier les fichiers privés avant `git add` : le ZIP source historique est exclu et n'est pas destiné à un dépôt public.
6. Ne créer le dépôt distant / pousser qu'après accord humain explicite.

## Exemple des commandes locales après accord
```powershell
git status
git add .
git commit -m "feat: atelier S12 guide pratique V1 V2"
git remote -v
# Si la branche principale est main et le remote origin déjà correctement configuré :
git push -u origin main
```

Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**. Le workflow publie `dist/` après tests réussis. Vérifier le run Actions et le site final avant d'annoncer une publication. Le `base: './'` de Vite fournit des chemins relatifs, compatibles avec un projet Pages en sous-dossier. En cas de routage modifié, vérifier les liens actifs.
