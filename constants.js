
/**
 * Definisce i temi disponibili nell'applicazione.
 * L'oggetto è "congelato" tramite Object.freeze() per:
 * 1. Garantire l'immutabilità: impedisce modifiche alle proprietà esistenti
 * 2. Sicurezza: previene l'aggiunta o eliminazione di proprietà
 * 3. Chiarezza: comunica agli sviluppatori che è una collezione di costanti
 * 4. Prestazioni: permette possibili ottimizzazioni del browser
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
 * Definisce le configurazioni specifiche per ogni tema.
 * Oggetto immutabile che contiene tutte le classi CSS e le configurazioni
 * per ciascun tema dell'applicazione.
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