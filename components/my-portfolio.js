import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import './nav-bar.js';
import './sections/hero-section.js';
import './sections/tech-skills-section.js';
import './sections/soft-skills-section.js';
import './sections/contacts-section.js';
import './sections/footer-section.js';
import { loadTranslations } from '../translations.js';

class MyPortfolio extends LitElement {
    static properties = {
        theme: { type: String },
        currentLang: { type: String },
        translationsReady: { type: Boolean }
    };

    constructor() {
        super();
        this.theme = 'dark';
        this.currentLang = 'it';
        this.translationsReady = false;
        this._initializeTranslations();
    }

    async _initializeTranslations() {
        await loadTranslations();
        this.translationsReady = true;
        this.requestUpdate();
    }

    createRenderRoot() {
        return this;
    }

    render() {
        if (!this.translationsReady) {
            return html`<div>Loading...</div>`;
        }

        return html`
            <div class="min-h-screen bg-bg-main dark:bg-bg-main-dark ${this.theme === 'dark' ? 'dark' : ''}">
                <nav-bar 
                    .theme=${this.theme}
                    .currentLang=${this.currentLang}
                    @theme-change=${this._handleThemeChange}
                    @language-change=${this._handleLanguageChange}>
                </nav-bar>
                <hero-section 
                    .theme=${this.theme}
                    .currentLang=${this.currentLang}>
                </hero-section>
                <tech-skills-section 
                    .theme=${this.theme}
                    .currentLang=${this.currentLang}>
                </tech-skills-section>
                <soft-skills-section 
                    .theme=${this.theme}
                    .currentLang=${this.currentLang}>
                </soft-skills-section>
                <contacts-section 
                    .theme=${this.theme}
                    .currentLang=${this.currentLang}>
                </contacts-section>
                <footer-section 
                    .theme=${this.theme}
                    .currentLang=${this.currentLang}>
                </footer-section>
            </div>
        `;
    }

    _handleThemeChange(event) {
        this.theme = event.detail.theme;
    }

    _handleLanguageChange(event) {
        this.currentLang = event.detail.language;
        this.requestUpdate();
    }
}

customElements.define('my-portfolio', MyPortfolio);

