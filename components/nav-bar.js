import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class NavBar extends LitElement {
    static properties = {
        currentLang: { type: String },
        theme: { type: String }
    };

    constructor() {
        super();
        this.currentLang = 'it';
        this.theme = 'light';
    }

    createRenderRoot() {
        return this;
    }

    render() {
        const navBg = this.theme === 'dark' ? 'bg-bg-navbar-dark' : 'bg-bg-navbar';
        
        return html`
            <nav class="fixed top-0 left-0 right-0 z-50 p-2">
                <div class="${navBg} border-2 border-white rounded-lg p-2 transition-colors duration-300">
                    <div class="flex gap-4">
                        <a href="#home" class="text-white px-2 py-1 border-2 border-white rounded hover:bg-white/10">Home</a>
                        <a href="#about" class="text-white px-2 py-1 border-2 border-white rounded hover:bg-white/10">Chi Sono</a>
                        <a href="#tech-skills" class="text-white px-2 py-1 border-2 border-white rounded hover:bg-white/10">Competenze</a>
                        <a href="#contacts" class="text-white px-2 py-1 border-2 border-white rounded hover:bg-white/10">Contatti</a>
                    </div>
                    
                    <div class="flex items-center gap-2">
                        <select @change=${this._handleLanguageChange} 
                                class="bg-transparent border-2 border-white rounded text-white px-1 cursor-pointer">
                            <option value="it" ?selected=${this.currentLang === 'it'}>🇮🇹</option>
                            <option value="en" ?selected=${this.currentLang === 'en'}>🇬🇧</option>
                        </select>
                        
                        <button @click=${this._toggleTheme} 
                                class="bg-transparent border-2 border-white rounded text-white p-1 cursor-pointer hover:bg-white/10">
                            ${this.theme === 'dark' ? '☀️' : '🌙'}
                        </button>
                    </div>
                </div>
            </nav>
        `;
    }

    _handleLanguageChange(e) {
        this.currentLang = e.target.value;
        this.dispatchEvent(new CustomEvent('language-change', {
            detail: { language: this.currentLang },
            bubbles: true,
            composed: true
        }));
    }

    _toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        this.dispatchEvent(new CustomEvent('theme-change', {
            detail: { theme: this.theme },
            bubbles: true,
            composed: true
        }));
    }
}

customElements.define('nav-bar', NavBar); 