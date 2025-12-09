# Antonio Cittadino - Terminal Portfolio

Un portfolio interattivo in stile Matrix con interfaccia a terminale.

## 🎯 About

Portfolio personale costruito come terminale interattivo Matrix-style. Naviga il mio CV attraverso comandi di terminale per esplorare competenze, esperienze lavorative, progetti e molto altro.

**Live Demo:** [awesomecit.github.io](https://awesomecit.github.io)

## ✨ Features

- 🖥️ **Interfaccia terminale Matrix-style** - Esperienza utente immersiva con effetti visivi
- ⌨️ **Navigazione a comandi** - Esplora il CV con comandi terminale intuitivi
- 📱 **Mobile-first** - Ottimizzato per dispositivi mobile con tastiera touch
- 🔗 **Link interattivi** - CTRL+Click su desktop, tap diretto su mobile
- 📧 **Email integration** - Apri il client email con un click
- 📥 **CV Download** - Scarica il CV in formato PDF
- 🎨 **Effetti Matrix** - Cursore lampeggiante, scanlines, effetti glitch
- 🌐 **Social integration** - Modalità interattiva per profili social

## 🚀 Quick Start

### Test Locale

Apri direttamente nel browser:

```bash
xdg-open index.html 2>/dev/null || echo "file://$(pwd)/index.html"
```

Oppure avvia un server HTTP locale:

```bash
python3 -m http.server 8000
# Poi apri http://localhost:8000 nel browser
```

### Comandi Disponibili

Una volta aperto il terminale, prova questi comandi:

```bash
help                 # Mostra tutti i comandi disponibili
cit --help          # Comandi CV completi
cit --about         # Profilo professionale
cit --skills        # Competenze tecniche
cit --experience    # Esperienza lavorativa
cit --projects      # Portfolio progetti
cit --contact       # Informazioni contatto
cit --download      # Scarica CV PDF
social              # Apri profili social
sendmail            # Componi email
clear               # Pulisci terminale
```

## 🛠️ Tech Stack

**Frontend:** Vanilla JavaScript, HTML5, CSS3  
**Design:** Matrix theme, Terminal UI, Mobile-first responsive  
**Features:** Command-line interface, Touch events, WebSocket ready

## 📱 Mobile Support

- ✅ Tastiera touch nativa
- ✅ Touch events per link e azioni
- ✅ Copy/paste ottimizzato
- ✅ Responsive design
- ✅ Auto-focus input

## 🎨 Features Tecniche

- **Command System**: Architettura basata su Map per estensibilità
- **Interactive Modes**: Sistema a stati per workflow multi-step (social, email)
- **History Navigation**: ArrowUp/Down per navigare comandi precedenti
- **Event-driven**: Gestione eventi keyboard e touch ottimizzata
- **Accessibility**: Supporto screen reader, reduced motion, high contrast

## 📂 Struttura Progetto

```text
.
├── index.html              # Single-page application
├── cv.pdf                  # CV in formato PDF
├── CV_Antonio_Cittadino.pdf
└── README.md
```

## 📄 License

MIT License - Sentiti libero di usare questo template per il tuo portfolio!

## 📞 Contatti

- **Email:** [awesome.cit.dev@gmail.com](mailto:awesome.cit.dev@gmail.com)
- **LinkedIn:** [antonio-cittadino-9362b179](https://linkedin.com/in/antonio-cittadino-9362b179)
- **GitHub:** [awesomecit](https://github.com/awesomecit)
- **Portfolio:** [awesomecit.github.io](https://awesomecit.github.io)

---

⭐ **Se ti piace questo progetto, lascia una stella!**
