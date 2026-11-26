# awesomecit.github.io

Landing da sviluppatore di Antonio Cittadino: <https://awesomecit.github.io>.

Una pagina sola (`index.html`, HTML/CSS/JS senza build) con due viste:

- **pagina**: profilo, numeri, metodo, lavoro, team TechCitizen, prodotti in laboratorio, stack e contatti;
- **shell**: un terminale (tasto <kbd>`</kbd> o interruttore in alto) che legge gli stessi testi dalla pagina, quindi si scrivono una volta sola. Comandi: `help`, `whoami`, `metodo`, `lavoro`, `team`, `lab`, `stack`, `contatti`, `whatsapp`, `cv`, `clear`, più qualche sorpresa.

## Anteprima

```bash
python3 -m http.server 8000
```

Poi apri <http://localhost:8000>.

## Dove si cambia cosa

- Testi: direttamente in `index.html`; la shell li prende dalla pagina.
- Telefono e WhatsApp: cerca `393804611277` in `index.html`.
- CV: `cv.pdf` (fonte in `CV.md`).

Le versioni precedenti (terminale Matrix e versione visuale) sono nella storia git, fino al commit `f12001a`.
