import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class NavBar extends LitElement {
    static properties = {
        currentLang: { type: String },
        theme: { type: String },
        isMenuOpen: { type: Boolean },
        translations: { type: Object }
    };

    constructor() {
        super();
        this.currentLang = 'it';
        this.theme = 'light';
        this.isMenuOpen = false;
        this.translations = window.translations[this.currentLang];
    }

    createRenderRoot() {
        return this;
    }

    render() {
        const navBg = this.theme === 'dark' ? 'bg-bg-navbar-dark' : 'bg-bg-navbar';
        const t = this.translations;
        
        return html`
            <nav class="fixed top-0 left-0 right-0 z-50 m-2">
                <div class="${navBg} border-2 border-white rounded-lg transition-colors duration-300">
                    <div class="px-4 h-12 flex justify-between items-center">
                        <button @click=${this._toggleMenu} 
                                class="md:hidden text-white hover:bg-white/10 p-2 rounded">
                            ${this.isMenuOpen ? 'X' : '☰'}
                        </button>

                        <div class="hidden md:flex items-center space-x-3">
                            <a href="#home" class="text-white px-3 py-1.5 rounded hover:bg-white/10">${t.HOME}</a>
                            <a href="#about" class="text-white px-3 py-1.5 rounded hover:bg-white/10">${t.ABOUT}</a>
                            <a href="#tech-skills" class="text-white px-3 py-1.5 rounded hover:bg-white/10">${t.SKILLS}</a>
                            <a href="#contacts" class="text-white px-3 py-1.5 rounded hover:bg-white/10">${t.CONTACTS}</a>
                        </div>
                        
                        <div class="flex items-center space-x-3">
                            <select @change=${this._handleLanguageChange} 
                                    class="bg-transparent text-white px-3 py-1.5 cursor-pointer hover:bg-white/10 rounded">
                                <option value="it" ?selected=${this.currentLang === 'it'}>🇮🇹</option>
                                <option value="en" ?selected=${this.currentLang === 'en'}>🇬🇧</option>
                            </select>
                            
                            <button @click=${this._toggleTheme} 
                                    class="bg-transparent text-white px-3 py-1.5 cursor-pointer hover:bg-white/10 rounded">
                                ${this.theme === 'dark' ? '☀️' : '🌙'}
                            </button>
                        </div>
                    </div>

                    ${this.isMenuOpen ? html`
                        <div class="md:hidden px-4 py-2 border-t-2 border-white">
                            <div class="flex flex-col space-y-2">
                                <a href="#home" class="text-white px-3 py-1.5 rounded hover:bg-white/10">${t.HOME}</a>
                                <a href="#about" class="text-white px-3 py-1.5 rounded hover:bg-white/10">${t.ABOUT}</a>
                                <a href="#tech-skills" class="text-white px-3 py-1.5 rounded hover:bg-white/10">${t.SKILLS}</a>
                                <a href="#contacts" class="text-white px-3 py-1.5 rounded hover:bg-white/10">${t.CONTACTS}</a>
                            </div>
                        </div>
                    ` : ''}
                </div>
            </nav>
        `;
    }

    _handleLanguageChange(e) {
        this.currentLang = e.target.value;
        this.translations = window.translations[this.currentLang];
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

    _toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}

customElements.define('nav-bar', NavBar); 