# 🎮 Funzionalità Interattive del Terminal CV

Questo documento descrive le nuove funzionalità interattive implementate nel terminal CV.

## 🌐 Comando `social` - Apri Profili Social

Apre i profili social in modo interattivo con conferma prima dell'apertura.

### Come Usare:

1. Digita `social` nel terminale
2. Seleziona un profilo digitando il numero (1-3):
   - `1` - GitHub (github.com/awesomecit)
   - `2` - LinkedIn (linkedin.com/in/antonio-cittadino-9362b179)
   - `3` - Email (mailto)
3. Conferma l'apertura digitando `y` (yes) o `n` (no)
4. Il profilo si aprirà in una nuova tab del browser

### Esempio di Utilizzo:

```bash
neo@matrix:~$ social
🌐 PROFILI SOCIAL

Seleziona un profilo da aprire:

1. GitHub (github.com/awesomecit)
2. LinkedIn (linkedin.com/in/antonio-cittadino-9362b179)
3. Email (awesome.cit.dev@gmail.com)

Digita il numero (1-3) o "cancel" per annullare:
neo@matrix:~$ 1

💻 Hai selezionato: GitHub
🔗 URL: https://github.com/awesomecit

Confermi apertura in nuova tab? (y/n):
neo@matrix:~$ y

✅ Apertura GitHub in corso...
🚀 Profilo aperto in una nuova tab!
```

### Annullare l'Operazione:

- Digita `cancel` in qualsiasi momento per annullare
- Digita `n` alla conferma per non aprire il link

---

## 📧 Comando `sendmail` - Invia Messaggio Email

Compila un form interattivo per inviare un messaggio via email. Il comando apre il client email predefinito con tutti i campi precompilati.

### Come Usare:

1. Digita `sendmail` nel terminale
2. Segui i prompt per compilare:
   - **Nome**: Il tuo nome
   - **Email**: Il tuo indirizzo email
   - **Oggetto**: L'oggetto del messaggio
   - **Messaggio**: Il testo del messaggio
3. Rivedi il riepilogo
4. Conferma con `y` per aprire il client email
5. Completa e invia dal tuo client email predefinito

### Esempio di Utilizzo:

```bash
neo@matrix:~$ sendmail
📧 INVIA MESSAGGIO

Compila i seguenti campi per inviare un messaggio:
(Digita "cancel" in qualsiasi momento per annullare)

📝 Inserisci il tuo nome:
neo@matrix:~$ Mario Rossi
✅ Nome: Mario Rossi

📧 Inserisci la tua email:
neo@matrix:~$ mario.rossi@example.com
✅ Email: mario.rossi@example.com

📋 Inserisci l'oggetto del messaggio:
neo@matrix:~$ Richiesta informazioni
✅ Oggetto: Richiesta informazioni

💬 Inserisci il messaggio (premi invio per terminare):
neo@matrix:~$ Vorrei maggiori informazioni sui tuoi servizi
✅ Messaggio ricevuto

📋 Riepilogo:
👤 Da: Mario Rossi (mario.rossi@example.com)
📧 A: awesome.cit.dev@gmail.com
📌 Oggetto: Richiesta informazioni
💬 Messaggio: Vorrei maggiori informazioni sui tuoi servizi

Aprire il client email? (y/n):
neo@matrix:~$ y

✅ Apertura client email...
🚀 Client email aperto!
📬 Completa e invia il messaggio dal tuo client email.
```

### Formato Email Generato:

Il client email si aprirà con:
- **A:** awesome.cit.dev@gmail.com
- **Oggetto:** [L'oggetto che hai inserito]
- **Corpo:** 
  ```
  Mittente: [Il tuo nome]
  Email: [La tua email]
  
  [Il tuo messaggio]
  ```

### Annullare l'Operazione:

- Digita `cancel` in qualsiasi momento durante la compilazione
- Digita `n` alla conferma finale per non aprire il client email

---

## 🎯 Caratteristiche Comuni

### Modalità Interattiva

Quando sei in modalità interattiva:
- Il terminale è in "ascolto" per i tuoi input specifici
- Non puoi eseguire altri comandi fino a quando non completi o annulli l'operazione
- Vedrai prompt specifici per guidarti in ogni step

### Validazione Input

- **Nome:** Non può essere vuoto
- **Email:** Deve contenere il carattere `@`
- **Scelte numeriche:** Solo numeri validi (1-3 per social)
- **Conferme:** Solo `y`, `yes`, `n`, `no` sono accettati

### Debug

Per vedere cosa succede dietro le quinte:
1. Apri la Console del browser (F12)
2. Guarda i log con emoji 🔍 per il debug
3. Verifica che le modalità interattive funzionino correttamente

---

## 🐛 Troubleshooting

### Il link social non si apre

- Verifica che il browser non stia bloccando i popup
- Controlla la console per eventuali errori
- Prova a disabilitare estensioni di blocco popup

### Il client email non si apre

- Verifica di avere un client email configurato nel sistema
- Su alcuni browser potrebbe essere necessario confermare l'apertura di applicazioni esterne
- Se usi webmail, copia manualmente i dati dalla console

### La modalità interattiva si blocca

- Digita `cancel` per uscire
- Se non funziona, ricarica la pagina (F5)
- Usa `clear` per pulire il terminale dopo l'uscita

---

## 💡 Suggerimenti

1. **Usa Tab** per vedere l'autocompletamento dei comandi (feature futura)
2. **Freccia Su/Giù** per navigare la history dei comandi
3. **Ctrl+C** per copiare testo dal terminale (se supportato dal browser)
4. **F12** per aprire la console e vedere i log di debug

---

## 🚀 Future Features

Possibili miglioramenti futuri:
- [ ] Autocompletamento con Tab per i comandi
- [ ] Preview del messaggio email prima dell'invio
- [ ] Supporto per messaggi email multilinea
- [ ] QR code per contatti mobile
- [ ] Statistiche di utilizzo dei comandi
- [ ] Temi personalizzabili per il terminale

---

**Nota:** Tutte le funzionalità sono completamente client-side e non inviano dati a server esterni.
I tuoi dati rimangono nel tuo browser fino a quando non confermi l'invio tramite il tuo client email.
