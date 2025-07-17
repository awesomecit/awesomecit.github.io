# Guida per la Creazione di Pagina GitHub.io Aziendale (contenuti aggiornati in inglese su index.html)

## 1. STRUTTURA GENERALE DEL SITO

### Architettura delle Pagine
- **Homepage** (`index.html`) - Presentazione principale dell'azienda
- **Chi Siamo** (`about.html`) - Storia, valori e mission aziendale  
- **Team** (`team.html`) - Presentazione dei membri del team
- **Progetti** (`projects.html`) - Portfolio dei progetti realizzati
- **Contatti** (`contact.html`) - Informazioni di contatto e form

### Layout Responsive
- Design mobile-first con breakpoint per tablet e desktop
- Griglia CSS flessibile (CSS Grid o Flexbox)
- Immagini responsive e ottimizzate

## 2. CONTENUTI PER OGNI SEZIONE

### Homepage
**Elementi essenziali:**
- Header con logo aziendale e menu di navigazione (vedi index.html per versione inglese)
- Hero section con slogan/tagline principale (tradotto in inglese)
- Breve presentazione aziendale (in inglese)
- Sezione servizi/competenze principali (tutte le soluzioni sono ora in inglese su index.html)
- Call-to-action per contatti
- Footer con link social e informazioni base

**Tono e stile:**
- Professionale, internazionale, chiaro e diretto

### Sezione Chi Siamo
**Contenuti da includere:**
- Storia dell'azienda (quando e perché è nata)
- Mission aziendale (il nostro scopo)
- Vision (dove vogliamo arrivare)
- Valori aziendali (3-5 principi guida)
- Foto dell'ufficio/sede (se applicabile)

### Sezione Team
**Per ogni membro:**
- Foto professionale (formato quadrato, 300x300px minimo)
- Nome e ruolo/posizione
- Breve bio professionale (2-3 righe)
- Competenze principali
- Link ai profili social professionali (LinkedIn, GitHub)
- Email di contatto (opzionale)

**Layout suggerito:**
- Griglia responsive con card per ogni membro
- Effetti hover per maggiore interattività

### Sezione Progetti
**Per ogni progetto:**
- Titolo del progetto
- Descrizione breve (1-2 paragrafi)
- Tecnologie utilizzate (tag/badge)
- Screenshot o immagini rappresentative
- Link al progetto live (se disponibile)
- Link al repository GitHub
- Durata del progetto
- Ruolo dell'azienda nel progetto

**Organizzazione:**
- Filtri per categoria/tecnologia
- Ordinamento per data (più recenti primi)
- Massimo 6-8 progetti in evidenza

---

**Nota:** Tutti i contenuti testuali della homepage sono ora disponibili in inglese su index.html. Questo file rimane la guida di riferimento in italiano per la struttura e i requisiti.

## 3. SPECIFICHE TECNICHE

### Framework e Tecnologie
- **HTML5** semantico con tag appropriati
- **CSS3** con variabili CSS custom per il design system
- **JavaScript vanilla** per interazioni base
- **GitHub Pages** per l'hosting
- Opzionale: Jekyll per generazione statica

### Design System
**Palette colori:**
- Colore primario (brand)
- Colore secondario 
- Grigio per testi
- Bianco/nero per contrasti

**Typography:**
- Font principale per titoli (Google Fonts)
- Font per testi corpo leggibile
- Scala tipografica coerente (H1, H2, H3, etc.)

**Componenti riutilizzabili:**
- Buttons con stati hover/active
- Card component per progetti e team
- Form styling consistente

### Performance e SEO
- Ottimizzazione immagini (WebP quando possibile)
- Meta tag appropriati per ogni pagina
- Schema.org markup per l'azienda
- Sitemap.xml
- Robots.txt
- Favicon e touch icons

## 4. ISTRUZIONI PER LO SVILUPPO

### Setup Iniziale
1. Creare repository GitHub con nome `[username].github.io`
2. Configurare GitHub Pages nelle impostazioni
3. Struttura cartelle:
   ```
   /
   ├── index.html
   ├── about.html
   ├── team.html
   ├── projects.html
   ├── contact.html
   ├── css/
   │   ├── style.css
   │   └── responsive.css
   ├── js/
   │   └── main.js
   ├── images/
   │   ├── team/
   │   ├── projects/
   │   └── logos/
   └── assets/
   ```

### Checklist Qualità
- [ ] Validazione HTML W3C
- [ ] Test responsività su dispositivi diversi
- [ ] Verifica accessibilità (contrasti, alt text)
- [ ] Test velocità caricamento (PageSpeed Insights)
- [ ] Cross-browser compatibility
- [ ] Form funzionanti
- [ ] Link interni ed esterni testati

## 5. CONTENUTI DA PREPARARE

### Testi
- [ ] Slogan/tagline aziendale
- [ ] Descrizione azienda (50-100 parole)
- [ ] Mission statement
- [ ] Lista servizi/competenze
- [ ] Bio di ogni membro del team
- [ ] Descrizioni progetti

### Immagini Necessarie
- [ ] Logo aziendale (SVG + PNG)
- [ ] Foto professionali team membri
- [ ] Screenshot progetti
- [ ] Immagini hero/banner
- [ ] Icone per servizi

### Informazioni Contatto
- [ ] Indirizzo email principale
- [ ] Numero telefono (se applicabile)
- [ ] Indirizzo fisico (se applicabile)
- [ ] Link social media
- [ ] Orari di lavoro

## 6. EXAMPLE PROMPT PER COPILOT

"Crea una pagina GitHub.io professionale per la nostra azienda [NOME AZIENDA] seguendo questa struttura:

**Homepage:** Include un header con logo e menu, una hero section con il nostro slogan '[INSERIRE SLOGAN]', una breve presentazione aziendale, una sezione con i nostri servizi principali: [LISTA SERVIZI], e un footer con contatti.

**Design:** Utilizza un design moderno e responsive con palette colori [COLORI BRAND], typography pulita, e componenti riutilizzabili. Implementa CSS Grid/Flexbox per il layout.

**Sezioni:** Crea pagine separate per Chi Siamo (mission: [MISSION]), Team ([NUMERO] membri), Progetti (portfolio di [NUMERO] progetti), e Contatti.

**Tecnologie:** HTML5 semantico, CSS3 moderno, JavaScript vanilla, ottimizzato per GitHub Pages.

Inizia con la homepage e chiedi conferma prima di procedere con le altre sezioni."

## 7. TIMELINE SUGGERITA

- **Settimana 1:** Preparazione contenuti e asset
- **Settimana 2:** Sviluppo homepage e struttura base
- **Settimana 3:** Implementazione sezioni interne
- **Settimana 4:** Testing, ottimizzazioni e lancio

---

**Note:** Personalizza questo documento inserendo le informazioni specifiche della tua azienda prima di utilizzarlo con Copilot. Mantieni sempre backup del codice e testa ogni modifica prima della pubblicazione.