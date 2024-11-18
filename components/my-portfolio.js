import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import './nav-bar.js';

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
        const bgColor = this.theme === 'dark' ? 'bg-bg-main-dark' : 'bg-bg-main';
        
        return html`
            <main class="min-h-screen ${bgColor} transition-colors duration-300">
                <nav-bar 
                    .theme=${this.theme}
                    @theme-change=${this._handleThemeChange}>
                </nav-bar>
                <div class="container mx-auto px-4 pt-16">
                    <div class="flex items-center justify-center min-h-[calc(100vh-4rem)]">
                        <div class="w-48 h-48 rounded-full bg-white/10 border-4 border-white flex items-center justify-center">
                            <svg class="w-24 h-24 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </main>
        `;
    }

    _handleThemeChange(event) {
        this.theme = event.detail.theme;
    }
}

customElements.define('my-portfolio', MyPortfolio);
