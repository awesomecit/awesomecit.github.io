import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class FooterSection extends LitElement {
    static properties = {
        theme: { type: String }
    };

    createRenderRoot() {
        return this;
    }

    render() {
        const textColor = this.theme === 'dark' ? 'text-bg-navbar' : 'text-bg-navbar';
        
        return html`
            <footer class="container mx-auto px-4 py-8 text-center">
                <div class="w-full p-6">
                    <p class="${textColor} font-bold text-sm">© ${new Date().getFullYear()} - Tutti i diritti riservati</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-section', FooterSection); 