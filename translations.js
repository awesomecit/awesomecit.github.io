import { LANGUAGE_CODES, DEFAULT_LANGUAGE } from './constants.js';

// Esportiamo l'oggetto delle traduzioni
export const translations = {
    it: null,
    en: null
};

let translationsLoaded = false;
let loadingPromise = null;

async function loadTranslationFile(langCode) {
    try {
        const response = await fetch(`translations/${langCode}.json`);
        if (!response.ok) {
            console.warn(`Translation file for "${langCode}" not found or not accessible`);
            return null;
        }
        return await response.json();
    } catch (error) {
        console.error(`Error loading translations for "${langCode}":`, error);
        return null;
    }
}

export function loadTranslations() {
    if (loadingPromise) {
        return loadingPromise;
    }

    loadingPromise = new Promise(async (resolve) => {
        try {
            const loadResults = await Promise.all(
                Object.values(LANGUAGE_CODES).map(async langCode => {
                    const translationData = await loadTranslationFile(langCode);
                    if (translationData) {
                        translations[langCode] = translationData;
                    }
                    return { langCode, success: !!translationData };
                })
            );

            // Log risultati del caricamento
            loadResults.forEach(({ langCode, success }) => {
                console.log(`Translations for "${langCode}": ${success ? 'loaded' : 'failed'}`);
            });

            translationsLoaded = true;
            resolve();
        } catch (error) {
            console.error('Error in translations loading:', error);
            resolve();
        }
    });

    return loadingPromise;
}

export function translate(key, lang = DEFAULT_LANGUAGE) {
    if (!translations[lang] || !translations[lang][key]) {
        console.warn(`Translation missing for key "${key}" in language "${lang}"`);
        return key;
    }
    return translations[lang][key] || key;
}

// Inizializzazione immediata
loadTranslations();

