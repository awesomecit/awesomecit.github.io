# Come creare il file cv.pdf

Hai 3 opzioni per creare il file `cv.pdf` che sarà scaricabile dal terminale:

## Opzione 1: Convertire CV_TEMPLATE.html in PDF (Chrome/Edge)

1. Apri il file `CV_TEMPLATE.html` nel browser Chrome o Edge
2. Premi `Ctrl+P` (o Cmd+P su Mac) per aprire la finestra di stampa
3. Seleziona "Salva come PDF" come destinazione
4. Imposta:
   - Margini: Predefiniti o Minimi
   - Orientamento: Verticale
   - Scala: 100%
5. Clicca su "Salva" e salva il file come `cv.pdf` nella stessa cartella di `index.html`

## Opzione 2: Usare un tool online

1. Vai su uno di questi siti:
   - https://www.ilovepdf.com/html-to-pdf
   - https://html2pdf.com/
   - https://www.sejda.com/html-to-pdf
2. Carica il file `CV_TEMPLATE.html`
3. Scarica il PDF generato e rinominalo in `cv.pdf`
4. Mettilo nella stessa cartella di `index.html`

## Opzione 3: Sostituire con il tuo CV esistente

Se hai già un CV in formato PDF:

1. Rinominalo in `cv.pdf`
2. Copialo nella cartella del progetto:

```bash
cp /percorso/tuo/cv.pdf $(pwd)/cv.pdf
```

## Opzione 4: Usare wkhtmltopdf (Linux)

Se hai wkhtmltopdf installato:

```bash
wkhtmltopdf CV_TEMPLATE.html cv.pdf
```

Se non lo hai installato:

```bash
sudo apt-get install wkhtmltopdf  # Ubuntu/Debian
# oppure
sudo dnf install wkhtmltopdf      # Fedora
```

## Verifica

Dopo aver creato il file `cv.pdf`:

1. Verifica che il file esista nella directory del progetto:

   ```bash
   ls -la $(pwd)/cv.pdf
   ```

2. Apri il terminale nel browser
3. Esegui il comando: `cit download`
4. Il download dovrebbe partire automaticamente!

---

**Nota:** Il file `CV_TEMPLATE.html` contiene già tutte le informazioni del tuo CV formattate in modo professionale.
Puoi personalizzarlo ulteriormente prima di convertirlo in PDF se necessario.
