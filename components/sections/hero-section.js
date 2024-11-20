import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { translate } from '../../translations.js';

export class HeroSection extends LitElement {
    static properties = {
        theme: { type: String },
        currentLang: { type: String }
    };

    constructor() {
        super();
        this.theme = 'light';
        this.currentLang = 'it';
    }

    // Questo permette di mantenere gli stili Tailwind
    createRenderRoot() {
        return this;
    }

    render() {
        const textColor = this.theme === 'dark' ? 'text-gray-300' : 'text-bg-navbar/90';
        
        return html`
            <section class="container mx-auto px-4 pt-32 min-h-screen flex flex-col items-center justify-center text-center mb-16">
                <div class="w-48 h-48 rounded-full bg-white/10 border-4 border-white flex items-center justify-center mb-8">
                    <svg class="w-24 h-24 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                </div>

                <h1 class="${textColor} text-4xl font-bold mb-4">
                    ${translate('DEVELOPER_NAME', this.currentLang)}
                </h1>
                <p class="${textColor} text-xl">
                    ${translate('DEVELOPER_TITLE', this.currentLang)}
                </p>
                <p class="${textColor} text-xl max-w-2xl mt-4">
                    ${translate('ABOUT_TEXT', this.currentLang)}
                </p>
            </section>
        `;
    }
}

customElements.define('hero-section', HeroSection); 