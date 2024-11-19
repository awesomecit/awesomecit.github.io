import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class HeroSection extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        const textColor = this.theme === 'dark' ? 'text-gray-300' : 'text-bg-navbar/90';
        
        return html`
            <section class="container mx-auto px-4 pt-32 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center">
                <div class="w-48 h-48 rounded-full bg-white/10 border-4 border-white flex items-center justify-center mb-8">
                    <svg class="w-24 h-24 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                </div>

                <h1 class="${textColor} text-4xl font-bold mb-4">
                    Nome Cognome
                </h1>

                <p class="${textColor} text-xl max-w-2xl">
                    Frontend Developer appassionato di tecnologia e design. Specializzato in sviluppo web moderno con particolare attenzione all'esperienza utente e alle performance.
                </p>
            </section>
        `;
    }
}

customElements.define('hero-section', HeroSection); 