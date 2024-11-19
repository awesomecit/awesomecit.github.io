import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import './nav-bar.js';
import './sections/hero-section.js';
// import './sections/about-section.js';  // Commenta questa riga
import './sections/tech-skills-section.js';
import './sections/soft-skills-section.js';
import './sections/contacts-section.js';
import './sections/footer-section.js';

class MyPortfolio extends LitElement {
    static properties = {
        theme: { type: String }
    };

    constructor() {
        super();
        this.theme = 'light';
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class="min-h-screen bg-bg-main dark:bg-bg-main-dark ${this.theme === 'dark' ? 'dark' : ''}">
                <nav-bar 
                    .theme=${this.theme} 
                    .currentLang=${this.currentLang}
                    @theme-change=${this._handleThemeChange}
                    @language-change=${this._handleLanguageChange}>
                </nav-bar>
                <hero-section .theme=${this.theme}></hero-section>
                <tech-skills-section .theme=${this.theme}></tech-skills-section>
                <soft-skills-section .theme=${this.theme}></soft-skills-section>
                <contacts-section .theme=${this.theme}></contacts-section>
                <footer-section .theme=${this.theme}></footer-section>
            </div>
        `;
    }

    _handleThemeChange(event) {
        this.theme = event.detail.theme;
    }
}

customElements.define('my-portfolio', MyPortfolio);

