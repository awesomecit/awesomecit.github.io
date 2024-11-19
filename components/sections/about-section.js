import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class AboutSection extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        const textColor = this.theme === 'dark' ? 'text-bg-navbar-dark' : 'text-bg-main';
        return html`
            <section id="about" class="container mx-auto px-4 py-8 flex flex-col items-center text-center">
                <div class="w-full p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700">
                    <h2 class="${textColor} text-3xl font-bold mb-8">About</h2>
                    <!-- Contenuto About -->
                </div>
            </section>
        `;
    }
}

customElements.define('about-section', AboutSection); 