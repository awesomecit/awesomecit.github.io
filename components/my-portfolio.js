import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import './nav-bar.js';
import './sections/hero-section.js';
import './sections/tech-skills-section.js';
import './sections/soft-skills-section.js';
import './sections/contacts-section.js';
import './sections/footer-section.js';
import { loadTranslations } from '../translations.js';
import { THEMES, THEME_CONFIG } from '../constants.js';

/**
 * Definisce le lingue supportate nell'applicazione.
 * 
 * @constant {Object}
 * @property {string} IT - Lingua italiana
 * @property {string} EN - Lingua inglese
 */
const LANGUAGES = Object.freeze({
    IT: 'it',
    EN: 'en'
});

class MyPortfolio extends LitElement {
    
    /**
     * Definizione delle proprietà reattive del componente.
     * In Lit, le proprietà statiche dichiarate in questo modo:
     * 1. Diventano osservabili: i cambiamenti triggherano automaticamente il re-rendering
     * 2. Possono essere passate come attributi dall'esterno del componente
     * 3. Supportano la type coercion (conversione automatica del tipo)
     * 
     * @property {String} theme - Tema corrente dell'applicazione ('light' o 'dark')
     * @property {String} currentLang - Lingua corrente dell'interfaccia
     * @property {Boolean} translationsReady - Flag che indica se le traduzioni sono state caricate
     */
    static properties = {
        theme: { type: String },
        currentLang: { type: String },
        translationsReady: { type: Boolean }
    };

    /**
     * Costruttore del componente.
     * In Lit, il costruttore ha alcune regole specifiche:
     * 1. Deve sempre chiamare super() come prima istruzione
     * 2. Non deve accedere agli attributi/proprietà del componente prima di super()
     * 3. Non deve renderizzare contenuto
     * 4. È il posto ideale per inizializzare le proprietà reattive
     * 5. Non deve manipolare il DOM (usare invece firstUpdated/updated)
     */
    constructor() {
        super();
        this.theme = THEMES.DARK;
        this.currentLang = LANGUAGES.IT;
        this.translationsReady = false;
        this._initializeTranslations();
    }

    async _initializeTranslations() {
        await loadTranslations();
        this.translationsReady = true;
        this.requestUpdate();
    }

    /**
     * Sovrascrive il comportamento predefinito di Lit per la creazione del render root.
     * Per default, Lit utilizza Shadow DOM per incapsulare il contenuto del componente.
     * Sovrascrivendo questo metodo e ritornando 'this', il componente renderizzerà
     * direttamente nel Light DOM invece che nel Shadow DOM.
     * 
     * Vantaggi di questo approccio:
     * 1. Permette di utilizzare stili globali (es: Tailwind CSS)
     * 2. Semplifica l'accesso agli elementi del componente dall'esterno
     * 3. Evita la duplicazione degli stili nel Shadow DOM
     * 
     * @returns {Element} this - Il componente stesso come render root
     */
    createRenderRoot() {
        return this;
    }

    /**
     * Il metodo render è il cuore di un componente Lit.
     * Viene chiamato automaticamente quando:
     * 1. Il componente viene inizializzato
     * 2. Una proprietà reattiva cambia
     * 3. Viene chiamato manualmente requestUpdate()
     * 
     * Deve sempre:
     * 1. Ritornare un TemplateResult (creato con html``)
     * 2. Essere una funzione pura (stesso output per stesso input)
     * 3. Non modificare lo stato del componente
     * 
     * @returns {TemplateResult} Il template HTML da renderizzare
     */
    render() {
        if (!this.translationsReady) {
            return html`<div>Loading translations...</div>`;
        }

        const currentThemeConfig = THEME_CONFIG[this.theme];
        console.log('Current theme:', this.theme);
        console.log('Theme config:', currentThemeConfig);
        
        /**
         * Il metodo render utilizza il tag html di Lit.
         * 
         * html è un template literal tag che:
         * 1. Processa il template in modo efficiente, memorizzando i risultati
         * 2. Sanitizza automaticamente il contenuto contro gli attacchi XSS
         * 3. Gestisce l'aggiornamento efficiente del DOM (solo ciò che cambia)
         * 4. Supporta l'interpolazione di valori dinamici
         * 
         * Esempi di utilizzo:
         * html`<div>${this.value}</div>`                    // Interpolazione di valori
         * html`<button @click=${this.handleClick}>`         // Eventi
         * html`<div class=${classMap(classes)}>`            // Direttive
         * html`<div ?hidden=${this.isHidden}>`             // Attributi booleani
         */
        return html`
            <div class="min-h-screen ${currentThemeConfig.mainBackground} ${currentThemeConfig.textColor}">
                <nav-bar 
                    .theme=${this.theme}
                    .currentLang=${this.currentLang}
                    .themeConfig=${currentThemeConfig}
                    @theme-change=${this._handleThemeChange}
                    @language-change=${this._handleLanguageChange}>
                </nav-bar>
                <hero-section 
                    .theme=${this.theme}
                    .currentLang=${this.currentLang}
                    .themeConfig=${currentThemeConfig}>
                </hero-section>
                <tech-skills-section 
                    .theme=${this.theme}
                    .currentLang=${this.currentLang}
                    .themeConfig=${currentThemeConfig}>
                </tech-skills-section>
                <soft-skills-section 
                    .theme=${this.theme}
                    .currentLang=${this.currentLang}
                    .themeConfig=${currentThemeConfig}>
                </soft-skills-section>
                <contacts-section 
                    .theme=${this.theme}
                    .currentLang=${this.currentLang}
                    .themeConfig=${currentThemeConfig}>
                </contacts-section>
                <footer-section 
                    .theme=${this.theme}
                    .currentLang=${this.currentLang}
                    .themeConfig=${currentThemeConfig}>
                </footer-section>
            </div>
        `;
    }

    /**
     * Gestisce il cambio del tema.
     * Non necessita di requestUpdate() perché:
     * 1. 'theme' è una proprietà reattiva (dichiarata in static properties)
     * 2. Lit automaticamente pianifica un aggiornamento quando una proprietà reattiva viene modificata
     * 3. Il cambiamento di this.theme innesca automaticamente il re-rendering
     */
    _handleThemeChange(event) {
        this.theme = event.detail.theme;
    }

    /**
     * Gestisce il cambio della lingua.
     * Qui chiamiamo esplicitamente requestUpdate() perché potrebbero esserci
     * altre logiche o aggiornamenti che dipendono dal cambio di lingua,
     * non direttamente legati alla proprietà currentLang
     */
    _handleLanguageChange(event) {
        this.currentLang = event.detail.language;
        this.requestUpdate();
    }
}

/**
 * Registra il componente personalizzato nel browser.
 * customElements.define() richiede due parametri:
 * 1. Il nome del tag HTML personalizzato (deve contenere un trattino '-')
 * 2. La classe che implementa il componente
 * 
 * Dopo questa registrazione, il componente può essere utilizzato nel HTML come:
 * <my-portfolio></my-portfolio>
 * 
 * Esempio di utilizzo nel HTML:
 * ```html
 * <!DOCTYPE html>
 * <html>
 *   <head>
 *     <script type="module" src="./components/my-portfolio.js"></script>
 *   </head>
 *   <body>
 *     <my-portfolio></my-portfolio>
 *   </body>
 * </html>
 * ```
 */
customElements.define('my-portfolio', MyPortfolio);

