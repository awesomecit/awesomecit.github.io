import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import './carousel-card.js';

export class Carousel extends LitElement {
    static properties = {
        items: { type: Array },
        rows: { type: Number },
        cols: { type: Number },
        gap: { type: String },
        currentIndex: { type: Number },
        theme: { type: String },
        showPageCounter: { type: Boolean },
        cardProps: { type: Object },
        autoScroll: { type: Number }
    };

    constructor() {
        super();
        this.items = [];
        this.rows = 1;
        this.cols = 5;
        this.gap = '1.5rem';
        this.currentIndex = 0;
        this.theme = 'dark';
        this.showPageCounter = true;
        this.autoScroll = 0;
        this.cardProps = {
            backgroundColor: 'bg-gray-900',
            textColor: 'text-white',
            backgroundOpacity: '80',
            hoverEffect: true
        };
        this._intervalId = null;
    }

    connectedCallback() {
        super.connectedCallback();
        this.startAutoScroll();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.stopAutoScroll();
    }

    updated(changedProperties) {
        if (changedProperties.has('autoScroll')) {
            this.stopAutoScroll();
            this.startAutoScroll();
        }
    }

    startAutoScroll() {
        if (this.autoScroll > 0) {
            this._intervalId = setInterval(() => {
                this.nextPage();
            }, this.autoScroll * 1000);
        }
    }

    stopAutoScroll() {
        if (this._intervalId) {
            clearInterval(this._intervalId);
            this._intervalId = null;
        }
    }

    createRenderRoot() {
        return this;
    }

    get visibleItems() {
        const result = [];
        const totalItems = this.items.length;
        
        // Prendiamo cols elementi a partire da currentIndex
        for (let i = 0; i < this.cols; i++) {
            const index = (this.currentIndex + i) % totalItems;
            result.push(this.items[index]);
        }
        
        return result;
    }

    nextPage() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
    }

    prevPage() {
        this.currentIndex = this.currentIndex === 0 ? 
            this.items.length - 1 : 
            this.currentIndex - 1;
    }

    render() {
        const textColor = this.theme === 'dark' ? 'text-white' : 'text-bg-navbar/90';
        const buttonBgStyle = this.theme === 'dark' ? 
            'bg-gray-900/80 border-gray-700' : 
            'bg-white/80 border-gray-200';

        const gridStyle = `
            display: grid;
            grid-template-columns: repeat(${this.cols}, 1fr);
            grid-template-rows: repeat(${this.rows}, 1fr);
            gap: ${this.gap};
        `;

        return html`
            <div class="w-full relative group px-16">
                <!-- Grid Container -->
                <div style=${gridStyle} class="w-full">
                    ${this.visibleItems.map(item => html`
                        <carousel-card
                            .content=${item}
                            .theme=${this.theme}
                            .backgroundColor=${this.cardProps.backgroundColor}
                            .textColor=${this.cardProps.textColor}
                            .backgroundOpacity=${this.cardProps.backgroundOpacity}
                            .hoverEffect=${this.cardProps.hoverEffect}>
                        </carousel-card>
                    `)}
                </div>

                <!-- Navigation Buttons -->
                <div class="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                        @click=${this.prevPage}
                        class="${textColor} w-10 h-10 rounded-full flex items-center justify-center 
                        hover:bg-white/10 ${buttonBgStyle} transition-all duration-300">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                    </button>
                </div>

                <div class="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                        @click=${this.nextPage}
                        class="${textColor} w-10 h-10 rounded-full flex items-center justify-center 
                        hover:bg-white/10 ${buttonBgStyle} transition-all duration-300">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>

                <!-- Page Counter -->
                ${this.showPageCounter ? html`
                    <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                        <span class="${textColor}">
                            ${this.currentIndex + 1} / ${this.items.length}
                        </span>
                    </div>
                ` : ''}
            </div>
        `;
    }
}

customElements.define('my-carousel', Carousel); 