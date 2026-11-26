# awesomecit.github.io

Landing da sviluppatore di Antonio Cittadino. Indirizzo principale (canonical): <https://techcitizen.it/team/antonio-cittadino/>, pubblicata da deploy-pull a ogni merge su `main` (techcitizen-infra#67). Resta anche su <https://awesomecit.github.io>.

Una pagina sola (`index.html`, HTML/CSS/JS senza build) con due viste:

- **pagina**: profilo, numeri, metodo, lavoro, team TechCitizen, prodotti in laboratorio, stack e contatti;
- **shell**: un terminale (tasto <kbd>`</kbd> o interruttore in alto) che legge gli stessi testi dalla pagina, quindi si scrivono una volta sola. Comandi: `help`, `whoami`, `metodo`, `lavoro`, `team`, `lab`, `stack`, `contatti`, `whatsapp`, `cv`, `clear`, più qualche sorpresa.

## Anteprima

```bash
python3 -m http.server 8000
```

Poi apri <http://localhost:8000>.

## Regole per techcitizen.it

La pagina gira in una sottocartella e sotto una CSP stretta (`default-src 'self'`, niente inline):

- solo percorsi relativi (`assets/…`, `cv.pdf`), mai `/…`;
- CSS in `assets/site.css` e `assets/cv.css`, JS in `assets/site.js`: niente `<style>`, `<script>` inline, attributi `style` o `onclick`;
- font in locale in `assets/fonts/` (licenza in `assets/fonts/OFL.txt`), nessuna risorsa da altri domini.

Il test le controlla:

```bash
node --test tests/
```

## Dove si cambia cosa

- Testi: direttamente in `index.html`; la shell li prende dalla pagina.
- Telefono e WhatsApp: cerca `393804611277` in `index.html`.
- CV: la sorgente è `cv.html`; `cv.pdf` si rigenera da lì, con il server locale acceso:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --no-pdf-header-footer --virtual-time-budget=8000 --print-to-pdf=cv.pdf http://localhost:8000/cv.html
```

- Foto: `assets/avatar.jpg` (360 px, ritagliata in cerchio via CSS).

Le versioni precedenti (terminale Matrix e versione visuale) sono nella storia git, fino al commit `f12001a`.
