import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class Carousel extends LitElement {
    static properties = {
        items: { type: Array },
        rows: { type: Number },
        cols: { type: Number },
        gap: { type: String },
        currentPage: { type: Number },
        theme: { type: String },
        showPageCounter: { type: Boolean }
    };

    constructor() {
        super();
        this.items = [];
        this.rows = 1;
        this.cols = 5;
        this.gap = '1.5rem';
        this.currentPage = 0;
        this.theme = 'dark';
        this.showPageCounter = true;
    }

    createRenderRoot() {
        return this;
    }

    get totalPages() {
        const itemsPerPage = this.rows * this.cols;
        return Math.ceil(this.items.length / itemsPerPage);
    }

    get currentItems() {
        const itemsPerPage = this.rows * this.cols;
        const start = this.currentPage * itemsPerPage;
        return this.items.slice(start, start + itemsPerPage);
    }

    nextPage() {
        if (this.currentPage < this.totalPages - 1) {
            this.currentPage++;
        }
    }

    prevPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
        }
    }

    render() {
        const textColor = this.theme === 'dark' ? 'text-white' : 'text-bg-navbar/90';
        const backgroundStyle = this.theme === 'dark' ? 
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
                    ${this.currentItems.map(item => html`
                        <div class="p-4 ${backgroundStyle} rounded-lg border hover:bg-white/10 transition-colors duration-300">
                            <div class="${textColor} text-center">
                                ${item}
                            </div>
                        </div>
                    `)}
                </div>

                <!-- Navigation Buttons -->
                <div class="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                        @click=${this.prevPage}
                        class="${textColor} w-10 h-10 rounded-full flex items-center justify-center 
                        ${this.currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'} 
                        ${backgroundStyle} transition-all duration-300"
                        ?disabled=${this.currentPage === 0}>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                    </button>
                </div>

                <div class="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                        @click=${this.nextPage}
                        class="${textColor} w-10 h-10 rounded-full flex items-center justify-center 
                        ${this.currentPage === this.totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'} 
                        ${backgroundStyle} transition-all duration-300"
                        ?disabled=${this.currentPage === this.totalPages - 1}>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>

                <!-- Page Counter -->
                ${this.showPageCounter ? html`
                    <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                        <span class="${textColor}">
                            ${this.currentPage + 1} / ${this.totalPages}
                        </span>
                    </div>
                ` : ''}
            </div>
        `;
    }
}

customElements.define('my-carousel', Carousel); 