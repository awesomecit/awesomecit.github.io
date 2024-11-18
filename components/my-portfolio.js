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
        const mainBg = this.theme === 'dark' ? 'bg-bg-main-dark' : 'bg-bg-main';
        
        return html`
            <main class="${mainBg} min-h-screen transition-colors duration-300">
                <nav-bar 
                    .theme=${this.theme}
                    @theme-change=${this._handleThemeChange}>
                </nav-bar>
                <div class="container mx-auto px-4 pt-16">
                    <div class="flex items-center justify-center min-h-[calc(100vh-4rem)]">
                        <h1 class="text-4xl font-bold text-white">
                            Hello World
                        </h1>
                    </div>
                </div>
            </main>
        `;
    }

    _handleThemeChange(e) {
        this.theme = e.detail.theme;
    }
}

customElements.define('my-portfolio', MyPortfolio);
