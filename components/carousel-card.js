import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class CarouselCard extends LitElement {
    static properties = {
        content: { type: String },
        theme: { type: String },
        backgroundColor: { type: String },
        textColor: { type: String },
        backgroundOpacity: { type: String },
        hoverEffect: { type: Boolean }
    };

    constructor() {
        super();
        this.content = '';
        this.theme = 'dark';
        this.backgroundColor = this.theme === 'dark' ? 'bg-gray-900' : 'bg-white';
        this.textColor = this.theme === 'dark' ? 'text-white' : 'text-bg-navbar/90';
        this.backgroundOpacity = '80';
        this.hoverEffect = true;
    }

    createRenderRoot() {
        return this;
    }

    render() {
        const backgroundStyle = `${this.backgroundColor}/${this.backgroundOpacity}`;
        const borderColor = this.theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
        const hoverClass = this.hoverEffect ? 'hover:bg-white/10' : '';

        return html`
            <div class="p-4 bg-${backgroundStyle} rounded-lg border ${borderColor} ${hoverClass} transition-colors duration-300">
                <div class="${this.textColor} text-center">
                    ${this.content}
                </div>
            </div>
        `;
    }
}

customElements.define('carousel-card', CarouselCard); 