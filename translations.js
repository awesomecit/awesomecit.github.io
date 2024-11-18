// Valori comuni per tutte le lingue
const common = {
    DEVELOPER_NAME: "Marco Rossi",
    DEVELOPER_TITLE: "Full Stack Developer",
    ABOUT_TEXT: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
};

// Definizione delle traduzioni specifiche per lingua
const translations = {
    it: {
        PORTFOLIO_TITLE: "Portfolio",
        HOME: "Home",
        ABOUT: "Chi Sono",
        SKILLS: "Competenze",
        TECH_SKILLS: "Competenze Tecniche",
        SOFT_SKILLS: "Competenze Trasversali",
        CONTACTS: "Contatti",
        COPYRIGHT: "Tutti i diritti riservati",
        ...common  // Spread operator per includere i valori comuni
    },
    en: {
        PORTFOLIO_TITLE: "Portfolio",
        HOME: "Home",
        ABOUT: "About",
        SKILLS: "Skills",
        TECH_SKILLS: "Technical Skills",
        SOFT_SKILLS: "Soft Skills",
        CONTACTS: "Contacts",
        COPYRIGHT: "All rights reserved",
        ...common  // Spread operator per includere i valori comuni
    }
};

// Funzione per la traduzione
function translatePage(language) {
    console.log('Translating to:', language);
    
    // Verifica che la lingua selezionata esista nelle traduzioni
    if (!translations[language]) {
        console.error('Language not found:', language);
        return;
    }

    // Ottieni le traduzioni per la lingua selezionata
    const currentTranslations = translations[language];

    // Trova tutti gli elementi con attributo data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (currentTranslations[key]) {
            element.textContent = currentTranslations[key];
            console.log(`Translated ${key} to: ${currentTranslations[key]}`);
        } else {
            console.warn(`Translation not found for key: ${key}`);
        }
    });
}

// Rendi disponibili le funzioni e le variabili globalmente
window.translations = translations;
window.translatePage = translatePage; 