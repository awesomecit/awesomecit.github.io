/**
 * Definisce i temi disponibili nell'applicazione.
 * L'oggetto è "congelato" tramite Object.freeze() per:
 * 1. Garantire l'immutabilità: impedisce modifiche alle proprietà esistenti
 * 2. Sicurezza: previene l'aggiunta o eliminazione di proprietà
 * 3. Chiarezza: comunica agli sviluppatori che è una collezione di costanti
 * 4. Prestazioni: permette possibili ottimizzazioni del browser
 * 
 * Esempi di protezione:
 * THEMES.LIGHT = 'nuovo-valore';  // Errore in strict mode
 * THEMES.NUOVO_TEMA = 'altro';    // Errore in strict mode
 * delete THEMES.DARK;             // Errore in strict mode
 * 
 * @constant {Object}
 * @property {string} LIGHT - Tema chiaro dell'applicazione
 * @property {string} DARK - Tema scuro dell'applicazione
 */
export const THEMES = Object.freeze({
    LIGHT: 'LIGHT',
    DARK: 'DARK'
});

/**
 * Definisce le lingue supportate nell'applicazione (UI).
 * 
 * @constant {Object}
 * @property {string} IT - Lingua italiana con emoji bandiera
 * @property {string} EN - Lingua inglese con emoji bandiera (US per inglese internazionale)
 */
export const LANGUAGES = Object.freeze({
    IT: '🇮🇹',
    EN: '🇺🇸'
});

/**
 * Definisce i codici delle lingue per le traduzioni.
 * 
 * @constant {Object}
 * @property {string} IT - Codice per italiano
 * @property {string} EN - Codice per inglese
 */
export const LANGUAGE_CODES = Object.freeze({
    IT: 'it',
    EN: 'en'
});

/**
 * Lingua di default dell'applicazione
 */
export const DEFAULT_LANGUAGE = LANGUAGE_CODES.IT;

/**
 * Definisce le configurazioni specifiche per ogni tema.
 * Oggetto immutabile che contiene tutte le classi CSS e le configurazioni
 * per ciascun tema dell'applicazione.
 * 
 * @constant {Object}
 * @property {Object} LIGHT - Configurazione per il tema chiaro
 * @property {Object} DARK - Configurazione per il tema scuro
 */
export const THEME_CONFIG = Object.freeze({
    LIGHT: {
        mainBackground: 'bg-bg-main',
        textColor: 'text-text-primary',
        headerBackground: 'bg-header-light',
        buttonClass: 'bg-button-light hover:bg-button-light-hover',
        cardBackground: 'bg-card-light'
    },
    DARK: {
        mainBackground: 'bg-bg-main-dark',
        textColor: 'text-text-primary-dark',
        headerBackground: 'bg-header-dark',
        buttonClass: 'bg-button-dark hover:bg-button-dark-hover',
        cardBackground: 'bg-card-dark'
    }
}); 