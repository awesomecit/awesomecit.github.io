import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class Carousel extends LitElement {
    static properties = {
        items: { type: Array },
        rows: { type: Number },
        cols: { type: Number },
        gap: { type: String },
        currentPage: { type: Number },
        theme: { type: String }
    };

    constructor() {
        super();
        this.items = [];
        this.rows = 1;
        this.cols = 5;
        this.gap = '1.5rem';
        this.currentPage = 0;
        this.theme = 'dark';
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
            <div class="w-full">
                <!-- Navigation -->
                <div class="flex justify-between items-center mb-4">
                    <button 
                        @click=${this.prevPage}
                        class="${textColor} px-4 py-2 rounded-lg ${this.currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'}"
                        ?disabled=${this.currentPage === 0}>
                        ←
                    </button>
                    <span class="${textColor}">
                        ${this.currentPage + 1} / ${this.totalPages}
                    </span>
                    <button 
                        @click=${this.nextPage}
                        class="${textColor} px-4 py-2 rounded-lg ${this.currentPage === this.totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'}"
                        ?disabled=${this.currentPage === this.totalPages - 1}>
                        →
                    </button>
                </div>

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
            </div>
        `;
    }
}

customElements.define('my-carousel', Carousel); 