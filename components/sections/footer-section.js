import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { translate } from '../../translations.js';

export class FooterSection extends LitElement {
    static properties = {
        theme: { type: String },
        currentLang: { type: String }
    };

    constructor() {
        super();
        this.theme = 'light';
        this.currentLang = 'it';
    }

    createRenderRoot() {
        return this;
    }

    render() {
        const textColor = this.theme === 'dark' ? 'text-gray-300' : 'text-bg-navbar/90';
        const currentYear = new Date().getFullYear();

        return html`
            <footer class="container mx-auto px-4 py-8 text-center">
                <p class="${textColor}">
                    © ${currentYear} ${translate('DEVELOPER_NAME', this.currentLang)} - 
                    ${translate('COPYRIGHT', this.currentLang)}
                </p>
            </footer>
        `;
    }
}

customElements.define('footer-section', FooterSection); 