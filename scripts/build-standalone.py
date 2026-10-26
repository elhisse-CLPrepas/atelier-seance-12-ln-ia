#!/usr/bin/env python3
"""Créer un seul HTML consultable hors ligne depuis les sources Vite, sans dépendances Python tierces."""
from pathlib import Path
import base64
root=Path(__file__).resolve().parents[1]
html=(root/'index.html').read_text(encoding='utf-8')
css=(root/'src/style.css').read_text(encoding='utf-8')
data=(root/'src/data.js').read_text(encoding='utf-8').replace('export const DATA = ','const DATA = ',1)
main=(root/'src/main.js').read_text(encoding='utf-8').replace("import { DATA } from './data.js';",'',1)
logo=(root/'public/assets/logo-ln-ia.webp').read_bytes()
uri='data:image/webp;base64,'+base64.b64encode(logo).decode('ascii')
main=main.replace('./assets/logo-ln-ia.webp',uri)
html=html.replace('<link rel="icon" href="./assets/logo-ln-ia.webp">','')
html=html.replace('<link rel="stylesheet" href="./src/style.css">','<style>'+css+'</style>')
html=html.replace('<script type="module" src="./src/main.js"></script>','<script>'+data+'\n'+main+'</script>')
html=html.replace('<title>LN-IA · Séance 12 — Guide pratique V1 et V2</title>', '<title>LN-IA · Séance 12 — Aperçu autonome</title>')
output=root/'APERCU-AUTONOME-SEANCE-12.html';output.write_text(html,encoding='utf-8')
print(f'Créé {output.name}: {output.stat().st_size:,} octets')
