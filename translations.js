// Esportiamo l'oggetto delle traduzioni
export const translations = {
    it: null,
    en: null
};

let translationsLoaded = false;
let loadingPromise = null;

export async function loadTranslations() {
    if (translationsLoaded) return;
    
    if (loadingPromise) {
        return loadingPromise;
    }

    loadingPromise = new Promise(async (resolve) => {
        try {
            const [itResponse, enResponse] = await Promise.all([
                fetch('translations/it.json'),
                fetch('translations/en.json')
            ]);
            
            translations.it = await itResponse.json();
            translations.en = await enResponse.json();
            translationsLoaded = true;
            resolve();
        } catch (error) {
            console.error('Errore nel caricamento delle traduzioni:', error);
            resolve();
        }
    });

    return loadingPromise;
}

export function translate(key, lang = 'it') {
    if (!translations[lang]) {
        return key;
    }
    return translations[lang][key] || key;
}

// Inizializzazione immediata
loadTranslations();

